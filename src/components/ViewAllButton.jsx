import React from 'react'
import {Link} from "react-router-dom"

function ViewAllButton() {
  return (
    <div className="font-second text-sm flex justify-center mt-5">
    <Link to={"/products"}>
      <button>
        <h3>VIEW ALL</h3>
      </button>
      </Link>
    </div>
  );
}

export default ViewAllButton