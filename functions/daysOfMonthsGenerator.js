export default function getLastNDays(n) {
    let days = [];
    for(let i=n-1; i>=0; i--) {
      const day = new Date();
      day.setDate(day.getDate() - i);
      days.push(day.getDate());
    }
    return days;
  }