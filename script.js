
function change_day(day){
    const date = new Date();
    const current_day = date.getDate();
    let different_day =  current_day - day;
    if (different_day < 0){
        different_day = different_day + 30;
    }
    document.querySelector("#result-days").innerHTML = different_day;
}

function change_month(month){
    const day = document.querySelector('#day-box').value;
    const date = new Date();
    const current_day = date.getDate();
    let different_day =  current_day - day;
    const current_month = new Date().getMonth() + 1;
    let different_month = current_month - month;
    if (different_day < 0){
        different_month--;
    }
    if (different_month < 0){
        different_month = different_month + 12;
    }
    document.querySelector('#result-months').innerHTML = different_month
}

function change_year(year){
    const month = document.querySelector('#month-box').value;
    const current_month = new Date().getMonth() + 1;
    let different_month = current_month - month;
    const current_year = new Date().getFullYear();
    let different_year = current_year - year;
    if (different_month < 0){
        different_year--
    }
    document.querySelector('#result-years').innerHTML = different_year;
}




