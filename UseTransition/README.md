# `useTransition` Kullanımı

Bu README dosyası, React'ın bir kancası olan `useTransition`'ı kullanarak nasıl giriş animasyonları oluşturabileceğinizi açıklar. `useTransition`, bileşenlerin giriş efektleri ile düzgün bir şekilde görüntülenmesine yardımcı olur.

## Ne İşe Yarar?

`useTransition`, bileşenlerin giriş efektleri ile düzgün bir şekilde görüntülenmesini sağlar. Özellikle büyük öğelerin eklenmesi veya kaldırılması gibi senaryolarda kullanışlıdır. Bu kancayı kullanarak kullanıcı arayüzünde daha etkileyici ve düzgün animasyonlar oluşturabilirsiniz.

## Nasıl Kullanılır?

`useTransition`, üç ana argüman alır: öğelerin listesi, öğe benzersiz anahtarları ve animasyon ayarları. İşte bir örnek:

```javascript
import { useState, useTransition } from 'react';

function AnimatedList() {
  const [input, setInput] = useState('');
  const [myList, setMyList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value);

    startTransition(() => {
      const myArray = [];
      for (let i = 0; i < 2000; i++) {
        myArray.push(e.target.value);
      }
      setMyList(myArray);
    });
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />

      {isPending
        ? 'Yükleniyor...'
        : myList.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </>
  );
}

export default AnimatedList;

```

Yukarıdaki örnekte, useTransition kullanarak öğelerin giriş efektlerini belirledik. startTransition işlevi, öğelerin giriş animasyonunu başlatmak için kullanılır.

## Dikkat Edilmesi Gerekenler

useTransition, giriş animasyonları oluşturmak için kullanılır ve özellikle öğelerin eklenmesi veya kaldırılması gibi senaryolarda kullanışlıdır.
Animasyon ayarlarını, projenizin gereksinimlerine ve tasarımına uyacak şekilde özelleştirebilirsiniz.
useTransition'ı kullanırken öğelerin benzersiz anahtarlarını doğru bir şekilde belirtmelisiniz.


## Örnek Uygulama

Bu projenin kök dizinindeki src klasöründe, useTransition kullanımını içeren örnek bir React uygulaması bulunmaktadır. Uygulamayı başlatmak için aşağıdaki adımları izleyebilirsiniz:

Bu projeyi bilgisayarınıza klonlayın.
Terminalde projenin kök dizinine gidin.
npm install komutunu çalıştırarak bağımlılıkları yükleyin.
npm start komutunu çalıştırarak uygulamayı başlatın.
Uygulama, useTransition kullanımının nasıl gerçekleştirileceğini göstermektedir.