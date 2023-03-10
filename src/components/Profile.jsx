import React from 'react';


const Profile = () => {
  return (
    <div style={styles.container}>
      <img src={require('../img/profilePic.JPG')} alt="Profile pic" style={styles.img}></img>
      <div style={styles.center}>
      <div style={styles.name}>Roope Laine</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    alignSelf: 'stretch',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  name: {
    fontSize: 42,
    padding: 20,
    fontWeight: 'bold',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 300,
    borderRadius: 150,
  },
};

export default Profile;
