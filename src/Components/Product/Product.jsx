import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incrementByAmount } from "../../Slices/ProductSlice";
import { getDatabase, ref, set } from "firebase/database";

const Product = () => {
  // State to store the fetched products
  const [products, setProducts] = useState([]);
  const navigate                = useNavigate()
  
  // getting data from redux
  const dispatch = useDispatch()

  //======================  firebase 
  const db = getDatabase();

  // Fetching data from API
  useEffect(() => {
    axios.get("https://api.jsonbin.io/v3/b/66f466e7ad19ca34f8ad72ff")
      .then((res) => 
        {
          setProducts(res.data.record); 
     })
  }, []); 
  
// details
const handleDetail = (data) =>{
  dispatch(incrementByAmount(data))
  navigate('/details')
}

// buy
const handleCard = (buyProduct) =>{
  dispatch(incrementByAmount(buyProduct))
  navigate('/buy')
  set(ref(db, 'products/' + buyProduct.id), {
    Id: buyProduct.id,
    name: buyProduct.name,
    price: buyProduct.price,
    photo_url: buyProduct.photo_url,
    stock: buyProduct.stock,
    quantity:buyProduct.quantity   
  });

  // set data in the localHost
  localStorage.setItem('userData', JSON.stringify(products))

}

  return (
    <div className="flex flex-wrap justify-center gap-5 bg-gradient-to-r from-gray-100 via-purple-50 to-gray-100">
      {/* Map through products */}
      {
        products.map((product, index) => (
          <div
            key={index}
            className="w-[300px] m-4 bg-white shadow-xl rounded-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
          >
            {/* Product Image */}
            <img
              src={product.photo_url}
              alt={product.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-6 space-y-4">
              {/* Product Name */}
              <h2 className="text-2xl font-extrabold text-gray-800">
                {product.name}
              </h2>

              {/* Availability Status */}
              <p
                className={`text-lg font-semibold ${
                  product.stock ? "text-green-500" : "text-red-500"
                }`}
              >
                {product.stock ? "In Stock" : "Out of Stock"}
              </p>

              {/* Price */}
              <p className="text-2xl font-bold text-gray-900">
                ${product.price}
              </p>

              {/* Buttons */}
              <div className="flex justify-between space-x-4 mt-6">
                <button onClick={()=> handleCard(product)} className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition">
                  Add
                </button>
                <button onClick={()=> handleDetail(product)} className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
                  Show Details
                </button>
              </div>
            </div>
          </div>
        ))
       
      }
    </div>
  );
};

export default Product;
