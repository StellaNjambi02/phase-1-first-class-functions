function receivesAFunction(activity){
   return activity();
}
receivesAFunction(function(){return 4;})
function returnsANamedFunction(){
    return receivesAFunction;
}
 function returnsAnAnonymousFunction(){
    return function (){
        return  20;
    }
 }