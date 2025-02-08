"use server";

export async function HelpdeskDemo(data: {
  fullName: string;
  email: string;
  phone: string | number;
  organization: string;
  position: string;
  descriptions: string;
}) {
  // نمونه‌ای از اعتبارسنجی:
  const { fullName, email, phone, organization, position, descriptions } = data;

  if (!fullName || fullName.trim() === "") {
    return { error: "نام و نام خانوادگی اجباری است." };
  }
  if (!email || !/^\S+@\S+$/.test(email)) {
    return { error: "فرمت ایمیل نامعتبر است." };
  }
  if (!phone || !/^[0-9]{11}$/.test(phone)) {
    return { error: "فرمت شماره تماس نامعتبر است." };
  }
  if (!organization || organization.trim() === "") {
    return { error: "نام سازمان اجباری است." };
  }
  if (!position || position.trim() === "") {
    return { error: "سمت اجباری است." };
  }

  // انجام عملیات مورد نیاز بعد از اعتبارسنجی
  console.log({ fullName, email, phone, organization, position, descriptions });
  return { success: "اطلاعات فرم با موفقیت ارسال شد." };
}
