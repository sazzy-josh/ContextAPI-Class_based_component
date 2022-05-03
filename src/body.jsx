import React, { Component } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import ToggleTheme from './toggleTheme';


class Body extends Component {
    render() { 
        return(
            <ThemeContext.Consumer>{(themeContext) => {
                const {isLightTheme ,light ,dark} = themeContext
                const theme = isLightTheme ?light : dark 
                return(
                    <div className='body' style={{
                        background: theme.ui,
                        color:theme.syntax
                    }}>
                      <p style={{background:theme.bg}}>The Man who harnessed the wind</p>
                      <p style={{background:theme.bg}}>Becoming a great React Developer</p>
                      <p style={{background:theme.bg}}>Nonetheless,Never give up!!</p>
                      <ToggleTheme />
                    </div>
                )
            }}
    
            </ThemeContext.Consumer>
        )
    }
}
 
export default Body;