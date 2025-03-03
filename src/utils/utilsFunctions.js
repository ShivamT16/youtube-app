export const convertStringsIntoLink = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return text?.split(urlRegex)?.map((part, index) => {

       return urlRegex.test(part) ?
          <a key={index} href={part} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#065fd4"}}>
            {part}
          </a> : part
    });
    
};

export const convertIntoMillions = (number) => {

  if((number)?.toString()?.length > 6) {
    return Math.floor(number / 1000000) + 'M';
   }
   else if((number)?.toString()?.length > 3) {
    return Math.floor(number / 1000) + 'K'
   }
   else{
    return number;
   }
}

export const timeSinceCreation = (dateString) => {
  const createdDate = new Date(dateString);
  const currentDate = new Date();

  const diffInMilliseconds = currentDate - createdDate;

  const diffInSeconds = diffInMilliseconds / 1000;
  const diffInMinutes = diffInSeconds / 60;
  const diffInHours = diffInMinutes / 60;
  const diffInDays = diffInHours / 24;

  if (diffInDays < 1) {
    if (diffInHours < 1) {
      return `${Math.floor(diffInMinutes)} minute${Math.floor(diffInMinutes) !== 1 ? 's' : ''} ago`;
    }
    return `${Math.floor(diffInHours)} hour${Math.floor(diffInHours) !== 1 ? 's' : ''} ago`;
  }

  if (diffInDays < 30) {
    return `${Math.floor(diffInDays)} day${Math.floor(diffInDays) !== 1 ? 's' : ''} ago`;
  }

  const years = Math.floor(diffInDays / 365); 
  const remainingDays = diffInDays % 365;

  const months = Math.floor(remainingDays / 30);

  if (years === 0) {
    return `${months} month${months === 1 ? '' : 's'} ago`;
  }

  const fractionalYear = months / 12;

  const totalYears = years + fractionalYear;

  if (totalYears % 1 === 0) {
    return `${years} year${years === 1 ? '' : 's'} ago`;
  }

  return totalYears.toFixed(1) + " years ago"
} 