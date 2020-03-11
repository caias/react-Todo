import * as actions from '../actions';
import { combineReducers } from 'redux';
import { incompleted, completed } from '../mockup';

const incompletedData = (state = incompleted, action) => {
  switch(action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        {
          title: action.title,
          updateDate: action.date
        },
      ];
    default:
      return state;
  }
};

const completedData = (state = completed, action) => {
  switch (action.type) {
    case actions.COMPLETE_TODO:
      return {
        ...state,
      };
    default:
      return state;
  }
};

const todoApp = combineReducers({
  incompletedData,
  completedData,
});

export default todoApp;