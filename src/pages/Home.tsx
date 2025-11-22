import products from "../data/products";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <div className="min-h-screen  p-6">
        {/* Brand Title */}
        <h1 className="text-3xl font-bold text-center mb-6 tracking-wide text-gray-800">
          Pragati Arts
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Woollen Rangoli Mats Collection
        </p>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <Link
              key={item.id}
              to={`/products/${item.id}`}
              className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-80 object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h2 className="font-semibold text-xl mb-1 text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {item.desc}
                </p>
                <p className="text-indigo-700 font-bold text-lg">
                  ₹{item.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
