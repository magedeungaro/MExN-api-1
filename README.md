Tutorial by Matheus (Hora de Codar) - https://www.youtube.com/watch?v=K5QaTfE5ylk

To test the api, you can set up a mongodb atlas cluster database (free tier) and set a ``` MONGODB_CONNECTION ``` variable in a ```.env``` file.

Running the api:

``` bash
  npm start
```

Will run on localhost:3000

Testing the api on Postman:

```
  POST /person
```

creating a person

<img src='https://blogger.googleusercontent.com/img/a/AVvXsEiltZx5OgGFb44Xe8LOUyXWpqxfJIZPmMH-3D8g-Vgnyg6h_On4AhyhxeM1GGdRfw6mnhOgw6-pVapd8b7hO9WYYSxpRBFS06ATaLGK6DudQQXa3nW7Bgw54IkXP2IVxafjV9Gg6brHv6TTYhfDwyJ7jMC6vd5KvJsdvPHaJc5WTHphE_IuaUgrMRENfw'>

``` GET /person ```
retrieve all

<img src='https://blogger.googleusercontent.com/img/a/AVvXsEgt_cLglHCssZE-7r43GAtDoAsqp6hEINBieutTxm9uHpwguPvJ5SAsm_h-BIUe9hjCTC7ZQST-HiwBARS230JaatBwFDRhH4UGZ5kyynUKMBaJHJB_RzLp40YBQDCbh_VvlDJWsI7rvNHwu0EdzBw0PrJBuIJ45A8U2NzyJD-nPyoVcl9_VLHRxyvjGA'>

``` GET /person/:id ```
retrieve a specific person

<img src='https://blogger.googleusercontent.com/img/a/AVvXsEhN5KBXx4Mi6l7c1nKwABEbWHCgXvAqq6zxwBZjtnhnBEIbyaZ15SX3AFzmc7-kkAhxiGLUcz0sc7SfMfogZyj9aFUMB_6Vmy1NxronbVix0dd3fXJFnPvENHOiDNAxjiKr5s-U3NGf5NS-hCdfmiIG3XBwT1XypsSsDF5N3j1Msuawp86EHEqRWbWmxA'>

``` PATCH /person/:id ```
update a person

<img src='https://blogger.googleusercontent.com/img/a/AVvXsEgbSvR7ge64UpaqS35SmALnIFLf4sBGcdAjce4AT7qn4ZIkIOapxcIG77MgK-HLYcfikk0k9xWx7DLd6sc5F4res0QS-vUmwQhvA4Wvm6FlSU-xcOZ8gFo1WegBmXUAMdwb091KTAmtYaw7KnkOWnqF-tHPelHFf8qt46HdOhxfVGO48YyJGtClXdobVQ'>

Notice the updated salary

<img src='https://blogger.googleusercontent.com/img/a/AVvXsEhjJhwYPFptBq2bg8ku96eJOwtoJmQ1ktxc5QNe8F8SmL7_GPLOCOY5i-BkM0VbyRzO4ocITI3MLvjgXBCieQLtmvdYGzo0N0QObTKzD76n4ZEP26kygVVvZqgjBlzVbBXNvLda998yDLI8p827iJXDukaSalxr5XvRIq2W4yll-uZ31w490AFlDUkKKg'>

``` DELETE /person/:id ```
Deleting a person

<img src='https://blogger.googleusercontent.com/img/a/AVvXsEhPlN-vHf9jUbSqfvCy2ck0uJRSjAFkB4O78UmUz9nlVpA4divkBYTwCW8N0XCosJTJkrJ299fAmS_c7B6tUWgcK3ykYFmBPeyPKA9YSsW-eOtNb0WJtVloxSX4uhYg1K7N44hpb3vwmsO0MCngtz3bvomW54OxNz8PWREk7BytM6-KJGMHUrRykz5Z9A'>

Trying to find the same person

<img src='https://blogger.googleusercontent.com/img/a/AVvXsEjV94Yd20gumwU7utPYkPb5MjKiHUhd5y5gLkdmwdZ6pLZ4-yjs_tcx5MRAI9lOu5YvHBeDACpJBkoVXH_fzzBl9_DTajQaNdDc15ifx-mvOhD281nM_y_KT3eyHFwVG7y460OSDUDFqe36jem1rtn_-ylSpyQ1R9OIOJKIL8lke5CfV_kq_SQIEmk7aw'>
