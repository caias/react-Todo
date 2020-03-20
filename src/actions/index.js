/**
 * action type 정의
 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const INCOMPLETE_TODO = 'INCOMPLETE_TODO';
export const SORT_TODO = 'SORT_TODO';

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

export const sortTodo = (sortData) => ({
  type: SORT_TODO,
  sortData,
});