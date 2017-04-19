import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';
import Back2Top from 'react-back2top';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import UpIcon from 'material-ui/svg-icons/navigation/arrow-upward';
import Header from './Header';
import Styles from './App.css';
import News from './News';
class App extends Component{
  render(){
      return (
            <MuiThemeProvider muiTheme={theme}>
                <div>
                    <Header/>
                     <News />
                    <Back2Top
                        visibilityHeight={300}
                        scrollDuration={200}
                    >
                        <FloatingActionButton
                            className={Styles.back2top}
                        >
                            <UpIcon />
                        </FloatingActionButton>
                    </Back2Top>
                </div>
            </MuiThemeProvider>
        );
  }
}
export default App;