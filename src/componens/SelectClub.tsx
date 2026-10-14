// companens/SelectClub.tsx
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type SelectClubProps = {
  onBack: () => void;
  onNavigateToMain: (club: string) => void;
};

export default function SelectClub({ onBack, onNavigateToMain }: SelectClubProps) {
  const [club, setClub] = useState<string>('');

  // Клуб таңдалған кезде ғана батырма белсенді болады
  const isFormValid = club.trim() !== '';

  return (
    <View style={styles.container}>
      {/* Кнопка "Назад" */}
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>←</Text>
      </Pressable>

      <Text style={styles.title}>Выберите клуб</Text>
      <Text style={styles.subtitle}>Выберите любимый футбольный клуб для вступления в фан-клуб.</Text>

      {/* Клуб таңдайтын сұр дөңгелек блок — сіздің inputContainer стиліңізде */}
      <Pressable style={styles.inputContainer} onPress={() => setClub('FC ALMATY')}>
        <Text style={styles.inputIconText}>⚽</Text>
        <Text style={[styles.input, club ? styles.activeText : styles.placeholderText]}>
          {club ? club : 'Выберите клуб'}
        </Text>
        <Text style={styles.arrowIcon}>▼</Text>
      </Pressable>

      {/* Шартты түрде өзгеретін "Войти в фан-клуб" батырмасы */}
      <Pressable 
        style={[styles.primaryButton, !isFormValid && styles.disabledButton]} 
        onPress={() => isFormValid && onNavigateToMain(club)}
      >
        <Text style={styles.buttonText}>Войти в фан-клуб</Text>
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
    marginBottom: 35 
  },
  inputIconText: { 
    fontSize: 20, 
    marginRight: 14 
  },
  input: { 
    flex: 1, 
    color: '#1B1923', 
    fontSize: 18,
    lineHeight: 22,
    textAlignVertical: 'center',
  },
  placeholderText: { 
    color: '#AAA9B2' 
  },
  activeText: { 
    color: '#1B1923', 
    fontWeight: '500' 
  },
  arrowIcon: { 
    fontSize: 14, 
    color: '#AAA9B2' 
  },
  primaryButton: { 
    width: '100%', 
    height: 62, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#A811DA', 
    borderRadius: 18 
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
