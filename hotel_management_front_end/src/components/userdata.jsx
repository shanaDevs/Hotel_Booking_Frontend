function UserTag(props){
return (
    <div>
        <img src={props.imageLink}  style={{width:"50px"}}/>
        <h1>{props.name}</h1>
    </div>
)
}

export default UserTag;