let counter=0;
const getdata = ()=>{
    //making API calls

    console.log('making api call...', counter++)
}
const debounce = function(fn,delay){
let timer;
return function (){
    let context=this,
    args=arguments
    clearTimeout(timer);
    timer = setTimeout(()=>{
        getdata.apply(context,arguments)
    },delay)
}

}
const improvedfunction =  debounce(getdata,3000)

// apply 
const person ={
    firstname:'sejal',
    lastname:'gujar',
    fullname : function(){
        console.log( this.firstname +" "+this.lastname)
    }
}
const person1 ={
    firstname:'vijay',
    lastname:'xyz',

}
person.fullname.apply(person1)


//DRY :dont repeat yourself