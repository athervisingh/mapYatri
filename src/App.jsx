import "./App.css";
import Navigation from "./components/navigation/navigation.component";
import DeveloperPage from "./route/developerPage/developerPage.component";
import HomePage from "./route/homePage/homePage.component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/developer" element={<DeveloperPage/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
