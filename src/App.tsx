// App.tsx
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Login from './componens/Login';
import ForgetPassword from './componens/ForgetPassword';
import Register from './componens/Register';
import SelectCity from './componens/SelectCity';
import SelectClub from './componens/SelectClub';
import MainClub from './componens/MainClub';

type PageType = 'login' | 'forgot' | 'register' | 'city' | 'club' | 'main_club';

export default function App() {
  const [page, setPage] = useState<PageType>('login');

  // Данные пользователя хранятся на верхнем уровне
  const [cityName, setCityName] = useState<string>('');
  const [clubName, setClubName] = useState<string>('');

  const handleBack = () => {
    setPage('login');
  };

  // 1. Егер forgot беті ашық болса
  if (page === 'forgot') { 
    return <ForgetPassword onBack={handleBack} />; 
  }

  // 2. Егер register беті ашық болса
  if (page === 'register') {
    return <Register onBack={handleBack} onNavigateToCity={() => setPage('city')} />;
  }

  // 3. Егер city беті ашық болса
  if (page === 'city') {
    return (
      <SelectCity 
        onBack={() => setPage('register')} 
        onNavigateToClub={(selectedCity) => {
          setCityName(selectedCity);
          setPage('club');
        }} 
      />
    );
  }

  // 4. Егер club беті ашық болса
  if (page === 'club') {
    return (
      <SelectClub 
        onBack={() => setPage('city')} 
        onNavigateToMain={(selectedClub) => {
          setClubName(selectedClub);
          setPage('main_club');
        }} 
      />
    );
  }

  // 5. Егер фан-клубтың басты беті ашық болса
  if (page === 'main_club') {
    return (
      <MainClub 
        city={cityName}
        club={clubName}
        onLogout={() => {
          setPage('login');
          setCityName('');
          setClubName('');
        }}
      />
    );
  }

  // 6. НЕГІЗГІ ЛОГИН БЕТІ
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <Login 
        onNavigateToRegister={() => setPage('register')} 
        onNavigateToForgot={() => setPage('forgot')}
        onLoginSuccess={() => setPage('main_club')} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
