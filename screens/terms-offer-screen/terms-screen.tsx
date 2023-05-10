import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { categoriesRequest } from '../../store/categories/actions';
import { CategoriesState } from '../../store/rootReducer';

export const TermsScreen = () => {
  const dispatch = useDispatch();

  const { categories, pending } = useSelector((state: CategoriesState) => state.categories);

  useEffect(() => {
    dispatch(categoriesRequest());
  }, [dispatch]);

  return (
    <View>
      <Text>terms screen</Text>
      {pending ? <Text>Loading...</Text> : <Text>{categories[3]?.name}</Text>}
    </View>
  );
};
