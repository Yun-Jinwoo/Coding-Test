#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
	int n;
	scanf("%d", &n);
	int k = 1;
	while(1){
		if (k*(k - 1) / 2 < n && n <= k*(k + 1) / 2) {
			break;
		}
		k++;
	}
	n -= k * (k - 1) / 2;
	if (k % 2 == 0) {
		int a, b;
		a = 1;
		b = k;
		for (int i = 1; i < n; i++) {
			a++;
			b--;
		}
		printf("%d/%d", a, b);
	}
	else {
		int a, b;
		a = k;
		b = 1;
		for (int i = 1; i < n; i++) {
			a--;
			b++;
		}
		printf("%d/%d", a, b);
	}

	return 0;
}

/*
1/1										1	홀	분모 1로 시작
-> 1/2 -> 2/1							2	짝	분모 2로 시작
-> 3/1 -> 2/2 -> 1/3					3	홀	분자 3로 시작
-> 1/4 -> 2/3 -> 3/2 -> 4/1				4	짝	분모 4로 시작
-> 5/1 -> 4/2 -> 3/3 -> 2/4 -> 1/5 		5	홀	분자 5로 시작
...										...
-> 1/k ... k/1							k	홀	분자 k로 시작
											짝	분모 k로 시작

k번째 행까지 총 1+2+3+...+(k-1)+k개 즉, k(k+1)/2 개
k-1번째 행까지 총 1+2+3+...+(k-2)+(k-1)개 즉, (k-1)k/2개
따라서 k(k-1)/2 < n <= k(k+1)/2 이면 n = k번째 행에 존재
*/