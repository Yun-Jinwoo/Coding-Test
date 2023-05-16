#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main() {
	char arr[101];
	scanf("%s", arr);
	int len = strlen(arr);
	int cnt = len;
	for (int i = 0; i < len; i++) {
		if (arr[i] == 'c') {
			if (arr[i + 1] == '-' || arr[i + 1] == '=') {
				cnt--;
				continue;
			}
		}
		if (arr[i] == 'd') {
			if (arr[i + 1] == '-') {
				cnt--;
				continue;
			}
			if (arr[i + 1] == 'z') {
				if (arr[i + 2] == '=')
					cnt -= 2; i++; continue;
			}
		}
		if (arr[i] == 'l') {
			if (arr[i + 1] == 'j')
				cnt--; continue;
		}
		if (arr[i] == 'n') {
			if (arr[i + 1] == 'j')
				cnt--; continue;
		}
		if (arr[i] == 's') {
			if (arr[i + 1] == '=')
				cnt--; continue;
		}
		if (arr[i] == 'z') {
			if (arr[i + 1] == '=')
				cnt--; continue;
		}
	}
	printf("%d", cnt);
	
	return 0;
}