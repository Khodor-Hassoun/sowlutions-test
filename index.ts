class PrivateNode {
  val: number;
  next: PrivateNode | null;

  constructor(value: number) {
    this.val = value;
  }
}
class LinkedList {
  head: PrivateNode;
  size: number;

  constructor(value: number) {
    this.head = new PrivateNode(value);
    this.size = 1;
    this.head.next = null;
  }

  addNode(value: number): void {
    let size = 0;
    // if size 1 then only add to next of head
    const newNode = new PrivateNode(value);
    if (this.size === 1) {
      this.head.next = newNode;
      this.size++;
      newNode.next = null;
    } else {
      // we will have to loop through the list
      let iteratorNode = this.head;
      while (size < this.size && iteratorNode.next) {
        iteratorNode = iteratorNode.next;
        size++;
      }
      iteratorNode.next = newNode;
      this.size++;
    }
  }
  print(): number[] {
    let size = 0;
    if (this.size === 1) {
      return [this.head.val];
    }
    let iteratorNode = this.head;
    const container: number[] = [];
    while (size < this.size) {
      if (iteratorNode.val) {
        container.push(iteratorNode.val);
      }
      iteratorNode = iteratorNode.next!;
      size++;
    }
    return container;
  }

  removeNode(value: number): void {
    let size = 0;
    let iteratorNode = this.head;
    while (size < this.size) {
      // check the head first
      if (this.head.val > value) {
        if (this.head.next) {
          this.head = this.head.next;
          this.size--;
        }
      }
    }
    size = 0;
    while (size < this.size) {
      if (iteratorNode.next?.val! > value) {
        if (iteratorNode.next?.next) {
          iteratorNode.next = iteratorNode.next.next;
        }
      }
    }
  }
  removeHeadNode(): void {
    if (this.head.next) {
      this.head = this.head.next;
    }
  }
}
// export {};
