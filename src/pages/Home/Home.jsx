import React from "react";
// import "./App.css";
import "./Home.css";
import { NavigationBar, Sidebar } from "components";

const Home = (props) => {
  return (
    <>
      <NavigationBar
        status={props.status}
        signOutHandler={props.signOutHandler}
      />
      {/* <Sidebar /> */}
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <p>loremadbhasdbaskd daskjdbaskdbaskjd kasbdkasjdbk</p>
    </>
  );
};

export default Home;
