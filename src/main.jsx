import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Name,Education,CalAge,Profession} from './pages/page1'
// import { Parent } from './pages/parent'
// import App from "./App";
// import { Toggle } from "./pages/toggle";
// import { Greet,DateTime } from "../pages/oct27task";
import { EmployeeDetails } from "../pages/b_api";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      {/* <Name />
      <Education />
      <CalAge />
      <Profession />
      <App />
      <Toggle /> */}
      {/* <Greet/>
      <DateTime/> */}
      <EmployeeDetails/>

    </>
  </StrictMode>,
);
