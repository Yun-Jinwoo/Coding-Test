#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
	int a, b, c, d, e, f, w, h;
	scanf("%d %d", &a, &b);
	scanf("%d %d", &c, &d);
	scanf("%d %d", &e, &f);
	if (a == c) w = e;
	else if (a == e) w = c;
	else if (c == e) w = a;
	if (b == d) h = f;
	else if (b == f) h = d;
	else if (d == f) h = b;

	printf("%d %d", w, h);
	return 0;
}