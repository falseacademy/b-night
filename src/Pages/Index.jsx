import Card from "../Components/Card";
import Header from "../Components/Header";
import Data from "../Data/Data";

function Index() {
  console.log(Data); // Add this line
  return (
    <>
      <Header />
      <div
        className="w-full bg-black "
        style={{ height: "calc(100% )" }}
      >
        <div className=" mt-8 rounded-lg flex flex-wrap gap-9 justify-center pb-52">
          {Data.map((item, index) => (
            <Card key={index} item={item} /> // Added key={index}
          ))}
        </div>


       
      </div>
    </>
  );
}
export default Index;
