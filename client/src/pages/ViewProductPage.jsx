import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ViewProductPage() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const param = useParams();
  const navigate = useNavigate();
  const getProduct = async () => {
    try {
      const result = await axios.get(`http://localhost:4001/products/${param.productId}`);
      setName(result.data.data.name);
      setImageUrl(result.data.data.image);
      setPrice(result.data.data.price);
      setDescription(result.data.data.description);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  useEffect(() => {
    getProduct();
  }, [param.productId]);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Product Title</h2>
        <div className="product">
          <div className="product-preview">
            <img src={imageUrl} alt="some product" width="250" height="250" />
          </div>
          <div className="product-detail">
            <h1>Product name: {name} </h1>
            <h2>Product price: {price}</h2>
            <p>Product description: {description} </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ViewProductPage;
