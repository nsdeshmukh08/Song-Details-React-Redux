import React from 'react';
import {connect} from 'react-redux';

const SongDetails = ({selectedSong}) => {

  if(!selectedSong){
    return <h1>Select a song</h1>
  }

  return (
    <>
      <h1>Song Details</h1>
      <p>{ selectedSong.title}</p>
      <p>{ selectedSong.duration}</p>
    </>
  )
}

function mapStateToProps(state){
  return {
    selectedSong : state.selectedSong
  }
}

export default connect(mapStateToProps)(SongDetails);