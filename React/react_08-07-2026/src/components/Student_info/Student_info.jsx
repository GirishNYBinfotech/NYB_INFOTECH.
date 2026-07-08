// Hierarchy an reusable modules
import React from 'react'
import Student_number from './student_number'
import Student from './student'

function Student_info() {
  return (
    <div>
        <Student/>
        <Student_number/>
    </div>
  )
}

export default Student_info