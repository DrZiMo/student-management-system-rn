import { Alert, View } from 'react-native'
import StudentForm from '../components/StudentForm'
import { useStudents } from '../context/StudentContext'

const AddStudentScreen = ({ navigation }) => {
  const { addStudent } = useStudents()

  const handleCreate = (studentData) => {
    addStudent(studentData)
    Alert.alert('Success', 'Student added successfully', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ])
  }

  return (
    <View className='flex-1 bg-white px-4 py-4'>
      <StudentForm onSubmit={handleCreate} submitLabel='Add Student' />
    </View>
  )
}

export default AddStudentScreen
