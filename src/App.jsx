import "./App.css";
import axios from "axios";

import { Home } from "./Home";
import { DogList } from "./DogList";
import { FilterDogDetails } from "./FilterDogDetails";
import { NotFound } from "./NotFound";
import { NewDog } from "./NewDog";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [dogs, setDogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("db.json");
        setDogs(response.data.dogs);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (!dogs) {
      fetchData();
    }
  }, [dogs]);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dogs">
        <Route index element={<DogList dogs={dogs} />} />
        <Route path=":name" element={<FilterDogDetails dogs={dogs} />} />
        <Route path="new" element={<NewDog />} />
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
