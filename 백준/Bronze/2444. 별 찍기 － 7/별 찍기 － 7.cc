#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
	int a;
	scanf("%d", &a);
	for (int i = 0; i < (2 * a - 1)/2; i++){
		for (int j = 0; j < a - 1 - i; j++) {
			printf(" ");
		}
		for (int l = 0; l < 2 * i + 1; l++) {
			printf("*");
		}
		printf("\n");
	}
	for (int i = (2 * a - 1) / 2; i >= 0; i--) {
		for (int j = 0; j < a - 1 - i; j++) {
			printf(" ");
		}
		for (int l = 0; l < 2 * i + 1; l++) {
			printf("*");
		}
		printf("\n");
	}
	return 0;
}
