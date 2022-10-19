import "./ActualEgg.css";

function ActualEgg({ src, createPlayer, id }) {
  return (
    <>
      <img
        draggable={false}
        className={"eggImage"}
        src={src}
        onClick={createPlayer}
        id={id}
      ></img>
    </>
  );
}

export default ActualEgg;
