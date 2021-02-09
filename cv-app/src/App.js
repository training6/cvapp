import React, {useState} from "react";
import './App.css';
import DivText from './components/divText/DivText';
import TextArea from './components/TextArea/TextAre';
import Button from './components/Button/Button';

function App() {
  
const [text, setText] = useState("");

  return (
    <div className="App">
      <Button reset={()=>setText("")} />
      <div className="container">
        <TextArea words={text} setting={(e)=> setText(e.target.value)} />
        <DivText write={text}/>    
        
      </div>
    </div>
  );
}

export default App;
