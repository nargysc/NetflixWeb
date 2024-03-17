import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import db, { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileScreen from "./screens/ProfileScreen";
import PlansScreen from "./screens/PlansScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        db.collection("customers")
          .doc(userAuth.uid)
          .collection("subscriptions")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach(async (subscription) => {
              dispatch();
            });
          });
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route path="/plans">
              <PlansScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}
export default App;
