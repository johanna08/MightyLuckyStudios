import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blueGrey500, grey400, grey50 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: blueGrey500,
  },
});

const styles = {
  container: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: "'Roboto', sans-serif",
  },
  landing: {
    
    backgroundSize: 'cover',
    color: 'white',
    paddingTop: 150,
    paddingBottom: 15
  },
  icon: {
    fontSize: 36,
    padding: 5,
  },
  text: {
    fontSize: 30,
  },
};

function App() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={styles.container}>
        <div style={styles.landing}>
          <p style={styles.text}>Mighty Lucky Studios</p>
          <a href="https://github.com/johanna08" target="_blank">
            <FontIcon
              className="fa fa-github"
              style={styles.icon}
              color={grey50}
              hoverColor={grey400}
            /></a>
          <a href="https://www.linkedin.com/in/johanna-perez" target="_blank">
            <FontIcon
              className="fa fa-linkedin"
              style={styles.icon}
              color={grey50}
              hoverColor={grey400}
            /></a>
        </div>
      </div>
    </MuiThemeProvider>
  );
}
export default App;
