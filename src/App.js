import "./App.css";
import About from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import { WorkExperience } from "./components/WorkExperience";

function App() {
  return (
    <div style={styles.top}>
      <Profile />
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
  container: {
    flex: 1,
    display: "flex",
    alignSelf: 'stretch',
    flexDirection: "row",
    backgroundColor: "lightgrey",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text: {
    width: 300,
  },
};

export default App;
