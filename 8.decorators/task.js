function cachingDecoratorNew(func) {
  const cache = [];
  function wrapper(...args){
    const key = args.join(','); 
    let idx = cache.findIndex(item => item.key === key); 
    if (idx !== -1 ) { 
        console.log("Из кэша: " + cache[idx].result); 
        return "Из кэша: " + cache[idx].result;
    }

    let result = func(...args); 
    cache.push({key, result}) ; 
    if (cache.length > 5) { 
      cache.shift();  
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }  
  return wrapper
}


function debounceDecoratorNew(func, ms) { 
  let flag = false;
  function wrapper(...args) {    
    if (flag) return;
    func(...args);
    flag = true;
    setTimeout(() => flag = false, ms);
  }
     return wrapper  
}


function debounceDecorator2(func, ms) {   
  let flag = false;
  let count = 0;
  function wrapper(...args) {    
    console.log('Функция вызвана ' + count++ + ' раз');
     if (flag) return;
     func(...args);
     flag = true;
     setTimeout(() => flag = false, ms);
  }      
     return wrapper 
}


