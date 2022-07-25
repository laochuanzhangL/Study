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
//Status GetElem(LinkList L, int i, ElemType* e) /* �㷨2.8 */
//{ /* LΪ��ͷ���ĵ������ͷָ�롣����i��Ԫ�ش���ʱ����ֵ����e������OK�����򷵻�ERROR */
//	int j = 1; /* jΪ������ */
//	LinkList p = L->next; /* pָ���һ����� */
//	while (p && j < i) /* ˳ָ�������ң�ֱ��pָ���i��Ԫ�ػ�pΪ�� */
//	{
//		p = p->next;
//		j++;
//	}
//	if (!p || j > i) /* ��i��Ԫ�ز����� */
//		return ERROR;
//	*e = p->data; /* ȡ��i��Ԫ�� */
//	return OK;
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
//
///* �뽫���溯���������� */
//Status ListDelete(LinkList L, ElemType x)
//{ 
//	LinkList p = L,q=p->next;
//	if (q->data == x) {
//		return ERROR; 
//	}
//	while (q->next->data != x&&q->next!=NULL)
//	{	
//		p = p->next;
//		q = q->next;
//	}
//	if (q->next == NULL)return ERROR;
//	p->next = q->next;
//	return OK;
//}
//
//
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
//	ElemType e;
//	Status i;
//	int j,target=3;
//	InitList(&L);
//	for (j = 1; j <= 5; j++)
//		i = ListInsert(L, 1, j);
//	printf("��L�ı�ͷ���β���1��5��L=");
//	ListTraverse(L); /* ���ζ�Ԫ�ص���print()�����Ԫ�ص�ֵ */
//	GetElem(L, 4, &e);
//	ListDelete(L, target);
//	printf("ɾ��L��ֵΪ%d��ֱ��ǰ�����", target);
//	ListTraverse(L);
//	DestroyList(&L);
//}