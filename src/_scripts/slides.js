import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import revealStyles from 'reveal.js/dist/reveal.css'
import revealThemeBlack from 'reveal.js/dist/theme/black.css'
import slidesCustom from '../css/slidesCustom.css'

let deck = new Reveal({
   plugins: [ Markdown ]
})
deck.initialize();