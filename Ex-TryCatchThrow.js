function soma(x, y){
    if( typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('X e/ou y precisam ser numeros')
    }

    return x + y
}

try{
    console.log(soma(5,5))
    console.log(soma('h',5))
} catch(e){
    console.log(e)
}
