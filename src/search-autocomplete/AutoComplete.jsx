import React, { useEffect, useState } from "react";
import "./styles.css";

function AutoComplete() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(value) {
    const query = value.toLowerCase();
    setSearch(query);
    if (query.length > 0) {
      var filterData =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filterData);
    }
  }

  function enterText(user) { 
    setSearch(user);
    setFilteredUsers([]);
  }

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
  
      if (data && data.users && data.users.length > 0) {
        setUsers(data.users.map((user) => user.firstName));
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) { 
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="autocomplete-container">
      <h1>Autocomplete Search</h1>
      <input value={search} onChange={(e) => handleChange(e.target.value)} type="text" />
      <ul className="suggestions">
        {search && filteredUsers && filteredUsers.length > 0
          ? filteredUsers.map((user, index) => <li onClick={()=>enterText(user)} key={index}>{user}</li>)
          : null}
      </ul>
    </div>
  );
}

export default AutoComplete;
