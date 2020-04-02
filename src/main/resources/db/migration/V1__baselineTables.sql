create table player
(
  id                            bigserial    not null,
    roomcode varchar(4) not null,
    "name"  varchar(100) unique not null,
primary key (id)
);
-- TODO UNIQUENESS SHOULD BE COMPOUND KEY
-- TODO roomcode should be own table?
