const sockMerchant = (n, ar) => {
    // pseudo code
    // 1. create a hash table
    // 2. iterate through the array
    // 3. if the element is not in the hash table, add it
    // 4. if the element is in the hash table, remove it and add 1 to the count
    // 5. return the count
    
    // const hash = {};
    // let count = 0;
    
    // for (let i = 0; i < n; i++) {
    //     if (hash[ar[i]]) {
    //         delete hash[ar[i]];
    //         count++;
    //     } else {
    //         hash[ar[i]] = true;
    //     }
    // }

    const array = [];
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (array[ar[i]]) {
            array[ar[i]] = false;
            count++;
        } else {
            array[ar[i]] = true;
        }
    }
    
    return count;
}