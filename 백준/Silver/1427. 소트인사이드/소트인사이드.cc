#include <iostream>
#include <vector>
using namespace std;

void merge_sort(vector<int>& A, int first, int last) {
	if (first >= last) return;
	int middle = (first + last) / 2;
	merge_sort(A, first, middle);
	merge_sort(A, middle+1, last);
	vector<int> B;
	int i = first;
	int j = middle + 1;
	while (i <= middle && j <= last) {
		if (A[i] <= A[j]) {
			B.push_back(A[i]);
			i++;
		}
		else {
			B.push_back(A[j]);
			j++;
		}
	}
	for (; i <= middle; i++) {
		B.push_back(A[i]);
	}
	for (; j <= last; j++) {
		B.push_back(A[j]);
	}
	for (int k = first; k <= last; k++) {
		A[k] = B[k - first];
	}
}

int main() {
	int num;
	cin >> num;
	vector<int> vec;
	int n = 0;
	while (num != 0) {
		vec.push_back(num % 10);
		num /= 10;
		n++;
	}
	
	merge_sort(vec, 0, n - 1);
	for (int i = n - 1; i >= 0; i--) {
		cout << vec[i];
	}
	return 0;
}
