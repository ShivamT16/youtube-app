export const convertStringsIntoLink = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return text?.split(urlRegex)?.map((part, index) => {

       return urlRegex.test(part) ?
          <a key={index} href={part} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#065fd4"}}>
            {part}
          </a> : part
    });
    
};

