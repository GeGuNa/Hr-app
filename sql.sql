
create table user (`uid` bigint(32) auto_increment not null,`name` text,`surn` text,`city` text,`skype` text,`telegram` text,`twitter` text,
`mail` varchar(256),`usrid` text,`country` text,`number` text,`gender` set('male','female') default 'male',`acc_type` set('employer','seeker') default 'seeker',`reg_time` bigint(32) default '0',`last_visit` bigint(32) default '0',`on_site` bigint(32) default '0',
primary key(uid), unique key(mail)) auto_increment=1;
