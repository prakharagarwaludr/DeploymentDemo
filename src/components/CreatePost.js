import React, { useState } from "react";
import { connect } from "react-redux";
import { createPostAction } from "../actions/createPostActions";
import { v1 as uuidv1 } from "uuid";

const CreatePost = (props) => {
  const [postName, setpostName] = useState("Test Post Name");
  const [postDescription, setpostDescription] = useState(
    "Test Post Description"
  );
  const [additionalComments, setadditionalComments] = useState(
    "Test Additional Comments"
  );
const stateArray = useState(false);
 console.log("stateArray value",stateArray[0]); // => the state value
  const onSubmit = (e) => {
    // console.log(`The values are ${postName},
    // ${postDescription}, and ${additionalComments}`);

    let contact = {
      id: uuidv1(),
      title: postName,
      body: postDescription,
      //additionalcomments:additionalComments
    };
    props.createPost(contact);
    props.history.push("/");
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Create New Post</h3>
      <form></form>
      <div className="col">
        <div className="col-md-12">
          <div className="col-md-6">
            <form onSubmit={onSubmit}>
              <div className="form-group w-25">
                <label>Post Name: </label>
                <input
                  value={postName}
                  onChange={(e) => setpostName(e.target.value)}
                  placeholder="Post name"
                  type="text"
                  name="postName"
                  required
                />
              </div>

              <div className="form-group  w-25">
                <label>Post Description: </label>
                <input
                  value={postDescription}
                  onChange={(e) => setpostDescription(e.target.value)}
                  placeholder="Post Description"
                  type="text"
                  name="postDescription"
                  required
                />
              </div>

              <div className="form-group  w-25">
                <label>Additional Comments: </label>
                <input
                  value={additionalComments}
                  onChange={(e) => setadditionalComments(e.target.value)}
                  placeholder="Additional Comments"
                  type="text"
                  name="additionalComments"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="button"
                  onClick={onSubmit}
                  value="Create Post"
                  className="btn btn-primary center"
                />
              </div>
            </form>
          </div>
          <div className="col-md-6" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  //let id = ownProps.match.params.post_id;
  //
  return {
    //post: state.posts.find((post) => post.id === id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (postData) => dispatch(createPostAction(postData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
