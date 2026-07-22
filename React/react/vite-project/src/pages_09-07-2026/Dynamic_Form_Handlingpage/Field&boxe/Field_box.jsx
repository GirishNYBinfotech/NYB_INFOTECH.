import React from 'react'
import Inputfield from '../../../components_09-07-2026/Dynamic_Form_Handling_22-07-2026/fields&box/Inputfield'
import TextArea from '../../../components_09-07-2026/Dynamic_Form_Handling_22-07-2026/fields&box/TextArea'
import Dropdownbox from '../../../components_09-07-2026/Dynamic_Form_Handling_22-07-2026/fields&box/Dropdownbox'
import RadioButton from '../../../components_09-07-2026/Dynamic_Form_Handling_22-07-2026/fields&box/RadioButton'
import Checkbox from '../../../components_09-07-2026/Dynamic_Form_Handling_22-07-2026/fields&box/CheckBox'
import FileInput from '../../../components_09-07-2026/Dynamic_Form_Handling_22-07-2026/fields&box/FileInput'

const Field_box = () => {
  return (
    <div>
        <Inputfield/>
        <TextArea/>
        <Dropdownbox/>
        <RadioButton/>
        <Checkbox/>
        <FileInput/>
    </div>
  )
}

export default Field_box