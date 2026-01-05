import { createContext, useContext, useState } from 'react'
import { mockStudents } from '../data/mockStudents'

const StudentContext = createContext()

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(mockStudents)
  const [filteredStudents, setFilteredStudents] = useState(mockStudents)

  const addStudent = (student) => {
    const newStudent = { ...student, id: Date.now().toString() }
    const updatedList = [newStudent, ...students]
    setStudents(updatedList)
    setFilteredStudents(updatedList) // Reset search on add
  }

  const updateStudent = (id, updatedData) => {
    const updatedList = students.map((student) =>
      student.id === id ? { ...student, ...updatedData } : student
    )
    setStudents(updatedList)
    setFilteredStudents(updatedList) // Reset search or re-apply? Simplest is reset or keep sync.
    // Ideally we should re-apply the current search term, but for now we update both.
  }

  const deleteStudent = (id) => {
    const updatedList = students.filter((student) => student.id !== id)
    setStudents(updatedList)
    setFilteredStudents(updatedList)
  }

  const searchStudents = (text) => {
    if (!text) {
      setFilteredStudents(students)
    } else {
      const lowerText = text.toLowerCase()
      const filtered = students.filter(
        (student) =>
          student.name.toLowerCase().includes(lowerText) ||
          student.studentId.toLowerCase().includes(lowerText)
      )
      setFilteredStudents(filtered)
    }
  }

  return (
    <StudentContext.Provider
      value={{
        students: filteredStudents,
        allStudents: students, // backup if needed
        addStudent,
        updateStudent,
        deleteStudent,
        searchStudents,
      }}
    >
      {children}
    </StudentContext.Provider>
  )
}

export const useStudents = () => useContext(StudentContext)
