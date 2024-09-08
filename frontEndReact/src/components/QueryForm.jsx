import React, { useState } from "react";
import axios from "axios";

const QueryForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/query/addquery",
        formData,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setMessage("Query submitted successfully!");
        setTitle("");
        setContent("");
        setImage(null);
      } else {
        setError("Failed to submit query");
      }
    } catch (error) {
      setError("An error occurred: " + error.message);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Submit a Query</h2>

      {message && <div className="text-green-500 mb-4">{message}</div>}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter the title"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            rows="5"
            placeholder="Enter the query content"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Query
        </button>
      </form>
    </div>
  );
};

export default QueryForm;
