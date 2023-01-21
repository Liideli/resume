import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.text}>
        A 23-year-old young man who likes challenges and solving problems to get
        out of difficult situations. I am applying for my career as versatile as
        possible work experience and new challenges. I am currently studying ICT
        in Metropolia University of Applied Sciences and my major is Mobile
        Solutions. I like to do sports and take care of my own fitness and
        health. Hobbies include regular gym and cycling.{" "}
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 40,
  },
  text: {
    width: 300,
  },
};

export default About;
