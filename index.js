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
            while (iteratorNode.next !== null) {
                iteratorNode = iteratorNode.next;
            }
            iteratorNode.next = newNode;
            this.size++;
        }
    };
    LinkedList.prototype.print = function () {
        if (this.size === 1) {
            return [this.head.val];
        }
        var iteratorNode = this.head;
        var container = [];
        while (iteratorNode.next !== null) {
            container.push(iteratorNode.val);
            iteratorNode = iteratorNode.next;
        }
        return container;
    };
    LinkedList.prototype.removeNode = function (value) {
        // If first node remove first
        var iteratorNode = this.head;
        while (iteratorNode.next !== null) {
            if (iteratorNode.val > value) {
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
