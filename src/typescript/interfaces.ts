interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30
  },
  color: '#ccc'
}

const rect2: Rect = {
  id: 'rect2',
  size: {
    width: 10,
    height: 5
  }
}

rect2.color = 'red';

const rect3 = {} as Rect;
const rect4 = <Rect>{}

// =================

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '5',
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height;
  }
}

// ==================

interface IClock {
  date: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  date: Date = new Date();

  setTime(date: Date): void {
    this.date = date;
  }
}

// ===================

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}

