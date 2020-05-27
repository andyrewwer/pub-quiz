ALTER TABLE player ADD COLUMN IF NOT EXISTS active boolean default true;
ALTER TABLE player DROP CONSTRAINT IF EXISTS player_name_game_room_id_key;
ALTER TABLE player ADD CONSTRAINT player_name_game_room_id_active_key UNIQUE ("name", game_room_id, active);
