import React, { Component, createContext } from 'react';


export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = { 
        isLoggedIn : true
     } 
     
     HandleAuth = () => {
         this.setState({isLoggedIn:!this.state.isLoggedIn})
         console.log(this.state.isLoggedIn)
     }
    render() { 
        return (
            <AuthContext.Provider value={{...this.state , isAuth:this.HandleAuth }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;