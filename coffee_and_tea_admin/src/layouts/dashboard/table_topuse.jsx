import { useState } from 'react';
import DataTable from 'react-data-table-component';

const data = [
  { id: 'U001', name: 'Nguyễn Văn A', totalSpent: 500000, action: '[Xem chi tiết]' },
  { id: 'U002', name: 'Trần Thị B', totalSpent: 300000, action: '[Xem chi tiết]' },
  { id: 'U003', name: 'Lê Minh C', totalSpent: 800000, action: '[Xem chi tiết]' },
  { id: 'U004', name: 'Phạm Hồng D', totalSpent: 700000, action: '[Xem chi tiết]' },
  { id: 'U005', name: 'Võ Mai E', totalSpent: 400000, action: '[Xem chi tiết]' },
  { id: 'U006', name: 'Ngô Thị F', totalSpent: 900000, action: '[Xem chi tiết]' },
  { id: 'U007', name: 'Nguyễn Văn G', totalSpent: 500000, action: '[Xem chi tiết]' },
  { id: 'U008', name: 'Trần Thị H', totalSpent: 300000, action: '[Xem chi tiết]' },
  { id: 'U009', name: 'Lê Minh I', totalSpent: 800000, action: '[Xem chi tiết]' },
  { id: 'U010', name: 'Phạm Hồng J', totalSpent: 700000, action: '[Xem chi tiết]' }
];

// Các cột cho bảng
const columns = [
  {
    name: <span style={{ fontSize: '0.9rem' }}>Mã khách hàng</span>,
    selector: row => row.id,
    sortable: true,
  },
  {
    name: <span style={{ fontSize: '0.9rem' }}>Tên khách hàng</span>,
    selector: row => row.name,
    sortable: true,
  },
  {
    name: <span style={{ fontSize: '0.9rem' }}>Tổng chi tiêu</span>,
    selector: row => row.totalSpent,
    sortable: true,
    cell: row => `${row.totalSpent.toLocaleString()} VND`,  // Hiển thị tổng chi tiêu theo định dạng tiền tệ
  },
  {
    name: <span style={{ fontSize: '0.9rem' }}>Hành động</span>,
    selector: row => row.action,
    sortable: true,
  },
];

const TableTopUser = () => {
  const [search, setSearch] = useState('');
  
  const handleFilter = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="wrap-top-user">
      <div className='-header-top-prd' style={{
          borderRadius: "5px 5px 0 0",
        }}>
        <h3>Top 10 khách hàng tiêu dùng nhiều</h3>

        <input
            type="text"
            placeholder="Tìm kiếm sản phẩm"
            value={search}
            onChange={handleFilter}
            style={{ 
                marginRight: '10px',
                padding: '10px', 
                width: '250px',
                border: "1px solid rgba(175, 175, 175, 0.5)",
                background: 'rgba(251, 251, 251, 0.971)',
                outline: 'none',
                borderRadius: "5px"
            }}
        />

      </div>

      {/* Bảng DataTable */}
      <div style={{
        maxHeight: '320px',
        overflowY: 'auto',
        border: "1px solid rgba(175, 175, 175, 0.5)",
        borderRadius: "5px"
      }}>
        <DataTable
          columns={columns}
          data={data}
          fixedHeader
          fixedHeaderScrollHeight="295px"  // Giới hạn chiều cao cho phần thân cuộn
          responsive
          highlightOnHover
          striped
          pagination={false}  // Bỏ phân trang
        />
      </div>
    </div>
  );
};

export default TableTopUser;
