import {useImmer} from "use-immer";
export default function ContactForm (){//contact
    const [contact ,setContact] = useImmer({
        name: "",
        message: ""
    })
    function handleNameChange (e){
        setContact (draft => {draft.name = e.target.value})//... titik tiga adalah spred operator
    }
    function handleMessageChange (e){
        setContact (draft => {draft.message = e.target.value})
    }
    //set contact
    return(
        <div>
            <h1>contact form</h1>
            <form>
                <input type="text" placeholder="Masukkan nama" value={contact.name} onChange={handleNameChange}/><br />
                <input type="text" placeholder="Masukkan pesan" value={contact.message} onChange={handleMessageChange}/>
            </form>
            <h1>contact detail</h1>
            <p>Nama: {contact.name}</p>
            <p>Contact: {contact.message}</p>
        </div>
    )
}