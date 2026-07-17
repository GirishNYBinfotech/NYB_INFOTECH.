import React from 'react'
import Parent from '../../../components_09-07-2026/new_17-07-2026/Probs_and states/Child_to_parent/Parent'
import ReRender from '../../../components_09-07-2026/new_17-07-2026/Probs_and states/Rerendring/ReRender'
import Parentc from '../../../components_09-07-2026/new_17-07-2026/Probs_and states/Child_to_Child/Parentc'
import PParent from '../../../components_09-07-2026/new_17-07-2026/Probs_and states/parent_to_Child/PParent'

const ProbsandStatepage = () => {
  return (
    <div>
        <h2>Child to child</h2>
        <Parentc/>
        <h2>Child to parent</h2>
        <Parent/>
        <h2>Parent to child</h2>
        <PParent/>
        <h2>Rerendering</h2>
        <ReRender/>
    </div>
  )
}

export default ProbsandStatepage