#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
	int n, cnt = 1, num = 1;
	scanf("%d", &n);
	for (int i = 1; n <= 1000000000; i++) {
		if (n > num) {
			cnt++;
			num += 6 * i;
		}
		else break;
	}
	printf("%d", cnt);
	return 0;
}


/* 
n = 1 -> cnt = 1
1 < n <= 1 + 6*1 -> cnt = 2
1 + 6*1 < n < 1 + 6*1 + 6*2 -> cnt = 3
1 + 6*1 + 6*2 < n < 1 + 6*1 + 6*2 + 6*3 -> cnt = 4
...
1 + 6*1 + 6*2 ... 6*(k-1) < n < 1 + 6*1 + 6*2 + 6*3 ... 6*k -> cnt = k+1

*/