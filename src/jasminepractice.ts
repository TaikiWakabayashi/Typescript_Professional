class MyArea {
  constructor(public base: number, public height: number) {}

  getTriangle(): number {
    return (this.base * this.height) / 2;
  }

  getSquare(): number {
    return this.base * this.height;
  }
}
