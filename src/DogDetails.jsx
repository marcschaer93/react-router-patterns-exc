export const DogDetails = ({ dog }) => {
  return (
    <div>
      <h1>DogDetail</h1>
      {/* Render details of the found dog */}

      <div>
        <h2>{dog.name}</h2>
        <p>Age: {dog.age}</p>
        {/* Render other details here */}
      </div>
    </div>
  );
};
