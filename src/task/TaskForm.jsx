import { useState } from "react";
export default function TaskForm ({onSubmit}) {
    const [item, setItem] = useState ("");
    function handleItemChange (e){
        setItem(e.target.value);
}

function handleClick(e) {
    e.preventDefault();
    onSubmit(item);
    setItem("");
    

}
return(
    <div>
        <h1>Create Task</h1>
        <form>
            <input value={item} onChange={handleItemChange} />
            <button onClick={handleClick}>Add

            </button>
        </form>
    </div>
)
}