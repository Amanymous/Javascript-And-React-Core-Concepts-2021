function Identity(firstName,lastName,age){
    this.firstName = firstName
    this.lastName = lastName;
    this.age = age;
    this.fullName = function(){
        return this.fullName + ' '+ this.lastName
    }
}
let identity = new Identity('alex','json',88)
console.log(identity)
console.log(identity.fullName())