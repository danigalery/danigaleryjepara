document.addEventListener('DOMContentLoaded', function() {
    // Data Produk (Contoh)
    const products = {
        sofaset: [
            {
                id: 1,
                name: "Sofa Minimalis Sandaran Custom",
                price: "Rp 6.850.000",
                image: "sofaset/Sofa1.jpg",
                description: "Hadirkan sentuhan elegan dan modern ke dalam ruang tamu Anda dengan sofa minimalis berukuran 220x80x110 cm ini. Desain melengkungnya yang unik dipadukan dengan warna beige yang mewah menciptakan kesan hangat dan berkelas. Dilengkapi bantal dekoratif dan material premium yang nyaman, sofa ini tidak hanya menjadi pusat perhatian, tetapi juga menawarkan kenyamanan maksimal untuk bersantai bersama keluarga atau menyambut tamu dengan gaya."
            },
            {
              id: 2,
              name: "Sofa Salur Shaby Black Minimalis",
              price: "Rp 6.800.000",
              image: "sofaset/Sofa2.jpg",
              description: "Sofa Salur Shaby Black hadir dengan ukuran 220x80x100 cm, menawarkan perpaduan sempurna antara gaya modern dan kenyamanan maksimal. Dengan desain salur yang elegan dan warna hitam mewah, sofa ini menjadi pilihan ideal untuk melengkapi ruang tamu Anda dengan kesan stylish dan berkelas. Dibuat dari material premium yang tahan lama, sofa ini dilengkapi dengan bantalan empuk untuk kenyamanan ekstra. Dengan harga Rp6.800.000, Sofa Salur Shaby Black adalah investasi yang sempurna untuk menghadirkan suasana eksklusif di rumah Anda."
          },
          {
              id: 3,
              name: "Sofa Shena Classic Custom",
              price: "Rp 6.200.000",
              image: "sofaset/Sofa3.jpg",
              description: "Sofa Shena Classic Custom berukuran 220x80x100 cm hadir dengan desain klasik yang elegan, sempurna untuk melengkapi ruang tamu Anda dengan nuansa mewah. Dilengkapi detail paku hias di bagian sandaran lengan melengkung dan kaki kayu solid yang kokoh, sofa ini menawarkan perpaduan antara estetika klasik dan kenyamanan modern. Dibuat menggunakan material berkualitas tinggi, sofa ini memberikan dudukan yang empuk dan tahan lama. Dengan harga Rp6.200.000, Sofa Shena Classic Custom adalah pilihan terbaik untuk Anda yang menginginkan sentuhan timeless di rumah Anda."
          },
          {
              id: 4,
              name: "Sofa 2 Seat Shaby Custom",
              price: "Rp 4.200.000",
              image: "sofaset/Sofa4.jpg",
              description: "Sofa 2 Seat Shaby Custom hadir dengan desain elegan dan minimalis yang cocok untuk melengkapi ruang tamu Anda. Dengan ukuran Panjang 160 cm, Lebar 80 cm, dan Tinggi 90 cm, sofa ini dirancang menggunakan rangka kayu solid berkualitas, dilapisi busa empuk, dan kain premium berwarna netral yang mudah dipadukan dengan berbagai tema dekorasi. Dilengkapi kaki kayu jati kokoh, sofa ini tidak hanya nyaman tetapi juga tahan lama. Anda dapat memilih warna kain dan finishing kayu sesuai selera, menjadikannya pilihan sempurna untuk ruang tamu yang lebih berkelas. Tersedia dengan harga Rp4.200.000, sofa ini merupakan perpaduan sempurna antara kenyamanan dan gaya dari Dani Galeri Jepara."
          },
          {
              id: 5,
              name: "Sofa Shabyhigs 1 Minimalis",
              price: "Rp 6.550.000",
              image: "sofaset/Sofa5.jpg",
              description: "Hadir dengan desain modern dan minimalis, Sofa Shabyhigs 1 adalah pilihan sempurna untuk memberikan sentuhan elegan pada ruang tamu Anda. Dengan ukuran Panjang 200 cm, Lebar 80 cm, dan Tinggi 90 cm, sofa ini menawarkan kenyamanan maksimal serta estetika yang menarik. Didesain dengan rangka kayu solid berkualitas dan dilapisi busa empuk, sofa ini dibalut kain premium berwarna oranye hangat yang memberikan kesan mewah dan berkelas. Kaki sofa berbahan kayu jati menambah kesan kokoh dan tahan lama. Tersedia dengan harga Rp6.500.000, Sofa Shabyhigs 1 Minimalis adalah pilihan tepat untuk menciptakan ruang yang nyaman dan stylish dari Dani Galeri Jepara."
          },
          {
              id: 6,
              name: "Shabbychig Soffa Minimalis",
              price: "Rp 6.800.000",
              image: "sofaset/Sofa6.jpg",
              description: "Transformasikan ruang tamu Anda dengan Shabbychic Soffa Minimalis, sofa bergaya elegan yang memadukan kesan klasik dan modern. Dengan desain yang simpel namun memikat, sofa ini dirancang khusus untuk memberikan kenyamanan dan estetika maksimal pada hunian Anda."
          },
          {
              id: 7,
              name: "Sofa Shaby Lengkung Custom",
              price: "Rp 6.800.000",
              image: "sofaset/Sofa7.jpg",
              description: "Pilihan sempurna untuk menciptakan suasana mewah dan nyaman di ruang tamu Anda. Dengan desain lengkung yang elegan dan detail lipatan vertikal, sofa ini memadukan estetika modern dengan kenyamanan maksimal. Berukuran 220 cm x 80 cm x 100 cm, sofa ini dibuat dari rangka kayu solid yang kokoh, busa premium, dan kain lembut berkualitas tinggi. Warna putih netralnya menjadikannya mudah dipadukan dengan berbagai tema dekorasi, menjadikannya tidak hanya sebagai furnitur, tetapi juga elemen dekorasi yang memikat."
          },
          {
              id: 8,
              name: "Sofa Modern Salur 3 Seat",
              price: "Rp 6.200.000",
              image: "sofaset/Sofa8.jpg",
              description: "Hadirkan nuansa modern yang elegan di ruang tamu Anda dengan Sofa Modern Salur 3 Seat. Sofa ini memiliki desain minimalis dengan aksen garis vertikal pada dudukan yang menonjolkan kesan mewah dan rapi. Dibuat dengan rangka kokoh, busa empuk berkualitas tinggi, dan balutan kain lembut yang nyaman, sofa ini mampu memberikan pengalaman duduk yang menyenangkan. Warna netralnya dipadukan dengan aksen kaki berlapis emas, menjadikannya pusat perhatian di setiap ruangan. Dengan kapasitas tiga dudukan, sofa ini sempurna untuk keluarga atau ruang tamu bergaya modern yang fungsional dan estetis.Hadirkan nuansa modern yang elegan di ruang tamu Anda dengan Sofa Modern Salur 3 Seat. Sofa ini memiliki desain minimalis dengan aksen garis vertikal pada dudukan yang menonjolkan kesan mewah dan rapi. Dibuat dengan rangka kokoh, busa empuk berkualitas tinggi, dan balutan kain lembut yang nyaman, sofa ini mampu memberikan pengalaman duduk yang menyenangkan. Warna netralnya dipadukan dengan aksen kaki berlapis emas, menjadikannya pusat perhatian di setiap ruangan. Dengan kapasitas tiga dudukan, sofa ini sempurna untuk keluarga atau ruang tamu bergaya modern yang fungsional dan estetis."
          },
            // Tambahkan 7 produk stainless lainnya
        ],
        stainless: [
            {
                id: 1,
                name: "Meja Konsul Stainless Cincin",
                price: "Rp 5.900.000",
                image: "furniturestainless/konsul1.jpg",
                description: "Meja konsul ini menggabungkan keindahan material berkualitas tinggi dengan desain yang unik. Kaki meja berbentuk cincin yang terbuat dari stainless steel dengan finishing emas memberikan kesan kokoh dan mewah. Top meja marmer putih yang luas dan halus memberikan sentuhan elegan dan natural. Dengan dimensi P.130 cm x L.40 cm x T.80 cm, meja ini cocok ditempatkan di berbagai ruangan, seperti ruang tamu, foyer, atau kamar tidur."
            },
            {
              id: 2,
              name: "Meja Konsul Round Stainless",
              price: "Rp 7.500.000",
              image: "furniturestainless/konsul2.jpg",
              description: "Meja Konsul Bundar Stainless Steel dengan desain kaki unik berbentuk oval ganda ini akan menjadi pusat perhatian di ruangan Anda. Kombinasi stainless steel dengan warna emas yang mewah dan top marmer putih yang elegan memberikan kesan modern dan sophisticated. Ukurannya yang ideal, P.130 cm x L.45 cm x T 80 cm, membuatnya cocok untuk berbagai ruangan, baik sebagai meja pajangan maupun sebagai meja samping sofa."
          },
          {
              id: 3,
              name: "Meja Konsul Stainless Audy",
              price: "Rp 8.000.000",
              image: "furniturestainless/konsul3.jpg",
              description: "Dapatkan sentuhan kemewahan di rumah Anda dengan Meja Konsul Audy. Terbuat dari bahan stainless steel berkualitas tinggi dengan lapisan emas yang tahan lama, meja ini dirancang untuk penggunaan jangka panjang. Top marmer putih yang natural menambah kesan elegan dan mudah dibersihkan. Dengan ukuran P.140 cm x L.40 cm x T 80 cm, meja ini menawarkan ruang yang cukup untuk memamerkan dekorasi Anda."
          },
          {
              id: 4,
              name: "Coffe Table Modern Stainless",
              price: "Rp 4.500.000",
              image: "furniturestainless/CoffeTableModern.jpg",
              description: "Meja Tengah Berkualitas Tinggi Terbuat dari bahan stainless steel berkualitas tinggi dengan lapisan emas yang tahan lama, meja ini dirancang untuk penggunaan jangka panjang. Kaca tempered yang digunakan sebagai top table memberikan kekuatan ekstra dan mudah dibersihkan. Dengan ukuran P.100 cm x L.50 cm x T.55 cm, meja ini adalah investasi yang sangat baik untuk rumah Anda."
          },
          {
              id: 5,
              name: "Meja Makan Round Stainless",
              price: "Rp 18.000.000",
              image: "furniturestainless/MejaMakan1.jpeg",
              description: "Terbuat dari bahan-bahan berkualitas tinggi, meja makan ini dirancang untuk bertahan lama. Kaki stainless steel yang kuat memberikan dukungan yang stabil, sementara top table marmer yang padat tahan terhadap noda dan goresan. Dengan ukuran D.120 cm x T.78 cm, meja ini adalah investasi yang sangat baik untuk rumah Anda."
          },
          {
              id: 6,
              name: "Meja Makan Classic Stainless",
              price: "Rp 25.500.000",
              image: "furniturestainless/MejaMakan2.png",
              description: "Perpaduan Sempurna antara Klasik dan Modern Nikmati keanggunan klasik dengan sentuhan modern pada meja makan marmer ini. Desain kaki stainless steel yang elegan memberikan kesan mewah, sementara top table marmer yang dingin dan alami memberikan sentuhan klasik. Ukurannya yang besar, P.200 cm x L.100 cm x T.78 cm, mampu menampung keluarga besar dan menjadi pusat perhatian di ruang makan Anda."
          },
          {
              id: 7,
              name: "Meja Makan Luxury Top Marmer",
              price: "Rp 26.000.000",
              image: "furniturestainless/MejaMakan3.jpg",
              description: "Meja Makan Kokoh dan Tahan Lama untuk Generasi Mendatang Dibuat dengan bahan-bahan berkualitas tinggi, meja makan ini dirancang untuk bertahan lama. Kaki stainless steel yang kuat memberikan dukungan yang stabil, sementara top table marmer yang padat tahan terhadap noda dan goresan. Dengan ukuran yang luas, P.200 cm x L.100 cm x T.78 cm, meja ini adalah investasi berharga untuk rumah Anda."
          },
          {
              id: 8,
              name: "Meja Makan Stainless Cincin",
              price: "Rp 18.700.000",
              image: "furniturestainless/MejaMakan4.jpg",
              description: "Meja Makan Serbaguna untuk Segala Acara - Desainnya yang fleksibel membuatnya mudah dipadukan dengan berbagai gaya interior. Ukurannya yang besar, P.180 cm x L.90 cm x T.78 cm, membuatnya cocok untuk acara-acara besar seperti pesta makan malam atau pertemuan keluarga."
          },
          
        ],
        almari: [
            {
                id: 1,
                name: "almari pakaian pintu kaca tengah",
                price: "Rp 18.500.000",
                image: "almari/almari1.jpg",
                description: "Lemari Pakaian Minimalis dengan Sentuhan Elegan Dirancang untuk memberikan tampilan yang bersih dan modern, lemari pakaian ini memiliki desain yang minimalis dengan aksen pintu kaca yang elegan. Ukurannya yang besar, P.300 cm x L.55 cm x T.290 cm, menawarkan ruang penyimpanan yang luas untuk semua pakaian Anda. Kombinasi warna yang netral membuatnya mudah dipadukan dengan berbagai gaya interior."
            },
            {
              id: 2,
              name: "Almari Pakaian Cllasic Duco",
              price: "Rp 17.000.000",
              image: "almari/almari2.jpg",
              description: "Investasi Terbaik untuk Rumah Anda - Dibuat dengan bahan berkualitas tinggi dan finishing duco yang halus, almari pakaian ini dirancang untuk tahan lama. Desain klasiknya yang timeless akan tetap terlihat indah selama bertahun-tahun. Ukurannya yang besar, P.280 cm x L.55 cm x T.260 cm, memberikan ruang penyimpanan yang optimal."
          },
          {
              id: 3,
              name: "Almari Pakaian Minimalis Jumbo",
              price: "Rp 20.500.000",
              image: "almari/almari3.jpg",
              description: "Lemari Pakaian Minimalis dengan Sentuhan Elegan Dirancang untuk memberikan tampilan yang bersih dan modern, lemari pakaian ini memiliki desain yang minimalis dengan aksen pintu kaca yang elegan. Ukurannya yang besar, P.300 cm x L.55 cm x T.320 cm, menawarkan ruang penyimpanan yang luas untuk semua pakaian Anda. Kombinasi warna yang netral membuatnya mudah dipadukan dengan berbagai gaya interior."
          },
          {
              id: 4,
              name: "Almari Armoire Grande Royale",
              price: "Rp 17.200.000",
              image: "almari/almari4.jpg",
              description: "Armoire Grande Royale adalah almari pakaian mewah bergaya klasik dengan sentuhan ukiran elegan khas Jepara, dirancang untuk menciptakan aura kemegahan di ruangan Anda. Dengan ukuran impresif 300 cm x 55 cm x 280 cm, almari ini menawarkan ruang penyimpanan luas yang dipadukan dengan detail ukiran artistik dan mahkota dekoratif di bagian atas. Finishing warna krem lembut menambah kesan anggun sekaligus modern, menjadikannya pilihan sempurna untuk melengkapi interior bergaya klasik, vintage, atau kontemporer mewah. Ideal untuk Anda yang menginginkan furnitur berkelas dengan estetika tak lekang oleh waktu."
          },
          {
              id: 5,
              name: "Almari Pakaian 3 Pintu Duco",
              price: "Rp 10.500.000",
              image: "almari/almari5.jpg",
              description: "Investasi Terbaik untuk Rumah Anda - Dibuat dengan bahan berkualitas tinggi dan finishing duco yang halus, almari pakaian ini dirancang untuk tahan lama. Desain klasiknya yang timeless akan tetap terlihat indah selama bertahun-tahun. Ukurannya yang besar, P.160 cm x L.55 cm x T.200 cm, memberikan ruang penyimpanan yang optimal."
          },
          {
              id: 6,
              name: "Almari Pakaian Pintu 3 Duco White",
              price: "Rp 10.500.000",
              image: "almari/almari6.jpg",
              description: "Investasi Terbaik untuk Rumah Anda Dibuat dengan bahan berkualitas tinggi dan finishing duco yang halus, almari pakaian ini dirancang untuk tahan lama. Desain klasiknya yang timeless akan tetap terlihat indah selama bertahun-tahun. Ukurannya yang besar, P.300 cm x L.55 cm x T.280 cm, memberikan ruang penyimpanan yang optimal."
          },
          {
              id: 7,
              name: "Almari Cllassic Lengkung 6 Pintu",
              price: "Rp 18.000.000",
              image: "almari/almari7.jpg",
              description: "Gabungkan gaya klasik dan modern.Dengan Ukuran yang cukup besar, P.300 cm x L.55 cm x T.280 cm, memberikan ruang penyimpanan yang optimal."
          },
          {
              id: 8,
              name: "Almari Classic Gold Motif Lukisan",
              price: "Rp 23.800.000",
              image: "almari/almari8.jpg",
              description: "Gabungkan gaya klasik dan modern.Dengan Ukuran yang cukup besar, P.300 cm x L.55 cm x T.280 cm, memberikan ruang penyimpanan yang optimal."
          },
            // Tambahkan 7 produk dipan lainnya
        ],
        bufet: [
            {
                id: 1,
                name: "Buffet Salur Minimalis Modern",
                price: "Rp 3.500.000",
                image: "bufet/bufet1.jpg",
                description: "Perpaduan marmer, kayu, dan aksen emas pada lemari buffet ini menciptakan tampilan yang unik dan menarik. Marmer memberikan kesan mewah dan tahan lama, sementara kayu memberikan kehangatan alami. Aksen emas pada gagang dan kaki menambahkan sentuhan kemewahan pada keseluruhan desain."
            },
            {
              id: 2,
              name: "Buffet Minimalis Olympic",
              price: "Rp 5.800.000",
              image: "bufet/bufet2.jpg",
              description: "Lemari buffet putih ini adalah pilihan yang tepat untuk Anda yang menginginkan perabotan yang fungsional dan estetis. Dengan desain minimalis dan warna putih yang bersih, lemari ini akan memberikan sentuhan modern pada ruangan Anda. Dua pintu dan tiga laci memberikan ruang penyimpanan yang cukup untuk berbagai keperluan. Lemari ini sangat serbaguna dan dapat digunakan di berbagai ruangan di rumah Anda."
          },
          {
              id: 3,
              name: "Buffet Credenza Custom",
              price: "Rp 5.700.000",
              image: "bufet/bufet3.jpg",
              description: "Lemari buffet ini tidak hanya cantik, tetapi juga sangat fungsional. Ruang penyimpanan yang cukup di balik pintu-pintu lemari dapat digunakan untuk menyimpan berbagai macam barang, mulai dari peralatan makan hingga pernak-pernik dekoratif. Desainnya yang elegan akan membuat ruangan Anda terlihat lebih teratur dan rapi."
          },
          {
              id: 4,
              name: "Buffet Sampagne Kaca Figura",
              price: "Rp 7.500.000",
              image: "bufet/bufet4.jpg",
              description: "Lemari buffet ini tidak hanya cantik, tetapi juga sangat fungsional. Ruang penyimpanan yang cukup di balik pintu-pintu lemari dapat digunakan untuk menyimpan berbagai macam barang, mulai dari peralatan makan hingga pernak-pernik dekoratif. Desainnya yang elegan akan membuat ruangan Anda terlihat lebih teratur dan rapi."
          },
          {
              id: 5,
              name: "Buffet Hello Kitty Classic",
              price: "Rp 6.500.000",
              image: "bufet/bufet5.jpg",
              description: "Buffet Hello Kitty ini menawarkan desain klasik minimalis dengan sentuhan elegan yang cocok untuk mempercantik ruang keluarga atau kamar anak Anda. Dibuat dari kayu jati atau mahoni berkualitas tinggi, buffet ini hadir dengan finishing cat putih halus serta detail ukiran lembut yang unik. Dilengkapi dengan dua laci dan dua pintu penyimpanan, buffet ini memberikan ruang yang cukup untuk menyimpan barang-barang Anda dengan rapi. Dengan kaki berukir yang menambah keanggunan, furniture ini dapat disesuaikan dengan ukuran atau warna sesuai kebutuhan Anda. Jadikan rumah Anda lebih istimewa bersama Dani Galeri Jepara!"
          },
          {
              id: 6,
              name: "Buffet Custom Minimalis",
              price: "Rp 5.500.000",
              image: "bufet/bufet6.jpg",
              description: "Lemari buffet ini tidak hanya cantik, tetapi juga sangat fungsional. Ruang penyimpanan yang cukup di balik pintu-pintu lemari dapat digunakan untuk menyimpan berbagai macam barang, mulai dari peralatan makan hingga pernak-pernik dekoratif. Desainnya yang elegan akan membuat ruangan Anda terlihat lebih teratur dan rapi."
          },
          {
              id: 7,
              name: "Buffet Custom Minimalis + Figura",
              price: "Rp 6.800.000",
              image: "bufet/bufet7.jpg",
              description: "Buffet Custom Minimalis dengan tambahan figura kaca ini dirancang untuk memberikan sentuhan modern dan elegan pada ruangan Anda. Dibuat dari bahan kayu berkualitas dengan finishing putih glossy, buffet ini menghadirkan desain minimalis yang bersih dan berkelas. Dilengkapi dengan empat pintu penyimpanan yang luas dan pegangan berbentuk cincin, furniture ini memberikan fungsi sekaligus estetika. Figura kaca yang menyertai buffet ini menambahkan dimensi dekoratif, menciptakan kesan ruang yang lebih luas dan terang. Sangat cocok untuk ruang makan, ruang tamu, atau area dekorasi lainnya, buffet ini dapat dipesan sesuai kebutuhan hanya di Dani Galeri Jepara!"
          },
          {
              id: 8,
              name: "Buffet Salur Modern Stainless",
              price: "Rp 8.500.000",
              image: "bufet/bufet8.jpg",
              description: "Buffet Salur Modern Stainless ini menghadirkan desain kontemporer yang elegan dengan sentuhan garis salur vertikal yang memberikan kesan mewah dan minimalis. Dibuat dari bahan kayu berkualitas tinggi dengan aksen stainless gold pada bagian pinggir, buffet ini memancarkan nuansa modern yang cocok untuk berbagai interior rumah. Dilengkapi dengan empat laci tengah dan dua pintu penyimpanan samping, buffet ini tidak hanya fungsional tetapi juga estetis. Finishing putih glossy menambah kesan bersih dan berkelas, menjadikannya pilihan sempurna untuk ruang tamu, ruang makan, atau area dekorasi lainnya. Pesan sekarang di Dani Galeri Jepara untuk custom ukuran dan desain!"
          },
            // Tambahkan 7 produk almari lainnya
        ],
        dipan: [
            {
                id: 1,
                name: "Tempat tidur cllasic shabby",
                price: "Rp 8.700.000",
                image: "dipan/dipan1.jpg",
                description: "Tempat Tidur Classic Shabby adalah dipan mewah dengan sentuhan gaya shabby chic yang memadukan keanggunan klasik dan nuansa romantis. Didesain dengan ukiran khas Jepara yang indah, dipan ini dihiasi headboard dan footboard berlapis kain beludru merah muda cerah dengan aksen kancing tufted yang memberikan kesan mewah dan lembut. Kerangka kayu solid dengan finishing putih elegan memperkuat nuansa vintage yang hangat dan menawan. Tempat tidur ini menjadi pilihan sempurna untuk menciptakan suasana kamar yang nyaman, feminin, dan berkelas"
            },
            {
              id: 2,
              name: "Tempat Tidur Cllasic Tosca/Custom",
              price: "Rp 9.500.000",
              image: "dipan/dipan2.jpg",
              description: "Tempat Tidur Classic Tosca ini menghadirkan nuansa elegan dan mewah dengan desain klasik yang dilengkapi ukiran kayu berkualitas tinggi. Memiliki sandaran berbentuk melengkung yang dilapisi kain bludru tosca lembut, tempat tidur ini tidak hanya memberikan kenyamanan, tetapi juga menambah estetika ruang tidur Anda. Dibuat dari kayu jati atau mahoni solid dengan finishing mewah berwarna tosca dan aksen silver, tempat tidur ini dapat dipesan sesuai ukuran dan warna yang Anda inginkan. Jadikan kamar tidur Anda lebih istimewa dengan furniture premium dari Dani Galeri Jepara!"
          },
          {
              id: 3,
              name: "Tempat Tidur Cllasic Mewah",
              price: "Rp 12.000.000",
              image: "dipan/dipan3.jpg",
              description: "Tempat Tidur Classic Mewah menghadirkan keanggunan yang sempurna untuk kamar tidur Anda dengan desain ukiran megah berwarna emas yang menonjolkan kesan istimewa. Sandaran tinggi berbentuk artistik dihiasi dengan kain bludru abu-abu lembut serta detail kancing berlian yang memberikan tampilan elegan sekaligus kenyamanan. Terbuat dari kayu jati atau mahoni pilihan dengan konstruksi kokoh dan finishing premium, tempat tidur ini sangat cocok bagi Anda yang ingin menciptakan suasana mewah di ruang tidur. Custom tersedia untuk ukuran dan warna sesuai kebutuhan Anda, hanya di Dani Galeri Jepara!"
          },
          {
              id: 4,
              name: "Tempat Tidur Pinky Cllasic",
              price: "Rp 9.200.000",
              image: "dipan/dipan4.jpg",
              description: "Tempat Tidur Pinky Cllasic menghadirkan keanggunan yang sempurna untuk kamar tidur Anda dengan desain ukiran megah berwarna emas yang menonjolkan kesan istimewa. Sandaran tinggi berbentuk artistik dihiasi dengan kain bludru abu-abu lembut serta detail kancing berlian yang memberikan tampilan elegan sekaligus kenyamanan. Terbuat dari kayu jati atau mahoni pilihan dengan konstruksi kokoh dan finishing premium, tempat tidur ini sangat cocok bagi Anda yang ingin menciptakan suasana mewah di ruang tidur. Custom tersedia untuk ukuran dan warna sesuai kebutuhan Anda, hanya di Dani Galeri Jepara!"
          },
          {
              id: 5,
              name: "Tempat Tidur King Custom",
              price: "Rp 11.500.000",
              image: "dipan/dipan5.jpg",
              description: "Tempat Tidur King Custom menghadirkan keanggunan yang sempurna untuk kamar tidur Anda dengan desain ukiran megah berwarna emas yang menonjolkan kesan istimewa. Sandaran tinggi berbentuk artistik dihiasi dengan kain bludru abu-abu lembut serta detail kancing berlian yang memberikan tampilan elegan sekaligus kenyamanan. Terbuat dari kayu jati atau mahoni pilihan dengan konstruksi kokoh dan finishing premium, tempat tidur ini sangat cocok bagi Anda yang ingin menciptakan suasana mewah di ruang tidur. Custom tersedia untuk ukuran dan warna sesuai kebutuhan Anda, hanya di Dani Galeri Jepara!"
          },
          {
              id: 6,
              name: "Tempat Tidur Raja Shabby",
              price: "Rp 9.800.000",
              image: "dipan/dipan6.jpg",
              description: "Tempat Tidur Raja Shabby menghadirkan keanggunan yang sempurna untuk kamar tidur Anda dengan desain ukiran megah berwarna emas yang menonjolkan kesan istimewa. Sandaran tinggi berbentuk artistik dihiasi dengan kain bludru abu-abu lembut serta detail kancing berlian yang memberikan tampilan elegan sekaligus kenyamanan. Terbuat dari kayu jati atau mahoni pilihan dengan konstruksi kokoh dan finishing premium, tempat tidur ini sangat cocok bagi Anda yang ingin menciptakan suasana mewah di ruang tidur. Custom tersedia untuk ukuran dan warna sesuai kebutuhan Anda, hanya di Dani Galeri Jepara!"
          },
          {
              id: 7,
              name: "Tempat Tidur Classic Sultan",
              price: "Rp 14.000.000",
              image: "dipan/dipan7.jpg",
              description: "Tempat Tidur Classic Sultan menghadirkan keanggunan yang sempurna untuk kamar tidur Anda dengan desain ukiran megah berwarna emas yang menonjolkan kesan istimewa. Sandaran tinggi berbentuk artistik dihiasi dengan kain bludru abu-abu lembut serta detail kancing berlian yang memberikan tampilan elegan sekaligus kenyamanan. Terbuat dari kayu jati atau mahoni pilihan dengan konstruksi kokoh dan finishing premium, tempat tidur ini sangat cocok bagi Anda yang ingin menciptakan suasana mewah di ruang tidur. Custom tersedia untuk ukuran dan warna sesuai kebutuhan Anda, hanya di Dani Galeri Jepara!"
          },
          {
              id: 8,
              name: "Tempat Tidur Classic Kombinasi Silver",
              price: "Rp 9.000.000",
              image: "dipan/dipan8.jpg",
              description: "Tempat Tidur Classic Kombinasi Silver menghadirkan keanggunan yang sempurna untuk kamar tidur Anda dengan desain ukiran megah berwarna emas yang menonjolkan kesan istimewa. Sandaran tinggi berbentuk artistik dihiasi dengan kain bludru abu-abu lembut serta detail kancing berlian yang memberikan tampilan elegan sekaligus kenyamanan. Terbuat dari kayu jati atau mahoni pilihan dengan konstruksi kokoh dan finishing premium, tempat tidur ini sangat cocok bagi Anda yang ingin menciptakan suasana mewah di ruang tidur. Custom tersedia untuk ukuran dan warna sesuai kebutuhan Anda, hanya di Dani Galeri Jepara!"
          },
            // Tambahkan 7 produk almari lainnya
        ]
    };
  
    // Navigasi
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
  
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hapus kelas active dari semua link dan section
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Tambah kelas active ke link yang diklik
            this.classList.add('active');
            
            // Tampilkan section yang sesuai
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });
  
    // Kategori Tab
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadProducts(this.getAttribute('data-category'));
        });
    });
  
    // Fungsi untuk memuat produk
    function loadProducts(category) {
        const productGrid = document.querySelector('.product-grid');
        productGrid.innerHTML = ''; // Bersihkan grid
  
        products[category].forEach(product => {
            const productCard = `
                <div class="product-card" data-product-id="${product.id}">
                    <img src="images/${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                    <button class="details-btn" onclick="showProductDetails(${product.id}, '${category}')">
                        Selengkapnya
                    </button>
                </div>
            `;
            productGrid.innerHTML += productCard;
        });
    }
  
    // Fungsi untuk menampilkan detail produk
    window.showProductDetails = function(productId, category) {
      const product = products[category].find(p => p.id === productId);
      
      const modal = document.createElement('div');
      modal.className = 'product-modal';
      modal.innerHTML = `
          <div class="modal-content">
              <span class="close-modal">&times;</span>
              <div class="product-image-container">
                  <img src="images/${product.image}" alt="${product.name}">
              </div>
              <div class="product-details">
                  <h2>${product.name}</h2>
                  <p class="price">${product.price}</p>
                  <p class="description">${product.description}</p>
                  <a href="https://wa.me/+6285786853280?text=Saya tertarik dengan ${product.name}" 
                     class="whatsapp-btn" target="_blank">
                      <i class="fab fa-whatsapp"></i> Pesan via WhatsApp
                  </a>
              </div>
          </div>
      `;
  
        document.body.appendChild(modal);
  
        // Tutup modal
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.onclick = function() {
            document.body.removeChild(modal);
        }
  
        // Tutup modal jika klik di luar modal
        modal.onclick = function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        }
    }
  
    // Menangkap elemen input dan tombol pencarian
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  
  // Menambahkan event listener pada tombol pencarian
  searchBtn.addEventListener('click', function() {
      const searchTerm = searchInput.value.toLowerCase();
  
      // Memfilter data produk berdasarkan nama yang diinputkan pengguna
      const filteredProducts = [];
      for (const category in products) {
          products[category].forEach(product => {
              if (product.name.toLowerCase().includes(searchTerm)) {
                  filteredProducts.push(product);
              }
          });
      }
  
      // Menampilkan hasil pencarian
      displayProducts(filteredProducts);
  });
  
  // Fungsi untuk menampilkan produk
  function displayProducts(products) {
      const productGrid = document.querySelector('.product-grid');
      productGrid.innerHTML = '';
  
      products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
          productCard.dataset.productId = product.id;
  
          productCard.innerHTML = `
              <img src="images/${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p class="price">${product.price}</p>
              <button class="details-btn">Selengkapnya</button>
          `;
  
          productGrid.appendChild(productCard);
      });
  }
  });let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.remove('active');
          if (i === index) {
              slide.classList.add('active');
          }
      });
  }
  
  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }
  
  showSlide(currentIndex);
  setInterval(nextSlide, 3000); // Berganti slide setiap 3 detik
  
  
  
  // Tambahkan CSS untuk modal
  const modalStyles = `
  .product-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
  }
  
  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    max-width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
  }
  
  .close-modal {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 2rem;
    cursor: pointer;
  }
  
  .whatsapp-btn {
    display: inline-block;
    background: #25D366;
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    text-decoration: none;
    margin-top: 1rem;
  }
  
  .whatsapp-btn i {
    margin-right: 8px;
  }
  `;
  
  // Tambahkan styles ke head
  const styleSheet = document.createElement("style");
  styleSheet.innerText = modalStyles;
  document.head.appendChild(styleSheet);