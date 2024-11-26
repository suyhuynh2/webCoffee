/* eslint-disable react/prop-types */
import { useState } from "react";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddPrdForm, { AddDirForm } from "./add_prd_form";

export default function AddPrd({
  isOpen,
  backPrdForm,
  fetchProducts,
  fetchCategories,
}) {
  const [isForm, setForm] = useState(false);
  const [productImage, setProductImage] = useState(null);

  const changeForm = (event) => {
    const value = event.target.value;
    if (value === "add-prd") {
      setForm(false);
    }
    if (value === "add-dir") {
      setForm(true);
    }
  };

  const handleImageChange = (imageUrl) => {
    setProductImage(imageUrl);
  };

  const handleBack = () => {
    backPrdForm();
    fetchProducts();
    fetchCategories();
  };

  return (
    <>
      <div
        className="wrap-add-prd"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <div className="wrap-lef-add-prd">
          <div className="wrap-header-command">
            <select
              name=""
              id=""
              className="-choose-add-form"
              onClick={changeForm}
            >
              <option value="add-prd">Thêm sản phẩm</option>
              <option value="add-dir">Thêm danh mục</option>
            </select>
            <div className="-left-back-prd-list" onClick={handleBack}>
              <FontAwesomeIcon icon={faBackwardStep} />
              Trở về
            </div>
          </div>

          <div>
            <AddPrdForm isForm={isForm} onImageChange={handleImageChange} />
            <AddDirForm isForm={isForm} />
          </div>
        </div>

        <div
          className="wrap-right-add-prd"
          style={{ display: !isForm ? "flex" : "none" }}
        >
          <h3>Hình ảnh sản phẩm</h3>
          <img src={productImage || "/public/logo-black.png"} alt="" />
        </div>
      </div>
    </>
  );
}
