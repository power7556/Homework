var friend = function(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var friends = [];
friends.push(new friend("Tom", 19, "남"));
friends.push(new friend("Julie", 17, "여"));
friends.push(new friend("Paul", 24, "남"));
friends.push(new friend("Lisa", 21, "여"));
friends.push(new friend("Jack", 20, "남"));
friends.push(new friend("Sam", 22, "남"));
console.log("Paul과 싸워 더이상 친구가 아니게 되었습니다.");
for(var i=0; i<friends.length; i++)
{
    if(friends[i].name == "Paul")
    {
        friends.splice(i, 1);
    }
}
console.log("현재 친구 목록");
for(var i=0; i<friends.length; i++)
{
    console.log(friends[i].name+","+friends[i].age+","+friends[i].gender);
}