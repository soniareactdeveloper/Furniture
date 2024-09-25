import { useSelector } from 'react-redux'

const Details = () => {
  // getting the data from the redux
  const products = useSelector((state)=> state.counter.value)


  return (
    <div className="flex flex-col lg:flex-row mt-8 bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
        {/* Left Side: Product Image */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={products?.photo_url}
            alt="Classic Sofa"
            className="rounded-lg object-cover w-full h-64 lg:h-auto"
          />
        </div>

        {/* Right Side: Product Details */}
        <div className="lg:w-1/2 w-full mt-6 lg:mt-0 lg:pl-8">
          <h2 className="text-3xl font-semibold text-gray-800">Classic Sofa</h2>
          <p className="text-gray-500 text-lg mt-2">Brand: <span className="text-gray-700">{products?.brand}</span></p>
          <p className="text-gray-500 text-lg mt-2">Color: <span className="text-gray-700">{products?.color}</span></p>
          <p className="text-gray-500 text-lg mt-2">Material: <span className="text-gray-700">{products?.material}</span></p>
          <p className="text-gray-500 text-lg mt-2">Dimensions: <span className="text-gray-700">{products?.dimensions}</span></p>
          <p className="text-gray-500 text-lg mt-2">Weight: <span className="text-gray-700">{products?.weight}</span></p>
          <p className="text-gray-500 text-lg mt-2">Rating: <span className="text-yellow-500">{products?.rating}</span></p>
          <p className="text-gray-500 text-lg mt-2">Stock: <span className="text-gray-700">{products?.stock}</span></p>

          {/* Price and Purchase Button */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-2xl font-bold text-gray-900">{products?.price}</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
              Purchase
            </button>
          </div>
        </div>
      </div>
      )
}

export default Details