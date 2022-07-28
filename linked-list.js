var NodeC = (function () {
    function NodeC(data) {
        this.data = data;
    }
    return NodeC;
}());
var LinkedList = (function () {
    function LinkedList() {
    }
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
    LinkedList.prototype.prepend = function (data) {
        var newHead = new NodeC(data);
        newHead.next = this.head;
        this.head = newHead;
    };
    LinkedList.prototype["delete"] = function (data) {
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
    LinkedList.prototype.exists = function (data) {
        if (this.head.data === data)
            return true;
        var valueExists = false;
        var current = this.head;
        while (current.next != null) {
            console.log(current.next.data);
            if (current.next.data === data) {
                valueExists = true;
            }
            current = current.next;
        }
        return valueExists;
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
linkedList.prepend(5);
linkedList.printInOrder();
linkedList["delete"](4);
linkedList.printInOrder();
console.log(linkedList.exists(1));
