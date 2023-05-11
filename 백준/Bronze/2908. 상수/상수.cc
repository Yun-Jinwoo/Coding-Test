#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

void reverse(char* arr, int len)
{
	for (int i = 0; i < len / 2; i++)
	{
		char temp = arr[i];
		arr[i] = arr[len - 1 - i];
		arr[len - 1 - i] = temp;
	}
}

int main()
{
	char a[4], b[4];
	scanf("%s %s", a, b);
	reverse(a, 3);
	reverse(b, 3);
	for (int i = 0; i < 3; i++)
	{
		if (a[i] - '0' > b[i] - '0')
		{
			printf("%s", a);
			break;
		}
		else if (a[i] - '0' < b[i] - '0')
		{
			printf("%s", b);
			break;
		}
		else
			continue;
	}
	return 0;
}