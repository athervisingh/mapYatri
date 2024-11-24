import "./App.css";
import HomePage from "./route/homePage/homePage.component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
