#include <stdio.h>
#include <stdlib.h>

int main(){
    int n,m;
    scanf("%d %d",&n,&m);
    int** arr1 = (int**)malloc(sizeof(int*)*n);
    for(int i = 0; i < n; i++){
        arr1[i] = (int*)malloc(sizeof(int)*m);
    }
    int** arr2 = (int**)malloc(sizeof(int*)*n);
    for(int i = 0; i < n; i++){
        arr2[i] = (int*)malloc(sizeof(int)*m);
    }
    for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++){
            scanf("%d",&arr1[i][j]);
        }
    }
    for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++){
            scanf("%d",&arr2[i][j]);
        }
    }
    for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++){
            printf("%d ",arr1[i][j]+arr2[i][j]);
        }
        printf("\n");
    }
}