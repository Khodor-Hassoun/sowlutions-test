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
    // if size 1 then only add to next of head
    const newNode = new PrivateNode(value);
    if (this.size === 1) {
      this.head.next = newNode;
      this.size++;
      newNode.next = null;
    } else {
      // we will have to loop through the list
      let iteratorNode = this.head;
      while (iteratorNode.next !== null) {
        iteratorNode = iteratorNode.next;
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
    // If first node remove first
    let iteratorNode = this.head;
    while (iteratorNode.next !== null) {
      if (iteratorNode.val > value) {
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
