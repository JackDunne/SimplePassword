//type checkString below
function checkString(str){
  if(str.length < 8 || str.length > 20){
    throw new Error(str+"does not work");
  }
  else{
    return str;
  }
}


//type getString below
function getString(str){
  try{
    str = checkString(str);
  }
  catch(e){
    console.log(e.message);
    getString(str);
  }
}
