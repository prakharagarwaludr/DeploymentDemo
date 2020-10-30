const initState = {
  posts: [
    {
      id: "1",
      title: "Title 1",
      body: "Title Body 1",
    },
    {
      id: "2",
      title: "Title 2",
      body: "Title Body 2",
    },
    {
      id: "3",
      title: "Title 3",
      body: "Title Body 3",
    },
  ],
  AuthorName: "Prakhar Agarwal",
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_POST":
      let newPosts = state.posts.filter((post) => {
        return post.id !== action.id;
      });
      return {
        ...state,
        posts: newPosts,
      };

    case "CREATE_POST":
      state = {
        ...state,
        posts: [...state.posts, action.postObject],
      };
      return state;
    default:
      return state;
  }
};
export default rootReducer;
