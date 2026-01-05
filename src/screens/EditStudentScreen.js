import { Alert, View } from 'react-native'
import StudentForm from '../components/StudentForm'
import { useStudents } from '../context/StudentContext'

const EditStudentScreen = ({ route, navigation }) => {
  const { student } = route.params
  const { updateStudent } = useStudents()

  const handleUpdate = (updatedData) => {
    updateStudent(student.id, updatedData)
    Alert.alert('Success', 'Student updated successfully', [
      {
        text: 'OK',
        onPress: () =>
          navigation.navigate('StudentDetail', { studentId: student.id }),
      }, // Go back to detail
    ])
  }

  return (
    <View className='flex-1 bg-white px-4 py-4'>
      <StudentForm
        initialValues={student}
        onSubmit={handleUpdate}
        submitLabel='Update Student'
      />
    </View>
  )
}

export default EditStudentScreen
