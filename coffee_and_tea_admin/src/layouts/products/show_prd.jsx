/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faTrash, faWrench } from "@fortawesome/free-solid-svg-icons";
import ProductInfo from "./prd_info";
import { getAllPrdAPI, deletePrdAPI } from "../../app/api/productsApi";
import { getAllCtgAPI } from "../../app/api/categoriesApi";
import AddPrd from "./add_prd";

const ShowPrd = ({ isOpen, handleOpenAdd }) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleFilter = (event) => {
    setSearch(event.target.value);
  };

  const [isShowInfo, setShowInfo] = useState(false);
  const handleInfoPrd = (product) => {
    setSelectedProduct(product);
    setShowInfo((prev) => !prev);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllPrdAPI();
        setProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch products: ", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCtgAPI();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch categories: ", error);
      }
    };
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      try {
        await deletePrdAPI(id);
        setProducts(products.filter((product) => product.id !== id));
        alert("Xóa sản phẩm thành công!");
      } catch (error) {
        console.error("Xóa sản phẩm thất bại: ", error);
        alert("Đã xảy ra lỗi khi xóa sản phẩm.");
      }
    }
  };

  const filteredData = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      name: <span style={{ fontSize: "0.9rem" }}> ID </span>,
      selector: (row) => row.id,
      sortable: true,
      width: "100px",
    },
    {
      name: <span style={{ fontSize: "0.9rem" }}> Tên sản phẩm </span>,
      selector: (row) => row.name,
      sortable: true,
      width: "180px",
    },
    {
      name: <span style={{ fontSize: "0.9rem" }}> Hình ảnh </span>,
      selector: (row) => row.image,
      sortable: true,
      width: "180px",
    },
    {
      name: <span style={{ fontSize: "0.9rem" }}> Số lượng </span>,
      selector: (row) => row.quantity.toLocaleString("de-DE"),
      sortable: true,
    },
    {
      name: <span style={{ fontSize: "0.9rem" }}> Giá bán </span>,
      selector: (row) => new Intl.NumberFormat("vi-VN").format(row.price),
      sortable: true,
    },
    {
      name: <span style={{ fontSize: "0.9rem" }}> Sửa </span>,
      cell: (row) => (
        <FontAwesomeIcon
          icon={faWrench}
          style={{ cursor: "pointer" }}
          onClick={() => handleInfoPrd(row)}
        />
      ),
      sortable: true,
      width: "80px",
    },
    {
      name: <span style={{ fontSize: "0.9rem" }}> Xóa </span>,
      cell: (row) => (
        <FontAwesomeIcon
          icon={faTrash}
          style={{ cursor: "pointer" }}
          onClick={() => handleDelete(row.id)}
        />
      ),
      sortable: true,
      width: "80px",
    },
    {
      name: <span style={{ fontSize: "0.9rem" }}></span>,
      selector: (row) => row.view,
      sortable: true,
    },
  ];

  const fetchProducts = async () => {
    try {
      const productsData = await getAllPrdAPI();
      setProducts(productsData);
    } catch (error) {
      console.error("Failed to fetch products: ", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const categoriesData = await getAllCtgAPI();
      setCategories(categoriesData);
    } catch (error) {
      console.error("Failed to fetch categories: ", error);
    }
  };

  return (
    <>
      <AddPrd
        isOpen={isOpen}
        backPrdForm={handleOpenAdd}
        fetchProducts={fetchProducts}
        fetchCategories={fetchCategories}
      />
      <div
        className="wrap-table-prod"
        style={{
          display: !isOpen ? "block" : "none",
        }}
      >
        <div style={{ display: !isShowInfo ? "block" : "none" }}>
          <div
            className="-header-table-prd"
            style={{
              borderBottom: "1px solid gray",
              borderRadius: "5px 5px 0 0",
            }}
          >
            <div className="-header-lef">
              <select className="-header-select" name="" id="">
                {categories.map((category) => (
                  <option key={category.id} value={category.category}>
                    {category.category}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm"
                value={search}
                onChange={handleFilter}
                style={{
                  marginRight: "10px",
                  padding: "10px",
                  width: "250px",
                  borderRight: "none",
                  borderLeft: "none",
                  borderTop: "none",
                  background: "rgba(251, 251, 251, 0.971)",
                  outline: "none",
                }}
              />
            </div>

            <div className="-header-add-btn" onClick={handleOpenAdd}>
              <FontAwesomeIcon icon={faAdd} />
              Thêm
            </div>
          </div>

          <div
            style={{
              maxHeight: "100%",
              overflowY: "auto",
              borderRadius: "10px",
            }}
          >
            <DataTable
              columns={columns}
              data={filteredData}
              fixedHeader
              fixedHeaderScrollHeight="550px"
              responsive
              highlightOnHover
              striped
              pagination={false}
            />
          </div>
        </div>

        <div className="wrap-prd-info">
          <ProductInfo
            isOpen={isShowInfo}
            isBackPrdList={handleInfoPrd}
            product={selectedProduct}
          />
        </div>
      </div>
    </>
  );
};

export default ShowPrd;
