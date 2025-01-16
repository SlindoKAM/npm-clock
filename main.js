const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const day = document.getElementById('day');

function updateTime()
{
    const today = dayjs();
    const formattedDate = today.format('DD MMM YYYY');
    const h = today.format('HH');
    const min = today.format('mm');
    const sec = today.format('ss');

    day.textContent = formattedDate;
    hour.textContent = h;
    minute.textContent = min;
    second.textContent = sec;
}

//Update time every second
setInterval(updateTime, 1000);

//Initialize time using (Update function)
updateTime();

// let monthName = [
//     'Jan',
//     'Feb',
//     'Mar',
//     'Apr',
//     'May',
//     'Jun',
//     'Jul',
//     'Aug',
//     'Sep',
//     'Oct',
//     'Nov',
//     'Dec',
// ]

// const clock = setInterval(function time()
// {
//     let today = new Date();
//     let d = today.getDate();
//     let m = today.getMonth();
//     let y = today.getFullYear();
//     let h = today.getHours();
//     let min = today.getMinutes();
//     let sec = today.getSeconds();

//     day.innerHTML = `${d} ${monthName[m]} ${y}`;
//     hour.textContent = `${h}`;
//     minute.textContent = `${min}`;
//     second.textContent = `${sec}`;
// });

