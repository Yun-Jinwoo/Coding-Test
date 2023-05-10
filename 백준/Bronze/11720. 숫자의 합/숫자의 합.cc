#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int main() {
    int a, sum = 0;
    scanf("%d", &a);
    char* num = (char*)malloc(sizeof(char) * a);
    scanf("%s", num);
    for (int i = 0; i < a; i++)
    {
        sum += num[i] - '0';
    }
    printf("%d", sum);
    return 0;
}
