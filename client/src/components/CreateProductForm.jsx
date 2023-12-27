import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProductForm() {
  const [inputName, setInputName] = useState("name");
  const [inputImageUrl, setInputImageUrl] = useState("imgUrl");
  const [inputPrice, setInputPrice] = useState(999);
  const [inputDescription, setInputDescription] = useState("bla bla bla");
  const navigate = useNavigate();

  const createPost = async () => {
    await axios.post("http://localhost:4001/products", {
      name: inputName,
      image: inputImageUrl,
      price: inputPrice,
      description: inputDescription,
    });
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createPost();
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              setInputName(event.target.value);
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
              setInputImageUrl(event.target.value);
            }}
            value={inputImageUrl}
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
              setInputPrice(event.target.value);
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
              setInputDescription(event.target.value);
            }}
            value={inputDescription}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
