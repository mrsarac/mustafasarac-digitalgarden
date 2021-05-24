---
title: 'Yazıları hızlı bir şekilde webde yayımlamak'
date: '2021-03-20T00:15:32+03:00'
status: publish
permalink: /yazilari-hizli-bir-sekilde-webde-yayimlamak
author: 'mustafa sarac'
excerpt: ''
type: post
id: 409
category:
    - Genel
tag: []
post_format: []
sha:
    - 255a74729bdaf5cb43089dddec8af32b6d1adf2f
github_url:
    - 'https://github.com/mrsarac/mustafasarac-blog/blob/master/published/yazilari-hizli-bir-sekilde-webde-yayimlamak.md'
---
Akışı sağlamak
--------------

Bence üretim sürecinin en önemli safhalarından bir tanesi uygun akışı sağlamak. Uygun akışı sağlamak için de mümkün olduğunca pürüzsüz bir alan oluşturmak ve bu alanı her seferinde daha iyiye götürecek adımları atmak. Biraz üstü kapalı bir anlatım gibi oldu farkındayım.

Bu web sitesiyle ilgili amacımda mümkün olduğunca az efor sarfederek ortamı pürüzsüzleştirmek ve hızlı bir şekilde web siteme içerik girmekti. Bunu yapabilmek için yayın sürecinin içinde bulunan tüm işleri mümkün olduğunca kolaylaştırmam gerektiğini düşündüm. Bunu yapabilmek için de web sitemi mevcut md (markdown) dosyalarından beslenen bir kaynağa bağlamam gerektiğini düşündüm. Hımm. Belki bir bir cloud servisi! Hem yazıların birer yedeklerini de tutmuş olurdum.

WordPress – Git it Write
------------------------

Web sitemde yazı yayımlamak için WordPress’i kullanıyorum. O yüzden ilk önce WordPress ile bunu nasıl yapabileceğime baktım ve eklentiler sayfasında [Git it Write](https://wordpress.org/plugins/git-it-write/#:~:text=Git%20it%20Write%20allows%20to,site%20generators%20like%20Jekyll%20%2C%20Next.) adında bir eklenti buldum. Kullanmak için uygun gibi gözüktü.

Selam GitHub
------------

Bu eklenti cloud tarafında GitHub’a ihtiyaç duyuyordu. O yüzden ben de GitHub üzerinde yeni bir proje oluşturdum ve oluşan branch’in adını **master** olarak değiştirdim. Normalde **main** olarak oluşuyor bu ilk branch ve bundan dolayı yaşadığım bir sorunu çözmem açıkçası biraz vaktimi aldı 🤨. Daha sonra bu GitHub üzerinde projenin ayarlar kısmından **Webhooks** sayfasına girdim ve yeni bir webhook ekledim.

GitHub ayarları
---------------

Webhooks ayarları

```git
URL: https://github.com/mrsarac/mustafasarac-blog/settings/hooks/
Payload: https://mustafasarac.com/wp-json/giw/v1/publish
Content type: JSON
Secret: **** <- buraya rastgele bir parola yazdım
Just the `push` event.
```

WordPress eklenti ayarları
--------------------------

WordPress tarafında da aşağıdaki ayarlamaları yaptım.

WordPress Settings

```
Webhook secret: **** <- github'a yazdığım rasgele parola
Github username/owner: mrsarac <- benim gitHub profilim
Repository name: mustafasarac-blog <- oluşturduğum projenin adı
Folder to publish from: published <- yayınlayacağım dosyaların bulunacağı klasör
```

Burada verdiğim KEY’i “Git it write” eklentisinin ayarlar sayfasında da bu anahtarı kullandım / kaydettim. Böylelikle bendeki master ile web sitem arasındaki ilişkiyi kurmuş oldum.

Belki ilk okuyuşta biraz karışık gelebilir. Ama şimdi anlatınca basit gibi geldi bana.

Biraz da terminal
-----------------

Terminalden projeyi çağırdım.

```
git clone git@github.com:mrsarac/mustafasarac-blog.git <- projenin git URL'i
```

Daha sonrada dosyalarımı ‘published’ klasöründe olacak şekilde kaydettim ve git’e gönderdim.

Tabi burada eklemek istediğim bir nokta var. Dosyanın başına eklenebilecek bir YAML tanımlaması var, dosyanın hangi isimde ve ketegoride olacağını belirleyebiliyorum.

```

---

title: Yazıları hızlı bir şekilde webte yayınlamak
menu_order: 1
post_status: publish
post_excerpt: This is a post excerpt
taxonomy:
    category:
        - category-slug-1
        - category-slug-2
    post_tag:
        - tag-1
        - tag-2
custom_fields:
    field1: value 1
    field2: value 2

---

```

Sonrasında…

Git’e dosya gönderelim.

```
git commit -m "GitHub üzerindeki ilk yazım"
```

Ve gönderdiğim dosya anında yayınlandı.

Küçük bir ek
------------

Senkronize olmasında sıkıntılar çıksa da; bence iyi çalışıyor gibi. Bu sorunu da bir dosyayı ‘değiştirdikten’ sonra olduğunu farkettim. Dosyaları oluştururken sıkıntı olmuyor ama web sitesi tarafında mevcut yazılar üzerinde güncelleme yapmıyordu. Bende pluginin kendi yönetim sayfasında bulunan aşağıdaki link üzerinden güncelleme komutunu çağırarak üstesinden geldim.

Bu kadar
--------

Bu yazıyı da ilk yazım olarak bu senkronizasyon dosyasına bırakıyorum ve git commit’i yapıyorum.

Yazılarımı beğendiniz mi? İsterseniz haftalık haber bültenime abone olabilir ve düzenli olarak paylaşımlarımı takip edebilirsiniz.

<div id="revue-embed"> <form action="https://www.getrevue.co/profile/mustafasarac/add_subscriber" id="revue-form" method="post" name="revue-form" target="_blank"><div class="revue-form-group"> <label for="member_email">Email address</label> <input class="revue-form-field" id="member_email" name="member[email]" placeholder="Your email address..." type="email"></input></div><div class="revue-form-group"> <label for="member_first_name">First name <span class="optional">(Optional)</span></label> <input class="revue-form-field" id="member_first_name" name="member[first_name]" placeholder="First name... (Optional)" type="text"></input></div><div class="revue-form-group"> <label for="member_last_name">Last name <span class="optional">(Optional)</span></label> <input class="revue-form-field" id="member_last_name" name="member[last_name]" placeholder="Last name... (Optional)" type="text"></input></div><div class="revue-form-actions"> <input id="member_submit" name="member[subscribe]" type="submit" value="Subscribe"></input></div><div class="revue-form-footer">By subscribing, you agree with Revue’s [Terms](https://www.getrevue.co/terms) and [Privacy Policy](https://www.getrevue.co/privacy).</div> </form></div>