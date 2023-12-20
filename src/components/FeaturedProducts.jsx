import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import HeroSwiper from "./HeroSwiper";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../queries";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  function handleClickViewAll() {
    navigate("products");
  }
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["items"],
    queryFn: getData,
  });
  return (
    <div className="w-90%] lg:w-[80%] xl:w-[80%] 2xl:w-[1400px] mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-[30px] mt-5 font-bold">FEATURED PRODUCTS</h1>
        <div className="flex justify-center flex-wrap w-full gap-6 mx-auto ">
          {isPending && <p>Loading...</p>}
          {isError && <p>Error...</p>}
          {data && data.slice(0, 3).map((item) => <Card item={item} />)}
        </div>
        {/* <Button text={"VIEW ALL"} click={handleClickViewAll} fontSize={26} /> */}
        <div onClick={handleClickViewAll} class="group bg-white/20 border-white/50 focus-within:ring-1 focus-within:ring-white/50 relative border backdrop-blur-md sm:flex-row">
                <input  class=" block bg-transparent  py-4 text-white outline-none" />
                <div class="border-white/50 flex sm:absolute sm:inset-y-0 sm:right-0 sm:h-full sm:border-l">
                  <button type="submit" class="inline-flex whitespace-no-wrap w-full items-center text-[14px] justify-center bg-blue-600 px-[62.8px] py-1 font-bold text-white outline-none transition-all focus:bg-blue-500 hover:border sm:hover:translate-x-1 sm:hover:-translate-y-1">View All</button>
                </div>
              </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
