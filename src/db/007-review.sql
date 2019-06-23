create table if not exists rms.review
(
	rid serial not null,
	llid integer not null,
	pid integer,
	date date not null,
	publish_state smallint default 0,
	publisher varchar(30),
	likes integer default 0,
	dislikes integer default 0,
	overall smallint not null,
	dependability smallint not null,
	rent integer,
	first_time boolean,
	rent_again boolean,
	comment varchar(1000) not null,
	constraint review_pk
		primary key (rid),
	constraint review_landlord_llid_fk
		foreign key (llid) references rms.landlord
			on update restrict on delete cascade,
	constraint review_property_pid_fk
		foreign key (pid) references rms.property
			on update cascade on delete set null,
	constraint review_users_username_fk
		foreign key (publisher) references rms.users
			on update cascade on delete set null
);

