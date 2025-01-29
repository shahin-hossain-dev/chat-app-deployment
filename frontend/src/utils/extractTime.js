const extractTime = (dateString) => {
  const date = new Date(dateString).toLocaleString().split(" ")[1].split(":");
  const hour = padZero(date[0]);
  const minutes = padZero(date[1]);

  return `${hour}:${minutes}`;
};

const padZero = (number) => {
  return number.toString().padStart(2, 0);
};

export default extractTime;
