import React from 'react'
import Get from '../../components_09-07-2026/FetchAPI_10-07-2026/Get'
import Post from '../../components_09-07-2026/FetchAPI_10-07-2026/post'
import Put from '../../components_09-07-2026/FetchAPI_10-07-2026/put'
import Patch from '../../components_09-07-2026/FetchAPI_10-07-2026/Patch'
import Delete from '../../components_09-07-2026/FetchAPI_10-07-2026/delete'
import Get1 from '../../components_09-07-2026/FetchAPI_10-07-2026/get1'


function APIpages() {
  return (
    <div>
        <Get/>
        <Post/>
        <Put/>
        <Patch/>
        <Delete/>
        <Get1/>
    </div>
  )
}

export default APIpages