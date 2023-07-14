#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int a, b, c;
    
    while (1) {
        scanf("%d %d %d", &a, &b, &c);
        if (a == 0 && b == 0 && c == 0)
            break;
        int max = a;
        if (max < b) max = b;
        if (max < c) max = c;
        if (max >= a + b + c - max)
            printf("Invalid\n");
        else if (a == b && b == c)
            printf("Equilateral\n");
        else if (a != b && a != c && b != c)
            printf("Scalene\n");
        else
            printf("Isosceles\n");
    }
    
    return 0;
}