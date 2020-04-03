create table answer
(
  id                            bigserial    not null,
    answer varchar,
    correct boolean,
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

