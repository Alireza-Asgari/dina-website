import Product from "@/components/Product";
import React from "react";
const helpDesk = [
  "بهره مندی از هوش مصنوعی دانش محور",
  "واکشی کاربران تحت اکتیودایرکتوری",
  "شناسایی هوشمند اطلاعات سخت افزاری شبکه",
  "بهره مندی از سیستم تیکتینگ مبتنی بر پیام رسان و ایمیل ",
  "ثبت و مدیریت اموال سازمانی مبتنی بر فرم ساز پیشرفته",
];
const dinaTag = [
  "اجرای فرایند هوشمند سازی تجهیزارت و اموال سازمانی مبتنی بر فناوری RFID",
  "تولید و طراحی برچسب اموال مجهز به کد QR منطبق با لوگو ی سازمانی",
  "نجام فرایند پروگرم تگهای هوشمند جهت آماده سازی اموال در خوانش ها و قرائت های فصلی و دوره ای",
  "جمع داری اموال",
  "نصب و اجرای سامانه تحت وب متمرکز دینا تگ جهت انجام کلیه امور نرم افزاری مرتبط با موضوع طرح ",
  "نصب و اجرای اپلیکیشن موبایل جهت ارائه به اپراتور و جمعدار",
  "رصد تمامی جابجایی های اموال به صورت داینامیک و منطبق با تعاریف ادمین",
  "پنل مدیریتی در نرم افزار Dina Tag",
];
const dinaSood = [""];
export default function Products() {
  return (
    <div className="px-4 lg:px-10 px-auto my-10 text-gray-800 relative dark:text-white">
      <Product
        href="products/help-desk"
        image="/products/hekp-desk.svg"
        productName="هلپ دسک دینا ، دستیاری هوشمند و کاربردی"
        items={helpDesk}
      />
      <Product
        href="dina-tag"
        image="/products/dinaTag.svg"
        items={dinaTag}
        productName="دینا تگ ، امین اموال شما"
        reverse={true}
      />
      <Product
        href="products/help-desk"
        image="products/supermarket.svg"
        description="امکان پرینت اقلام خرید خریداری شده به صورت فیش و ارسال برگه فیش برای مشتری به صورت
اتوماتیک و اتصال به فیش پرینتر"
        productName="دیناسود ، سود شما از این خرید است !"
      />
      <Product
        href="pr"
        image="products/dina.svg"
        description="نرم افزار سوپر مارکت آنلاین که با نام فروشگاه آنلاین دینا سود نیز شناخته می‌شود یکی از برترین نرم‌افزارهای مربوط به فروش آنلاین محصولات در سوپر مارکت ها است. این نرم افزار دارای نسخه وب و اپلیکیشن است."
        productName="نرم افزار سوپر مارکت آنلاین"
        reverse={true}
      />
    </div>
  );
}
