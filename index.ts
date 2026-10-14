// index.ts
import { registerRootComponent } from 'expo';

// 1. Импортируем именно FootballFanClub и указываем расширение .tsx (если TypeScript ругается)
import App from './src/App';

// 2. Регистрируем тот компонент, который только что импортировали
registerRootComponent(App);
