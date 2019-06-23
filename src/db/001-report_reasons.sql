create table if not exists rms.report_reasons
(
	id smallserial not null,
	reason varchar(30) not null,
	constraint reportreasons_pk
		primary key (id)
);

