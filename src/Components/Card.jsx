export default function Card({ item }) {
    return (
      <div className="w-[300px] cursor-pointer transition-transform duration-300 ease-in-out overflow-hidden rounded-lg hover:scale-105">
        <div className="image-container">
          <img
            src={item.Images}
            
            className="w-full h-[200px] object-coevr"
          />
        </div>
        <div className="content-container p-2">
          <h1 className="text-lg font-semibold text-white">{item.Title}</h1>
        </div>

        <div className="flex">
            <button className="bg-green-500 font-semibold px-6 py-1 rounded-lg hover:bg-blue-700">{item.button}</button>
        </div>
      </div>
    );
  }