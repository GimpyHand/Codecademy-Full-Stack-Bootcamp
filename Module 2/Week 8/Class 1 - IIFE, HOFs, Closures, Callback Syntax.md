## Notes
### HOFs: Higher Order Functions
        - A function which
          - Takes another function as an argument (Callbacks)
          - Returns another function (Closures)
### Callbacks: A function passed as an argument to another function
        - Syntax:
          - Syntax 1:
            func2(func1)
          - Syntax 2:
            func2(function() {
              // code
            })
### Closures : Inner function continues to have access to the outer function variables (lexical environment) even after the outer function has completed execution
        - In easy words, 
          - Closure = [Function's scope + lexical environment]
          - Inner function "remembers" lexical environment
## Code Examples
### Callbacks
```
function sum(num1, num2) {
  console.log(num1 + num2)
}
sum(10, 20)

function getFullName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`)
}
getFullName('Sonal', 'X')

function hasAccessToMovies(isPremium) {
  console.log(isPremium ? 'Has access' : 'Does not have access')
}
hasAccessToMovies(false)

function getAverageMarks(marks) {
  if(!marks || !marks.length) {
	return 'Invalid array'
  }
  
  let totalMarks = 0
  for(let i=0; i<marks.length; i++) {
	totalMarks += marks[i]
  }
  return totalMarks / marks.length
}
console.log(getAverageMarks([98, 78, 87]))

function getStudentIntro(student) {
  console.log(`Hi, I'm ${student.fullName}. I reside in ${student.city}, ${student.country}. My hobbies are ${student.hobbies.join(', ')}.`)
}

getStudentIntro({
  fullName: 'Abdiel',
  city: 'London',
  country: 'UK',
  hobbies: ['Swimming', 'Dancing', 'Singing']
})
getStudentIntro({
  fullName: 'Kayla',
  city: 'CA',
  country: 'USA',
  hobbies: ['Dancing', 'Coding', 'Reading Novels']
})

/* ------------------ */
Syntax 1
function func1() {
  console.log('func1')
}

function func2(callback) {
  callback()
  console.log('func2')
}

func2(func1)

Syntax 2
function func2(callback) {
  console.log('func2')
  callback()
}

func2(function () {
  console.log('func1')
})

func2(() => {
  console.log('func1')
})
```
### Closures
```
function outer() {
  console.log('OUTER FUNCTION')

  function inner() {
	console.log('INNER FUNCTION')
  }
  inner()
}
outer()
/* ---------------------- */

const outer = function () {
  console.log('OUTER FUNCTION')

  const inner = function () {
	console.log('INNER FUNCTION')
  }
  
  return inner
}

outer()()
const abc = outer()
abc()

/* ---------------------- */
const outer = function () {
  let outerVar = 5

  const inner = function () {
	console.log(outerVar)
  }
  inner()
}

outer()

/* ---------------------- */
const outer = function () {
  let outerVar = 5

  const inner = function () {
	console.log(outerVar)
  }
  return inner
}

const abc = outer()
abc()
```