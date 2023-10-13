"use client"
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    city: 'الرياض',
    destination: '',
    hasFlightBooking: 'لا',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='p-8 z-10 relative border mb-8 shadow-lg'>
        <h1 className="text-center text-xl sm:text-3xl main-color">
        للطلب والاستفسار، يرجى تزويدنا ببياناتك وسنقوم بالتواصل معك في أسرع وقت ممكن
        </h1>
      <form>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="mobile">
            :الجوال
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            placeholder="+9xxxx"
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
        <label className="block text-lg mb-2" htmlFor="city">
            :مدينتك
        </label>
        <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="border p-2 w-full"
        >
            <option value="الرياض">الرياض</option>
            <option value="جده">جده</option>
            <option value="الشرقيه">الشرقيه</option>
            <option value="اخري">اخري</option>
        </select>
        </div>


        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="destination">
            وين حاب تسافر:
          </label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            className="border p-2 w-full"
          >
            <option value="">---</option>
            <option value="جورجيا">جورجيا</option>
            <option value="المالديف">المالديف</option>
            <option value="ماليزيا">ماليزيا</option>
            <option value="سريلانكا">سريلانكا</option>
            <option value="تايلاند">تايلاند</option>
            <option value="اندونيسيا">اندونيسيا</option>
            <option value="تركيا">تركيا</option>
            <option value="شرم الشيخ">شرم الشيخ</option>
            <option value="رحلات كروز بحرية">رحلات كروز بحرية</option>
            <option value="دول منطقه شنغن">دول منطقه شنغن</option>
            <option value="موريشيوس">موريشيوس</option>
            <option value="اذريبيجان">اذريبيجان</option>
            <option value="البوسنه والهرسك">البوسنه والهرسك</option>
            <option value="الامارات العربيه المتحده">الامارات العربيه المتحده</option>
            <option value="البانيا">البانيا</option>
            <option value="لندن">لندن</option>
            <option value="مصر">مصر</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">هل تم حجز الطيران؟</label>
          <div className="flex items-center justify-end">
            <input
              type="radio"
              id="hasFlightYes"
              name="hasFlightBooking"
              value="نعم"
              checked={formData.hasFlightBooking === 'نعم'}
              onChange={handleInputChange}
              className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label className="mr-4" htmlFor="hasFlightYes">
              نعم
            </label>

            <input
              type="radio"
              id="hasFlightNo"
              name="hasFlightBooking"
              value="لا"
              checked={formData.hasFlightBooking === 'لا'}
              onChange={handleInputChange}
              className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="hasFlightNo">لا</label>
          </div>
        </div>

        <button
          type="submit"
          className="main-bg text-white py-2 px-8 rounded"
        >
          إرسال
        </button>
      </form>
    </div>
  );
};

export default ContactForm;