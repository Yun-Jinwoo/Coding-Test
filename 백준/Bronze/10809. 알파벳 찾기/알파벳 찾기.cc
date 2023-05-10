#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {
    char word[101];
    scanf("%s", word);
    for (int i = 'a'; i <= 'z'; i++)
    {
        for (int j = 0; j < strlen(word); j++)
        {
            if (i == word[j])
            {
                printf("%d ", j);
                break;
            }
            if (j == strlen(word) - 1)
            {
                printf("-1 ");
            }
        }
    }
    return 0;
}
