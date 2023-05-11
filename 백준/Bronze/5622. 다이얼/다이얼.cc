#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>
int time(char A)
{
	if (A == 65 || A == 66 || A == 67)
		return 3;
	else if (A == 68 || A == 69 || A == 70)
		return 4;
	else if (A == 71 || A == 72 || A == 73)
		return 5;
	else if (A == 74 || A == 75 || A == 76)
		return 6;
	else if (A == 77 || A == 78 || A == 79)
		return 7;
	else if (A == 80 || A == 81 || A == 82 || A == 83)
		return 8;
	else if (A == 84 || A == 85 || A == 86)
		return 9;
	else if (A == 87 || A == 88 || A == 89 || A == 90)
		return 10;
	else if (A == '+' || A == '-' || A == '*' || A == '/')
		return 11;
}
int main()
{
	char arr[16];
	scanf("%s", arr);
	int sum = 0;
	for (int i = 0; i < strlen(arr); i++)
		sum += time(arr[i]);
	printf("%d", sum);
	return 0;
}
