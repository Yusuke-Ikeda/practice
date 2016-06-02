'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Person() {
  this.name = 'yamada';
  this.age = '30';
  this.hello = function () {
    console.log('Hello' + _this.name);
  };
}

var person = new Person();
person.hello(); //Hello! yamada

//アロー関数(function使わないでおｋ)

var add = function add(a, b) {
  return a + b;
};

//クラス構文

var Dog = function () {
  function Dog(aName) {
    _classCallCheck(this, Dog);

    this.name = aName;
  }

  _createClass(Dog, [{
    key: 'run',
    value: function run() {
      console.log(this.name + "is Run!!");
    }
  }]);

  return Dog;
}();

var Hachiroku = new Dog("はちこう");
Hachiroku.run();