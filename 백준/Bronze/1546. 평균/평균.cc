#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>

int main() {
    int N;
    scanf("%d", &N);
    int* arr = (int*)malloc(sizeof(int) * N);
    int max = 0;
    for (int i = 0; i < N; i++)
    {
        scanf("%d", &arr[i]);
        if (max < arr[i])
            max = arr[i];
    }
    float sum = 0.0;
    for (int i = 0; i < N; i++)
    {
        sum += (float)arr[i] / max * 100;
    }
    float avg = sum / N;
    printf("%f", avg);

    return 0;
}