var scene; 

function start(){
    scence = $('a-scene')[0];
    console.log("Start Scene");

}

AFRAME.registerComponent("start-game", {
    init: start

})