import React, { Component } from 'react'
import './contextTheme.css'

import { ThemeContext } from '../contexts/ContextTheme'

export default class ContextTheme extends Component {

    static contextType = ThemeContext;

    render() {

        const {isDarkTheme, darkTheme, lightTheme, ChangeTheme} = this.context;

        const theme = isDarkTheme ? darkTheme : lightTheme

        return (
            <>
                <div className='container'>
                    <div className='card'>
                        <div className='content' style={{color : theme.text, background : theme.background}}>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JAVA SCRIPT</li>
                                <li>REACT JS</li>
                                <li>NODE JS</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                    </div>
                <div style={{position : "relative", left : "-20px", padding : "3px"}}>
                    <button onClick={ChangeTheme}>Click</button>
                </div>
                </div>
        </>
        )
    }
}
