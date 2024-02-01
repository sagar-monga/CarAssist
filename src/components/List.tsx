import React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

export type ListType<T> = {
  item: T;
  index: number;
};

type Props<T> = {
  data: T[];
  renderItem: ListRenderItem<T>;
};

const List = <T,>({ data, renderItem }: Props<T>) => {
  return <FlatList data={data} renderItem={renderItem} />;
};

export default List;

const styles = StyleSheet.create({});
