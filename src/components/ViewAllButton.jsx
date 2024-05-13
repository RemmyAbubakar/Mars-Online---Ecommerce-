import React from 'react'
import {Link} from "react-router-dom"

function ViewAllButton() {
  return (
    <div className="font-second text-md flex justify-center mt-4">
    <Link to={"/products"}>
      <button>
        <h3>SHOP ALL</h3>
      </button>
      </Link>
    </div>
  );
}

export default ViewAllButton