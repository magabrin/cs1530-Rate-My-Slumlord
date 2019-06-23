create table if not exists rms.report
(
	rid integer not null,
	id serial not null,
	date date not null,
	reason integer not null,
	note varchar(1000) not null,
	assignee varchar(30),
	status boolean default false not null,
	constraint report_pk
		primary key (rid, id),
	constraint report_reportreasons_id_fk
		foreign key (reason) references rms.report_reasons,
	constraint report_users_username_fk
		foreign key (assignee) references rms.users
			on update cascade on delete set null
);

comment on column rms.report.status is 'True==Closed Report';

