"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      es: {
        translation: {
          ecommerce: "E-COMMERCE",
          home: "INICIO",
          cart: "CARRITO",
          category: "Categoría",
          price: "Precio",
          all: "Todas",
          coat: "Abrigo",
          sweater: "Suéter",
          shirt: "Camisa",
          pants: "Pantalón",
          shoes: "Zapatos",
          beret: "Boina",
          highestPrice: "Mayor precio",
          lowestPrice: "Menor precio",
          addToCart: "Agregar al carrito",

          back: "Volver",
          buyNow: "Comprar Ahora",
          return: "Devolución gratis",
          returnTwo: "Tenés 30 días desde que lo recibís.",
          stock: "Stock disponible",
          stockTwo: "Almacenado y enviado por",
          ProductNotFound: "Producto no encontrado",
          buy: "Compra Exitosa",
          order: "Resumen del pedido",
          shipment: "Envio",
          total: "Total",
          emptyCart: "Vaciar Carrito",
          NumberOfProducts: "Cantidad de productos",

          products: {
            1: {
              title: "Chaqueta de trabajo refinada | Zambia",
              description:
                "ERLING es uno de los artículos emblemáticos de HANSEN. Una chaqueta inspirada en la ropa de trabajo con un ajuste regular, viene con botones de cuerno, dos bolsillos ribeteados inferiores, un bolsillo de parche superior y dos bolsillos interiores. Los bordes y puños están atados. Inspirada en los textiles tradicionales africanos, esta tela jacquard francesa tiene motivos geométricos muy texturizados que se asemejan a bordados a mano colocados sobre un fondo de rayas toscamente tejido. El mango suave hace que la chaqueta parezca un hallazgo vintage. , 49% Algodón 40% Poliéster 7% Acrílico 3% Otras fibras 1% Lana, Ajuste regular, Unlined, Botones de bocina, Origen: Francia, Fabricado en Europa",

            },
            2: {
              title: "Chaqueta de trabajo | Beige",
              description:
                "BENDIK es una chaqueta inspirada en ropa de trabajo de fácil ajuste confeccionada en sarga de gabardina de algodón con una superficie suave ligeramente cepillada. Tiene tres bolsillos de parche en la parte delantera y el bolsillo interior, el yugo interior y las fijaciones son de algodón a rayas., Una sarga Gabardina sólida de alta densidad procedente de Italia con superficie cepillada., Sarga 100% algodón, Botones de bocina, Tres bolsillos de parche, Un bolsillo interior, Prenda lavada, Origen: Italia, Fabricado en Europa",

            },
            3: {
              title: "Abrigo de invierno con capucha | Verde reflectante",
              description:
                "STORM es una versión actualizada de nuestra chaqueta STORM anterior. Viene con un forro completo 100% lana, una capucha grande, bolsillos grandes y seguros, cordones y una gran superposición en la parte delantera. Esta versión de STORM está hecha de dos telas de concha diferentes: una mezcla de lona de algodón encerado de aspecto vintage hecha en el Reino Unido y una lona resistente con un revestimiento REFLECTANTE de Italia. Ambos son tejidos resistentes, resistentes al viento y repelentes al agua. Los tejidos están fabricados por uno de los mejores proveedores de tejidos técnicos y para exteriores de Italia algodón encerado del Reino Unido y forro 100% lana de Portugal. Robusto, cálido, resistente al viento y repelente al agua.",

            },
            4: {
              title: " Chaqueta de trabajo refinada | Jardinero",
              description:
                "ERLING es uno de los artículos emblemáticos de HANSEN. Una chaqueta inspirada en la ropa de trabajo con un ajuste regular, viene con botones de cuerno, dos bolsillos ribeteados inferiores, un bolsillo de parche superior y dos bolsillos interiores. Los puños, el dobladillo y el cuello están atados en tela propia. El tejido es un jacquard de fabricación francesa que tiene un diseño de follaje abstracto compuesto por diferentes tonos de verde y negro y de diferentes texturas. Es una prenda lavada para un mango más suave. ",

            },
            5: {
              title: "Camisa clásica informal | Azul verdadero",
              description:
                "HENNING es la camiseta de todos los días de Hansen. El diseño es sencillo y sin detalles innecesarios. El ajuste es relajado y la camisa está cosida con costuras talladas en las mangas y los costados. HENNING viene con un bolsillo en el pecho, un placet francés y botones de nácar natural. Esta ligera sarga de algodón italiana es muy suave y cubre suavemente el cuerpo. Es extremadamente cómodo de llevar y por eso forma parte de nuestras colecciones cada temporada.",

            },
            6: {
              title: "Pantalones anchos plisados para uso diario | Negro ",
              description:
                "BOBBY es un par de pantalones de corte ancho que funcionan bien en cualquier edad o forma corporal. Tiene pliegues en la parte delantera, bolsillos traseros y dobladillos en el dobladillo.       La costura lateral está torcida para dar una forma fácil y relajada que sigue el cuerpo de una manera bastante orgánica y hace que los pantalones sean súper cómodos de usar. La tela es una sarga de gabardina sólida y tejida de Italia con una superficie de efecto lavado. Perfecto para uso intensivo y uso diario.",

            },
            7: {
              title: "Pantalón jean",
              description:
                "BOBBY es un par de pantalones de corte ancho que funcionan bien en cualquier edad o forma corporal. Tiene pliegues en la parte delantera, bolsillos traseros y dobladillos en el dobladillo., La costura lateral está torcida para dar una forma fácil y relajada que sigue el cuerpo de una manera bastante orgánica y hace que los pantalones sean súper cómodos de usar., La tela es una sarga de gabardina sólida y tejida de Italia con una superficie de efecto lavado. Perfecto para uso intensivo y uso diario., Sarga 100% algodón, Botones de bocina, Corte ancho, Frente de un solo pliegue, Esposadas dobladas, Costura lateral retorcida, Fabricado en Europa",

            },
            8: {
              title: "Camisa jacquard con cupé de lima",
              description:
                "Camisa de trabajo informal de corte regular confeccionada en algodón índigo con lima texturizada coupé jacquard. Terminado con botones de nácar con el logotipo NN.07. , Ajuste relajado , Sentimiento estructurado , Jacquard , Botones de nácar , Número de artículo 2560000092 , Fabricado en China",
            },
            9: {
              title: "Suéter de alpaca",
              description:
                "Suéter liviano de corte regular confeccionado con una suave mezcla de alpaca italiana con hombros doblados y sutiles detalles de moda. Acabado con un clásico cuello redondo y costilla ancha., Material, 48% alpaca, 26% poliamida reciclada, 14% lana certificada, 8% poliamida, 2% elastano, 2% viscosa",
            },
            10: {
              title: "Cárdigan Mouline",
              description:
                "Cárdigan en corte relajado de hilo mouliné aireado en mezcla de alpaca y lana. Tiene una sensación suave y voluminosa y elegantes botones corozo., 50% lana, 40% acrílico, 10% alpaca",
            },

            11: {
              title: "Cárdigan Mouline",
              description:
                "Cárdigan en corte relajado de hilo mouliné aireado en mezcla de alpaca y lana. Tiene una sensación suave y voluminosa y elegantes botones corozo., 50% lana, 40% acrílico, 10% alpaca",
            },
            12: {
              title: "Pantalones de mezcla de lino de ajuste relajado",
              description:
                "Pantalón de traje de corte relajado con pliegues en la parte delantera y mano flotante Los pantalones están confeccionados en tejido Panamá 290 g/m² mezclado con viscosa LENZING™ ECOVERO™ y lino europeo para un diseño robusto y duradero. Tratamiento de lavado enzimático, bolsillos traseros y cierre de barbilla , 60 % LENZING™ECOVERO™ viscosa , 20% algodón , 20 % lino europeo , 290 g/m²",
            },
            13: {
              title: "Pantalones de mezcla de lino de ajuste relajado",
              description:
                "Pantalón de traje de corte relajado con pliegues en la parte delantera y mano flotante Los pantalones están confeccionados en tejido Panamá 290 g/m² mezclado con viscosa LENZING™ ECOVERO™ y lino europeo para un diseño robusto y duradero. Tratamiento de lavado enzimático, bolsillos traseros y cierre de barbilla , 60 % LENZING™ECOVERO™ viscosa , 20% algodón , 20 % lino europeo , 290 g/m²",
            },
            14: {
              title: "Chaqueta utilitaria | Verde",
              description:
                "ASLAK es un recién llegado para SS22. Una chaqueta holgada de inspiración militar con muchos bolsillos, delanteros, traseros e interiores en varios tamaños. Viene con botones de bocina y costuras superiores en todas partes. Un lienzo de algodón italiano de peso medio. Para una sensación suave en las manos, las prendas han sido teñidas, lavadas y caídas.",
            },
            15: {
              title: "Franco Mezcla de lana Rock",
              description:
                "Abrigo medio corto diseñado con tapeta de botones y creado en un hilo de lana multihilo liso y medio pesado de la conocida empresa italiana de tejido de telas Manteco., Material , 40% lana , 35% acrílico , 20% poliéster , 5% poliamida , 520 g/m2",
            },
            16: {
              title: "Freddy Camisa con estampado integral",
              description:
                "Camisa ligera en material de algodón aireado, diseñada con estampado integral y dobladillo recto. , Material , 100% algodón",
            },
            17: {
              title: "Atlas Chaqueta bomber",
              description:
                "Chaqueta de transición estilo bombardero de ajuste relajado hecha de una mezcla de poliamida brillante con un acabado repelente al agua. Con un bolsillo en la manga en el brazo izquierdo y una sensación cepillada y sedosa. El acolchado Primaloft® y la cremallera NN.07 proporcionan comodidad y protección adicionales., Material, 75% poliéster, 25% poliamida",
            },
            18: {
              title: "BOINA | Lana | Negro",
              description:
                "La boina francesa original de la clásica marca de ropa de trabajo Le Laboureur. 100% lana. Fabricado en Francia",
            },
            19: {
              title: "MOC DERBY | Pradera cerosa y áspera",
              description:
                "Los zapatos Bright Shoemakers están elaborados con 100 años de orgullosa tradición en la fabricación de calzado español, con más de 200 etapas de producción y hasta 9 meses de curtido dependiendo de las pieles. Este estilo “Moc Derby” está confeccionado con un ribete de tormenta dentado de 360 grados y una suela exterior de cuero natural apilada doble con tacón de bloque apilado con cubierta de goma. La combinación de colores de pradera cerosa y rugosa está hecha especialmente solo para HANSEN GARMENTS.",
            },
            20: {
              title: "STRUMMER GIBSON | Zapato de cuero | Negro",
              description:
                "Joe Strummer del zapato exclusivo 'The Clash'. Está bien surcado con una suela EVA liviana y presenta el patrón de brogue '593' de Gibson en la puntera. Realizado desde finales de los años cincuenta, renacido para la generación punk.",
            },
            21: {
              title:
                "VILLUM 28-50-2 | Abrigo clásico de doble pecho | Lana Premium",
              description:
                "VILLUM es un clásico abrigo cruzado con solapas de lanza y dos bolsillos delanteros con solapa. Está forrado en algodón y tiene un bolsillo interior de ribete con botones de seguridad. La silueta es clásica y cae por debajo de la rodilla. El tejido italiano es una lana pesada, lujosa y ultrasuave con una superficie ligeramente afieltrada.",
            },
          },
        },
      },
      en: {
        translation: {
          ecommerce: "E-COMMERCE",
          home: "HOME",
          cart: "CART",
          category: "Category",
          price: "Price",
          all: "All",
          coat: "Coat",
          sweater: "Sweater",
          shirt: "Shirt",
          pants: "Pants",
          shoes: "Shoes",
          beret: "Beret",
          highestPrice: "Highest price",
          lowestPrice: "Lowest price",
          addToCart: "Add to cart",

          back: "Return",
          buyNow: "Buy Now",
          return: "Free Return",
          returnTwo: "You have 30 days from receipt",
          stock: "In stock",
          stockTwo: "Stocked and shipped by",
          ProductNotFound: "Product not found",
          buy: "Purchase completed",

          order: "Order Summary",
          shipment: "Shipping",
          total: "Total",
          emptyCart: "Empty Cart",
          NumberOfProducts: "Number of products",

          products: {
            1: {
              title: "Refined Work Jacket | Zambia",
              description:
                "ERLING is one of HANSEN's signature pieces. A workwear-inspired jacket with a regular fit, it comes with horn buttons, two lower welt pockets, one upper patch pocket, and two inside pockets. The edges and cuffs are bound. Inspired by traditional African textiles, this French jacquard fabric features highly textured geometric motifs resembling hand embroidery set against a roughly woven striped background. The soft handle makes the jacket look like a vintage find. , 49% Cotton 40% Polyester 7% Acrylic 3% Other Fibers 1% Wool, Regular Fit, Unlined, Horn Buttons, Origin: France, Made in Europe",

            },
            2: {
              title: "Work Jacket | Beige",
              description:
                "BENDIK is an easy-fitting, workwear-inspired jacket crafted from cotton gabardine twill with a soft, lightly brushed surface. It has three front patch pockets and one inside pocket. The inside yoke and bindings are striped cotton. A heavy-weight solid gabardine twill from Italy with a brushed surface. 100% cotton twill, Horn buttons, Three patch pockets, One inside pocket, Garment washed, Origin: Italy, Made in Europe",

            },
            3: {
              title: "Hooded Winter Coat | Reflective Green",
              description:
                "STORM is an updated version of our previous STORM jacket. It comes with a full 100% wool lining, a large hood, large, secure pockets, drawstrings, and a large overlay at the front. This version of STORM is made from two different shell fabrics: a vintage-look waxed cotton canvas blend made in the UK and a heavy-duty canvas with a REFLECTIVE coating from Italy. Both are durable, windproof, and water-repellent. The fabrics are made by one of Italy's finest suppliers of technical and outdoor fabrics, with waxed cotton from the UK and 100% wool lining from Portugal. Robust, warm, windproof, and water-repellent.",


            },
            4: {
              title: "Refined Work Jacket | Gardener",
              description:
                "ERLING is one of HANSEN's signature items. A workwear-inspired jacket with a regular fit, it comes with horn buttons, two lower welt pockets, one upper patch pocket, and two inside pockets. The cuffs, hem, and collar are bound in self-fabric. The fabric is a French-made jacquard featuring an abstract foliage design composed of different shades of green and black. and different textures. It's garment washed for a softer feel.",

            },
            5: {
              title: "Casual Classic Shirt | True Blue",
              description:
                "HENNING is Hansen's everyday shirt. The design is simple and free of unnecessary details. The fit is relaxed, and the shirt is sewn with carved seams on the sleeves and sides. HENNING comes with a chest pocket, a French placemat, and natural mother-of-pearl buttons. This lightweight Italian cotton twill is very soft and drapes gently against the body. It's extremely comfortable to wear, which is why it's part of our collections every season.",

            },
            6: {
              title: "Everyday Pleated Wide Leg Trousers | Black",
              description:
                "BOBBY is a pair of wide-leg trousers that work well for any age or body shape. It features pleats at the front, back pockets, and turn-ups at the hem. The side seam is twisted to give an easy, relaxed shape that follows the body in a very organic way and makes the trousers super comfortable to wear. The fabric is a solid, woven gabardine twill from Italy with a washed-effect surface. Perfect for heavy-duty and everyday use.",

            },
            7: {
              title: "Jean Pants",
              description:
                "BOBBY is a pair of wide-cut pants that work well for any age or body shape. It has pleats in the front, back pockets, and turn-ups at the hem. The side seam is twisted to give an easy, relaxed shape that follows the body in a comfortable way.It's organic and makes the pants super comfortable to wear. The fabric is a solid, woven gabardine twill from Italy with a washed-effect surface. Perfect for heavy-duty and everyday use. 100% cotton twill, Horn buttons, Loose fit, Single-pleat front, Folded cuffs, Twisted side seam, Made in Europe.",

            },
            8: {
              title: "Lime Coupe Jacquard Shirt",
              description:
                "Regular-fit casual work shirt crafted from indigo cotton with a textured lime jacquard coupe. Finished with mother-of-pearl buttons bearing the NN.07 logo. Relaxed fit, Structured feel, Jacquard, Mother-of-pearl buttons, Item number 2560000092, Made in China.",

            },
            9: {
              title: "Alpaca Sweater",
              description:
                "Lightweight, regular-fit sweater crafted from a soft Italian alpaca blend with rolled shoulders and subtle on-trend details. Finished with a classic crew neck and wide rib. Material: 48% alpaca, 26% recycled polyamide, 14% certified wool, 8% polyamide, 2% elastane, 2% viscose",

            },
            10: {
              title: "Mouline Cardigan",
              description:
                "Relaxed-fit cardigan made from airy mouliné yarn in an alpaca and wool blend. It has a soft, voluminous feel and elegant corozo buttons., 50% wool, 40% acrylic, 10% alpaca",
            },


            11: {

              title: "Mouline Cardigan",
              description:
                "Relaxed-fit cardigan made of airy mouliné yarn in an alpaca and wool blend. It has a soft, voluminous feel and elegant corozo buttons., 50% wool, 40% acrylic, 10% alpaca",
            },
            12: {

              title: "Relaxed-fit linen-blend trousers",
              description:
                "Relaxed-fit suit trousers with front pleats and a flowing hand. The trousers are made from 290 g/m² Panama fabric blended with LENZING™ ECOVERO™ viscose and European linen for a robust and durable design. Enzyme wash treatment, back pockets and chin closure, 60% LENZING™ ECOVERO™ viscose, 20% cotton, 20% European linen, 290 g/m².",
            },
            13: {

              title: "Relaxed fit linen blend trousers",
              description:
                "Relaxed fit suit trousers with front pleats and a flowing hand. The trousers are crafted from 290 g/m² Panama fabric blended with LENZING™ ECOVERO™ viscose and European linen for a robust and durable design. Enzyme wash treatment, back pockets and chin closure, 60% LENZING™ ECOVERO™ viscose, 20% cotton, 20% European linen, 290 g/m².",
            },
            14: {

              title: "Utility Jacket | Green",
              description:
                "ASLAK is a newcomer for SS22. A loose-fitting, military-inspired jacket with plenty of pockets—front, back, and interior—in various sizes. It comes with horn buttons and topstitching throughout. A mid-weight Italian cotton canvas. For a soft hand feel, the garments have been dyed, washed, and tumbled.",
            },
            15: {

              title: "Franco Wool Blend Rock",
              description:
                "Mid-short coat designed with a button placket and created in a medium-heavy, plain multi-strand wool yarn from the renowned Italian fabric weaving company Manteco. Material: 40% wool, 35% acrylic, 20% polyester, 5% polyamide, 520 g/m2",
            },
            16: {

              title: "Freddy All-Over Print Shirt",
              description:
                "Lightweight shirt in airy cotton material, designed with an all-over print and a straight hem. Material: 100% cotton.",
            },
            17: {

              title: "Atlas Bomber Jacket",
              description:
                "Relaxed-fit transitional bomber jacket made from a glossy polyamide blend with a water-repellent finish. Featuring a sleeve pocket on the left arm and a silky brushed feel. Primaloft® padding and a NN.07 zipper provide additional comfort and protection. Material: 75% polyester, 25% polyamide",
            },
            18: {

              title: "BERET | Wool | Black",
              description:
                "The original French beret from classic workwear brand Le Laboureur. 100% wool. Made in France",
            },
            19: {

              title: "MOC DERBY | Waxy Prairie Rough",
              description:
                "Bright Shoemakers shoes are crafted with 100 years of proud Spanish shoemaking tradition, with over 200 production steps and up to 9 months of tanning depending on the hides. This Moc Derby style is crafted with a 360-degree serged storm welt and a double-stacked natural leather outsole with a rubber-covered stacked block heel. The waxy prairie and rough color combination is specially made just for HANSEN GARMENTS.",
            },
            20: {

              title: "STRUMMER GIBSON | Leather Shoe | Black",
              description:
                "Joe Strummer's signature shoe from 'The Clash'. It's well-grooved with a lightweight EVA sole and features Gibson's '593' brogue pattern on the toe. Made since the late 1950s, it was reborn for the punk generation.",
            },
            21: {

              title:
                "VILLUM 28-50-2 | Classic Double-Breasted Coat | Premium Wool",
              description:
                "VILLUM is a classic double-breasted coat with peak lapels and two front flap pockets. It's cotton-lined and has an interior welt pocket with security buttons. The silhouette is classic and falls below the knee. The Italian fabric is a luxurious, ultra-soft, heavyweight wool with a lightly felted surface.",
            },
          },
        },
      },
    },
    lng: "es",
    fallbackLng: "es",
    interpolation: { escapeValue: false },
  });
}

export default i18n;
