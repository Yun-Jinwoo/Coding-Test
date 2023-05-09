#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>

int main() {
    int N, M;
    int i, j;
    scanf("%d %d", &N, &M);
    int arr[101];
    for (int l = 1; l <= N; l++)
    {
        arr[l] = l;
    }
    for (int l = 0; l < M; l++)
    {
        scanf("%d %d", &i, &j);
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    for (int l = 1; l <= N; l++)
        printf("%d ", arr[l]);
    return 0;
}
