const set = new Set(); // 인수를 전달하지 않고 Set 생성
console.log(set); // 빈 Set 객체 생성

const set1 = new Set([1, 2, 1, 3, 3]); // 1과 3 중복
console.log(set1); // Set(3) {1, 2, 3} 출력

const set2 = new Set("likelion"); // l과 i 중복
console.log(set2); // Set(6) {"l", "i", "k", "e", "o", "n"} 출력

// const uniq = (array) => array.filter((v, i, self) => self.indexOf(v) === i);
// console.log(uniquniq([1, 2, 1, 3, 3])); // (3) [1,2,3] 출력(배열)

const uniq = (a) => a.filter((v, i, self) => self.indexOf(v) === i);
// 요소의 값(v), 해당 요소의 인덱스(i), 원본 배열(self)
// indexOf를 이용해 v의 첫 번째 등장 인덱스를 찾아내고
// i와 비교해서 true인 요소만을 포함하는 새로운 배열 반환

console.log(uniq([1, 2, 1, 3, 3]));
