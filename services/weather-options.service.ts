import { MaterialCommunityIcons } from '@expo/vector-icons';

export type IconNameTypes = keyof typeof MaterialCommunityIcons.glyphMap;

type TOptions = {
  iconName: IconNameTypes;
  gradient: Array<string>;
  title: string;
  subtitle: string;
};

class WeatherOptionsService {
  weatherOptions: { [key: string]: TOptions } = {
    Thunderstorm: {
      iconName: 'weather-lightning',
      gradient: ['#141E30', '#243B55'],
      title: 'Сиди дома',
      subtitle: 'Ты видишь что на улице?'
    },
    Drizzle: {
      iconName: 'weather-rainy',
      gradient: ['#3a7bd5', '#3a6073'],
      title: 'Возьми зонтик',
      subtitle: 'Возможно скоро дождь усилится '
    },
    Rain: {
      iconName: 'weather-pouring',
      gradient: ['#000046','#1CB5E0'],
      title: 'На улице дождь',
      subtitle: 'А значит скоро будет радуга!'
    },
    Snow: {
      iconName: 'snowflake',
      gradient: ['#83a4d4', '#b6fbff'],
      title: 'На улице снежок!',
      subtitle: 'Одевайтесь потеплее, лепите снеговиков'
    },
    Dust: {
      iconName: 'weather-windy-variant',
      gradient: ['#B79891', '#94716B'],
      title: 'Пыльно',
      subtitle: 'Лучше закройте окна'
    },
    Smoke: {
      iconName: 'weather-windy',
      gradient: ['#56CCF2', '#2F80ED'],
      title: 'На улице смог :(',
      subtitle: 'Не советую выходить без необходимости'
    },
    Haze: {
      iconName: 'weather-hazy',
      gradient: ['#3E5151', '#DECBA4'],
      title: 'На улице снежок!',
      subtitle: 'Одевайтесь потеплее, лепите снеговиков'
    },
    Mist: {
      iconName: 'weather-fog',
      gradient: ['#606c88', '#3f4c6b'],
      title: 'Ни черта не видно в тумане',
      subtitle: 'Зато как в Сайлент-Хилле :)'
    },
    Clear: {
      iconName: 'weather-sunny',
      gradient: ['#56CCF2', '#2F80ED'],
      title: 'Погода супер :)',
      subtitle: 'Иди гулять, хватит сидеть дома!'
    },
    Clouds: {
      iconName: 'weather-cloudy',
      gradient: ['#757F9A', '#D7DDE8'],
      title: 'Облака',
      subtitle: 'Белогривые лошадки'
    },
  }
  checkCondition(condition: string): boolean {
    return this.weatherOptions.hasOwnProperty(condition);
  }
  getIconName(condition: string): IconNameTypes {
    if (this.checkCondition(condition)) {
      return this.weatherOptions[condition].iconName;
    }
    return 'hinduism';
  }
  getGradient(condition: string): Array<string> {
    return this.checkCondition(condition) ? this.weatherOptions[condition].gradient : ['#56CCF2', '#2F80ED'];
  }
  getTitle(condition: string): string {
    return this.checkCondition(condition) ? this.weatherOptions[condition].title : '...';
  }
  getSubtitle(condition: string): string {
    return (
      this.checkCondition(condition)
      ? this.weatherOptions[condition].subtitle
      : 'Нет слов, чтобы описать эту погоду'
    );
  }
}

export const weatherOptionsService = new WeatherOptionsService();
