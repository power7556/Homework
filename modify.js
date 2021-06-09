var friend = ['Tom', 'Julie', 'Paul', 'Lisa', 'Jack'];
var age = [19, 17, 24, 21, 20];
var sex = ["남", "여", "남", "여", "남"];
console.log("Sam이라는 새로운 친구를 사귀게 되었습니다.");
friend.push("Sam");
age.push("22");
sex.push("남");
console.log("현재 친구 목록");
for(var i=0; i<friend.length; i++)        
{
    console.log(friend[i] + "," + age[i] + "," + sex[i]);
}