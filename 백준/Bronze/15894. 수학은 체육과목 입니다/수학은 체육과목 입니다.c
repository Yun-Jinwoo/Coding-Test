#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
	long n;
	scanf("%ld", &n);
	long result;
	result = n + n + 2*n;
	printf("%ld", result);
	return 0;
}