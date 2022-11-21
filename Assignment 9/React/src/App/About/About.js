import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";
import axios from "axios";
import classes from "./About.module.css";

const About = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:8080/user/getAll");
      console.log(data.data.data);
      setusers(data.data.data);
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <PageCard
        title={"About Page"}
        desc={
          "This is about us. You can know about us!"
        }
      />
      <div className={classes.cardContainer}>
        {users.map((element) => (
          <UserCard email={element.email} />
        ))}
      </div>
    </div>
  );
};

const UserCard = ({ email }) => {
  return <div className={classes.card}>{email}</div>;
};

export default About;
