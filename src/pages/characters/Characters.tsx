import { useState } from "react";
import { useQuery } from "react-query";
import { motion, AnimatePresence } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { getAllCharacters } from "../../utils/characterService";
import { Character } from "../../types/Character";
import Overlay from "../../components/shared/overlay/Overlay";

const Characters = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const { isLoading, isError, isSuccess, data, error } = useQuery(
    "characters",
    () => getAllCharacters(3)
  );

  return (
    <div className="home_characters">
      {data?.map((character, index) => (
        <motion.div
          layoutId={character.id}
          key={index}
          onClick={() => setSelectedCharacter(character)}
          className="home_character_card"
        >
          <motion.h2>{character.name}</motion.h2>
          <img
            src={`${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`}
            alt={character.name}
          />
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedCharacter ? (
          <>
            <motion.div
              layoutId={selectedCharacter.id}
              className="home_character_card home_selected"
            >
              <motion.h2>{selectedCharacter.name}</motion.h2>
              <motion.button onClick={() => setSelectedCharacter(null)}>
                <CgClose />
              </motion.button>
              <div>
                <img
                  src={`${selectedCharacter.thumbnail.path}/standard_xlarge.${selectedCharacter.thumbnail.extension}`}
                  alt={selectedCharacter.name}
                />
                <p>{selectedCharacter.description}</p>
              </div>
            </motion.div>
            <Overlay onClose={() => setSelectedCharacter(null)} />
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Characters;
