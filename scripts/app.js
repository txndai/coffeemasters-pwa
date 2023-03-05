import Menu from './Menu.js';
import Order from './Order.js';
import Router from './Router.js';

(async function() {
    if (navigator.storage && navigator.storage.persist){
        if (!await navigator.storage.persisted()) {
            const result = await navigator.storage.persist()
            // in chrome, if this result is false, there's nothing you can do
            // firefox however, explicitly asks you for permission
            console.log('result:', result)
        }
    }
})()

window.addEventListener("DOMContentLoaded", () => {
    Router.init();
    Menu.load();
    Order.render();
 } );
