import { Link } from "react-router-dom";

export const DogList = ({ dogs }) => {
  if (!dogs) {
    return <p>No Dogs Available!</p>;
  }
  return (
    <div>
      <h1>Dogs</h1>
      {dogs.map((dog) => (
        <Link to={`/dogs/${dog.name.toLowerCase()}`} key={dog.name}>
          {dog.name}
        </Link>
      ))}
    </div>
  );
};
