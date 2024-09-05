function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  const numer = numer1 * denom2 + numer2 * denom1;
  const denom = denom1 * denom2;
  const gcd = (den, num) => {
    return den % num === 0 ? num : gcd(num, den % num);
  };
  console.log(gcd(denom, numer));
  answer = [numer / gcd(denom, numer), denom / gcd(denom, numer)];
  return answer;
}