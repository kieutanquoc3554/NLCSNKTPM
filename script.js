const container = document.querySelector(".data-container");
// Hàm chức năng khởi tạo các cột giá trị

function generatebars(num = 20) {
    // Vòng lặp để khởi tạo 20 cột đã được định nghĩa trước
    for (let i = 0; i < num; i += 1) {
        // Sinh ra giá trị ngẫu nhiên cho 20 cột (định nghĩa từ 1 đến 100)
        let value = Math.floor(Math.random() * 100) + 1;
        // Tạo phần tử "div"
        let bar = document.createElement("div");
        // Thêm class "bar" vào "div"
        bar.classList.add("bar");
        // Định nghĩa chiều cao cho các cột
        bar.style.height = `${value * 3}px`;
        // Di chuyển các cột về phía trục X dương
        bar.style.transform = `translateX(${i * 30}px)`;
        // Tạo phần tử "label"
        let barLabel = document.createElement("label");
        // Thêm lớp bar_id vào label
        barLabel.classList.add("bar__id");
        // Phân bổ value đến label
        barLabel.innerHTML = value;
        // Nối đuôi label vào div
        bar.appendChild(barLabel);
        // Nối đuôi "div" vào "data-container div"
        container.appendChild(bar);
    }
}

// Hàm bất đồng bộ nhằm thực thi thuật toán sắp xếp Cocktail
async function CocktailSort(delay = 600) {
    let bars = document.querySelectorAll(".bar");
    // Khởi tạo biến swapped là true
    let swapped = true;
    // Khởi tạo biến s là 0
    let s = 0;
    // Khởi tạo biến e là 20 (tương ứng 20 cột)
    let e = 20;

    while (swapped == true) {
        swapped = false;

        for (var i = s; i < e - 1; i++) {

            // Phân chia giá trị của thanh thứ i vào value1
            var value1 = parseInt(bars[i].childNodes[0].innerHTML);

            // Phân chia giá trị của thanh thứ i+1 vào value2
            var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);

            // Dừng thực thi dòng code trong 300ms
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 100)
            );

            // Định nghĩa màu đỏ cho thanh thứ i
            bars[i].style.backgroundColor = "red";

            // Định nghĩa màu đỏ cho thanh thứ i + 1
            bars[i + 1].style.backgroundColor = "red";
            if (value1 > value2) {
                var temp1 = bars[i].style.height;
                var temp2 = bars[i].childNodes[0].innerText;

                // Dừng thực thi dòng code trong 300ms
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 100)
                );

                // Đổi thanh i với thanh i+1
                bars[i].style.height = bars[i + 1].style.height;
                bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
                bars[i + 1].style.height = temp1;
                bars[i + 1].childNodes[0].innerText = temp2;

                // Thiết lập lại swapped
                swapped = true;
            }

            // Dừng thực thi dòng code trong 300ms
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 100)
            );

            // Định nghĩa tím cho thanh thứ i
            bars[i].style.backgroundColor = "#6f459e";

            // Định nghĩa tím cho thanh thứ i+1
            bars[i + 1].style.backgroundColor = "#6f459e";
        }

        if (swapped == false) {
            break;
        }

        // Thiết lập lại swapped
        swapped = false;

        e = e - 1;

        for (var i = e - 1; i >= s; i--) {

            // Phân chia giá trị của thanh thứ i vào value1
            var value1 = parseInt(bars[i].childNodes[0].innerHTML);

            // Phân chia giá trị của thanh thứ i+1 vào value2
            var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);

            // Dừng thực thi dòng code trong 300ms
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 100)
            );

            // Định nghĩa màu đỏ cho thanh thứ i
            bars[i].style.backgroundColor = "red";

            // Định nghĩa màu đỏ cho thanh thứ i + 1
            bars[i + 1].style.backgroundColor = "red";
            if (value1 > value2) {
                var temp1 = bars[i].style.height;
                var temp2 = bars[i].childNodes[0].innerText;

                // Dừng thực thi dòng code trong 300ms
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 100)
                );

                // Đổi vị trí thanh thứ i với thanh thứ i + 1
                bars[i].style.height = bars[i + 1].style.height;
                bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
                bars[i + 1].style.height = temp1;
                bars[i + 1].childNodes[0].innerText = temp2;

                // Thiết lập lại biến swapped
                swapped = true;
            }

            // Dừng thực thi dòng code trong 300ms
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 100)
            );

            // Định nghĩa màu tím cho thanh thứ i
            bars[i].style.backgroundColor = "#6f459e";

            // Định nghĩa màu tím cho thanh thứ i + 1
            bars[i + 1].style.backgroundColor = "#6f459e";
        }
        s = s + 1;
    }

    for (var x = 0; x < 20; x++) {
        bars[x].style.backgroundColor = "rgb(49, 226, 13)";
    }

    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = "Sắp xếp hoàn tất!";

    // To enable the button "Generate new array with user type" after final (sorted)
    document.getElementById("Button1-1").disabled = false;
    document.getElementById("Button1-1").style.backgroundColor = "#6f459e";

    // Để kích hoạt nút "Tạo dãy số mới" sau khi sắp xếp được hoàn thành
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#6f459e";

    // Để kích hoạt nút "Sắp xếp Cocktail" sau khi sắp xếp được hoàn thành
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "#6f459e";

    document.getElementById("Button3").disabled = false;
    document.getElementById("Button3").style.backgroundColor = "#6f459e";

    document.getElementById("Button4").disabled = false;
    document.getElementById("Button4").style.backgroundColor = "#6f459e";

    document.getElementById("Button5").disabled = false;
    document.getElementById("Button5").style.backgroundColor = "#6f459e";

}

// Gọi hàm khởi tạo cột
generatebars();

// Hàm khởi tạo số ngẫu nhiên
function generate() {
    window.location.reload();
}

// Hàm vô hiệu hóa các nút
function disable() {

    // Để vô hiệu hóa nút "Tạo dãy số"
    document.getElementById("Button1").disabled = true;
    document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
    document.getElementById("Button1").style.cursor = 'default';
    document.getElementById("Button1").style.filter = 'none';
    
    // Để vô hiệu hóa nút "Generate new array with user type" 
    document.getElementById("Button1-1").disabled = true;
    document.getElementById("Button1-1").style.backgroundColor = "#d8b6ff"; 
    document.getElementById("Button1-1").style.cursor = 'default';
    document.getElementById("Button1-1").style.filter = 'none';
    // Để vô hiệu hóa nút "Sắp xếp Cocktail"
    document.getElementById("Button2").disabled = true;
    document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
    document.getElementById("Button2").style.cursor = 'default';
    document.getElementById("Button2").style.filter = 'none';

    document.getElementById("Button3").disabled = true;
    document.getElementById("Button3").style.backgroundColor = "#d8b6ff";
    document.getElementById("Button3").style.cursor = 'default';
    document.getElementById("Button3").style.filter = 'none';

    document.getElementById("Button4").disabled = true;
    document.getElementById("Button4").style.backgroundColor = "#d8b6ff";
    document.getElementById("Button4").style.cursor = 'default';
    document.getElementById("Button4").style.filter = 'none';

    // document.getElementById("Button5").disabled = true;
    // document.getElementById("Button5").style.backgroundColor = "#d8b6ff";
    // document.getElementById("Button5").style.cursor = 'default';
    // document.getElementById("Button5").style.filter = 'none';
}
