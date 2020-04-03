create table player
(
  id                            bigserial    not null,
    quizcode varchar(6) not null,
    "name"  varchar(100) unique not null,
primary key (id)
);
-- TODO UNIQUENESS SHOULD BE COMPOUND KEY
-- TODO quizcode should be own table?
