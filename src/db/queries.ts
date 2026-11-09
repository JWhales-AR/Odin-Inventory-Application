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

export async function getPokemonForType(typeId: number) {
  const { rows } = await pool.query<Pokemon>(
    "SELECT dex_id, species FROM pokemon_type AS pt JOIN pokemon AS p ON pt.pokemon = p.dex_id WHERE pt.type = $1",
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

interface TrainerPokemon {
  id: number;
  pokemon: number;
  nickname: string;
}
export async function getTrainerPokemon(trainerId: number) {
  const { rows } = await pool.query<TrainerPokemon>(
    "SELECT * FROM trainer_pokemon WHERE trainer = $1",
    [trainerId],
  );
  return rows;
}
