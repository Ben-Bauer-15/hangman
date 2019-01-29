const record = require('node-record-lpcm16');
const speech = require('@google-cloud/speech');

var letterMatch = new RegExp("^letter|Letter$")
var stopMatch = new RegExp("^Stop|stop$")
var newMatch = new RegExp("^New Game|new game|New game|new Game$")

var fs = require('fs')


module.exports = {
  recordAudio : function(){
    writeFile()
  }
}


function writeFile(){
  console.log('hello world')
  var fileID = makeid()
    var file = fs.createWriteStream('./server/audio/' +fileID + '.wav', { encoding: 'binary' })
      
    record.start({
      sampleRate: 44100,
      verbose: true,
      silence: '0.5' 
    })
    .pipe(file)
    console.log('Listening, press Ctrl+C to stop.');
}

// writeFile()



async function openStream() {
  
    // Creates a client
    // const client = new speech.SpeechClient();

    // const sampleRateHertz = '16000'
    // const encoding = 'LINEAR16'
    // const languageCode = 'en-US'
    // const phrases = [
    //     "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Letter", "Stop", "New Game"
    // ]
    
    // const request = {
    //   config: {
    //     encoding: encoding,
    //     sampleRateHertz: sampleRateHertz,
    //     languageCode: languageCode,
    //     phrases : phrases
    //   },
    //   interimResults: false, 
    //   // single_utterance : true
    // };
    
    // // Create a recognize stream
    // const recognizeStream = client
    //   .streamingRecognize(request)
    //   .on('error', console.error)
    //   .on('data', data =>
    //     {
    //     var trans = data.results[0]

    //     //send the received data to be processed
    //     var response = processSpeech(trans)
    //     console.log(response)
    //     // res.json({message : response})
    //     }
    //   );
    
    // // Start recording and send the microphone input to the Speech API
    // record
    //   .start({
    //     sampleRateHertz: sampleRateHertz,
    //     threshold: 0,
    //     verbose: false,
    //     recordProgram: 'rec', 
    //     silence: '10.0',
    //   })
    //   .on('error', console.error)
    //   .pipe(recognizeStream);
    
    //   console.log('Listening, press Ctrl+C to stop.');
    
    
    

    // Creates a client
    const client = new speech.SpeechClient();

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    const filename = '../audio/test.wav';
    const encoding = 'LINEAR16';
    const sampleRateHertz = 44100;
    const languageCode = 'en-US';

    const config = {
      encoding: encoding,
      sampleRateHertz: sampleRateHertz,
      languageCode: languageCode,
    };
    const audio = {
      content: fs.readFileSync(filename).toString('base64'),
    };

    const request = {
      config: config,
      audio: audio,
    };

    // Detects speech in the audio file
    const [response] = await client.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    console.log(`Transcription: `, transcription);
}
    


function processSpeech(input){
  console.log(input)
    if (input.alternatives[0].confidence < 0.7){
        
    }
    var command = input.alternatives[0].transcript
    console.log(command)

    if (command[0] == " "){
      command = command.slice(1, command.length)
    }

    let tests = {letter : letterMatch.test(command), stop : stopMatch.test(command), new : newMatch.test(command)}

    if (tests.stop){
      record.stop()
      return "Stop"
    }

    else if (tests.letter){
      // console.log(command[command.length - 1])
      return command[command.length - 1]
    }
    
    else if (tests.new){
      return "New"
    }

    else {
      return "Error"
    }
}

// writeFile()
// openStream()


function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
