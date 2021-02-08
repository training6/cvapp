import React, {useState} from "react";
import './App.css';
import DivText from './components/divText';

function App() {
  
const [text, setText] = useState("");

  return (
    <div className="App">
      <button className="resetBtn" onClick={()=>setText("")}>Reset</button>

      <div className="container">
        <textarea value={text} onChange={(e)=> setText(e.target.value)}></textarea>
        <DivText />    
        
      </div>
    </div>
  );
}

export default App;
