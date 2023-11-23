import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'TeLlevoApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    GoogleMaps: {
      "key": "AIzaSyBWWNwMhbVQ5yZ-OHlP7kNRVU-YQ1UGrU4"
    }
  }
};

export default config;
