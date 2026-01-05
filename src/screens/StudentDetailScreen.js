import { Ionicons } from '@expo/vector-icons'
import { useLayoutEffect } from 'react'
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import { useStudents } from '../context/StudentContext'

const DetailItem = ({ label, value, icon }) => (
  <View className='flex-row items-start mb-6'>
    <View className='bg-blue-50 p-2.5 rounded-full mr-4'>
      <Ionicons name={icon} size={22} color='#2563EB' />
    </View>
    <View className='flex-1 border-b border-gray-100 pb-2'>
      <Text className='text-gray-500 text-sm mb-1'>{label}</Text>
      <Text className='text-gray-800 text-lg font-semibold'>{value}</Text>
    </View>
  </View>
)

const StudentDetailScreen = ({ route, navigation }) => {
  const { studentId } = route.params
  const { students, deleteStudent } = useStudents()

  const student = students.find((s) => s.id === studentId)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('EditStudent', { student })}
          className='mr-4'
        >
          <Text className='text-blue-600 font-bold text-base'>Edit</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation, student])

  if (!student) {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text>Student not found</Text>
      </View>
    )
  }

  const handleDelete = () => {
    Alert.alert(
      'Delete Student',
      'Are you sure you want to delete this student?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            deleteStudent(student.id)
            navigation.popToTop() // Go back to list
          },
        },
      ]
    )
  }

  return (
    <ScrollView className='flex-1 bg-white'>
      {/* Header Section */}
      <View className='bg-blue-600 px-6 py-8 rounded-b-3xl mb-6 shadow-lg'>
        <View className='w-20 h-20 bg-white/20 rounded-full items-center justify-center mb-4 self-center'>
          <Text className='text-white text-3xl font-bold'>
            {student.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        <Text className='text-white text-2xl font-bold text-center mb-1'>
          {student.name}
        </Text>
        <Text className='text-blue-100 text-center text-lg'>
          {student.department}
        </Text>
      </View>

      <View className='px-6'>
        <DetailItem
          label='Student ID'
          value={student.studentId}
          icon='card-outline'
        />
        <DetailItem label='Email' value={student.email} icon='mail-outline' />
        <DetailItem label='Phone' value={student.phone} icon='call-outline' />
        <DetailItem
          label='Department'
          value={student.department}
          icon='school-outline'
        />

        <View className='mt-8 mb-10'>
          <CustomButton
            title='Delete Student'
            onPress={handleDelete}
            variant='danger'
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default StudentDetailScreen
