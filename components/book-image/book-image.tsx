import { IMAGE_HOST, GRID, LIST, BOOKPAGE } from '../../app-constants';
import IconCat from '../../assets/svg/icon-cat.svg';

import { Image, ImageLarge, ImageList, NoImage, NoImageLarge, NoImageList } from './styled-book-image';

type BookImageProps = {
  image: string;
  choice: string;
  bookpage: number;
};

export const BookImage = ({ image, choice, bookpage }: BookImageProps) => {
  if (!image && choice === GRID)
    return (
      <NoImage>
        <IconCat />
      </NoImage>
    );
  if (!image && choice === LIST)
    return (
      <NoImageList>
        <IconCat width={35} height={35} />
      </NoImageList>
    );
  if (image && choice === LIST) return <ImageList source={{ uri: image }} />;
  if (!bookpage && choice === BOOKPAGE)
    return (
      <NoImageLarge>
        <IconCat />
      </NoImageLarge>
    );
  if (bookpage && choice === BOOKPAGE) return <ImageLarge source={{ uri: image }} />;
  return <Image source={{ uri: image }} />;
};
