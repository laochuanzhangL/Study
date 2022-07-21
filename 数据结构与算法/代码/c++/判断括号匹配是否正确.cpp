//#include<ctype.h>
//#include<malloc.h> /* malloc()�� */
//#include<stdio.h> 
//#include<stdlib.h>
//#include<string.h>
//#include<process.h> /* exit() */
//#define TRUE 1
//#define FALSE 0
//#define OK 1
//#define ERROR 0
//#define OVERFLOW -2
//typedef int Status; /* Status�Ǻ���������,��ֵ�Ǻ������״̬���룬��OK�� */
//typedef int Boolean; /* Boolean�ǲ�������,��ֵ��TRUE��FALSE */
//typedef int SElemType; /* ����ջԪ�����ͣ��˾�Ҫ��c3-1.h��ǰ�� */
///* ջ��˳��洢��ʾ */
//#define STACK_INIT_SIZE 10 /* �洢�ռ��ʼ������ */
//#define STACK_INCREMENT 2 /* �洢�ռ�������� */
//typedef struct SqStack
//{
//    SElemType* base; /* ��ջ����֮ǰ������֮��base��ֵΪNULL */
//    SElemType* top; /* ջ��ָ�� */
//    int stacksize; /* ��ǰ�ѷ���Ĵ洢�ռ䣬��Ԫ��Ϊ��λ */
//}SqStack; /* ˳��ջ */
//
///*  ˳��ջ�Ļ�������(9��) */
//void InitStack(SqStack* S)
//{ /* ����һ����ջS */
//    (*S).base = (SElemType*)malloc(STACK_INIT_SIZE * sizeof(SElemType));
//    if (!(*S).base)
//        exit(OVERFLOW); /* �洢����ʧ�� */
//    (*S).top = (*S).base;
//    (*S).stacksize = STACK_INIT_SIZE;
//}
//
//void DestroyStack(SqStack* S)
//{ /* ����ջS��S���ٴ��� */
//    free((*S).base);
//    (*S).base = NULL;
//    (*S).top = NULL;
//    (*S).stacksize = 0;
//}
//
//
//
//Status StackEmpty(SqStack S)
//{ /* ��ջSΪ��ջ���򷵻�TRUE�����򷵻�FALSE */
//    if (S.top == S.base)
//        return TRUE;
//    else
//        return FALSE;
//}
//
//int StackLength(SqStack S)
//{ /* ����S��Ԫ�ظ�������ջ�ĳ��� */
//    return S.top - S.base;
//}
//
//Status GetTop(SqStack S, SElemType* e)
//{ /* ��ջ���գ�����e����S��ջ��Ԫ�أ�������OK�����򷵻�ERROR */
//    if (S.top > S.base)
//    {
//        *e = *(S.top - 1);
//        return OK;
//    }
//    else
//        return ERROR;
//}
//
///* �뽫���溯���������� */
//void Push(SqStack* S, SElemType e)
//{ /* ����Ԫ��eΪ�µ�ջ��Ԫ�� */
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
///* �뽫���溯���������� */
//Status Pop(SqStack* S)
//{ /* ��ջ���գ���ɾ��S��ջ��Ԫ�أ���e������ֵ��������OK�����򷵻�ERROR */
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
//{ /* ��ջ�׵�ջ�����ζ�ջ��ÿ��Ԫ�ص��ú���visit() */
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
//    printf("������һ���ַ���:  ");
//    gets_s(str);
//    printf("�����Ƿ����%d(1:�� 0:��)\n", Judge(str));
//}
