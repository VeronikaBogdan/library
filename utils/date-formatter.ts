export const dateFormatter = (stringDate: string) =>
  new Date(stringDate).toLocaleDateString('ru', { day: 'numeric', month: 'long', year: 'numeric' }).slice(0, -2);
