import React ,{useState}from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  const [query, setQuery] = useState("")

  function search(e){
      e.preventDefault()
      setQuery(e.target.value)
  }
  return (
    <div className="MainDash">
       <div className="search">
            <input
                type="text"
                className="w-full placeholder-gray-400 text-gray-900 p-4"
                placeholder="Find Your Courses"
                onChange={search}
                value={query}
            />
            <button className="bt-search">Start</button>
        </div>
      <h1>My Courses</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
