export class Error {
  constructor(title, message, show) {
    this.title = title;
    this.message = message;
    this.show = show;
  }

  toString() {
    return this.title;
  }
}

export default (title, message = undefined, show = true) =>
  new Error(title, message, show);
