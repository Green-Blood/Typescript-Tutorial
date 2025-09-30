function processInput(input:string | number)
{
  if(typeof input === 'number'){
    console.log(input * 2);
    
  }
  else{
    console.log(input.toLowerCase());
    
  }
  
}
processInput(20);
processInput("Poop");

function processData(input:string | number, config:{reverse:boolean} = {reverse:false})
{
  if(typeof input === 'number')
  {
    return(input * input)
  }
}
