import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useImmerReducer } from "use-immer";

let id = 0;

const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: false },
  { id: id++, text: "Learn React JS", done: false },
  { id: id++, text: "Learn Javascript", done: false },
];

function notesImmerReducer(notes, action) {
  if (action.type === "ADD_NOTE") {
    notes.push({
      id: id++,
      text: action.text,
      done: false,
    });
  } 
  else if (action.type === "CHANGE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    if (index !== -1) {
      notes[index].text = action.text;
      notes[index].done = action.done;
    }
  } 
  else if (action.type === "DELETE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    if (index !== -1) {
      notes.splice(index, 1);
    }
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(
    notesImmerReducer,
    initialNotes
  );

  function handleAddNote(text) {
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
  }

  function handleChangeNote(note) {
    dispatch({
      type: "CHANGE_NOTE",
      id: note.id,
      text: note.text,
      done: note.done,
    });
  }

  function handleDeleteNote(id) {
    dispatch({
      type: "DELETE_NOTE",
      id: id,
    });
  }

  return (
    <div>
      <h1>Note APP</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}   