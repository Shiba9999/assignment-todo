import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config/firebase";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../toolkit-redux/todoSlice";




const Home = () => {
  const navigate = useNavigate();
  const todo = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  console.log(todo);

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const newTodoHandler = () => {
    navigate("/Home/New");
  };

  const LogoutHandler = async () => {
    await signOut(auth);
    localStorage.removeItem("userToken");

    await navigate("/Login");
  };

  return (
    <>
      <div>Home</div>
      <button onClick={newTodoHandler}>New Todo</button>
      {todo.value.map((eachObj) => (
        <div key={eachObj.id}>{eachObj.title}</div>
      ))}

      <button onClick={LogoutHandler}>Logout</button>
    </>
  );
};

export default Home;
