#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int a, b, c, len;
    scanf("%d%d%d", &a, &b, &c);
    int max = a;
    if (b > max) max = b;
    if (c > max) max = c;

    if (max >= a + b + c - max) {
        len = (a + b + c - max) * 2 - 1;
    }
    else {
        len = a + b + c;
    }
    printf("%d", len);
    return 0;
}