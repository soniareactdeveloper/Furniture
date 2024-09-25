import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";

const Buy = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({}); 

  // Setting data from firebase
  const db = getDatabase();

  // Getting data from Firebase
  useEffect(() => {
    const starCountRef = ref(db, 'products/');
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), key: item.key }); 
        setQuantities((prev) => ({ ...prev, [item.key]: 1 })); 
      });
      setProducts(arr);
    });
  }, [db]);

  // Increment quantity
  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  // Decrement quantity
  const handleDecrement = (id) => {
    setQuantities((prev) => {
      const currentQuantity = prev[id] || 1;
      if (currentQuantity > 1) {
        return { ...prev, [id]: currentQuantity - 1 };
      }
      return prev;
    });
  };

  // Handle adding more products
  const handleAddMoreProduct = () => {
    navigate('/');
  };

  // Calculate total price
  const totalPrice = products.reduce((total, item) => {
    return total + (item.price * (quantities[item.key] || 1));
  }, 0);

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      {products.map((item) => (
        <div key={item.key} className="flex items-center justify-between mb-4">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              src={item.photo_url}
              alt={item.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
          </div>

          {/* Product Name and Price */}
          <div className="ml-4 flex-grow">
            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
            <p className="text-sm text-gray-500">Price: ${item.price}</p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => handleDecrement(item.key)} // Pass product ID
              className="bg-gray-200 text-gray-800 px-2 py-1 rounded-l-lg hover:bg-gray-300 focus:outline-none"
            >
              -
            </button>
            <span className="px-3 py-1">{quantities[item.key] || 1}</span> {/* Use the specific product's quantity */}
            <button
              onClick={() => handleIncrement(item.key)} // Pass product ID
              className="bg-gray-200 text-gray-800 px-2 py-1 rounded-r-lg hover:bg-gray-300 focus:outline-none"
            >
              +
            </button>
          </div>
        </div>
      ))}

      {/* Total Price and Button */}
      <div className="mt-4">
        <p className="text-lg font-bold text-gray-900 mb-4">
          Total: ${totalPrice}
        </p>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition duration-300">
          Review Payment & Address
        </button>

        {/* Add More Products Button */}
        <button
          onClick={handleAddMoreProduct}
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-lg font-semibold transition duration-300 mt-4"
        >
          Add More Products
        </button>
      </div>
    </div>
  );
};

export default Buy;

