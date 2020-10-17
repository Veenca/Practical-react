import React from "react";
import shortid from "shortid"
export default class TodoFrom extends React.Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={(event) => {
            event.preventDefault();
            this.props.onSubmit({
                id: shortid.generate(),
                text: this.state.text,
                complete: false,
            });
            this.setState({
              text: "",
              
            });
          }}
        >
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="inserire attività...."
          />
          <input type="Submit" />
        </form>
      </div>
    );
  }
}
