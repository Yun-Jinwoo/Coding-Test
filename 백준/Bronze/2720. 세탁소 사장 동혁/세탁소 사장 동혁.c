#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    int N, price;
    scanf("%d", &N);
    int a, b, c, d;
    for (int i = 0; i < N; i++) {
        scanf("%d", &price);
        a = price / 25;
        b = price % 25 / 10;
        c = price % 25 % 10 / 5;
        d = price % 25 % 10 % 5 / 1;
        printf("%d %d %d %d\n", a, b, c, d);
    }
    return 0;
}