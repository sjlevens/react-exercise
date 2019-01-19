import React from 'react';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nameTerm: '', stateTerm: 'all' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  //event.preventDefault not working? still fine functionally
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value }, () => {
      this.submitForm();
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }
  submitForm = () => {
    this.props.onSubmit(this.state.nameTerm, this.state.stateTerm);
  };
  renderStateOptions = () =>
    this.props.states.map(state => {
      return (
        <option className="item" key={state} value={state}>
          {state}
        </option>
      );
    });

  render() {
    return (
      <div className="ui form">
        <form>
          <div className="fields">
            <label className="field">
              Name:
              <input
                name="nameTerm"
                type="text"
                value={this.state.nameTerm}
                onChange={this.handleInputChange}
              />
            </label>
            <br />

            <label className="field">
              State:
              <select
                name="stateTerm"
                type="select"
                value={this.state.stateTerm}
                onChange={this.handleInputChange}
              >
                <option className="item" value="all">
                  all
                </option>
                {this.renderStateOptions()}
              </select>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Toolbar;
