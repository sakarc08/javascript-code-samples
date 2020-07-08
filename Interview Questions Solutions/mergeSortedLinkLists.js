/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/93/linked-list/771
*/

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
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2
    else if(!l2) return l1;
    let prev = l1.val <= l2.val ? l1 : l2;
    let head = prev;
    while(1) {
        if(!l1 && !l2) break
        if(!l1) {
            prev.next=l2;
            prev=prev.next
            l2=l2.next
            continue;
        } else if(!l2) {
            prev.next=l1;
            prev=prev.next
            l1=l1.next
            continue;
        }
        if(l1.val <= l2.val) {
            if(prev!=l1){
                prev.next=l1
                prev=prev.next   
            }
            
            l1=l1.next
        } else {
            if(prev!=l2){
                prev.next = l2;
                prev=prev.next   
            } 
            
            
            l2=l2.next
        }
    
    }
    return head
};