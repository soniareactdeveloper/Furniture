

const Card = () => {
  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      {/* Product Card Container */}
      <div className="flex items-center justify-between mb-4">
        
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img
            src="https://i.pinimg.com/474x/76/42/08/7642086663ae55847d51570ca6e190d5.jpg"
            alt="Classic Sofa"
            className="w-16 h-16 rounded-lg object-cover"
          />
        </div>
        
        {/* Product Name and Price */}
        <div className="ml-4 flex-grow">
          <h2 className="text-lg font-semibold text-gray-800">Classic Sofa</h2>
          <p className="text-sm text-gray-500">Price: $899.99</p>
        </div>
        
        {/* Quantity Selector */}
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded-l-lg hover:bg-gray-300 focus:outline-none">-</button>
          <span className="px-3 py-1">1</span>
          <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded-r-lg hover:bg-gray-300 focus:outline-none">+</button>
        </div>
      </div>

      {/* Total Price and Button */}
      <div className="mt-4">
        <p className="text-lg font-bold text-gray-900 mb-4">Total: $899.99</p>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition duration-300">
          Review Payment & Address
        </button>
      </div>
    </div>
  );
};

export default Card;
