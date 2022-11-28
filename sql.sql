
create table user (`uid` bigint(32) auto_increment not null,`name` text,`surn` text,`city` text,`skype` text,`telegram` text,`twitter` text,
`mail` varchar(256),`usrid` text,`country` text,`number` text,`gender` set('male','female') default 'male',`acc_type` set('employer','seeker') default 'seeker',`reg_time` bigint(32) default '0',`last_visit` bigint(32) default '0',`on_site` bigint(32) default '0',
primary key(uid), unique key(mail)) auto_increment=1;


alter table user add password text default '0';



create table contact (`post_id` bigint(32) auto_increment not null,`time` text DEFAULT NOW(),`name` text,`mail` text,`number` text,`subject` text,`desc` text, primary key(post_id) ) auto_increment=1;



