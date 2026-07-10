import React from 'react'
import Get from '../../components_09-07-2026/Axios_10-07-2026/Get'
import Post from '../../components_09-07-2026/Axios_10-07-2026/Post'
import Put from '../../components_09-07-2026/Axios_10-07-2026/Put'
import Patch from '../../components_09-07-2026/Axios_10-07-2026/Patch'
import Delete from '../../components_09-07-2026/Axios_10-07-2026/Delete'

function Axios() {
  return (
    <div>
        <Get/>
        <Post/>
        <Put/>
        <Patch/>
        <Delete/>
    </div>
  )
}

export default Axios