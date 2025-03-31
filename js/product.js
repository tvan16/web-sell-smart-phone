// JavaScript cho trang chi tiết sản phẩm
document.addEventListener('DOMContentLoaded', function() {
    // Xử lý chọn hình ảnh thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image img');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Xóa active class từ tất cả thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            // Thêm active class cho thumbnail được click
            this.classList.add('active');
            // Cập nhật hình ảnh chính
            mainImage.src = this.querySelector('img').src;
        });
    });
    
    // Xử lý chọn màu sắc
    const colorOptions = document.querySelectorAll('.color-option');
    const colorLabel = document.querySelector('.color-label');
    const colorNames = ['Vàng', 'Bạc', 'Đen', 'Tím'];
    
    colorOptions.forEach((option, index) => {
        option.addEventListener('click', function() {
            // Xóa active class từ tất cả màu sắc
            colorOptions.forEach(o => o.classList.remove('active'));
            // Thêm active class cho màu sắc được chọn
            this.classList.add('active');
            // Cập nhật label màu sắc
            colorLabel.textContent = 'Màu sắc: ' + colorNames[index];
        });
    });
    
    // Xử lý tăng giảm số lượng
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const quantityInput = document.querySelector('.quantity-control input');
    
    minusBtn.addEventListener('click', function() {
        let value = parseInt(quantityInput.value);
        if (value > 1) {
            quantityInput.value = value - 1;
        }
    });
    
    plusBtn.addEventListener('click', function() {
        let value = parseInt(quantityInput.value);
        quantityInput.value = value + 1;
    });
    
    // Xử lý nút mua ngay và thêm vào giỏ
    const buyNowBtn = document.querySelector('.buy-now');
    const addToCartBtn = document.querySelector('.add-to-cart');
    
    buyNowBtn.addEventListener('click', function() {
        alert('Bạn đã chọn mua ngay iPhone 16 Pro Max 256GB!');
    });
    
    addToCartBtn.addEventListener('click', function() {
        alert('Đã thêm iPhone 16 Pro Max 256GB vào giỏ hàng!');
        // Cập nhật số lượng trong giỏ hàng
        const cartCount = document.querySelector('.cart-count');
        cartCount.textContent = parseInt(cartCount.textContent) + parseInt(quantityInput.value);
    });
});
