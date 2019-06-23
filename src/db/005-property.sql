create table if not exists rms.property
(
	pid serial not null,
	llid integer,
	house_number varchar(6) not null,
	street varchar(30) not null,
	constraint property_pk
		primary key (pid),
	constraint property_landlord_llid_fk
		foreign key (llid) references rms.landlord
			on update restrict on delete set null
			deferrable initially deferred
);

