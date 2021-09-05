import React, { useContext } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import AuthContext from "../../store/auth-context";
import classes from "./Home.module.css";

const Home = (props) => {
  // Context data
  const authCtx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
