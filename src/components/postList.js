import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts, fetchPostsAndUsers } from "../actions";
import UserList from "./userList";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  // render list post
  renderList() {
    return this.props.posts.map((post) => (
      <div key={post.id} style={{ margin: "5px 80px 5px 80px", fontFamily: "sans-serif" }}>
        <div>
          <h3>{post.title}</h3>
        </div>
        <p>{post.body}</p>

        {/* memanggil component userList */}
        <UserList userId={post.userId} />
        <hr />
      </div>
    ));
  }

  render() {
    if (!this.props.posts) {
      return null;
    }
    return <div>{this.renderList()}</div>;
  }
}

// mengambil state dari store
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

// connect untuk mengikat nilai props ke komponen
export default connect(mapStateToProps, { fetchPosts, fetchPostsAndUsers })(PostList);
