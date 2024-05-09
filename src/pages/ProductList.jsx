import React, {useEffect, useState} from "react";
import axios from "axios";
import Products from "../components/Products"
import AllProductHeader from "../components/AllProductHeader";


function ProductList() {
    const [data, setData] = useState([]);

    useEffect(() => {
   const getProducts = async () => {
    const results = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
      );
     setData(results.data);
   };
   getProducts();
}, []);



  return (
    <div>
      <AllProductHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  justify-center pt-3 lg:px-24 md:px-16 sm:px-1">
        {data.map((data) => (
          <Products product={data} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
