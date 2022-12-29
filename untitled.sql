CREATE TABLE `user_posts` (
  `pid` bigint(32) NOT NULL AUTO_INCREMENT,
  `when_posted` bigint(32) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `message` text DEFAULT NULL,
  `author` bigint(32) DEFAULT NULL,
  `post_type` text default '',
  `post_status` text default '',
  PRIMARY KEY (`pid`),
  KEY `author` (`author`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;




CREATE TABLE `category` (
  `cid` bigint(32) NOT NULL AUTO_INCREMENT,
  `namd` text DEFAULT NULL,
  `title` text DEFAULT NULL,
  `description` bigint(32) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;




alter table `job` add `cat_id` bigint(32) DEFAULT NULL;
alter table `job` add  foreign key (`cat_id`) references `category` (`cid`);
