function maro(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let currentString = "";
    if (i % 2 === 0) currentString += "Even";

    if (i % 2 !== 0) currentString += "Odd";
    if (currentString === "") currentString += i;
    result.push(currentString);
  }
  return result;
}
