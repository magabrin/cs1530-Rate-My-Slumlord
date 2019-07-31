
create table if not exists landlord
(
    llid smallserial not null,
    name varchar(30) not null,
    constraint landlord_pk
        primary key (llid)
);

create table if not exists property
(
    pid          serial      not null,
    llid         integer,
    house_number varchar(6)  not null,
    street       varchar(30) not null,
    constraint property_pk
        primary key (pid),
    constraint property_landlord_llid_fk
        foreign key (llid) references landlord
            on update restrict on delete set null
            deferrable initially deferred
);

create table if not exists users
(
    username    varchar(20)          not null,
    password    varchar(50)          not null,
    permissions smallint             not null,
    status      boolean default true not null,
    constraint users_pk
        primary key (username)
);

comment on table users is 'Moderator & Admin Table';

create table if not exists report_reasons
(
    id     smallserial not null,
    reason varchar(30) not null,
    constraint reportreasons_pk
        primary key (id)
);

create table if not exists review
(
    rid           serial        not null,
    llid          integer       not null,
    pid           integer,
    date          date          not null,
    publish_state smallint default 0,
    publisher     varchar(30),
    likes         integer  default 0,
    dislikes      integer  default 0,
    overall       smallint      not null,
    dependability smallint      not null,
    rent          integer,
    first_time    boolean,
    rent_again    boolean,
    comment       varchar(1000) not null,
    constraint review_pk
        primary key (rid),
    constraint review_landlord_llid_fk
        foreign key (llid) references landlord
            on update restrict on delete cascade,
    constraint review_property_pid_fk
        foreign key (pid) references property
            on update cascade on delete set null,
    constraint review_users_username_fk
        foreign key (publisher) references users
            on update cascade on delete set null
);

create table if not exists tags
(
    tid serial      not null,
    tag varchar(30) not null,
    constraint tags_pk
        primary key (tid)
);

create table if not exists review_tags
(
    rid integer not null,
    tid integer not null,
    constraint review_tags_pk
        primary key (rid, tid),
    constraint review_tags_review_rid_fk
        foreign key (rid) references review
            on update cascade on delete cascade,
    constraint review_tags_tags_tid_fk
        foreign key (tid) references tags
);

create table if not exists report
(
    rid      integer               not null,
    id       serial                not null,
    date     date                  not null,
    reason   integer               not null,
    note     varchar(1000)         not null,
    assignee varchar(30),
    status   boolean default false not null,
    constraint report_pk
        primary key (rid, id),
    constraint report_reportreasons_id_fk
        foreign key (reason) references report_reasons,
    constraint report_users_username_fk
        foreign key (assignee) references users
            on update cascade on delete set null
);

comment on column report.status is 'True==Closed Report';


