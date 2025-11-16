import products from "../data/products";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <div className="p-4 max-w-5xl mx-auto">
        {/* Brand Title */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Pragati Arts - Woollen Rangoli Mats Collection
        </h1>

        {/* Grid of products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((item) => (
            <Link
              key={item.id}
              to={`/products/${item.id}`}
              className="border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.image}
                className="w-80 h-80 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-gray-700">{item.desc}</p>
                <p className="text-gray-700">₹{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
