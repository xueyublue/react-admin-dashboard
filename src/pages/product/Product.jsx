import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import Chart from "./../../components/chart/Chart";
import { productData } from "../../data";
import { Publish } from "@mui/icons-material";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitlteContainer">
        <h3 className="productTitle">Edit Product</h3>
        <Link to="/products/add">
          <button className="productAddButton">CREATE</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfo">
            <div className="productInfoTop">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="productInfoImage"
              />
              <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">ID: </span>
                <span className="productInfoValue">123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Sales: </span>
                <span className="productInfoValue">5123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Active: </span>
                <span className="productInfoValue">Yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">In Stock: </span>
                <span className="productInfoValue">No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">UPDATE</button>
          </div>
        </form>
      </div>
    </div>
  );
}
