-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 26, 2021 at 08:49 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbase_development`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `userId`, `content`, `attachment`, `likes`, `createdAt`, `updatedAt`) VALUES
(1, 19, 'hello à tous', ' ', 0, '2021-01-04 09:45:50', '2021-01-04 09:45:50'),
(19, 14, 'Aujourdhui j\'ai compté 1300 comptes sur notre nouvelle plateforme!!', ' ', 0, '2021-01-17 02:45:41', '2021-01-17 02:45:41'),
(21, 16, 'Rendez vous le 13 mars pour notre réunion !! y aura du monde ?', NULL, 0, '2021-01-23 12:10:47', '2021-01-23 14:07:22');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20201210145657-create-user.js'),
('20201210145935-create-message.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userName`, `email`, `password`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(13, 'flo6591', 'flo6541@pos.fr', '$2b$10$TpwzsdXfftrRjO1wbvpBxuTSFc8.icYDNaG06XZtVEKqU/IO5PC2a', 0, '2020-12-18 07:40:25', '2021-01-22 13:13:34'),
(14, 'flo654', 'flo654@pos.fr', '$2b$10$Yr1UggCjUjbXDGDeuCZib.Duvy19A8VjPXILM.pWnPu/3G2Jj4a1K', 1, '2020-12-18 07:40:49', '2021-01-26 16:19:05'),
(16, 'flo655', 'flo655@pos.fr', '$2b$10$Jt7BWhYu7TJNS.eBLpM.sO5bRO0bw2LBd/S4jELWTUlL45wddFC1i', 1, '2020-12-18 11:35:35', '2020-12-18 11:35:35'),
(17, 'flo656', 'flo656@pos.fr', '$2b$10$XtDxdQ4nBVZu6vXamz/wYuOTM8M70lV.qRrouGO.vNQse4gMnT/Ra', 0, '2020-12-18 12:08:27', '2020-12-18 12:08:27'),
(18, 'flo657', 'flo657@pos.fr', '$2b$10$clYxZxy30dgRYEctqNwh7OLzHWkxE6x3XfMkBQk78rMExs0Z84xzW', 0, '2020-12-18 13:37:49', '2020-12-18 13:37:49'),
(19, 'flo658', 'flo658@pos.fr', '$2b$10$Rd2I.yWPw1JTJvC6WYSOyO1F3XEsJWOpfMnLlsGIgTeeIGDSUbaaG', 1, '2020-12-22 13:11:24', '2021-01-22 13:54:02'),
(21, 'florent2', 'florent2@google.com', '$2b$10$nEqENKT.yvPrwbky6kqwHeP8OHDR6TtM4R8FpDo1GYvjdwD/z62T.', 0, '2021-01-20 15:09:08', '2021-01-20 15:09:08'),
(23, 'florent12', 'florent12@google.com', '$2b$10$inQ7LH1GtMCmWSkDWHOTwu/B5zPYPes..h68iU.GwroRtxCkb7Ok6', 0, '2021-01-25 05:04:47', '2021-01-25 05:04:47'),
(24, 'admin', 'admin@google.com', '$2b$10$dv61RjTspMiNBdYxlWmo9.VqJBAPRmC9cvBa0NBWeuQsa8EQnRFTy', 1, '2021-01-25 05:07:09', '2021-01-25 05:07:09'),
(25, 'florent13', 'florent13@google.com', '$2b$10$bzCsrZFLpE/zZ6k2ysPTm.Ed0f5ansbNOGZ0lrUc0yKKz5BkJr3dC', 0, '2021-01-25 05:13:11', '2021-01-25 05:13:11'),
(26, 'sds', 'a@b.com', '$2b$10$p.A/31XP8/jh7QkgMMfwNuz4Cl42/K7MM2ZMspBRdtNQSzli8zrei', 0, '2021-01-25 08:08:42', '2021-01-25 08:08:42'),
(27, 'floTheKiller', 'c@c.Com', '$2b$10$gbmLxfpOPxOrgCjCsMMyMeSm.KFpRWbe9xrRYnSAFuKvLg2FeBQm6', 0, '2021-01-25 11:17:03', '2021-01-25 11:17:03'),
(28, 'flat', 'fla@google.com', '$2b$10$B7NH7FaWY/caYNtGcLCnruxz2BiZb8Rh.TesxJAj7UTUTlXkGW0E6', 0, '2021-01-25 11:34:57', '2021-01-25 11:34:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
