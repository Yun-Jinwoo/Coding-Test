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
	int n;
	cin >> n;
	vector<int> vec(n);
	for (int i = 0; i < n; i++) {
		cin >> vec[i];
	}
	merge_sort(vec, 0, n - 1);
	for (int num : vec) {
		cout << num << '\n';
	}
	return 0;
}
