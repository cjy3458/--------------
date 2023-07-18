const set = new Set(); // 인수를 전달하지 않고 Set 생성
console.log(set); // 빈 Set 객체 생성

const set1 = new Set([1, 2, 1, 3, 3]); // 1과 3 중복
console.log(set1); // Set(3) {1, 2, 3} 출력

const set2 = new Set("likelion"); // l과 i 중복
console.log(set2); // Set(6) {"l", "i", "k", "e", "o", "n"} 출력

const uniq = (a) => a.filter((v, i, self) => self.indexOf(v) === i);
// 요소의 값(v), 해당 요소의 인덱스(i), 원본 배열(self)
// indexOf를 이용해 v의 첫 번째 등장 인덱스를 찾아내고
// i와 비교해서 true인 요소만을 포함하는 새로운 배열 반환

console.log(uniq([1, 2, 1, 3, 3])); // (3) [1,2,3] 출력(배열)

const uniq2 = (a) => [...new Set(a)];
console.log(uniq2([1, 2, 1, 3, 3])); // (3) [1,2,3] 출력(배열)

const set3 = new Set([1, 2, 3, 3]);
set3.add(6); // 6 추가
set3.add(7).add(8); // 연속 추가 가능
set3.add(1); // 중복 요소 추가 불가능 but 에러 발생 X
console.log(set3); // {1, 2, 3, 6, 7, 8};

set3.delete(6); // 6 삭제
set3.delete(17528); // 존재하지 않는 요소를 삭제해도 에러 발생 X
set3.delete(1).delete(2);
// add는 추가한 새 객체를 반환하기 때문에 연속 사용이 가능
// delete는 삭제 성공 여부를 boolean으로 반환하기 때문에 연속 사용이 불가능
console.log(set3); // {1, 2, 3, 7, 8};

console.log(set3.size);

set3.size = 25; // 무시, 변경 불가
console.log(set3.size); // 3
