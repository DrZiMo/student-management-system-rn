import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'

const StudentCard = ({ student }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      className='bg-white p-4 mb-3 rounded-2xl shadow-sm border border-gray-100 flex-row justify-between items-center'
      onPress={() =>
        navigation.navigate('StudentDetail', { studentId: student.id })
      }
    >
      <View className='flex-1'>
        <Text className='text-lg font-bold text-gray-800'>{student.name}</Text>
        <Text className='text-sm text-gray-500 mt-1'>
          ID: {student.studentId}
        </Text>
        <Text className='text-sm text-blue-600 mt-1 font-medium'>
          {student.department}
        </Text>
      </View>
      <Ionicons name='chevron-forward' size={20} color='#9CA3AF' />
    </TouchableOpacity>
  )
}

export default StudentCard
