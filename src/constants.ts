/** The amount of pokemons to preload. Default is 9. */
export const POKEMONS_PRELOAD_COUNT: number = parseInt(process.env.POKEMONS_PRELOAD_COUNT ?? "9");

export const INTEGER_REGEX = /^\d+$/;

/** Base URL of sprites - used for loading images. */
export const SPRITES_ROOT = process.env.SPRITES_ROOT;

/** Text used inside the `title` tag. */
export const APP_TITLE = "Pokémon app";
