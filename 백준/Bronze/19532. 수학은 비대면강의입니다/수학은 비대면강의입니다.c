#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int a, b, c, d, e, f;
    scanf("%d%d%d%d%d%d", &a, &b, &c, &d, &e, &f);
    int x = (e * c - b * f) / (a * e - b * d);
    int y = (a * f - d * c) / (a * e - b * d);
    printf("%d %d", x, y);
    return 0;
}
