import { BezierEdge, EdgeLabelRenderer, getBezierPath, useReactFlow, } from '@xyflow/react'
import { IoMdCloseCircleOutline } from "react-icons/io";



const CustomEdge = (data) => {
      const {setEdges} = useReactFlow()
    

      const {id,sourceX, sourceY,targetX,targetY,sourcePosition,targetPosition} = data;
      console.log("🔴",id,sourceX, sourceY,targetX,targetY,sourcePosition,targetPosition)
    
    const [edgePath, labelX, labelY]= getBezierPath({sourceX, sourceY,targetX,targetY,sourcePosition,targetPosition})
   return (
    <>
        <BezierEdge {...data} />
    <EdgeLabelRenderer>
        <span
         style={{position:"absolute",pointerEvents:"all",transform:`translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`}} className='text-red-300 cursor-pointer '
         onClick={()=> setEdges(prev=>prev.filter(edg=>edg.id!==id))}
         ><IoMdCloseCircleOutline /></span>
    </EdgeLabelRenderer>
    </>
  )
}

export default CustomEdge