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
//#define NOT_FOUND -999
//typedef int Status; /* Status是函数的类型,其值是函数结果状态代码，如OK等 */
//typedef int Boolean; /* Boolean是布尔类型,其值是TRUE或FALSE */
//typedef char TElemType;
//TElemType Nil = ' '; /* 字符型以空格符为空 */
//
///*二叉树的二叉链表存储表示 */
//typedef struct BiTNode
//{
//    TElemType data;
//    struct BiTNode* lchild, * rchild; /* 左右孩子指针 */
//}BiTNode, * BiTree;
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
//   /* printf("构造空二叉树后,树空否？%d(1:是 0:否)\n", BiTreeEmpty(T));
//    e1 = Root(T);
//    if (e1 != Nil)
//        printf("二叉树的根为: %c\n", e1);
//    else
//        printf("树空，无根\n");
//    printf("请先序输入二叉树(如:ab三个空格表示a为根结点,b为左子树的二叉树)\n");*/
//    CreateBiTree(&T);
//    //printf("建立二叉树后,树空否？%d(1:是 0:否) \n", BiTreeEmpty(T));
//
//    printf("树的深度为%d\n", Depth(T, 0));
//    printf("树的结点数为%d\n", countTree(T));
//    //e1 = Root(T);
//
//    //if (e1 != Nil)
//    //    printf("二叉树的根为: %c\n", e1);
//    //else
//    //    printf("树空，无根\n");
//    printf("二叉树中%d的深度为%d", x, FindXDepth(T, x, dep));
//    printf("拷贝当前二叉树\n");
//    CopyTree(T, &root);
//    printf("拷贝的二叉树先序遍历:\n");
//    PreOrderTraverse(T, visitT);
//    DestroyBiTree(&T);
//    DestroyBiTree(&root);
//}
