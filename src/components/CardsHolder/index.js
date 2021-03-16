import axios from "axios";
import { useContext, useEffect } from "react";
import Card from "../Card/index";
import context from '../../context'
import styles from "./CardsHolder.module.scss";

function CardsHolder() {
  
    const {cards, setCards, filteredCards} =useContext(context)
    

  useEffect(() => {
    axios({
      method: "get",
      url: "https://603e38c548171b0017b2ecf7.mockapi.io/homes",
    }).then((response) => setCards(response.data))
  }, [setCards]);

  return (
      <div className={styles.cardsHolder}>
      <div className={styles.cardsWrapper}>

        {filteredCards ? filteredCards.map((card) => <Card key={card.id} card={card} />)
        :
          cards && cards.map((card) => <Card key={card.id} card={card} />)}
      </div>
        <button>See more</button>
      </div>
  );
}

export default CardsHolder;
