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
//typedef char TElemType;
//TElemType Nil = ' '; /* 字符型以空格符为空 */
//typedef int SElemType; /* 定义栈元素类型，此句要在c3-1.h的前面 */
///* 栈的顺序存储表示 */
//#define STACK_INIT_SIZE 10 /* 存储空间初始分配量 */
//#define STACK_INCREMENT 2 /* 存储空间分配增量 */
///*二叉树的二叉链表存储表示 */
//typedef struct BiTNode
//{
//    TElemType data;
//    struct BiTNode* lchild, * rchild; /* 左右孩子指针 */
//}BiTNode, * BiTree;
//
//typedef struct SqStack
//{
//    BiTNode* base; /* 在栈构造之前和销毁之后，base的值为NULL */
//    BiTNode* top; /* 栈顶指针 */
//    int stacksize; /* 当前已分配的存储空间，以元素为单位 */
//}SqStack; /* 顺序栈 */
//
///*  顺序栈的基本操作(9个) */
//void InitStack(SqStack* S)
//{ /* 构造一个空栈S */
//    (*S).base = (BiTree)malloc(STACK_INIT_SIZE * sizeof(BiTNode));
//    if (!(*S).base)
//        exit(OVERFLOW); /* 存储分配失败 */
//    (*S).top = (*S).base;
//    (*S).stacksize = STACK_INIT_SIZE;
//}
//Status StackEmpty(SqStack* S)
//{ /* 若栈S为空栈，则返回TRUE，否则返回FALSE */
//    if ((*S).top == (*S).base)
//        return TRUE;
//    else
//        return FALSE;
//}
//
//BiTNode* GetTop(SqStack* S) {
//    BiTNode* T = (BiTNode*)malloc(sizeof(BiTNode));
//    T = (S->top)-1;
//    return T;
//}
//void Push(SqStack* S, BiTree e)
//{ /* 插入元素e为新的栈顶元素 */
//    if ((*S).top - (*S).base >= (*S).stacksize) {
//        (*S).base = (BiTree)realloc((*S).base, ((*S).stacksize + STACK_INCREMENT) * sizeof(BiTNode));
//        if (!(*S).base)
//            exit(OVERFLOW);
//        (*S).top = (*S).base + (*S).stacksize;
//        (*S).stacksize += STACK_INCREMENT;
//    }
//    *(*S).top++ = *e;
//}
//Status Pop(SqStack* S,BiTree* T)
//{ /* 若栈不空，则删除S的栈顶元素，用e返回其值，并返回OK；否则返回ERROR */
//
//    if ((*S).top == (*S).base)
//        return ERROR;
//    *T = --(*S).top;
//    return OK;
//}
//
//
//void InitBiTree(BiTree* T)
//{ /* 操作结果：构造空二叉树T */
//    *T = NULL;
//}
//
//void CreateBiTree(BiTree* T)
//{ /* 按先序次序输入二叉树中结点的值(可为字符型或整型，在主程中定义)，*/
//  /* 构造二叉链表表示的二叉树T。变量Nil表示空(子)树。有改动 */
//  //完成本函数
//    TElemType ch;
//    scanf_s("%c", &ch);
//    if (ch == Nil) {
//        *T = NULL;
//
//    }
//    else {
//        *T = (BiTree)malloc(sizeof(BiTNode));
//        (*T)->data = ch;
//        CreateBiTree(&(*T)->lchild);
//        CreateBiTree(&(*T)->rchild);
//    }
//}
//
//
//void Inorder(BiTree T, void(*visit)(TElemType e)) {
//    SqStack S;
//    InitStack(&S);
//    BiTNode *p=T;
//    while (T||!StackEmpty(&S))
//    {
//        if (T) {
//            Push(&S, T);
//            T = T->lchild;
//        }
//        else {
//            Pop(&S, &T);
//            visit(T->data);
//            T = T->rchild;
//        }
//    }
//}
//
//
//void PreOrder(BiTree T, void(*visit)(TElemType))
//{ 
//    SqStack S;
//    InitStack(&S);
//    while (T||!StackEmpty(&S))
//    {
//        if (T) {
//            visit(T->data);
//            Push(&S, T);
//            T = T->lchild;
//        }
//        else {
//            Pop(&S, &T);
//            T = T->rchild;
//        }
//    }
//}
//
//
//
//void PostOrderTraverse(BiTree T, void(*Visit)(TElemType))
//{ 
//}
//
//Status BiTreeEmpty(BiTree T)
//{ /* 初始条件：二叉树T存在。操作结果：若T为空二叉树，则返回TRUE，否则FALSE */
//    if (T)
//        return FALSE;
//    else
//        return TRUE;
//}
//TElemType Root(BiTree T)
//{  //初始条件：二叉树T存在。操作结果：返回T的根
//    if (BiTreeEmpty(T))
//        return Nil;
//    else
//        return T->data;
//}
//
//
//void DestroyBiTree(BiTree* T)
//{ /* 初始条件：二叉树T存在。操作结果：销毁二叉树T */
//    if (*T) /* 非空树 */
//    {
//        if ((*T)->lchild) /* 有左孩子 */
//            DestroyBiTree(&(*T)->lchild); /* 销毁左孩子子树 */
//        if ((*T)->rchild) /* 有右孩子 */
//            DestroyBiTree(&(*T)->rchild); /* 销毁右孩子子树 */
//        free(*T); /* 释放根结点 */
//        *T = NULL; /* 空指针赋0 */
//    }
//}
//void visitT(TElemType e)
//{
//    printf("%c ", e);
//}
//void main()
//{
//    BiTree T;
//    TElemType e1;
//    InitBiTree(&T);
//    printf("构造空二叉树后,树空否？%d(1:是 0:否)\n", BiTreeEmpty(T));
//    e1 = Root(T);
//    if (e1 != Nil)
//        printf("二叉树的根为: %c\n", e1);
//    else
//        printf("树空，无根\n");
//    printf("请先序输入二叉树(如:ab三个空格表示a为根结点,b为左子树的二叉树)\n");
//    CreateBiTree(&T);
//    printf("建立二叉树后,树空否？%d(1:是 0:否) \n", BiTreeEmpty(T));
//    e1 = Root(T);
//    if (e1 != Nil)
//        printf("二叉树的根为: %c", e1);
//    else
//        printf("树空，无根");
//    printf("\n先序非递归遍历二叉树:");
//    PreOrder(T, visitT);
//    printf("\n中序非递归遍历二叉树:");
//    Inorder(T, visitT);
//    printf("\n后序递归遍历二叉树:");
//    PostOrderTraverse(T, visitT);
//    DestroyBiTree(&T);
//}
