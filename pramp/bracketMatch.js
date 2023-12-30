const bracketMatch = (text) => {
    const stack = [];
    let count = 0;
    if(text.length === 0) return 0;
    for(let i = 0; i < text.length; i++) {
        if(text[i] === '(') {
            stack.push(text[i]);
        } else if(text[i] === ')') {
            if(stack.length === 0) {
                count++;
            } else {
                stack.pop();
            }
        }
    }
    return count + stack.length;
}

// console.log(bracketMatch('(()')); // 1

module.exports = bracketMatch;