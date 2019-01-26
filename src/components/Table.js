// import { connect } from 'react-redux';
// import { updateTable } from '../actions';
import moment from 'moment';
import React, { Component } from 'react';

class Table extends Component {
  // componentDidMount() {
  //   this.props.updateTable();
  // }
  render() {
    return (
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr className="table-dark">
              <th scope="col">Player</th>
              <th scope="col">Position</th>
              <th scope="col">Team</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }

  renderRows() {
    return (
      this.props.players.map(player => {
        return (
          <tr key={player.name}>
            <td>{player.name}</td>
            <td>{player.position}</td>
            <td>{player.nationality}</td>
            <td>{this.getAge(player.dateOfBirth)}</td>
          </tr>
        );
      })
    );
  }

  getAge(dateOfBirth) {
    let years = moment().diff(dateOfBirth, 'years');
    return years;
  }
}

// const mapStateToProps = (state) => {
//   return { results: state.results };
// }

export default Table;
// export default connect(mapStateToProps, { updateTable })(Table)