DROP TABLE IF EXISTS `company`;
Create Table `company` (
`cid` bigint(32) NOT NULL AUTO_INCREMENT,
`time` bigint(32),
`name` text,
`mail` text,
`number` text,
`description` text,
`country` text, 
`user` bigint(32),
PRIMARY KEY(cid),
FOREIGN KEY (user) REFERENCES user(uid)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `job`;
Create Table `job` (
`jid` bigint(32) NOT NULL AUTO_INCREMENT,
`user` bigint(32),
`cid` bigint(32) ,
`time` bigint(32),
`expire_time` bigint(32),
`name` text,
`mail` text,
`number` text,
`subject` text,
`desc` text, 
PRIMARY KEY(jid),
FOREIGN KEY (user) REFERENCES user(uid),
FOREIGN KEY (cid) REFERENCES company(cid)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
