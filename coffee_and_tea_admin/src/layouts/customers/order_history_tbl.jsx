import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { getAllHisAPI } from '../../app/api/customersApi';

const ShowOrderHistory = () => {
  const [search, setSearch] = useState('');
  const [history, setHistory] = useState([]);

  const handleFilter = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const historyData = await getAllHisAPI();
        setHistory(historyData);
      } catch (error) {
        console.error("Failed to fetch history: ", error);
      }
    };

    fetchHistory();
  }, []);

  const filteredData = history.filter(
    (item) =>
    item.prd_name &&
    item.prd_name.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      name: <span style={{ fontSize: '0.9rem' }}> ID Đơn hàng </span>,
      selector: row => row.id,
      sortable: true,
      width: '150px'
    },
    {
      name: <span style={{ fontSize: '0.9rem' }}> Tên sản phẩm </span>,
      selector: row => row.prd_name,
      sortable: true,
      width: '200px'
    },
    {
      name: <span style={{ fontSize: '0.9rem' }}> Số lượng </span>,
      selector: row => row.qty,
      sortable: true,
      width: '120px'
    },
    {
      name: <span style={{ fontSize: '0.9rem' }}> Tổng giá trị </span>,
      selector: (row) =>  new Intl.NumberFormat('vi-VN').format(row.total_price),
      sortable: true,
      width: '150px'
    },
    {
      name: <span style={{ fontSize: '0.9rem' }}> Ngày mua </span>,
      selector: (row) => {
        const date = new Date(row.created_at);
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
        return formattedDate;
      },
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
      selector: (row) => (
        <div
          style={{ color: "black", cursor: "pointer" }}
        >
          [Xem chi tiết]
        </div>
      ),
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
