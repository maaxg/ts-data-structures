var NodeC = /** @class */ (function () {
    function NodeC(data) {
        this.data = data;
    }
    return NodeC;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    // add an element in the end of the list
    LinkedList.prototype.append = function (data) {
        if (this.head == null) {
            this.head = new NodeC(data);
            return;
        }
        var current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = new NodeC(data);
    };
    // add an element in the start of the list
    LinkedList.prototype.prepend = function (data) {
        var newHead = new NodeC(data);
        newHead.next = this.head;
        this.head = newHead;
    };
    LinkedList.prototype.deleteWithValue = function (data) {
        if (this.head === null)
            return;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        var current = this.head;
        while (current.next != null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    };
    LinkedList.prototype.findWithValue = function (data) {
        var foundedValue = data;
        var current = this.head;
        while (current.next != null) {
            if (current.next.data === data) {
                foundedValue = data;
            }
            current = current.next;
        }
        return foundedValue;
    };
    LinkedList.prototype.printInOrder = function () {
        var current = this.head;
        var str = "".concat(current.data, " ");
        while (current.next != null) {
            str += "".concat(current.next.data, " ");
            current = current.next;
        }
        console.log(str);
    };
    return LinkedList;
}());
var linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(3);
linkedList.append(4);
linkedList.printInOrder();
