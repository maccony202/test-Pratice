const stringLength = (string) => {
    strlength = string.replace(/\s/g, "").length;
    if(strlength === 0){
        return "Invalid string";
    }else if(strlength > 10){
        return "String is too long";
    }else {
        return strlength;
    }
};
module.exports = stringLength;