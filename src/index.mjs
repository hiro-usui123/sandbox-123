// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel 
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

/*
var,let,const
*/

// var val1 = "var変数";
// console.log(val1) ;

// val1 = "var変数を上書き";
// console.log(val1) ;

// var val1 = "var変数を再宣言";
// console.log(val1) ;

// let val2 = "let変数"
// console.log(val2) ;

// val2 = "let変数を上書き";
// console.log(val2) ;

// var val2 = "let変数を再宣言";
// console.log(val2) ;

//const val3 = "const変数"
//console.log(val3) ;

//val3 = "const変数を上書き";
//console.log(val3) ;

//var val3 = "const変数を再宣言";
//console.log(val3) ;

// const val4 = {
//  name: "じゃけぇ",
//  age: 28
// };
// val4.name = "jak";
// val4.address= "hirosima";
// console.log(val4);

// const val5 = ['dog','cat'];
// val5[0]= "bird";
// val5.push("monkey");
// console.log(val5);

// //テンプレートを使わない
// const name = "じゃけぇ";
// const age = "28";

// const message1 = "私の名前は"+name+"です。年齢は"+age+"です。" ;
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `テンプ私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//関数　従来
// function func1(str){
// return str;
// }

// const func1 = function(str){
//  return str;
// }
// console.log(func1("func1です"));

// //アロー関数
// const func2 =(str) =>{
//  return str;
// }
// console.log(func2("func2です"));

// const func =(num1,num2) => num1 + num2;
// console.log(func(10,20));

//分割

// const myprofile ={
//  name:"じゃけぇ",
//  age:28
// };
// const massage1 = `名前は${myprofile.name}です。年齢は${myprofile.age}歳です。`;
// console.log(massage1);

// const {name,age} = myprofile;
// const massage2 = `２名前は${name}です。年齢は${age}歳です。`;
// console.log(massage2);

// const myprofile = ['じゃけぇ',28];
// const massage3 = `名前は${myprofile[0]}です。年齢は${myprofile[1]}歳です。`;
// console.log(massage3);

// const [name,age] = myprofile;
// const massage4 = `２名前は${name}です。年齢は${age}歳です。`;
// console.log(massage4);

// //デフォルト値
// const sayHello = (name="ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("じゃけぇ");
// sayHello();

//スプレッド
//展開
//const arr1 =[1,2];
// //console.log(arr1);
// //console.log(...arr1);

//const sumFunc = (num1,num2) => console.log (num1 + num2);
//sumFunc(arr1[0],arr1[1]);
//sumFunc(...arr1);

//まとめ
// const arr2 = [1,2,3,4,5]
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//コピー
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// arr6[0] =100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

//map filter
const nameArr =["田中","山田","じゃけぇ"];
// for(let index = 0;index < nameArr.length; index++){
//  console.log(`${index+1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name,index) => console.log(`${index+1}番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//  return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=> {
//  if (name ==="じゃけぇ"){
// return name 
//  }else{
//    return `${name}さん`
//  }
// })
// console.log(newNameArr);

//三項演算子
// const val1 = 1 < 0 ? 'trueです' : 'falseです' ;
// console.log(val1);

//const num ="1300";
// const num =1300;
//console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString():'数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1,num2) => {
//  return num1+num2 >100 ? '100超え':'許容範囲'
// }
// console.log(checkSum(50,60));
// console.log(checkSum(50,50));

//論理演算子

// const flag1 = true ;
// const flag2 = false ;
// if (flag1||flag2){
//   console.log("1か2はTrueになります")
// }

// if (flag1&&flag2){
//   console.log("1も2もTrueになります")
// }

//||は左がfalseなら右を返す
//const num = null;
// const num = 1000;
// const fee = num || "金額未設定です";
// console.log(fee);

//&&は左型がtrueなら右を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
