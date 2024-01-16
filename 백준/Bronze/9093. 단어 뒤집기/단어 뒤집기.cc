#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
	int n;
	cin >> n;
	string sentence;
	vector<string> str;
	vector<char> word;
	cin.ignore();
	for (int i = 0; i < n; i++) {
		str.clear();
		getline(cin, sentence);
		for (int j = 0; j <= sentence.size(); j++) {
			if (sentence[j] == ' ' or j == sentence.size()) {
				string words(word.begin(), word.end());
				str.push_back(words);
				word.clear();
				continue;
			}
			else {
				word.push_back(sentence[j]);
			}
		}
		for (string a : str) {
			reverse(a.begin(), a.end());
			cout << a << " ";
		}
		cout << "\n";
	}
	
	return 0;
}