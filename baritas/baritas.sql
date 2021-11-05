-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 05, 2021 at 10:13 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

create database baritas;
use baritas;

CREATE TABLE `inventory` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `Unit_price` varchar(50) NOT NULL,
  `in_stock` int(11) NOT NULL,
  `Measurement` varchar(10) NOT NULL,
  `restaurant` int(11) NOT NULL,
  `in_stock_limit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`product_id`, `product_name`, `category`, `Unit_price`, `in_stock`, `Measurement`, `restaurant`, `in_stock_limit`) VALUES
(1, 'oil', 'Fresh Foods', '0.21', 22000, 'g', 1, 1000),
(2, 'eggs', 'Fresh Foods', '0.83', 30, 'pcs', 1, 10),
(3, 'Lele Rice', 'Fresh Foods', '0.78', 50000, 'g', 1, 25000),
(4, 'Texas Rice', 'Fresh Foods', '0.25', 50000, 'g', 1, 25000),
(5, 'Soy Sauce', 'Fresh Foods', '0.25', 6720, 'g', 1, 1000),
(6, 'Rice Mix', 'Fresh Foods', '0.13', 30000, 'g', 1, 15000);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `user_id` int(11) NOT NULL,
  `log` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Menu`
--

CREATE TABLE `Menu` (
  `menu_id` int(11) NOT NULL,
  `name_of_food` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `price` varchar(20) NOT NULL,
  `img` varchar(50) NOT NULL,
  `size` varchar(2) DEFAULT NULL,
  `restaurant` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Menu`
--

INSERT INTO `Menu` (`menu_id`, `name_of_food`, `category`, `price`, `img`, `size`, `restaurant`) VALUES
(1, 'Egg Fried Rice', 'Food', '16', 'no_image', NULL, 1),
(2, 'Beef Fried Rice', 'Food', '25', 'no_image', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `waiter` varchar(50) NOT NULL,
  `total_cost` varchar(50) NOT NULL,
  `stats` varchar(10) NOT NULL,
  `restaurant` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `menu_id`, `date`, `payment_method`, `waiter`, `total_cost`, `stats`, `restaurant`) VALUES
(1, 1, '2021-11-05', 'Cash', 'Rudiger', '140', 'completed', 1);

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE `restaurant` (
  `restaurant_id` int(11) NOT NULL,
  `restaurant_name` varchar(50) NOT NULL,
  `Rest_token` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`restaurant_id`, `restaurant_name`, `Rest_token`) VALUES
(1, 'Adenta', 'VxAd20'),
(2, 'Legon campus ', 'VxLC20'),
(3, 'Atomic', 'VxAt20');

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
  `stats` varchar(2) NOT NULL,
  `username` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `Firstname`, `lastname`, `Pass`, `user_role`, `stats`, `username`) VALUES
(1, 'Abena', 'Collins', 'password1', '1', '1', 'Acollins');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`user_id`);

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Menu`
--
ALTER TABLE `Menu`
  MODIFY `menu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `restaurant_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
