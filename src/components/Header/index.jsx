import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white flex justify-between">
      <h1 className="text-2xl">REACT STOCK</h1>
      <nav className="flex gap-5 items-center text-lg">
        <Link to="/">Início</Link>
        <Link to="/items">Items</Link>
      </nav>
    </header>
  );
};

export default Header;
