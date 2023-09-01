import "./ItemStyles.css";

function ItemData(props) {
  return (
    <div className="I-card">
      <div className="I-image">
        <img src={props.image} alt="Item" />
      </div>
      <h1>{props.heading}</h1>
      <h2>{props.title}</h2>
      <h3>{props.price}</h3>
      {/* 添加“More Info”按钮并连接到提供的URL */}
      <a href={props.url} className="more-info-btn" target="_blank" rel="noopener noreferrer">
        More Info
      </a>
    </div>
  );
}

export default ItemData;