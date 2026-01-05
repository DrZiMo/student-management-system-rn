export const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const isValidPhone = (phone) => {
  // Simple check: at least 10 digits
  const re = /^\d{10,}$/
  // Or allow flexible formats, just checking length/content
  return phone && phone.length >= 10
}

export const getValidationError = (formData) => {
  if (!formData.name) return 'Name is required.'
  if (!formData.studentId) return 'Student ID is required.'
  if (!formData.department) return 'Department is required.'
  if (!formData.email || !isValidEmail(formData.email))
    return 'Valid email is required.'
  if (!formData.phone || !isValidPhone(formData.phone))
    return 'Valid phone number is required.'
  return null
}
