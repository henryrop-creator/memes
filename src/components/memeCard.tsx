import "../style/MemeCard.scss";

type MemeProps = {
  title: string;
  imageUrl: string;
};

const MemeCard = ({ title, imageUrl }: MemeProps) => {
  return (
    <div className="meme-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default MemeCard;

