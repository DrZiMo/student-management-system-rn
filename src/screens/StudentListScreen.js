import { Ionicons } from '@expo/vector-icons'
import { useLayoutEffect, useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import StudentCard from '../components/StudentCard'
import { useStudents } from '../context/StudentContext'

const StudentListScreen = ({ navigation }) => {
  const { students, searchStudents } = useStudents()
  const [searchText, setSearchText] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('AddStudent')}
          className='mr-4'
        >
          <Ionicons name='add-circle' size={32} color='#2563EB' />
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  const handleSearch = (text) => {
    setSearchText(text)
    searchStudents(text)
  }

  return (
    <View className='flex-1 bg-gray-50 px-4 pt-4'>
      {/* Search Bar */}
      <View className='flex-row items-center bg-white rounded-xl px-3 py-2 mb-4 border border-gray-200'>
        <Ionicons name='search' size={20} color='#9CA3AF' />
        <TextInput
          className='flex-1 ml-2 text-gray-700 h-10'
          placeholder='Search by name or ID...'
          value={searchText}
          onChangeText={handleSearch}
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={() => handleSearch('')}>
            <Ionicons name='close-circle' size={18} color='#9CA3AF' />
          </TouchableOpacity>
        )}
      </View>

      {/* List */}
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StudentCard student={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className='flex-1 justify-center items-center mt-20'>
            <Text className='text-gray-400 text-lg'>No students found.</Text>
          </View>
        }
      />
    </View>
  )
}

export default StudentListScreen
