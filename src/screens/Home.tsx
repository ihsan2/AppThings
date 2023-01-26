import {View, Text, StyleSheet, Touchable} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import MainContainer from '../components/Container/MainContainer';
import MainText from '../components/Text/MainText';
import {ScrollView} from 'react-native';
import {ApiService} from '../services/ApiService';
import {useMutation} from '@tanstack/react-query';
import {useStore} from '../store';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../components/color';
import {ActivityIndicator} from 'react-native';
import CardItem from '../components/CardItem/CardItem';
import {IThingsResponse} from '../models/api/things';
import {RefreshControl} from 'react-native';
import * as NavigationService from '../navigation/navigationService';

let Service = new ApiService();

const Home: FC = ({navigation}: any) => {
  const token = useStore(state => state.token);
  const logout = useStore(state => state.logout);
  const setListThings = useStore(state => state.setListThings);
  const things = useStore(state => state.things);

  useEffect(() => {
    getData();
  }, []);

  const doLogout = () => {
    logout();
    NavigationService.resetTo('Login');
  };

  const {isLoading, mutate: getData} = useMutation<any, Error>(
    async () => {
      return await Service.getDataThings(token);
    },
    {
      onSuccess: async (res: any) => {
        console.log('resp things >>', res);
        let result = res.map((item: any) => ({
          id: item?.objectId,
          imageUrl: item?.image,
          name: item?.name,
        }));
        setListThings(result);
      },
      onError: (err: any) => {
        console.log('error get things', err);
      },
    },
  );

  if (isLoading) {
    return <ActivityIndicator style={styles.loading} color={colors.primary} />;
  }

  return (
    <MainContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={getData} />
        }>
        {things.map((item: IThingsResponse) => (
          <CardItem
            key={item?.id}
            name={item?.name}
            imageUrl={item?.imageUrl}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.logout}
        onPress={() => doLogout()}>
        <Icon name="logout" size={25} color={colors.white} />
      </TouchableOpacity>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  logout: {
    position: 'absolute',
    backgroundColor: colors.red,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    bottom: 36,
    right: 36,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loading: {
    marginTop: 36,
  },
});

export default Home;
