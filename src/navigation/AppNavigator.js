import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AddStudentScreen from '../screens/AddStudentScreen'
import EditStudentScreen from '../screens/EditStudentScreen'
import StudentDetailScreen from '../screens/StudentDetailScreen'
import StudentListScreen from '../screens/StudentListScreen'

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='StudentList'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false, // Cleaner look
        }}
      >
        <Stack.Screen
          name='StudentList'
          component={StudentListScreen}
          options={{ title: 'Students' }}
        />
        <Stack.Screen
          name='AddStudent'
          component={AddStudentScreen}
          options={{ title: 'Add Student' }}
        />
        <Stack.Screen
          name='EditStudent'
          component={EditStudentScreen}
          options={{ title: 'Edit Student' }}
        />
        <Stack.Screen
          name='StudentDetail'
          component={StudentDetailScreen}
          options={{ title: 'Student Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
