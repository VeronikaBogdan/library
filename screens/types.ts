export type Params = {
  bookId: number;
  category: string;
};

export type ScreenProps = {
  route: {
    name: string;
    params: Params;
  };
};
