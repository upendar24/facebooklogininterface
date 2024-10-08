const dropdowned=document.getElementsByClassName('dropdown3')[0];
for(let year=1905 ;year<=2024;year++){
    const option1=document.createElement('option');
    option1.text=year;
    dropdowned.appendChild(option1);
}
const dropdowned1=document.getElementsByClassName('dropdown1')[0];
for(let date=1;date<=30;date++){
    const option2=document.createElement('option');
    option2.text=date;
    dropdowned1.appendChild(option2);
}
document.getElementById('signup').onclick=function(){
    alert('Signed Up');
}
