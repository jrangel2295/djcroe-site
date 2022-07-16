import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import {ScaleLoader,BounceLoader} from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";
import "./App.css";

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5500);
  }, []);

  return (
    <div className="App" >
      {loading ? 
        <ScaleLoader className="loading-icon"
          color={'#DC143C'}
          loading={loading}
        />
       : 
        <div>
          <Header />
        </div>
      }
    </div>
  );
}

export default App;
