import './App.css'
import Nav from "./components/Nav.jsx";
import { CountProvider } from "./components/Counter.jsx";

export default function App () {
  return (
    <div>
      <h1>Welcome to the Sweetest E-Store On Earth</h1>
          <Nav></Nav>
    </div>
  );
};

