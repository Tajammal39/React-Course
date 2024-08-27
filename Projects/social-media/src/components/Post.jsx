import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";
function Post({ post }) {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">{post.titel}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <MdDelete
            onClick={() => {
              deletePost(post.id);
            }}
          />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hastag">
            {tag}
          </span>
        ))}
      </div>
      <div className="alert alert-primary reactions" role="alert">
        This post has been reacted by {post.reaction} people.
      </div>
    </div>
  );
}
export default Post;
