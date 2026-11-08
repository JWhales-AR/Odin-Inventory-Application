# Odin Inventory Application

Inventory (Pokémon) Management as part of the Odin Project


## Requirements

As per the Odin Project,
> ... there can be a pokemon, trainer and a type entity. Each pokemon must be contained in a type. While a trainer can have multiple pokemon.

Additionally, all **CRUD** methods for both items and categories.


# Database

Currently, Pokemon natures, gender and movesets are not taken into account. Pokemon base sprites can be obtained from [githubContent/pokeAPI](front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png").

`Pokemon`
| Dex ID      | Species |
|-------------|---------|
| Integer, PK | Varchar |

`Pokemon Evolution`
| ID          | Pokemon      | Next         |
|-------------|--------------|--------------|
| Integer, PK | FK (Pokemon) | FK (Pokemon) |

`Type`
| ID          | Name    |
|-------------|---------|
| Integer, PK | Varchar |

`Pokemon Type`
| ID          | Pokemon      | Type      |
|-------------|--------------|-----------|
| Integer, PK | FK (Pokemon) | FK (Type) |

`Trainer`
| ID          | Name    | Gender | Age     |
|-------------|---------|--------|---------|
| Integer, PK | Varchar | M/F    | Integer |

`Trainer Pokemon`
| ID          | Trainer      | Pokemon      | Pokemon Nickname |
|-------------|--------------|--------------|------------------|
| Integer, PK | FK (Trainer) | FK (Pokemon) | Varchar          |
