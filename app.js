//debugger;
/*var a= "hello world";
/*var a= "hello world";

function b() { 
var d= " NISHANT CHAUDHARY "
// debugger;
}
console.log(x);

var x = function() {
	console.log("I am X");
}2
console.log(x);

x();

a();




 function b(){
	 console.log(myvar);
 }
 function a(){
	 var myvar =2;
	 console.log(myvar);
	 b();
 }
 var myvar=1;
 c0onsole.log(myvar) ;
 +
 a();
 co0nsole.log(myvar)'  ;
 
 
   let i;
   for(i=1;i<=100;i++) {
	  
 if(i%2!=0)
  i
console.log(i); 
  }
  */
  /*
 function isPrime(n) {
    if (n <= 1) 
    if (n == 2 || n == 3)   
    if (n % 2 == 0 || n % 3 == 0) 
 
    for (var i=5;i <=(n);i=i+6) 
        if (n%i==0||n%(i++)==0)
   console.log (prime(n)) ;			
 }
 */
 /*
 if (true==!undefined){
	 console.log("true");
 }
 else
 {
	 console.log("false");
 } 
 
 
 var obj ={"name":"NISHNAT CHAUDHARY"};
  console.log(obj); 
 var abc = obj;
 console.log(abc); 
 obj.name= "mayank";
 console.log(obj); 
 console.log(abc);
    


 let i,j;
 
   for(i=2;i<=100;i++)
	   
   {
	   var c=0;
	   
	   for(j=2;j>=i;j++)
	   {
		   if(i%j==0)
		   {
			   c++;
		   }	  
	   }
	   if(c==1)
		   console.log(i);
   }

	   let count=0;
	   let i,j;
	   for(j=2;j<=100;j++)
	   {
		   for(i=1;i<=j;j++){
			   if(j%i==0)
				   count++;
		   }
		   if(count==2)
			   console.log(j);
		   count=0;
	   }
	   function greet(firstname='nishant',lastname='choudhary'){
		   console.log(firstname);
		   console.log(lastname);
	   }
	   greet();  
	
      
 
	   
	   function greet(firstname){
		   console.log(firstname);
		   
	   }
	   function greet(){
    		   console.log('hello');
    		   
		   } 
		   function greet(firstname,lastname){
		   console.log(firstname);
		   console.log(lastname);
		   }
	   
	    
	   	   
		   greet('nishant','choudhary');
	   greet('nishant');
	   greet();

 function abc(){
	 return {
		 name:"arya"
	 }
 }
 
 
 function abc1 (){
 	 return 
	 {
 		 name:"arya"
 	 }
  }
 console.log(abc());
 console.log(abc1());
 

 



let i=5 ;
function fact(n)  {
	
fact(n) =1;
   if( n==0)
for (let i=2; i<=n;i++)
	fact(n)= fact(n)*i;
}

console.log(i); 
function factorial(n) { 

    let fact = 1; 

     

    if(n === 0)

        return 1;

    for (let i = 2; i <= n; i++) 

        fact = fact* i; 

    return fact;
	
}
console.log(factorial(n));
 let n = 10; 
 
 for(var i=1;i<=10;i++){
	 setTimeout((i)=>{
	 console.log(i);
	 },1000);
 }*/
 
 
// var i=1;
 // for(;i<=10;){
//	 console.log(i);
//i++;	 
// }
// console.log(i);

 //setTimeout(function()=>{},1000);

/*




let a =0;
let b=1;
let c;
let n=100;
for(i=0;i<=n;i++){
	console.log(a);
	c=a+b;
	a=b;
	b=c;
}





let a=2;	
let num=prompt("enter the number you want to check if it is  prime");

let count=0;
if(num<2){
	console.log("not a prime number");
}
for(i=2;i<=num;i++){
	if(num%i==0){
		count++;
	}
}
if(count>=2){
	console.log("number is not prime");
}
else
	console.log("number is prime");
 
let a=0;
let b=1;
let n=7;
for(i=0;i<n;i++){
    a++;
    b=a*b;
}
console.log(b);

=
 let a=40;
 let b=10;
 let c;
    // assign a value 
	   c=a;
	   a=b;
	  b=c;
	  console.log("a=",a);
	  console.log("b=",b);
	

 // var string = prompt;
 //console.log (string);
 
 
 function mapForEach(arr,fn){
	 var nerArr=[];
	 
	 for(var i=0;i<arr.length;i++){
		 newArr.push(fn(arr[i]) )
		 
	 }
	 return newArr;
 }
 var arr1=[1,2,3];
 console.log(arr1);
 
 var arr2=mapForEach(arr1,function(item){
	 return item*2;
 });
 console.log(arr2);
 z76
		 
	
// 	debugger;
	let str="i am a bad boy";
	console.log(str.length);
	console.log(str);
	arr=str.split("");
	console.log(arr);
	arr1=arr.sort();
	console.log(arr1);
	let k = 0;
	for(let i=0;i<arr1.length;i+=k){
		let count=1;
		k = 0;
		var a=arr1[i];
		for(let j=i+1;j<arr1.length;j++){
			if (a==arr[j]){
				count++;
			} else {
				break;
			}
		}
		console.log(arr[i],count);
		k = count;     
	}
	
let a=10;
let b=20;
let c=50;
if(a>=b && a>=c){
    largest =a;
    
}
else if (b>=a && b>=c){
    largest =b;
}
else {
    largest =c;
console.log(largest);    
}

//let x=-50;
//let y=-100;
//let z=0;
let arr = [50, 100, 150, 42, 1];
if(x>y && x>z)
	console.log(x);
else if(y>x && y>z)
	console.log(y);
else
	console.log(z);


	
let a=10;
let b=200;
let c=50;
if(a>=b && a>=c){
    largest =a;
    
}
else if (b>=a && b>=c){
    largest =b;
}
else {
    largest =c;
}

console.log(largest);    

 let arr= [100,20,30,40,-10,80]
 let largest=0;
 for(i=0;i<=arr.length;i++ ){
	 if (largest<arr[i])
		 largest= arr[i];
 }
 console.log(largest);


  function b(){
	  var myvar;
	  console.log(myvar);
  }
  function a(){
	  
	  var myvar=2;
	  b();
	  console.log(this.myvar);
	  
  }
  var myvar =1;
  a();

	
	let obj={
		name:"aryan",
		fn:function (){
			console.log(this.name);
		}
	
		
	};
	console.log(this.name);
	obj.fn();
	
	
	
	var obj1={
	name:arya
	console.log(this.name);
	
	}
	var 11a(){
		name:aryan
	}
	a();


function fact(n){
	if(n==0)
		return(1);
	else
		return n*fact(n-1);
}
let num=1;
let result =fact(num);
console.log(result);
	*/
	
		
	count=0;
	let a=1;
function fact(num){ 
		
	if(num==0 || num==1)
		console.log(1);
	

	for(let i=0;i<num;i++){
		count ++;
		a=a*count;
	}

	
		fact(5);
		return a;
	}
let str = "nishnat   chaudhary  ";
let capitalizedStr = '';
for (let i = 0; i < str.length; i++) {
    if (i === 0) {
        capitalizedStr += str[i].toUpperCase();
    } else {
        capitalizedStr += str[i];
    }
}

console.log(capitalizedStr); 
let string = "nishant chaudhary ";
let spaceindex =
string.indexOf(' ');
console.log(spaceindex);
for(let i =8; i<=str.length; i++)
 
 if (i === 8) {
     capitalizedStr1 =' '
        capitalizedStr1 += str[i].toUpperCase();
    } else {
        capitalizedStr1 += str[i];
    }
console.log(capitalizedStr1);






Compiunction countSpaces(str)   
let str = "nishant chaudhary ";
let spaceindex =
str.indexOf(' ');
console.log(spaceindex);
for (let i = 0; i < str.length; i++) {
    if (i === 0) {
        
    }
	
	
	
	
	
	
	console.log("Try programiz.pro");

function abc(name){
   let str= name.split(" ")
   let newstr ="";
   for(let i=0; i<str.length; i++){
   if(i==1){
       newstr +=str[i].charAt(0).toUpperCase()+str[i].slice(1);
   }
   else if(i==2){
     newstr += " "+ str[i].charAt(0).toUpperCase()+str[i].slice(1);
}
}
console.log(newstr);
}
abc(" nishant chaudhary is a good boy");``







console.log("Try programiz.pro");
var string = prompt(" enter the value ")
console.log(string);
var first = string.charAt(0);
console.log(first);
var rem = string.slice(1);
console.log(rem);
var final = first.toUpperCase()+ rem;
console.log(final);

