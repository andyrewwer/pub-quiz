create table game_room
(
  id                            bigserial    not null,
    code varchar(6) unique  not null,
    type varchar(25) not null,
    name varchar(25),
    round integer default 1 not null,
    question integer,
    status varchar(25) not null,
    player_id integer default 1,
    time_remaining integer default -1,
primary key (id)
);

create table player
(
  id                            bigserial    not null,
    game_room_id bigint not null references game_room(id),
    "name"  varchar(100) not null,
    score integer default 0,
    unique("name", game_room_id),
    primary key (id)
);

create table quiz_answer
(
  id                            bigserial    not null,
    answer varchar,
    correct boolean,
    bonus boolean,
primary key (id)
);

create table quiz_game_round
(
  id                            bigserial    not null,
    round bigint not null,
    player_id bigint references player(id) not null,
    game_room_id bigint references game_room(id) not null,
    answer1_id bigint references quiz_answer(id),
    answer2_id bigint references quiz_answer(id),
    answer3_id bigint references quiz_answer(id),
    answer4_id bigint references quiz_answer(id),
    answer5_id bigint references quiz_answer(id),
    answer6_id bigint references quiz_answer(id),
    answer7_id bigint references quiz_answer(id),
    answer8_id bigint references quiz_answer(id),
    answer9_id bigint references quiz_answer(id),
    answer10_id bigint references quiz_answer(id),
    answer_theme_id bigint references quiz_answer(id),
primary key (id)
);


