import * as actions from '../actions';
import { combineReducers } from 'redux';
import { incompleted, completed } from '../mockup';
import { subjectSort, newestSort } from '../utils/sort';

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
    case actions.COMPLETE_TODO:
      return state = action.keepData;
    case actions.INCOMPLETE_TODO:
      return state = [...state, ...action.moveData];
    case actions.SORT_TODO:
      const shallowData = [...state];
      return state = action.sortType === 'subject' ? subjectSort(shallowData) : newestSort(shallowData);
    case actions.INCOMPLETE_TOGGLE_TODO:
      return state = state.map((todo, todoIndex) => {
        return todoIndex === action.index ? { ...todo, active: !todo.active } : todo;
      });
    case actions.INCOMPLETE_TOGGLE_ALL:
      return state = state.map(todo => ({ ...todo, active: action.status}));
    default:
      return state;
  }
};

const completedData = (state = completed, action) => {
  switch (action.type) {
    case actions.COMPLETE_TODO:
      return state = [...state, ...action.moveData];
    case actions.INCOMPLETE_TODO:
      return state = action.keepData;
    case actions.COMPLETE_TOGGLE_TODO:
      return state = state.map((todo, todoIndex) => {
        return todoIndex === action.index ? { ...todo, active: !todo.active } : todo;
      });
    case actions.COMPLETE_TOGGLE_ALL:
      return state = state.map(todo => ({ ...todo, active: action.status }));
    default:
      return state;
  }
};

const todoApp = combineReducers({
  incompletedData,
  completedData,
});

export default todoApp;