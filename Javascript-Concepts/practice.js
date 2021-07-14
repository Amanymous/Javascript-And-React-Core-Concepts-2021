function outer(){
    let outervar = 'from outside'
    function inner(){
        let innervar = 'from inside'
        console.log('outervar:',outervar)
        console.log('inner',innervar)
    }
    inner()
}
const inn = outer()
outer()


