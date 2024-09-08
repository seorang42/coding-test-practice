function solution(arr, queries) {
  var answer = arr;
  queries.forEach((el) => {
      for (let i = el[0]; i <= el[1]; i++) {
          if (i % el[2] === 0) {
              answer[i] += 1;
          }
      }
  });
  return answer;
}