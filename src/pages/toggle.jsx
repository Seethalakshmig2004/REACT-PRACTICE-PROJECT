import { useState } from "react";

export function Toggle() {
    const [show, setShow] = useState(true);

    return (
        <>
            {show && <h1>🐒 Monkey loves 🍌 bananas!</h1>}
            <button onClick={() => setShow(!show)}>
                Click Me For Fun 😄
            </button>
        </>
    );
}

