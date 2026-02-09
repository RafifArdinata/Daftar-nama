import { useState } from "react";

export default function NoteForm({onAddNote}){

    const [text,setText]= useState('');

    function handleChange(e){
        
        setText(e.target.value)
    }
     function handleCLick(){
     setText("")
    onAddNote(text)
        }
    return(<>
    
    <input placeholder="Add note"  value={text} onChange={handleChange}/>
    <button onClick={handleCLick}>Add</button>
    </>)
}