create table if not exists rms.landlord
(
	llid smallserial not null,
	name varchar(30) not null,
	constraint landlord_pk
		primary key (llid)
);

