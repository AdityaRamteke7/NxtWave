import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchResources from "../Hook/useFetchResources";
import ResourceCard from "../components/ResourceCard";
import Tabs from "../components/Tabs";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SerachBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./home.css";
import logo from "../assets/download.jpg"


const HomePage = () => {
  const { resources, loading, error } = useFetchResources();
  const [activeTab, setActiveTab] = useState("resources");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const filteredResources = resources
    .filter(
      (resource) => activeTab === "resources" || resource.tag_name === activeTab
    )
    .filter((resource) =>
      resource.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const currentItems = filteredResources.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(resources)
  return (
    <div className="home-page">


      <header>
        <nav >
          <div >
            <a className="navbar-brand" href="#">
              <img style={{ width: "100px" }} src={logo} alt="logo" />
            </a>
          </div>
        </nav>

        <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
        <button className="additem" onClick={() => navigate("/add-resource")}>Add Item</button>
      </header>
      <Tabs onChangeTab={setActiveTab} />
      <div className="resource-list">
        {currentItems.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default HomePage;
