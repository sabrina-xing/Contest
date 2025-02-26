function isSubsequence(s: string, t: string): boolean {
    const s_len = s.length;
    if (s.length == 0) { return true; }

    const t_len = t.length

    let count: number = 0;
    for (let i: number = 0; i < t_len; i++) {
        if (t[i] == s[count]){
            if (count < s_len) {
                ++count;
            }
            
            if (count == s_len) {
                return true;
            }
        }
    }

    return false;
};

isSubsequence("abc", "adffdbdfdc");