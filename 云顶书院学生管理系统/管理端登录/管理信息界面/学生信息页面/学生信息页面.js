data = [
]

const res = axios.get("http://wrgk8g.natappfree.cc/auth-serve/student/queryList")
    .then(function (response) {
        data = response.data;

        var all = document.getElementsByClassName("all");
        let i = 0;
        for (i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            all[0].appendChild(div);
            var text = document.createElement("div");
            div.appendChild(text);
            var detail = document.createElement("button");
            div.appendChild(detail);
            detail.innerHTML = "详细信息";
            detail.onclick = function () {
                location.href = "../../../学生端登录/学生信息界面/学生信息/基本信息.html";//之后换成学生信息页面..
            }
            text.innerHTML = "姓名:" + data[i].nickName + "&nbsp&nbsp&nbsp&nbsp学号:" + data[i].studentNo + "&nbsp&nbsp&nbsp&nbsp方向:" + data[i].academyDes + "&nbsp&nbsp&nbsp&nbsp期数:" + data[i].duringTime;

        }

        var submmit = document.getElementById("submmit");
        submmit.onclick = function () {
            var search = document.getElementById("search");
            var stuId = search.value;
            all[0].innerHTML = "";
            for (i = 0; i < data.length; i++) {
                if (data[i].studentNo == stuId) {
                    var div = document.createElement("div");
                    all[0].appendChild(div);
                    var text = document.createElement("div");
                    div.appendChild(text);
                    var detail = document.createElement("button");
                    div.appendChild(detail);
                    detail.innerHTML = "详细信息";
                    detail.onclick = function () {
                        location.href = "../../../学生端登录/学生信息界面/学生信息/基本信息.html";

                    }
                    text.innerHTML = "姓名:" + data[i].nickName + "&nbsp&nbsp&nbsp&nbsp学号:" + data[i].studentNo + "&nbsp&nbsp&nbsp&nbsp方向:" + data[i].academyDes + "&nbsp&nbsp&nbsp&nbsp期数:" + data[i].duringTime;
                    i = data.length;
                }
                if (i == data.length - 1) {
                    var div = document.createElement("div");
                    div.innerHTML = "查无此人";
                    all[0].appendChild(div);

                }
            }
        }
        var back = document.getElementsByClassName("back");
        back[0].onclick = function () {
            location.href = "../管理信息界面.html";
        }
    })






var all = document.getElementsByClassName("all");
let i = 0;
for (i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    all[0].appendChild(div);
    var text = document.createElement("div");
    div.appendChild(text);
    var detail = document.createElement("button");
    detail.id = i;
    div.appendChild(detail);
    detail.innerHTML = "注销";
    detail.onclick = function () {
        location.href = "../../../学生端登录/学生信息界面/学生信息/基本信息.html";//之后换成学生信息页面..
        localStorage.setItem("stuid", data[detail.id].studentNo);
    }
    text.innerHTML = "姓名:" + data[i].nickName + "&nbsp&nbsp&nbsp&nbsp学号:" + data[i].studentNo + "&nbsp&nbsp&nbsp&nbsp方向:" + data[i].academyDes + "&nbsp&nbsp&nbsp&nbsp期数:" + data[i].duringTime;

}



