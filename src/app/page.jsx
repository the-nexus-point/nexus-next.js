import Feed from "@/components/Feed";
import Home from "@/components/Home";

const loggedIn = true;

export default () => {
  return loggedIn ? <Feed /> : <Home />;
};
