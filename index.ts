/* 
 *  The TypeScript data type classification
 */

// Boolean
let variable: boolean = false;

// Number
let variable2: number = 12.0;

// String
let identifier: string = ' ';
let empName: string = 'Rohan';

// Void
let unusable: void = undefined; // or null
function helloUser(): void {
  alert("This is a welcome message");
}

// Null or Undefined
let num: number = null;
let bool: boolean = null;
let str: string = undefined;

// Any Type
// It is the super type of all datatype in TypeScript.
function ProcessData(x: any, y: any): any {
  return x + y;
}

// Array
var list: number[] = [1, 3, 5];
// or
var list2: Array<number> = [1, 3, 5];

// Tuple
// Declare a tuple  
let a: [string, number];
// Initialize it  
a = ["hi", 8];

// Interface
interface Calc {
  subtract(first: number, second: number): any;
  readonly width?: number; // optional (read only)
  // [propName: string]: any;
}
let Calculator: Calc = {
  subtract(first: number, second: number) {
    return first - second;
  },
  other: 3,
} as Calc;

// Class
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}

// Enums
// Functions

// Generic
function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>(100);





function getName(name: String) {
  return name;
}

console.log(getName('krunal'));
