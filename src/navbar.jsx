import React, { Component } from 'react';
import AuthContextProvider, { AuthContext } from './Context/AuthContext'; 
import ThemeContextProvider, { ThemeContext } from './Context/ThemeContext'; 

 
class Navbar extends Component {
    render() { 
        return (
           <AuthContext.Consumer>
               {(authContext) => {
                   return (
                    <ThemeContext.Consumer> 
                {(themeContext) => {
                    const { isAuth, isLoggedIn } = authContext;
                    const {isLightTheme ,light ,dark} = themeContext;
                    const theme = isLightTheme ? light : dark ;
                   
                    return (
                        <div className='navbar-head' style={{
                            background:theme.ui,
                            color:theme.syntax
            
                        }}>
                            <h2>Home</h2>
                            <nav>
                            <button className='btn' onClick={isAuth} >{ isLoggedIn ? 'Logged-out' : 'Logged-In' }</button>
                            <a href="#">Home</a>
                            <a href="#">Services</a>
                            <a href="#">About Us</a>
                            </nav>
                        </div>
                    )
                }  }

            </ThemeContext.Consumer>   
                   )
               }}
           </AuthContext.Consumer>
            
        );
    }
}
 
export default Navbar;