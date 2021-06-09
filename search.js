var friend = ['Tom', 'Julie', 'Paul', 'Lisa', 'Jack'];
var age = [19, 17, 24, 21, 20];
var sex = ["남", "여", "남", "여", "남"];
console.log("Lisa를 검색합니다.");
for(var i=0; i<friend.length; i++)        
{
    if(friend[i] == "Lisa")
    {
        console.log(friend[i] + "," + age[i] + "," + sex[i]);
    }
}