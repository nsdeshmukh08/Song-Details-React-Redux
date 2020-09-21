import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: 'Hum Tum', duration: '4:21'},
    {title: 'Tere bin', duration: '3:2'},
    {title: 'Jiya lage', duration: '6:0'},
    {title: 'Na mora', duration: '3:5'},
    {title: 'Piya aya', duration: '4:5'},
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});