-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2021 at 04:51 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todolist_hbs`
--

-- --------------------------------------------------------

--
-- Table structure for table `categorie`
--

CREATE TABLE `categorie` (
  `id` varchar(100) NOT NULL,
  `title` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categorie`
--

INSERT INTO `categorie` (`id`, `title`) VALUES
('0798fecf-01f9-4db5-857a-2c9d757580e2', 'Categorie 2'),
('34cd688c-76b1-4891-aaac-b902a4b02e97', 'Planning'),
('50856db5-a219-4b28-8907-ede2f4d7fbaf', 'Meetings'),
('762e0966-29fd-4d19-bc28-6cf74859125f', 'Organization');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `done` int(11) DEFAULT NULL,
  `archived` tinyint(1) DEFAULT NULL,
  `id_cat` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `title`, `done`, `archived`, `id_cat`) VALUES
('0798fecf-01f9-4db5-857a-2c9d157580e2', 'meetings for today', 1, 1, '0798fecf-01f9-4db5-857a-2c9d757580e2'),
('080c6e33-74b3-44b2-a7e5-206c221e3c95', 'Do shopping', 1, 1, '0798fecf-01f9-4db5-857a-2c9d757580e2'),
('ccfefb0e-9baf-4135-ae5c-f104c5a411bb', 'test organisation event', 1, 1, '762e0966-29fd-4d19-bc28-6cf74859125f'),
('d472ef67-cfca-4e73-b14e-8543dc137ca2', 'meeting with the team', 1, 1, '0798fecf-01f9-4db5-857a-2c9d757580e2'),
('f8773881-6810-4c6b-947e-ad4d0db5f094', 'meeting for tomorrow', 1, 1, '50856db5-a219-4b28-8907-ede2f4d7fbaf'),
('fc3fc82c-83bb-4ea2-95cd-a11ac676f74c', 'Do shopping from outside', 1, 0, '34cd688c-76b1-4891-aaac-b902a4b02e97');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cat` (`id_cat`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`id_cat`) REFERENCES `categorie` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
