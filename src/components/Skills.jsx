import React from "react";

const Skills = () => {
  return (
    <div>
      <div style={styles.header}>Skills</div>
      <ul>
        <li>Self-initiated and solution-oriented attitude</li>
        <li>Customer service</li>
        <li>Excellent problem solving skills</li>
        <li>Mathematical solving ability</li>
        <li>Information technology</li>
        <li>
          Coding experience in:
          <ul>
            <li>C</li>
            <li>Java</li>
            <li>Kotlin</li>
            <li>C#</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
          </ul>
        </li>
        <li>
          Video editing:
          <ul>
            <li>Sony Vegas Pro</li>
            <li>Adobe Premiere Pro</li>
          </ul>
        </li>
        <li>
          Image editing:
          <ul>
            <li>Adobe Photoshop</li>
          </ul>
        </li>
        <li>
          Languages:
          <ul>
            <li>Finnish (native)</li>
            <li>English (fluent)</li>
            <li>Swedish (basics)</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 40,
  },
};

export default Skills;
