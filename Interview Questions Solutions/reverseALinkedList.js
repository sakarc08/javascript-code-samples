/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/93/linked-list/560/    
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return head
    let next = head.next
    head.next=null
    while(next) {
        let temp = next
        next = next.next
        temp.next = head
        head=temp   
    }
    return head
};