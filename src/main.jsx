import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import { Name,Education,CalAge,Profession} from './pages/page1'
// import { Parent } from './pages/parent'
// import App from "./App";
import { Toggle } from "./pages/toggle";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      {/* <Name/>
    <Education/>
    <CalAge/>
    <Profession/> */}
      {/* <App /> */}
      <Toggle />
    </>
  </StrictMode>,
);
