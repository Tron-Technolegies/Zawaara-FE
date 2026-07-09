import ShopByCategoriesCard from "./ShopyByCategoriesCard";
import { useState, useEffect } from "react";
import api from "../../api/api";

const ShopByCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await api.get("api/user/view_categories/");

      console.log(response.data);

      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <section >
      <div className="max-w-[1400px] mx-auto mt-18 px-4">
        <h2 className="text-center text-[#2d2d2d] text-3xl md:text-5xl font-serif tracking-[8px] mb-14">
          SHOP BY CATEGORY
        </h2>

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-16">
          {categories.map((item) => (
            <div key={item.id} className="h-[500px] md:h-[700px]">
              {/* <p className="text-red-500 font-bold">ID: {item.id}</p> */}
              <ShopByCategoriesCard
                id={item.id}
                image={item.image}
                title={item.name}
                buttonText="SHOP NOW"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategories
