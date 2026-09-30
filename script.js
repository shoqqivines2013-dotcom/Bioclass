/* =========================================================
   BIOCLASS — 8-SINF BIOLOGIYA
   ========================================================= */

/* =========================
   MAVZULAR
========================= */

const topics = [
  /* I BOB */
  {
    chapter: "I BOB. ODAM ORGANIZMI TO‘G‘RISIDA UMUMIY MA’LUMOT",
    icon: "🧬",
    topics: [
      {
        title: "Odam organizmining hujayraviy tuzilishi",
        icon: "🔬",
        text: `
            <p>Odam organizmi hujayralardan tashkil topgan. Hujayra organizmning
            tuzilishi va faoliyatining asosiy birligi hisoblanadi.</p>

            <h3>Hujayraning asosiy qismlari</h3>
            <ul>
                <li>Hujayra membranasi — hujayrani tashqi muhitdan ajratadi.</li>
                <li>Sitoplazma — hujayra ichidagi asosiy muhit.</li>
                <li>Yadro — irsiy axborotni saqlaydi va hujayra faoliyatini boshqarishda qatnashadi.</li>
            </ul>

            <div class="remember">
            <b>Esda saqlang:</b> hujayra — tirik organizmning asosiy tuzilish va funksional birligi.
            </div>
            `,
      },

      {
        title: "Hujayra va organizmning hayotiy xossalari",
        icon: "⚡",
        text: `
            <p>Hujayralarda oziqlanish, nafas olish, modda almashinuvi,
            o‘sish, rivojlanish va ko‘payish bilan bog‘liq jarayonlar kechadi.</p>

            <h3>Asosiy hayotiy xossalar</h3>
            <ul>
                <li>moddalar almashinuvi;</li>
                <li>o‘sish va rivojlanish;</li>
                <li>ta’sirlanish;</li>
                <li>ko‘payish;</li>
                <li>harakatlanish.</li>
            </ul>
            `,
      },

      {
        title: "To‘qimalar, organlar va organlar sistemasi",
        icon: "🫀",
        text: `
            <p>O‘xshash tuzilish va vazifaga ega hujayralar to‘qimalarni hosil qiladi.
            Bir necha to‘qimalar birlashib organlarni tashkil etadi.</p>

            <h3>Tashkil topish ketma-ketligi</h3>
            <p><b>Hujayra → to‘qima → organ → organlar sistemasi → organizm.</b></p>

            <p>Masalan, yurak bir nechta to‘qimalardan tashkil topgan organ bo‘lib,
            qon aylanish sistemasining muhim qismidir.</p>
            `,
      },
    ],
  },

  /* II BOB */
  {
    chapter: "II BOB. ORGANIZM FUNKSIYASINING BOSHQARILISHI",
    icon: "🧠",
    topics: [
      {
        title: "Organizm funksiyasining gumoral va nerv boshqarilishi",
        icon: "🧠",
        text: `
            <p>Organizm faoliyati nerv sistemasi va biologik faol moddalar orqali
            boshqariladi. Nerv boshqarilishi tezkor bo‘lsa, gumoral boshqarilish
            moddalar orqali amalga oshadi.</p>

            <h3>Nerv boshqarilishi</h3>
            <p>Nerv impulslari orqali organlar faoliyati boshqariladi.</p>

            <h3>Gumoral boshqarilish</h3>
            <p>Gormonlar kabi biologik faol moddalar qon orqali turli organlarga ta’sir qiladi.</p>
            `,
      },

      {
        title: "Sekretsiya bezlari, qalqonsimon bez",
        icon: "🧪",
        text: `
            <p>Sekretsiya bezlari organizm faoliyatini boshqarishda muhim moddalarni ishlab chiqaradi.</p>
            <p>Qalqonsimon bez bo‘yin sohasida joylashgan bo‘lib,
            uning gormonlari moddalar almashinuvi va organizm rivojlanishida muhim rol o‘ynaydi.</p>
            `,
      },

      {
        title: "Qalqonoldi, gipofiz, ayrisimon va buyrakusti bezlari",
        icon: "🧪",
        text: `
            <p>Ichki sekretsiya bezlari organizmning o‘sishi, rivojlanishi,
            moddalar almashinuvi va boshqa jarayonlarni boshqarishda qatnashadi.</p>

            <ul>
                <li>Gipofiz — ko‘plab boshqa bezlar faoliyatiga ta’sir qiladi.</li>
                <li>Qalqonoldi bezlari — kalsiy almashinuvida qatnashadi.</li>
                <li>Buyrakusti bezlari — turli gormonlar ishlab chiqaradi.</li>
                <li>Ayrisimon bez — immun tizimi rivojlanishida muhim.</li>
            </ul>
            `,
      },

      {
        title: "Oshqozonosti va jinsiy bezlar",
        icon: "🧪",
        text: `
            <p>Oshqozonosti bezi hazm qilishda va qondagi glyukoza miqdorini
            boshqarishda qatnashadi.</p>

            <p>Jinsiy bezlar jinsiy hujayralar hamda organizm rivojlanishiga
            ta’sir qiluvchi gormonlarni hosil qiladi.</p>
            `,
      },
    ],
  },

  /* III BOB */
  {
    chapter: "III BOB. TAYANCH-HARAKATLANISH SISTEMASI",
    icon: "🦴",
    topics: [
      {
        title:
          "Tayanch-harakatlanish sistemasining tuzilishi, funksiyasi va ahamiyati",
        icon: "🦴",
        text: `
            <p>Tayanch-harakatlanish sistemasiga skelet va muskullar kiradi.
            Ular tanaga tayanch beradi va harakatni ta’minlaydi.</p>

            <h3>Asosiy vazifalar</h3>
            <ul>
                <li>tanaga tayanch bo‘lish;</li>
                <li>harakatni ta’minlash;</li>
                <li>ichki organlarni himoya qilish;</li>
                <li>qon hujayralari hosil bo‘lishida qatnashish.</li>
            </ul>
            `,
      },

      {
        title: "Suyaklarning tuzilishi va o‘sishi",
        icon: "🦴",
        text: `
            <p>Suyaklar tayanch-harakat sistemasining asosiy qismlaridan biridir.
            Suyak to‘qimasining tarkibida mineral moddalar va organik moddalar mavjud.</p>

            <p>Bolalik va o‘smirlik davrida suyaklar o‘sib, shakllanib boradi.
            To‘g‘ri ovqatlanish va jismoniy faollik suyaklarning rivojlanishi uchun muhim.</p>
            `,
      },

      {
        title: "Suyaklar shikastlanganda birinchi yordam",
        icon: "🩹",
        text: `
            <p>Suyak shikastlanganda jarohatni ortiqcha harakatlantirmaslik
            va tibbiy yordamga murojaat qilish muhim.</p>

            <p>Singan joyni o‘zboshimchalik bilan to‘g‘rilashga urinmaslik kerak.</p>
            `,
      },

      {
        title: "Muskullar",
        icon: "💪",
        text: `
            <p>Muskullar qisqarish xususiyatiga ega bo‘lgan to‘qimalardan tashkil topadi.
            Ular suyaklar bilan birgalikda tananing harakatlanishini ta’minlaydi.</p>

            <h3>Muskullarning ahamiyati</h3>
            <ul>
                <li>harakat;</li>
                <li>qomatni saqlash;</li>
                <li>ayrim ichki organlar harakatini ta’minlash.</li>
            </ul>
            `,
      },

      {
        title: "Muskullarning rivojlanishi, odam qad-qomatining shakllanishi",
        icon: "🏃",
        text: `
            <p>Jismoniy faollik muskullarning rivojlanishiga yordam beradi.
            To‘g‘ri o‘tirish, yurish va harakatlanish qomatning shakllanishida muhim.</p>
            `,
      },
    ],
  },

  /* IV BOB */
  {
    chapter: "IV BOB. QON",
    icon: "🩸",
    topics: [
      {
        title: "Qon va uning vazifasi",
        icon: "🩸",
        text: `
            <p>Qon organizmning ichki muhitiga kiradi. U moddalarni tashish,
            himoya va boshqaruv jarayonlarida qatnashadi.</p>

            <h3>Qonning asosiy vazifalari</h3>
            <ul>
                <li>kislorod va karbonat angidridni tashish;</li>
                <li>oziq moddalarni tashish;</li>
                <li>himoya qilish;</li>
                <li>tana haroratini taqsimlashda qatnashish.</li>
            </ul>
            `,
      },

      {
        title: "Qonning kimyoviy tarkibi",
        icon: "🧪",
        text: `
            <p>Qon plazma va shaklli elementlardan tashkil topadi.
            Plazmaning katta qismini suv tashkil etadi.</p>

            <p>Qonda turli mineral moddalar, oqsillar va boshqa moddalar ham mavjud.</p>
            `,
      },

      {
        title: "Eritrotsitlar",
        icon: "🔴",
        text: `
            <p>Eritrotsitlar — qizil qon hujayralari. Ularning asosiy vazifalaridan
            biri kislorodni tashishdir.</p>

            <p>Eritrotsitlarda gemoglobin mavjud bo‘lib, u kislorod bilan bog‘lana oladi.</p>
            `,
      },

      {
        title: "Leykotsitlar",
        icon: "⚪",
        text: `
            <p>Leykotsitlar — oq qon hujayralari. Ular organizmni turli yot
            agentlardan himoya qilishda qatnashadi.</p>
            `,
      },
    ],
  },

  /* V BOB */
  {
    chapter: "V BOB. QON AYLANISH SISTEMASI",
    icon: "🫀",
    topics: [
      {
        title: "Qon aylanishining ahamiyati, yurakning tuzilishi",
        icon: "🫀",
        text: `
            <p>Qon aylanish sistemasi yurak va qon tomirlaridan tashkil topadi.
            Yurak qonni tomirlar bo‘ylab harakatlantiruvchi asosiy organdir.</p>

            <h3>Yurak</h3>
            <p>Odam yuragi to‘rt kameradan: ikki bo‘lmacha va ikki qorinchadan tashkil topadi.</p>
            `,
      },

      {
        title: "Qon tomirlari, qon aylanish doirasi",
        icon: "🩸",
        text: `
            <p>Qon tomirlari arteriyalar, venalar va kapillyarlarga bo‘linadi.</p>

            <ul>
                <li>Arteriyalar qonni yurakdan olib chiqadi.</li>
                <li>Venalar qonni yurakka olib keladi.</li>
                <li>Kapillyarlarda moddalar almashinuvi amalga oshadi.</li>
            </ul>

            <p>Odam organizmida katta va kichik qon aylanish doiralari mavjud.</p>
            `,
      },

      {
        title: "Qonning qon tomirlari bo‘ylab oqishi",
        icon: "➡️",
        text: `
            <p>Yurak qisqarishi natijasida qon tomirlarga haydaladi.
            Qonning harakati yurak faoliyati va tomirlarning xususiyatlari bilan bog‘liq.</p>
            `,
      },

      {
        title: "Qon aylanish organlari ishining boshqarilishi",
        icon: "⚙️",
        text: `
            <p>Yurak va qon tomirlari faoliyati nerv va gumoral mexanizmlar
            orqali boshqariladi.</p>
            `,
      },

      {
        title: "Tomirlardan qon ketganida birinchi yordam",
        icon: "🩹",
        text: `
            <p>Qon ketish holatida xavfsizlikni ta’minlash va tez tibbiy yordam
            chaqirish muhim. Jarohatga toza bog‘lam qo‘yish mumkin.</p>
            `,
      },
    ],
  },

  /* VI BOB */
  {
    chapter: "VI BOB. NAFAS OLISH SISTEMASI",
    icon: "🫁",
    topics: [
      {
        title: "Nafas olish organining tuzilishi",
        icon: "🫁",
        text: `
            <p>Nafas olish sistemasiga burun bo‘shlig‘i, halqum, hiqildoq,
            traxeya, bronxlar va o‘pkalar kiradi.</p>

            <p>Nafas olish orqali organizm kislorod oladi va karbonat angidridni chiqaradi.</p>
            `,
      },

      {
        title: "O‘pkalar va to‘qimalarda gazlar almashinuvi",
        icon: "🫁",
        text: `
            <p>O‘pkadagi alveolalarda havo va qon o‘rtasida gazlar almashinuvi amalga oshadi.
            Kislorod qonga o‘tadi, karbonat angidrid esa qondan alveolalarga o‘tadi.</p>
            `,
      },

      {
        title:
          "Nafas olishning boshqarilishi, nafas olish organlari kasalliklari",
        icon: "🌬️",
        text: `
            <p>Nafas olish jarayoni nerv sistemasi tomonidan boshqariladi.
            Nafas olish tezligi organizm ehtiyojiga qarab o‘zgarishi mumkin.</p>

            <p>Nafas olish organlarini asrash uchun toza havo, shaxsiy gigiyena
            va sog‘lom turmush tarzi muhim.</p>
            `,
      },
    ],
  },

  /* VII BOB — ENG BATAFSIL */
  {
    chapter: "VII BOB. OVQAT HAZM QILISH SISTEMASI",
    icon: "🍎",
    topics: [
      {
        title: "Ovqat hazm qilish sistemasi organlari",
        icon: "🍎",
        text: `
            <p>Ovqat hazm qilish sistemasi ovqatni qabul qilish, maydalash,
            hazm qilish, oziq moddalarning so‘rilishi va hazm bo‘lmagan
            qoldiqlarni chiqarish bilan bog‘liq jarayonlarda qatnashadi.</p>

            <h3>Asosiy organlar</h3>
            <ul>
                <li>og‘iz bo‘shlig‘i;</li>
                <li>halqum;</li>
                <li>qizilo‘ngach;</li>
                <li>oshqozon;</li>
                <li>ingichka ichak;</li>
                <li>yo‘g‘on ichak.</li>
            </ul>

            <h3>Yordamchi organlar</h3>
            <p>So‘lak bezlari, jigar va oshqozonosti bezi hazm jarayonida muhim
            moddalarni ajratishda qatnashadi.</p>
            `,
      },

      {
        title: "Ovqat hazm qilish organlarining tuzilishi va funksiyasi",
        icon: "🥗",
        text: `
            <p>Ovqat hazm qilish organlari ketma-ket joylashgan bo‘lib,
            har bir bo‘lim o‘ziga xos vazifani bajaradi.</p>

            <h3>1. Og‘iz bo‘shlig‘i</h3>
            <p>Ovqat og‘izda qabul qilinadi va tishlar yordamida maydalanadi.
            Til ovqatni aralashtirish va yutishda qatnashadi.</p>

            <h3>2. Tishlar</h3>
            <ul>
                <li>kurak tishlar — kesishda;</li>
                <li>qoziq tishlar — uzishda;</li>
                <li>kichik va katta oziq tishlar — maydalashda qatnashadi.</li>
            </ul>

            <h3>3. So‘lak</h3>
            <p>So‘lak ovqatni namlaydi va og‘iz bo‘shlig‘idagi hazm jarayonining
            boshlanishida ishtirok etadi.</p>

            <h3>4. Halqum va qizilo‘ngach</h3>
            <p>Yutilgan ovqat halqum orqali qizilo‘ngachga o‘tadi.
            Qizilo‘ngachning mushaklari qisqarishi orqali ovqat oshqozonga siljiydi.</p>

            <h3>5. Oshqozon</h3>
            <p>Oshqozonda ovqat aralashtiriladi va oshqozon shirasi ta’sirida
            hazm jarayoni davom etadi.</p>

            <h3>6. Ingichka ichak</h3>
            <p>Ingichka ichakda hazm jarayonlari davom etadi va ko‘plab
            oziq moddalar qonga yoki limfaga so‘riladi.</p>

            <h3>7. Jigar</h3>
            <p>Jigar hazm jarayonida muhim bo‘lgan o‘t suyuqligini hosil qiladi.
            U organizmdagi boshqa ko‘plab jarayonlarda ham qatnashadi.</p>

            <h3>8. Oshqozonosti bezi</h3>
            <p>Oshqozonosti bezi hazm qilishda qatnashuvchi shirani ishlab chiqaradi.</p>

            <h3>9. Yo‘g‘on ichak</h3>
            <p>Yo‘g‘on ichakda suvning bir qismi so‘riladi va hazm bo‘lmagan
            qoldiqlar najas shakllanishida qatnashadi.</p>

            <h3>Ovqatning umumiy yo‘li</h3>
            <p><b>Og‘iz → halqum → qizilo‘ngach → oshqozon → ingichka ichak
            → yo‘g‘on ichak → chiqarish qismi.</b></p>

            <div class="remember">
                <b>Esda saqlang:</b>
                ovqat hazm qilish sistemasining har bir bo‘limi alohida vazifani
                bajarsa ham, ular bir butun sistema sifatida ishlaydi.
            </div>
            `,
      },

      {
        title: "Ovqat hazm qilishning boshqarilishi",
        icon: "⚙️",
        text: `
            <p>Ovqat hazm qilish jarayoni nerv va gumoral mexanizmlar orqali boshqariladi.</p>

            <p>Ovqatning ko‘rinishi, hidi va iste’mol qilinishi hazm bezlari
            faoliyatiga ta’sir qilishi mumkin.</p>
            `,
      },

      {
        title: "Oshqozon-ichak kasalliklari va ularning oldini olish",
        icon: "🛡️",
        text: `
            <p>Ovqat hazm qilish sistemasini asrash uchun gigiyena qoidalariga
            rioya qilish va sifatli oziq-ovqat iste’mol qilish muhim.</p>

            <h3>Oldini olish</h3>
            <ul>
                <li>qo‘lni ovqatdan oldin yuvish;</li>
                <li>oziq-ovqatni toza saqlash;</li>
                <li>meva va sabzavotlarni yuvish;</li>
                <li>ovqatlanish tartibiga rioya qilish;</li>
                <li>yetarli suv ichish;</li>
                <li>shaxsiy gigiyenaga amal qilish.</li>
            </ul>
            `,
      },
    ],
  },

  /* VIII BOB */
  {
    chapter: "VIII BOB. MODDALAR VA ENERGIYA ALMASHINUVI",
    icon: "⚡",
    topics: [
      {
        title: "Moddalar va energiya almashinuvining ahamiyati",
        icon: "⚡",
        text: `
            <p>Organizm hayot faoliyati uchun doimo moddalar va energiyaga ehtiyoj sezadi.
            Oziq moddalar organizm uchun energiya va qurilish materiali bo‘lib xizmat qiladi.</p>
            `,
      },

      {
        title: "Oqsillar, karbonsuvlar va yog‘lar almashinuvi",
        icon: "🥗",
        text: `
            <p>Oqsillar organizmning muhim qurilish materiallaridan biridir.
            Karbonsuvlar tez energiya manbalaridan biri hisoblanadi.
            Yog‘lar esa energiya zaxirasi va hujayralar tarkibining muhim qismidir.</p>
            `,
      },

      {
        title: "Vitaminlar va ularning ahamiyati",
        icon: "🍊",
        text: `
            <p>Vitaminlar organizmga oz miqdorda kerak bo‘lsa-da, ko‘plab
            hayotiy jarayonlarning normal kechishi uchun muhim.</p>

            <p>Turli va muvozanatli ovqatlanish vitaminlarni olishning muhim manbalaridan biridir.</p>
            `,
      },

      {
        title: "Organizmda energiya sarfi",
        icon: "🔥",
        text: `
            <p>Organizm energiyani harakatlanish, tana haroratini saqlash,
            ichki organlar faoliyati va boshqa jarayonlarga sarflaydi.</p>
            `,
      },
    ],
  },

  /* IX BOB */
  {
    chapter: "IX BOB. TERI VA SIYDIK AJRATISH SISTEMASI",
    icon: "💧",
    topics: [
      {
        title: "Terining tuzilishi va funksiyasi",
        icon: "🖐️",
        text: `
            <p>Teri organizmni tashqi muhit ta’siridan himoya qiladi.
            U sezgi, termoregulyatsiya va ajratish jarayonlarida ham qatnashadi.</p>

            <p>Terining asosiy qatlamlari: epidermis va derma;
            uning ostida teriosti to‘qimasi joylashadi.</p>
            `,
      },

      {
        title: "Ter bezlari va teri hosilalari",
        icon: "💧",
        text: `
            <p>Ter bezlari ter hosil qiladi. Terining hosilalariga
            soch va tirnoqlar ham kiradi.</p>
            `,
      },

      {
        title: "Teri gigiyenasi, teri shikastlanganda birinchi yordam",
        icon: "🧼",
        text: `
            <p>Terini toza saqlash, gigiyena qoidalariga rioya qilish
            va shikastlanganda ehtiyotkorlik bilan tibbiy yordam olish muhim.</p>
            `,
      },

      {
        title: "Siydik ajratish organlarining tuzilishi",
        icon: "🫘",
        text: `
            <p>Siydik ajratish sistemasining asosiy organlari buyraklar,
            siydik yo‘llari, siydik pufagi va siydik chiqarish kanalidir.</p>

            <p>Buyraklar juft organ bo‘lib, qonni filtrlashda muhim rol o‘ynaydi.</p>
            `,
      },

      {
        title: "Siydik ajratish organlarining funksiyasi",
        icon: "💧",
        text: `
            <p>Buyraklar organizmdagi ortiqcha suv, tuzlar va moddalar
            almashinuvi mahsulotlarini chiqarishda qatnashadi.</p>
            `,
      },
    ],
  },

  /* X BOB */
  {
    chapter: "X BOB. NERV SISTEMASI",
    icon: "🧠",
    topics: [
      {
        title: "Nerv sistemasining tuzilishi",
        icon: "🧠",
        text: `
            <p>Nerv sistemasi organizmning turli qismlari faoliyatini
            boshqarish va ularni tashqi muhit bilan bog‘lashda qatnashadi.</p>

            <p>Markaziy nerv sistemasiga bosh miya va orqa miya kiradi.
            Periferik qism nervlardan tashkil topadi.</p>
            `,
      },

      {
        title: "Nerv sistemasining funksiyasi",
        icon: "⚡",
        text: `
            <p>Nerv sistemasi ta’sirlarni qabul qilish, ularni qayta ishlash
            va organizmning javob reaksiyalarini boshqarishda qatnashadi.</p>
            `,
      },

      {
        title: "Orqa miyaning tuzilishi va funksiyasi",
        icon: "🧠",
        text: `
            <p>Orqa miya umurtqa pog‘onasi kanalida joylashadi.
            U nerv impulslarini o‘tkazishda va ayrim reflekslarda qatnashadi.</p>
            `,
      },

      {
        title: "Bosh miyaning tuzilishi va funksiyasi",
        icon: "🧠",
        text: `
            <p>Bosh miya bosh suyagi ichida joylashgan.
            U organizm faoliyatining ko‘plab murakkab jarayonlarini boshqarishda qatnashadi.</p>
            `,
      },

      {
        title: "Bosh miya katta yarimsharlarining tuzilishi",
        icon: "🧠",
        text: `
            <p>Katta yarimsharlar bosh miyaning yuqori va katta qismini tashkil etadi.
            Ular ongli faoliyat, tafakkur, xotira va ko‘plab murakkab jarayonlarda qatnashadi.</p>
            `,
      },

      {
        title: "Nerv sistemasi kasalliklari va ularning oldini olish",
        icon: "🛡️",
        text: `
            <p>Nerv sistemasini asrash uchun yetarli dam olish,
            uyqu rejimiga rioya qilish, jismoniy faollik va kun tartibiga
            amal qilish muhim.</p>
            `,
      },
    ],
  },

  /* XI BOB */
  {
    chapter: "XI BOB. OLIY NERV FAOLIYATI",
    icon: "💡",
    topics: [
      {
        title: "Oliy nerv faoliyati, shartli va shartsiz reflekslar",
        icon: "💡",
        text: `
            <p>Refleks — organizmning ta’sirga nerv sistemasi orqali javob reaksiyasidir.</p>

            <p>Shartsiz reflekslar tug‘ma bo‘ladi. Shartli reflekslar esa
            hayot davomida hosil bo‘lishi mumkin.</p>
            `,
      },

      {
        title: "Shartli reflekslarning hosil bo‘lishi va tormozlanishi",
        icon: "🔄",
        text: `
            <p>Shartli reflekslar tajriba va o‘rganish natijasida shakllanadi.
            Ular ma’lum sharoitlarda paydo bo‘lib, keyinchalik o‘zgarishi mumkin.</p>
            `,
      },

      {
        title: "Aql-idrok, tafakkur, so‘z va nutq",
        icon: "🗣️",
        text: `
            <p>Tafakkur va nutq insonning yuqori nerv faoliyati bilan bog‘liq.
            Nutq orqali inson fikrini ifodalaydi va bilim almashadi.</p>
            `,
      },

      {
        title: "Hissiyot va uning boshqarilishi",
        icon: "🙂",
        text: `
            <p>Hissiyotlar insonning turli vaziyatlarga munosabatini aks ettiradi.
            O‘z hissiyotlarini anglash va boshqarish muhim ko‘nikmadir.</p>
            `,
      },

      {
        title: "Xotira",
        icon: "🧠",
        text: `
            <p>Xotira ma’lumotni eslab qolish, saqlash va qayta tiklash
            jarayonlari bilan bog‘liq.</p>
            `,
      },

      {
        title: "Uyqu va uning ahamiyati",
        icon: "😴",
        text: `
            <p>Uyqu organizmning dam olishi va tiklanishi uchun muhim.
            Muntazam uyqu kun davomida diqqat va ish qobiliyatini saqlashga yordam beradi.</p>
            `,
      },

      {
        title: "Nerv faoliyati tiplari, nerv sistemasi gigiyenasi",
        icon: "🌙",
        text: `
            <p>Nerv sistemasini asrash uchun uyqu, dam olish, o‘qish va
            jismoniy faollikni muvozanatli tashkil qilish muhim.</p>
            `,
      },
    ],
  },

  /* XII BOB */
  {
    chapter: "XII BOB. SEZGI ORGANLARI",
    icon: "👁️",
    topics: [
      {
        title: "Sezgi organlarining ahamiyati",
        icon: "👀",
        text: `
            <p>Sezgi organlari tashqi muhitdan keladigan ta’sirlarni qabul qiladi.
            Ko‘rish, eshitish, hid bilish, ta’m bilish va teri sezgilari
            organizmning muhit bilan aloqasida muhim.</p>
            `,
      },

      {
        title: "Ko‘rish analizatorlari",
        icon: "👁️",
        text: `
            <p>Ko‘rish analizatori ko‘z va nerv sistemasi bilan bog‘liq
            tuzilmalar orqali ishlaydi.</p>
            `,
      },

      {
        title: "Ko‘rish organlarining funksiyasi",
        icon: "👁️",
        text: `
            <p>Ko‘z yorug‘likni qabul qiladi va hosil bo‘lgan axborot
            nerv impulslari orqali bosh miyaga yetkaziladi.</p>
            `,
      },

      {
        title: "Eshitish organlarining tuzilishi, eshitish gigiyenasi",
        icon: "👂",
        text: `
            <p>Eshitish organi tovush tebranishlarini qabul qilish va
            ularni nerv impulslari ko‘rinishida uzatishda qatnashadi.</p>

            <p>Eshitish gigiyenasi uchun juda baland tovushlardan saqlanish muhim.</p>
            `,
      },

      {
        title: "Muvozanat saqlash, muskul sezish va tuyg‘u organlari",
        icon: "⚖️",
        text: `
            <p>Muvozanatni saqlashda ichki quloqdagi maxsus tuzilmalar
            va nerv sistemasi qatnashadi.</p>

            <p>Muskul va bo‘g‘imlardan keladigan axborot tana holatini
            sezishga yordam beradi.</p>
            `,
      },

      {
        title: "Hid bilish va ta’m bilish organlari",
        icon: "👃",
        text: `
            <p>Hid bilish retseptorlari burun bo‘shlig‘ida,
            ta’m bilish retseptorlari esa asosan til sohasida joylashadi.</p>
            `,
      },
    ],
  },

  /* XIII BOB */
  {
    chapter: "XIII BOB. KO‘PAYISH VA RIVOJLANISH",
    icon: "🌱",
    topics: [
      {
        title: "Ko‘payish organlari",
        icon: "🌱",
        text: `
            <p>Ko‘payish organizmlarning avlod qoldirish jarayonidir.
            Odamda ko‘payish sistemasi erkak va ayol organlaridan tashkil topadi.</p>
            `,
      },

      {
        title: "Urug‘lanish va homilaning rivojlanishi",
        icon: "🧬",
        text: `
            <p>Urug‘lanish natijasida yangi organizm rivojlanishining
            dastlabki bosqichi boshlanadi.</p>

            <p>Rivojlanish davomida organizmning hujayralari bo‘linadi,
            ixtisoslashadi va turli to‘qima hamda organlar shakllanadi.</p>
            `,
      },

      {
        title: "Bolaning o‘sishi va rivojlanishi",
        icon: "🌱",
        text: `
            <p>Bolaning o‘sishi va rivojlanishi irsiy xususiyatlar,
            ovqatlanish, uyqu, jismoniy faollik va atrof-muhit bilan bog‘liq.</p>
            `,
      },

      {
        title: "Odamning biologik o‘zgarishi va ijtimoiy tabiati",
        icon: "🌍",
        text: `
            <p>Inson biologik organizm bo‘lish bilan birga ijtimoiy mavjudot hamdir.
            Uning rivojlanishida biologik va ijtimoiy omillar birgalikda ahamiyatga ega.</p>
            `,
      },
    ],
  },
];

/* =========================
   BARCHA MAVZULARNI OLISH
========================= */

let allTopics = [];

topics.forEach((chapter) => {
  chapter.topics.forEach((topic) => {
    allTopics.push({
      ...topic,
      chapter: chapter.chapter,
      chapterIcon: chapter.icon,
    });
  });
});

/* =========================
   CHAPTER RENDER
========================= */

function renderChapters(list = topics) {
  const container = document.getElementById("chapters");

  if (!container) return;

  container.innerHTML = "";

  list.forEach((chapter, chapterIndex) => {
    const chapterDiv = document.createElement("div");
    chapterDiv.className = "chapter";

    chapterDiv.innerHTML = `
            <div class="chapter-title">
                <div class="chapter-number">${chapterIndex + 1}</div>

                <div>
                    <h3>${chapter.icon} ${chapter.chapter}</h3>
                </div>
            </div>

            <div class="topic-grid"></div>
        `;

    const grid = chapterDiv.querySelector(".topic-grid");

    chapter.topics.forEach((topic, topicIndex) => {
      const card = document.createElement("div");
      card.className = "topic-card";

      card.innerHTML = `
                <div class="icon">${topic.icon}</div>

                <h4>${topic.title}</h4>

                <p>
                    Mavzuni ochib, asosiy biologik tushunchalarni
                    batafsil o‘rganing.
                </p>

                <span class="read-more">
                    Batafsil o‘qish →
                </span>
            `;

      card.onclick = () => openTopic(topic);

      grid.appendChild(card);
    });

    container.appendChild(chapterDiv);
  });
}

/* =========================
   SEARCH
========================= */

function searchTopics() {
  const input = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();

  if (!input) {
    renderChapters();
    return;
  }

  const result = [];

  topics.forEach((chapter) => {
    const filtered = chapter.topics.filter((topic) =>
      topic.title.toLowerCase().includes(input),
    );

    if (filtered.length > 0) {
      result.push({
        ...chapter,
        topics: filtered,
      });
    }
  });

  renderChapters(result);
}

/* =========================
   TOPIC MODAL
========================= */

function openTopic(topic) {
  const modal = document.getElementById("topicModal");
  const body = document.getElementById("topicModalBody");

  body.innerHTML = `
        <div class="topic-header">

            <div class="big-icon">${topic.icon}</div>

            <h2>${topic.title}</h2>

        </div>

        <div class="topic-content">

            ${topic.text}

        </div>
    `;

  modal.classList.add("active");

  document.body.style.overflow = "hidden";
}

function closeTopic() {
  document.getElementById("topicModal").classList.remove("active");

  document.body.style.overflow = "";
}

/* =========================
   TESTLAR
========================= */

const testQuestions = [
  {
    topic: "Hujayra",
    question:
      "Hujayraning irsiy axborotni saqlashda asosiy ahamiyatga ega qismi qaysi?",
    answers: ["Yadro", "Membrana", "Sitoplazma", "Kapillyar"],
    correct: 0,
  },

  {
    topic: "Qon",
    question: "Kislorodni tashishda qaysi qon hujayralari muhim?",
    answers: ["Leykotsitlar", "Eritrotsitlar", "Neyronlar", "Trombotsitlar"],
    correct: 1,
  },

  {
    topic: "Qon aylanish",
    question: "Odam yuragi nechta kameradan tashkil topgan?",
    answers: ["2 ta", "3 ta", "4 ta", "5 ta"],
    correct: 2,
  },

  {
    topic: "Nafas olish",
    question: "O‘pkada gazlar almashinuvi asosan qayerda amalga oshadi?",
    answers: ["Alveolalarda", "Qizilo‘ngachda", "Oshqozonda", "Buyrakda"],
    correct: 0,
  },

  {
    topic: "Ovqat hazm qilish",
    question: "Ovqat hazm qilish jarayoni qayerda boshlanadi?",
    answers: [
      "Oshqozonda",
      "Ingichka ichakda",
      "Og‘iz bo‘shlig‘ida",
      "Yo‘g‘on ichakda",
    ],
    correct: 2,
  },

  {
    topic: "Ovqat hazm qilish",
    question: "Qaysi organ o‘t suyuqligini hosil qiladi?",
    answers: ["Jigar", "Yurak", "O‘pka", "Buyrak"],
    correct: 0,
  },

  {
    topic: "Nerv sistemasi",
    question: "Markaziy nerv sistemasiga qaysi organlar kiradi?",
    answers: [
      "Yurak va o‘pka",
      "Bosh miya va orqa miya",
      "Buyrak va jigar",
      "Mushak va suyak",
    ],
    correct: 1,
  },

  {
    topic: "Sezgi organlari",
    question: "Muvozanatni saqlashda qaysi organ muhim?",
    answers: ["Ichki quloq", "Oshqozon", "Jigar", "Teri"],
    correct: 0,
  },

  {
    topic: "Tayanch-harakat",
    question: "Tayanch-harakat sistemasining asosiy qismlari qaysilar?",
    answers: [
      "Skelet va muskullar",
      "Yurak va qon",
      "O‘pka va bronx",
      "Miya va buyrak",
    ],
    correct: 0,
  },

  {
    topic: "Moddalar almashinuvi",
    question: "Organizm uchun tez energiya manbalaridan biri qaysi?",
    answers: ["Karbonsuvlar", "Suv", "Mineral tuz", "Kislorod"],
    correct: 0,
  },

  {
    topic: "Teri",
    question: "Teri organizmni qanday vazifada himoya qiladi?",
    answers: [
      "Tashqi muhit ta’siridan",
      "Qonni haydaydi",
      "Ovqatni maydalaydi",
      "Nafasni boshqaradi",
    ],
    correct: 0,
  },

  {
    topic: "Oliy nerv faoliyati",
    question: "Shartsiz refleks qanday refleks?",
    answers: [
      "Tug‘ma",
      "Faqat mashq orqali hosil bo‘ladi",
      "Faqat uyquda bo‘ladi",
      "Faqat ovqatdan keyin bo‘ladi",
    ],
    correct: 0,
  },
];

let currentTest = [];
let currentTestIndex = 0;
let testScore = 0;
let answered = false;

/* TEST KARTALARI */

function renderTestTopics() {
  const container = document.getElementById("testTopics");

  if (!container) return;

  const unique = [];

  allTopics.forEach((topic) => {
    if (!unique.includes(topic.chapter)) {
      unique.push(topic.chapter);
    }
  });

  container.innerHTML = "";

  unique.forEach((chapter) => {
    const card = document.createElement("div");

    card.className = "test-card";

    card.innerHTML = `
            <h3>🧠 ${chapter}</h3>

            <p>
                Ushbu bo‘lim bo‘yicha test savollarini ishlab,
                bilimingizni tekshiring.
            </p>

            <button>
                Testni boshlash →
            </button>
        `;

    card.querySelector("button").onclick = () => {
      startTest(chapter);
    };

    container.appendChild(card);
  });
}

/* TEST BOSHLASH */

function startTest(chapter) {
  currentTest = testQuestions.filter(
    (q) =>
      chapter.toLowerCase().includes(q.topic.toLowerCase()) ||
      q.topic
        .toLowerCase()
        .includes(
          chapter.split(".")[1]?.trim().split(" ")[0]?.toLowerCase() || "",
        ),
  );

  if (currentTest.length < 3) {
    currentTest = [...testQuestions];
  }

  currentTest = shuffle([...currentTest]).slice(0, 5);

  currentTestIndex = 0;
  testScore = 0;

  document.getElementById("testModal").classList.add("active");

  document.body.style.overflow = "hidden";

  showQuestion();
}

/* SAVOLNI KO‘RSATISH */

function showQuestion() {
  const body = document.getElementById("testBody");

  const q = currentTest[currentTestIndex];

  answered = false;

  body.innerHTML = `

        <div class="question-number">
            Savol ${currentTestIndex + 1} / ${currentTest.length}
        </div>

        <div class="test-question">
            ${q.question}
        </div>

        <div class="answers">

            ${q.answers
              .map(
                (answer, index) => `
                <button
                    class="answer"
                    onclick="chooseAnswer(${index})"
                >
                    ${String.fromCharCode(65 + index)}) ${answer}
                </button>
            `,
              )
              .join("")}

        </div>

        <button
            id="nextTestButton"
            class="next-btn"
            style="display:none"
            onclick="nextQuestion()"
        >
            Keyingi savol →
        </button>
    `;
}

/* JAVOB */

function chooseAnswer(index) {
  if (answered) return;

  answered = true;

  const q = currentTest[currentTestIndex];

  const buttons = document.querySelectorAll(".answer");

  buttons.forEach((button, i) => {
    button.disabled = true;

    if (i === q.correct) {
      button.classList.add("correct");
    }

    if (i === index && i !== q.correct) {
      button.classList.add("wrong");
    }
  });

  if (index === q.correct) {
    testScore++;
  }

  document.getElementById("nextTestButton").style.display = "block";
}

/* KEYINGI */

function nextQuestion() {
  currentTestIndex++;

  if (currentTestIndex >= currentTest.length) {
    finishTest();
  } else {
    showQuestion();
  }
}

/* NATIJA */

function finishTest() {
  const body = document.getElementById("testBody");

  let message = "";

  const percent = Math.round((testScore / currentTest.length) * 100);

  if (percent >= 80) {
    message = "Ajoyib! Biologiya bo‘yicha bilimingiz yaxshi! 🎉";
  } else if (percent >= 60) {
    message = "Yaxshi! Yana bir marta takrorlasangiz yanada yaxshi bo‘ladi. 👍";
  } else {
    message = "Mavzuni yana bir bor o‘qib, qayta urinib ko‘ring. 📚";
  }

  body.innerHTML = `

        <div style="text-align:center">

            <div style="font-size:70px">🏆</div>

            <h2>Test tugadi!</h2>

            <p style="font-size:20px;margin:15px 0">
                Natija:
                <b>${testScore} / ${currentTest.length}</b>
            </p>

            <p>
                ${message}
            </p>

            <button
                class="next-btn"
                onclick="closeTest()"
            >
                Yopish
            </button>

        </div>
    `;
}

function closeTest() {
  document.getElementById("testModal").classList.remove("active");

  document.body.style.overflow = "";
}

/* =========================
   O‘YINLAR
========================= */

const games = {
  organ: [
    {
      question: "Qaysi organ qonni butun tana bo‘ylab haydaydi?",
      answers: ["Yurak", "Oshqozon", "O‘pka", "Jigar"],
      correct: 0,
      icon: "🫀",
    },

    {
      question: "Qaysi organ gazlar almashinuvida asosiy rol o‘ynaydi?",
      answers: ["O‘pka", "Buyrak", "Oshqozon", "Teri"],
      correct: 0,
      icon: "🫁",
    },

    {
      question: "Ovqat hazm qilish qayerda boshlanadi?",
      answers: ["Og‘iz", "Buyrak", "Yurak", "O‘pka"],
      correct: 0,
      icon: "🍎",
    },

    {
      question: "Qaysi organ qonni filtrlashda muhim?",
      answers: ["Buyrak", "Oshqozon", "Yurak", "Til"],
      correct: 0,
      icon: "🫘",
    },
  ],

  cell: [
    {
      question: "Hujayraning irsiy axborot saqlanadigan asosiy qismi?",
      answers: ["Yadro", "Membrana", "Sitoplazma", "Suyak"],
      correct: 0,
      icon: "🔬",
    },

    {
      question: "Hujayrani tashqi muhitdan ajratib turuvchi qism?",
      answers: ["Membrana", "Yadro", "Qon", "Muskul"],
      correct: 0,
      icon: "🧬",
    },

    {
      question: "Hujayraning ichki muhitlaridan biri?",
      answers: ["Sitoplazma", "Suyak", "Tish", "Bronx"],
      correct: 0,
      icon: "🔬",
    },
  ],

  quick: [
    {
      question: "Odam yuragi nechta kamerali?",
      answers: ["2", "3", "4", "5"],
      correct: 2,
      icon: "🫀",
    },

    {
      question: "Qonning qizil hujayralari nima deyiladi?",
      answers: ["Leykotsit", "Eritrotsit", "Neyron", "Gormon"],
      correct: 1,
      icon: "🩸",
    },

    {
      question: "Nafas olishda organizmga qaysi gaz kerak?",
      answers: ["Kislorod", "Azot", "Karbonat angidrid", "Geliy"],
      correct: 0,
      icon: "🫁",
    },

    {
      question: "Markaziy nerv sistemasiga nima kiradi?",
      answers: [
        "Bosh miya va orqa miya",
        "Yurak va o‘pka",
        "Jigar va buyrak",
        "Suyak va muskul",
      ],
      correct: 0,
      icon: "🧠",
    },
  ],
};

let currentGame = [];
let currentGameIndex = 0;
let gameScore = 0;

/* O‘YINNI OCHISH */

function openGame(type) {
  currentGame = shuffle([...games[type]]);

  currentGameIndex = 0;
  gameScore = 0;

  document.getElementById("gameModal").classList.add("active");

  document.body.style.overflow = "hidden";

  showGameQuestion();
}

/* O‘YIN SAVOLI */

function showGameQuestion() {
  const body = document.getElementById("gameBody");

  const q = currentGame[currentGameIndex];

  body.innerHTML = `

        <div class="game-score">
            ⭐ Ball: ${gameScore}
        </div>

        <div class="game-question">

            <div class="game-big">${q.icon}</div>

            <h2>${q.question}</h2>

            <div class="answers">

                ${q.answers
                  .map(
                    (answer, index) => `
                    <button
                        class="answer"
                        onclick="gameAnswer(${index})"
                    >
                        ${answer}
                    </button>
                `,
                  )
                  .join("")}

            </div>

        </div>
    `;
}

/* O‘YIN JAVOBI */

function gameAnswer(index) {
  const q = currentGame[currentGameIndex];

  const buttons = document.querySelectorAll("#gameBody .answer");

  buttons.forEach((button) => {
    button.disabled = true;
  });

  if (index === q.correct) {
    gameScore++;

    buttons[index].classList.add("correct");
  } else {
    buttons[index].classList.add("wrong");

    buttons[q.correct].classList.add("correct");
  }

  setTimeout(() => {
    currentGameIndex++;

    if (currentGameIndex >= currentGame.length) {
      finishGame();
    } else {
      showGameQuestion();
    }
  }, 750);
}

/* O‘YIN NATIJASI */

function finishGame() {
  const body = document.getElementById("gameBody");

  body.innerHTML = `

        <div style="text-align:center">

            <div style="font-size:75px">🎉</div>

            <h2>O‘yin tugadi!</h2>

            <p style="font-size:22px;margin:15px">
                Sizning balingiz:
                <b>${gameScore} / ${currentGame.length}</b>
            </p>

            <button
                class="next-btn"
                onclick="closeGame()"
            >
                Yopish
            </button>

        </div>
    `;
}

function closeGame() {
  document.getElementById("gameModal").classList.remove("active");

  document.body.style.overflow = "";
}

/* =========================
   YORDAMCHI FUNKSIYALAR
========================= */

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function goTo(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
}

/* MODALNI TASHQARISINI BOSSA YOPISH */

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

/* ESC BOSILSA MODAL YOPILADI */

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.classList.remove("active");
    });

    document.body.style.overflow = "";
  }
});

/* =========================
   ISHGA TUSHIRISH
========================= */

document.addEventListener("DOMContentLoaded", () => {
  renderChapters();
  renderTestTopics();

  const count = document.getElementById("topicCount");

  if (count) {
    count.textContent = allTopics.length;
  }

  console.log(
    "BioClass muvaffaqiyatli yuklandi!",
    allTopics.length,
    "ta mavzu.",
  );
});
