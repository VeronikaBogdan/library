import { HOST, GRID, LIST, BOOKPAGE } from '../../app-constants';
import IconCat from '../../assets/svg/icon-cat.svg';

import { Image, ImageLarge, ImageList, NoImage, NoImageLarge, NoImageList } from './styled-book-image';

type BookImageProps = {
  image: object | null;
  choice: string;
  bookpage: string;
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
        <IconCat />
      </NoImageList>
    );
  if (image && choice === LIST)
    return (
      <ImageList
        source={{
          uri: image ? image.url : null,
        }}
      />
    );
  // if (!bookpage && choice === BOOKPAGE)
  //   return (
  //     <NoImageLarge>
  //       <IconCat />
  //     </NoImageLarge>
  //   );
  // if (bookpage && choice === BOOKPAGE) return <ImageLarge src={`${HOST}${bookpage}`} />;
  return (
    <Image
      source={{
        uri: image ? image.url : null,
      }}
    />
  );
};
