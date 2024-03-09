const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let price=document.querySelectorAll('.price')
	let sum=0;
	for(let i=0;i<price.length;i++)
		{
			sum=price[i]+sum;
		}
	return sum;
};

getSumBtn.addEventListener("click", getSum);

