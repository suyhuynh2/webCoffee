/* eslint-disable react/prop-types */

import { faBackwardStep, faGear, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { updatePrdAPI } from "../../app/api/productsApi";
import { getAllCtgAPI } from "../../app/api/categoriesApi";

export default function ProductInfo({ isOpen, isBackPrdList, product }) {
  const fileInputRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [isUnlockInput, setUnlockInput] = useState(false);

  const [editableProduct, setEditableProduct] = useState(
    product || { image: "" }
  );

  useEffect(() => {
    if (product) {
      setEditableProduct(product);
    }
  }, [product]);

  const handleUnlockInput = () => {
    setUnlockInput((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      console.log("File URL:", fileUrl);
      setEditableProduct((prev) => ({
        ...prev,
        image: fileUrl,
        imageName: file.name,
      }));
    } else {
      console.log("No file selected");
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try{
        const categoriesData = await getAllCtgAPI();
        setCategories(categoriesData);
      }catch (error) {
        console.error("Failed to fetch categories: ", error);
      }
    };
    fetchCategories();
  }, []);

  const handleUpdatePrd = () => {
    updatePrdAPI(
        editableProduct.id,
        editableProduct.name,
        editableProduct.category,
        editableProduct.description,
        editableProduct.price,
        editableProduct.quantity,
        editableProduct.image,
    );
  };

  return (
    <div className="wrap-add-prd" style={{ display: isOpen ? "flex" : "none" }}>
      <div className="wrap-lef-add-prd">
        <div className="wrap-header-command">
          <h3>Chi tiết sản phẩm</h3>
          <div className="gr-btn">
            <div className="-left-back-prd-list" onClick={handleUnlockInput}>
              <FontAwesomeIcon icon={faGear} />
              Chỉnh sửa
            </div>
            <div className="-left-back-prd-list" onClick={isBackPrdList}>
              <FontAwesomeIcon icon={faBackwardStep} />
              Trở về
            </div>
          </div>
        </div>

        <div className="-add-prd-form">
          <label className="value_box">
            <p>ID sản phẩm</p>
            <input type="text" value={editableProduct?.id || ""} disabled />
          </label>

          <label className="value_box">
            <p>Danh mục</p>
            <select
              name="category"
              value={editableProduct.category || ""}
              onChange={handleChange}
              disabled={!isUnlockInput}
            >
             {categories.map((category) => (
              <option key={category.id} value={category.category}>
                {category.category}
              </option>
             ))}
            </select>
          </label>

          <label className="value_box">
            <p>Tên sản phẩm</p>
            <input
              type="text"
              name="name"
              value={editableProduct.name || ""}
              onChange={handleChange}
              disabled={!isUnlockInput}
            />
          </label>

          <label className="value_box">
            <p>Mô tả</p>
            <textarea
              name="description"
              value={editableProduct.description || ""}
              onChange={handleChange}
              disabled={!isUnlockInput}
            ></textarea>
          </label>

          <label className="value_box">
            <p>Giá tiền</p>
            <input
              type="text"
              name="price"
              value={new Intl.NumberFormat("vi-VN", {
                maximumFractionDigits: 0,
              }).format(editableProduct.price || 0)}
              min={0}
              onChange={(e) =>
                setEditableProduct((prev) => ({
                  ...prev,
                  price: parseInt(e.target.value.replace(/\D/g, "")) || 0,
                }))
              }
              disabled={!isUnlockInput}
            />
          </label>

          <label className="value_box">
            <p>Số lượng</p>
            <input
              type="text"
              name="quantity"
              value={new Intl.NumberFormat("vi-VN", {
                maximumFractionDigits: 0,
              }).format(editableProduct.quantity || 0)}
              min={0}
              onChange={(e) =>
                setEditableProduct((prev) => ({
                  ...prev,
                  quantity: parseInt(e.target.value.replace(/\D/g, "")) || 0,
                }))
              }
              disabled={!isUnlockInput}
            />
          </label>

          <label className="value_box">
            <p>Hình ảnh</p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              disabled={!isUnlockInput}
              style={{ display: "none" }}
            />
            <div
              className="-upload-file"
              onClick={handleFileChange}
            >
              <FontAwesomeIcon icon={faUpload} />
              <p>UPLOAD FILE</p>
              <p>{editableProduct.image}</p>
            </div>
          </label>

          {isUnlockInput && <div className="-add-prd-btn" onClick={handleUpdatePrd} >Cập nhật</div>}
        </div>
      </div>

      <div className="wrap-right-add-prd">
        <h3>Hình ảnh sản phẩm</h3>
        <img src={editableProduct.image} alt="" />
      </div>
    </div>
  );
}
