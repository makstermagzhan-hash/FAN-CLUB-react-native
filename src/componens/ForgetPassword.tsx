// companens/ForgetPasswold.tsx
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type ForgetPasswordProps = {
  onBack: () => void;
};

export default function ForgetPassword({ onBack }: ForgetPasswordProps) {
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      {/* Кнопка "Назад" */}
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>←</Text>
      </Pressable>

      <Text style={styles.title}>Восстановление пароля</Text>
      <Text style={styles.subtitle}>
        Введите свой номер телефона, чтобы получить код восстановления.
      </Text>

      {/* Телефон нөмірін енгізуге арналған сіздің стиліңіздегі сұр блок */}
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

      {/* Продолжить батырмасы */}
      <Pressable 
        style={[styles.primaryButton, !phone && styles.disabledButton]} 
        onPress={() => phone ? alert('Код отправлен на номер: ' + phone) : alert('Введите номер')}
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
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  backButtonText: {
    fontSize: 32,
    color: '#1B1923',
    fontWeight: '300',
  },
  title: {
    color: '#1B1923',
    fontSize: 27,
    fontWeight: '700',
    lineHeight: 34,
  },
  subtitle: {
    color: '#AAA9B2',
    fontSize: 18,
    marginTop: 3,
    marginBottom: 29,
  },
  inputContainer: {
    width: '100%',
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 18,
    marginBottom: 35,
  },
  inputIconText: {
    fontSize: 20,
    marginRight: 14,
  },
  input: {
    flex: 1,
    height: '100%',
    color: '#1B1923',
    fontSize: 18,
  },
  primaryButton: {
    width: '100%',
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A811DA',
    borderRadius: 18,
  },
  disabledButton: {
    backgroundColor: '#E2D1EA', // Номер жазылмаған кезде батырма ашық фиолетовый болады
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
