type Params = {
  bookId: string;
  category: string;
};

type ScreenProps = {
  route: {
    name: string;
    params: Params;
  };
};
