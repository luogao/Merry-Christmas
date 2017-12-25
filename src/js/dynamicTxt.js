const dynamicTxtFn = function() {
    return new Promise((resolve, reject) => {
        let timeout = 40
        let element = document.getElementById('dynamicTxt').getElementsByClassName('txt')[0];
        let fullString = `老婆，圣诞节快乐！  
        <br/>
        <span style="padding-left:.75rem;"/>转眼间，一年即将结束。回想历历在目，从你到上海那天起，我们的生活发生了翻天覆地的变化。这一年来，很感恩老婆你对我的照顾。因为有你在我身边督促我，鼓励我，安慰我，鞭策我。我过的很幸福。在我眼里酷酷的你，内心却住着一个小仙女🧚。我逐渐熟悉了你的喜怒哀乐。更重要的是我习惯了有你的生活。日子无非柴米油盐酱醋茶，但却因你大不相同。感恩这日子里所有的事都有你在我身旁。愿往后彼此亲密无间，平淡生活仍能甜甜蜜蜜。
        <br/>
        <span style="padding-left:.75rem;"/>圣诞节快乐，爱你!
        `
        let showString = '';
        let showTxtFn = () => {
            if (showString.length < fullString.length) {
                showString = fullString.substring(0, showString.length + 1)
                element.innerHTML = showString
                setTimeout(showTxtFn, timeout);
            } else {
                resolve()
            }
        }
        showTxtFn()
    })
}

export default dynamicTxtFn