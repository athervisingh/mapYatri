import "./App.css";
import Navigation from "./components/navigation/navigation.component";
import DeveloperPage from "./route/developerPage/developerPage.component";
import HomePage from "./route/homePage/homePage.component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navigation/>
      <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/developer" element={<DeveloperPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
