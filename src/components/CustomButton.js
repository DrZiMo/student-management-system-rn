import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'

const CustomButton = ({ title, onPress, isLoading, variant = 'primary' }) => {
  const baseStyle = 'py-4 rounded-xl items-center shadow-sm'
  const variants = {
    primary: 'bg-blue-600',
    danger: 'bg-red-500',
    outline: 'bg-transparent border border-gray-300',
  }
  const textStyles = {
    primary: 'text-white font-bold text-lg',
    danger: 'text-white font-bold text-lg',
    outline: 'text-gray-700 font-bold text-lg',
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading}
      className={`${baseStyle} ${variants[variant]} ${
        isLoading ? 'opacity-70' : ''
      }`}
    >
      {isLoading ? (
        <ActivityIndicator color='#fff' />
      ) : (
        <Text className={textStyles[variant]}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}

export default CustomButton
