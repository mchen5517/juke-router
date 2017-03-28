import React from 'react';
import Songs from '../components/Songs';

 class Album extends React.Component {
    constructor(props) {
        super(props)
        const album = props.album;
        const currentSong = props.currentSong;
        const isPlaying = props.isPlaying;
        const toggleOne = props.toggleOne;
    }
    render() {
  return (
    <div className="album">
      <div>
        <h3>{ album.name }</h3>
        <img src={ album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={album.songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne} />
    </div>
  );
}}

export default Album;
