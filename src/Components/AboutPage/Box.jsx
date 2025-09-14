import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Box = ({style,title,src}) => {
  return (
  <div className={style}>
  <Col className=' flex flex-wrap justify-center '> <img src={src} alt="not found" className="w-9 h-9 flex justify-center mt-1" /></Col>
       
      
  <Col className=' flex flex-wrap '><p className="text-md text-xl mt-2 text-center justify-center">{title}</p></Col> 
    </div>
  
  )
}

export default Box