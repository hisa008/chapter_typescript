// <Test questions>
// 自販機を想像してください。XXXX円のものを購入しようとしてYYYY円が投入されました。
// お釣りを返すためにそれぞれの硬貨を何個ずつ返すべきかを決めるプログラムを書いてください。
// Input例 (price: 880, paid: 1000)
// Output例 {“10”: 2, “100”: 1} 
function get_coin_inventory(coin_inventory) {
    var five_hundred = 3; //500yen : 3枚
    var hundred = 5; //100yen : 5枚
    var fifty = 10; // 50yen : 10枚
    var ten = 50; // 10yen : 50枚
    if (coin_inventory == 500) //引数の値によって返す値を判別
        return five_hundred;
    else if (coin_inventory == 100)
        return hundred;
    else if (coin_inventory == 50)
        return fifty;
    else if (coin_inventory == 10)
        return ten;
}
function ft_change(price, paid) {
    var change; //お釣りを格納する変数 (paid - price)
    var coin = [500, 100, 50, 10]; //お釣りで使用される硬貨[500yen, 100yen, 50yen, 10yen]
    var sheets = [0, 0, 0, 0]; //お釣りで出てくる各硬貨の枚数[500yen, 100yen, 50yen, 10yen](初期値として0を代入)
    var i = 0; //while loopを回す際に使用する変数
    var error_message = "Error : Lack of change"; //お釣りが不足している際に表示するエラーメッセージ
    change = paid - price; //お釣りの計算
    while (i < 4 && change != 0) { //500yen,100yen,50yem,10yenの4パターンの計算が必要な為、4回ループ(changeが0になった時点でloop終了)
        sheets[i] = Math.min(Math.floor(change / coin[i]), get_coin_inventory(coin[i]));
        change = change - sheets[i] * coin[i];
        i++;
    }
    if (change == 0) //自販機内の硬貨でお釣りが支払える場合
        return sheets;
    else
        return error_message; //自販機内の硬貨でお釣りが支払えない場合
}
console.log(ft_change(120, 1000)); //自販機内の硬貨でお釣りが支払える場合は各硬貨の枚数を表示。支払えない場合はエラーメッセージを表示。
// --------以下は本日面接時に解答したコードになります--------
// #include <stdio.h>
// void ft_paid(int price, int paid){
// 	int five_hundred;
// 	int hundred;
// 	int fifty;
// 	int ten;
// 	int change;
// 	change = paid - price;
// five_hundred = min(change / 500);
// 	change = change - five_hundred * 500;
// 	hundred = change / 100;
// 	change = change - hundred * 100;
// 	fifty = change / 50;
// 	change = change - fifty * 50;
// 	ten = change / 10;
// 	printf("five_hundred:%d hundred:%d fifty:%d  ten:%d", five_hundred, hundred, fifty, ten);
// }
// int main(void){
// 	ft_paid(120, 1000);
// 	return 0;
// }
