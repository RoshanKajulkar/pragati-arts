import { useParams, Link } from "react-router";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold">Product not found</h2>
        <Link to="/" className="text-blue-600 underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Back link */}
      <Link to="/" className="text-blue-600 underline">
        ← Back to Products
      </Link>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-80 h-80 object-cover rounded-lg shadow"
        />

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-800 mb-4">Size: {product.desc}</p>
          <p className="text-xl text-gray-800 mb-4">Price: ₹{product.price}</p>

          <p className="text-gray-600 mb-6">
            High quality handmade woollen rangoli mat. Soft, durable and perfect
            for home decor.
          </p>

          <button
            onClick={() => {
              const url = window.location.href;
              navigator.clipboard.writeText(url);
              alert("Link copied!");
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
