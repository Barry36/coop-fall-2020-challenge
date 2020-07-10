class EventSourcer {
  constructor() {
    this.list = new DoubleLinklist()
    this.value = 0
  }

  add(num) {
    this.new_val = this.list.getTail() + num
    this.list.append(this.new_val)
    this.value = this.new_val
  }
  subtract(num) {
    this.new_val = this.list.getTail() - num
    console.log("his.new_val  is: " + this.new_val )
    this.list.append(this.new_val)
    this.value = this.new_val
  }

  undo() {

  }
  redo() {}
  bulk_undo(num) {}
  bulk_redo(num) {}
  
}


//封装双向链表
class Node{
  constructor(data){
    this.data = data
    this.prev = null
    this.next = null
  }
  
}
class DoubleLinklist{
  //封装内部类：节点类
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  //一.append方法
  append(data){
    //1.根据data创建新节点
    let newNode = new Node(data)

    //2.添加节点
    //情况1：添加的是第一个节点
    if (this.length == 0) {
      this.tail = newNode
      this.head = newNode 
    //情况2：添加的不是第一个节点
    }else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }

    //3.length+1
    this.length += 1
  }

  
  //十一.getHead方法：获取链表的第一个元素
  getHead(){
    return this.head.data
  }

  //十二.getTail方法：获取链表的最后一个元素
  getTail(){
    if(this.tail !== null)
    {
      return this.tail.data
    }else{
      // return this.tail.data
    }
  }

}


let sourcer = new EventSourcer();

sourcer.add(2);

console.log(sourcer.value)

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
