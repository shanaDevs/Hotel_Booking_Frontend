import UserTag from "../userdata/userdata.jsx"
import "./header.css"
function Header(){
    return(
        <header>
        <h1>hotel Management System</h1>
        <UserTag imageLink="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg" name="test1"/>  
        </header>
    )
}

export default Header