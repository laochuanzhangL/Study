//#include<ctype.h>
//#include<malloc.h> /* malloc()等 */
//#include<stdio.h> 
//#include<stdlib.h>
//#include<string.h>
//#include<process.h> /* exit() */
//#define TRUE 1
//#define FALSE 0
//#define OK 1
//#define ERROR 0
//#define OVERFLOW -2
//typedef int Status; /* Status是函数的类型,其值是函数结果状态代码，如OK等 */
//typedef int Boolean; /* Boolean是布尔类型,其值是TRUE或FALSE */
//typedef int SElemType; /* 定义栈元素类型，此句要在c3-1.h的前面 */
///* 栈的顺序存储表示 */
//#define STACK_INIT_SIZE 10 /* 存储空间初始分配量 */
//#define STACK_INCREMENT 2 /* 存储空间分配增量 */
//typedef struct SqStack
//{
//    SElemType* base; /* 在栈构造之前和销毁之后，base的值为NULL */
//    SElemType* top; /* 栈顶指针 */
//    int stacksize; /* 当前已分配的存储空间，以元素为单位 */
//}SqStack; /* 顺序栈 */
//
///*  顺序栈的基本操作(9个) */
//void InitStack(SqStack* S)
//{ /* 构造一个空栈S */
//    (*S).base = (SElemType*)malloc(STACK_INIT_SIZE * sizeof(SElemType));
//    if (!(*S).base)
//        exit(OVERFLOW); /* 存储分配失败 */
//    (*S).top = (*S).base;
//    (*S).stacksize = STACK_INIT_SIZE;
//}
//
//void DestroyStack(SqStack* S)
//{ /* 销毁栈S，S不再存在 */
//    free((*S).base);
//    (*S).base = NULL;
//    (*S).top = NULL;
//    (*S).stacksize = 0;
//}
//
//
//
//Status StackEmpty(SqStack S)
//{ /* 若栈S为空栈，则返回TRUE，否则返回FALSE */
//    if (S.top == S.base)
//        return TRUE;
//    else
//        return FALSE;
//}
//
//int StackLength(SqStack S)
//{ /* 返回S的元素个数，即栈的长度 */
//    return S.top - S.base;
//}
//
//Status GetTop(SqStack S, SElemType* e)
//{ /* 若栈不空，则用e返回S的栈顶元素，并返回OK；否则返回ERROR */
//    if (S.top > S.base)
//    {
//        *e = *(S.top - 1);
//        return OK;
//    }
//    else
//        return ERROR;
//}
//
///* 请将下面函数补充完整 */
//void Push(SqStack* S, SElemType e)
//{ /* 插入元素e为新的栈顶元素 */
//    int length = StackLength(*S);
//    if (length >= S->stacksize) {
//        S->base = (SElemType*)realloc(S->base, (S->stacksize + STACK_INCREMENT) * sizeof(SElemType));
//        if (!(*S).base)
//            exit(OVERFLOW);
//        S->top = S->base + S->stacksize;
//        S->stacksize = S->stacksize + STACK_INCREMENT;
//    }
//    *((S->top)++) = e;
//}
//
///* 请将下面函数补充完整 */
//Status Pop(SqStack* S)
//{ /* 若栈不空，则删除S的栈顶元素，用e返回其值，并返回OK；否则返回ERROR */
//    if (StackEmpty(*S)) {
//        return ERROR;
//    }
//    (*S).top--;
//    return OK;
//}
//
//Boolean Judge(char str[]) {
//    int len = strlen(str);
//    SqStack S;
//    InitStack(&S);
//    for (int i = 0; i < len; i++) {
//        if (str[i] == '(') {
//            Push(&S, '(');
//        }
//        else if(str[i]==')')
//        {
//            if (StackEmpty(S))return FALSE;
//            else Pop(&S);
//        }
//    }
//    if (StackEmpty(S))
//        return TRUE;
//    else 
//        return FALSE;
//}
//
//
//void StackTraverse(SqStack S, void(*visit)(SElemType))
//{ /* 从栈底到栈顶依次对栈中每个元素调用函数visit() */
//    while (S.top > S.base)
//        visit(*S.base++);
//    printf("\n");
//}
//
//void print(SElemType c)
//{
//    printf("%d ", c);
//}
//
//void main()
//{
//    char str[100];
//    printf("请输入一个字符串:  ");
//    gets_s(str);
//    printf("括号是否合理：%d(1:空 0:否)\n", Judge(str));
//}
