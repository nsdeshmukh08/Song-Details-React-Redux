import React from 'react';
import { connect } from 'react-redux';
import {selectedSong} from '../actions'

class SongList extends React.Component {

  renderList(){
    return this.props.songs.map((song)=> {
      return (
        <div key={song.title} style={{display:'flex'}}>
          <h3 >{song.title}</h3>
          <button onClick={()=> this.props.selectedSong(song)}>Select</button>
        </div>
      )
    })
  }

  render(){
    return <div>{this.renderList()}</div>
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps, {selectedSong})(SongList);