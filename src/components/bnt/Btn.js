import "./Btn.css";

const Btn = (props) => {
  return (
    <div className="container_btn">
      <button
        id={props.id}
        className="btn"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.btn_text}
      </button>
    </div>
  );
};

export default Btn;
