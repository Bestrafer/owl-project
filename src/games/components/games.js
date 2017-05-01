import React from 'react';
import * as gameActions from '../actions/games';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class GamesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.showGames = this.showGames.bind(this);
    }

    handleClick() {
        this.props.actions.getGames();
    }

    showGames() {
        console.log(this.props.games);
    }
    
    render() {
        return (
            <div>
                <div>Hania Games!</div>

                <button onClick={this.handleClick}>GET GAMES</button>
                <button onClick={this.showGames}>SHOW GAMES</button>
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
