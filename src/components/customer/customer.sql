SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `customer` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `customer`;

-- Table structure for table 'customer'

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `cid` INT(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(70) NOT NULL,
  `c_address` varchar(150) NOT NULL,
  `billing_address` VARCHAR(150) NOT NULL,
  `phone` INT(20) NOT NULL,

  PRIMARY KEY (`CID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `customer` (`cid`, `name`, `email`, `c_address`, `billing_address`, `phone`) VALUES
(101, 'John Smith', 'john.smith@example.com', '15 Bedok Reservoir View, Singapore 479233', '18 Howard Road, #05-02, Singapore 369585', '93792910')
(102, 'Jane Doe', 'jane.doe@example.com', '32 Cairnhill Rise, Singapore 229683', '6 Temasek Boulevard, #38-03, Suntec Tower Four, Singapore 038986', '95556782')
(103, 'Bob Johnson', 'bob.johnson@example.com', '10 Pasir Ris Drive 10, Singapore 519525', '15 Scotts Road, #07-01, Thong Teck Building, Singapore 228218', '99012485')
(104, 'Samantha Lee', 'samantha.lee@example.com', '1 Leng Kee Road, Singapore 159089', '1 North Bridge Road, #14-06, High Street Centre, Singapore 179094', '93728492')
(105, 'Max Williams', 'max.williams@example.com', '5A Hazel Park Terrace, Singapore 678949', '5 Shenton Way, #18-01, UIC Building, Singapore 068808', '95629471')
(106, 'Karen Lee', 'karen.lee@example.com', '24A Lorong Liput, Singapore 277736', '12 Marina View, #17-01, Asia Square Tower 2, Singapore 018961', '98368291')
(107, 'Tom Smith', 'tom.smith@example.com', '2 Jurong East Central 1, Singapore 609731', '8 Cross Street, #16-01, PWC Building, Singapore 048424', '94719395')
(108, 'Emily Brown', 'emily.brown@example.com', '14 Jalan Kuras, Singapore 577727', '20 McCallum Street, #18-01, Tokio Marine Centre, Singapore 069046', '94728428')
(109, 'Mark Johnson', 'mark.johnson@example.com', '7 Woodlands Square, Singapore 738099', '30 Raffles Place, #23-00, Chevron House, Singapore 048622', '93728174')
(110, 'Jessica Lee', 'jessica.lee@example.com', '80 Marine Parade Central, Singapore 440080', '60 Anson Road, #15-01, Mapletree Anson, Singapore 079914', '93746172')