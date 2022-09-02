import {LinkedList} from './linked-list'

const linkedList = new LinkedList()
linkedList.append(1)
linkedList.append(3)
linkedList.append(4)
linkedList.prepend(5)
linkedList.printInOrder()
linkedList.delete(4)
linkedList.printInOrder()
console.log(linkedList.exists(1))