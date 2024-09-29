Solved the oneight issue to read 1 and 8:
Handle the special case of "eight" when preceded by "e":
let result = str.replace(/(?<=e)ight/gi, "8");
