import React from "react";
// import Contact from "./contact";
import Header from "./components/navbar";
import Showcase from "./components/showcase";
import Center from "./components/center";
import Grid from "./components/grid";
import False from "./components/false";
import Koko from "./components/koko";
import User from "./components/user";
import Gogle from "./components/gogle";
import Achko from "./components/achko";
import Selectr from "./components/selectr";
import Footer from "./components/footer";
import Inputlern from "./components/inputlern";

const App = () => {
  return (
    <React.Fragment>
      {/* <Contact/> */}
      <Header />
      <Showcase />
      <Center />
      <Grid />
      <False />
      <Koko />
      <User />
      <Gogle />
      <Achko />
      <Selectr />
      <Inputlern />
      <Footer />

    </React.Fragment>
  )
}


export default App