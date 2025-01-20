import FeedbackScreen from '../../screens/FeedbackScreen';

function AppStack() {
  return (
    <Stack.Navigator>
      {/* Autres écrans */}
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
    </Stack.Navigator>
  );
}
