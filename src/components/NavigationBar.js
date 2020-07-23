import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
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
const Styles = styled.div`
  .navbar {
    background-color: white;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: white;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <>
    <div>
      <Link to="/"> Home </Link>
      <Link to="/workouts/new"> Add Workout </Link>
      <Link to="/workouts"> Workouts </Link>
    </div>
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/workouts">Workouts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/workouts/new">Add Workout</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/539/724/small/dumbbell_2__28b_w_29.jpg" />
      </div>
    </Styles>
  </>
);
