import { useState } from 'react';
import DataTable from 'react-data-table-component';

const ShowOrderHistory = () => {
  const [search, setSearch] = useState('');

  const handleFilter = (event) => {
    setSearch(event.target.value);
  };

  // Dữ liệu mẫu cho lịch sử mua hàng
  const data = [
    {
        orderId: 'ORD001',
        customerId: 'CUS001',
        productName: 'Sản phẩm A',
        quantity: 2,
        totalPrice: '1,000,000 VND',
        orderDate: '22/12/2024',
        status: 'Đang giao',
        view: <div style={{color: 'black', cursor: 'pointer'}} >[Xem chi tiết]</div>
      }
  ];

  // Lọc dữ liệu theo tên sản phẩm
  const filteredData = data.filter(item =>
    item.productName.toLowerCase().includes(search.toLowerCase())
  );

  // Cấu hình các cột của bảng
  const columns = [
    {
      name: <span style={{ fontSize: '0.9rem' }}> ID Đơn hàng </span>,
      selector: row => row.orderId,
      sortable: true,
      width: '150px'
    },
    {
      name: <span style={{ fontSize: '0.9rem' }}> Tên sản phẩm </span>,
      selector: row => row.productName,
      sortable: true,
      width: '200px'
    },
    {
      name: <span style={{ fontSize: '0.9rem' }}> Số lượng </span>,
      selector: row => row.quantity,
      sortable: true,
      width: '120px'
    },
    {
      name: <span style={{ fontSize: '0.9rem' }}> Tổng giá trị </span>,
      selector: row => row.totalPrice,
      sortable: true,
      width: '150px'
    },
    {
      name: <span style={{ fontSize: '0.9rem' }}> Ngày mua </span>,
      selector: row => row.orderDate,
      sortable: true,
      width: '150px'
    },
    {
      name: <span style={{ fontSize: '0.9rem' }}> Trạng thái </span>,
      selector: row => row.status,
      sortable: true,
      width: '150px'
    },
    {
      name: <span style={{ fontSize: '0.9rem' }}></span>,
      selector: row => row.view,
      sortable: true,
      width: '120px'
    },
  ];

  return (
    <>
      <div className="wrap-table-order">
        <div >
          <div className='-header-table-order' style={{
            borderBottom: "1px solid gray",
            borderRadius: "5px 5px 0 0"
          }}>
            <div className='-header-left'>
              <input
                type="text"
                placeholder="Tìm kiếm đơn hàng"
                value={search}
                onChange={handleFilter}
                style={{
                  marginBottom: '5px',
                  marginRight: '10px',
                  padding: '10px',
                  width: '300px',
                  borderRight: 'none',
                  borderLeft: 'none',
                  borderTop: 'none',
                  background: 'rgba(251, 251, 251, 0.971)',
                  outline: 'none',
                  borderRadius: '5px 5px 0 0'
                }}
              />
            </div>
          </div>

          <div style={{ maxHeight: '100%', overflowY: 'auto', borderRadius: "10px"}}>
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
      </div>
    </>
  );
};

export default ShowOrderHistory;
