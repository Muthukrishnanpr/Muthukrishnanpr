import React, {createContext} from "react";

export const ThemeContext = createContext()

export default class ContextThemeProvider extends React.Component {

    state = {
        isDarkTheme : true,
        darkTheme : {
            text : "#fff",
            background : "#333",
        },
        lightTheme : {
            text : "#333",
            background : "#fff",
        }
    }

    ChangeTheme = () => {
        this.setState({isDarkTheme : !this.state.isDarkTheme})
    }

    render() {
        return (
            <>
            <ThemeContext.Provider value={{...this.state, ChangeTheme : this.ChangeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
            </>
        )
    }
}
