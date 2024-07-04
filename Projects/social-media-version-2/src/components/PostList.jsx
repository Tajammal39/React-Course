import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/products", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.products);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);
  /* const handleGetPostClick = () => {
   
  };*/
  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
