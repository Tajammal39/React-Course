import { createContext, useState, useEffect } from "react";

export const PostListContext = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const PostListProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);
  const [fetching, setFetching] = useState(false);

  const controller = new AbortController();
  const signal = controller.signal;

  const addPost = (post) => {
    const newPost = {
      id: Date.now() + Math.random(),
      title: post.title,
      description: post.description,
      rating: post.rating,
      userId: post.id,
      brand: post.brand,
    };

    const newPostList = [newPost, ...postList];
    setPostList(newPostList);
  };

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/products", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.products);
        setFetching(false);
      });
    // return () => {
    //   controller.abort();
    // };
  }, []);

  const deletePost = (postId) => {
    const newPostList = postList.filter((post) => post.id !== postId);
    setPostList(newPostList);
  };

  const addInitialPost = (posts) => {
    const newPostList = posts;
    setPostList(newPostList);
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
