import { useState, useEffect } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Counter berubah :", count);
    }, [count]);

    return (
        <div>
            <h2>{count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Tambah
            </button>
        </div>
    );
}

export default Counter;