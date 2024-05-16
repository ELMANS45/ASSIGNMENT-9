var quote=["“Be yourself; everyone else is already taken“","So many books, so little time.”","“A room without books is like a body without a soul.”","“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”","“You only live once, but if you do it right, once is enough.”"]
var author=["― Oscar Wilde","― Frank Zappa","― Marcus Tullius Cicero","― Bernard M. Baruch","― Mae West"]
var i = 0;
var cartona=""
var cartona2=""
var repeat =""
var l = 0;
function newQuote(){
    i = Math.ceil(Math.random()*4);
    cartona=`${quote[i]}`
    cartona2=`${author[i]}`
    if(cartona!=repeat){
        document.getElementById('qou').innerHTML=cartona
        document.getElementById('author').innerHTML=cartona2
        repeat = cartona
    }
    else{
        l=i
        while(l==i){
            l=Math.ceil(Math.random()*4);
        }
        cartona=`${quote[l]}`
        cartona2=`${author[l]}`
        document.getElementById('qou').innerHTML=cartona
        document.getElementById('author').innerHTML=cartona2
        repeat = cartona
    }
}