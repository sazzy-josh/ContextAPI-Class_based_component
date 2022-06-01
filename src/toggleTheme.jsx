import React, { Component , Cosu} from 'react';
import { ThemeContext } from './Context/ThemeContext';

class ToggleTheme extends Component {
    render() {
        return(
            <ThemeContext.Consumer>
            { (themeContext) => {
                const { themeToggler } = themeContext 
                const {isLightTheme ,light ,dark} = themeContext
                const theme = isLightTheme ?light : dark 
                return (
                    <button onClick={themeToggler} style={{background:theme.bg}}>Toggle Theme!!</button>
                    ) 
            }}
        </ThemeContext.Consumer>
        )}
}
 
export default ToggleTheme;