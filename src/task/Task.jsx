import { useState } from "react";
import { useImmer } from "use-immer";

export default function Task () {
    const [item, setItem] = useState ("");
    const [items, setItems] = useImmer ([]);
    function handleItemChange (e){
        setItem(e.target.value);
}

function handleClick(e) {
    e.preventDefault();
    setItems ((items) => {
        items.push(item);
    });
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
        <h1>List Tasks</h1>
        <ul>
            {items.map((itm, index) => (
                <li key={index}>{itm}</li>
            ))}
        </ul>
    </div>
)
}