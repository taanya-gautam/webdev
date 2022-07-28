// is the square of given no is even


// imperative programming
//  const x = 5;
//  const xSquared = x*x;

//  let isEven;
//  if( xSquared % 2 === 0){
//     isEven= true;
//  }
//  else{
//     isEven= false;
//  }
//  console.log(isEven);



 //declarative programming

 const isSquareEven = (x) => ((x*x)%2 === 0 ? true : false);
 console.log(isSquareEven(6));