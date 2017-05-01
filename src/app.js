import React from 'react'
import { render } from 'react-dom'
import HeaderContainer from './header/components/header'

const AppContainer = ({ children }) => (
    <div>
        <HeaderContainer />
        { children }
    </div>
)

export default AppContainer

