import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blueGrey500, grey800, grey50 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: blueGrey500,
  },
});

const styles = {
  container: {
    textAlign: 'center',
    fontSize: 20,
    // background: "url('/images/mls2.jpg') center / cover",
  },
  landing: {
    color: 'white',
  },
  icon: {
    fontSize: 36,
    padding: 5,
  },
  text: {
    fontSize: 45,
  },
};

function App() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={styles.container}>
        <div className="main">
          <p style={styles.text}>Mighty Lucky Studio</p>
          <div className="icons">
          <a href="https://www.facebook.com/mightyluckystudio" target="_blank">
            <FontIcon
              className="fa fa-facebook"
              style={styles.icon}
              color={grey50}
              hoverColor={grey800}
            /></a>
          <a href="https://www.instagram.com/mightyluckystudio" target="_blank">
            <FontIcon
              className="fa fa-instagram"
              style={styles.icon}
              color={grey50}
              hoverColor={grey800}
            /></a>
          <a href="https://goo.gl/maps/Jto6Rk33Zvp" target="_blank">
            <FontIcon
              className="fa fa-map-marker"
              style={styles.icon}
              color={grey50}
              hoverColor={grey800}
            /></a>
            </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}
export default App;
