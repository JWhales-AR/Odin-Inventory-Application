CREATE TYPE udt_gender AS ENUM ( 'm', 'f' );

CREATE TABLE pokemon (
  dex_id  INTEGER PRIMARY KEY,
  species VARCHAR(32)
);

CREATE TABLE evolution (
  id      INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  pokemon INTEGER REFERENCES pokemon(dex_id),
  next    INTEGER REFERENCES pokemon(dex_id)
);

CREATE TABLE type (
  id   INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(16)
);

CREATE TABLE pokemon_type (
  id      INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  pokemon INTEGER REFERENCES pokemon(dex_id),
  type    INTEGER REFERENCES type(id)
);

CREATE TABLE trainer (
  id     INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name   VARCHAR(16),
  gender udt_gender,
  age    INTEGER
);

CREATE TABLE trainer_pokemon (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  trainer INTEGER REFERENCES trainer(id),
  pokemon INTEGER REFERENCES pokemon(dex_id),
  nickname VARCHAR(32)
);


INSERT INTO pokemon (dex_id, species)
VALUES
  (1, 'Bulbasaur'), (2, 'Ivysaur'), (3, 'Venusaur'),
  (4, 'Charmander'), (5, 'Charmeleon'), (6, 'Charizard'),
  (7, 'Squirtle'), (8, 'Wartortle'), (9, 'Blastoise'),
  (10, 'Caterpie'), (11, 'Metapod'), (12, 'Butterfree'),
  (13, 'Weedle'), (14, 'Kakuna'), (15, 'Beedrill'),
  (16, 'Pidgey'), (17, 'Pidgeotto'), (18, 'Pidgeot'),
  (19, 'Rattata'), (20, 'Raticate'),
  (21, 'Spearow'), (22, 'Fearow'),
  (23, 'Ekans'), (24, 'Arbok'),
  (25, 'Pikachu'), (26, 'Raichu'),
  (27, 'Sandshrew'), (28, 'Sandslash'),
  (29, 'Nidoran♀'), (30, 'Nidorina'), (31, 'Nidoqueen'),
  (32, 'Nidoran♂'), (33, 'Nidorino'), (34, 'Nidoking'),
  (35, 'Clefairy'), (36, 'Clefable'),
  (37, 'Vulpix'), (38, 'Ninetales'),
  (39, 'Jigglypuff'), (40, 'Wigglytuff'),
  (41, 'Zubat'), (42, 'Golbat'),
  (43, 'Oddish'), (44, 'Gloom'), (45, 'Vileplume'),
  (46, 'Paras'), (47, 'Parasect'),
  (48, 'Venonat'), (49, 'Venomoth'),
  (50, 'Diglett'), (51, 'Dugtrio'),
  (52, 'Meowth'), (53, 'Persian'),
  (54, 'Psyduck'), (55, 'Golduck'),
  (56, 'Mankey'), (57, 'Primeape'),
  (58, 'Growlithe'), (59, 'Arcanine'),
  (60, 'Poliwag'), (61, 'Poliwhirl'), (62, 'Poliwrath'),
  (63, 'Abra'), (64, 'Kadabra'), (65, 'Alakazam'),
  (66, 'Machop'), (67, 'Machoke'), (68, 'Machamp'),
  (69, 'Bellsprout'), (70, 'Weepinbell'), (71, 'Victreebel'),
  (72, 'Tentacool'), (73, 'Tentacruel'),
  (74, 'Geodude'), (75, 'Graveler'), (76, 'Golem'),
  (77, 'Ponyta'), (78, 'Rapidash'),
  (79, 'Slowpoke'), (80, 'Slowbro'),
  (81, 'Magnemite'), (82, 'Magneton'),
  (83, 'Farfetchd'),
  (84, 'Doduo'), (85, 'Dodrio'),
  (86, 'Seel'), (87, 'Dewgong'),
  (88, 'Grimer'), (89, 'Muk'),
  (90, 'Shellder'), (91, 'Cloyster'),
  (92, 'Gastly'), (93, 'Haunter'), (94, 'Gengar'),
  (95, 'Onix'),
  (96, 'Drowzee'), (97, 'Hypno'),
  (98, 'Krabby'), (99, 'Kingler'),
  (100, 'Voltorb'), (101, 'Electrode'),
  (102, 'Exeggcute'), (103, 'Exeggutor'),
  (104, 'Cubone'), (105, 'Marowak'),
  (106, 'Hitmonlee'),
  (107, 'Hitmonchan'),
  (108, 'Lickitung'),
  (109, 'Koffing'), (110, 'Weezing'),
  (111, 'Rhyhorn'), (112, 'Rhydon'),
  (113, 'Chansey'),
  (114, 'Tangela'),
  (115, 'Kangaskhan'),
  (116, 'Horsea'), (117, 'Seadra'),
  (118, 'Goldeen'), (119, 'Seaking'),
  (120, 'Staryu'), (121, 'Starmie'),
  (122, 'Mr. Mime'),
  (123, 'Scyther'),
  (124, 'Jynx'),
  (125, 'Electabuzz'),
  (126, 'Magmar'),
  (127, 'Pinsir'),
  (128, 'Tauros'),
  (129, 'Magikarp'), (130, 'Gyarados'),
  (131, 'Lapras'),
  (132, 'Ditto'),
  (133, 'Eevee'), (134, 'Vaporeon'), (135, 'Jolteon'), (136, 'Flareon'),
  (137, 'Porygon'),
  (138, 'Omanyte'), (139, 'Omastar'),
  (140, 'Kabuto'), (141, 'Kabutops'),
  (142, 'Aerodactyl'),
  (143, 'Snorlax'),
  (144, 'Articuno'),
  (145, 'Zapdos'),
  (146, 'Moltres'),
  (147, 'Dratini'),
  (148, 'Dragonair'),
  (149, 'Dragonite'),
  (150, 'Mewtwo'),
  (151, 'Mew');

INSERT INTO evolution (pokemon, next)
VALUES
  (1, 2), (2, 3),
  (4, 5), (5, 6),
  (7, 8), (8, 9),
  (10, 11), (11, 12),
  (13, 14), (14, 15),
  (16, 17), (17, 18),
  (19, 20),
  (21, 22),
  (23, 24),
  (25, 26),
  (27, 28),
  (29, 30), (30, 31),
  (32, 33), (33, 34),
  (35, 36),
  (37, 38),
  (39, 40),
  (41, 42),
  (43, 44), (44, 45),
  (46, 47),
  (48, 49),
  (50, 51),
  (52, 53),
  (54, 55),
  (56, 57),
  (58, 59),
  (60, 61), (61, 62),
  (63, 64), (64, 65),
  (66, 67), (67, 68),
  (69, 70), (70, 71),
  (72, 73),
  (74, 75), (75, 76),
  (77, 78),
  (79, 80),
  (81, 82),
  (84, 85),
  (86, 87),
  (88, 89),
  (90, 91),
  (92, 93), (93, 94),
  (96, 97),
  (98, 99),
  (100, 101),
  (102, 103),
  (104, 105),
  (109, 110),
  (111, 112),
  (116, 117),
  (118, 119),
  (120, 121),
  (129, 130),
  (133, 134), (133, 135), (133, 136),
  (138, 139),
  (140, 141),
  (147, 148), (148, 149);

INSERT INTO type (name)
VALUES
  ('Normal'),
  ('Fire'),
  ('Water'),
  ('Electric'),
  ('Grass'),
  ('Ice'),
  ('Fighting'),
  ('Poison'),
  ('Ground'),
  ('Flying'),
  ('Psychic'),
  ('Bug'),
  ('Rock'),
  ('Ghost'),
  ('Dragon'),
  ('Dark'),
  ('Steel'),
  ('Fairy');

INSERT INTO pokemon_type (pokemon, type)
VALUES
  (1, 12), (1, 8),
  (2, 12), (2, 8),
  (3, 12), (3, 8),
  (4, 2),
  (5, 2),
  (6, 2), (6, 10);

-- Local Variables:
-- sql-product: postgres
-- End:
