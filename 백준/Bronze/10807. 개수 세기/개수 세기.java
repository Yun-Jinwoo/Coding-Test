import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] a = new int[N];
        int cnt = 0;
        
        for(int i = 0; i<N; i++){
            a[i] = sc.nextInt();
        }
        int b = sc.nextInt();
        
        for(int i = 0; i < a.length; i++)
            if(b==a[i])
                cnt++;
        System.out.println(cnt);
    }
}