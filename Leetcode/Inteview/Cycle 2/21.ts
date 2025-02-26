/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    
    if (list1 == null && list2 == null) {
        return null;
    } else if (list1 == null) {
        return list2;
    } else if (list2 == null) {
        return list1
    }

    let l1_node: ListNode | null = list1;
    let l2_node: ListNode | null = list2;

    // Initialize
    let return_list_head = new ListNode;
    let return_list = return_list_head;
    

    while (l1_node != null && l2_node != null) {
        if (l1_node.val < l2_node.val) {
            return_list.next = l1_node;
            l1_node = l1_node.next;
        } else {
            return_list.next = l2_node;
            l2_node = l2_node.next;
        }
        return_list = return_list.next;
    }

    if (l1_node != null) {
        return_list.next = l1_node;
    }

    if (l2_node != null) {
        return_list.next = l2_node;
    }

    return return_list_head.next;

};