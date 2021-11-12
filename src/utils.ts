import invariant from "invariant";
import { SPRITES_ROOT } from "./constants";

/**
 * Creates URL for pokemon sprite.
 * @param id Numerical ID of a pokemon.
 */
export const getSpriteUrl = (id: string) => {
    invariant(SPRITES_ROOT, "SPRITES_ROOT is undefined.");
    return SPRITES_ROOT.endsWith("/")
        ? SPRITES_ROOT + `${id}.svg`
        : SPRITES_ROOT + `/${id}.svg`;
};
