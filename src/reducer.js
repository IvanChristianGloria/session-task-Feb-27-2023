import * as actions from './actionType'

const initState = {
    emp_list: [
        {
        id: 1,
        name: 'Steve Jobs',
        salary: '$23,000',
        },
        {
        id: 2,
        name: 'Ivan',
        salary: '$50,000',
        },
        {
        id: 3,
        name: 'Mark Zuckerberg',
        salary: '$25,000',
        }
    ]
}

const reducer = (state = initState, action) => {
    let state_copy = state.emp_list
    switch (action.type){
        case actions.UPDATE:
            console.log(state)
            state_copy[1].name = action.payload
            return{
                ...state,
                emp_list: [...state_copy]
            }
        default:
            return state
    }
}

export default reducer