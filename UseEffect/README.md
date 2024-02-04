# `useEffect` Kullanımı

Bu README dosyası, React'in bir kancası olan `useEffect`'i kullanarak nasıl yan etkileri yönetebileceğinizi açıklar. `useEffect`, React uygulamalarında bileşenlerin monte edilmesi, güncellenmesi veya sökülmesi gibi yan etkileri ele almak için kullanılır.

## Ne İşe Yarar?

`useEffect`, React bileşenlerinin yaşam döngüsü olaylarına benzer şekilde çalışır ve yan etkileri işlemek için kullanılır. Bu yan etkiler, API çağrıları, abonelikler, bileşenlerin monte edilmesi ve sökülmesi gibi işlemleri içerebilir. `useEffect`, bu tür işlemleri bileşenler içinde güvenli bir şekilde yönetmenizi sağlar.

## Nasıl Kullanılır?

`useEffect`, iki argüman alır: bir işlev ve bir bağımlılıklar dizisi. İşlev, yan etkileri gerçekleştirecek olan fonksiyonu temsil eder ve bağımlılıklar dizisi, işlemin ne zaman çalıştırılacağını belirtir.

```javascript
import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Bu kod, bileşen her güncellendiğinde çalışır
    fetchData();
  }, []); // Boş bağımlılıklar dizisi, sadece bileşen monte edildiğinde çalışır

  const fetchData = async () => {
    // API çağrısı yap ve verileri al
    const response = await fetch('https://example.com/api/data');
    const result = await response.json();
    setData(result);
  };

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
```

Yukarıdaki örnekte, useEffect kullanarak bileşenin monte edildiğinde fetchData fonksiyonunu çağırıyoruz. Boş bağımlılıklar dizisi, bu efektin yalnızca bileşen monte edildiğinde çalışmasını sağlar.

Dikkat Edilmesi Gerekenler
useEffect içindeki işlevin temizlenmesi gereken durumlar için bir temizleyici işlev döndürmelisiniz.
Yan etkilerinizi uygun şekilde yönetmek ve bellek sızıntılarını önlemek için useEffect'i doğru bir şekilde kullanmalısınız.
Bağımlılıklar dizisini kullanarak efektin ne zaman çalıştırılacağını kontrol edin. Boş bir dizi, efektin yalnızca monte edilme veya sökülme anında çalışmasını sağlar.
Örnek Uygulama
Bu projenin kök dizinindeki src klasöründe, useEffect kullanımını içeren örnek bir React uygulaması bulunmaktadır. Uygulamayı başlatmak için aşağıdaki adımları izleyebilirsiniz:

Bu projeyi bilgisayarınıza klonlayın.
Terminalde projenin kök dizinine gidin.
npm install komutunu çalıştırarak bağımlılıkları yükleyin.
npm start komutunu çalıştırarak uygulamayı başlatın.
Uygulama, useEffect kullanımının nasıl gerçekleştirileceğini göstermektedir.

