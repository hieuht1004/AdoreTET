document.addEventListener('DOMContentLoaded', () => {
            
    // Hàm tạo giá trị di chuyển ngẫu nhiên trong khoảng [min, max]
    const getRandomMovement = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    // Lấy tất cả các phần tử ảnh và gán giá trị di chuyển ngẫu nhiên khác nhau cho mỗi ảnh
    const imagesData = [
        { element: document.getElementById('parallax-image-1'), maxMovement: getRandomMovement(5, 25) }, // Ngẫu nhiên từ 5px đến 25px
        { element: document.getElementById('parallax-image-2'), maxMovement: getRandomMovement(5, 25) },
        { element: document.getElementById('parallax-image-3'), maxMovement: getRandomMovement(5, 25) },
        { element: document.getElementById('parallax-image-4'), maxMovement: getRandomMovement(5, 25) },
    ];

    // Lắng nghe sự kiện di chuyển chuột trên toàn bộ cửa sổ (window)
    window.addEventListener('mousemove', (event) => {
        
        // Lấy kích thước toàn bộ viewport
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Lấy vị trí chuột trên viewport
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // 1. Chuẩn hóa vị trí X (từ -1 đến 1)
        // Chuột ở tâm màn hình = 0.
        const normalizedX = (mouseX - viewportWidth / 2) / (viewportWidth / 2);
        
        // 2. Chuẩn hóa vị trí Y (từ -1 đến 1)
        const normalizedY = (mouseY - viewportHeight / 2) / (viewportHeight / 2);

        // 3. Áp dụng dịch chuyển cho từng ảnh với giá trị maxMovement riêng
        imagesData.forEach(item => {
            const movementFactor = item.maxMovement; // Giá trị di chuyển ngẫu nhiên của ảnh này

            // Tính toán độ dịch chuyển cuối cùng
            const transX = normalizedX * movementFactor;
            const transY = normalizedY * movementFactor;

            item.element.style.transform = `translate(${transX}px, ${transY}px)`;
        });
    });

});