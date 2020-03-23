/**
 * action type 정의
 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const INCOMPLETE_TODO = 'INCOMPLETE_TODO';
export const SORT_TODO = 'SORT_TODO';
export const INCOMPLETE_TOGGLE_TODO = 'INCOMPLETE_TOGGLE_TODO';
export const COMPLETE_TOGGLE_TODO = 'COMPLETE_TOGGLE_TODO';
export const INCOMPLETE_TOGGLE_ALL = 'INCOMPLETE_TOGGLE_ALL';
export const COMPLETE_TOGGLE_ALL = 'COMPLETE_TOGGLE_ALL';
/**
 * action creator
 * @param {string} text 
 */
export const addTodo = (title, date) => ({
  type: ADD_TODO,
  title,
  date,
});

export const completedTodo = (moveData, keepData) => ({
  type: COMPLETE_TODO,
  moveData,
  keepData,
});

export const incompletedTodo = (moveData, keepData) => ({
  type: INCOMPLETE_TODO,
  moveData,
  keepData,
});

export const sortTodo = (sortType) => ({
  type: SORT_TODO,
  sortType,
});

export const incompleteToggleTodo = (index) => ({
  type: INCOMPLETE_TOGGLE_TODO,
  index,
});

export const completeToggleTodo = (index) => ({
  type: COMPLETE_TOGGLE_TODO,
  index,
});

export const incompleteToggleAll = (status) => ({
  type: INCOMPLETE_TOGGLE_ALL,
  status,
});

export const completeToggleAll = (status) => ({
  type: COMPLETE_TOGGLE_ALL,
  status,
});