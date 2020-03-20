export function newestSort(arr) {
  arr.sort((a, b) => {
    const dateA = new Date(a.updateDate).getTime();
    const dateB = new Date(b.updateDate).getTime();
    return dateB - dateA;
  });
  return arr;
}

export function subjectSort(arr) {
  arr.sort((a, b) => {
    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
  });
  return arr;
}
