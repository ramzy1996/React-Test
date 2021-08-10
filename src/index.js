import React from "react";
import ReactDOM from "react-dom";
import One from "./One";

export const User = React.createContext();
// function One() {
//   return <h1>Hello world</h1>;
// }
// function Header() {
//   return <h1>Header</h1>;
// }
// function Main() {
//   return <h1>Main</h1>;
// }
// function Footer() {
//   return <h1>Footer</h1>;
// }
function Layout() {
  return (
    <>
      <User.Provider>
        <One />
      </User.Provider>
    </>
  );
}
ReactDOM.render(<Layout />, document.getElementById("root"));
