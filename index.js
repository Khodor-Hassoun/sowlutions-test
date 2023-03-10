var PrivateNode = /** @class */ (function () {
    function PrivateNode(value) {
        this.val = value;
    }
    return PrivateNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.head = new PrivateNode(value);
        this.size = 1;
        this.head.next = null;
    }
    LinkedList.prototype.addNode = function (value) {
        var size = 0;
        // if size 1 then only add to next of head
        var newNode = new PrivateNode(value);
        if (this.size === 1) {
            this.head.next = newNode;
            this.size++;
            newNode.next = null;
        }
        else {
            // we will have to loop through the list
            var iteratorNode = this.head;
            while (size < this.size && iteratorNode.next) {
                iteratorNode = iteratorNode.next;
                size++;
            }
            iteratorNode.next = newNode;
            this.size++;
        }
    };
    LinkedList.prototype.print = function () {
        var size = 0;
        if (this.size === 1) {
            return [this.head.val];
        }
        var iteratorNode = this.head;
        var container = [];
        while (iteratorNode) {
            if (iteratorNode.val) {
                container.push(iteratorNode.val);
            }
            iteratorNode = iteratorNode.next;
            size++;
        }
        return container;
    };
    LinkedList.prototype.removeNode = function (value) {
        var size = 0;
        var iteratorNode = this.head;
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
        iteratorNode = this.head;
        while (iteratorNode.next) {
            if (iteratorNode.next.val > value) {
                if (iteratorNode.next.next) {
                    iteratorNode.next = iteratorNode.next.next;
                    //   iteratorNode = iteratorNode.next;
                    this.size--;
                }
                else {
                    iteratorNode.next = null;
                }
            }
            else {
                iteratorNode = iteratorNode.next;
            }
        }
    };
    LinkedList.prototype.removeHeadNode = function () {
        if (this.head.next) {
            this.head = this.head.next;
        }
    };
    return LinkedList;
}());
// export {};
