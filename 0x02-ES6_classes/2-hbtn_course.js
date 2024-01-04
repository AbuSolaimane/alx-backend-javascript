/**
 * A class
 */
export default class HolbertonCourse {
  /**
   * new @see {@link HolbertonCourse}.
   *
   * @param {String} name - the course name.
   * @param {Number} length - months in the course.
   * @param {String[]} students - The course students.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * The name.
   */
  get name() {
    return this._name;
  }

  /**
   * name setter.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * length gettter.
   */
  get length() {
    return this._length;
  }

  /**
   * length setter.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * get students
   */
  get students() {
    return this._students;
  }

  /**
   * Students setter.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
