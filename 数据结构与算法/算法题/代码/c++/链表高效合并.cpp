//#include<ctype.h>
//#include<malloc.h> /* malloc()�� */
//#include<stdio.h> 
//#include<stdlib.h>
//#include<process.h> /* exit() */
//#define TRUE 1
//#define FALSE 0
//#define OK 1
//#define ERROR 0
//#define OVERFLOW -2
//typedef int Status; /* Status�Ǻ���������,��ֵ�Ǻ������״̬���룬��OK�� */
//typedef int Boolean; /* Boolean�ǲ�������,��ֵ��TRUE��FALSE */
//typedef int ElemType;
///*���Ա�ĵ�����洢�ṹ */
//struct LNode
//{
//    ElemType data;
//    struct LNode* next;
//};
//typedef struct LNode* LinkList; /* ��һ�ֶ���LinkList�ķ��� */
///* ����ͷ���ĵ�����Ļ�������,�����㷨2.8,2.9,2.10 */
//void InitList(LinkList* L)
//{ /* �������������һ���յ����Ա�L */
//    *L = (LinkList)malloc(sizeof(struct LNode)); /* ����ͷ��㣬��ʹLָ���ͷ��� */
//    if (!*L) /* �洢����ʧ�� */
//        exit(OVERFLOW);
//    (*L)->next = NULL; /* ָ����Ϊ�� */
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
//    printf("��������Ϊ4������La��");
//    InitList(&La);
//    CreateList(La, 4);
//    printf("La= ");
//    ListTraverse(La);
//    printf("��������Ϊ6������Lb��");
//    InitList(&Lb);
//    CreateList(Lb, 6);
//    printf("Lb= ");
//    ListTraverse(Lb);
//    InitList(&Lc);
//    printf("�ϲ�������La��Lb:");
//    Lc=MergeList(La, Lb);
//    ListTraverse(Lc);
//}
//
