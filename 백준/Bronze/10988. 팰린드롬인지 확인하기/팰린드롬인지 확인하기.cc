#include <stdio.h>
#include <string.h>

int main() {
	char arr[101] = { 0 };
	char brr[101] = { 0 };
	int sum = 0;

	scanf("%s", arr);
			for (int i = 0,j=strlen(arr)-1; i < strlen(arr) / 2; i++,j--)
				brr[i] = arr[j];
			for (int i = 0; i < strlen(arr) / 2; i++) 
			{
				if ((int)brr[i] == (int)arr[i]) 
					sum = sum + 1;
			}
			if (sum == strlen(arr) / 2)
				printf("1");
			else
				printf("0");
                
	return 0;
}