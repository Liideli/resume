import "./App.css";
import About from "./components/About";
import { NavBar } from "./components/NavBar";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import { WorkExperience } from "./components/WorkExperience";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div style={styles.top}>
      <Profile />
        <NavBar />
      <div style={styles.container}>
        <Routes>
          <Route path="/" element={<About />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/work" element={<WorkExperience />}/>
          <Route path="/education" element={<Education />}/>
        </Routes>
      </div>
      <div style={styles.bottom}> Made with React.</div>
    </div>
  );
}

const styles = {
  top: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    display: "flex",
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: "lightgrey",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text: {
    width: 500,
  },
  bottom: {
    fontSize: 12,
    fontWeight: "200",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    height: 100,
    backgroundColor: 'lightblue',
  },
};

export default App;
