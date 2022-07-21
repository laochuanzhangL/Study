//#include<ctype.h>
//#include<malloc.h> /* malloc()等 */
//#include<stdio.h> 
//#include<stdlib.h>
//#include<process.h> /* exit() */
//#define TRUE 1
//#define FALSE 0
//#define OK 1
//#define ERROR 0
//#define OVERFLOW -2
//typedef int Status; /* Status是函数的类型,其值是函数结果状态代码，如OK等 */
//typedef int Boolean; /* Boolean是布尔类型,其值是TRUE或FALSE */
//typedef int ElemType;
///*线性表的单链表存储结构 */
//struct LNode
//{
//    ElemType data;
//    struct LNode* next;
//};
//typedef struct LNode* LinkList; /* 另一种定义LinkList的方法 */
///* 带有头结点的单链表的基本操作,包括算法2.8,2.9,2.10 */
//void InitList(LinkList* L)
//{ /* 操作结果：构造一个空的线性表L */
//    *L = (LinkList)malloc(sizeof(struct LNode)); /* 产生头结点，并使L指向此头结点 */
//    if (!*L) /* 存储分配失败 */
//        exit(OVERFLOW);
//    (*L)->next = NULL; /* 指针域为空 */
//}
//
//int ListLength(LinkList L) {
//    LinkList p = L->next;
//    int len = 1;
//    while (p!=NULL)
//    {
//        p = p->next;
//        len++;
//    }
//    return len;
//}
//
//LinkList MergeList(LinkList La, LinkList Lb) {
//    LNode* pa, * pb, * pc;
//    if (LinkList(La) < LinkList(Lb)) {
//        pa = La->next;
//        pb = Lb->next;
//    }
//    else {
//        pa = Lb->next;
//        pb = La->next;
//    }
//    while (pa->next!=NULL)
//    {
//        pa = pa->next;
//    }
//    pa->next = pb;
//    return LinkList(La) < LinkList(Lb) ? La : Lb;
//}
//void CreateList(LinkList& L, int n) {
//    LinkList p, q;
//    L = (LinkList)malloc(sizeof(LNode));
//    L->next = NULL;
//    q = L;
//    for (int i = 1; i <= n; i++) {
//        p = (LinkList)malloc(sizeof(LNode));
//        scanf_s("%d", &p->data);
//        q->next = p;
//        q = p;
//    }
//    q->next = NULL;
//}
//void ListTraverse(LinkList L)
//{
//    LinkList p = L->next;
//    while (p)
//    {
//        printf("%4d", p->data);
//        p = p->next;
//    }
//    printf("\n");
//}
//
//void main()
//{
//    LinkList La, Lb, Lc;
//    printf("建立长度为4单链表La：");
//    InitList(&La);
//    CreateList(La, 4);
//    printf("La= ");
//    ListTraverse(La);
//    printf("建立长度为6单链表Lb：");
//    InitList(&Lb);
//    CreateList(Lb, 6);
//    printf("Lb= ");
//    ListTraverse(Lb);
//    InitList(&Lc);
//    printf("合并单链表La和Lb:");
//    Lc=MergeList(La, Lb);
//    ListTraverse(Lc);
//}
//
