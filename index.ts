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

  // Initliaze list
  constructor(value: number) {
    this.head = new PrivateNode(value);
    this.size = 1;
    this.head.next = null;
  }

  addNode(value: number): void {
    let size = 0;
    // if size = 1 then only add to next of head
    const newNode = new PrivateNode(value);
    if (this.size === 1) {
      this.head.next = newNode;
      this.size++;
      newNode.next = null;
    } else {
      // we will have to loop through the list and reach node with next = null
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
    // if only head then on 1 exists
    if (this.size === 1) {
      return [this.head.val];
    }

    let iteratorNode = this.head;
    const container: number[] = [];
    while (iteratorNode) {
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
      size++;
    }
    // if head is ok then we loop through list
    iteratorNode = this.head;
    while (iteratorNode.next) {
      if (iteratorNode.next.val > value) {
        if (iteratorNode.next.next) {
          // check if next of the next node exist to connect to
          iteratorNode.next = iteratorNode.next.next;
          this.size--;
        } else {
          // if not remove only the next node
          iteratorNode.next = null;
        }
      } else {
        iteratorNode = iteratorNode.next;
      }
    }
  }
}