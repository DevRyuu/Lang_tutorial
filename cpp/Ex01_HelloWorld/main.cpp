#include <iostream> // iostream이라는 헤더를 포함(include)

using namespace std; // 네임스페이스 설명 std::cout

int main() // entry point
{
    // 주석(comment) 다는 방법
 
    cout << "Hello, World!" << endl;
    // printf("Hello World!!! by printf");

    // 입출력에 대해서는 뒤에 다시 나와요.
    char user_input[100];
    cin >> user_input;
    cout << user_input;

    return 0;
}

/*
g++ d:\github\Cpp\Ex01_HelloWorld\main.cpp -o HelloWorld

c++ 메모리 레이아웃 https://www.geeksforgeeks.org/memory-layout-of-c-program/?ref=gcse

(base) PS D:\github\Cpp> size .\HelloWorld.exe
   text    data     bss     dec     hex filename
  11128    1920     384   13432    3478 .\HelloWorld.exe
*/