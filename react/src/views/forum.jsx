import React from "react";

const Forum = () => {
  const posts = [
    {
      id: 1,
      title: "Sample Post 1",
      content: "This is the content of sample post 1.",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Sample Post 2",
      content: "This is the content of sample post 2.",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Sample Post 2",
      content: "This is the content of sample post 2.",
      author: "Jane Smith",
    },
    {
      id: 4,
      title: "Sample Post 2",
      content: "This is the content of sample post 2.",
      author: "Jane Smith",
    },
    {
      id: 5,
      title: "Sample Post 2",
      content: "This is the content of sample post 2.",
      author: "Jane Smith",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Forum</h1>
      {posts.map((post) => (
        <div className="border p-4 rounded mb-4" key={post.id}>
          <h2 className="text-lg font-bold mb-2">{post.title}</h2>
          <p>{post.content}</p>
          <div className="text-gray-500 text-sm mt-2">Posted by {post.author}</div>
        </div>
      ))}
    </div>
  );
};


export default Forum;
