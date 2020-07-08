/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/93/linked-list/773/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let count = -1, temp=head, pos = -1;
    while(temp) {
        if(!temp.next) break
        if(temp.next.visited) {
            pos=temp.next.count
            break;
        }
        temp.visited = true
        temp.count = ++count
        temp=temp.next
    }
    if(pos == -1) return false
    else return true
};