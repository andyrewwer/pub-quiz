ALTER TABLE game_room ADD COLUMN player_id integer default 1;
ALTER TABLE imagine_if_game_round ADD COLUMN selected_player_id integer default 1;

