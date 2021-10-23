import React, { useState } from "react";
import { blogPost } from "../types/postTypes";

type Props = {
  savePost: (e: React.FormEvent, formData: blogPost) => void;
};
export const addPost: React.FC<Props> = ({ savePost }) => {
  const [formData, setFormData] = useState<blogPost>();

  const handleFormData = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="Form" onSubmit={(e) => savePost(e, formData)}>
      <div>
        <div className="Form--field">
          <label htmlFor="name">Title</label>
          <input type="text" id="title" onChange={handleFormData} />
        </div>
        <div className="Form--field">
          <label htmlFor="body">Description</label>
          <input type="text" id="body" onChange={handleFormData} />
        </div>
      </div>

      <button
        className="Form-Button"
        disabled={formData === undefined ? true : false}
      >
        Add Post
      </button>
    </form>
  );
};
