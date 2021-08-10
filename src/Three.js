import React, { useContext } from "react";
import "./styles.css";
import { User } from "./index";

function Three() {
  const my = useContext(User);
  return (
    <>
      <h1>{my}</h1>
    </>
  );
}
export default Three;
