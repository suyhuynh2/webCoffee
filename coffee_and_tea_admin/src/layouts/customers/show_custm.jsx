import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import CustomerInfo from "./custm_info";
import { getAllCus } from "../../app/api/customersApi";

const ShowCustomers = () => {
  const [search, setSearch] = useState("");
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isShowInfo, setShowInfo] = useState(false);

  const handleFilter = (event) => {
    setSearch(event.target.value);
  };

  const handleInfoPrd = (customer) => {
    setSelectedCustomer(customer);
    setShowInfo(prev => !prev);
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      const customersData = await getAllCus();
      setCustomers(customersData);
    };
    fetchCustomers();

    const intervalId = setInterval(() => {
      fetchCustomers();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const filteredData = customers.filter(
    (item) =>
      item.cus_name &&
      item.cus_name.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      name: <span style={{ fontSize: "0.9rem" }}> ID </span>,
      selector: (row) => row.id,
      sortable: true,
      width: "50px",
    },
    {
      name: <span style={{ fontSize: "0.9rem" }}> Họ và tên </span>,
      selector: (row) => row.cus_name,
      sortable: true,
      width: "150px",
    },
    {
      name: <span style={{ fontSize: "0.9rem" }}> Email </span>,
      selector: (row) => row.email,
      sortable: true,
      width: "200px",
    },
    {
      name: <span style={{ fontSize: "0.9rem" }}> Số điện thoại </span>,
      selector: (row) => row.phone,
      sortable: true,
      width: "140px",
    },
    {
      name: <span style={{ fontSize: "0.9rem" }}> Ngày đăng ký </span>,
      selector: (row) => row.created_at,
      sortable: true,
      width: "140px",
    },
    {
      name: <span style={{ fontSize: "0.9rem" }}> Tổng chỉ tiêu </span>,
      selector: (row) => row.total_price,
      sortable: true,
      width: "140px",
    },
    {
      name: <span style={{ fontSize: "0.9rem" }}> Trạng thái </span>,
      selector: (row) => row.status,
      sortable: true,
      width: "140px",
    },
    {
      name: <span style={{ fontSize: "0.9rem" }}></span>,
      selector: (row) => (
        <div
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => handleInfoPrd(row)}
        >
          [Xem chi tiết]
        </div>
      ),
      width: "120px",
    },
  ];

  return (
    <>
      <div className="wrap-table-prod">
        <div style={{ display: !isShowInfo ? "block" : "none" }}>
          <div
            className="-header-table-prd"
            style={{
              borderBottom: "1px solid gray",
              borderRadius: "5px 5px 0 0",
            }}
          >
            <div className="-header-lef">
              <input
                type="text"
                placeholder="Tìm kiếm khách hàng"
                value={search}
                onChange={handleFilter}
                style={{
                  marginRight: "10px",
                  padding: "10px",
                  width: "300px",
                  borderRight: "none",
                  borderLeft: "none",
                  borderTop: "none",
                  background: "rgba(251, 251, 251, 0.971)",
                  outline: "none",
                  borderRadius: "5px 5px 0 0",
                }}
              />
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
              className="small-font-table"
            />
          </div>
        </div>

        {selectedCustomer && isShowInfo && (
          <div className="wrap-prd-info">
            <CustomerInfo isOpen={isShowInfo} customer={selectedCustomer} isBackPrdList={handleInfoPrd} />
          </div>
        )}
      </div>
    </>
  );
};

export default ShowCustomers;
