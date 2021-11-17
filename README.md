# Simple pokemon app
[https://pokemons-topaz.vercel.app/](https://pokemons-topaz.vercel.app/)

## App description
The app consists of a main page and detail page. The main page shows grid of the first nine pokemons.
After clicking on one of the pokemons, you will be redirected to the detail page with more information
about the pokemon.

First nine pokemons are preloaded, which means that displaying their info should be almost instant.
You can display information about any pokemon by entering a `name` or `id` in the URL - 
e.g. `https://pokemons-topaz.vercel.app/pokemon/<name|id>`.

This app uses [Nextjs' ISR](https://vercel.com/docs/concepts/next.js/incremental-static-regeneration), displaying 
any pokemon with ID > 9 will preload it's data and store it on the server, making the pokemon load quickly 
for any other user since it's been preloaded. 

## Possible improvements
- The navbar in not visible on a light background (e.g. yellow)
  - this could be fixed by applying the [mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode) property
- The pokemon API doesn't provide Typescript types. For that reason, we need to store types
locally in our codebase, which increses possibility of errors if the API changes. It would be much better if we had automatically
generated types from the backend. Any API breaking change would be discovered at the compile time.
- some elements should have better contrast
- Dynamically loading pokemon by their numerical ID is not very efficient. The app doesn't allow showing
the numerical ID in the URL, that's why the pokemon name first has to be fetched from the API and then
the user is redirected to a detail page with the name of pokemon in the URL.
  - we could optimise this by creating an object at build time with key-pair values (key = pokemon ID, value = name of pokemon)
  and then using it for redirects without the need of fetching the name from external resource. 
- Split CSS per page/component - at this moment there's one stylesheet with component's CSS.
  - possible to fix by using CSS modules.
