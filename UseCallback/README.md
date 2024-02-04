# `useCallback` Kullanımı

Bu README dosyası, React'in bir kancası olan `useCallback`'i kullanarak nasıl fonksiyonları önbelleğe alabileceğinizi ve gereksiz yeniden oluşturulmayı önleyebileceğinizi açıklar.

## Ne İşe Yarar?

`useCallback`, React uygulamalarında işlevleri önbelleğe alarak gereksiz yeniden oluşturulmayı ve performans kayıplarını önlemek için kullanılır. Özellikle büyük ve karmaşık bileşenlerde, işlevlerin sürekli yeniden oluşturulmasını önlemek performansı artırabilir.

## Nasıl Kullanılır?

`useCallback`, iki argüman alır: bir işlev ve bağımlılıklar dizisi. İşlev, önbelleğe alınacak olan işlemi temsil eder ve bağımlılıklar dizisi, işlemin ne zaman güncelleneceğini belirtir.

```javascript
import React, { useState, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // Yeniden oluşturulmayan bir işlev
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

```

Yukarıdaki örnekte, handleClick işlevi count bağımlılığına sahiptir ve bu nedenle count değiştiğinde yeniden oluşturulur. Ancak, useCallback kullanarak işlemin yeniden oluşturulmasını önleyebiliriz.

## Dikkat Edilmesi Gerekenler

useCallback sadece işlevlerin yeniden oluşturulmasını önlemek için kullanılmalıdır. Her işlevi useCallback ile sarmak, performansı olumsuz etkileyebilir.
Bağımlılıklar dizisini doğru bir şekilde yönettiğinizden emin olun. İşlevin bağımlılıkları değiştiğinde işlev yeniden oluşturulur.
İşlevi sadece gerektiğinde useCallback ile önbelleğe alın. Başlangıçta her işlevi önbelleğe almak, gereksizdir.
Örnek Uygulama
Bu projenin kök dizinindeki src klasöründe, useCallback kullanımını içeren örnek bir React uygulaması bulunmaktadır. Uygulamayı başlatmak için aşağıdaki adımları izleyebilirsiniz:

## Bu projeyi bilgisayarınıza klonlayın.

Terminalde projenin kök dizinine gidin.
npm install komutunu çalıştırarak bağımlılıkları yükleyin.
npm start komutunu çalıştırarak uygulamayı başlatın.
Uygulama, useCallback kullanımının nasıl gerçekleştirileceğini göstermektedir.