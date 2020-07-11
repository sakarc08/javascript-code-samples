/*
    https://leetcode.com/explore/featured/card/july-leetcoding-challenge/545/week-2-july-8th-july-14th/3386/
*/

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if(!head) return head;
    let node = head, next = head.next;
    let prev=[]
    while(1) {
        if(!node) break;
        if(!node.next) {
            let p = prev.shift()
            if(p) {
                node.next = p
                p.prev = node
            }
        }
        next = node.next;
        if(node.child) {
            prev.unshift(next);
            node.next = node.child;
            node.child=null
            node.next.prev = node
        }
        node=node.next
    }
   
    return head
};