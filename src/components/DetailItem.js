import style from "./detailsItem.module.css";

function DetailItem(props) {
  return (
    <li className={style.listItem}>
      <div className={style.iconContainer}>
        <img className={style.icon} src={props.src} alt="" />
      </div>
      <br />
      <span className={style.text}>
        <h5>{props.text}</h5>
      </span>
    </li>
  );
}

export default DetailItem;
