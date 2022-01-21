import style from "./showPictures.module.css";
import image1 from "./icons/image-1.jpg";
import image2 from "./icons/image-2.jpg";
import image3 from "./icons/image-3.jpg";
import image4 from "./icons/image-4.jpg";
import image5 from "./icons/image-5.jpg";
import image6 from "./icons/image-6.jpg";
import image7 from "./icons/image-7.jpg";

function ShowPictures() {
  return (
    <div className={style.picturesContainer}>
      <img className={style.img1} alt="" src={image7} />
      <img className={style.img2} alt="" src={image6} />
      <img className={style.img3} alt="" src={image3} />
      <img className={style.img4} alt="" src={image4} />
      <img className={style.img5} alt="" src={image2} />
      <img className={style.img6} alt="" src={image5} />
    </div>
  );
}

export default ShowPictures;
