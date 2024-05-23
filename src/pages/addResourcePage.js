import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AddResourcePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag_name: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const { title, description, tag_name } = formData;
    const newErrors = {};

    if (!title) newErrors.title = "Title is required";
    if (!description) newErrors.description = "Description is required";
    if (!tag_name) newErrors.tag_name = "Tag is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post(
        "https://media-content.ccbp.in/website/react-assignment/add_resource.json",
        formData
      );
      toast.success("Resource added successfully");
      navigate("/");
    } catch (error) {
      toast.error("Failed to add resource");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="add-resource-page">
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <span>{errors.title}</span>}
        <input
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        {errors.description && <span>{errors.description}</span>}
        <input
          name="tag_name"
          placeholder="Tag"
          value={formData.tag_name}
          onChange={handleChange}
        />
        {errors.tag_name && <span>{errors.tag_name}</span>}
        <button type="submit">Create</button>
      </form>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default AddResourcePage;
