When building react apps, as your number of components increase, it makes the overall file's size
big. Even after a bundler minimises the files it is still significantly bigger.
So, to solve this we can go with code chunking/lazy loading/dynamic loading etc
Basically the idea is to serve the component(a js file) only when needed ie when clicked or requested by client
the minified main js file formed by bundler doesn't contain the lazy loaded file, but the file is served only
when asked for.

To use lazy loading we need {lazy} function from 'react'

const component = lazy(()=> import(path_of_the_component_that_needs_to_be_lazy_loaded))

There's a catch here, try this ie try lazy loading and see for yourself that it won't work

It didn't work eh?
Because react was looking for the component already and since it did not find it it throws an error
Now to make it work, import {suspense} from react
Wrap that component in it
give fallback ie till the component loads give it something to show


//Tailwind
->Press ctrl+space for suggestions