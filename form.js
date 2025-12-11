// Add product row
document.getElementById("addProductBtn").addEventListener("click", () => {
    addProductRow();
});

/* ----------------------------
   TẠO 1 PRODUCT ROW MỚI
----------------------------- */
function addProductRow() {
    const div = document.createElement("div");
    div.className = "product-row";
    div.innerHTML = `
    <select name="product" required>
        <option value="" disabled selected>Chọn sản phẩm</option>
        <option value="ÁO DÀI CẨM DUNG">ÁO DÀI CẨM DUNG</option>
        <option value="ÁO DÀI DAO HUYỀN">ÁO DÀI DAO HUYỀN</option>
        <option value="ÁO DÀI NGỌC TƯỜNG">ÁO DÀI NGỌC TƯỜNG</option>

        <option value="ÁO DÀI LAM TƯỜNG">ÁO DÀI LAM TƯỜNG</option>
        <option value="ÁO DÀI CÁT TƯỜNG">ÁO DÀI CÁT TƯỜNG</option>
        <option value="ÁO DÀI DIỄM TƯỜNG">ÁO DÀI DIỄM TƯỜNG</option>

        <option value="ÁO DÀI A MỊ">ÁO DÀI A MỊ</option>
        <option value="ÁO DÀI THỊ TẤM">ÁO DÀI THỊ TẤM</option>
        <option value="ÁO DÀI NGUYỆT CẦM">ÁO DÀI NGUYỆT CẦM</option>
    </select>

    <select name="size" required>
        <option value="" disabled selected>Kích thước</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
    </select>

    <select name="type" required>
        <option value="" disabled selected>Phân loại</option>
        <option value="Người lớn">Người lớn</option>
        <option value="Trẻ em">Trẻ em</option>
    </select>

    <input type="number" name="quantity" min="1" required placeholder="Số lượng">

    <button type="button" class="remove-btn">X</button>
    `;

    document.getElementById("productList").appendChild(div);

    // Remove row
    div.querySelector(".remove-btn").addEventListener("click", () => {
        div.remove();
    });
}

/* ----------------------------
   RESET FORM VỀ TRẠNG THÁI BAN ĐẦU
----------------------------- */
function resetFormToDefault() {
    document.getElementById("preorderForm").reset();

    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    addProductRow();
}

/* ----------------------------
   TOAST LOADING
----------------------------- */
function showToastLoading() {
    const toast = document.getElementById("toast");
    const icon = document.getElementById("toastIcon");
    const msg = document.getElementById("toastMessage");

    icon.className = "spinner";
    icon.textContent = "";
    msg.textContent = "Đang xử lý...";

    toast.classList.add("show");
}

/* ----------------------------
   TOAST SUCCESS
----------------------------- */
function showToastSuccess() {
    const toast = document.getElementById("toast");
    const icon = document.getElementById("toastIcon");
    const msg = document.getElementById("toastMessage");

    icon.className = "";
    icon.textContent = "✓";
    msg.textContent = "Đặt hàng thành công!";

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

/* ----------------------------
   FORM SUBMIT
----------------------------- */
document.getElementById("preorderForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    showToastLoading();

    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const store = document.querySelector('select[name="store"]').value;
    const address = document.querySelector('textarea[name="address"]').value;

    const products = [];
    document.querySelectorAll(".product-row").forEach(row => {
        products.push({
            product: row.querySelector('[name="product"]').value,
            size: row.querySelector('[name="size"]').value,
            type: row.querySelector('[name="type"]').value,
            quantity: row.querySelector('[name="quantity"]').value
        });
    });

    await fetch("https://script.google.com/macros/s/AKfycby_fu6wndGaJYqJszaKu341gakOb-m5JE8h_ux9Qp4HTji5Sn3QkChCFnQFoVl2at_U/exec", {
        method: "POST",
        body: JSON.stringify({ name, phone, store, address, products })
    });

    showToastSuccess();
    resetFormToDefault(); 
});

resetFormToDefault();
