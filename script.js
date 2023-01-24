const container = document.querySelector(".data-container");

let upload = document.getElementById('uploadFile');
let output = document.getElementById('output');
let quantity, temp, content = "Học Javascript hay Web";

uploadFile.addEventListener('change', () => {
    let fr = new FileReader();
    fr.readAsText(uploadFile.files[0]);
    fr.onload = function () {
        let text = fr.result;
        quantity = text.split('\n').shift(); // Nhận hàng đầu tiên là số phần tử cần sắp xếp
        let txt = text.split('\n');
        let substring = txt[1].split(" ");
        temp = parseInt(quantity);
        // console.log(substring);
        // console.log("Độ dài của mảng là: " + substring.length)
        if (temp == substring.length) {
            const myElement = document.getElementById("container");
            myElement.innerHTML = '';
            for (let i = 0; i < substring.length; i++) {
                let value = substring[i];
                let bar = document.createElement("div");
                bar.classList.add("bar");
                bar.style.height = `${value * 3}px`;
                bar.style.transform = `translateX(${i * 30}px)`;
                let barLabel = document.createElement("label");
                barLabel.classList.add("bar__id");
                barLabel.innerHTML = value;
                bar.appendChild(barLabel);
                container.appendChild(bar);
            }
        } else {
            alert("Số phần tử không khớp với số lượng phần tử đã thiết lập! Vui lòng kiểm tra lại tập tin");
        }
        if (temp > 0) {
            document.getElementById('quantity').setAttribute("value", temp);
        } else {
            alert("Số lượng phần tử phải là số dương! Vui lòng kiểm tra lại tập tin");
        }
    }
});

function initialBars() {
    const myElement = document.getElementById("container");
    myElement.innerHTML = '';
    let number = document.getElementById('quantity').value;
    if (number == 0) {
        let num = 20;
        for (let i = 0; i < num; i += 1) {
            let value = Math.floor(Math.random() * 100) + 1;
            let bar = document.createElement("div");
            bar.classList.add("bar");
            bar.style.height = `${value * 3}px`;
            bar.style.transform = `translateX(${i * 30}px)`;
            let barLabel = document.createElement("label");
            barLabel.classList.add("bar__id");
            barLabel.innerHTML = value;
            bar.appendChild(barLabel);
            container.appendChild(bar);
        }
    }
    if (number != 0) {
        let number = document.getElementById('quantity').value;
        for (let i = 0; i < number; i += 1) {
            let value = Math.floor(Math.random() * 100) + 1;
            let bar = document.createElement("div");
            bar.classList.add("bar");
            bar.style.height = `${value * 3}px`;
            bar.style.transform = `translateX(${i * 30}px)`;
            let barLabel = document.createElement("label");
            barLabel.classList.add("bar__id");
            barLabel.innerHTML = value;
            bar.appendChild(barLabel);
            container.appendChild(bar);
        }
    }
}

function checkContainer() {
    if ($('#container').children().length == 0) {
        alert("Chưa có dữ liệu so sánh nào cần được làm mới! Vui lòng nhấn TẠO MỚI để tạo dữ liệu mới và thực hiện lại chức năng này!");
        return;
    }
    initialBars();
}

function checkContainerWithSort() {
    if ($('#container').children().length == 0) {
        alert("Chưa có dữ liệu so sánh nào có thể chạy được thuật toán! Vui lòng nhấn TẠO MỚI để tạo dữ liệu mới và thực hiện lại chức năng này!");
        return;
    }
}

async function CocktailSort(delay = 600) {
    let number = document.getElementById('quantity').value;
    backgroundImage = "linear-gradient(90deg, white, green)";
    if (number == 20 || number == "") {
        let bars = document.querySelectorAll(".bar");
        let swapped = true;
        let s = 0;
        let e = 20;
        while (swapped == true) {
            swapped = false;
            for (var i = s; i < e - 1; i++) {
                var value1 = parseInt(bars[i].childNodes[0].innerHTML);
                var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 100)
                );
                bars[i].style.backgroundImage = "linear-gradient(90deg, pink, red)";
                bars[i + 1].style.backgroundImage = "linear-gradient(90deg, pink, red)";
                if (value1 > value2) {
                    var temp1 = bars[i].style.height;
                    var temp2 = bars[i].childNodes[0].innerText;
                    await new Promise((resolve) =>
                        setTimeout(() => {
                            resolve();
                        }, 100)
                    );
                    bars[i].style.height = bars[i + 1].style.height;
                    bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
                    bars[i + 1].style.height = temp1;
                    bars[i + 1].childNodes[0].innerText = temp2;
                    swapped = true;
                }
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 100)
                );
                bars[i].style.backgroundImage = "linear-gradient(90deg, #1cb0f6, #05587f)";
                bars[i + 1].style.backgroundImage = "linear-gradient(90deg, #1cb0f6, #05587f)";

                await waitforme(100);
                if (flag == 1) await pauser();
            }
            if (swapped == false) {
                break;
            }
            swapped = false;
            e = e - 1;
            for (var i = e - 1; i >= s; i--) {
                var value1 = parseInt(bars[i].childNodes[0].innerHTML);
                var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 100)
                );
                bars[i].style.backgroundImage = "linear-gradient(90deg, pink, red)";
                bars[i + 1].style.backgroundImage = "linear-gradient(90deg, pink, red)";
                if (value1 > value2) {
                    var temp1 = bars[i].style.height;
                    var temp2 = bars[i].childNodes[0].innerText;
                    await new Promise((resolve) =>
                        setTimeout(() => {
                            resolve();
                        }, 100)
                    );
                    bars[i].style.height = bars[i + 1].style.height;
                    bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
                    bars[i + 1].style.height = temp1;
                    bars[i + 1].childNodes[0].innerText = temp2;
                    swapped = true;
                }
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 100)
                );
                bars[i].style.backgroundImage = "linear-gradient(90deg, #1cb0f6, #05587f)";
                bars[i + 1].style.backgroundImage = "linear-gradient(90deg, #1cb0f6, #05587f)";

                await waitforme(100);
                if (flag == 1) await pauser();
            }
            s = s + 1;
        }
        for (var x = 0; x < 20; x++) {
            bars[x].style.backgroundImage = "linear-gradient(90deg, #16fb21, green)";
        }
        document.getElementById("Button1-1").disabled = false;
        document.getElementById("Button1").disabled = false;
        document.getElementById("Button2").disabled = false;
        document.getElementById("Button3").disabled = false;
        document.getElementById("Button4").disabled = false;
        document.getElementById("Button5").disabled = false;
        document.getElementById("Button6").disabled = false;
    }
    else if (number != 20) {
        let bars = document.querySelectorAll(".bar");
        let swapped = true;
        let s = 0;
        let e = number;
        while (swapped == true) {
            swapped = false;
            for (var i = s; i < e - 1; i++) {
                var value1 = parseInt(bars[i].childNodes[0].innerHTML);
                var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 100)
                );
                bars[i].style.backgroundImage = "linear-gradient(90deg, pink, red)";
                bars[i + 1].style.backgroundImage = "linear-gradient(90deg, pink, red)";
                if (value1 > value2) {
                    var temp1 = bars[i].style.height;
                    var temp2 = bars[i].childNodes[0].innerText;
                    await new Promise((resolve) =>
                        setTimeout(() => {
                            resolve();
                        }, 100)
                    );
                    bars[i].style.height = bars[i + 1].style.height;
                    bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
                    bars[i + 1].style.height = temp1;
                    bars[i + 1].childNodes[0].innerText = temp2;
                    swapped = true;
                }
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 100)
                );
                bars[i].style.backgroundImage = "linear-gradient(90deg, #1cb0f6, #05587f)";
                bars[i + 1].style.backgroundImage = "linear-gradient(90deg, #1cb0f6, #05587f)";

                await waitforme(100);
                if (flag == 1) await pauser();
            }
            if (swapped == false) {
                break;
            }
            swapped = false;
            e = e - 1;
            for (var i = e - 1; i >= s; i--) {
                var value1 = parseInt(bars[i].childNodes[0].innerHTML);
                var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 100)
                );
                bars[i].style.backgroundImage = "linear-gradient(90deg, pink, red)";
                bars[i + 1].style.backgroundImage = "linear-gradient(90deg, pink, red)";
                if (value1 > value2) {
                    var temp1 = bars[i].style.height;
                    var temp2 = bars[i].childNodes[0].innerText;
                    await new Promise((resolve) =>
                        setTimeout(() => {
                            resolve();
                        }, 100)
                    );
                    bars[i].style.height = bars[i + 1].style.height;
                    bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
                    bars[i + 1].style.height = temp1;
                    bars[i + 1].childNodes[0].innerText = temp2;
                    swapped = true;
                }

                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 100)
                );
                bars[i].style.backgroundImage = "linear-gradient(90deg, #1cb0f6, #05587f)";
                bars[i + 1].style.backgroundImage = "linear-gradient(90deg, #1cb0f6, #05587f)";

                await waitforme(100);
                if (flag == 1) await pauser();
            }
            s = s + 1;
        }
        for (var x = 0; x < number; x++) {
            bars[x].style.backgroundImage = "linear-gradient(90deg, #16fb21, green)";
        }
        document.getElementById("Button1-1").disabled = false;
        document.getElementById("Button1").disabled = false;
        document.getElementById("Button2").disabled = false;
        document.getElementById("Button3").disabled = false;
        document.getElementById("Button4").disabled = false;
        document.getElementById("Button5").disabled = false;
        document.getElementById("Button6").disabled = false;
        document.getElementById("Button7").disabled = false;
    }
}

// function disableRun() {
//     document.getElementById("Button1").disabled = true;
//     document.getElementById("Button1").style.cursor = 'default';
//     document.getElementById("Button1").style.filter = 'none';
//     document.getElementById("Button1-1").disabled = true;
//     document.getElementById("Button1-1").style.cursor = 'default';
//     document.getElementById("Button1-1").style.filter = 'none';
//     document.getElementById("Button2").disabled = true;
//     document.getElementById("Button2").style.cursor = 'default';
//     document.getElementById("Button2").style.filter = 'none';
//     document.getElementById("Button3").disabled = true;
//     document.getElementById("Button3").style.cursor = 'default';
//     document.getElementById("Button3").style.filter = 'none';
//     document.getElementById("Button4").disabled = true;
//     document.getElementById("Button4").style.cursor = 'default';
//     document.getElementById("Button4").style.filter = 'none';
//     if ($('#container').children().length == 0) {
//         document.getElementById("Button1-1").disabled = false;
//         document.getElementById("Button1").disabled = false;
//         document.getElementById("Button2").disabled = false;
//         document.getElementById("Button3").disabled = false;
//         document.getElementById("Button4").disabled = false;
//         document.getElementById("Button5").disabled = false;
//         document.getElementById("Button6").disabled = false;
//         document.getElementById("Button7").disabled = false;
//     }
// }

function disableStop() {
    document.getElementById("Button1-1").disabled = false;
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button3").disabled = false;
    document.getElementById("Button4").disabled = false;
    document.getElementById("Button5").disabled = false;
    document.getElementById("Button6").disabled = false;
    document.getElementById("Button7").disabled = false;
}

function del() {
    const myElement = document.getElementById("container");
    myElement.innerHTML = '';
}

function checkQuantity() {
    let number = document.getElementById('quantity').value;
    if (number < 0) {
        alert("Vui lòng nhập số lớn hơn 0");
    }
}

document.getElementById("Button7").setAttribute("disabled", "true");
var flag = 0;

function waitforme(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('')
        }, ms);
    })
}

function pauser() {
    return new Promise(resolve => {
        let playbuttonclick = function () {
            document.getElementById("Button5").removeAttribute("disabled");
            document.getElementById("Button7").removeAttribute("disabled", "true");
            document.getElementById("Button7").removeEventListener("click", playbuttonclick);
            flag = 0;
            resolve("resolved");
        }
        document.getElementById("Button7").addEventListener("click", playbuttonclick);
    })
}

document.getElementById("Button5").addEventListener("click", function () {
    flag = 1;
    document.getElementById("Button5").setAttribute("disabled", "true");
    document.getElementById("Button7").removeAttribute("disabled");
})

document.getElementById("Button5").onclick = function (e) {
    document.getElementById("Button3").disabled = false;
    document.getElementById("Button4").disabled = false;
    document.getElementById("Button5").disabled = false;
    document.getElementById("Button6").disabled = false;
    document.getElementById("Button7").disabled = false;
}

function runScript(e) {
    let quantity = document.getElementById("quantity").value;
    if (e.keyCode == 13) {
        if (quantity > 0) {
            initialBars();
        } else {
            alert("Bạn phải nhập số lớn hơn 0");
        }
    }
}

let input_list = new Array();
document.getElementById("checkbox_type").onclick = function (e) {
    let quantity = document.getElementById("quantity").value;
    if (this.checked) {
        if (quantity == 0 || quantity == '') {
            alert("Bạn chưa nhập số phần tử cần so sánh. Vui lòng nhập và thử lại!");
            $("#checkbox_type").removeAttr("checked");
        } else if (quantity < 0) {
            alert("Bạn phải nhập số lớn hơn 0. Vui lòng nhập số khác và thử lại!");
            $("#checkbox_type").removeAttr("checked");
        } else {
            for (let i = 1; i <= quantity; i++) {
                input_list[i] = document.createElement("INPUT");
                input_list[i].setAttribute("type", "number");
                input_list[i].setAttribute("style", "width: 40px");
                input_list[i].style.marginRight = "5px";
                input_list[i].style.marginBottom = "5px";
                document.getElementById("data_sort").appendChild(input_list[i]);
            }
        }
    } else {
        alert("Hệ thống sẽ tiến hành xếp ngẫu nhiên");
        document.getElementById("data_sort").innerHTML = '';
    }
}

function generateUserType() {
    const myElement = document.getElementById("container");
    myElement.innerHTML = '';
    let quantity = document.getElementById("quantity").value;
    for (let i = 1; i <= quantity; i++) {
        let value = input_list[i].value;
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;
        bar.style.transform = `translateX(${i * 30}px)`;
        let barLabel = document.createElement("label");
        barLabel.classList.add("bar__id");
        barLabel.innerHTML = value;
        bar.appendChild(barLabel);
        container.appendChild(bar);
    }
}

function checkTyping() {
    $("#checkbox_type").removeAttr("checked");
    document.getElementById("data_sort").innerHTML = '';
    document.getElementById("Button1-1").disabled = false;
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button3").disabled = false;
    document.getElementById("Button4").disabled = false;
    document.getElementById("Button5").disabled = false;
    document.getElementById("Button6").disabled = false;
    document.getElementById("Button7").disabled = false;
}

function checkAddData() {
    let check = document.getElementById("checkbox_type");
    if (check.checked) {
        generateUserType();
    } else {
        initialBars();
    }
}

function checkFile(){
    if(document.getElementById("uploadFile").files.length != 0){
        $('#Button1-1').on('click', function(e){
            var $element = $('#uploadFile');
            $element.wrap('<form>').closest('form').get(0).reset();
            $element.unwrap();
        });
    }
}

// Thiết kế hàm lùi 1 bước
function stepBackward(){

}

// Thiết kế hàm tiến 1 bước
function stepForward(){

}
