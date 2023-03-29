export const limitCharacters =(text,maxCharacters)=>{
    let limitedText
    if (text.length > maxCharacters) {
        limitedText = text.slice(0,maxCharacters)+ "..."; 
    } else limitedText = text

    return limitedText
}
