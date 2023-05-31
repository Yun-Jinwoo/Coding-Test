#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
	int dot = 4, line = 2, n;
	scanf("%d", &n);
	for (int i = 0; i < n; i++) {
		line = line + (line - 1);
		dot = line * line;
	}
	printf("%d", dot);
	return 0;
}