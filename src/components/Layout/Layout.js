import { Outlet, NavLink } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import BgColorExample from "../UI/CardUI";
import LowerCard from "../UI/LowerCard";
import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand className={classes.links}>
            <NavLink to="/home">HOME</NavLink>
          </Navbar.Brand>
          <Navbar.Brand className={classes.links}>
            <NavLink to="/">STORE</NavLink>
          </Navbar.Brand>
          <Navbar.Brand className={classes.links}>
            <NavLink to="/about">ABOUT</NavLink>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <BgColorExample />
      <Outlet />
      <LowerCard className={classes.lowerCard} />
    </>
  );
};

export default Layout;
