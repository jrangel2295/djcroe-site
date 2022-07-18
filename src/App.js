import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import { ScaleLoader, BounceLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";
import MediaCard from "./Card/Card";
import data from "./data";
import "./App.css";

// console.log(data)

function App() {
  const Cards = data.map(data => {
    return (
      <MediaCard
        key={data.id}
        img={data.img}
        title={data.title}
        content={data.content}
      />
    );
  });

  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5500);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <ScaleLoader
          className="loading-icon"
          color={"#DC143C"}
          loading={loading}
        />
      ) : (
        <div>
          <Header />
          {Cards}
        </div>
      )}
    </div>
  );
}

export default App;
