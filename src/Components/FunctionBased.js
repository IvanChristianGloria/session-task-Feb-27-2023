import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { update_infos } from './action'

const FunctionBased = () => {
    const emp_list = useSelector((state) => state.emp_list)
    const dispatch = useDispatch()
  
    const up_info = () => {
      dispatch(update_infos('Ivan Christian Gloria'))
    }

    return(
        <React.Fragment>
            <div className='container pt-5'>
                <div className='pt-3 pb-2 h-100'>
                    {
                        emp_list.map(({ id, name, salary }) => 
                            <React.Fragment key={id}>
                                <p className='mb-0'>{name}</p>
                                <p className='mb-3'>{salary}</p>
                            </React.Fragment>
                        )
                    }
                    <button className='btn btn-primary' onClick={up_info}>Update</button>
                </div>
            </div>
        </React.Fragment>
    )
    
}

export default FunctionBased