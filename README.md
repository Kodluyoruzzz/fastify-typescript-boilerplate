# Fastify Typescript Boilerplate

### Oluşturulacak tün .ts uzantılı dosyalar /src içerisinde yer almalıdır.

----
### Yeni bir rota tanımlamak için 
/routes klasörü içerisinde oluşturulan ilgili rotalar tanımlandıktan sonra
tanımlanan rotalar src/Router.ts dosyası içerisindeki
routes dizisi içerisine tanımlanması gerekir.
---
### Proje içerisindeki isimlendirmeler ile ilgili kurallar
- Klasör isimlendirmeleri lowercase
- Dosya isimleri PascalCase
- Class isimleri PascalCase
- Fonksiyon isimleri camelCase
- Request-response-database içerisinden gelen veriler için snake_case
- Endpoint isimlendirmeleri kısa ve kebap-case/caterpillar-case 
- Enum tanımlanırken key isimleri UPPERCASE
türünde isimlendirmeler kullanılmalıdır.




###  Production ortamı için 
``
npm run start
``

### Development ortamı için (node version < 17.0)
``
npm run dev
``

### Hata ayıklama için 
``
npm run debug
``





