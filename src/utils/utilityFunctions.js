
export function createDate(dateStr) {

    let date = new Date(dateStr);
    let day = date.getDate();
    let month = date.toLocaleString('default', { month: 'long' });
    let year = date.getFullYear();
    let dateFormatted = `${day} ${month} ${year}`;

    return dateFormatted;
}
