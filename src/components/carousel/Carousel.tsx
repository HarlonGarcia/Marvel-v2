import "./Carousel.scss";
import Swiper from "swiper";
import "swiper/css";
import { Comic } from "../../types/Comic";

interface CarouselProps {
  comics: Comic[];
}

const Carousel = ({ comics }: CarouselProps) => {
  const isMobile = window.screen.width < 500;

  const comicsFiltered = comics.filter((comic) => {
    const imagePath = comic.thumbnail.path;
    const index = -19;

    if (imagePath.slice(index) !== "image_not_available") {
      return comic;
    }
  });

  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView: isMobile ? 3 : 5,
    slidesPerGroup: isMobile ? 3 : 5,
    spaceBetween: 10,
  });

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        {comicsFiltered.map(({ title, thumbnail }, index) => (
          <div key={title + index} className="swiper-slide">
            <img
              src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`}
              alt=""
            />
            <div className="title_container">
              <h3>{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
