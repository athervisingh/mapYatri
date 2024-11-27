import "./App.css";
import Navigation from "./route/navigation/navigation.component";
import DeveloperPage from "./route/developerPage/developerPage.component";
import HomePage from "./route/homePage/homePage.component";
import Authentication from "./route/authentication/authentication.component";
import { Routes, Route } from "react-router-dom";
import { setCurrentUser } from "./store/user/user.reducer";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser =
        user && (({ accessToken, email }) => ({ accessToken, email }))(user);

      console.log(setCurrentUser(pickedUser));
      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/developer" element={<DeveloperPage />}></Route>
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
