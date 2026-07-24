import React from 'react'
import Ternary from '../../../components_09-07-2026/Task_24-07-2026/Conditional_Renderdring/Ternary'
import Ifelse from '../../../components_09-07-2026/Task_24-07-2026/Conditional_Renderdring/Ifelse'
import Switch from '../../../components_09-07-2026/Task_24-07-2026/Conditional_Renderdring/Switch'
import And from '../../../components_09-07-2026/Task_24-07-2026/Conditional_Renderdring/And'

const Conditional_renderingpage = () => {
  return (
    <div>
        <h2>Ternary operator</h2>
        <Ternary/>
        <h2>Ifelse</h2>
        <Ifelse/>
        <h2>Switch</h2>
        <Switch/>
        <h2>logical AND(&&)</h2>
        <And/>
    </div>
  )
}

export default Conditional_renderingpage