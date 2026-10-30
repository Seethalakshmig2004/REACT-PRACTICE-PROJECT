import { useState } from "react";
export function Wifi() {
  const [wifistatus, setwifiStatus] = useState(true);
  return (
    <>
      <div className="text-center">
        <h3>Mobile Wi-Fi Settings</h3>
        {wifistatus ? (<h2 className="text-success">Wifi is Connected 🟢</h2>
        ) : (
          <h2 className="text-danger">Wifi is Disconnected 🔴</h2>
        )}
        <button
          onClick={() => setwifiStatus(!wifistatus)}
          className="btn btn-primary"
        >
          Wifi ON / OFF
        </button>
      </div>
    </>
  );
}
