import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import config from '../Configurations/APIConfig';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
 
  config.APIACTIVATEURL + config.LOGINUSER
  const login = (username, password) => {
    setIsLoading(true);

    axios.post(config.APIACTIVATEURL + config.LOGINUSER, {
        username,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        if(userInfo.token){
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        }else{
          Alert.alert("Invalid Credentials")
          setIsLoading(false);
        }
      })
      .catch(e => {
        console.log(`login error ${e}`);
        Alert.alert("Invalid Credentials")
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
   };
  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserInfo(userInfo);
      }
      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        login,
        logout,
        isLoggedIn
      }}>
      {children}
    </AuthContext.Provider>
  );
};