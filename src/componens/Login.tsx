// companens/Login.tsx
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type LoginProps = {
  onNavigateToRegister: () => void;
  onNavigateToForgot: () => void;
  onLoginSuccess: () => void;
};

export default function Login({ onNavigateToRegister, onNavigateToForgot, onLoginSuccess }: LoginProps) {
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Телефон мен пароль екеуі де бос болмаған кезде ғана батырма белсенді болады
  const isFormValid = phone.trim() !== '' && password.trim() !== '';

  return (
    <View style={styles.container}>
      {/* Кнопка "Назад" */}
      <Pressable style={styles.backButton} onPress={() => console.log('Назад')}>
        <Text style={styles.backButtonText}>←</Text>
      </Pressable>

      <Text style={styles.title}>Привет, с возвращением!</Text>
      <Text style={styles.subtitle}>Войдите в свой аккаунт.</Text>

      {/* Номер телефона */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputIconText}>📞</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Номер телефона"
          placeholderTextColor="#AAA9B2"
          keyboardType="phone-pad"
        />
      </View>

      {/* Пароль */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputIconText}>🔒</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Пароль"
          placeholderTextColor="#AAA9B2"
          secureTextEntry={true}
        />
      </View>

      {/* Забыли пароль */}
      <Pressable style={styles.forgotContainer} onPress={onNavigateToForgot}>
        <Text style={styles.forgotText}>Забыли пароль?</Text>
      </Pressable>

      {/* Шартты түрде өзгеретін "Войти" батырмасы */}
      <Pressable 
        style={[styles.primaryButton, !isFormValid && styles.disabledButton]} 
        onPress={() => isFormValid && onLoginSuccess()}
      >
        <Text style={styles.buttonText}>Войти</Text>
      </Pressable>

      {/* Тіркелу сілтемесі */}
      <View style={styles.registerLinkContainer}>
        <Text style={styles.noAccountText}>У вас нет аккаунта? </Text>
        <Pressable onPress={onNavigateToRegister}>
          <Text style={styles.registerText}>Зарегистрироваться</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingHorizontal: 28, 
    paddingTop: 10, 
    backgroundColor: '#FFFFFF' 
  },
  backButton: { 
    width: 44, 
    height: 44, 
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    marginBottom: 24 
  },
  backButtonText: { 
    fontSize: 32, 
    color: '#1B1923', 
    fontWeight: '300' 
  },
  title: { 
    color: '#1B1923', 
    fontSize: 27, 
    fontWeight: '700', 
    lineHeight: 34 
  },
  subtitle: { 
    color: '#AAA9B2', 
    fontSize: 18, 
    marginTop: 3, 
    marginBottom: 29 
  },
  inputContainer: { 
    width: '100%', 
    height: 62, 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F8F8FA', 
    borderRadius: 18, 
    paddingHorizontal: 18, 
    marginBottom: 24 
  },
  inputIconText: { 
    fontSize: 20, 
    marginRight: 14 
  },
  input: { 
    flex: 1, 
    height: '100%', 
    color: '#1B1923', 
    fontSize: 18 
  },
  forgotContainer: { 
    alignSelf: 'flex-end', 
    marginBottom: 35, 
    marginTop: -8 
  },
  forgotText: { 
    color: '#A811DA', 
    fontSize: 16, 
    fontWeight: '500' 
  },
  primaryButton: { 
    width: '100%', 
    height: 62, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#A811DA', 
    borderRadius: 18, 
    marginBottom: 35 
  },
  disabledButton: {
    backgroundColor: '#E2D1EA', // Деректер енгізілмеген кездегі ашық фиолетовый түс
  },
  buttonText: { 
    color: '#FFFFFF', 
    fontSize: 18, 
    fontWeight: '600' 
  },
  registerLinkContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 10 
  },
  noAccountText: { 
    color: '#AAA9B2', 
    fontSize: 16 
  },
  registerText: { 
    color: '#A811DA', 
    fontSize: 16, 
    fontWeight: '600' 
  },
});
