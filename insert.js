        var friend = ['Tom', 'Julie', 'Paul', 'Lisa', 'Jack'];
        var age = [19, 17, 24, 21, 20];
        var sex = ["남", "여", "남", "여", "남"];
        console.log(friend.length+"명이 입력되었습니다.");
        for(var i=0; i<friend.length; i++)        
        {
            console.log(friend[i] + "," + age[i] + "," + sex[i]);
        }