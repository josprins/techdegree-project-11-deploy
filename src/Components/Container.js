import React  from 'react';
import Gallery from './Gallery';

const Container = props => {

  //Using map() to loop through list of images 
  const results = props.data;
  let pictures = results.map(picture =>
    <Gallery key={picture.id} url={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`}/>
  );

  return (
    <div>
      <h2>Results</h2>
      <div className="photo-container">
        <ul>
          {pictures}
        </ul>
      </div>
    </div>
  );
}

export default Container;
