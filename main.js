dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

MicroModal.init();

const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const day = document.getElementById('day');
const openModalBtn = document.getElementById('openModal');
const saveTimezoneBtn = document.getElementById('saveTimezone');
const timezoneSelect = document.getElementById('timezoneSelect');

//Default Timezone
let selectedTimezone = 'UTC';

//Fetch all available timezone
const timezones = Intl.supportedValuesOf('timeZone')

//Function to update the time based on the selected timezone
function updateTime()
{
    const now = dayjs().tz(selectedTimezone);
    day.textContent = now.format('DD MMM YYYY');
    hour.textContent = now.format('HH');
    minute.textContent = now.format('mm');
    second.textContent = now.format('ss');
}

//Event listener for the modal open button
openModalBtn.addEventListener('click', () =>
{
    //Populate dropdown dynamically
    timezoneSelect.innerHTML = '';
    timezones.forEach((timezone) =>
    {
        const option = document.createElement('option');
        option.value = timezone;
        option.textContent = timezone;
        timezoneSelect.appendChild(option);
    });
    
    MicroModal.show('timezoneModal');
});

//Event listener for the save timezone button
saveTimezoneBtn.addEventListener('click', () =>
{
    selectedTimezone = timezoneSelect.value;
    MicroModal.close('timezoneModal');
    
    //Update time immediately after selecting timezone
    updateTime();
});

// function updateTime()
// {
//     const today = dayjs();
//     const formattedDate = today.format('DD MMM YYYY');
//     const h = today.format('HH');
//     const min = today.format('mm');
//     const sec = today.format('ss');

//     day.textContent = formattedDate;
//     hour.textContent = h;
//     minute.textContent = min;
//     second.textContent = sec;
// }

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

