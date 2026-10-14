// companens/MainClub.tsx
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';

type MainClubProps = {
  city: string;
  club: string;
  onLogout: () => void;
};

export default function MainClub({ city, club, onLogout }: MainClubProps) {
  const [sub, setSub] = useState<'match' | 'ticket' | 'merch'>('match');

  return (
    <View style={styles.container}>
      
      {/* Жоғарғы панель — Артқа (Шығу) батырмасы сіздің backButton стиліңізде */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Pressable style={styles.backButton} onPress={onLogout}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>
        <Text style={[styles.inputIconText, { marginTop: -20 }]}>🚪</Text>
      </View>

      <Text style={styles.title}>{club || 'FC ALMATY'}</Text>
      <Text style={styles.subtitle}>{city || 'Almaty'} • Фан-клуб</Text>

      {/* Контентті сырғытуға арналған аймақ */}
      <ScrollView style={{ flex: 1, marginTop: 10 }} showsVerticalScrollIndicator={false}>
        
        {/* 1. КОНТЕНТ МАТЧА */}
        {sub === 'match' && (
          <View style={{ paddingBottom: 100 }}>
            <Text style={[styles.title, { fontSize: 22, marginBottom: 16 }]}>Келесі ойындар</Text>
            {/*1 ойын*/}
            <View style={styles.inputContainer}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <View style={{ alignItems: 'center', flex: 1 }}><Text style={{ fontSize: 24 }}>🟡⚫️</Text><Text style={styles.input}>{club || 'Qairat'}</Text></View>
                <View style={{ alignItems: 'center' }}><Text style={[styles.title, { fontSize: 20 }]}>19:30</Text><Text style={styles.subtitle}>18 Окт</Text></View>
                <View style={{ alignItems: 'center', flex: 1 }}><Text style={{ fontSize: 24 }}>🔵⚪️</Text><Text style={[styles.input, { textAlign: 'center' }]}>Fc Astana</Text></View>
              </View>
            </View>
            {/*2 ойын*/}
            <View style={styles.inputContainer}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <View style={{ alignItems: 'center', flex: 1 }}><Text style={{ fontSize: 24 }}>🟡⚫️</Text><Text style={[styles.input, { textAlign: 'center' }]}>{club || 'Qairat'}</Text></View>
                <View style={{ alignItems: 'center' }}><Text style={[styles.title, { fontSize: 20 }]}>17:00</Text><Text style={styles.subtitle}>22 Окт</Text></View>
                <View style={{ alignItems: 'center', flex: 1 }}><Text style={{ fontSize: 24 }}>🔵🟡</Text><Text style={[styles.input, { textAlign: 'center' }]}>Zhetisu</Text></View>
              </View>
            </View>
            {/*3 ойын*/}
            <View style={styles.inputContainer}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <View style={{ alignItems: 'center', flex: 1 }}><Text style={{ fontSize: 24 }}>🔴⚪️</Text><Text style={[styles.input, { textAlign: 'center' }]}>Aktobe</Text></View>
                <View style={{ alignItems: 'center' }}><Text style={[styles.title, { fontSize: 20 }]}>18:00</Text><Text style={styles.subtitle}>25 Окт</Text></View>
                <View style={{ alignItems: 'center', flex: 1 }}><Text style={{ fontSize: 24 }}>🟡⚫️</Text><Text style={[styles.input, { textAlign: 'center' }]}>{club || 'Qairat'}</Text></View>
              </View>
            </View>
          </View>
        )}

        {/* 2. КОНТЕНТ БИЛЕТОВ */}
        {sub === 'ticket' && (
          <View style={{ paddingBottom: 100 }}>
            <Text style={[styles.title, { fontSize: 22, marginBottom: 16 }]}>Қол жетімді билеттер</Text>
            
            {/*1 ойын билет*/}
            <View style={[styles.inputContainer, { height: 'auto', flexDirection: 'column', paddingVertical: 18, alignItems: 'flex-start', marginBottom: 20 }]}>
              <Text style={[styles.input, { fontWeight: '700' }]}>Билет: Qairat vs Fc Astana</Text>
              <Text style={[styles.subtitle, { marginBottom: 12 }]}>Орталық стадион • Сектор А</Text>
              <Text style={[styles.title, { fontSize: 20, marginBottom: 16, color: '#A811DA' }]}>1 500 ₸</Text>
              <Pressable style={styles.primaryButton} onPress={() => alert('Билет сатып алынды')}>
                <Text style={styles.buttonText}>Билет сатып алу</Text>
              </Pressable>
            </View>

            {/*2 ойын билет*/}
            <View style={[styles.inputContainer, { height: 'auto', flexDirection: 'column', paddingVertical: 18, alignItems: 'flex-start', marginBottom: 20 }]}>
              <Text style={[styles.input, { fontWeight: '700' }]}>Билет: Qairat vs Zhetisu</Text>
              <Text style={[styles.subtitle, { marginBottom: 12 }]}>Орталық стадион • Сектор B</Text>
              <Text style={[styles.title, { fontSize: 20, marginBottom: 16, color: '#A811DA' }]}>1 200 ₸</Text>
              <Pressable style={styles.primaryButton} onPress={() => alert('Билет сатып алынды')}>
                <Text style={styles.buttonText}>Билет сатып алу</Text>
              </Pressable>
            </View>

            {/*3 ойын билет*/}
            <View style={[styles.inputContainer, { height: 'auto', flexDirection: 'column', paddingVertical: 18, alignItems: 'flex-start', marginBottom: 20 }]}>
              <Text style={[styles.input, { fontWeight: '700' }]}>Билет: Aktobe vs Qairat</Text>
              <Text style={[styles.subtitle, { marginBottom: 12 }]}>Қобыланды батыр стадионы • Блок 3</Text>
              <Text style={[styles.title, { fontSize: 20, marginBottom: 16, color: '#A811DA' }]}>2 000 ₸</Text>
              <Pressable style={styles.primaryButton} onPress={() => alert('Билет сатып алынды')}>
                <Text style={styles.buttonText}>Билет сатып алу</Text>
              </Pressable>
            </View>
          </View>
        )}

        {/* 3. КОНТЕНТ МЕРЧА */}
        {sub === 'merch' && (
          <View style={{ paddingBottom: 100 }}>
            <Text style={[styles.title, { fontSize: 22, marginBottom: 16 }]}>Фирмалық өнімдер</Text>
            
            <View style={[styles.inputContainer, { height: 'auto', flexDirection: 'column', paddingVertical: 18, alignItems: 'flex-start' }]}>
              <Text style={[styles.input, { fontWeight: '700' }]}>Фанаттарға арналған шарф</Text>
              <Text style={[styles.subtitle, { marginBottom: 12 }]}>Фирмалық түс "сары-қара"</Text>
              <Text style={[styles.title, { fontSize: 20, marginBottom: 16, color: '#A811DA' }]}>4 500 ₸</Text>
              
              <Pressable style={styles.primaryButton} onPress={() => alert('Корзинаға сақталды ')}>
                <Text style={styles.buttonText}>Корзинаға жіберу</Text>
              </Pressable>
            </View>
          </View>
        )}

      </ScrollView>

      {/* Төменгі бекітілген навигация (Мәзір) */}
      <View style={styles.tabBar}>
        <Pressable style={styles.tabItem} onPress={() => setSub('match')}>
          <Text style={[styles.tabIcon, sub === 'match' && styles.activeTab]}>⚽</Text>
          <Text style={[styles.tabLabel, sub === 'match' && styles.activeTab]}>Матч</Text>
        </Pressable>
        <Pressable style={styles.tabItem} onPress={() => setSub('ticket')}>
          <Text style={[styles.tabIcon, sub === 'ticket' && styles.activeTab]}>🎫</Text>
          <Text style={[styles.tabLabel, sub === 'ticket' && styles.activeTab]}>Билеты</Text>
        </Pressable>
        <Pressable style={styles.tabItem} onPress={() => setSub('merch')}>
          <Text style={[styles.tabIcon, sub === 'merch' && styles.activeTab]}>🛍️</Text>
          <Text style={[styles.tabLabel, sub === 'merch' && styles.activeTab]}>Тауарлары</Text>
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
    marginBottom: 15, // Бірнеше билет тұрғанда аралары тым алшақ болмауы үшін 15-ке өзгертілді
  },
  inputIconText: {
    fontSize: 20,
    marginRight: 14,
  },
  input: {
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
    backgroundColor: '#E2D1EA',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  /* Төменгі меню стильдері */
  tabBar: { 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    height: 80, 
    backgroundColor: '#FFFFFF', 
    flexDirection: 'row', 
    borderTopWidth: 1, 
    borderTopColor: '#F0F0F2', 
    paddingBottom: 20 
  },
  tabItem: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingTop: 10 
  },
  tabIcon: { 
    fontSize: 20, 
    color: '#AAA9B2' 
  },
  tabLabel: { 
    fontSize: 12, 
    color: '#AAA9B2', 
    marginTop: 4,
    fontWeight: '500'
  },
  activeTab: { 
    color: '#A811DA',
    fontWeight: '700'
  },
});
