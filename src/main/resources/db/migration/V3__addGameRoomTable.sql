create table game_room
(
  id                            bigserial    not null,
    code varchar(6) unique  not null,
    type varchar(25) not null,
    name varchar(25),
primary key (id)
);

alter table player add column game_room_id bigint references game_room(id);

insert into game_room (code, type, name) VALUES ('ANDREW', 'QUIZ', 'Andrews Pub Quiz');

update player set game_room_id = 1;

alter table player alter column game_room_id set not null;

ALTER TABLE player ADD UNIQUE ("name", game_room_id);
ALTER TABLE player drop constraint if exists player_name_key;
ALTER TABLE player alter column quizcode drop not null;
