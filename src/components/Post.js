import React from "react";
import { connect } from "react-redux";
import { deletePostAction } from "../actions/postActions";

const Post = (props) => {
  debugger;  
  const handleClickToDeletePost = () => {
    props.deletePost(props.post.id);
    props.history.push("/");
  };

  const post = props.post ? (
    <div className="post">
      <h4 className="center">{props.post.title}</h4>
      <p>{props.post.body}</p>

      <div className="center">
        <button className="btn red" onClick={handleClickToDeletePost}>
          Delete Post
        </button>
      </div>
    </div>
  ) : (
    <div className="center">Loading post...</div>
  );

  return <div className="container">{post}</div>;
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  debugger;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePostAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
