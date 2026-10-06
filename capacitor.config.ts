import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.machospadel.app',
  appName: 'Machos Padel App',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
