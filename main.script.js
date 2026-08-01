document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('linear-loader');
    const loaderWrapper = document.getElementById('loader-wrapper');

    // انیمیشن پر شدن لودر هنگام ورود به صفحه
    loader.style.width = '100%';
    setTimeout(() => {
        loaderWrapper.style.opacity = '0'; // محو کردن کل کادر لودر
        document.body.classList.add('loaded'); // نمایش نرم کادر اصلی
        setTimeout(() => {
            loader.style.width = '0%'; // ریست کردن لودر
            loaderWrapper.style.display = 'none'; // برداشتن لودر از صفحه تا مزاحم کلیک‌ها نشود
        }, 300);
    }, 400);

    // مدیریت کلیک روی لینک‌ها برای ایجاد وقفه و نمایش لودر
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetUrl = this.getAttribute('href');

            // اگر لینک به همین صفحه بود کاری نکن
            if (targetUrl === '#' || targetUrl === window.location.pathname.split('/').pop()) {
                e.preventDefault();
                return;
            }

            e.preventDefault(); // جلوگیری از رفتن فوری به صفحه بعد

            // محو کردن کادر فعلی و نمایش لودر
            document.body.classList.remove('loaded');
            loaderWrapper.style.display = 'flex';

            // ایجاد یک تاخیر کوتاه (RequestAnimationFrame) تا مرورگر Display: flex را اعمال کند
            setTimeout(() => {
                loaderWrapper.style.opacity = '1';
                loader.style.width = '40%';
            }, 10);

            // رفتن به صفحه جدید بعد از کمی تاخیر
            setTimeout(() => {
                loader.style.width = '80%';
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 200);
            }, 300);
        });
    });
});