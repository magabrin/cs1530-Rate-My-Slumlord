create table if not exists rms.users
(
	username varchar(20) not null,
	password varchar(50) not null,
	permissions smallint not null,
	status boolean default true not null,
	constraint users_pk
		primary key (username)
);

comment on table rms.users is 'Moderator & Admin Table';

