import { IMAGE_HOST, GRID, LIST, BOOKPAGE } from '../../app-constants';
import IconCat from '../../assets/svg/icon-cat.svg';
import { Image as ImageType } from '../../store/books/types';

import { Image, ImageLarge, ImageList, NoImage, NoImageLarge, NoImageList } from './styled-book-image';

type BookImageProps = {
  image: ImageType;
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
  if (image && choice === LIST) return <ImageList source={{ uri: image.url }} />;
  if (!bookpage && choice === BOOKPAGE)
    return (
      <NoImageLarge>
        <IconCat />
      </NoImageLarge>
    );
  if (bookpage && choice === BOOKPAGE) return <ImageLarge source={{ uri: image.url }} />;
  return <Image source={{ uri: image.url }} />;
};
