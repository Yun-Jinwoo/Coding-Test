#include <iostream>
using namespace std;
int main() {
	int n;
	cin >> n;
	int five = n / 5;
	int three = 0;
	int temp;
	while (five >= 0) {
		temp = n;
		temp -= five * 5;
		if (temp % 3 == 0) {
			three = temp / 3;
			break;
		}
		else {
			five -= 1;
		}
	}
	if (five >= 0) {
		int sum = five + three;
		cout << sum;
	}
	else {
		cout << "-1";
	}
	return 0;
}