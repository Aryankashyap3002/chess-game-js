import { gameArena } from "../Helper/constants.js";

function GlobalEvent() {
    gameArena.addEventListener('click', function(event) {
        if(event.target.localName == 'img') {
            const clickId = event.target.parentNode.id;
            console.log(clickId);
        }
    })
}

export { GlobalEvent }