
  export function factorial(number) {
    
   // test 1
   if(number==0)
      return 1;

   // test 4
   if(number>=10)
      return -1;

   // test 2, test 3
   let factorial = 1;
   for(let i=1; i<=number; i++)
   {
     factorial = factorial * i;
    }

    return factorial;
}
