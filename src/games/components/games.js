import React from 'react';
import * as gameActions from '../actions/games';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'antd'

const columns = [{
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
}, {
    title: 'Owner',
    dataIndex: 'owner',
    key: 'owner',
}, {
    title: 'minPlayers',
    dataIndex: 'minPlayers',
    key: 'minPlayers',
}, {
    title: 'maxPlayers',
    dataIndex: 'maxPlayers',
    key: 'maxPlayers',
}];

var dataSource = [];

class GamesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.props.actions.getGames();
    }

    pushGamesToTable() {
        let gameList = this.props.games.games;

        for (var key in gameList) {
            dataSource = dataSource.concat([{
                key: key,
                title: gameList[key].title,
                owner: gameList[key].owner.name,
                minPlayers: gameList[key].minNumber,
                maxPlayers: gameList[key].maxNumber
            }]);
        }
    }
    
    render() {
        this.pushGamesToTable();

        return (
            <div>
                <h1>GAMES:</h1>
                <Table dataSource={dataSource} columns={columns} size="middle" />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        games: state.games,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gameActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer)
