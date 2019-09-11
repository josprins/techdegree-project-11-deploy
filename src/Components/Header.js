import React  from 'react';
import Search from './Search';
import Nav from './Nav';

const Header = ({onSearch}) => (
  <div>
    <h1>Flickr Gallery</h1>
    <Search onSearch={onSearch}/>
    <Nav />
  </div>
);

export default Header;
