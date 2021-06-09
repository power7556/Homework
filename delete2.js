var friend = ['Tom', 'Julie', 'Paul', 'Lisa', 'Jack', 'Sam'];
var age = [19, 17, 24, 21, 20, 22];
var sex = ["남", "여", "남", "여", "남", "남"];
console.log("Paul과 싸워 더이상 친구가 아니게 되었습니다.");
friend.splice(3, 1);
age.splice(3, 1);
sex.splice(3, 1);
for(var i=0; i<friend.length; i++)        
{
    console.log(friend[i] + "," + age[i] + "," + sex[i]);
}