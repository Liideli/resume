import "./App.css";
import About from "./components/About";
import { NavBar } from "./components/NavBar";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import { WorkExperience } from "./components/WorkExperience";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={styles.top}>
      <Profile />
      <div style={styles.navbar}>
        <NavBar />
      </div>
      <div style={styles.container}>
        <div>
          <About />
          <Skills />
        </div>
        <div>
          <Contact />
          <WorkExperience />
          <Education />
        </div>
      </div>
      <div style={styles.bottom}> Made with React.</div>
    </div>
  );
}

const styles = {
  top: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    alignSelf: "stretch",

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
    height: 100,
    backgroundColor: 'lightblue',
  },
};

export default App;
