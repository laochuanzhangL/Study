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
//typedef char TElemType;
//TElemType Nil = ' '; /* �ַ����Կո��Ϊ�� */
//typedef int SElemType; /* ����ջԪ�����ͣ��˾�Ҫ��c3-1.h��ǰ�� */
///* ջ��˳��洢��ʾ */
//#define STACK_INIT_SIZE 10 /* �洢�ռ��ʼ������ */
//#define STACK_INCREMENT 2 /* �洢�ռ�������� */
///*�������Ķ�������洢��ʾ */
//typedef struct BiTNode
//{
//    TElemType data;
//    struct BiTNode* lchild, * rchild; /* ���Һ���ָ�� */
//}BiTNode, * BiTree;
//
//typedef struct SqStack
//{
//    BiTNode* base; /* ��ջ����֮ǰ������֮��base��ֵΪNULL */
//    BiTNode* top; /* ջ��ָ�� */
//    int stacksize; /* ��ǰ�ѷ���Ĵ洢�ռ䣬��Ԫ��Ϊ��λ */
//}SqStack; /* ˳��ջ */
//
///*  ˳��ջ�Ļ�������(9��) */
//void InitStack(SqStack* S)
//{ /* ����һ����ջS */
//    (*S).base = (BiTree)malloc(STACK_INIT_SIZE * sizeof(BiTNode));
//    if (!(*S).base)
//        exit(OVERFLOW); /* �洢����ʧ�� */
//    (*S).top = (*S).base;
//    (*S).stacksize = STACK_INIT_SIZE;
//}
//Status StackEmpty(SqStack* S)
//{ /* ��ջSΪ��ջ���򷵻�TRUE�����򷵻�FALSE */
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
//{ /* ����Ԫ��eΪ�µ�ջ��Ԫ�� */
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
//{ /* ��ջ���գ���ɾ��S��ջ��Ԫ�أ���e������ֵ��������OK�����򷵻�ERROR */
//
//    if ((*S).top == (*S).base)
//        return ERROR;
//    *T = --(*S).top;
//    return OK;
//}
//
//
//void InitBiTree(BiTree* T)
//{ /* �������������ն�����T */
//    *T = NULL;
//}
//
//void CreateBiTree(BiTree* T)
//{ /* �������������������н���ֵ(��Ϊ�ַ��ͻ����ͣ��������ж���)��*/
//  /* ������������ʾ�Ķ�����T������Nil��ʾ��(��)�����иĶ� */
//  //��ɱ�����
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
//{ /* ��ʼ������������T���ڡ������������TΪ�ն��������򷵻�TRUE������FALSE */
//    if (T)
//        return FALSE;
//    else
//        return TRUE;
//}
//TElemType Root(BiTree T)
//{  //��ʼ������������T���ڡ��������������T�ĸ�
//    if (BiTreeEmpty(T))
//        return Nil;
//    else
//        return T->data;
//}
//
//
//void DestroyBiTree(BiTree* T)
//{ /* ��ʼ������������T���ڡ�������������ٶ�����T */
//    if (*T) /* �ǿ��� */
//    {
//        if ((*T)->lchild) /* ������ */
//            DestroyBiTree(&(*T)->lchild); /* ������������ */
//        if ((*T)->rchild) /* ���Һ��� */
//            DestroyBiTree(&(*T)->rchild); /* �����Һ������� */
//        free(*T); /* �ͷŸ���� */
//        *T = NULL; /* ��ָ�븳0 */
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
//    printf("����ն�������,���շ�%d(1:�� 0:��)\n", BiTreeEmpty(T));
//    e1 = Root(T);
//    if (e1 != Nil)
//        printf("�������ĸ�Ϊ: %c\n", e1);
//    else
//        printf("���գ��޸�\n");
//    printf("���������������(��:ab�����ո��ʾaΪ�����,bΪ�������Ķ�����)\n");
//    CreateBiTree(&T);
//    printf("������������,���շ�%d(1:�� 0:��) \n", BiTreeEmpty(T));
//    e1 = Root(T);
//    if (e1 != Nil)
//        printf("�������ĸ�Ϊ: %c", e1);
//    else
//        printf("���գ��޸�");
//    printf("\n����ǵݹ����������:");
//    PreOrder(T, visitT);
//    printf("\n����ǵݹ����������:");
//    Inorder(T, visitT);
//    printf("\n����ݹ����������:");
//    PostOrderTraverse(T, visitT);
//    DestroyBiTree(&T);
//}
