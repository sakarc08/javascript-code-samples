/*
    https://leetcode.com/explore/featured/card/top-interview-questions-easy/93/linked-list/772/
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next) return true
    let mid=head, last=head
    while(last && last.next) {
        mid=mid.next;
        last=last.next.next
    }
    
    let next=head, prev=mid, temp=head.next, flag=false;
    while(temp !=mid) {
        temp=next.next
        next.next=prev
        prev=next
        next=temp
        flag=true
    }
    
    if(last) mid=mid.next
    if(flag) head=prev
    
    let point1=head, point2=mid;
    while(point2) {
        if(point1.val == point2.val) {
            point1=point1.next;
            point2=point2.next
        } else return false
    }
    return true
};