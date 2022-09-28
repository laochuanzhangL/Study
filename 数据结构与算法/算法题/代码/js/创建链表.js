var MyLinkedList = function (val) {
  this.size = 0
  this.head = new ListNode(0)
}

var ListNode = function (val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1
  }
  let i = 0,
    cur = this.head
  while (i <= index) {
    cur = cur.next
    i++
  }
  return cur.val
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val)
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.size, val)
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let i = 0,
    cur = this.head,
    newNode = new ListNode(val)
  index = Math.max(0, index)
  if (index > this.size) return
  while (i < index) {
    cur = cur.next
    i++
  }
  newNode.next = cur.next
  cur.next = newNode
  this.size++
}

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let i = 0,
    cur = this.head
  if (index < 0 || index >= this.size) {
    return
  }
  while (i < index) {
    cur = cur.next
    i++
  }
  cur.next = cur.next.next
  this.size--
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
