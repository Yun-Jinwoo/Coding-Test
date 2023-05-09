#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
int main() {
    int a, b, cnt = 0;
    scanf("%d", &a);
    int c[a];
    for (int i = 0; i < a; i++)
    {
        scanf("%d", &c[i]);
    }
    scanf("%d", &b);
    for (int i = 0; i < a; i++)
    {
        if (c[i] == b)
            cnt++;
    }
    printf("%d", cnt);
    return 0;
}