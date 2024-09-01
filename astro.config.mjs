import { defineConfig } from 'astro/config';

// https://astro.build/config
//local
// export default defineConfig({
//     site: 'http://localhost:4321'
// });

// https://astro.build/config
// deploy
export default defineConfig({
    site: 'https://gridd3902.github.io',
    output: 'static',
    base: '/gridd3902.github.io/'
});

