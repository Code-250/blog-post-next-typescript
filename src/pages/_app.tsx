import React, { useState, useEffect } from "react";
import Posts from "../components/post";
import { Navbar } from "../navbar/navbar";
import { AddPost } from "../components/Addpost";
import { blogPost } from "../types/postTypes";
import axios from "axios";
import "../styles/index.scss";
import "../styles/addpost.scss";
import "../styles/post.scss";
import "../styles/navbar.scss";

const API_URL: string = "https://jsonplaceholder.typicode.com/posts";

function MyApp() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const posts = async () => {
      await axios.get(API_URL).then((data) => setPostList([data]));
    };
    posts();
  }, []);
  console.log(postList[0]?.data);
  const addPost = async (e: React.FormEvent, formData: blogPost) => {
    e.preventDefault();
    const post: blogPost = {
      id: Math.random(),
      title: formData.title,
      body: formData.body,
    };
    // setPostList([...postList, post]);
  };

  //   const deletePost = async (id: number) => {
  //     const posts: blogPost[] = postList.filter((post: blogPost) => {
  //       console.log(post);
  //        setPostList(posts);
  //     });
  //   };
  // if (!postList) return <h1>Loading....</h1>;

  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Posts</h1>
        <AddPost savePost={addPost} />
        {!postList ? (
          <h1>Loading....</h1>
        ) : (
          postList[0]?.data.map((post: blogPost) => (
            <Posts key={post.id} post={post} />
          ))
          // ""
        )}
      </main>
    </>
  );
}

export default MyApp;
