import { MAX_ITEMS_PER_QUIZ } from '../config/constants';
import Swal from 'sweetalert2';

export function notificationModal(props, callback) {
  return Swal.fire({ ...props }).then(() => callback());
}

function generateRandomArrayOfNumbers(limit = MAX_ITEMS_PER_QUIZ) {
  const arr = [];
  while (arr.length < limit) {
    const r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

export function generateInitialQuizzesData(initialData) {
  const indexes = generateRandomArrayOfNumbers();
  return initialData.length && indexes.map((index) => initialData[index]);
}

export function parseResults(record) {
  return {
    name: `${record.name.first} ${record.name.last}`,
    imageUrl: record.picture.large
  };
}
