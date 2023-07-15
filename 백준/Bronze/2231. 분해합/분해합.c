#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int n,sum;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        sum = i;
        int a = i;
        while (a > 0) {
            sum += a % 10;
            a /= 10;
        }
        if (sum == n) {
            printf("%d", i);
            break;
        }
        if (i == n) {
            printf("0");
        }
    }
    return 0;
}

