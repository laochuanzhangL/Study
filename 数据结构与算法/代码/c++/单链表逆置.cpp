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
//int ListLength(LinkList L) {
//	LinkList p = L;
//	int len = 0;
//	while (p->next) {
//		p = p->next;
//		len++;
//	}
//	return len;
//}
//
///* �뽫���溯���������� */
//Status ListDelete(LinkList L, int i, ElemType* e) /* �㷨2.10�����ı�L */
//{ /* �ڴ�ͷ���ĵ������Ա�L�У�ɾ����i��Ԫ�أ�����e������ֵ */
//	LinkList p, s;
//	p = L;
//	int j = 0;
//	while (p->next && j < i - 1) {
//		p = p->next;
//		j++;
//	}
//	if (!(p->next) || j > i - 1) return ERROR;
//	s = p->next;
//	p->next = s->next;
//	*e = s->data;
//	free(s);
//	return OK;
//}
//
//Status ListReverse(LinkList L) {
//	if (!L)return ERROR;
//	LinkList p = L->next,q=L->next;
//	L->next = NULL;
//	while (q!=NULL) {
//		q = p->next;
//		p->next = L->next;
//		L->next = p;
//		p = q;
//	}
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
//	ElemType e;
//	Status i;
//	int j;
//	InitList(&L);
//	for (j = 1; j <= 5; j++)
//		i = ListInsert(L, 1, j);
//	printf("��L�ı�ͷ���β���1��5��L=");
//	ListTraverse(L); /* ���ζ�Ԫ�ص���print()�����Ԫ�ص�ֵ */
//	printf("����ĳ���Ϊ��%d \n", ListLength(L));
//	GetElem(L, 4, &e);
//	printf("��4��Ԫ�ص�ֵΪ��%d\n", e);
//	i = ListDelete(L, 4, &e); /* ɾ����4������ */
//	if (i == ERROR)
//		printf("ɾ��Ԫ��ʧ��\n");
// 
//	else
//		printf("ɾ��Ԫ�سɹ�����ֵΪ��%d\n", e);
//	printf("�������L��Ԫ�أ�");
//	ListTraverse(L);
//	ListReverse(L); 
//	ListTraverse(L);
//	DestroyList(&L);
//}
