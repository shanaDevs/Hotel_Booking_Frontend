/* eslint-disable react/prop-types */

function UserTag(props) {
  return (
    <div className="absolute right-0 flex items-center cursor-pointer mr-2">
      <img src={props.imageLink} className="rounded-[100%] w-[75px] h-[75px]"/>
      <span className="text-white ml-[10px] text-[5px] text-xl ">{props.name}</span>
    </div>
  );
}

export default UserTag;