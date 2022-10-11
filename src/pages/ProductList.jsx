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
      <div className="flex flex-wrap gap-10 justify-center pt-10">
        {data.map((data) => (
          <Products product={data} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
