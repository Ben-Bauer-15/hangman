const record = require('node-record-lpcm16');
const speech = require('@google-cloud/speech');

var letterMatch = new RegExp("^letter|Letter$")
var stopMatch = new RegExp("^Stop|stop$")
var newMatch = new RegExp("^New Game|new game|New game|new Game$")



module.exports = {
  openStream : function(req, res) {
  
      // Creates a client
      const client = new speech.SpeechClient();
    
      const sampleRateHertz = '16000'
      const encoding = 'LINEAR16'
      const languageCode = 'en-US'
      const phrases = [
          "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Letter", "Stop", "New Game"
      ]
      
      const request = {
        config: {
          encoding: encoding,
          sampleRateHertz: sampleRateHertz,
          languageCode: languageCode,
          phrases : phrases
        },
        interimResults: false, 
      };
      
      // Create a recognize stream
      const recognizeStream = client
        .streamingRecognize(request)
        .on('error', console.error)
        .on('data', data =>
          {
          var trans = data.results[0]
    
          //send the received data to be processed
          var response = processSpeech(trans)
          console.log(response)
          res.json({message : response})
          }
        );
      
      // Start recording and send the microphone input to the Speech API
      record
        .start({
          sampleRateHertz: sampleRateHertz,
          threshold: 0,
          verbose: false,
          recordProgram: 'rec', 
          silence: '10.0',
        })
        .on('error', console.error)
        .pipe(recognizeStream);
      
        console.log('Listening, press Ctrl+C to stop.');
    }
    
}

function processSpeech(input){
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



