import { useContext } from "react";
import { Form, redirect } from "react-router-dom";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  return (
    <Form className="create-post" method="POST">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Post Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          name="id"
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
          name="title"
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
          name="description"
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
          name="rating"
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
          name="brand"
          placeholder="please enter brand name"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};
export async function createPostAction(data) {
  const fromData = await data.request.formData();
  const postData = Object.fromEntries(fromData);
  console.log(`${postData}`);
  const { addPost } = useContext(PostListContext);

  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
      // addPost(post);
    });
  return redirect("/");
}
export default CreatePost;
