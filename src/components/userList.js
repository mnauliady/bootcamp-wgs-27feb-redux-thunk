import React, { Component } from "react";
import { connect } from "react-redux";
import { FaUser } from "react-icons/fa";

class UserList extends Component {
  // render nama user
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <div>
        <FaUser /> {user.name}
      </div>
    );
  }
}

// mengambil state dari store
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

// connect untuk mengikat nilai props ke komponen
export default connect(mapStateToProps)(UserList);
