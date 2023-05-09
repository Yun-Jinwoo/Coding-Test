#include <stdio.h>
#include <string.h>

int main() {
    int a;
    char arr[1000];
    scanf("%d", &a);
    for (int i = 0; i < a; i++)
    {
        scanf("%s", arr);
        printf("%c%c\n", arr[0], arr[strlen(arr)-1]);
    }
  
    return 0;
}
