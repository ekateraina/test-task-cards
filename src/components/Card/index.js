import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

function Card({ card }) {
  const [img, setImg] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.thecatapi.com/v1/images/search",
    }).then((response) => {
      setImg(response.data[0].url);
    });
  }, []);

  return (
    <Link to={`/${card.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div
          className={styles.imgWrapper}
          style={loader ? { visibility: "visible" } : { visibility: "hidden" }}
        >
          <img src={img} alt="img" onLoad={() => setLoader(true)} />
        </div>

        <div className={styles.textWrapper}>
        <h4>{card.title}</h4>
        <p>{card.address}</p>
        <p>
          New Properties for Sale from <strong>£{card.price}</strong>
        </p>
        <p>Shared Ownership Available</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
