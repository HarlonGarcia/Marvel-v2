import "./Overlay.scss";

interface OverlayProps {
  onClose: () => void;
}

const Overlay = ({ onClose }: OverlayProps) => {
  return <div className="overlay" onClick={onClose}></div>;
};

export default Overlay;
