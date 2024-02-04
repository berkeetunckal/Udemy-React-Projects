# `useMemo` Kullanımı

Bu README dosyası, React'in bir kancası olan `useMemo`'yu kullanarak nasıl daha iyi performans elde edebileceğinizi açıklar. `useMemo`, hesaplamaları önbelleğe almanıza ve gereksiz işlem maliyetini azaltmanıza yardımcı olur.

## Ne İşe Yarar?

`useMemo`, React uygulamalarında performansı artırmak için kullanılır. Özellikle büyük ve karmaşık bileşenlerde faydalıdır. `useMemo`, hesaplamaları sadece belirli koşullar sağlandığında veya bağımlılıklar değiştiğinde yapar. Bu, gereksiz hesaplama maliyetini ve yeniden render sürelerini azaltmanıza yardımcı olur.

## Nasıl Kullanılır?

`useMemo`, iki argüman alır: bir işlev ve bir bağımlılıklar dizisi. İşlev, hesaplamayı yapacak olan fonksiyonu temsil eder ve bağımlılıklar dizisi, işlemin ne zaman çalıştırılacağını belirtir.

```javascript
import React, { useMemo } from 'react';

function MyComponent({ data }) {
  // data değiştiğinde bu hesaplama çalışır
  const calculatedData = useMemo(() => {
    // data üzerinde karmaşık bir hesaplama yap
    return performComplexCalculation(data);
  }, [data]); // data bağımlılığı
  // ...
}

Yukarıdaki örnekte, calculatedData sadece data değiştiğinde hesaplanır. useMemo'yu kullanmak, her render sırasında bu hesaplamanın tekrar tekrar yapılmamasını sağlar.

## Dikkat Edilmesi Gerekenler

`useMemo` 'yu aşırı kullanmaktan kaçının, gereksiz karmaşıklığa neden olabilir.
Hesaplamalarınızın yan etkisi varsa, useEffect kullanarak uygun şekilde ele alın.
useMemo ile performansı artırırken, kodun okunaklı ve bakımı yapılabilir olduğundan emin olun.

## Örnek Uygulama

Bu projenin kök dizinindeki src klasöründe, useMemo kullanımını içeren örnek bir React uygulaması bulunmaktadır. Uygulamayı başlatmak için aşağıdaki adımları izleyebilirsiniz:

Bu projeyi bilgisayarınıza klonlayın.
Terminalde projenin kök dizinine gidin.
npm install komutunu çalıştırarak bağımlılıkları yükleyin.
npm start komutunu çalıştırarak uygulamayı başlatın.
Uygulama, useMemo kullanımının nasıl gerçekleştirileceğini göstermektedir.
