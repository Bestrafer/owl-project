import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'antd'

import * as gameActions from '../actions/games';

const columns = [{
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
}, {
    title: 'Owner',
    dataIndex: 'owner',
    key: 'owner',
}, {
    title: 'Min number of players',
    dataIndex: 'minPlayers',
    key: 'minPlayers',
}, {
    title: 'Max number of players',
    dataIndex: 'maxPlayers',
    key: 'maxPlayers',
}];

const GamesContainer = (props) => {
    const { games } = props;

    props.actions.getGames();

    return (
        <div>
            <h1>games:</h1>
            <Table dataSource={games} columns={columns} size="middle" />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        games: state.games.entities,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gameActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer)
