import React from "react";
import Button from "../ui/Button";
import Product from "../Product";
const helpDesk = [
  "بهره مندی از هوش مصنوعی دانش محور",
  "واکشی کاربران تحت اکتیودایرکتوری",
  "شناسایی هوشمند اطلاعات سخت افزاری شبکه",
  "بهره مندی از سیستم تیکتینگ مبتنی بر پیام رسان و ایمیل ",
  "ثبت و مدیریت اموال سازمانی مبتنی بر فرم ساز پیشرفته",
];
export default function Products() {
  return (
    <section className="overflow-hidden px-4 lg:px-10 px-auto my-10 text-gray-800 relative dark:text-white">
      <h2 className="heading-2 mt-10 text-center">
        ما برای شما چه محصولاتی داریم؟
      </h2>
      <Product
        href="products/help-desk"
        image="/products/hekp-desk.svg"
        productName="هلپ دسک دینا ، دستیاری هوشمند و کاربردی"
        items={helpDesk}
      />
      <Product
        href="dina-tag"
        image="/products/dinaTag.svg"
        description="اجرای فرایند هوشمند سازی تجهیزارت و اموال سازمانی مبتنی بر فناوری RFID
     تولید و طراحی برچسب اموال مجهز به کدر QR منطبق با لوگو ی سازمانی 
     انجام فرایند پروگرم تگهای هوشمند جهت آماده سازی اموال در خوانش ها و قرائت های فصلی و دوره ای جمع داری اموال 
     نصب و اجرای سامانه تحت وب متمرکز دینا تگ جهت انجام کلیه امور نرم افزاری مرتبط با موضوع طرح 
     نصب و اجرای اپلیکیشن موبایل جهت ارائه به اپراتور و جمعدار 
     رصد تمامی جابجایی های اموال  به صورت داینامیک و منطبق با تعاریف ادمین پنل مدیریتی در نرم افزار Dina Tag
     "
        productName="دینا تگ ، امین اموال شما"
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
