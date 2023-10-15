// // // function sendalert(){
// // // alert('btn clicked')
// // // }

// // console.log('hi')

// // function gettext(){
// //     var elem = document.getElementById('timertext');
// //     var t=document.getElementById('num').value;
// //     elem.style.backgroundColor='blue'
// //     elem.innerHTML = '00:00' 
// //     console.log(t)
// //      var timeleft=t
// //      var timerID=setInterval(countdown,1000);
// //      function countdown(){
// //         if (timeleft == 0) {
// //                     clearTimeout(timerID);
// //                     elem.style.backgroundColor='red'
// //                     elem.innerHTML = 'Time up!' 
                  
// //                   } else {
// //                     elem.innerHTML = timeleft ;
// //                     timeleft--;
// //                   }
// //      }

// // }
// // function btnclicked(){
// //     alert('button clicked!')
// //     var btn = document.querySelector('button')
// // btn.style.backgroundColor='blue'
// // btn.style.color='white'
// // btn.style.padding='10px'
// // btn.innerHTML='submitted'
// // btn.value='clicked';
// // }
// // function scopes(){
// //     var variav1=100;
// //     function display(){
// //         const pi=3.14;
// //         let x=20;
// //         console.log(variav1)
// //         console.log(x)
// //         function disp2(){
// //             console.log(x)
// //             // pi=pi+2;
// //         }
// //         disp2()
// //     }

// //     display();
// // }
// // scopes()

// // let letvar=20;
// // const pi= 3.14;

// function one(){
//     console.log('func 1 is running')
// }
// function two(){
//     console.log('func 2 is running')
// }
// function three(){
//     console.log('func 3 is running')
// }
// // one();
// // setInterval(two(),10000)
// // three();


// console.log("Starting program..");

// setTimeout(function() {
//   console.log("timeout1 completed");
// }, 5000);

// console.log("End of execution");
// function gettext(){
//     let name=document.getElementById('name').value;
//     let display=document.getElementById('ptag')
//     display.innerHTML='welcome,'+name+"!"
    
// }

 //print the sum of first 100 numbers
// var sum=0;
// for(i=0;i<=100;i++){
//     sum=sum+i
// }

// console.log(sum)
// for(i=10;i>=5;i--){
//     console.log(i)
// }
// console.log(Date())
//end of code


//i++ i=i+1 i=i-1 = i--




 // variables in js are dynamic

//  var abc;
// abc=20.33;
//  console.log(typeof(abc))
//  console.log(abc)
//  abc='masterclas'
//  console.log(typeof(abc))
//  console.log(abc)

console.log(document.getElementById('number1'))
console.log(document.querySelectorAll('p'))
// console.log(2+4)
// console.log(String(2)+String(4))
function add(){
    let number1= document.getElementById('number1').value;
    let number2=document.getElementById('number2').value;
    let ans = Number(number1)+ Number(number2);
    document.getElementById('answer').innerHTML=ans;


}
function sub(){

}
function mul(){

}
// console.warn('this is a warning')

function displaytext(){
let inpvalue= document.getElementById('textinput').value
document.getElementById('showtext').innerHTML=inpvalue;
}
var demo=document.getElementById('demo')
var demo2=document.getElementById('demo2')
greeting = function(){

demo.innerHTML += this
}
window.addEventListener('load', greeting)
document.getElementById('thisbtn').addEventListener('click',greeting)
greeting2 = ()=>
{

    demo2.innerHTML += this
}
window.addEventListener('load', greeting2)
document.getElementById('thisbtn').addEventListener('click',greeting2)
// greeting3 = (val,val2) => console.log('hello all', val)
// greeting4 = val => console.log(val)


//this keyword refers to the current object present in the code

var result=document.getElementById('promiseResult');
function displayResult(res){
    result.innerHTML=res;
}

// let anypromise = new Promise((resolve,reject)=>{
//     let x=1;
//     if(x==0){
//         resolve('OK')
//     }
//     else{
//         reject('Error')
//     }
// })
// anypromise.then(
//     function(value) {displayResult(value)},
//     function(error){displayResult(error)}
// )
 let openfile = new Promise((resolve,reject)=>{
    let request= new XMLHttpRequest();
    request.open('GET','aboutme.html')
    request.onload=function(){
        if(request.status==200){
            resolve(request.response)
        }
        else{
            reject('file not found')
        }
    }
    request.send();
 })
 openfile.then(
    function(error){displayResult(error)},
    function(value){displayResult(value)},
    
 )
 localStorage.setItem("name","sejal")
 localStorage.setItem("name2","riya")
 localStorage.setItem("age","24")
 let name= localStorage.getItem("name")
 console.log(name)
 localStorage.removeItem('name2')
 //task : get input value from the input element. store it in local storage on 'remember me' button click. delete data on 'forget me' button click
 
