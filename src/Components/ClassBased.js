import React, { Component } from 'react'
import { connect } from 'react-redux'
import { update_infos } from './action'

class ClassBased extends Component {

    update_infos = () => {
        this.props.onUpdate('Ivan Christian Gloria')
    }

    render() {
        return (
            <React.Fragment>
                
                <div className='container pt-5'>
                    <div className='pt-3 pb-2 h-100'>
                        {
                            this.props.emp_list.map(({ id, name, salary }) => 
                                <React.Fragment key={id}>
                                    <p className='mb-0'>{name}</p>
                                    <p className='mb-3'>{salary}</p>
                                </React.Fragment>
                            )
                        }
                        <button className='btn btn-primary' onClick={this.update_infos}>Update</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { emp_list: state.emp_list }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdate: (val) => dispatch(update_infos(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassBased)