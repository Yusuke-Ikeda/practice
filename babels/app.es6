function Person () {
  this.name = 'yamada';
  this.age = '30';
  this.hello = () => {
    console.log('Hello' + _this.name);
  }
}

var person = new Person();
person.hello(); //Hello! yamada


//アロー関数(function使わないでおｋ)

var add = (a,b) => {
  return a + b;
}

//クラス構文
class Dog{
  constructor(aName) {
    this.name = aName;
  }
  run() {
    console.log(this.name + "is Run!!");
  }
}

var Hachiroku = new Dog("はちこう");
Hachiroku.run();
