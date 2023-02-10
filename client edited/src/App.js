import React from "react";
import './App.css';
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import MicIcon from '@material-ui/icons/Mic';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Box from '@material-ui/core/Box'
import { Paper } from "@material-ui/core";

function App() {
  const [question, setquestion] = useState("");
  const [answer, setanswer] = useState("");

  //speach library
  var u = new SpeechSynthesisUtterance();

  const voiceinput = () => {
    speechSynthesis.cancel()
    console.log("intalk")
    setquestion("")
    //var recognition = new SpeechRecognition()
    var recognition = new window.webkitSpeechRecognition();
    setquestion("talk....")
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = function (e) {
      setquestion("Recognizing....")
      var value = "";
      for (var i = e.resultIndex; i < e.results.length; ++i) {
        if (e.results[i].isFinal) {
          value += e.results[i][0].transcript;
        }
      }
      if (value !== "") {
        setquestion(value)
        var questionjson = {
          question: `${value}`
        }
        axios.post('http://localhost:2602/post', questionjson).then(res => {
          setanswer(res.data)
          //voice to text
          u.text = res.data;
          u.lang = 'en-US';
          speechSynthesis.speak(u);
        });
      }
    }
    recognition.start();
   
  }

  const handleClick = () => {
    speechSynthesis.cancel()
    var questionjson = {
      question: `${question}`
    }
    axios.post('http://localhost:2602/post', questionjson).then(res => {
      setanswer(res.data)
      //voice to text
      u.text = res.data;
      u.lang = 'en-US';
      speechSynthesis.speak(u);
    });
  }


  return (
    <div>
      <div className="App">
          <header>
          <img src="https://cdn.npfs.co/uploads/template/465/1445/publish/images/logo11.png" alt="SRM" width="290" height="120"></img>
          </header>
        <h3>Voice Assistant</h3>
        <TextField
          variant="outlined"
          margin="normal"
          required
          label="question"
          autoFocus
          onChange={(e) => { setquestion(e.target.value) }}
          value={question}
        />
        <Box paddingBottom={3}>
        <Button variant="contained" color="primary"onClick={voiceinput} >
          <MicIcon variant="contained" />
           Search By Voice
        </Button>
        </Box>
          <Button variant="contained" color="primary" startIcon={<CloudUploadIcon />} onClick={handleClick}>
            Submit
          </Button> 
          <Box paddingTop={10} marginLeft={82} width={209} maxWidth={600} maxHeight={200}><Paper elevation={3}>{answer}</Paper></Box>
          </div>
        
        <footer class="footer">
        <p class="Copyright">© SRMIST 2021</p>
    
        </footer>
    </div>
    
    
  );
}

export default App;
