import "./Loader.scss";

interface LoaderProps {
  color: string;
}

const Loader = ({ color }: LoaderProps) => {
  return (
    <div className="loader" style={{ color: color }}>
      <span>C</span>
      <span>A</span>
      <span>R</span>
      <span>R</span>
      <span>E</span>
      <span>G</span>
      <span>A</span>
      <span>N</span>
      <span>D</span>
      <span>O</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  );
};

export default Loader;
