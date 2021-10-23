import * as React from "react";
import { InferGetStaticPropsType } from "next";
import Posts from "../components/post";
import { AddPost } from "../components/Addpost";
import { blogPost } from "../types/postTypes";
import "../styles/index.scss";

const API_URL: string = "https://jsonplaceholder.typicode.com/posts";

export default function MyApp() {
  let posting = [];
  fetch(API_URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data, "datad");

      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
  console.log(posting, "posting");
  const [postList, setPostList] = React.useState([]);

  const addPost = async (e: React.FormEvent, formData: blogPost) => {
    e.preventDefault();
    const post: blogPost = {
      id: Math.random(),
      title: formData.title,
      body: formData.body,
    };
    setPostList([...postList, post]);
  };

  //   const deletePost = async (id: number) => {
  //     const posts: blogPost[] = postList.filter((post: blogPost) => {
  //       console.log(post);
  //        setPostList(posts);
  //     });
  //   };
  // if (!postList) return <h1>Loading....</h1>;

  return (
    <main className="container">
      <h1>Posts</h1>
      <AddPost savePost={addPost} />
      {postList?.map((post: blogPost) => (
        <Posts key={post.id} post={post} />
      ))}
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(res);
  const posts: blogPost[] = await res.json();
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
};

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;
