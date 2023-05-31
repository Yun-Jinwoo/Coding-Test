#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

void reverse(char* arr) {
	int len = strlen(arr);
	for (int i = 0; i < len/2; i++) {
		char temp = arr[i];
		arr[i] = arr[len - 1 - i];
		arr[len - 1 - i] = temp;
	}
}

int main() {
	char A[10002] = "", B[10002] = "", S[10003] = "";
	int carry = 0;
	scanf("%s %s", A, B);
	reverse(A);
	reverse(B);
	int len = strlen(A) > strlen(B) ? strlen(A) : strlen(B);
	for (int i = 0; i < len; i++) {
		int a = A[i] - '0';
		int b = B[i] - '0';
		int sum = a + b + carry;
		while (sum < 0) {
			sum = sum + '0';
		}
		if (sum >= 10) {
			carry = 1;
			sum -= 10;
		}
		else {
			carry = 0;
		}
		S[i] = sum + '0';
	}
	if (carry == 1) S[len] = '1';
	reverse(S);
	printf("%s", S);
	return 0;
}