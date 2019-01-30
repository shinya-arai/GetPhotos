import React from 'react';

const ImageList = (props) => {
  const images = props.images.map(({id, urls, description}) => {
    return (
      <div key={id}>
        <img 
          className="ui middle aligned small image"
          src={urls.regular}
          alt={description}
        />
        <span style={{marginLeft: 10}}>{description}</span>
        <div className="ui divider"></div>
      </div>
    );
  });

  return (
    <div>
      {images}
    </div>
  );
}

export default ImageList;