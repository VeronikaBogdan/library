import React from 'react';
import PropTypes from 'prop-types';

import { HOST, GRID, LIST, BOOKPAGE } from '../../../app-constants';
import { ReactComponent as IconCat } from '../../../assets/svg/icon-cat.svg';

import { Image, ImageLarge, ImageList, NoImage, NoImageLarge, NoImageList } from './styled-book-image';

export const BookImage = ({ image, choice, bookpage }) => {
  if (!image && choice === GRID)
    return (
      <NoImage>
        <IconCat />
      </NoImage>
    );
  if (!image && choice === LIST)
    return (
      <NoImageList>
        <IconCat />
      </NoImageList>
    );
  if (image && choice === LIST) return <ImageList src={`${HOST}${image.url}`} alt='img: book' />;
  if (!bookpage && choice === BOOKPAGE)
    return (
      <NoImageLarge>
        <IconCat />
      </NoImageLarge>
    );
  if (bookpage && choice === BOOKPAGE) return <ImageLarge src={`${HOST}${bookpage}`} alt='img: book' />;
  return <Image src={image ? `${HOST}${image.url}` : null} alt='img: book' />;
};

BookImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.instanceOf(null), PropTypes.object]),
  choice: PropTypes.string,
  bookpage: PropTypes.string,
};
