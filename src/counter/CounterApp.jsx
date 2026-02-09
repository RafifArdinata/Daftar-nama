import { useState } from "react";
import Counter from "./Counter";       
export default function CounterApp() {
    const [show2, setShow2] = useState (true);
    function handlechange (e) {
        setShow2(e.target.checked);
    }
    return(
        <div>
            {show2 ?<Counter key="1" name="2" /> : <Counter key="2" name="1" /> }
            <input type="checkbox" checked={show2} onChange={handlechange} /> Tampilkan componen
        </div>
    )
}
