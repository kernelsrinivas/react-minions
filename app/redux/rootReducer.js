import { combineReducers } from 'redux';
import produce from "immer";

const homeInitialState = {
    title:'Home',
    pageNo:1
}

const homeReducer = (state = homeInitialState, action) => {
    switch (action.type) {
        case 'HOME_PAGE':
            return state;
        default:
            return state;
    }
}

const aboutInitialState = {
    title:':::: About Page',
    pageNo:2,
    data: [
        {name:'a', age:1},
        {name:'b', age:2},
        {name:'c', age:3},
        {name:'d', age:4},
    ]
}

const aboutReducer = produce((state = aboutInitialState, action) => {
    switch (action.type) {
        case 'ABOUT_PAGE':
            return state;
        case 'ABOUT_PAGE_UPDATE':
            return Object.assign({}, state, {...action.payload})
        default:
            return state;
    }
})

export default combineReducers({
    home: homeReducer,
    about: aboutReducer
});