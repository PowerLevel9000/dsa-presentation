class Queue {
  constructor() {
    this.items = new Array(100);
    this.front = 0;
    this.rear = 0;
  }

  insert(data) {
    this.items[this.rear] = data;
    console.log(`inserted at ${this.rear} `)
    this.rear++;
  }

  // []
  // 1at rare => [1] rare++
  // 5 at rare=1 => [1, 5]

  remove() {
    if (this.front === this.rear) {
      return "you queue is empty";
    }
    const removedItem = this.items[this.front];
    delete this.items[this.front];
    console.log(`remove item from ${this.front}`)
    this.front++;
    return removedItem;
  }

  peek() {
    if (this.front === this.rear) {
      return null;
    }
    console.log(`this is the front item in queue ${this.items[this.front]}`)
    return this.items[this.front];
  }

  isEmpty() {
    console.log(this.front===this.rear?"your queue is empty": "congrats your queue have items")
    return this.front === this.rear;
  }

  clear() {
    this.items = new Array(100)
    this.front = 0;
    this.rear = 0;
  }
}

const queue1 = new Queue();
// queue1.isEmpty()
// queue1.insert(100);
// queue1.insert(300);
// queue1.insert(200);
// queue1.insert(400);
// queue1.insert(800);
// queue1.insert(900);
// console.log(queue1)
console.log(queue1.remove())
queue1.remove()
queue1.remove()
queue1.remove()

queue1.isEmpty()

// queue1.peek()
// console.log(queue1)

// queue1.clear()
// console.log(queue1)
