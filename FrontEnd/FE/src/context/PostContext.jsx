import { Children, createContext, useEffect, useState } from "react";

export const PostContext = createContext();
export const PostProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState([]);

  const getPosts = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`http://localhost:4545/post`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const post = await response.json();
      console.log(post);
      setAllPosts(post.posts.posts);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostContext.Provider value={{ allPosts, setAllPosts }}>
      {children}
    </PostContext.Provider>
  );
};
