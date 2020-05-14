create table game_room
(
  id                            bigserial    not null,
    code varchar(6) unique  not null,
    type varchar(25) not null,
    name varchar(25),
    round integer default 1 not null,
    game_room varchar(25) not null,
primary key (id)
);

create table player
(
  id                            bigserial    not null,
    game_room_id bigint not null references game_room(id),
    "name"  varchar(100) not null,
    unique("name", game_room_id),
    primary key (id)
);

create table answer
(
  id                            bigserial    not null,
    answer varchar,
    correct boolean,
    bonus boolean,
primary key (id)
);

create table game_round
(
  id                            bigserial    not null,
    round bigint not null,
    player_id bigint references player(id) not null,
    answer1_id bigint references answer(id),
    answer2_id bigint references answer(id),
    answer3_id bigint references answer(id),
    answer4_id bigint references answer(id),
    answer5_id bigint references answer(id),
    answer6_id bigint references answer(id),
    answer7_id bigint references answer(id),
    answer8_id bigint references answer(id),
    answer9_id bigint references answer(id),
    answer10_id bigint references answer(id),
    answer_theme_id bigint references answer(id),
primary key (id)
);


