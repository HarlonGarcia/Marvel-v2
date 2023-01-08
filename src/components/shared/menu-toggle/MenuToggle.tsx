import "./MenuToggle.scss";

interface MenuToggleProps {
  onToggle: () => void;
  isActive: boolean;
}

export const MenuToggle = ({ onToggle, isActive }: MenuToggleProps) => {
  return (
    <button
      className={isActive ? "active center" : "center"}
      onClick={onToggle}
    >
      <div></div>
    </button>
  );
};
