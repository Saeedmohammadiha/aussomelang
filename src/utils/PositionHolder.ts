export default class PositionHolder<T> {
  private index = 0;

  constructor(public input: T[]) {}

  getPosition(): number {
    return this.index;
  }

  moveForward() {
    this.index = this.index + 1;
    return this
  }

  moveBack() {
    this.index-= 1;
    return this
  }

  getCurrentItem() {
    return this.input[this.index];
  }

  idEndOfData() {
    return this.index >= this.input.length;
  }
}
