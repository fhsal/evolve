import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Physical from "./pages/Physical";
import Mental from "./pages/Mental";
import Resources from "./pages/Resources";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Podcast from "./pages/Podcast";
import VideoLibrary from "./pages/VideoLibrary";
import Health from "./pages/Health";
import Exercise from "./pages/Exercise"


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Landing} />
          <Route exact path="/physical" component={Physical} />
          <Route exact path="/mental" component={Mental} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/podcast" component={Podcast} />
          <Route exact path="/videolibrary" component={VideoLibrary} />
          <Route exact path="/health" component={Health} />
          <Route exact path="/exercise" component={Exercise} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
