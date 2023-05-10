#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {
    char str[1000000];
    scanf("%[^\n]", str);
    int cnt = 1;
    int len = strlen(str);
    if (len == 1 && str[0] == ' ') cnt = 0;
    for (int i = 0; i < strlen(str); i++)
    {
        if (str[i] == ' ')
        {
            if (i != 0 && i != strlen(str) - 1)
                cnt++;
        }
    }
    printf("%d", cnt);
    return 0;
}
