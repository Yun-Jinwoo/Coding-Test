#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
	int n;
	cin >> n;
	vector<int> stair(n);
	for (int i = 0; i < n; i++) {
		cin >> stair[i];
	}
	vector<int> score(n+1);
	score[1] = stair[0];
	score[2] = stair[0] + stair[1];
	score[3] = max(stair[0] + stair[2], stair[1] + stair[2]);
	for (int i = 4; i <= n; i++) {
		score[i] = max(score[i - 3] + stair[i-2] + stair[i - 1], score[i - 2] + stair[i - 1]);
	}
	cout << score[n];
}