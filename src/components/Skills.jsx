import React from "react";
import { FaJava } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
const Skills = () => {
  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.header}>Skills</h1>
        <div>
          <ul>
            <li>Self-initiated and solution-oriented attitude</li>
            <li>Customer service</li>
            <li>Excellent problem solving skills</li>
            <li>Mathematical solving ability</li>
            <li>Information technology</li>
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
        <div>
          <h1 style={styles.header}>Coding experience in:</h1>
          <ul style={styles.ul}>
            <li>C</li>
            <li onMouseOver={changeSize}>
              <FaJava />
            </li>
            <li>
              <SiKotlin />
            </li>
            <li>
              <SiCsharp />
            </li>
            <li>
              <SiJavascript />
            </li>
            <li>
              <AiFillHtml5 />
            </li>
            <li>
              <DiCss3 />
            </li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  ul: {
    fontSize: 40,
    padding: 0,
    listStyleType: "none",
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

const changeSize = () => {};

export default Skills;
