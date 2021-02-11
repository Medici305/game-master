// Base_URL
const base = 'https://api.rawg.io/api/';
// page_size, dates, ordering

// Get Day
const getDay = () => {
    const day = new Date().getDate();
    return day < 10 ? `0${day}` : day;
}

// Get Month
const getMonth = () => {
    const month = new Date().getMonth() + 1;
    return month < 10 ? `0${month}` : month;
}

const year = new Date().getFullYear();
const month = getMonth();
const day = getDay();
const currentDate = `${year}-${month}-${day}`;
const prevDate = `${year - 1}-${month}-${day}`;
const futureDate = `${year + 1}-${month}-${day}`;


// List All games
export const game_URL = `${base}games`;
// Highest rating ordering
export const rating_URL = `${base}games?dates=${prevDate},${currentDate}&ordering=-rating&page_size=12`;
// latest released
export const latest_URL = `${base}games?dates=${prevDate},${currentDate}&ordering=released&page_size=12`;
// Order by Name A-Z
export const name_URL = `${base}games?dates=${prevDate},${currentDate}&ordering=name&page_size=12`;