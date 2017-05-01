import React from 'react'
import { render } from 'react-dom'
import HomepageContainer from './homepage/components/homepage'
import HeaderContainer from './header/components/header'

render(
    <div>
        <HeaderContainer />
        <HomepageContainer />
    </div>
  , document.getElementById('app')
)

