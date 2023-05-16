#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#include <string.h>

int main() {
    int n;
    scanf("%d", &n);
    int count = n;
    for (int i = 0; i < n; i++) {
        char lastchar = '0';
        char word[101] = { 0, };
        int state = 0;
        scanf("%s", word);
        int len = strlen(word);
        for (int j = 0; j < len; j++) {
            if (state == 1) {
                state = 0;
                break;
            }
            if (word[j] != lastchar) {
                lastchar = word[j];
                for (int k = 0; k < j; k++) {
                    if (word[k] == word[j]) {
                        count -= 1;
                        state = 1;
                        break;
                    }
                }
            }
        }
    }
    printf("%d", count);
    return 0;
}