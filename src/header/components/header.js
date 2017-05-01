import React from 'react'
import { Tabs } from 'antd'

const TabPane = Tabs.TabPane;

const callback = (key) => {
    //przełączać zakładki ;)
}

const HeaderContainer = () => {
    return (
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Home" key="1">Home</TabPane>
            <TabPane tab="Games" key="2">Games</TabPane>
            <TabPane tab="Players" key="3">Players</TabPane>
            <TabPane tab="Parties" key="3\4">Parties</TabPane>
        </Tabs>
    )
}

export default HeaderContainer
