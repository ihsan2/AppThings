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

let Service = new ApiService();

const Register: FC = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const {isLoading, mutate: register} = useMutation<any, Error>(
    async () => {
      return await Service.doRegister({
        name: name.trim(),
        email: email.trim(),
        password,
      });
    },
    {
      onSuccess: async (res: any) => {
        toLogin();
      },
      onError: (err: any) => {
        console.log('error login', err);
        Alert.alert('Error', `Failed Register. ${err?.response?.data?.message}`);
      },
    },
  );

  const toLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <MainContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainText style={styles.title} size={36} bold>
          Register
        </MainText>
        <View>
          <MainInput
            placeholder="Your Name"
            label="Name"
            value={name}
            onChangeText={setName}
          />
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
            label="Register"
            onPress={() => register()}
            loading={isLoading}
          />
          <MainButton label="Login" clear onPress={() => toLogin()} />
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

export default Register;
