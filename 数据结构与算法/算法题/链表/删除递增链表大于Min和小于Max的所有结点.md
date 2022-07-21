```c
#include<ctype.h>
#include<malloc.h> /* malloc()等 */
#include<stdio.h> 
#include<stdlib.h>
#include<process.h> /* exit() */
#define TRUE 1
#define FALSE 0
#define OK 1
#define ERROR 0
#define OVERFLOW -2
typedef int Status; /* Status是函数的类型,其值是函数结果状态代码，如OK等 */
typedef int Boolean; /* Boolean是布尔类型,其值是TRUE或FALSE */
typedef int ElemType;
/*线性表的单链表存储结构 */
struct LNode
{
	ElemType data;
	struct LNode* next;
};
typedef struct LNode* LinkList; /* 另一种定义LinkList的方法 */
/* 带有头结点的单链表的基本操作,包括算法2.8,2.9,2.10 */
void InitList(LinkList* L)
{ /* 操作结果：构造一个空的线性表L */
	*L = (LinkList)malloc(sizeof(struct LNode)); /* 产生头结点，并使L指向此头结点 */
	if (!*L) /* 存储分配失败 */
		exit(OVERFLOW);
	(*L)->next = NULL; /* 指针域为空 */
}

void DestroyList(LinkList* L)
{ /* 初始条件：线性表L已存在。操作结果：销毁线性表L */
	LinkList q;
	while (*L)
	{
		q = (*L)->next;
		free(*L);
		*L = q;
	}
}


/* 请将下面函数补充完整 */
Status ListInsert(LinkList L, int i, ElemType e) 
{ 
	LinkList p, s;
	p = L;
	int j = 0;
	while (p && j < i - 1) {
		p = p->next;
		j++;
	}
	if (!p || j > i - 1) return ERROR;
	s = (LinkList)malloc(sizeof(LNode));
	s->data = e;
	s->next = p->next;
	p->next = s;
	return OK;

}

Status ListDelete(LinkList L, int min,int max ) {
	if (max < min)return ERROR;
	LinkList p=L, q=L;
	while (p->next&&p->next->data<=min)
	{
		p = p->next;
		q = q->next;
	}
	while (q&&q->data<max)
	{
		q = q->next;
	}
	p->next = q;
	return OK;
}

void ListTraverse(LinkList L)
{
	LinkList p = L->next;
	while (p)
	{
		printf("%3d", p->data);
		p = p->next;
	}
	printf("\n");
}

void main()
{
	LinkList L;
	ElemType e;
	Status i;
	int j,target=3;
	InitList(&L);
	for (j = 1; j <= 5; j++)
		i = ListInsert(L, j, j);
	printf("在L的表头依次插入1～5后：L=");
	ListTraverse(L); /* 依次对元素调用print()，输出元素的值 */
	ListDelete(L,2,4);
	ListTraverse(L);
	DestroyList(&L);
}
```
