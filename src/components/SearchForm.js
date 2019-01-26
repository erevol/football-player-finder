// import { connect } from 'react-redux';
// import {updateTable} from '../actions';
import React, { Component } from 'react';

const positions = [
  'Attacking Midfield',
  'Central Midfield',
  'Centre-Back',
  'Centre-Forward',
  'Defensive Midfield',
  'Keeper',
  'Left Midfield',
  'Left Wing',
  'Left-Back',
  'Right-Back'
]

class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: {},
      selectedValue: positions[0]
    }
  }

  inputPlayerRef = React.createRef();
  inputAgeRef = React.createRef();

  render() {
    return (
      <div className="container">
        <form onSubmit={this.searchPlayer}>
          <div className="form-row">
            <div className="form-group col-md-3">
              <input value={this.state.search} ref={this.inputPlayerRef} type="text" className="form-control" id="inputPlayer" placeholder="Player Name" />
            </div>
            <div className="form-group col-md-3">
              <select onChange={this.handleChange} className="form-control" id="position">
                {
                  positions.map((item, index) =>
                    <option key={index}>{item}</option>
                  )
                }
              </select>
            </div>
            <div className="form-group col-md-3">
              <input ref={this.inputAgeRef} type="text" className="form-control" id="inputAge" placeholder="Age" />
            </div>
            <div className="form-group col-md-3">
              <button type="submit" className="btn btn-primary">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  searchPlayer = (e) => {
    e.preventDefault();
    const data = {
      age: this.inputAgeRef.current.value,
      player: this.inputPlayerRef.current.value,
      position: this.state.selectedValue
    }

    this.inputPlayerRef.current.value = '';
    this.inputAgeRef.current.value = '';

    this.props.handleSubmit(data);
  }

  handleSubmit = (data) => {
    // this.props.updateTable(data);
    console.log(data);
  }

  onKeyPress = (e) => {
    if (e.which === 13) {
      e.preventDefault();
      this.searchPlayer(e);
    }
  }

  handleChange = (e) => {
    this.setState({
      selectedValue: e.target.value
    });
  }
}

// export default connect(null, { updateTable })(SearchForm);
export default SearchForm;