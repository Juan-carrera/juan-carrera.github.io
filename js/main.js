import { themeDOM } from "./dark_lightMode.js";
import botonScroll from "./scroll.js";



const d = document;

d.addEventListener("DOMContentLoaded" ,(e) => {
    
    botonScroll(".scroll-top-btn");
    
});

themeDOM(".dark-theme-btn","dark-mode");
