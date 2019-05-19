import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

const Gallery = (props) => {
  const [items, setItems] = useState([]);
  const [image, setImage] = useState('');
  const [photos, setPhotos] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${
          process.env.REACT_APP_API_KEY
        }&format=json&nojsoncallback=1`
      )
      .then((response) => {
        console.log(response.data.photos);
        setPhotos(response.data.photos.photo[0]);
        return response.data.photos.photo[0];
      })
      .then((photo) => {
        axios
          .get(
            `https://farm${photo.farm}.staticflickr.com/${photo.server}/${
              photo.id
            }_${photo.secret}.jpg`
          )
          .then((img) => {
            console.log(img);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <React.Fragment>
      <h2>This is gallery</h2>
      {image.length > 0 && (
        <img
          src={`https://farm66.staticflickr.com/65535/32932494937_45a91e3b9e.jpg`}
          alt="some text"
        />
      )}
    </React.Fragment>
  );
};

Gallery.defaultProps = {};

Gallery.propTypes = {};

export default Gallery;

const Wrapper = styled.section``;

const Item = styled.article``;

const Image = styled.img``;

const Information = styled.div``;

const Author = styled.div``;
