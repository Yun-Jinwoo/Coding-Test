#include <iostream>
using namespace std;
int main() {
    int B;
    long long N;
    cin >> N;
    cin >> B;
    char A[100];
    int i = 0;
    int b;
    while (N != 0) {
        b = N % B;
        if (0 <= b && b <= 9) {
            A[i] = b + '0';
        }
        else if (10 <= b && b <= 35) {
            A[i] = b - 10 + 'A';
        }
        N /= B;
        i++;
    }
    i--;
    for (; i >= 0; i--) {
        cout << A[i];
    }
    return 0;
}