export const dateFormatter = (stringDate: string) =>
  new Date(stringDate).toLocaleDateString('ru', { day: 'numeric', month: 'long', year: 'numeric' }).slice(0, -2);

export const dateSorter = (firstDate: any, secondDate: any) => -firstDate.createdAt.localeCompare(secondDate.createdAt);
