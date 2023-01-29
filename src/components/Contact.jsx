import React from "react";

export const Contact = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>Contact</div>
      <div style={styles.text}>
      <div>Tel: +358400974399</div>
      <div>E-mail: roope.kasperi.laine@gmail.com</div>
      <div>Home address: Ajurinkatu 4 A 2, 02650 Espoo, Finland</div>
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
    fontWeight: 'bold',
  },
  text: {
    width: 300,
    marginTop: 16,
  },
};

