import { Handle } from '@xyflow/react'
import React from 'react'

const CustomHandle = (data) => {
  return (
    <div>
        <Handle style={{width:8,height:8,background:"gray",border:"2px solid white"}} {...data} />
    </div>
  )
}

export default CustomHandle