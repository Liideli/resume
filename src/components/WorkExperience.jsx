import React from "react";

export const WorkExperience = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>Work Experience</div>
      <div style={styles.text}>
        <div style={styles.subheader}>KOTIKATU OY, 2018-</div>
        <div>Maintenance and renovation of playgrounds</div>
        <div>
          <ul>
            <li>Maintenance paintings</li>
            <li>Construction of gazebos</li>
            <li>Tiling</li>
            <li>Terraces and patios</li>
            <li>Use of the property maintenance tractor</li>
            <li>Maintenance and renovation of green areas</li>
            <li>Other tasks related to property maintenance</li>
          </ul>
        </div>
        <div style={styles.subheader}>HAKONEN SOLUTIONS OY, 9.6.2017-23.4.2018</div>
        <div>Employee of the moving service industry</div>
        <div>
          <ul>
            <li>Furniture and package delivery</li>
            <li>Company relocations</li>
            <li>Private removals</li>
            <li>Furniture installations</li>
          </ul>
        </div>
        <div style={styles.subheader}>RAX BUFFET MYYRMANNI, November 2014</div>
        <div>Restaurant assistant</div>
        <div>
          <ul>
            <li>Maintaining the cleanliness of the restaurant</li>
            <li>Unloading of loads</li>
            <li>Salad table maintenance</li>
            <li>Customer service</li>
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
    paddingBottom: 0,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subheader: {
    fontWeight: "bold",
  },
  text: {
    width: 300,
    marginTop: 16,
  },
};
