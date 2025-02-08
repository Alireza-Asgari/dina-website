import React from "react";
import Button from "../ui/Button";
import Product from "../Product";

export default function Products() {
  return (
    <section className="overflow-hidden px-4 lg:px-10 px-auto my-10 text-gray-800 relative dark:text-white">
      <h2 className="heading-2 mt-10 text-center">
        ما برای شما چه محصولاتی داریم؟
      </h2>
      <Product
        href="pr"
        image="/mainPage/helpdesk.png"
        description="سامانه هلپ دسک یک نرم افزار جامع برای مدیران IT شرکت‌ها و سازمان‌های متوسط و بزرگ است. این سامانه از بخش‌های مختلفی تشکیل شده که هر کدام از این بخش‌ها می‌توانند به راحتی نیازهای بسیاری را پوشش داده و با ارائه یک راهکار مناسب در سریع‌ترین زمان ممکن مشکل سازمان ف کاربران و یا بخش IT را برطرف کنند."
        productName="سامانه هلپ دسک"
      />
      <Product
        href="pr"
        image="/mainPage/superMarket.png"
        description="نرم افزار سوپر مارکت آنلاین که با نام فروشگاه آنلاین دینا سود نیز شناخته می‌شود یکی از برترین نرم‌افزارهای مربوط به فروش آنلاین محصولات در سوپر مارکت ها است. این نرم افزار دارای نسخه وب و اپلیکیشن است."
        productName="نرم افزار سوپر مارکت آنلاین"
        reverse={true}
      />
      <div className="w-full text-center mt-16">
        <Button href="/products">
          <p>مشاهده محصولات بیشتر</p>
        </Button>
      </div>
    </section>
  );
}
