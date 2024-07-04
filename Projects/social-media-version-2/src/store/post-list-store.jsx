import { createContext, useReducer, useState } from "react";

let DEFAULT_POST_LIST = [
  {
    id: Date.now() + Math.random(),
    title: "Going to Multan",
    description:
      "Hi, i am going to multan for my vacations, hope to enjoy a lot",
    rating: 2,
    userId: "user-9",
    tags: ["Vacation", "Mumbai", "Enjoying"],
  },
  {
    id: Date.now() + Math.random(),
    title: "Going to Multan",
    description:
      "Hi, i am going to multan for my vacations, hope to enjoy a lot",
    rating: 2,
    userId: "user-8",
    tags: ["Vacation", "Mumbai", "Enjoying"],
  },
];

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPost: () => {},
});

const PostListProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);

  const addPost = (id, title, description, rating, tags) => {
    const newPost = {
      id: Date.now() + Math.random(),
      title,
      description,
      rating,
      userId: id,
      tags,
    };
    const newPostList = [newPost, ...postList];
    setPostList(newPostList);
  };

  const deletePost = (postId) => {
    const newPostList = postList.filter((post) => post.id !== postId);
    setPostList(newPostList);
  };

  const addInitialPost = (posts) => {
    const newPostList = posts;
    setPostList(newPostList);
  };

  return (
    <PostListContext.Provider
      value={{ postList, addPost, deletePost, addInitialPost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
