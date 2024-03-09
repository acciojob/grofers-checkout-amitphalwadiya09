const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    let prices = document.querySelectorAll('.price');
    let sum = 0;

    for(let i=0;i<prices.length;i++) {
        sum += Number(prices[i].textContent);
    }

    let table = document.querySelector('table');
    let newRow = table.insertRow(-1);
	newRow.className="ans"
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.textContent = "Total Price";
    cell2.textContent = sum;

    return sum;
};

getSumBtn.addEventListener("click", getSum);
