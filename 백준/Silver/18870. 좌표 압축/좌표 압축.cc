#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
	int n;
	cin >> n;
	int num;
	vector<int> vec;
	for (int i = 0; i < n; i++) {
		cin >> num;
		vec.push_back(num);
	}
	vector<int> vect(vec);
	sort(vect.begin(), vect.end());
	vect.erase(unique(vect.begin(), vect.end()), vect.end());
	for (int i = 0; i < n; i++) {
		auto it = lower_bound(vect.begin(), vect.end(), vec[i]);
		cout << it - vect.begin() << ' ';
	}

	return 0;
}