import './App.css'
import Nav from "./components/Nav.jsx";
import styles from './css-modules/welcome.module.css'

export default function App () {
  return (
    <div className={styles.welcome}>
      <h1>Welcome to the Sweetest E-Store On Earth</h1>
      <div className={styles.welcomeImg}></div>
          <Nav></Nav>
    </div>
  );
};

