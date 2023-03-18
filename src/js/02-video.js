import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(function(currentTime) {
        localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));
    }, 1000));

const saveTime = localStorage.getItem("videoplayer-current-time");
const stopTime = JSON.parse(saveTime);
player.setCurrentTime(stopTime.seconds || 0).then(function (seconds) { }).
catch(function(error) {
    switch (error.name) {
    case 'RangeError':
            break;
            default:
            break;
    }
 }); 
        
  