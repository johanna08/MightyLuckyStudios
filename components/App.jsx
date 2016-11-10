import React from 'react';
import FlatButton from 'material-ui/FlatButton';
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
    background: "url('/images/mls2.jpg') center / cover",
  },
  landing: {
    color: 'white',
    paddingTop: 250,
  },
  icon: {
    fontSize: 36,
    padding: 5,
  },
  icons: {
    paddingTop: 200,
  },
  text: {
    fontSize: 45,
  },
};

function App() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={styles.container}>
        <div style={styles.landing}>
          <p style={styles.text}>Mighty Lucky Studio</p>
          <div style={styles.icons}>
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
          <a href="https://goo.gl/maps/hkaEWG2oawz" target="_blank">
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
