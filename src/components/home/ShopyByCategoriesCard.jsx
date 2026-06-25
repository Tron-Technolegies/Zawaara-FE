import { Link } from "react-router-dom";

function ShopyByCategoriesCard({
  id,
  image,
  title,
  buttonText = "DISCOVER",
}) {
  return (
    <div className="relative h-full overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/10"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
        <h3 className="text-white text-2xl md:text-4xl font-serif tracking-wide mb-4">
          {title}
        </h3>

        <Link to={`/category/${id}`}>
          <button className="border border-white text-white text-xs tracking-[3px] uppercase px-6 py-2 hover:bg-white hover:text-black transition">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ShopyByCategoriesCard;