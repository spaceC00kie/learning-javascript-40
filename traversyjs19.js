function Person(firstName, lastName, dob) {
  this.firstName = firstName
  this.lastName = lastName
  this.dob = new Date(dob)
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear()
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

const person1 = new Person("Stewie", "Griffin", "01-02-1990")
const person2 = new Person("Luke", "Skywalker", "03-15-1984")

console.log(person1.getBirthYear())
console.log(person1.getFullName())

console.log(person1)
