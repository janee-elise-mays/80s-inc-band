import React from "react";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
// import Projects from "./components/Projects";
import Aboutus from "./components/Aboutus";
import Container from 'react-bootstrap/Container';
import Photos from "./components/Carousel";

function App() {
  return (
    <Container>
    <Navigation />
    <Header />
    <Aboutus />
    <br />
    <br />
    <Photos />
    </Container>
  );
}

export default App;
