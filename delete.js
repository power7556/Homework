var friend = ['Tom', 'Julie', 'Paul', 'Lisa', 'Jack'];
var age = [19, 17, 24, 21, 20];
var sex = ["남", "여", "남", "여", "남"];
console.log("Jack님이 떠났습니다.");
friend.pop('Jack');
age.pop(20);
sex.pop("남");

for(var i=0; i<friend.length; i++)        
{
    console.log(friend[i] + "," + age[i] + "," + sex[i]);
}