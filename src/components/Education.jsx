import React from "react";

export const Education = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>Education</div>
      <div style={styles.text}>
        <div style={styles.school}>VIHERLAAKSO HIGHSCHOOL</div>
        <div>Matriculation examination</div>
        <div>August 2015- June 2018</div>
        <div style={styles.school}>METROPOLIA UNIVERSITY OF APPLIED SCIENCES</div>
        <div>Information And Communications Technology</div>
        <div>August 2021-</div>
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
    paddingBottom: 0,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    width: 300,
    paddingBottom: 40,
  },
  school: {
    marginTop: 16,
    fontWeight: "bold",
  }
};
