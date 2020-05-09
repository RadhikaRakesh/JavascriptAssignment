// function for finding prime number
function prime()
    {
        document.getElementById("result").style.display="block";  
        document.getElementById("readstr").style.display="none";
        document.getElementById("result").innerHTML="";
        document.getElementById("question").innerHTML="prime or not";
    var ar=[2,3,4,5,6,7,8,9,10,11],flag=0;
    var l=ar.length;
    document.getElementById ("result").innerHTML="The given array is <br>"+ar+"<br>";
    for(let i=0;i<ar.length;i++)
     {
   
     flag=0 ;
    for(let j=2;j<=ar[i]/2;j++)
     {
    if(ar[i]%j==0)
    {
   
    flag=1;
    break;
    }}
    if(flag==1)
   {//document. write (ar[i]+"not prime");
    document.getElementById("result").innerHTML+="<li>"+ar[i]+" is not a prime number</li>";
  
  } 
   else{ document.getElementById("result").innerHTML+="<li>"+ar[i]+" is  a prime number</li>";
      // document. write (ar[i]+"prime");
  
   }
 }
    }
    //function to find the frequent number
    function count()
    {
        document.getElementById("result").style.display="block"; 
        document.getElementById("readstr").style.display="none";
        document.getElementById("result").innerHTML="";
        document.getElementById("question").innerHTML="Most frequent item of array";
        var cnt=0,c=0,fre;
    var ar=[5,1,2,1,1,4,1,5];
    document.getElementById("result").innerHTML="Array elements"+ar+"<br>";
    for(let i=0;i<ar.length;i++)
    {
    for(let j=i;j<ar.length;j++)
    {
    if(ar[i]==ar[j])
    {
    c++;
    if(cnt<c)
    {cnt=c;
    fre=ar[i];}
    }
    }
    c=0;
    }
    document.getElementById("result").innerHTML+="<br>Frequent item is "+fre;
    }
    //function to find the sum of the square of array
    function square()
    {
        document.getElementById("result").style.display="block"; 
        document.getElementById("readstr").style.display="none";
        document.getElementById("result").innerHTML="";
        document.getElementById("question").innerHTML="Sum of square of the elements";
    var ar=[1,2,3,4],sum=0;
    document.getElementById("result").innerHTML="Array elements<br> "+ar+"<br>";
    for(let i=0;i<ar.length;i++)
    {
    sum+=(ar[i]*ar[i])
    }
    document. getElementById ("result").innerHTML+="Sum of the squares of the elements of the array  "+sum;
    }
    //function to print whether the number is odd or even
    function odd(){
        document.getElementById("result").style.display="block"; 
        document.getElementById("readstr").style.display="none";
        document.getElementById("result").innerHTML="";
        document.getElementById("question").innerHTML="Print number is odd or even";
    for(i=1;i<=15;i++)
    {
    if(i%2==0)
    {
    document. getElementById("result").innerHTML+=i+" is even number<br>";
    }
    else
    {document.getElementById("result").innerHTML+=i+" is odd number<br>";}
    }
    }
    //function to print javascript
    function print(){
        document.getElementById("result").style.display="block"; 
        document.getElementById("readstr").style.display="none"
        document.getElementById("result").innerHTML="";
        document.getElementById("question").innerHTML="Print letters of the word Javascript";
    var ar =["Javascript"],str="";
    for(let i=0;i<ar[0].length;i++)
    {
    str+=ar[0][i]
    document. getElementById("result").innerHTML+=str+"<br>";
    }
    
    }
    //function to read 2 numbers from user to find largest
    function large()
    {
       document.getElementById("result").style.display="none"; 
        document.getElementById("readstr").style.display="block"; 
        document.getElementById("getstring").style.display="none";
       document.getElementById("change").style.display="none";
       document.getElementById("num1").style.display="block"; 
       document.getElementById("num2").style.display="block";
      document.getElementById("big").style.display="block";
      document.getElementById("limit").style.display="none";
      document.getElementById("trun").style.display="none";
      document.getElementById("question").innerHTML="Largest of two numbers";
      document.getElementById("num1").value="";
      document.getElementById("num2").value="";
        
    }
    //function to find the largest of given numbers
    function largest ()
    {
        document.getElementById("result").style.display="block"; 
        document.getElementById("num1").style.display="none"; 
       document.getElementById("num2").style.display="none";
      document.getElementById("big").style.display="none";
      document.getElementById("readstr").style.display="none";
      document.getElementById("result").innerHTML="";
        document.getElementById("question").innerHTML="Largest of two numbers";
    var no1=document.getElementById("num1").value;
    var no2=document.getElementById("num2").value;
    document.getElementById("result").innerHTML="The given numbers are <br>"+no1+","+no2+"<br>";
    if(no1>no2)
    {
    document. getElementById("result").innerHTML+="Largest no is: "+no1 ;
    }
    else{
    document.getElementById("result").innerHTML+="Largest no is: "+no2 ;
    
    }
    }
    //function to read string from user
   function display()
    {
       document.getElementById("result").style.display="none"; 
        document.getElementById("readstr").style.display="block"; 
        document.getElementById("getstring").style.display="block";
       document.getElementById("change").style.display="block";
       document.getElementById("num1").style.display="none"; 
       document.getElementById("num2").style.display="none";
      document.getElementById("big").style.display="none";
      document.getElementById("limit").style.display="none";
      document.getElementById("trun").style.display="none";
      document.getElementById("question").innerHTML="Swap the case of each character";
      document.getElementById("getstring").value="";
    }
    //function to swap case
    function typecast()
    {
        //document.getElementById("result").style.display="block"; 
        document.getElementById("result").style.display="block"; 
        document.getElementById("readstr").style.display="none"; 
        document.getElementById("getstring").style.display="none";
       document.getElementById("change").style.display="none";
       document.getElementById("trun").style.display="none";
       document.getElementById("getstring").innerHTML="";
       document.getElementById("result").innerHTML="";
       document.getElementById("question").innerHTML="Swap the case of each character";
         var res="";
   var str=document.getElementById("getstring").value;
    document.getElementById("result").innerHTML="The given string : "+str+"<br>";
    for(let i=0;i<str.length;i++)
    {
        if(str[i]==str[0])
        {
            res+=check(str[0]);i++;
        }
    if(str[i]==" ")
    {
    res+=check(str[i]);
    
    res+=check(str[i+1]);i++;
    }
    else{
    res+=check(str[i]);}
    }
    document. getElementById("result").innerHTML+="The result is : "+ res;
    }
//function to check the letter is uppercase or lower case
    function check(s)
    {
        if(s===s.toLowerCase())
        {
          return s.toUpperCase();
        }      
      else
        {
            return s.toLowerCase();
        }
    }
//function to read string from user
    function truncatedisplay()
    {
       document.getElementById("result").style.display="none"; 
        document.getElementById("readstr").style.display="block"; 
        document.getElementById("getstring").style.display="block";
       document.getElementById("change").style.display="none";
       document.getElementById("num1").style.display="none"; 
       document.getElementById("num2").style.display="none";
      document.getElementById("big").style.display="none";
      document.getElementById("limit").style.display="none";
      document.getElementById("trun").style.display="block";
      document.getElementById("question").innerHTML="Truncate the string if it is longer than specified number";
    }
    //function to truncate the string
function truncate()
{
    //var str=["AJAX = Asynchronous JavaScript And XML.AJAX is not a programming language."];
    document.getElementById("result").style.display="block"; 
    document.getElementById("trun").style.display="none"; 
  document.getElementById("change").style.display="none";
  document.getElementById("readstr").style.display="none"; 
  document.getElementById("getstring").innerHTML="";
   document.getElementById("getstring").style.display="none";
   document.getElementById("question").innerHTML="Truncate the string if it is longer than specified number";
  document.getElementById("result").value="";
   var str= document.getElementById("getstring").value;
   
   document.getElementById("result").innerHTML="The given string : "+str+"<br>";
    if(str.length>15)
    {
    str="$$$";

    document.getElementById("result").innerHTML+="Characters is more than 15 so truncate the string :"+str;
    }
}
//function to sort
function alpsort()
{
    document.getElementById("result").style.display="block";
    document.getElementById("readstr").style.display="none"
    document.getElementById("getstring").style.display="none";
    document.getElementById("change").style.display="none";
    document.getElementById("num1").style.display="none"; 
    document.getElementById("num2").style.display="none";
   document.getElementById("big").style.display="none";
   document.getElementById("limit").style.display="none";
   document.getElementById("trun").style.display="none";
   document.getElementById("question").innerHTML="Sort names";
    document.getElementById("result").innerHTML="";
    //document.getElementById("num1").innerHTML="";
    var str=["ram","vinu","ani","neenu","binu","priya","anu"],res=[];
   document.getElementById("result").innerHTML+="Before sorting <br>"+str+"<br>";
   mysort(str);
  document.getElementById("result").innerHTML+="<br>After sorting<br>";
  for(let i=0;i<str.length;i++)
   { console.log(str[i]); 
   document.getElementById("result").innerHTML+="<br>"+str[i];}
}

function mysort(str) {
  str.sort(function(a, b){
    var x = a.toLowerCase();
    var y = b.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });}
  //function to read number of lines from user
  function printpatern()
  {
     document.getElementById("result").style.display="none"; 
      document.getElementById("readstr").style.display="block"; 
      document.getElementById("getstring").style.display="none";
     document.getElementById("change").style.display="none";
     document.getElementById("num1").style.display="block"; 
     document.getElementById("num2").style.display="none";
    document.getElementById("big").style.display="none";
    document.getElementById("limit").style.display="block";
    document.getElementById("trun").style.display="none";
    document.getElementById("question").innerHTML="Print the pattern";
    document.getElementById("num1").value=""; 
  }
  //function to print pattern
    function patern()
    {
        document.getElementById("result").style.display="block";
       // document.getElementById("result").style.display="none"; 
        document.getElementById("readstr").style.display="none"; 
        document.getElementById("getstring").style.display="none";
       document.getElementById("change").style.display="none";
       document.getElementById("num1").style.display="none"; 
       document.getElementById("num2").style.display="none";
      document.getElementById("big").style.display="none";
      document.getElementById("limit").style.display="none";
      document.getElementById("trun").style.display="none";
      
   var n=document.getElementById("num1").value;
   document.getElementById("question").innerHTML="Print the pattern";
        document.getElementById("result").innerHTML="";
        for(let i=1;i<=n;i++)
        {
            for(j=1;j<=i;j++)
            {
            document.getElementById("result").innerHTML+="* ";
               }
               document.getElementById("result").innerHTML+="<br>";
           }
    }