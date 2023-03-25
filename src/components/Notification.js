import "./Notification.css";

const Notification = (props) => {
  return (
    <div className="container_notification">
      <div className="notification">
        <p>{props.notification}</p>
      </div>
    </div>
  );
};

export default Notification;
