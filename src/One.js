import React from "react";
import "./styles.css";
import Two from "./Two";
// import MyComponent from "./hoc";
// import axios from "axios";
// import { render } from "react-dom";

// class One extends Component {
//   constructor() {
//     super();
//     this.state={
//       data:[]
//     }
//   this.state = {
// name: "Ramzy Ahmed",
// count: 0,
// color: "orange",
// isShown: false
//     val: ""
// };
// }
// componentDidMount() {
//   axios.get("https://jsonplaceholder.typicode.com/posts").then(e=>{
//     this.setState({
//       data:e.data
//     })
//   })
// }
// myClick = () => {
//   this.setState({
//     name: "Hello World",
//     count: this.state.count + 1,
//     color: "green"
//   });
// };
// myChange = (e) => {
//   this.setState({
//     val: e.target.value
//   });
// };
// mySubmit = () => {
//   alert(this.state.val);
// };

// render() {
// const mystyle = {
//   color: "yellow",
//   backgroundColor: "black"
// };
// const { name } = this.state;
// const { count } = this.state;

// return (
//   <>
//     <h1>{this.props.count}</h1>
//     <button onClick={this.props.func}>Click</button>

/* <form onSubmit={this.mySubmit}>
          <input type="text" value={this.state.val} onChange={this.myChange} />
        </form> */

/* <h1>{this.state.isShown ? "Hi firends.." : ""}</h1>
        <button onClick={this.myClick}>Click</button> */

/* <h1 style={{ color: this.state.color }}>
          I am from One.js written in {name}
        </h1>
        <h2 style={mystyle}>click button to count .. {count}</h2>
        <h2 className="App">Class styles</h2>
        <button onClick={this.myClick}>Click</button> */

//         <ul>
//           {
//             this.state.data.map(e=><li>{e.body}</li>)
//           }
//         </ul>
//       </>
//     );
//   }
// }
function One() {
  return <Two />;
}

export default One;
