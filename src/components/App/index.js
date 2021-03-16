import {useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Context from "../../context";
import CardsHolder from '../CardsHolder';
import Filter from '../Filter/index'
import styles from "./App.module.scss";

function App() {

  const [cards, setCards] = useState(null);
  const [filteredCards, setFilteredCards] = useState(null)

  return (
    <Router>
    <Context.Provider value={{cards, setCards, filteredCards, setFilteredCards}}>
  <div className={styles.container}>
    <header>
      <h1>Our Latest Developments</h1>
    </header>
      <Filter />
      <CardsHolder />
  </div>
    </Context.Provider>
    </Router>
  )
}

export default App;
