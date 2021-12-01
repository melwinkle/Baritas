-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 01, 2021 at 11:46 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baritas`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) NOT NULL,
  `restaurant_view` int(11) NOT NULL DEFAULT 1,
  `img` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `restaurant_view`, `img`) VALUES
(1, 'Starters', 1, ''),
(2, 'Soups', 2, '1595172136-75-baritas-adenta.jpg'),
(3, 'Drinks', 1, 'no_image');

-- --------------------------------------------------------

--
-- Table structure for table `delivery`
--

CREATE TABLE `delivery` (
  `delivery_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `customer_name` varchar(50) NOT NULL,
  `customer_number` varchar(11) NOT NULL,
  `customer_location` varchar(256) DEFAULT NULL,
  `delivery_mode` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `Unit_price` varchar(50) NOT NULL,
  `in_stock` int(11) NOT NULL,
  `Measurement` varchar(10) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `in_stock_limit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`product_id`, `product_name`, `Unit_price`, `in_stock`, `Measurement`, `restaurant_id`, `in_stock_limit`) VALUES
(1, 'Tomato', '2.00', 170, 'kg', 1, 50),
(2, 'Onions', '1.20', 120, 'kg', 1, 50);

-- --------------------------------------------------------

--
-- Table structure for table `inventory_reduction`
--

CREATE TABLE `inventory_reduction` (
  `reduction_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `reduction` int(11) NOT NULL,
  `inventory_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inventory_reduction`
--

INSERT INTO `inventory_reduction` (`reduction_id`, `date`, `reduction`, `inventory_id`) VALUES
(1, '2021-11-25', 11, 1),
(2, '2021-11-24', 11, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Menu`
--

CREATE TABLE `Menu` (
  `menu_id` int(11) NOT NULL,
  `name_of_food` varchar(100) NOT NULL,
  `category_id` int(11) NOT NULL,
  `price` varchar(20) NOT NULL,
  `img` varchar(50) NOT NULL,
  `size` varchar(2) DEFAULT NULL,
  `restaurant_view` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Menu`
--

INSERT INTO `Menu` (`menu_id`, `name_of_food`, `category_id`, `price`, `img`, `size`, `restaurant_view`) VALUES
(1, 'Meat Spring Rolls(3)', 1, '15.00', 'no_image', 'N', 1),
(2, 'Pineapple Juice', 3, '10.00', '1595172136-75-baritas-adenta.jpg', 'N', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `bill_no` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `waiter_name` varchar(50) NOT NULL,
  `total_cost` varchar(50) NOT NULL,
  `stats` varchar(10) NOT NULL DEFAULT 'Pending',
  `restaurant_id` int(11) NOT NULL,
  `table_id` varchar(50) NOT NULL,
  `dine_type` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `sub_total` varchar(10) NOT NULL,
  `special_notes` text DEFAULT NULL,
  `drink_stats` int(11) NOT NULL DEFAULT 0,
  `food_stats` int(11) NOT NULL DEFAULT 0,
  `drink_stat` int(11) NOT NULL DEFAULT 0,
  `food_stat` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `bill_no`, `date`, `payment_method`, `waiter_name`, `total_cost`, `stats`, `restaurant_id`, `table_id`, `dine_type`, `user_id`, `sub_total`, `special_notes`, `drink_stats`, `food_stats`, `drink_stat`, `food_stat`) VALUES
(1, '1', '2021-11-02', 'Cash', 'Waiter 1', '30.00', 'Pending', 1, '1', 'Dine-In', 4, '29.75', NULL, 0, 1, 0, 1),
(2, '2', '2021-11-29', 'Cash', 'Patricia Pelr', '10.00', 'Pending', 1, '1', 'Dine-In', 4, '9.75', NULL, 1, 1, 1, 0),
(3, '3', '2021-11-29', 'Cash', 'Patricia Pearl', '10.00', 'Pending', 1, '1', 'Dine-In', 4, '9.75', NULL, 0, 1, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `item_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`item_id`, `order_id`, `menu_id`, `quantity`, `amount`) VALUES
(1, 1, 1, 2, '30.00'),
(2, 2, 2, 1, '10.00');

-- --------------------------------------------------------

--
-- Table structure for table `payment_mode`
--

CREATE TABLE `payment_mode` (
  `payment_id` int(11) NOT NULL,
  `mode` varchar(50) NOT NULL,
  `delivery` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `production`
--

CREATE TABLE `production` (
  `production_id` int(11) NOT NULL,
  `product_name` varchar(256) NOT NULL,
  `in_stock` int(11) NOT NULL,
  `measurement` varchar(50) NOT NULL,
  `recipe` text NOT NULL,
  `stock_limit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `production`
--

INSERT INTO `production` (`production_id`, `product_name`, `in_stock`, `measurement`, `recipe`, `stock_limit`) VALUES
(1, 'Jollof Sauce', 100, 'packs', '0.1 Tomatoes', 50),
(2, 'Chicken Sauce', 100, 'kg', '0.2 Chicken', 50);

-- --------------------------------------------------------

--
-- Table structure for table `production_alert`
--

CREATE TABLE `production_alert` (
  `alert_id` int(11) NOT NULL,
  `AlertDate` date NOT NULL,
  `AlertMessage` varchar(256) NOT NULL,
  `AlertStatus` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `production_transaction`
--

CREATE TABLE `production_transaction` (
  `transaction_id` int(10) NOT NULL,
  `Date` date NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `Quantity` int(100) NOT NULL,
  `Transaction_Status` varchar(10) NOT NULL DEFAULT 'Pending'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `production_transaction`
--

INSERT INTO `production_transaction` (`transaction_id`, `Date`, `restaurant_id`, `Quantity`, `Transaction_Status`) VALUES
(1, '2021-11-02', 1, 10, 'Completed');

-- --------------------------------------------------------

--
-- Table structure for table `product_transact_item`
--

CREATE TABLE `product_transact_item` (
  `production_trans_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `transaction_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_transact_item`
--

INSERT INTO `product_transact_item` (`production_trans_id`, `product_id`, `quantity`, `transaction_id`) VALUES
(1, 1, 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE `restaurant` (
  `restaurant_id` int(11) NOT NULL,
  `restaurant_name` varchar(50) NOT NULL,
  `Rest_token` varchar(50) NOT NULL,
  `table_number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`restaurant_id`, `restaurant_name`, `Rest_token`, `table_number`) VALUES
(1, 'Adenta', 'vAdex201', 0),
(2, 'Atomic', 'vAtox201', 0),
(3, 'Legon Campus', 'vLegx201', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `Firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `Pass` varchar(100) NOT NULL,
  `user_role` varchar(2) NOT NULL,
  `stats` varchar(2) NOT NULL DEFAULT '1',
  `username` varchar(25) NOT NULL,
  `Restaurant` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `Firstname`, `lastname`, `Pass`, `user_role`, `stats`, `username`, `Restaurant`) VALUES
(1, 'Pearl', 'Bari', 'password1', '1', '1', 'PearlB', 0),
(2, 'Ama', 'Bani', 'password2', '2', '1', 'AmaB', 1),
(3, 'Kwabena', 'Bord', 'password3', '3', '1', 'KwabsB', 1),
(4, 'Aileen', 'Roff', 'password4', '4', '1', 'AileenR', 1),
(5, 'Lisa', 'Ray', 'password5', '5', '1', 'LisaR', 0),
(6, 'Papa', 'Kors', 'password6', '6', '1', 'PapaK', 1),
(7, 'Lily', 'Flower', 'password7', '7', '1', 'LilyF', 0),
(8, 'Richard', 'Rogas', 'password9', '4', '1', 'RPred', 1);

-- --------------------------------------------------------

--
-- Table structure for table `waiters`
--

CREATE TABLE `waiters` (
  `waiter_id` int(11) NOT NULL,
  `waiter_name` varchar(50) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `stats` int(10) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `waiters`
--

INSERT INTO `waiters` (`waiter_id`, `waiter_name`, `restaurant_id`, `stats`) VALUES
(1, 'Patricia Pearl', 1, 1),
(2, 'Philemina Fred', 1, 1),
(3, 'Poga Roga', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`delivery_id`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `inventory_reduction`
--
ALTER TABLE `inventory_reduction`
  ADD PRIMARY KEY (`reduction_id`);

--
-- Indexes for table `Menu`
--
ALTER TABLE `Menu`
  ADD PRIMARY KEY (`menu_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `payment_mode`
--
ALTER TABLE `payment_mode`
  ADD PRIMARY KEY (`payment_id`);

--
-- Indexes for table `production`
--
ALTER TABLE `production`
  ADD PRIMARY KEY (`production_id`);

--
-- Indexes for table `production_alert`
--
ALTER TABLE `production_alert`
  ADD PRIMARY KEY (`alert_id`);

--
-- Indexes for table `production_transaction`
--
ALTER TABLE `production_transaction`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `product_transact_item`
--
ALTER TABLE `product_transact_item`
  ADD PRIMARY KEY (`production_trans_id`);

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`restaurant_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `waiters`
--
ALTER TABLE `waiters`
  ADD PRIMARY KEY (`waiter_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `delivery`
--
ALTER TABLE `delivery`
  MODIFY `delivery_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `inventory_reduction`
--
ALTER TABLE `inventory_reduction`
  MODIFY `reduction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Menu`
--
ALTER TABLE `Menu`
  MODIFY `menu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `payment_mode`
--
ALTER TABLE `payment_mode`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `production`
--
ALTER TABLE `production`
  MODIFY `production_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `production_alert`
--
ALTER TABLE `production_alert`
  MODIFY `alert_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `production_transaction`
--
ALTER TABLE `production_transaction`
  MODIFY `transaction_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product_transact_item`
--
ALTER TABLE `product_transact_item`
  MODIFY `production_trans_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `restaurant_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `waiters`
--
ALTER TABLE `waiters`
  MODIFY `waiter_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
