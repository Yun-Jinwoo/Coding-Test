#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main() {
    char sub[51];
    float grade;
    char score[3];
    float scr;
    float sum1 = 0;
    float sum2 = 0;
    float avg;
    for (int i = 0; i < 20; i++) {
        scanf("%s", sub);
        scanf("%f", &grade);
        scanf("%s", score);
        if (strcmp(score, "A+") == 0) scr = 4.5;
        else if (strcmp(score, "A0") == 0) scr = 4.0;
        else if (strcmp(score, "B+") == 0) scr = 3.5;
        else if (strcmp(score, "B0") == 0) scr = 3.0;
        else if (strcmp(score, "C+") == 0) scr = 2.5;
        else if (strcmp(score, "C0") == 0) scr = 2.0;
        else if (strcmp(score, "D+") == 0) scr = 1.5;
        else if (strcmp(score, "D0") == 0) scr = 1.0;
        else if (strcmp(score, "F") == 0) scr = 0.0;
        else continue;

        sum1 += grade* scr;
        sum2 += grade;
    }
    avg = sum1 / sum2;
    printf("%f", avg);
    return 0;
}