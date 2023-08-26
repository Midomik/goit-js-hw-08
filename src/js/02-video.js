import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);


const getTime = (currentTime) =>{
    localStorage.setItem("videoplayer-current-time", currentTime.seconds);
}

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));
player.on('timeupdate', throttle(getTime, 1000));
player.getVideoTitle().then(function(title) {
    console.log('title:', title);
 });