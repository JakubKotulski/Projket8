import "./Tile.css";

const Tile = ({ className, value, getChar }) => {
  const onClick = () => {
    getChar(value);
  };

  return (
    <div className={className} onClick={onClick}>
      {value}
    </div>
  );
};

export default Tile;
