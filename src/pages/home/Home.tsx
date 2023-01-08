import "./Home.scss";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import video from "../../assets/videos/spiderman.mp4";
import marvel_logo from "../../assets/images/marvel-logo.png";
import marvel_banner from "../../assets/images/marvel-snap-banner.png";
import marvel_snap_logo from "../../assets/images/marvel-snap-logo.png";
import card from "../../assets/images/card.jpg";
import not_found from "../../assets/images/404.png";
import { FiDownload } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

import { getCharacterByName } from "../../utils/characterService";
import { Character } from "../../types/Character";
import CharacterCard from "../../components/character-card/CharacterCard";

// TODO https://icons8.com/       FOOTER

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Home = () => {
  const [characterName, setCharacterName] = useState("");
  const [researched, setResearched] = useState(false);
  const [characters, setCharacters] = useState<Character[] | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleChange = (event: React.SyntheticEvent) => {
    setResearched(false);

    const input = event.target as HTMLInputElement;
    console.log(input.value);

    setCharacterName(input.value);
  };

  const searchCharacter = async () => {
    const characters = await getCharacterByName(characterName, 3);

    if (characters.length > 0) {
      setCharacters(characters);
    } else {
      setCharacters(null);
    }

    setResearched(true);
  };

  const handleKeydown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && characterName) {
      searchCharacter();
    }
  };

  return (
    <div className="home">
      <header className="home_header">
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
      </header>
      <main className="home_body">
        <div className="home_banner">
          <img
            src={marvel_snap_logo}
            alt="Marvel Snap Logo"
            className="marvelsnap_logo"
          />

          <div className="home_download">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              officia voluptatum corrupti quasi, iure consequatur molestias
              inventore recusandae fugit tenetur voluptates, sit doloribus
              facere quos. Eum dolor necessitatibus aliquam facilis?
            </p>
            <a
              href="https://store.steampowered.com/app/1997040/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <span>Download now</span>
                <FiDownload className="home_icon" />
              </button>
            </a>
          </div>
          <img
            src={marvel_banner}
            alt="Marvel Snap Banner"
            className="banner_background"
          />
        </div>

        <div className="home_characters" ref={ref}>
          <img
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              rotate: "-10deg",
            }}
            className="home_banner_card"
            src={card}
            alt="Marvel Snap Card"
          />

          <div className="home_characters_search">
            <label htmlFor="search_character">
              Encontre seu personagem favorito
            </label>
            <div>
              <input
                id="search_character"
                type="text"
                onChange={handleChange}
                value={characterName}
                tabIndex={0}
                onKeyDown={handleKeydown}
              />
              <button>
                <IoSearch className="search_icon" onClick={searchCharacter} />
              </button>
            </div>
          </div>

          {characters ? (
            <motion.div
              className="home_characters_container"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {characters?.map((character, index) => (
                <CharacterCard
                  key={character.name + index}
                  character={character}
                />
              ))}
            </motion.div>
          ) : null}
          {!characters && researched ? (
            <div className="character_not_found">
              <img src={not_found} alt="Nada encontrado" />
              <h3>Nada foi encontrado ao pesquisar por:</h3>
              <span>{characterName}</span>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default Home;
