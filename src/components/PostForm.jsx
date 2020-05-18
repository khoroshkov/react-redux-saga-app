import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import Alert from "./Alert";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: " ",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { title } = this.state;

    if (!title.trim()) {
      return this.props.showAlert("You did not create any post");
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };

    this.props.createPost(newPost);

    this.setState({ title: "" });
  };

  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert text={this.props.alert} />}
        <div className="form-group">
          <label htmlFor="title">Post title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            name="title"
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Create Post
        </button>
      </form>
    );
  }
}

const MSTP = (state) => ({
  alert: state.app.alert,
});

const MDTP = {
  createPost,
  showAlert,
};

export default connect(MSTP, MDTP)(PostForm);
