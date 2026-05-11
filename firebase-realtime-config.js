// Firebase Realtime Database configuration
// Replace these values with your actual Firebase project configuration
const firebaseRealtimeConfig = {
  apiKey: "AIzaSyCEQgxPv0v_MMV6ZLueDYmsWhdORWnfZ_s",
  authDomain: "location-tracking-system-ba4b6.firebaseapp.com",
  databaseURL: "https://location-tracking-system-ba4b6-default-rtdb.firebaseio.com",
  projectId: "location-tracking-system-ba4b6",
  storageBucket: "location-tracking-system-ba4b6.firebasestorage.app",
  messagingSenderId: "159976717220",
  appId: "1:159976717220:web:c4b2a322aa5fc09853df31"
};

// Initialize Firebase Realtime Database
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseRealtimeConfig);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { firebaseRealtimeConfig };
}

// For browser usage
window.firebaseRealtimeConfig = firebaseRealtimeConfig;