#include<stdio.h>
#define MAX 1000
void buildTree(int tree[], int arr[], int treeNode, int start, int end) {
    if (start == end) {
        
        tree[treeNode] = arr[start];
    }
    else {
        int mid = (start + end) / 2;
        int left_node = treeNode * 2 + 1;
        int right_node = treeNode * 2 + 2;

        buildTree(tree, arr, left_node, start, mid);
        buildTree(tree, arr, right_node, mid + 1, end);
        tree[treeNode] = tree[left_node] + tree[right_node];
        printf("%d\n", tree[treeNode]);
    }
}
int main() {
    int arr[] = { 1, 3, 5, 7, 9, 11 };
    int tree[MAX] = { };
    buildTree(tree, arr, 0, 0, 5);
    for (int i = 0; i < 15; i++) {
        printf("terr[%d]=%d\n", i,tree[i]);
    }
    printf("%d",tree[100]);
    return 0;
}
