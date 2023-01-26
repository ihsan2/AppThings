import React, {FunctionComponent, useState} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../color';
import MainText from '../Text/MainText';
import {CardItemProps} from './types';

const CardItem: FunctionComponent<CardItemProps> = props => {
  return (
    <>
      <TouchableOpacity {...props} style={[styles.card, props.style]}>
        <Image source={{uri: props.imageUrl}} style={styles.image} />
        <MainText style={styles.text} size={20} bold color={colors.primary}>
          {props.name}
        </MainText>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.border
  },
  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'cover',
    marginBottom: 8
  },
  text: {
    marginHorizontal: 20,
    marginBottom: 10
  }
});

export default CardItem;
