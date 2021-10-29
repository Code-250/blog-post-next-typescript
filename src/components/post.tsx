import * as React from "react";
import { blogPost } from "../types/postTypes";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { IoGitPullRequestOutline } from "react-icons/io5";
import { FaCommentAlt } from "react-icons/fa";

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
      <div className="icon-actions">
        <div className="like icon">
          <BsHandThumbsUpFill className="icon-action" />
          <p>234</p>
        </div>
        <div className="views icon">
          <IoGitPullRequestOutline className="icon-action" />
          <p>234</p>
        </div>
        <div className="comments icon">
          <FaCommentAlt className="icon-action" />
          <p>234</p>
        </div>
      </div>
    </div>
  );
};
export default Posts;
