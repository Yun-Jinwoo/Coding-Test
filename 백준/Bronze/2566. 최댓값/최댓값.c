#include <stdio.h>

int main(){
    int arr[9][9];
    int max = 0;
    int wid = 0, hgt = 0;
    for(int i = 0; i < 9; i++){
        for(int j = 0; j < 9; j++){
            scanf("%d",&arr[i][j]);
            if(arr[i][j]>max){
                max = arr[i][j];
                wid = i;
                hgt = j;
            }
        }
    }
    printf("%d\n%d %d",max,wid+1,hgt+1);
    return 0;
}