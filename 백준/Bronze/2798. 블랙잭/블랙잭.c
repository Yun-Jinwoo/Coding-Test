#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
int main()
{
    int n,m;
    int sum;
    int max = 0;
    scanf("%d%d", &n, &m);
    int* A = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &A[i]);
    }
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            for (int l = j + 1; l < n; l++) {
                sum = A[i] + A[j] + A[l];
                if (sum <= m && sum > max) {
                    max = sum;
                }
            }
        }
    }
    printf("%d", max);
    return 0;
}