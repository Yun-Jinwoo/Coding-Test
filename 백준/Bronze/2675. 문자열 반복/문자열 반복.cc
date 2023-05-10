#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {
    int n, a;
    char S[20];
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        scanf("%d %s", &a, S);
        for (int j = 0; j < strlen(S); j++)
        {
            for (int l = 0; l < a; l++)
            {
                printf("%c", S[j]);
            }
        }
        printf("\n");
    }
    return 0;
}
