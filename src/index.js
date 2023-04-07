import Validator from './js/validator';

console.log(new Validator('a#').validateUsername());
console.log(new Validator('a').validateUsername());
console.log(new Validator('4abik').validateUsername());
console.log(new Validator('abilast45').validateUsername());
console.log(new Validator('a45-__a').validateUsername());
console.log(new Validator('abilast4545a').validateUsername());
console.log(new Validator('aфцt4545a').validateUsername());
console.log(new Validator('-abilast4545a').validateUsername());
