import React from "react";
import LandingPage from "./components/LandingPage/index"
import ButtonAppBar from "./components/Navbar/index"
class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
