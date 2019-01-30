const record = require('node-record-lpcm16');
const speech = require('@google-cloud/speech');
console.log(speech)

var letterMatch = new RegExp("^letter|Letter$")
var stopMatch = new RegExp("^Stop|stop$")
var newMatch = new RegExp("^New Game|new game|New game|new Game$")

var fs = require('fs')


module.exports = {
  recordAudio : async function(req, res){
    writeFile(req, res)
  }
}


async function writeFile(req, res){
  var returnToClient;
  var fileID = makeid()
  var filePath = './server/audio/' + fileID + '.wav'
  var file = fs.createWriteStream('./server/audio/' + fileID + '.wav', { encoding: 'base64' })
      
    record.start({
      sampleRate: 44100,
      verbose: true,
      silence: '0.3',
    })

    .pipe(file)
    .on('close', async () => {
      returnToClient = await getGoogleTranscription(filePath)
        
      console.log('final return is ', returnToClient)
      res.json({message : returnToClient})
      fs.unlink(filePath + '', (err) => {
        if (err) throw err;
        console.log(filePath + ' was deleted');
      });
      
    })
}

async function getGoogleTranscription(input) {
    var output = ''
  
    const phrases = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Letter", "Stop", "New Game"
    ]

    const client = new speech.SpeechClient({
      projectId: 'hangman-1548692935936',
      keyFilename: '/Users/bbauer/Desktop/hangman/keys/hangman-6a460fc89b8d.1.json'
    });
    const filename = input
    const encoding = 'LINEAR16';
    const sampleRateHertz = 44100;
    const languageCode = 'en-US';

    const config = {
      sampleRateHertz: sampleRateHertz,
      languageCode: languageCode,
      phrases : phrases
      // projectID : "hangman-1548692935936",
      // keyFilename : "/Users/bbauer/Desktop/hangman/keys/hangman-6a460fc89b8d.1.json"
    };
    const audio = {
      content: fs.readFileSync(filename).toString('base64'),
    };

    const request = {
      config: config,
      audio: audio,
    };

    const [response] = await client.recognize(request);
    
    const returnToWrite = processSpeech(response.results[0])
    return returnToWrite
}


function processSpeech(input){
    console.log(input)
    var returnToSpeech;
    if (input == undefined){
      return "Error"
    }

    var command = input.alternatives[0].transcript

    if (command[0] == " "){
      command = command.slice(1, command.length)
    }

    let tests = {letter : letterMatch.test(command), stop : stopMatch.test(command), new : newMatch.test(command)}

    if (tests.stop){
      returnToSpeech = "Stop"
    }

    else if (tests.letter){
      returnToSpeech = {letter : command[command.length - 1]}
    }
    
    else if (tests.new){
      returnToSpeech = "New"
    }

    else {
      returnToSpeech = "Error"
    }

    return returnToSpeech
}


function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
