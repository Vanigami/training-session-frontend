import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
import "../App.css";

// const Navbar = (props) => {
//   return (
//     <div>
//       <Link to="/workouts" style={{ paddingRight: "10px" }}>
//         Workouts
//       </Link>
//       <Link to="/workouts/new">Add Workout</Link>
//     </div>
//   );
// };
// export default Navbar;
// const Styles = styled.div`
//   .navbar {
//     background-color: white;
//   }
//   a,
//   .navbar-nav,
//   .navbar-light .nav-link {
//     color: white;
//     &:hover {
//       color: white;
//     }
//   }
//   .navbar-brand {
//     font-size: 1.4em;
//     color: white;
//     &:hover {
//       color: white;
//     }
//   }
//   .form-center {
//     position: absolute !important;
//     left: 25%;
//     right: 25%;
//   }
// `;
export const NavigationBar = () => (
  // <>
  <div id="navbar">
    <div class="table">
      <ul id="horizontal-list">
        <Link to="/"> Home </Link>
        <Link to="/workouts/new"> Add Workout </Link>
        <Link to="/workouts"> Workouts </Link>
      </ul>
    </div>
  </div>
  // {/* <Styles>
  //   //   <Navbar expand="lg">
  //       <Navbar.Brand href="/">Home</Navbar.Brand>
  //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav className="ml-auto">
  //           <Nav.Item>
  //             <LinkContainer to="/workouts">Workouts</LinkContainer>
  //           </Nav.Item>
  //           <Nav.Item>
  //             <LinkContainer to="/workouts/new">Add Workout</LinkContainer>
  //           </Nav.Item>
  //         </Nav>
  //       </Navbar.Collapse>
  //    k
  // </>
);
