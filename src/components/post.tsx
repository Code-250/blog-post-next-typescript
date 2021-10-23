import * as React from "react";
import { blogPost } from "../types/postTypes";

type Props = {
  post: blogPost;
};

const Posts: React.FC<Props> = ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-body-title">{post.title}</h1>
        <p className="card-body-description">{post.body}</p>
      </div>
    </div>
  );
};
export default Posts;
