#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
	int n1, n2;
	int arr[1000];
	scanf("%d", &n1);
	for (int i = 0; i < n1; i++)
	{
		scanf("%d", &n2);
		int sum = 0;
		for (int j = 0; j < n2; j++)
		{
			scanf("%d", &arr[j]);
			sum += arr[j];
		}
		int avg = sum / n2;
		int cnt = 0;
		for (int j = 0; j < n2; j++)
		{
			if (arr[j] > avg)
				cnt++;
		}
		double result = 100.0 * cnt / n2;
		printf("%.3f%%\n", result);
	}
	return 0;
}