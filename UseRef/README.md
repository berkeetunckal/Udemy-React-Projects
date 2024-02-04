# `useRef` Kullanımı

Bu README dosyası, React'in bir kancası olan `useRef`'i kullanarak nasıl DOM öğelerine veya diğer değerlere erişebileceğinizi ve bileşenler arasında veri saklayabileceğinizi açıklar.

## Ne İşe Yarar?

`useRef`, React uygulamalarında DOM öğelerine erişmek, önceki değerleri saklamak veya bileşenler arasında veri paylaşmak gibi senaryolarda kullanılır. Genellikle, DOM öğelerine erişmek veya işlev bileşenlerinin bir bileşenin önceki değerlerini takip etmesini sağlamak için kullanılır.

## Nasıl Kullanılır?

### 1. DOM Öğelerine Erişim

`useRef` ile bir DOM öğesine erişmek için aşağıdaki örneği kullanabilirsiniz:

```javascript
import React, { useRef } from 'react';

function MyComponent() {
  // useRef kullanarak bir referans oluşturun
  const myRef = useRef(null);

  // DOM öğesine erişim
  const focusInput = () => {
    myRef.current.focus();
  };

  return (
    <div>
      <input ref={myRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

```

Yukarıdaki örnekte, useRef ile bir referans oluşturduk ve bu referansı input öğesine atadık. Ardından, focusInput işlevi ile bu input öğesine odaklanabiliriz.

### 2.Değer Saklama

`useRef` , bileşenin yaşam döngüsü boyunca sabit kalır ve değerleri saklamak için kullanılabilir:

```javascript
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const previousValue = useRef(null);

  useEffect(() => {
    // Önceki değeri saklama
    previousValue.current = someValue;
  }, [someValue]);

  return (
    <div>
      {/* ... */}
    </div>
  );
}

```

Yukarıdaki örnekte, useRef ile previousValue adında bir referans oluşturduk ve bu referansı, useEffect içindeki önceki someValue değerini saklamak için kullandık.

## Dikkat Edilmesi Gerekenler

`useRef` ile oluşturulan referans, bileşen yeniden render edildiğinde değişmez. Bu, özellikle önceki değerleri saklamak veya DOM öğelerine erişmek için kullanışlıdır.
DOM öğelerine erişmek için `useRef` kullanırken, ilgili öğelerin ref özelliğine bu referansı atamalısınız.
`useRef` ile değerler saklarken, bu değerler bileşen yeniden render edildiğinde değişmez ve önceki değerlere erişebilirsiniz.

## Örnek Uygulama
Bu projenin kök dizinindeki src klasöründe, useRef kullanımını içeren örnek bir React uygulaması bulunmaktadır. Uygulamayı başlatmak için aşağıdaki adımları izleyebilirsiniz:

Bu projeyi bilgisayarınıza klonlayın.
Terminalde projenin kök dizinine gidin.
npm install komutunu çalıştırarak bağımlılıkları yükleyin.
npm start komutunu çalıştırarak uygulamayı başlatın.
Uygulama, useRef kullanımının nasıl gerçekleştirileceğini göstermektedir.