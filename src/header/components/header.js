import React from 'react'
import { Tabs } from 'antd'
import { Link } from 'react-router'

const TabPane = Tabs.TabPane;

const handleOnChange = (key) => {
    window.location.href = `/${key}`;
}

const HeaderContainer = () => {
    return (
        <Tabs defaultActiveKey="1" onChange={handleOnChange}>
            <TabPane tab="Home" key="homepage"></TabPane>
            <TabPane tab="Games" key="games"></TabPane>
            <TabPane tab="Players" key="3">Players</TabPane>
            <TabPane tab="Parties" key="4">Parties</TabPane>
        </Tabs>
    )
}

export default HeaderContainer
