#include <iostream>
#include <cmath>
using namespace std;
int main() {
    string N;
    int B;
    cin >> N;
    cin >> B;
    int len = N.length();
    int a,b;
    int sum = 0;
    for (int i = 0; i < len; i++) {
        if ('0' <= N[i] && N[i] <= '9') {
            a = N[i] - '0';
        }
        else if('A' <= N[i] && N[i] <= 'Z') {
            a = N[i] - 'A' + 10;
        }
        b = pow(B, len - 1 - i);
        sum += a * b;
    }
    cout << sum;
    return 0;
}