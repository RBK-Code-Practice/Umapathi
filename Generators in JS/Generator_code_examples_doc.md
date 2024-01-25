## Simple example of generator

    function* gen(){
    
    yield 1
    
    yield 2
    
    yield 3
    
    }
    
      
    
    console.log(gen())

  
  

----------

  

## next() example

  

        function* gen(){
        
        yield 1
        
        yield 2
        
        yield 3
        
        }
    
      
    
    const obj = gen()
    
    console.log(obj.next())

  

----------

  
  

## Visualizing how yield works

    function* gen(){
    
    console.log("Before yielding 1")
    
    yield 1
    
    console.log("Before yielding 2")
    
    yield 2
    
    console.log("Before yielding 3")
    
    yield 3
    
    }
    
      
    
    const obj = gen()
    
    console.log(obj.next())
    
      

----------

  
  

## return() usage

    function* generateId(){
    
    yield 1
    
    yield 2
    
    yield 3
    
    }
    
      
    
    const id = generateId()
    
    console.log(id.next())
    
    console.log(id.return(99))
    
    console.log(id.next())

  
  

----------

  

## Throw()

    function* gen(array){
    
    for(let i=0;i<array.length;i++){
    
    yield array[i]
    
    }
    
    }
    
      
    
    const obj = gen([1,2,3])
    
    console.log(obj.next())
    
    console.log(obj.throw(new Error("test error")))
    
    console.log(obj.next())

  
  

----------

  

## Infinite Loop example

    function* generateId(){
    
    let id = 1
    
    //infinite loop
    
    while(true){
    
    yield id++
    
    }
    
    }
    
      
    
    const id = generateId()
    
    console.log(id.next())
    
    console.log(id.next())
    
      
      










