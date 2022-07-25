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
//#define NOT_FOUND -999
//typedef int Status; /* Status�Ǻ���������,��ֵ�Ǻ������״̬���룬��OK�� */
//typedef int Boolean; /* Boolean�ǲ�������,��ֵ��TRUE��FALSE */
//typedef char TElemType;
//TElemType Nil = ' '; /* �ַ����Կո��Ϊ�� */
//
///*�������Ķ�������洢��ʾ */
//typedef struct BiTNode
//{
//    TElemType data;
//    struct BiTNode* lchild, * rchild; /* ���Һ���ָ�� */
//}BiTNode, * BiTree;
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
//    TElemType q;
//    scanf_s("%c", &q);
//    if (q == Nil) {
//        *T = NULL;
//    }
//    else
//    {
//        *T = (BiTNode*)malloc(sizeof(BiTNode));
//        (*T)->data = q;
//        CreateBiTree(&((*T)->lchild));
//        CreateBiTree(&(*T)->rchild);
//    }
//}
//int Depth(BiTree T,int dep)
//{
//    int depl,depr;
//    if (T) {
//        depl = Depth(T->lchild, dep) + 1;
//        depr = Depth(T->rchild, dep) + 1;
//        dep = depl < depr ? depr : depl;
//    }
//    return dep;
//}
//
//int countTree(BiTree T) {
//    int sum = 0;
//    if (T) {
//        sum++;
//        sum += countTree(T->lchild);
//        sum += countTree(T->rchild);
//    }
//    return sum;
//}
//
//void DestroyBiTree(BiTree* T)
//{
//    if (T) {
//        if ((*T)->lchild)DestroyBiTree(&((*T)->lchild));
//        if ((*T)->rchild)DestroyBiTree(&((*T)->rchild));
//        free(*T);
//        *T = NULL;
//    }
//}
//
//void CopyTree(BiTree T, BiTree* root) {
//    if (T) {
//        *root = BiTree(malloc(sizeof(BiTNode)));
//        (*root)->data = T->data;
//        CopyTree(T->lchild, &((*root)->lchild));
//        CopyTree(T->rchild, &((*root)->rchild));
//    }
//    else {
//        *root = NULL;
//    }
//
//}
//void PreOrderTraverse(BiTree T, void(*Visit)(TElemType))
//{ 
//    if (T) {
//        Visit(T->data);
//        PreOrderTraverse(T->lchild, Visit);
//        PreOrderTraverse(T->rchild, Visit);
//    }
//}
//
//void InOrderTraverse(BiTree T, void(*Visit)(TElemType))
//{ 
//
//}
//
//void PostOrderTraverse(BiTree T, void(*Visit)(TElemType))
//{ 
//}
//
//int FindXDepth(BiTree T, TElemType x, int dep) {
//    if (T) {
//        if (T->data == x)return dep;
//        int depr, depl;
//        depl = FindXDepth(T->lchild, x, dep + 1);
//        if (depl != NOT_FOUND)return depl;
//        depr = FindXDepth(T->rchild, x, dep + 1);
//        if (depr != NOT_FOUND)return depr;
//        return NOT_FOUND;
//    }
//    return NOT_FOUND;
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
//void visitT(TElemType e)
//{
//    printf("%c ", e);
//}
//
//
//void main()
//{
//    BiTree T;
//    BiTree root;
//    TElemType e1;
//    TElemType x = '9';
//    int dep = 1;
//    InitBiTree(&T);
//   /* printf("����ն�������,���շ�%d(1:�� 0:��)\n", BiTreeEmpty(T));
//    e1 = Root(T);
//    if (e1 != Nil)
//        printf("�������ĸ�Ϊ: %c\n", e1);
//    else
//        printf("���գ��޸�\n");
//    printf("���������������(��:ab�����ո��ʾaΪ�����,bΪ�������Ķ�����)\n");*/
//    CreateBiTree(&T);
//    //printf("������������,���շ�%d(1:�� 0:��) \n", BiTreeEmpty(T));
//
//    printf("�������Ϊ%d\n", Depth(T, 0));
//    printf("���Ľ����Ϊ%d\n", countTree(T));
//    //e1 = Root(T);
//
//    //if (e1 != Nil)
//    //    printf("�������ĸ�Ϊ: %c\n", e1);
//    //else
//    //    printf("���գ��޸�\n");
//    printf("��������%d�����Ϊ%d", x, FindXDepth(T, x, dep));
//    printf("������ǰ������\n");
//    CopyTree(T, &root);
//    printf("�����Ķ������������:\n");
//    PreOrderTraverse(T, visitT);
//    DestroyBiTree(&T);
//    DestroyBiTree(&root);
//}
