#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

bool cmp(string a, string b) {
	if (a.length() == b.length()) {
		return a < b;
	}
	else {
		return a.length() < b.length();
	}
}

int main() {
	int n;
	cin >> n;
	vector<string> vec;
	string str;
	for (int i = 0; i < n; i++) {
		cin >> str;
		vec.push_back(str);
	}
	sort(vec.begin(), vec.end(), cmp);
	for (int i = 0; i < n; i++) {
		if (i != 0) {
			if (vec[i] == vec[i - 1]) {
				continue;
			}
		}
		cout << vec[i] << "\n";
	}
	return 0;
}