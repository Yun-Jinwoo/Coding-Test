#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

bool compare(pair<int, string> a, pair<int, string> b) {
	return a.first < b.first;
}

int main() {
	int n;
	cin >> n;
	vector<pair<int,string>> vec;
	string str;
	int age;
	for (int i = 0; i < n; i++) {
		cin >> age >> str;
		vec.push_back({ age,str });
	}
	stable_sort(vec.begin(),vec.end(),compare);

	for (auto a : vec) {
		cout << a.first << " " << a.second << "\n";
	}
	return 0;
}