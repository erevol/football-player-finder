import { connect } from 'react-redux';
import { fetchPlayers } from '../actions';
import { Navbar, Table, SearchForm } from '../components';
import React, { Component, Fragment } from 'react';

class App extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row mt-5">
            <SearchForm players={this.props.players}/>
            <Table players={this.props.players}/>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { players: state.players };
}

export default connect(mapStateToProps, { fetchPlayers })(App)
