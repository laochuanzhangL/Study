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
Status ListInsert(LinkList L, int i, ElemType e) /* 算法2.9。不改变L */
{ /* 在带头结点的单链线性表L中第i个位置之前插入元素e */
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

Status ListInsertX(LinkList L, int x) {
	LinkList p = (LinkList)malloc(sizeof(LNode));
	p->data = x;
	LinkList q = L,temp;
	while (q->next &&q->next->data>x)
	{
		q = q->next;
	}
	p->next = q->next;
	q->next = p;
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
	Status i;
	int j;
	InitList(&L);
	for (j = 1; j <= 5; j++)
		i = ListInsert(L, 1, j);
	printf("在L的表头依次插入1～5后：L=");
	ListTraverse(L);
	ListInsertX(L, 0);
	ListTraverse(L);
	DestroyList(&L);
}
```
