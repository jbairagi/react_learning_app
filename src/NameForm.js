import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.value}.</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" onChange={this.handleChange} value={this.state.value} placeholder = "write"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NameForm;
