#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int N, M;
    char Board[51][51];
    int min = 32;
    scanf("%d %d", &N, &M);
    getchar();
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            scanf(" %c", &Board[i][j]);
        }
    }

    // W부터 시작
    for (int i = 0; i <= N - 8; i++) {
        for (int j = 0; j <= M - 8; j++) {
            int count = 0;
            for (int l = i; l < 8+i; l++) {
                for (int k = j; k < 8+j; k++) {
                    if ((l % 2 == 0 && k % 2 == 0) || (l % 2 == 1 && k % 2 == 1)) {
                        if (Board[l][k] != 'W') {
                            count++;
                        }
                    }
                    else {
                        if (Board[l][k] != 'B') {
                            count++;
                        }
                    }
                }
            }
            if (count < min)
                min = count;
        }
    }
    // B부터 시작
    for (int i = 0; i <= N - 8; i++) {
        for (int j = 0; j <= M - 8; j++) {
            int count = 0;
            for (int l = i; l < 8+i; l++) {
                for (int k = j; k < 8+j; k++) {
                    if ((l % 2 == 0 && k % 2 == 0) || (l % 2 == 1 && k % 2 == 1)) {
                        if (Board[l][k] != 'B') {
                            count++;
                        }
                    }
                    else {
                        if (Board[l][k] != 'W') {
                            count++;
                        }
                    }
                }
            }
            if (count < min)
                min = count;
        }
    }
    printf("%d", min);
    return 0;
}