import ShopByCategoriesCard from "./ShopyByCategoriesCard";

const ShopByCategories = () => {
    const categories = [
    {
      title: "CASUAL WEAR",
      image: "/home/shopbycategory/casual_wear.png",
      large: true,
    },
    {
      title: "PARTY WEAR",
      image: "/home/shopbycategory/party_wear.png",
      large: true,
    },
    {
      title: "BRIDAL",
      image: "/home/shopbycategory/bridal_wear.png",
      large: true,
    },
    {
      title: "KIDS WEAR",
      image: "/home/shopbycategory/kids_wear.png",
    },
    {
      title: "MENS WEAR",
      image: "/home/shopbycategory/mens_wear.png",
    },
    {
      title: "ACCESSORIES",
      image: "/home/shopbycategory/accessories.png",
    },
  ];
  return (
    <section >
      <div className="max-w-[1400px] mx-auto mt-18 px-4">
        <h2 className="text-center text-[#2d2d2d] text-3xl md:text-5xl font-serif tracking-[8px] mb-14">
          SHOP BY CATEGORY
        </h2>

        {/* Top Row */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 mb-16">
          {categories.slice(0, 3).map((item) => (
            <div key={item.title} className=" h-[500px] md:h-[700px]">
              <ShopByCategoriesCard
                image={item.image}
                title={item.title}
              />
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="   grid grid-cols-1 md:grid-cols-3 gap-2 mb-16">
          {categories.slice(3, 6).map((item) => (
            <div key={item.title} className=" h-[500px] md:h-[700px]">
              <ShopByCategoriesCard
                image={item.image}
                title={item.title}
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
