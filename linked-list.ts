class NodeC<T> {
  next: NodeC<T>;
  data: T
  constructor(data: T) {
    this.data = data
  }
}

class LinkedList<T> {
  head: NodeC<T>;

  constructor(){}

  // add an element in the end of the list
  public append(data: T) {
    if (this.head == null) {
      this.head = new NodeC(data)
      return;
    }
    let current = this.head
    while (current.next != null) {
      current = current.next
    }
    current.next = new NodeC(data)
  }
  // add an element in the start of the list
  public prepend(data: T){
    const newHead = new NodeC(data)
    newHead.next = this.head
    this.head = newHead
  }

  public delete(data: T){
    if(this.head === null) return;
    if(this.head.data === data) {
      this.head = this.head.next
      return;
    }
    let current = this.head;
    while (current.next != null) {
      if(current.next.data === data) {
        current.next = current.next.next
        return;
      }
      current = current.next
    }
  }

  public exists(data: T){
    if(this.head.data === data) return true
    let valueExists = false;
    let current = this.head
    while (current.next != null) {
      console.log(current.next.data)
      if(current.next.data === data) {
        valueExists = true
      }
      current = current.next
    }
    return valueExists;
  }

  public printInOrder(){
    let current = this.head
    let str = `${current.data} `
    while(current.next != null) {
      str += `${current.next.data} `
      current = current.next
    }
    console.log(str)
  }
}

const linkedList = new LinkedList()
linkedList.append(1)
linkedList.append(3)
linkedList.append(4)
linkedList.prepend(5)
linkedList.printInOrder()
linkedList.delete(4)
linkedList.printInOrder()
console.log(linkedList.exists(1))