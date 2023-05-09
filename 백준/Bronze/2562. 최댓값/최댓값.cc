#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>

int main() {
    int a[9];
    for(int i = 0; i < 9; i++)
        scanf("%d", &a[i]);
    int max = a[0], pos = 0;
    for (int i = 1; i < 9; i++)
    {
        if (a[i] > max) {
            max = a[i];
            pos = i;
        }
    }
    printf("%d\n%d", max, pos+1);
    return 0;
}