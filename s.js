// Cấu hình chung cho tất cả các slider (nếu chúng giống nhau)
      const commonConfig = {
        slidesPerView: 1, // Hiển thị 1 item
        spaceBetween: 0,
        loop: true, // Bật chế độ lặp vô cực
        // Tùy chọn thêm:
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
      };

      // 1. Khởi tạo Slider 1
      const swiper1 = new Swiper(".mySwiper-1", {
        ...commonConfig, // Sử dụng cấu hình chung
        navigation: {
          nextEl: ".next-1", // Trỏ đúng đến nút của Slider 1
          prevEl: ".prev-1",
        },
      });

      // 2. Khởi tạo Slider 2
      const swiper2 = new Swiper(".mySwiper-2", {
        ...commonConfig,
        navigation: {
          nextEl: ".next-2", // Trỏ đúng đến nút của Slider 2
          prevEl: ".prev-2",
        },
        // Ví dụ: Slider 2 có thể khác về số lượng slide hiển thị
        // slidesPerView: 2,
      });

      // 3. Khởi tạo Slider 3
      const swiper3 = new Swiper(".mySwiper-3", {
        ...commonConfig,
        navigation: {
          nextEl: ".next-3", // Trỏ đúng đến nút của Slider 3
          prevEl: ".prev-3",
        },
      });

      console.log(
        "Đã khởi tạo thành công 3 Swiper độc lập với chế độ cuộn vô cực."
      );