import { motion, Variants } from "framer-motion";
import { Character } from "../../types/Character";
import "./CharacterCard.scss";

interface CharacterCardProps {
  character: Character;
  onClick?: () => void;
  variants?: Variants;
}

const CharacterCard = ({
  character,
  onClick,
  variants,
}: CharacterCardProps) => {
  return (
    <motion.div className="card" onClick={onClick} variants={variants}>
      <img
        src={`${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`}
      />
      {/* <h2>{character.name}</h2> */}
    </motion.div>
  );
};

export default CharacterCard;
