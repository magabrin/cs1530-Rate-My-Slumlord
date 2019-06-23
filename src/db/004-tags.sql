create table if not exists rms.tags
(
	tid serial not null,
	tag varchar(30) not null,
	constraint tags_pk
		primary key (tid)
);

