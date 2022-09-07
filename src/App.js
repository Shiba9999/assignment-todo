import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import RequireAuth from "./Auth";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./toolkit-redux/store";
import Edit from "./Components/Edit";
import New from "./Components/New";
import NotFound from "./NotFound";

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const response = await localStorage.getItem("userToken");
      if (response) {
        setAuth(true);
      } else {
        console.log(Error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
          <Route path='*' element={<NotFound />} />
            <Route path="/Home" element={auth && <Home />}>
              <Route path="edit" element={<Edit />} />
              <Route path="New" element={<New />} />
            </Route>
            <Route path="/Login" exact element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
