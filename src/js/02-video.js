import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player('iframe');
const SAVE_TIME = 'videoplayer-current-time';

player.on('timeupdate',
    throttle(function (currentTime) {
        localStorage.setItem(SAVE_TIME, currentTime.seconds);
    }, 1000));

const saveTime = localStorage.getItem(SAVE_TIME);
const stopTime = JSON.parse(saveTime);
player.setCurrentTime(stopTime.seconds || 0).then(function (seconds) {}).
catch(function(error) {
    switch (error.name) {
    case 'RangeError':
            break;
            default:
            break;
    }
 }); 
        
  