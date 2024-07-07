import { useContext, useRef } from "react";
import PostListProvider, { PostListContext } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostListContext);
  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const reactions = useRef();
  const brands = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = userId.current.value;
    const title = postTitle.current.value;
    const body = postBody.current.value;
    const reaction = reactions.current.value;
    const brand = brands.current.value;
    userId.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    reactions.current.value = "";
    brands.current.value = "";

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: body,
        rating: reaction,
        brand: brand,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
      });
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Post Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userId}
          placeholder="Enter your User Id here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={postTitle}
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="body"
          rows="4"
          ref={postBody}
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Numbers of reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={reactions}
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="brand" className="form-label">
          Enter your brand here
        </label>
        <input
          type="text"
          className="form-control"
          id="brand"
          ref={brands}
          placeholder="please enter brand name"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}
export default CreatePost;
