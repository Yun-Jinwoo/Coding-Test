#include <iostream>
#include <vector>
using namespace std;

void merge_sort(vector<pair<int,int>>& A, int first, int last) {
	if (first >= last) return;
	int middle = (first + last) / 2;
	merge_sort(A, first, middle);
	merge_sort(A, middle+1, last);
	vector<pair<int,int>> B;
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
	vector<pair<int, int>> vec;
	int x, y;
	for (int i = 0; i < n; i++) {
		cin >> x >> y;
		vec.push_back({ x,y });
	}
	merge_sort(vec, 0, n - 1);
	
	for (auto a : vec) {
		cout << a.first << " " << a.second << "\n";
	}
	return 0;
}
