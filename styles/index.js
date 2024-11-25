import { initiateGame } from "../Data/data.js";
import { GlobalEvent } from "../Events/events.js";
// import gameArena from "../Helper/constants.js";
import { initGameRender } from "../Render/render.js";

const globalState = initiateGame();

initGameRender(globalState);

GlobalEvent();


