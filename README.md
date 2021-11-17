# Simple pokemon app
[https://pokemons-topaz.vercel.app/](https://pokemons-topaz.vercel.app/)

## Possible improvements
- The navbar in not visible on a light background (e.g. yellow)
  - this could be fixed by applying the [mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode) property
- The pokemon API doesn't provide Typescript types. For that reason, we need to store types
locally in our codebase, which increses possibility of errors if the API changes. It would be much better if we had automatically
generated types from the backend. Any API breaking change would be discovered at the compile time.
