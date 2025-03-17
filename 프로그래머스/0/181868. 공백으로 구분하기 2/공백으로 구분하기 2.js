function solution(my_string) {
    const splitted = my_string.split(" ");
    const answer = splitted.filter(el => el !== "");
    return answer;
}