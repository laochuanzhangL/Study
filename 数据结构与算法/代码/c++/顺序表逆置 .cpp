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
//#define LIST_INIT_SIZE 10 /* ���Ա�洢�ռ�ĳ�ʼ������ */
//#define LIST_INCREMENT 2 /* ���Ա�洢�ռ�ķ������� */
//typedef struct/* ���Ա�Ķ�̬����˳��洢�ṹ */
//{
//	ElemType* elem; /* �洢�ռ��ַ */
//	int length; /* ��ǰ���� */
//	int listsize; /* ��ǰ����Ĵ洢����(��sizeof(ElemType)Ϊ��λ) */
//}SqList;
//
///* ˳���ʾ�����Ա�Ļ�������,�����㷨2.3,2.4,2.5*/
//void InitList(SqList* L) /* �㷨2.3 */
//{ /* �������������һ���յ�˳�����Ա�L */
//	(*L).elem = (ElemType*)malloc(LIST_INIT_SIZE * sizeof(ElemType));
//	if (!(*L).elem)
//		exit(OVERFLOW); /* �洢����ʧ�� */
//	(*L).length = 0; /* �ձ���Ϊ0 */
//	(*L).listsize = LIST_INIT_SIZE; /* ��ʼ�洢���� */
//}
//
//void DestroyList(SqList* L)
//{ /* ��ʼ������˳�����Ա�L�Ѵ��ڡ��������������˳�����Ա�L */
//	free((*L).elem);
//	(*L).elem = NULL;
//	(*L).length = 0;
//	(*L).listsize = 0;
//}
//
///* �뽫���溯���������� */
//Status ListInsert(SqList* L, int i, ElemType e) /* �㷨2.4 */
//{ /* ��ʼ������˳�����Ա�L�Ѵ��ڣ�1��i��ListLength(L)+1 */
//   /* �����������L�е�i��λ��֮ǰ�����µ�����Ԫ��e��L�ĳ��ȼ�1 */
//	int* q, * p;
//	ElemType* newbase;
//	if (i<1 || i>L->length + 1)return ERROR;
//	if (L->length >= L->listsize) {
//		newbase = (ElemType*)realloc(L->elem, (L->listsize + LIST_INCREMENT) * sizeof(ElemType));
//		if (!newbase)exit(OVERFLOW);
//		L->elem = newbase;
//		L->listsize += LIST_INCREMENT;
//	}
//	q = &(L->elem[i - 1]);
//	for (p = &(L->elem[L->length]); p >= q; p--) {
//		*p = *(p - 1);
//	}
//	*q = e;
//	L->length++;
//	return OK;
//}
//
//
///* �뽫���溯���������� */
//Status ListDelete(SqList* L, int i, ElemType* e) /* �㷨2.5 */
//{ /* ��ʼ������˳�����Ա�L�Ѵ��ڣ�1��i��ListLength(L) */
//   /* ���������ɾ��L�ĵ�i������Ԫ�أ�����e������ֵ��L�ĳ��ȼ�1 */
//	if (i<1 || i>L->length + 1)return ERROR;
//	*e = L->elem[i - 1];
//	for (ElemType* q = &(L->elem[i - 1]); q < &(L->elem[L->length - 1]); q++) {
//		*q = *(q + 1);
//	}
//	--(L->length);
//	return OK;
//}
//
//Status  ListReverse(SqList L) {
//	if (!L.elem)return ERROR;
//	SqList ResultL = L;
//	int len = ResultL.length;
//	for (int i = 0; i < len / 2; i++) {
//		int temp = ResultL.elem[len - 1 - i];
//		ResultL.elem[len - 1 - i] = ResultL.elem[i];
//		ResultL.elem[i] = temp;
//	}
//	return OK;
//}
//
//void ListTraverse(SqList L)
//{ /* ��ʼ������˳�����Ա�L�Ѵ��� */
//	ElemType* p;
//	int i;
//	p = L.elem;
//	for (i = 1; i <= L.length; i++)
//		printf("%3d", *p++);
//	printf("\n");
//}
//
//void main()
//{
//	SqList L;
//	ElemType e;
//	Status i;
//	int j;
//	InitList(&L);
//	for (j = 1; j <= 5; j++)
//		i = ListInsert(&L, 1, j);
//	printf("�������L��Ԫ�أ�");
//	ListTraverse(L);
//	i = ListDelete(&L, 3, &e); /* ɾ����j������ */
//	if (i == ERROR)
//		printf("ɾ��Ԫ��ʧ��\n");
//	else
//		printf("ɾ��Ԫ�سɹ�����ֵΪ��%d\n", e);
//	printf("ɾ��Ԫ�غ�L��Ԫ�أ�");
//	ListTraverse(L);
//	ListReverse(L);
//	printf("L���Ĳ�����");
//	ListTraverse(L);
//	DestroyList(&L);
//}
