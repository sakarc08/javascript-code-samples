/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let top1 = l1, top2 = l2, sum = 0, carry = 0, arr = [];
    while(top1 || top2) {
        if(!top1) sum = top2.val + carry;
        else if(!top2) sum = top1.val + carry;
        else sum = (top1.val + top2.val + carry);
            // if(!top1.next && !top2.next) sum = temp;
        top1 = top1 && top1.next;
        top2 = top2 && top2.next;
        carry = Math.floor(sum / 10)
        // if(!top1 && !top2) console.log(sum)
        sum = sum % 10
        
        arr.push(sum)
    }
    if(carry) arr.push(carry)
    let head = new ListNode(arr[0]), temp = head, i=1;
    while(i < arr.length){
        temp.next = new ListNode(arr[i]);
        i++
        temp = temp.next
    }
  return head  
};