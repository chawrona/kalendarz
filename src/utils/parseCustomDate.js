export default function parseCustomDate(dateString) {
    const [day, month, year] = dateString.split("-");
    return Date.parse(`${year}-${month}-${day}`);
}