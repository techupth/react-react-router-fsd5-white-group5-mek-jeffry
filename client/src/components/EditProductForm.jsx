import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProductForm() {
  const [inputName, editInputName] = useState("");
  const [inputimageUrl, editInputImageUrl] = useState("");
  const [inputPrice, editInputPrice] = useState("");
  const [inputDescription, editDescription] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const EditProduct = async () => {
    try {
      const result = await axios.put(`http://localhost:4001/products/${params.productId}`, {
        name: inputName,
        image: inputimageUrl,
        price: inputPrice,
        description: inputDescription,
      });
      navigate("/");
      editInputName(result.data.data.name);
      editInputImageUrl(result.data.data.image);
      editInputPrice(result.data.data.price);
      editDescription(result.data.data.description);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await EditProduct();
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              editInputName(event.target.value);
            }}
            value={inputName}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {
              editInputImageUrl(event.target.value);
            }}
            value={inputimageUrl}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {
              editInputPrice(event.target.value);
            }}
            value={inputPrice}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {
              editDescription(event.target.value);
            }}
            value={inputDescription}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
