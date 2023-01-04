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


insert into user_posts (`author`,`title`,`message`) values(10,'blab','buhahaha');



CREATE TABLE `category` (
  `cid` bigint(32) NOT NULL AUTO_INCREMENT,
  `namd` text DEFAULT NULL,
  `title` text DEFAULT NULL,
  `description` bigint(32) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;




alter table `job` add `cat_id` bigint(32) DEFAULT NULL;
alter table `job` add  foreign key (`cat_id`) references `category` (`cid`);



CREATE TABLE `friends` (
  `fid` bigint(32) NOT NULL AUTO_INCREMENT,
  `when` bigint(32) DEFAULT NULL,
  `text` text DEFAULT NULL,
  `user` bigint(32) DEFAULT NULL,
  `who` bigint(32) DEFAULT NULL,
  `post_status` text default '',
  PRIMARY KEY (`fid`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;


alter table `friends` add `cat_id` bigint(32) DEFAULT NULL;


alter table `friends` add  foreign key (`user`) references `user` (`uid`);
alter table `friends` add  foreign key (`who`) references `user` (`uid`);



insert into friends (`user`,`who`) values(1,9);
insert into friends (`user`,`who`) values(1,10);


insert into user (`name`,`surn`,`gender`) values('john','hongmeng','male');




CREATE TABLE `user_post_comments` (
  `pid` bigint(32) NOT NULL AUTO_INCREMENT,
  `when_posted` bigint(32) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `message` text DEFAULT NULL,
  `author` bigint(32) DEFAULT NULL,
  `at` bigint(32) DEFAULT NULL,
  `post_type` text default '',
  `post_status` text default '',
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;


alter table `user_post_comments` add  foreign key (`author`) references `user` (`uid`);
alter table `user_post_comments` add  foreign key (`at`) references `user` (`uid`);
