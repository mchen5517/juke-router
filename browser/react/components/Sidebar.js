import React from 'react';
import {Link} from 'react-router';
import MenuLink from "./MenuLink";


const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="/juke.svg" className="logo" />
      <section>
          <MenuLink to="/albums">
            ALBUMS
          </MenuLink>
      </section>
      <section>
        <MenuLink to="/artists">
            ARTISTS
        </MenuLink>
      </section>
    </sidebar>
  );
}

export default Sidebar;
