
import MemeCard from "./memeCard";
import memes from "../data/data.json";

const MemeList = () => {
  return (
    <div className="meme-list">
      {memes.map((meme) => (
        <MemeCard key={meme.id} title={meme.title} imageUrl={meme.imageUrl} />
      ))}
    </div>
  );
};

export default MemeList;
