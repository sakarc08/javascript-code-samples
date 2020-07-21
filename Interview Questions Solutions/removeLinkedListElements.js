/*
    https://leetcode.com/explore/featured/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3396/
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let root = head, prev=null;
    while(root){
        if(!prev && root.val == val){
            root=root.next
            head=root
        } else {
            if(root.val == val) {
                prev.next=root.next
            }
            else prev = root;
            root=root.next
        }
    }
    return head
};