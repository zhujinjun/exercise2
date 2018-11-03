function add(a, b) {
    /*如果遇到不安全的大数精度丢失问题，一般有如下解决办法
    1、bigNumber
    2、long.js
    */
    //TODO 此处是网上一个实现例子，处理很巧妙
    let res = '',
        c = 0;
    a = a.split(''); //把传进来的数字进行切割
    b = b.split(''); //把传进来的数字进行切割
    while (a.length || b.length || c) { //确保加到最后一位
        c += ~~a.pop() + ~~b.pop(); //~拿组数最后一位进行
        res = c % 10 + res;
        c = c > 9;
    }
    return res.replace(/^0+/, '');
}
module.exports = add