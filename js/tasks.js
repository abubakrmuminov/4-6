// 1-masala
export function squareNumber(a) {
  let result;
  if (typeof a === "number") {
    result = a * a;
  } else {
    result = "Ibrohimjon, yana xato qilding!";
  }
  console.log("Hisoblash tugadi!");
  return result;
}

// 2-masala
export function stringLength(str) {
  let result;
  if (typeof str === "string") {
    result = str.length;
  } else {
    result = "Zafarjon, bu nima?!";
  }
  console.log("Tahlil tugadi!");
  return result;
}

// 3-masala
export function fillWith42(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 42;
  }
  return arr;
}

// 4-masala
export function replaceWith100(arr) {
  if (arr.length < 3) return [];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 2) {
      newArr.push(100);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 5-masala
export function sortNames(arr) {
  if (arr.length === 0) return ["Shohrux, tartib yo'q!"];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 6-masala
export function countGuests(main, other1, other2) {
  let guests = [];
  guests.push(main);
  if (other1) guests.push(other1);
  if (other2) guests.push(other2);
  return guests.length;
}

// 7-masala
export function mergeAndSort(arr1, arr2) {
  let combined = [];
  for (let i = 0; i < arr1.length; i++) {
    combined.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    combined.push(arr2[j]);
  }
  for (let i = 0; i < combined.length - 1; i++) {
    for (let j = i + 1; j < combined.length; j++) {
      if (combined[i] > combined[j]) {
        let temp = combined[i];
        combined[i] = combined[j];
        combined[j] = temp;
      }
    }
  }
  return combined;
}

// 8-masala
export function capitalizeFirst(str) {
  if (typeof str !== "string") return "Hayitali, bu string emas!";
  let first = str.charAt(0).toUpperCase();
  let rest = "";
  for (let i = 1; i < str.length; i++) {
    rest += str.charAt(i);
  }
  return first + rest;
}

// 9-masala
export function getStringLength(str) {
  if (typeof str !== "string") return "Abdulmo'min, yana adashding!";
  let length = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    length++;
  }
  return length;
}

// 10-masala
export function mergeAndSortDescending(arr1, arr2) {
  let combined = [];
  for (let i = 0; i < arr1.length; i++) {
    combined.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    combined.push(arr2[j]);
  }
  for (let i = 0; i < combined.length - 1; i++) {
    for (let j = i + 1; j < combined.length; j++) {
      if (combined[i] < combined[j]) {
        let temp = combined[i];
        combined[i] = combined[j];
        combined[j] = temp;
      }
    }
  }
  return combined;
}
