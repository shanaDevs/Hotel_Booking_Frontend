import Header from "../../components/header/header";

export default function Homepage() {
    return (
        <>
            <Header />
            <div className="w-full h-screen bg-blue-900 flex flex-col items-center justify-center">
                <div className="border border-white bg-white h-[100px] w-[700px] rounded-lg flex justify-around items-center p-4 space-x-4">
                    <input className="border rounded p-2" type="date" />
                    <input className="border rounded p-2" type="date" />
                    <select className="border rounded p-2">
                        <option>Luxury</option>
                        <option>Normal</option>
                        <option>Low</option>
                    </select>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Now</button>
                </div>
                <h1 className="text-white text-[50px] mt-10 text-center">
                    Welcome to the Leonine Villa
                </h1>
            </div>
        </>
    );
}
