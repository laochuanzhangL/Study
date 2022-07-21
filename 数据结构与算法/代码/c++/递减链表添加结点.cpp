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
//	ElemType data;
//	struct LNode* next;
//};
//typedef struct LNode* LinkList; /* ��һ�ֶ���LinkList�ķ��� */
///* ����ͷ���ĵ�����Ļ�������,�����㷨2.8,2.9,2.10 */
//void InitList(LinkList* L)
//{ /* �������������һ���յ����Ա�L */
//	*L = (LinkList)malloc(sizeof(struct LNode)); /* ����ͷ��㣬��ʹLָ���ͷ��� */
//	if (!*L) /* �洢����ʧ�� */
//		exit(OVERFLOW);
//	(*L)->next = NULL; /* ָ����Ϊ�� */
//}
//
//void DestroyList(LinkList* L)
//{ /* ��ʼ���������Ա�L�Ѵ��ڡ�����������������Ա�L */
//	LinkList q;
//	while (*L)
//	{
//		q = (*L)->next;
//		free(*L);
//		*L = q;
//	}
//}
//
//
///* �뽫���溯���������� */
//Status ListInsert(LinkList L, int i, ElemType e) /* �㷨2.9�����ı�L */
//{ /* �ڴ�ͷ���ĵ������Ա�L�е�i��λ��֮ǰ����Ԫ��e */
//	LinkList p, s;
//	p = L;
//	int j = 0;
//	while (p && j < i - 1) {
//		p = p->next;
//		j++;
//	}
//	if (!p || j > i - 1) return ERROR;
//	s = (LinkList)malloc(sizeof(LNode));
//	s->data = e;
//	s->next = p->next;
//	p->next = s;
//	return OK;
//
//}
//
//Status ListInsertX(LinkList L, int x) {
//	LinkList p = (LinkList)malloc(sizeof(LNode));
//	p->data = x;
//	LinkList q = L,temp;
//	while (q->next &&q->next->data>x)
//	{
//		q = q->next;
//	}
//	p->next = q->next;
//	q->next = p;
//	return OK;
//}
//
//void ListTraverse(LinkList L)
//{
//	LinkList p = L->next;
//	while (p)
//	{
//		printf("%3d", p->data);
//		p = p->next;
//	}
//	printf("\n");
//}
//
//void main()
//{
//	LinkList L;
//	Status i;
//	int j;
//	InitList(&L);
//	for (j = 1; j <= 5; j++)
//		i = ListInsert(L, 1, j);
//	printf("��L�ı�ͷ���β���1��5��L=");
//	ListTraverse(L);
//	ListInsertX(L, 0);
//	ListTraverse(L);
//	DestroyList(&L);
//}