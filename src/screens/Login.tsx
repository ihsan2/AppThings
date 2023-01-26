import {View, Text, StyleSheet} from 'react-native';
import React, {FC, useState} from 'react';
import MainContainer from '../components/Container/MainContainer';
import MainText from '../components/Text/MainText';
import {ScrollView} from 'react-native';
import MainInput from '../components/Input/MainInput';
import MainButton from '../components/Button/MainButton';
import {ApiService} from '../services/ApiService';
import {useMutation} from '@tanstack/react-query';
import {Alert} from 'react-native';
import {useStore} from '../store';
import * as NavigationService from '../navigation/navigationService';

let Service = new ApiService();

const Login: FC = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const setUser = useStore(state => state.setUser);
  const token = useStore(state => state.token);

  const {isLoading, mutate: doLogin} = useMutation<any, Error>(
    async () => {
      return await Service.doLogin({
        login: email.trim(),
        password,
      });
    },
    {
      onSuccess: async (res: any) => {
        console.log('login token >>', res['user-token']);
        const user = {
          userId: res?.objectId,
          name: res?.name,
          email: res?.email,
        };
        setUser(true, user, res['user-token']);
        NavigationService.resetTo('Home');
      },
      onError: (err: any) => {
        console.log('error login');
        Alert.alert('Error', 'Username or Password is incorrect.');
      },
    },
  );

  const toRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <MainContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainText style={styles.title} size={36} bold>
          Login
        </MainText>
        <View>
          <MainInput
            keyboardType="email-address"
            placeholder="Your Email"
            label="Email"
            value={email}
            onChangeText={setEmail}
          />
          <MainInput
            placeholder="Your Password"
            label="Password"
            password
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View>
          <MainButton
            label="Login"
            onPress={() => doLogin()}
            loading={isLoading}
          />
          <MainButton label="Register" clear onPress={() => toRegister()} />
        </View>
      </ScrollView>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 35,
  },
});

export default Login;
