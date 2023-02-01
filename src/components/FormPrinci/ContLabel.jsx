import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

const component = ({children,nombre,nombrefor,margin,obligatorio}) => {
   // console.log("render2 "+nombre)
  return (
    <div className={`form-group mb-${margin}  row`}>
          <label htmlFor={nombrefor} className="col-sm-2 col-form-label">{obligatorio ?<b className="text-danger">*</b>:"" }{nombre}</label>
          <div className="col-sm-10 pt-2">
            {children}
         </div>
    </div>
  )
}


const ContLabel=React.memo(component);
export default  ContLabel