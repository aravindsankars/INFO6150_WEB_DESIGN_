import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <PageCard
        title={"Jobs Page"}
        desc={
          "This is the Jobs page. You will get to know about various jobs here!"
        }
      />
    </div>
  );
};

export default Jobs;
