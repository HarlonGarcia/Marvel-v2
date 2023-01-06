import "./Home.scss";
import video from "../../assets/videos/spiderman.mp4";
import marvel_logo from "../../assets/images/marvel-logo.png";
import marvel_banner from "../../assets/images/marvel-snap-banner.png";
import marvel_snap_logo from "../../assets/images/marvel-snap-logo.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="home_header_background"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div>
          <img src={marvel_logo} alt="Marvel Logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            esse laboriosam consequatur. Unde quo odit, tempora architecto
            reprehenderit repellendus eligendi doloremque explicabo! Beatae at
            cumque similique aperiam numquam repellat voluptatem.
          </p>
        </div>
      </div>
      <div className="home_banner">
        <div>
          <img src={marvel_snap_logo} alt="Marvel Snap Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            officia voluptatum corrupti quasi, iure consequatur molestias
            inventore recusandae fugit tenetur voluptates, sit doloribus facere
            quos. Eum dolor necessitatibus aliquam facilis?
          </p>
        </div>
        <img
          src={marvel_banner}
          alt="Marvel Snap Banner"
          className="home_banner_image"
        />
      </div>
    </div>
  );
};

export default Home;
