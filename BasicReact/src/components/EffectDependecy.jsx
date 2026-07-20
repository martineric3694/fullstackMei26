import { useState, useEffect } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    //Tanpa Dependecy
    useEffect(() => {
        console.log("Counter berubah :", count);
    });

    //Dependency Kosong
    useEffect(() => {
        console.log("Pertama kali render");
    }, []);

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