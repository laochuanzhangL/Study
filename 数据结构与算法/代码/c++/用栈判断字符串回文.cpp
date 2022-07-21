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
//    char* base; /* ��ջ����֮ǰ������֮��base��ֵΪNULL */
//    char* top; /* ջ��ָ�� */
//    int stacksize; /* ��ǰ�ѷ���Ĵ洢�ռ䣬��Ԫ��Ϊ��λ */
//}SqStack; /* ˳��ջ */
//
///*  ˳��ջ�Ļ�������(9��) */
//void InitStack(SqStack* S)
//{ /* ����һ����ջS */
//    (*S).base = (char*)malloc(STACK_INIT_SIZE * sizeof(char));
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
//void ClearStack(SqStack* S)
//{ /* ��S��Ϊ��ջ */
//    (*S).top = (*S).base;
//}
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
//
//
///* �뽫���溯���������� */
//void Push(SqStack* S, char e)
//{ /* ����Ԫ��eΪ�µ�ջ��Ԫ�� */
//    int length = StackLength(*S);
//    if (length >= S->stacksize) {
//        S->base = (char*)realloc(S->base, (S->stacksize + STACK_INCREMENT) * sizeof(char));
//        if (!(*S).base)
//            exit(OVERFLOW);
//        S->top = S->base + S->stacksize;
//        S->stacksize = S->stacksize + STACK_INCREMENT;
//    }
//    *((S->top)++) = e;
//}
//
///* �뽫���溯���������� */
//Status Pop(SqStack* S, char* e)
//{ /* ��ջ���գ���ɾ��S��ջ��Ԫ�أ���e������ֵ��������OK�����򷵻�ERROR */
//    if (StackEmpty(*S)) {
//        return ERROR;
//    }
//    *e = *(--S->top);
//    return OK;
//}
//
//
//
//Boolean Judge(char str[]) {
//    if (str[0] == NULL) {
//        printf("�������ַ�");
//        return FALSE;
//    }
//    SqStack s;
//    InitStack(&s);
//    char temp=' ';
//    int len, cen;A
//    len = strlen(str);
//    if (len % 2 == 1)cen = len / 2 + 1;
//    else cen = len / 2;
//    for (int i = 0; i < len / 2; i++) {
//        Push(&s, str[i]);
//    }
//    while (!StackEmpty(s))
//    {
//        Pop(&s, &temp);
//        if (temp != str[cen])return FALSE;
//        else cen++;
//    }
//    return TRUE;
//}
//
//void main()
//{
//    char str[100];
//    printf("������һ���ַ���:  ");
//    gets_s(str);
//    printf("�ַ���Ϊ���ģ�%d(1:�� 0:��)\n", Judge(str));
//}
