const dynamicTxtFn = function() {
    return new Promise((resolve, reject) => {
        let timeout = 40
        let element = document.getElementById('dynamicTxt').getElementsByClassName('txt')[0];
        let testString = `请注意：以上两句声明中的宋体和微软雅黑不应该调换（尽管调换了也不会发生错误），这是因为从字体的式样来看，微软雅黑是非衬线的，而宋体才是衬线的。然而中文并不像英文那样严格区分字体族，所以这一点在实际应用当中并不那么重要。

        别忘了照顾不同的操作系统
        作为一个 Web 开发者，你理应对 Windows, Mac OS, Linux 家族等常用操作系统里的系统字体有足够的了解，特别是中文。在这里，我们假设目标网站要同时给予 windows 用户和 mac 用户最好的字体体验，于是我们可以这样声明：
        
        Font-family: Helvetica, Tahoma, Arial, STXihei, “华文细黑”, “Microsoft YaHei”, “微软雅黑”, sans-serif
        
        这句声明都做到哪些事情呢？让我们一一说明（括号内代表其对应的目标操作系统）：
        ;`
        let showString = '';
        let showTxtFn = () => {
            if (showString.length < testString.length) {
                showString = testString.substring(0, showString.length + 1)
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