function canConstruct(ransomNote: string, magazine: string): boolean {
    // Case where ransomNote.length > magazine.length, return false
    if (ransomNote.length > magazine.length) {
        return false;
    }

    // Iterate through magazine and ransom note to store the count in a hashmap
    const hashmap = new Map<string, number>();

    // All values start at 0 (get -> undefined), if in ransom note +1, if in magazine -1
    for (const char of ransomNote) {
        hashmap.set(char, 1 || (hashmap.get(char) + 1));
    }

    for (const char of magazine) {
        if (hashmap.get(char) !== undefined) {
            hashmap.set(char, hashmap.get(char) - 1);
        }
    }
    
    let isEnough: boolean = true;
    hashmap.forEach((value, key) => {
        if (value > 0) {
            isEnough = false;
            return;
        }
    });

    if (isEnough) {
        return true;
    }

    return false;
};

console.log(canConstruct("aab", "ab"));