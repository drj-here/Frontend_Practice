import { useState } from "react";
import Notes from "./components/Notes";

function App() {
  const [notes,setNotes]=useState([
    {
       id:1,
       text:"Prepare for ReactJs Interview"
    },
    {
       id:2,
       text:"Solve Leetcode POTD"
    }
  ])
  const [note,setNote]=useState("")
  return (
    <div className="App">
      <div 
      style={{
       display:"flex",
       justifyContent:"center",
       gap:"8px",
       marginTop:"30px"
      }}>
      <input
      type="text"
      value={note}
      onChange={(e)=>setNote(e.target.value)}
      />
      <button 
      style={{
        backgroundColor:"blue",
        padding:"5px",
        border:"none"
      }}
      onClick={()=>{
        setNotes([...notes,{id:notes.length+1,text:note}])
        setNote("")
      }}
      >
        Add Note
      </button>
      </div>
      <Notes notes={notes} setNotes={setNotes}/>
    </div>
  );
}

export default App;
