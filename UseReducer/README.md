# `useReducer` Kullanımı

Bu README dosyası, React'in bir kancası olan `useReducer`'ı kullanarak nasıl veri yönetimi yapabileceğinizi açıklar. `useReducer`, React uygulamalarında state yönetimini kolaylaştırır ve daha karmaşık state mantıklarını ele almanıza yardımcı olur.

## Ne İşe Yarar?

`useReducer`, React uygulamalarında state yönetimini geliştirmek için kullanılır. Özellikle büyük ve karmaşık bileşenlerde kullanışlıdır. Bu kancanın temel amacı, bileşenin içindeki state'i güncellemek ve yönetmek için bir "reducer" işlevi kullanmaktır. Bu, state yönetimini daha tahmin edilebilir ve sürdürülebilir hale getirir.

## Nasıl Kullanılır?

`useReducer`, iki argüman alır: bir "reducer" işlevi ve başlangıç durumu (initial state). Ayrıca, döndürülen değerler `state` ve `dispatch`'tir. `state`, mevcut state'i temsil eder ve `dispatch`, state'i güncellemek için kullanılan bir işlevdir.

```javascript
import React, { useReducer } from 'react';

// Başlangıç durumu
const initialState = {
  count: 0,
};

// Reducer işlevi
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  // useReducer kullanımı
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

export default Counter;

```

Yukarıdaki örnekte, useReducer'ı kullanarak bir sayacı bileşeni oluşturduk. Reducer işlevi, INCREMENT veya DECREMENT eylemlerine göre state'i günceller. dispatch işlevi, bu eylemleri tetiklemek için kullanılır.

Dikkat Edilmesi Gerekenler
useReducer'ı kullanırken, state yönetimi mantığınızı reducer işlevi içinde düzenleyin.
Büyük ve karmaşık state yapılarını daha iyi ele almak için useReducer'ı tercih edebilirsiniz.
State ve dispatch'i bileşenler arasında iletmek için Context API veya diğer yöntemlerle entegre edebilirsiniz.
Örnek Uygulama
Bu projenin kök dizinindeki src klasöründe, useReducer kullanımını içeren örnek bir React uygulaması bulunmaktadır. Uygulamayı başlatmak için aşağıdaki adımları izleyebilirsiniz:

Bu projeyi bilgisayarınıza klonlayın.
Terminalde projenin kök dizinine gidin.
npm install komutunu çalıştırarak bağımlılıkları yükleyin.
npm start komutunu çalıştırarak uygulamayı başlatın.
Uygulama, useReducer kullanımının nasıl gerçekleştirileceğini göstermektedir.