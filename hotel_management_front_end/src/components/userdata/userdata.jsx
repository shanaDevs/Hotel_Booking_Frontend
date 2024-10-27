/* eslint-disable react/prop-types */
import "./userdata.css";

function UserTag(props) {
  return (
    <div className="user-data-div">
      <img src={props.imageLink} />
      <span>{props.name}</span>
    </div>
  );
}

export default UserTag;