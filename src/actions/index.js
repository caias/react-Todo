/**
 * action type 정의
 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const INCOMPLETE_TODO = 'INCOMPLETE_TODO';

/**
 * action creator
 * @param {string} text 
 */
export const addTodo = (title, date) => ({
  type: ADD_TODO,
  title,
  date,
});

export const completeTodo = () => ({
  type: COMPLETE_TODO,
});