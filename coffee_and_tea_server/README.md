# DATABASE TEST
    - truong 'status' => 'orders' table gom cac trang thai: '0', '1', '3', '4'
                '0' : hoàn thành
                '1' : đang xử lý
                '2' : đang giao hàng
                '3' : đã hủy
    - 'pay_methods' => 'orders' : 
                '0' : thanh toan khi nhan hang
                '1' : thanh toan bang CoffeePay (cai nay la tru vao so du trong tai khoan cua khach hang)

# ORDERS
INSERT INTO orders (cus_id, prd_id, quantity, amount, pay_methods, status, created_at, updated_at) VALUES
('1', '1', '4', '100000', '0', '0', NOW(), NOW()),
('2', '2', '3', '165000', '1', '1', NOW(), NOW()),
('3', '3', '1', '45000', '1', '3', NOW(), NOW()),
('4', '4', '2', '70000', '1', '2', NOW(), NOW()),
('5', '5', '5', '600000', '1', '3', NOW(), NOW()),
('6', '6', '4', '180000', '0', '1', NOW(), NOW()),
('7', '1', '3', '150000', '1', '0', NOW(), NOW()),
('8', '2', '2', '100000', '0', '1', NOW(), NOW()),
('9', '3', '6', '300000', '1', '2', NOW(), NOW()),
('10', '4', '1', '50000', '0', '3', NOW(), NOW()),
('11', '5', '7', '350000', '1', '3', NOW(), NOW()),
('12', '6', '3', '150000', '1', '0', NOW(), NOW()),
('13', '1', '4', '200000', '0', '2', NOW(), NOW()),
('14', '2', '5', '250000', '0', '1', NOW(), NOW()),
('15', '3', '8', '400000', '1', '3', NOW(), NOW()),
('16', '4', '2', '100000', '1', '0', NOW(), NOW()),
('17', '5', '6', '300000', '0', '2', NOW(), NOW()),
('18', '6', '2', '90000', '1', '1', NOW(), NOW()),
('19', '1', '3', '150000', '0', '1', NOW(), NOW()),
('20', '2', '1', '50000', '1', '0', NOW(), NOW());

# PRODUCTS
INSERT INTO products (name, category, description, price, quantity, image, created_at, updated_at) VALUES
('Cà Phê Espresso', 'Coffee', 'Cà phê espresso đặc trưng.', '50000', '100', '', NOW(), NOW()),
('Trà ô long', 'Trà', 'Trà ô long thơm mát.', '50000', '100', '', NOW(), NOW()),
('Trà sữa truyền thống', 'Trà sữa', 'Trà sữa 100% từ sữa.', '50000', '100', '', NOW(), NOW()),
('Bánh trà xanh', 'Bánh ngọt', 'Bánh ngon như trà xanh.', '50000', '100', '', NOW(), NOW()),
('Cà Phê Latte', 'Coffee', 'Cà phê latte thơm ngon.', '60000', '80', '', NOW(), NOW()),
('Trà Đen', 'Trà', 'Trà đen đặc trưng.', '55000', '120', '', NOW(), NOW()),
('Trà sữa matcha', 'Trà sữa', 'Trà sữa matcha hảo hạng.', '65000', '90', '', NOW(), NOW()),
('Bánh quy bơ', 'Bánh ngọt', 'Bánh quy bơ giòn ngon.', '30000', '150', '', NOW(), NOW()),
('Cà Phê Cappuccino', 'Coffee', 'Cà phê cappuccino hấp dẫn.', '70000', '110', '', NOW(), NOW()),
('Trà xanh', 'Trà', 'Trà xanh mát lành.', '50000', '130', '', NOW(), NOW()),
('Trà sữa caramel', 'Trà sữa', 'Trà sữa caramel béo ngậy.', '60000', '95', '', NOW(), NOW()),
('Bánh kem dâu', 'Bánh ngọt', 'Bánh kem dâu tươi ngon.', '80000', '70', '', NOW(), NOW()),
('Cà Phê Mocha', 'Coffee', 'Cà phê mocha ngọt ngào.', '75000', '60', '', NOW(), NOW()),
('Trà ô long nhài', 'Trà', 'Trà ô long nhài thơm dịu.', '55000', '100', '', NOW(), NOW()),
('Trà sữa dâu', 'Trà sữa', 'Trà sữa dâu ngọt ngào.', '65000', '80', '', NOW(), NOW()),
('Bánh su kem', 'Bánh ngọt', 'Bánh su kem mềm mịn.', '40000', '140', '', NOW(), NOW()),
('Cà Phê Americano', 'Coffee', 'Cà phê Americano đậm đà.', '65000', '75', '', NOW(), NOW()),
('Trà Cam', 'Trà', 'Trà cam thơm ngọt.', '45000', '120', '', NOW(), NOW()),
('Trà sữa socola', 'Trà sữa', 'Trà sữa socola đậm đà.', '70000', '85', '', NOW(), NOW());

# CUSTOMERS
INSERT INTO customers (cus_name, gender, phone, email, birth_date, address, balance, image, verify, status, created_at, updated_at) VALUES
('Nguyen Van A', '1','0123456789', 'nguyenvana@example.com', '1990-01-01', '123 Main St, Hanoi', '1000000', 'path/to/image1.jpg', 1, 0, NOW(), NOW()),
('Tran Thi B', '1','0987654321', 'tranthib@example.com', '1992-02-15', '456 Another St, Hanoi', '2000000', 'path/to/image2.jpg', 0, 1, NOW(), NOW()),
('Le Minh C', '0','0912345678', 'leminhc@example.com', '1985-03-20', '789 Street, Hai Phong', '1500000', 'path/to/image3.jpg', 1, 0, NOW(), NOW()),
('Pham Thi D', '1','0934567890', 'phamthid@example.com', '1993-04-10', '321 Boulevard, Da Nang', '2500000', 'path/to/image4.jpg', 0, 1, NOW(), NOW()),
('Nguyen Anh E', '0','0912345679', 'nguyenanhe@example.com', '1988-05-25', '654 Road, Hue', '1200000', 'path/to/image5.jpg', 1, 1, NOW(), NOW()),
('Vu Thi F', '1','0945678901', 'vuthif@example.com', '1991-06-30', '987 Lane, Nha Trang', '5000000', 'path/to/image6.jpg', 0, 0, NOW(), NOW()),
('Hoang Minh G', '0','0976543210', 'hoangming@example.com', '1990-07-14', '123 Village, Can Tho', '4000000', 'path/to/image7.jpg', 1, 1, NOW(), NOW()),
('Bui Thi H', '1','0965432109', 'buih@example.com', '1992-08-05', '321 Park, Quang Ninh', '1800000', 'path/to/image8.jpg', 1, 0, NOW(), NOW()),
('Nguyen Thi I', '1','0911122334', 'nguyenthii@example.com', '1987-09-10', '987 Alley, Hanoi', '2000000', 'path/to/image9.jpg', 0, 1, NOW(), NOW()),
('Le Thi J', '1','0922233445', 'lethij@example.com', '1995-10-15', '456 Alley, Hai Phong', '1500000', 'path/to/image10.jpg', 1, 0, NOW(), NOW()),
('Tran Thi K', '0','0912344555', 'tranthik@example.com', '1993-11-20', '123 Park, Da Nang', '1800000', 'path/to/image11.jpg', 1, 1, NOW(), NOW()),
('Pham Thi L', '1','0934566777', 'phamthil@example.com', '1992-12-25', '321 Lane, Nha Trang', '2200000', 'path/to/image12.jpg', 0, 1, NOW(), NOW()),
('Nguyen Thi M', '0','0912345788', 'nguyenthim@example.com', '1986-01-30', '654 Boulevard, Hue', '1300000', 'path/to/image13.jpg', 1, 0, NOW(), NOW()),
('Vu Thi N', '1','0945678999', 'vuthin@example.com', '1989-03-05', '987 Road, Can Tho', '2000000', 'path/to/image14.jpg', 1, 0, NOW(), NOW()),
('Hoang Thi O', '0','0976543222', 'hoangthio@example.com', '1991-04-12', '123 Lane, Quang Ninh', '2100000', 'path/to/image15.jpg', 0, 1, NOW(), NOW()),
('Bui Thi P', '1','0965432199', 'buihp@example.com', '1994-06-18', '321 Alley, Hanoi', '2400000', 'path/to/image16.jpg', 0, 0, NOW(), NOW()),
('Nguyen Thi Q', '0','0911122333', 'nguyenhiq@example.com', '1987-07-25', '456 Boulevard, Da Nang', '2600000', 'path/to/image17.jpg', 1, 1, NOW(), NOW()),
('Le Thi R', '1','0922233446', 'lethir@example.com', '1991-09-10', '789 Park, Hue', '2700000', 'path/to/image18.jpg', 0, 0, NOW(), NOW());

# REVENUE
-- Doanh thu tháng hiện tại
INSERT INTO revenue (categr_id, prd_id, quantity, total_revenue, date, created_at, updated_at)
VALUES
('1', '1', '4', '200000', '2024-11-01', NOW(), NOW()),
('1', '2', '3', '150000', '2024-11-02', NOW(), NOW()),
('1', '5', '5', '300000', '2024-11-03', NOW(), NOW()),
('2', '6', '4', '220000', '2024-11-04', NOW(), NOW()),
('2', '10', '3', '150000', '2024-11-05', NOW(), NOW()),
('2', '11', '7', '420000', '2024-11-06', NOW(), NOW()),
('3', '7', '2', '130000', '2024-11-07', NOW(), NOW()),
('3', '9', '5', '300000', '2024-11-08', NOW(), NOW()),
('3', '12', '4', '240000', '2024-11-09', NOW(), NOW()),
('4', '8', '6', '180000', '2024-11-10', NOW(), NOW()),
('4', '16', '4', '160000', '2024-11-11', NOW(), NOW()),
('4', '17', '3', '120000', '2024-11-12', NOW(), NOW()),
('1', '3', '2', '100000', '2024-11-13', NOW(), NOW()),
('1', '4', '1', '50000', '2024-11-14', NOW(), NOW()),
('1', '15', '6', '390000', '2024-11-15', NOW(), NOW()),
('1', '13', '3', '150000', '2024-11-16', NOW(), NOW()),
('1', '14', '5', '250000', '2024-11-17', NOW(), NOW()),
('3', '15', '4', '260000', '2024-11-18', NOW(), NOW()),
('3', '13', '2', '130000', '2024-11-19', NOW(), NOW()),
('3', '8', '6', '180000', '2024-11-20', NOW(), NOW());

-- Doanh thu tháng trước
INSERT INTO revenue (categr_id, prd_id, quantity, total_revenue, date, created_at, updated_at)
VALUES
('1', '1', '3', '150000', '2024-10-01', NOW(), NOW()),
('1', '2', '2', '100000', '2024-10-02', NOW(), NOW()),
('1', '5', '4', '240000', '2024-10-03', NOW(), NOW()),
('2', '6', '5', '275000', '2024-10-04', NOW(), NOW()),
('2', '10', '4', '200000', '2024-10-05', NOW(), NOW()),
('2', '11', '6', '360000', '2024-10-06', NOW(), NOW()),
('3', '7', '3', '195000', '2024-10-07', NOW(), NOW()),
('3', '9', '5', '300000', '2024-10-08', NOW(), NOW()),
('3', '12', '6', '360000', '2024-10-09', NOW(), NOW()),
('4', '8', '7', '210000', '2024-10-10', NOW(), NOW()),
('4', '16', '5', '200000', '2024-10-11', NOW(), NOW()),
('4', '17', '4', '160000', '2024-10-12', NOW(), NOW()),
('1', '3', '3', '150000', '2024-10-13', NOW(), NOW()),
('1', '4', '2', '100000', '2024-10-14', NOW(), NOW()),
('1', '15', '5', '325000', '2024-10-15', NOW(), NOW()),
('1', '13', '2', '100000', '2024-10-16', NOW(), NOW()),
('1', '14', '4', '200000', '2024-10-17', NOW(), NOW()),
('3', '15', '3', '195000', '2024-10-18', NOW(), NOW()),
('3', '13', '5', '325000', '2024-10-19', NOW(), NOW()),
('3', '8', '4', '120000', '2024-10-20', NOW(), NOW());


# CATEGORIES
INSERT INTO categories (category, created_at, updated_at) VALUES
('Coffee', NOW(), NOW()),
('Trà', NOW(), NOW()),
('Trà sữa', NOW(), NOW()),
('Bánh ngọt', NOW(), NOW());
