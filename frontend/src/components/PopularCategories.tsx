import React from 'react';
import Category from './Category';

export default function PopularCategories() {
  const categories = [
    {
      title: "Weddings",
      icon: "celebration",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeToMQDBnFzl_246MdwgQUE7JvqM6hhXn2H30RRL0Is46GdgiryQxDQ3rl46dtR2Hyeya7dfuPLJmX3_57PUaVIGcyQuvOSOJD4_LcjIz_FXd_vdEAOvtBEe2CZZkPGQYIzNvjXPyJcZQJRd42Ynqkkgqd5Q1kiNRWAyXhajXoIu974vfvgmaXuQ-K8eihXDBEmGo3TBiTkRz5oLMPuKy3dWHnIUSoWJv6sP4iAx6VcqjSLL_adp5sgXkGiwnITmjyaxlRSvaJlNfq",
      imageAlt: "",
    },
    {
      title: "Corporate",
      icon: "business_center",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrDLcJN_sS6rGbu-G_5VQgPeshmQL6-7qVoLEobPWIwOG4IimZAszNZgrH9Q03qa5YWdTwfzNeCVYQ5_yHGlTj7S4WEUvKApHE-eK6KBk5gOtLB2fOF94JOOpO6_ZXDI4UT6ymFSpqNf1hHXMVY_eobnQdzNN8iAc6ypi1lzLMq3Lo1PbnUO6nvZU1rRWgt1gTr6C44wEyRGoWGtbndmMPuKFznur8mcxKBBJenVjvQQQU6ocWafg4QWF4Zy2V64A3OrdKE1K06dlK",
      imageAlt: "",
    },
    {
      title: "Resorts",
      icon: "pool",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAql7R8fDynDhzmoyNl3K3ezDZmbIUaJKex6GD5DndqNXj1nWvnTk_ITZme3lFVz5ncmoUOhBeeZWgdaGpMXOZNDuW4vXUo7OUBOkfpTQdu4aioMla5kCL88DNSZFwu-zLnckMhKC6SddetOG25Bp9l3v8yoMcTPErNU78Z2fCi1X_SABaxy9Oc7weyYA9k6VLwVW9UbbhnDuGdvQb6rsS7ORfjmgLCFlQZtEJJ1hoJZ2lA-iX7vGXUKOsXGdcQvDz0F9Iax3y6YrU",
      imageAlt: "",
    },
    {
      title: "Private Dining",
      icon: "restaurant",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPOnaunMw1mTscZvmO74na9ak7Jl4AFPLVsFru3_64jmVmV-JEK-wwIj3gdXT1Tap7SVmiPVfQNHNI6KCO3AhNplV8u-SWBkUj10ck4igFvKXHK3fBhVjo6DwZ1okJupjmV4YvUoeWEEAjUErzBNOM5gIz1NutBWhMn0F0fuiySgj77MwCl54pUWLZFaS4HXB2jsBIZBtTqJdqidiFmRsWDBHcDpvuQSY-jgnoPjErA_e0O_SLPBRFeKrxXGrwva4qzQrsHjAfa8h9",
      imageAlt: "",
    }
  ];

  return (
    <section className="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Browse by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {categories.map((category, index) => (
          <Category key={index} {...category} />
        ))}
      </div>
    </section>
  );
}
