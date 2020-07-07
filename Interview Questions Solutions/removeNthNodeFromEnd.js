/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/93/linked-list/603/
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let start = head, end=head, temp=head, count=0;
    // if()
    while(count!=n) {
        end=end.next
        count++
    }
    
    while(end && end.next) {
        start=start.next;
        end=end.next
    }
    if(!end){
        start=start.next;
        head=start
    }
    else start.next = start.next.next
    return head
};