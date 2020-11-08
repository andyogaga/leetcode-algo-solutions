/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function reverse(linkedlist) {
  var node = linkedlist;
  var previous = null;

  while (node) {
    // save next or you lose it!!!
    var save = node.next;
    // reverse pointer
    node.next = previous;
    // increment previous to current node
    previous = node;
    // increment node to next node or null at end of list
    node = save;
  }
  return previous;
}

var addTwoNumbers = function (l1, l2) {
  let pointer1 = reverse(l1),
    pointer2 = reverse(l2),
    carryOver = false;
  let result = new ListNode();
  let resultList = result;

  while (pointer1 || pointer2) {
    let sum = 0;
    if (carryOver) {
      sum++;
      carryOver = false;
    }
    if (pointer1 && pointer2) {
      sum += pointer1.val + pointer2.val;
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    } else if (pointer1) {
      sum += pointer1.val;
      pointer1 = pointer1.next;
    } else if (pointer2) {
      sum += pointer2.val;
      pointer2 = pointer2.next;
    }
    if (sum >= 10) {
      sum = sum - 10;
      carryOver = true;
    }
    if (resultList) {
      resultList.next = new ListNode(sum);
      resultList = resultList.next;
    } else {
      resultList = new ListNode(sum);
    }
  }
  if (carryOver) {
    resultList.next = new ListNode(1);
  }
  return reverse(result.next);
};
