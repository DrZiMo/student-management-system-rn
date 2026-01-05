import { Text, TextInput, View } from 'react-native'

const InputField = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  error,
}) => {
  return (
    <View className='mb-4'>
      <Text className='text-gray-700 font-medium mb-1.5 ml-1'>{label}</Text>
      <TextInput
        className={`bg-white border rounded-xl px-4 py-3 text-gray-800 ${
          error ? 'border-red-500' : 'border-gray-200'
        } focus:border-blue-500`}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor='#9CA3AF'
      />
      {error && <Text className='text-red-500 text-xs ml-1 mt-1'>{error}</Text>}
    </View>
  )
}

export default InputField
