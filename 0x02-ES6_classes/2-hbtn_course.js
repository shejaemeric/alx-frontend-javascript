// export default class HolbertonCourse {
//   constructor(name, length, students) {
//     this.name = name;
//     this.lenght = length;
//     this.students = students;
//   }

//   get name() {
//     return this._name;
//   }

//   get lenght() {
//     return this._length;
//   }

//   get students() {
//     return this._students;
//   }

//   set lenght(val) {
//     if (typeof val !== 'string') {
//       throw new TypeError('lenght must be a string');
//     }
//     this._lenght = val;
//   }

//   set name(val) {
//     if (typeof val !== 'string') {
//       throw new TypeError('lenght must be a string');
//     }
//     this._name = val;
//   }

//   set students(val) {
//     if (!Array.isArray(val)) { throw new TypeError('Students must be an array'); }
//     // eslint-disable-next-line no-plusplus
//     for (let i = 0; i < val.length; i++) {
//       if (typeof val[i] !== 'string') { throw new TypeError('Students must be an array of strings'); }
//     }
//     this._students = val;
//   }
// }
