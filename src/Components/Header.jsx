import logo from "../assets/Images/logo.png"
export default function Header(){
    return(
        <>
        <div className="w-full flex items-center  h-16 bg-gray-800 rounded-lg ">
            <div className=" flex  items-center">
                <img src={logo} alt="Logo" 
                  className=" h-24 text-white rounded-full relative hover:${item.Hover}"
                  
                />
                <p className="text-white mt-8 ml-16 absolute">Night</p>
            </div>

            <div className="flex justify-items-center">
                <h3 className="text-green-700 
                 text-1xl  font-semibold font-serif ml-12
                ">All In One Place</h3>
            </div>

            
        </div>
        </>
    )
}