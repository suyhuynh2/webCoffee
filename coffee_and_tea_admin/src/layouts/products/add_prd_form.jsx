/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addPrdAPI } from "../../app/api/productsApi";
import { getAllCtgAPI, addCtgAPI } from "../../app/api/categoriesApi";

export default function AddPrdForm({ isForm, onImageChange }) {
  const fileInputRef = useRef(null);

  const [categories, setCategories] = useState([]);

  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    price: 0,
    quantity: 1,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCtgAPI();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    }
    fetchCategories();
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      console.log("File URL:", fileUrl);
      setProduct((prev) => ({
        ...prev,
        image: fileUrl,
        imageName: file.name,
      }));
      onImageChange(fileUrl);
    } else {
      console.log("No file selected");
    }
  };

  const handleAddPrd = () => {
    addPrdAPI(
        product.name,
        product.category,
        product.description,
        product.price,
        product.quantity,
        product.image,
    );
  };

  return (
    <>
      <div
        className="-add-prd-form"
        style={{ display: !isForm ? "flex" : "none" }}
      >
        <label className="value_box" htmlFor="">
          <p>ID sản phẩm</p>
          <input type="text" disabled />
        </label>

        <label className="value_box" htmlFor="">
          <p>Danh mục</p>
          <select 
            name="category"
            value={product.category}
            onChange={handleChange}
            >
            <option value="">Hãy chọn danh mục</option>
            {categories.map((category) => (
              <option key={category.id} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>
        </label>

        <label className="value_box" htmlFor="">
          <p>Tên sản phẩm</p>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </label>

        <label className="value_box" htmlFor="">
          <p>Mô tả</p>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
          ></textarea>
        </label>

        <label htmlFor="" className="value_box">
          <p>Giá tiền</p>
          <input
            type="text"
            name="price"
            value={new Intl.NumberFormat("vi-VN", {
              maximumFractionDigits: 0,
            }).format(product.price || 0)}
            min={0}
            onChange={(e) =>
              setProduct((prev) => ({
                ...prev,
                price: parseInt(e.target.value.replace(/\D/g, "")) || 0,
              }))
            }
          />
        </label>


        <label className="value_box">
            <p>Hình ảnh</p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <div
              className="-upload-file"
              onClick={handleFileChange}
            >
              <FontAwesomeIcon icon={faUpload} />
              <p>UPLOAD FILE</p>
            </div>
          </label>

        <div className="-add-prd-btn" onClick={handleAddPrd} >+ Thêm sản phẩm</div>
      </div>
    </>
  );
}

export function AddDirForm({ isForm }) {
  const [categories, setCategories] = useState([]);
  const [newCategories, setNewCategories] = useState({ category: "" });

  // Hàm fetch categories
  const fetchCategories = async () => {
    try {
      const categoriesData = await getAllCtgAPI();
      setCategories(categoriesData);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCategories((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddCtg = async () => {
      await addCtgAPI(newCategories.category);
      setNewCategories({ category: "" });
      fetchCategories();
  };

  return (
    <>
      <div
        className="-add-directory-form"
        style={{ display: isForm ? "flex" : "none" }}
      >
        <label className="value_box" htmlFor="">
          <p>Danh mục hiện có</p>
          <select name="" id="">
            {categories.map((category) => (
              <option key={category.id} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="" className="value_box">
          <p>Tên danh mục</p>
          <input
            type="text"
            name="category"
            value={newCategories.category}
            onChange={handleChange}
          />
        </label>

        <div className="-add-prd-btn" onClick={handleAddCtg}>
          + Thêm danh mục
        </div>
      </div>
    </>
  );
}

