function isPalindrome(s: string): boolean {
  // Case if length of 1
  if (s.length == 1) {
    return true;
  }

  const arr = s.split("");

  for (let i = 0; i < s.length; ++i) {
    if (s.charCodeAt(i) <= 90 && s.charCodeAt(i) >= 65) {
      arr[i] = String.fromCharCode(s.charCodeAt(i) + 32); // Change capital letters to lowercase
    } else if (
      s.charCodeAt(i) < 48 ||
      s.charCodeAt(i) > 122 ||
      (s.charCodeAt(i) > 57 && s.charCodeAt(i) < 97)
    ) {
      arr[i] = ""; // remove non-alphanumeric values
    }
  }

  const arrWithoutSpace = arr.filter((char) => char !== "");

  // Case: length is greater than 1
  // use 2 counters to work inwards towards the centre
  // if left counter >= right counter return true
  // if not match, return false;
  let l: number = 0;
  let r: number = arrWithoutSpace.length - 1;
  while (l < r) {
    if (arrWithoutSpace[l] != arrWithoutSpace[r]) {
      return false;
    }
    ++l;
    --r;
  }

  return true;
}

let temp: boolean = isPalindrome("A man, a plan, a canal: Panama");
console.log(temp);
