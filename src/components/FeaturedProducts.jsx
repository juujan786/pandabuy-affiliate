import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import HeroSwiper from "./HeroSwiper";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  function handleClickViewAll() {
    navigate("products");
  }
  return (
    <div className="w-[90%] lg:w-[80%] xl:w-[1200px] mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-[40px] font-bold">FEATURED ITEMS</h1>
        <div className="grid w-full grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {/* <HeroSwiper /> */}
          <Card />
          <Card />
          <Card />
        </div>
        <Button text={"VIEW ALL"} click={handleClickViewAll} fontSize={26} />
      </div>
    </div>
  );
};

export default FeaturedProducts;
