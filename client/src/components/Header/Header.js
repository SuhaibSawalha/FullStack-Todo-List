import "./style.css";
import { AddTodo, SearchTask } from "./components";

const Header = () => {
  return (
    <header>
      <h1>TODO List</h1>
      <AddTodo />
      <SearchTask />
    </header>
  );
};

export default Header;
