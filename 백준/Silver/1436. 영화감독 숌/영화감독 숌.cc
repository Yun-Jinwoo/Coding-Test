#include <iostream>
using namespace std;
int main() {
	int n; // 입력받는 수
	cin >> n;
	int cnt = 0; // 몇번째인지
	int val = 0; // 숫자값 (666이 포함된)
	int temp; // 숫자값 나눈거 저장할 변수
	while (n != cnt) {
		val++;
		temp = val;
		while (temp != 0) {
			if (temp % 1000 == 666) {
				cnt++;
				break;
			}
			else {
				temp = temp / 10;
			}
		}
	}
	cout << val;
}