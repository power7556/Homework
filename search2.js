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
console.log("Lisa를 검색합니다.");
for(var i=0; i<friends.length; i++) 
{
    if(friends[i].name == "Lisa")
    {
        console.log(friends[i].name+","+friends[i].age+","+friends[i].gender);
    }
}