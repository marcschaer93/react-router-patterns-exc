import { useParams } from "react-router-dom";
import { DogDetails } from "./DogDetails";

export const FilterDogDetails = ({ dogs }) => {
  const { name } = useParams();

  if (!name) {
    return null;
  }

  // Function to fetch dogs from local storage
  const getDogsFromLocalStorage = () => {
    const savedDogs = localStorage.getItem("dogs");
    return savedDogs ? JSON.parse(savedDogs) : null;
  };

  // Use dogs from prop if available, otherwise try to fetch from local storage
  const availableDogs = dogs || getDogsFromLocalStorage();

  const foundDog = availableDogs.find(
    (dog) => dog.name.toLowerCase() === name.toLowerCase()
  );

  if (!foundDog) {
    return (
      <div>
        <p>{`No Dog with name: ${name} found!`}</p>
      </div>
    );
  } else {
    return <DogDetails dog={foundDog} />;
  }
};
