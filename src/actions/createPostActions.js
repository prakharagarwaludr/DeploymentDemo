export const createPostAction = (postObject) => {
  return {
    type: "CREATE_POST",
    postObject,
  };
};
