create table if not exists rms.review_tags
(
	rid integer not null,
	tid integer not null,
	constraint review_tags_pk
		primary key (rid, tid),
	constraint review_tags_review_rid_fk
		foreign key (rid) references rms.review
			on update cascade on delete cascade,
	constraint review_tags_tags_tid_fk
		foreign key (tid) references rms.tags
);

