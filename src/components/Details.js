import DetailItem from "./DetailItem";
import equipment from "./icons/equipment.png";
import photoIcon from "./icons/photography-icon.png";
import placeIcon from "./icons/place-icon.jpg";
import experienceIcon from "./icons/experience.png";
import style from "./details.module.css";

function Details() {
  return (
    <div className={style.detailsList}>
      <ul>
        <h3 className={style.sectionText}>
          In Photogun we ensure that high quality pictures is a must and our
          priority!
        </h3>
        <DetailItem
          src={photoIcon}
          text="We have passion to what we do and we show it in our results!"
        />
        <DetailItem
          src={equipment}
          text="With the latest equipment we can never fail on a moment, no shaky pictures or blur."
        />
        <DetailItem
          src={placeIcon}
          text="A great picture depends on the location that gets taken. We always pick the right places."
        />
        <DetailItem
          src={experienceIcon}
          text="By having real pros next to as we achieve the perfect result. All people that work at photogun are certified photografers."
        />
      </ul>
    </div>
  );
}

export default Details;
