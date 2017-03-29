import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import { convertAlbum, convertAlbums, skip, convertSong } from '../utils';
import Songs from '../components/Songs';
import Albums from '../components/Albums';



class Artist extends React.Component {
  constructor(){
    super();
    this.state = {
      albums: [],
      songs: []
    }
  }

  componentDidMount () {
   const artistId = this.props.routeParams.artistId;
   const selectArtist = this.props.selectArtist;

   axios.get(`/api/artists/${artistId}/albums`)
   .then(res => res.data)
   .then(albums => this.setState({albums: convertAlbums(albums)}))
   .then(() => axios.get(`/api/artists/${artistId}/songs`))
   .then(res => res.data)
   .then(songs => this.setState({songs: songs.map(song => convertSong(song))}))
   .then(() => selectArtist(artistId));
 }

 render(){
  const selectedArtist = this.props.selectedArtist;
  const children = this.props.children;
  const propsToPassToChildren = {
      albums: this.state.albums,
      selectAlbum: this.props.selectAlbum,

      songs: this.state.songs,
      currentSong: this.props.currentSong,
      isPlaying: this.props.isPlaying,
      toggleOne: this.props.toggleOne
   }
  return (
    <div>
      <h3>{ selectedArtist.name }</h3>
      <ul className="nav nav-tabs">
        <li><Link to={`/artists/${selectedArtist.id}/albums`} activeClassName="active">ALBUMS</Link></li>
        <li><Link to={`/artists/${selectedArtist.id}/songs`} activeClassName="active">SONGS</Link></li>
      </ul>
      { children && React.cloneElement(children, propsToPassToChildren) }
    </div>
  )
}
}

export default Artist;