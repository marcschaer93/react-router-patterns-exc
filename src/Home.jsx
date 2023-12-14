import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>All About Dogs!</h1>
      <Link to={"/dogs"}>Available Dogs</Link>
    </div>
  );
};
