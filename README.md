# persian-admin-panel
<h3 align="center" >
پنل مدیریت فارسی با ری اکت
</h3>

<div align="right" dir="rtl">

  پروژه پنل مدیریت یک پروژه به کمک اعضای انجمن ری اکت ایران است که هدف آن بالابردن تجربه و افزایش بار علمی انجمن است . 

  <br/>

  #### لیست پکیج های فنی پروژه

  هر پروژه برای شروع نیاز به یک هماهنگی و نیاز های فنی دارد که در راستای انجام پروژه ، بتواند تیم را در مسیر صحیحی قرار دهد . 

  <br/>

  در صورتی که برای هر کدام از پکیج ها جایگزینی مد نظر دارید یا نیاز بهتری را احساس میکنید ، لطفا در issue ‌ها بنویسید . 

  <br/>

  شروع پروژه با استفاده از cra یا همان create-react-app  است . 

  |نام | کاربرد |
  |-------|-----|
  | [ react router dom 4 ](https://www.npmjs.com/package/react-router-dom)| ایجاد روتر و لینک کردن |
  | [ material-ui ](https://material-ui.com/getting-started/installation/) | یک ui kit  برای متریال |
  | [ axios ](https://www.npmjs.com/package/axios) | ارسال درخواست ها به API |
  | [ redux ](https://redux.js.org/introduction/installation) | مدیریت state  ها |
  | [ react helmet ](https://www.npmjs.com/package/react-helmet) | مدیریت Meta  ها در هدر |

   #### نیاز های برطرف نشده پروژه

   - طرح ui 

   #### مدیریت پروژه در Trello

   برای رعایت نظم اجرای پروژه ، لطفا in progress  های هر Board  که علاقه به انجام آن را دارید را تکمیل کنید.

   [ لینک ترلو پروژه ](https://trello.com/reactpanelproject)
   <br/>
    بورد ها بعد از اتمام ، به روز شده و todo جدید جایگزین میشوند .


   #### نحوه همکاری 

   - به منظور همکاری در پروژه ابتدا ریپوزیتوری را fork  کنید و بر اساس Trello ، task  های مانده را انجام بدید 
   - پس از تکمیل کار انجام شده ، لطفا pull request  بدید
   - در صورت یافتن باگ  , به صورت یک issue  آن را مطرح و پس از pull request  دادن ، شماره pull request  را در ایشو اعلام میکنیم . 


##### API
api routes are in progress and will be completed as soon as we can . 

###### admin routes
| name  | router address | params | description |
| ------------- | ------------- | ------------- | ------------- |
| login admin | Post `shop.nimahabibkhoda.ir/api/v1/admin/login` |  email,password | email is : admin@admin.com , password : admin123456 |
| get products | Get `shop.nimahabibkhoda.ir/api/v1/admin/products` |  authorization : Bearer < TOKEN HERE > | it will show last 10 new created products |
| insert into products | Post  `shop.nimahabibkhoda.ir/api/v1/admin/products/insert` | permalink,title,price,description,published,tags(tag1,tag2,tag3),optJson ({"رنگ":{"optName":"رنگ","optLabel":"رنگ","optType":"radio","optOptions":["قرمز","آبی"]}}),stock | insert new product into database |

</div>
