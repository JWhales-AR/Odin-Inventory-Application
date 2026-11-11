import pool from "./pool.ts";

interface Pokemon {
  dex_id: number;
  species: string;
}

export async function getAllPokemon() {
  const { rows } = await pool.query<Pokemon>("SELECT * FROM pokemon");
  return rows;
}

interface PokemonType {
  id: number;
  name: string;
}

export async function getAllTypes() {
  const { rows } = await pool.query<PokemonType>("SELECT * FROM type");
  return rows;
}

export async function getTypeName(typeId: number) {
  const { rows } = await pool.query<PokemonType>(
    "SELECT * FROM type WHERE id = $1",
    [typeId],
  );
  const [{ name }] = rows;
  return name;
}

export async function getPokemonForType(typeId: number) {
  const { rows } = await pool.query<Pokemon>(
    `SELECT dex_id, species
     FROM pokemon_type AS pt
     JOIN pokemon AS p ON pt.pokemon = p.dex_id
     WHERE pt.type = $1`,
    [typeId],
  );
  return rows;
}

interface Trainer {
  id: number;
  name: string;
  gender: "m" | "f";
  age: number;
}

export async function getAllTrainers() {
  const { rows } = await pool.query<Trainer>("SELECT * FROM trainer");
  return rows;
}

export async function getTrainerName(trainerId: number) {
  const { rows } = await pool.query<Trainer>(
    "SELECT * FROM trainer WHERE id = $1",
    [trainerId],
  );
  const [{ name }] = rows;
  return name;
}

export async function addNewTrainer(
  name: string,
  gender: "m" | "f",
  age: number,
) {
  await pool.query<Trainer>(
    `INSERT INTO trainer (name, gender, age)
     VALUES ($1, $2, $3)`,
    [name, gender, age],
  );
}

interface TrainerPokemon {
  id: number;
  pokemon: number;
  nickname: string;
  species: string;
}

export async function getTrainerPokemon(trainerId: number) {
  const { rows } = await pool.query<TrainerPokemon>(
    `SELECT *
     FROM trainer_pokemon AS pt
     JOIN pokemon AS p ON p.dex_id = pt.pokemon
     WHERE pt.trainer = $1`,
    [trainerId],
  );
  return rows;
}

export async function addNewTrainerPokemon(
  trainerId: number,
  speciesId: number,
  nickname: string,
) {
  await pool.query<TrainerPokemon>(
    `INSERT INTO trainer_pokemon (trainer, pokemon, nickname)
     VALUES ($1, $2, $3)`,
    [trainerId, speciesId, nickname],
  );
}
