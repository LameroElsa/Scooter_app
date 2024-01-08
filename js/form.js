const numbers = document.querySelectorAll('.number')
console.log("get number",numbers);
numbers.forEach(counter=>{
    counter.innerText = 0;
    const upDateNumber = () =>{
        // 獲取每一個類別名為number的data-target
        const target = Number(counter.getAttribute('data-target'))
        // get current value from div
        const d = Number(counter.innerText)
        // 加數值的快慢
        const increment = target/200
        // 當數字小於最大值時
        if(d < target){
            counter.innerText = '${Math.ceil(d+increment)}'
            // 1ms重新調用，不然會在第一次運行完就結束
            setTimeout(upDateNumber, 1)
        }else{
            counter.innerText = target
        }
    }
    upDateNumber()
})