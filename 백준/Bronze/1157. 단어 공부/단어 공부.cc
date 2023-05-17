#include <stdio.h>
#include <string.h>

int main() {
    char arr[1000001];
    scanf("%s", arr);
    int alphabet[26] = { 0, };
    int len = strlen(arr);
    for (int i = 0; i < len; i++) {
        if (arr[i] >= 'a') alphabet[arr[i] - 'a']++;
        else alphabet[arr[i] - 'A']++;
    }
    
    int max = 0;
    char ans;
    for (int i = 0; i < 26; i++)
        if (alphabet[i] == max) {
            ans = '?';
        }
        else if (alphabet[i] > max) {
            max = alphabet[i];
            ans = 'A' + i;
        }

    printf("%c", ans);

    return 0;
}