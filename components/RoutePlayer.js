import Tts from 'react-native-tts';

// Function to play voice navigation steps
export const playRoute = (steps) => {
  steps.forEach((step, index) => {
    setTimeout(() => {
      Tts.speak(step.description);
    }, index * 5000); // Delay between each step
  });
};
