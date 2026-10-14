// companens/Register.tsx
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type RegisterProps = {
  onBack: () => void;
  onNavigateToCity: () => void;
};

export default function Register({ onBack, onNavigateToCity }: RegisterProps) {
  const [name, setName] = useState<string>('');
  const [registerPhone, setRegisterPhone] = useState<string>('');

  // Екі өріс те бос болмаған кезде ғана батырма белсенді болады
  const isFormValid = name.trim() !== '' && registerPhone.trim() !== '';

  return (
    <View style={styles.container}>
      {/* Кнопка "Назад" */}
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>←</Text>
      </Pressable>

      <Text style={styles.title}>Регистрация</Text>
      <Text style={styles.subtitle}>Создайте учетную запись, чтобы продолжить.</Text>

      {/* Аты-жөнін енгізу блогы */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputIconText}>👤</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Ваше имя"
          placeholderTextColor="#AAA9B2"
        />
      </View>

      {/* Телефон нөмірін енгізу блогы */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputIconText}>📞</Text>
        <TextInput
          style={styles.input}
          value={registerPhone}
          onChangeText={setRegisterPhone}
          placeholder="Номер телефона"
          placeholderTextColor="#AAA9B2"
          keyboardType="phone-pad"
        />
      </View>

      {/* Шартты түрде өзгеретін "Продолжить" батырмасы */}
      <Pressable 
        style={[styles.primaryButton, !isFormValid && styles.disabledButton]} 
        onPress={() => isFormValid && onNavigateToCity()}
      >
        <Text style={styles.buttonText}>Продолжить</Text>
      </Pressable>
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
  primaryButton: { 
    width: '100%', 
    height: 62, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#A811DA', 
    borderRadius: 18, 
    marginTop: 10 
  },
  disabledButton: {
    backgroundColor: '#E2D1EA', // Деректер толтырылмаған кездегі ашық фиолетовый түс
  },
  buttonText: { 
    color: '#FFFFFF', 
    fontSize: 18, 
    fontWeight: '600' 
  },
});
