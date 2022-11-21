import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";
import classes from "./Home.module.css";
import axios from "axios";

const Home = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const [message, setmessage] = useState("");

  const change = (e) => {
    const temp = { ...data };
    temp[e.target.name] = e.target.value;
    setdata(temp);
  };

  const submit = async () => {
    try {
      const apiData = await axios.post(
        "http://localhost:8080/user/login",
        data
      );
      setmessage(apiData.data.data.message);
      console.log(apiData.data.data.message);
    } catch (error) {
      console.log(error.response);
      setmessage(error.response.data.error);
    }
  };

  return (
    <div>
      <Navbar />
      <PageCard
        title={"Home Page"}
        desc={
          "This is Home Page. You have signed in successfully and hence you are here!"
        }
      />
      <div className={classes.inputContainer}>
        <input
          className={classes.Input}
          name="email"
          type="email"
          placeholder="ssankararavind@gmail.com"
          value={data.email}
          onChange={change}
        />
        <input
          password="*******"
          type="password"
          className={classes.Input}
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={change}
        />
        <button onClick={submit} className={classes.Submit}>
          Submit
        </button>
        <br />
        <div>{message}</div>
      </div>
    </div>
  );
};

export default Home;