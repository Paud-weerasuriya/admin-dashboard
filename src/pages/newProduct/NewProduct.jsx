import React from "react";
import "./NewProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="addProductrForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file"></input>
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods"></input>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123"></input>
        </div>

        <div className="addProductItem">
          <label>Active</label>
          <select className="active" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
