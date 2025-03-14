function Card({ src, style }) {
  return <img src={src} className={style + " rounded-sm shadow-lg"} />;
}

export default Card;
