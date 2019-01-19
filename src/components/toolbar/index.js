import React from 'react';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nameTerm: '', stateTerm: 'all' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value }, () => {
      this.submitForm();
    });
  }
  submitForm = () => {
    this.props.onSubmit(this.state.nameTerm, this.state.stateTerm);
  };
  renderStateOptions = () =>
    this.props.states.map(state => {
      return (
        <option key={state} value={state}>
          {state}
        </option>
      );
    });

  render() {
    return (
      <form>
        <label>
          Name:
          <input
            name="nameTerm"
            type="text"
            value={this.state.nameTerm}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          State:
          <select
            name="stateTerm"
            type="select"
            value={this.state.stateTerm}
            onChange={this.handleInputChange}
          >
            <option value="all">all</option>
            {this.renderStateOptions()}
          </select>
        </label>
      </form>
    );
  }
}

export default Toolbar;
