// companens/SelectCity.tsx
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type SelectCityProps = {
  onBack: () => void;
  onNavigateToClub: (city: string) => void;
};

export default function SelectCity({ onBack, onNavigateToClub }: SelectCityProps) {
  const [city, setCity] = useState<string>('');

  return (
    <View style={styles.container}>
      {/* Кнопка "Назад" */}
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>←</Text>
      </Pressable>

      <Text style={styles.title}>Выберите город</Text>
      <Text style={styles.subtitle}>Заказы и доставка будут показываться для выбранного вами города.</Text>

      {/* Қала таңдайтын сұр дөңгелек блок */}
      <Pressable style={styles.inputContainer} onPress={() => setCity('Алматы')}>
        <Text style={styles.inputIconText}>🏙️</Text>
        
        {/* Мәтін дұрыс шығуы үшін стильдер массиві сақталды */}
        <Text style={[styles.input, city ? styles.activeText : styles.placeholderText]}>
          {city ? city : 'Выберите город'}
        </Text>
        
        <Text style={styles.arrowIcon}>▼</Text>
      </Pressable>

      {/* Жалғастыру батырмасы (Қала таңдалмаса басылмайды) */}
      <Pressable 
        style={[styles.primaryButton, !city && styles.disabledButton]} 
        onPress={() => city && onNavigateToClub(city)}
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
    // Мәтін блок ішінде вертикально дәл ортада тұруы үшін қосылды:
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
    backgroundColor: '#E2D1EA' // Түсі бірыңғай стильге сай #E2D1EA деп түзетілді
  },
  buttonText: { 
    color: '#FFFFFF', 
    fontSize: 18, 
    fontWeight: '600' 
  },
});
