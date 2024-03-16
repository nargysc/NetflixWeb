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
import { updateSub } from "./features/subSlice";

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
              dispatch(
                updateSub({
                  role: subscription.data().role,
                  current_period_end:
                    subscription.data().current_period_end.seconds,
                  current_period_start:
                    subscription.data().current_period_start,
                })
              );
            });
          });
      } else {
        dispatch(logout());
        dispatch(updateSub(null));
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
