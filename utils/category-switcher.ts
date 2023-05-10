export const categorySwitcher = (category: string) => {
  switch (category) {
    case 'business':
      return 'Бизнес';
    case 'psychology':
      return 'Психология';
    case 'parents':
      return 'Родителям';
    case 'non-fiction':
      return 'Нон-фикшн';
    case 'fiction':
      return 'Художественная литература';
    case 'programming':
      return 'Программирование';
    case 'hobby':
      return 'Хобби';
    case 'design':
      return 'Дизайн';
    case 'childish':
      return 'Детские';
    case 'other':
      return 'Другое';
    default:
      return 'Все книги';
  }
};
