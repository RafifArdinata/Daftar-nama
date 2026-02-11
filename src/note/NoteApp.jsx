import { useImmerReducer } from "use-immer";
import { NotesContext, NotesDispatchContext } from "./NoteContext.jsx";
import NoteForm from "./NoteForm.jsx";
import NoteList from "./NoteList.jsx";
import { notesReducer, initialNotes } from "./notesReducer.jsx";

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  return (
    <div>
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
          <h1>Note App</h1>
          <NoteForm />
          <NoteList />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </div>
  );
}
