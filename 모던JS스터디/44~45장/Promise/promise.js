



let a = 0;

// setTimeout은 비동기 함수
// 콜백함수의 처리 결과를 외부로 반환 불가
// 상위 스코프의 변수에 할당 불가


setTimeout(() => { a = 100;}, 1); // 할당 불가
console.log(a); // 0 출력


// 프로미스 생성
const promise1 = new Promise((resolve, reject) => {
    // 프로미스 함수의 콜백 함수 내부에서 비동기 처리 수행
    if(/* 비동기 처리 성공 */) {
        resolve("result");
    } else { /* 비동기 처리 실패 */
        reject("Fail");
    }
})


get('/step1', a => {
    get('/step2', b => {
        get('/step3', c => {
            ....
        })
    }) 
})


promise(/*비동기 실행*/)
.then(
    res => console.log(res),
    err => console.err(err)
)

promise(/*비동기 실행*/)
.catch(
    err => console.err(err)
)


const resolvePromise = Promise.resolve([1,2,3]);
resolvePromise.then((res) => console.log(res));


const rejectedPromise = Promise.reject(new Error('Error:'));
rejectedPromise.catch(console.log);


setTimeout(() => console.log(1), 0);

Promise.resolve()
.then(() => console.log(2))
.then(() => console.log(3))


const promise = fetch(url, [, option])



const wrongUrl = 'url'

fetch(wrongUrl)
.then(response => {
    if(!response.ok) throw new Error('error~');
    console.log('ok')
})
.catch(() => console.log('error'));


fetch(wrongUrl)
.then(() => console.log("GOOD~"))
.catch(() => console.log("error"));




