import Note from "./Note"
import { useContext } from "react"
import { NotesContext } from "./NoteContex"

export default function NoteList() {
    const notes = useContext(NotesContext);
    return (
        <>
        <ul>
            {notes.map((note) => (
                <li key={note.id}> 
                    <Note note={note} />
                </li>
            ))}
        </ul>
        </>
    )
}