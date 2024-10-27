import UserTag from "../userdata/userdata.jsx"
function Header(){
    return(
        <header className="w-full bg-blue-500 flex h-[100px] relative items-center">
        <h1 className="text-white text-[30px] p-[10px]">Leonine Villa</h1>
        <UserTag imageLink="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg" name="shyamal pushpakumara"/>  
        </header>
    )
}

export default Header