import Note from "./Note"
export default function({notes,onChange,onDelete}){
return (
    <ul>
        {notes.map(note=>(
            <li key={note.id}>
                <Note note={note} onChange={onChange} onDelete={onDelete}/>
            </li>
        ))}
    </ul>
)
}