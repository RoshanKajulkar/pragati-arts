import { useParams, Link } from "react-router";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-6">
        <p className="text-lg mb-4">Product not found</p>

        <Link to="/" className="text-indigo-700 hover:underline">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Back link */}
      <Link to="/" className="text-indigo-700 hover:underline">
        ← Back to Products
      </Link>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-lg h-auto object-cover rounded-lg shadow"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <p className="text-lg text-gray-600 mb-6">Size: {product.desc}</p>

          {/* Pricing */}
          <div className="mb-6 space-y-1">
            {product.pricing.map((option) => (
              <p
                key={option.label}
                className="text-xl text-indigo-700 font-bold"
              >
                ₹{option.price}
                <span className="text-gray-600 text-base font-medium">
                  {" "}
                  {option.label}
                </span>
              </p>
            ))}
          </div>

          <p className="text-gray-600 mb-6">
            High quality handmade woollen rangoli mat. Soft, durable and perfect
            for home decor.
          </p>

          {/* Copy Link */}
          <button
            onClick={() => {
              const url = window.location.href;
              navigator.clipboard.writeText(url);
              alert("Link copied!");
            }}
            className="bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800"
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
