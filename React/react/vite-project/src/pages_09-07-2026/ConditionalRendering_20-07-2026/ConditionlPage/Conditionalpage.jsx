import React from 'react'
import Ifelse from '../../../components_09-07-2026/Conditional_Rendering_20-07-2026/Conditional/Ifelse'
import LogicalAND from '../../../components_09-07-2026/Conditional_Rendering_20-07-2026/Conditional/LogicalAND'
import Ternary from '../../../components_09-07-2026/Conditional_Rendering_20-07-2026/Conditional/Ternary'
import Switch from '../../../components_09-07-2026/Conditional_Rendering_20-07-2026/Conditional/Switch'

const Conditionalpage = () => {
  return (
    <div>
        <h2>if-elese condition </h2>
        <Ifelse/>
        <h2>LogicalAND</h2>
        <LogicalAND/>
        <h2>Ternary</h2>
        <Ternary/>
        <h2>Switch</h2>
        <Switch/>
    </div>
  )
}

export default Conditionalpage