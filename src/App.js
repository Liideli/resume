import "./App.css";
import About from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import { WorkExperience } from "./components/WorkExperience";

function App() {
  return (
    <div style={styles.top} className="top">
      <Profile />
      <div style={styles.container} className="container">
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
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    display: "flex",
    alignSelf: 'stretch',
    backgroundColor: "lightgrey",
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
