import React, { useEffect, useState } from "react";
import "./styles.css";

function GithubProfile() {
  var [username, setUsername] = useState("pragatiailani");
  var [search, setSearch] = useState("");
  var [data, setData] = useState({});
  async function fetchData() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    setData(await response.json());
  }
  useEffect(() => {
    fetchData();
  }, [username]);

  return (
    <div className="github-profile-container">
      <div className="search-box">
        <input
          type="text"
          value={search}
          placeholder="Enter Github Username"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => {
            setUsername(search);
          }}
        >
          Search
        </button>
      </div>
      {username && (
        <a href={data.html_url} target="_blank">
          <div className="github-profile">
            <div className="github-avtar">
              <img src={data.avatar_url} alt={`${data.name} Avatar`} />
            </div>
            <h1>{data.name}</h1>
            <h3>{data.bio}</h3>
            <p>
              Public Repositories <span>{data.public_repos}</span>
            </p>
            <p>
              Followers <span>{data.followers}</span>
            </p>
            <p>
              Following <span>{data.following}</span>
            </p>
          </div>
        </a>
      )}
    </div>
  );
}

export default GithubProfile;
