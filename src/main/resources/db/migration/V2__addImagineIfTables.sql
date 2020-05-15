create table imagine_if_question
(
    id   bigserial    not null,
    question varchar not null,
    answer1 varchar(50) not null,
    answer2 varchar(50) not null,
    answer3 varchar(50) not null,
    answer4 varchar(50) not null,
    answer5 varchar(50) not null,
    answer6 varchar(50) not null,

    primary key (id)
);

create table imagine_if_game_round
(
  id                            bigserial    not null,
    game_room_id bigint not null references game_room(id),
    player_id bigint not null references player(id),
    round int not null,
    answer int,
    question_id bigint not null references imagine_if_question(id),
    answerNumber int,
primary key (id)
);

insert into imagine_if_question (question, answer1, answer2, answer3, answer4, answer5, answer6) VALUES
 ('Imagine If [person] were a car, which would he/she be?', 'Limousine', 'Pickup Truck', 'Hearse', 'Porsche', 'Smart Car', 'Trash Truck'),
 ('Imagine If [person] were a piece of furniture, which would he/she be?', 'Recliner', 'Picnic Table', 'Vanity', 'Italian leather sofa', 'Desk', 'Milk crate'),
 ('Imagine If [person] were a room, which would he/she be?', 'Study', 'Kitchen', 'Wine Cellar', 'Bedroom', 'Bathroom', 'Darkroom');

