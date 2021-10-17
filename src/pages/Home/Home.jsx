import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  history.push("/supplier-management");

  return <div />;
};

export default Home;
