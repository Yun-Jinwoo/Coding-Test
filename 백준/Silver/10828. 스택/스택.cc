#include <iostream>
using namespace std;

#define MAX_STACK 10000

class Stack {
public:
	int size = 0;
	int items[MAX_STACK] = { 0 };

	void push(int a) {
		items[size] = a;
		size++;
	}
	void pop() {
		if (size == 0) {
			cout << "-1\n";
		}
		else {
			size--;
			cout << items[size] << "\n";
		}
	}
	void getSize() {
		cout << size << "\n";
	}
	void isEmpty() {
		int b = size == 0 ? 1 : 0;
		cout << b << "\n";
	}
	void top() {
		if (size == 0) {
			cout << "-1\n";
		}
		else {
			cout << items[size - 1] << "\n";
		}
	}
};


int main() {
	int n;
	cin >> n;
	Stack stack;
	string str;
	int num;
	for (int i = 0; i < n; i++) {
		cin >> str;
		if (str == "push") {
			cin >> num;
			stack.push(num);
		}
		else if (str == "pop") {
			stack.pop();
		}
		else if (str == "size") {
			stack.getSize();
		}
		else if (str == "empty") {
			stack.isEmpty();
		}
		else if (str == "top") {
			stack.top();
		}
	}
}