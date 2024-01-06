#include <iostream>
using namespace std;
int main() {
	int arr[5];
	int sum = 0;
	for (int i = 0; i < 5; i++) {
		cin >> arr[i];
		sum += arr[i];
	}
	for (int i = 0; i < 5; i++) {
		for (int j = i + 1; j < 5; j++) {
			if (arr[i] > arr[j]) {
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	int avg = sum / 5;
	int mid = arr[2];
	cout << avg << endl;
	cout << mid << endl;
	return 0;
}