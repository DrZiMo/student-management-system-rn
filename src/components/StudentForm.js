import { useState } from 'react'
import { ScrollView, View } from 'react-native'
import CustomButton from './CustomButton'
import InputField from './InputField'

const StudentForm = ({
  initialValues,
  onSubmit,
  submitLabel = 'Save Student',
}) => {
  const [formData, setFormData] = useState({
    name: initialValues?.name || '',
    studentId: initialValues?.studentId || '',
    department: initialValues?.department || '',
    email: initialValues?.email || '',
    phone: initialValues?.phone || '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error for that field when typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }))
    }
  }

  const handleSubmit = () => {
    // Basic inline validation or use utility
    // We'll iterate fields to check basic required
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.studentId) newErrors.studentId = 'ID is required'
    if (!formData.department) newErrors.department = 'Department is required'
    // For email/phone we can use the util, but let's keep it simple or use the one we made
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.phone) newErrors.phone = 'Phone is required'

    // We can also use getValidationError global check, but detailed field errors are better

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onSubmit(formData)
  }

  return (
    <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
      <InputField
        label='Full Name'
        placeholder='e.g. John Doe'
        value={formData.name}
        onChangeText={(text) => handleChange('name', text)}
        error={errors.name}
      />
      <InputField
        label='Student ID'
        placeholder='e.g. S12345'
        value={formData.studentId}
        onChangeText={(text) => handleChange('studentId', text)}
        error={errors.studentId}
      />
      <InputField
        label='Department'
        placeholder='e.g. Computer Science'
        value={formData.department}
        onChangeText={(text) => handleChange('department', text)}
        error={errors.department}
      />
      <InputField
        label='Email Address'
        placeholder='e.g. john@example.com'
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
        keyboardType='email-address'
        error={errors.email}
      />
      <InputField
        label='Phone Number'
        placeholder='e.g. 1234567890'
        value={formData.phone}
        onChangeText={(text) => handleChange('phone', text)}
        keyboardType='phone-pad'
        error={errors.phone}
      />

      <View className='mt-6 mb-10'>
        <CustomButton title={submitLabel} onPress={handleSubmit} />
      </View>
    </ScrollView>
  )
}

export default StudentForm
