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
        while (size < this.size) {
            if (iteratorNode.val) {
                container.push(iteratorNode.val);
            }
            iteratorNode = iteratorNode.next;
            size++;
        }
        return container;
    };
    LinkedList.prototype.removeNode = function (value) {
        var _a, _b;
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
        }
        size = 0;
        while (size < this.size) {
            if (((_a = iteratorNode.next) === null || _a === void 0 ? void 0 : _a.val) > value) {
                if ((_b = iteratorNode.next) === null || _b === void 0 ? void 0 : _b.next) {
                    iteratorNode.next = iteratorNode.next.next;
                }
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
