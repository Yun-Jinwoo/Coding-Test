#include <stdio.h>
#include <stdlib.h>

int main() {
    char arr[1000];
    scanf("%s", arr);
    int n;
    scanf("%d", &n);
    printf("%c", arr[n-1]);
    return 0;
}