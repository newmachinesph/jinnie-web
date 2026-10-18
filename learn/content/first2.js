// Path: First money (18 to 24). Lessons 6 to 9.
const scam = {
  id: 'first.scam',
  title: { en: 'Scam defense', tl: 'Iwas Scam' },
  summary: { en: 'Account takeover, fake investments, and the first hour after something goes wrong.', tl: 'Account takeover, pekeng investment, at ang unang oras pagkatapos ng problema.' },
  competency: { en: 'Can spot an account-takeover message', tl: 'Kayang makita ang account-takeover message' },
  wish: 'safe',
  status: 'authored',
  bites: [
    {
      id: 'first.scam.1',
      title: { en: 'Spot the scam', tl: 'Hanapin ang scam' },
      minutes: 2,
      hook: { text: { en: 'Seven in ten Filipinos were targeted by digital fraud last year. The message below reached one of them.', tl: 'Pito sa sampung Pilipino ang tinarget ng digital fraud noong nakaraang taon. Umabot sa isa sa kanila ang mensaheng ito.' }, illo: 'phone' },
      show: {
        text: { en: 'Every takeover message has the same three parts: fear, a link, and a request for a code. Learn the shape and you stop reading the words.', tl: 'Bawat takeover message ay may parehong tatlong bahagi: takot, link, at paghingi ng code. Alamin ang hugis at hindi mo na kailangang basahin ang salita.' },
        points: [],
        illo: 'phone', animate: true,
      },
      do: {
        type: 'spot', seconds: 25,
        prompt: { en: 'Flag every line that gives it away.', tl: 'I-flag ang bawat linyang nagbubunyag.' },
        message: {
          channel: 'sms', from: { en: 'GCash', tl: 'GCash' },
          lines: [
            { text: { en: 'Your GCash account will be deactivated in 24 hours due to incomplete verification.', tl: 'Made-deactivate ang GCash account mo sa loob ng 24 oras dahil sa hindi kumpletong verification.' }, suspicious: true, why: { en: 'A deadline that creates fear.', tl: 'Deadline na lumilikha ng takot.' } },
            { text: { en: 'Verify now at gcash-verify-ph.net to keep your balance.', tl: 'I-verify ngayon sa gcash-verify-ph.net para mapanatili ang balance.' }, suspicious: true, why: { en: 'Not the app, not the real domain.', tl: 'Hindi ang app, hindi ang tunay na domain.' } },
            { text: { en: 'Enter the MPIN and the OTP we send to complete verification.', tl: 'Ilagay ang MPIN at OTP na ipapadala namin para makumpleto.' }, suspicious: true, why: { en: 'MPIN plus OTP is the whole account.', tl: 'MPIN at OTP ay ang buong account.' } },
            { text: { en: 'GCash will never ask for your MPIN or OTP.', tl: 'Hindi hihingin ng GCash ang MPIN o OTP mo.' }, suspicious: false, why: { en: '', tl: '' } },
          ],
        },
        why: { en: 'Fear, link, code. Open the real app instead. If the account were really at risk, the app would say so.', tl: 'Takot, link, code. Buksan ang tunay na app. Kung talagang may panganib, sasabihin ng app.' },
      },
      keep: { text: { en: 'No bank or wallet asks for a code. Whoever asks is the thief.', tl: 'Walang bangko o wallet na humihingi ng code. Kung sino ang humihingi, siya ang magnanakaw.' }, action: { kind: 'drill', label: { en: 'Get a scam drill every week', tl: 'Kumuha ng scam drill linggo-linggo' }, payload: {} } },
    },
    {
      id: 'first.scam.2',
      title: { en: 'The one-time code', tl: 'Ang one-time code' },
      minutes: 2,
      hook: { text: { en: 'A caller says she is from your bank’s fraud team and needs the code you just received to block a suspicious transfer. She sounds calm and professional.', tl: 'May tumawag na sabi ay galing sa fraud team ng bangko mo at kailangan ang code na natanggap mo para harangin ang kahina-hinalang transfer. Kalmado at propesyonal siya.' }, illo: 'shield' },
      show: {
        text: { en: 'The code is the key. It was sent to you because a transfer is being attempted right now, by the caller. Reading it out completes the theft.', tl: 'Ang code ang susi. Ipinadala ito sa iyo dahil may transfer na sinusubukan ngayon mismo, ng tumatawag. Ang pagbasa nito ang tumatapos sa nakawan.' },
        points: [
          { en: 'Under the Anti-Financial Account Scamming Act your bank can freeze disputed funds. It cannot undo a transfer you authorised with a code.', tl: 'Sa ilalim ng Anti-Financial Account Scamming Act, puwedeng i-freeze ng bangko ang disputed funds. Hindi nito maibabalik ang transfer na inaprubahan mo gamit ang code.' },
          { en: 'Banks are retiring SMS codes for high-risk transactions. In-app approval replaces them.', tl: 'Tinatanggal ng mga bangko ang SMS codes para sa high-risk transactions. In-app approval ang kapalit.' },
        ],
        illo: 'shield', animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'What do you do?', tl: 'Ano ang gagawin mo?' },
        options: [
          { text: { en: 'Read the code, since she is blocking a fraud', tl: 'Basahin ang code, dahil hinaharang niya ang fraud' }, correct: false, why: { en: 'She is the fraud. The code approves her transfer.', tl: 'Siya ang fraud. Ang code ang nag-aapruba ng transfer niya.' } },
          { text: { en: 'Hang up and call the number on the back of your card', tl: 'Ibaba at tawagan ang numero sa likod ng card mo' }, correct: true, why: { en: 'The real fraud team will be glad you did.', tl: 'Matutuwa ang tunay na fraud team.' } },
          { text: { en: 'Ask her to confirm your full name first', tl: 'Ipakumpirma muna ang buong pangalan mo' }, correct: false, why: { en: 'She has it. Names are public.', tl: 'Alam niya. Pampubliko ang pangalan.' } },
          { text: { en: 'Send the code by text instead of reading it', tl: 'I-text ang code sa halip na basahin' }, correct: false, why: { en: 'Same key, different door.', tl: 'Parehong susi, ibang pinto.' } },
        ],
      },
      keep: { text: { en: 'Hang up. Call back on the number you already have. Nothing real is lost by hanging up on a real agent.', tl: 'Ibaba. Tawagan ulit sa numerong hawak mo na. Walang mawawala kung ibababa mo ang tawag ng tunay na agent.' }, action: null },
    },
    {
      id: 'first.scam.3',
      title: { en: 'Red flags on an investment', tl: 'Red flags sa investment' },
      minutes: 2,
      hook: { text: { en: 'An officemate doubled her money in two months and shows you the app. She is not lying. She is early.', tl: 'Dinoble ng officemate mo ang pera niya sa dalawang buwan at ipinakita ang app. Hindi siya nagsisinungaling. Maaga lang siya.' }, illo: 'spiral' },
      show: {
        text: { en: 'A scheme pays early members with the money of later ones. It is real until the day it is not. The tells are in the offer, not the results.', tl: 'Binabayaran ng scheme ang mga naunang miyembro gamit ang pera ng mga sumunod. Totoo ito hanggang sa araw na hindi na. Nasa alok ang palatandaan, hindi sa resulta.' },
        points: [],
        illo: 'spiral', animate: false,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each line. Left is a red flag, right is normal.', tl: 'I-sort ang bawat linya. Kaliwa ay red flag, kanan ay normal.' },
        left: { en: 'Red flag', tl: 'Red flag' },
        right: { en: 'Normal', tl: 'Normal' },
        cards: [
          { text: { en: 'Guaranteed 20% a month', tl: 'Guaranteed 20% kada buwan' }, side: 'left', why: { en: 'Treasury bonds pay 6% a year. Nothing legal guarantees 20% a month.', tl: '6% kada taon ang treasury bonds. Walang legal na guaranteed 20% kada buwan.' } },
          { text: { en: 'The fund can lose value in a bad year', tl: 'Puwedeng bumaba ang value ng fund sa masamang taon' }, side: 'right', why: { en: 'Honest products say so.', tl: 'Sinasabi ito ng tapat na produkto.' } },
          { text: { en: 'Earn a bonus for each person you bring in', tl: 'May bonus sa bawat taong dadalhin mo' }, side: 'left', why: { en: 'Paid for recruiting means the money comes from recruits.', tl: 'Ang bayad sa pag-recruit ay galing sa mga na-recruit.' } },
          { text: { en: 'Registered with the SEC and licensed to sell securities', tl: 'Rehistrado sa SEC at lisensyadong magbenta ng securities' }, side: 'right', why: { en: 'Check the name on the SEC Check App yourself.', tl: 'Tingnan mo mismo ang pangalan sa SEC Check App.' } },
          { text: { en: 'Send payment to a personal e-wallet number', tl: 'Magpadala sa personal na e-wallet number' }, side: 'left', why: { en: 'Licensed firms take money into company accounts.', tl: 'Sa company account tumatanggap ang licensed na kumpanya.' } },
          { text: { en: 'Slots close tonight', tl: 'Magsasara ang slots ngayong gabi' }, side: 'left', why: { en: 'Deadlines stop you from checking.', tl: 'Pinipigilan ka ng deadline na magsuri.' } },
          { text: { en: 'A prospectus that lists fees in pesos', tl: 'Prospectus na may fees sa piso' }, side: 'right', why: { en: 'Fees in writing are a good sign.', tl: 'Magandang senyales ang nakasulat na fees.' } },
        ],
      },
      keep: { text: { en: 'Guaranteed, recruit, personal wallet, tonight. Any one of the four is enough to walk away.', tl: 'Guaranteed, recruit, personal wallet, ngayong gabi. Isa sa apat ay sapat na para umalis.' }, action: null },
    },
    {
      id: 'first.scam.4',
      title: { en: 'The first hour', tl: 'Ang unang oras' },
      minutes: 2,
      hook: { text: { en: 'A transfer you did not make just left your account. What you do in the next sixty minutes decides whether it comes back.', tl: 'May transfer na hindi mo ginawa na umalis sa account mo. Ang gagawin mo sa susunod na animnapung minuto ang magpapasya kung babalik ito.' }, illo: 'hourglass' },
      show: {
        text: { en: 'The law gives banks the power to hold disputed funds at the receiving end. That power only works while the money is still there.', tl: 'Binibigyan ng batas ang mga bangko ng kapangyarihang i-hold ang disputed funds sa tumatanggap. Gumagana lang ito habang nandoon pa ang pera.' },
        points: [],
        illo: 'hourglass', animate: false,
      },
      do: {
        type: 'order',
        prompt: { en: 'Order the first hour.', tl: 'Ayusin ang unang oras.' },
        steps: [
          { en: 'Call the bank or wallet hotline and report the transfer', tl: 'Tawagan ang hotline ng bangko o wallet at i-report ang transfer' },
          { en: 'Ask them to freeze the account and hold the receiving account', tl: 'Ipa-freeze ang account at ipa-hold ang tumanggap na account' },
          { en: 'Change the password and MPIN from a device you trust', tl: 'Palitan ang password at MPIN mula sa device na pinagkakatiwalaan mo' },
          { en: 'Screenshot everything: the transfer, the messages, the numbers', tl: 'I-screenshot lahat: ang transfer, mensahe, numero' },
          { en: 'File with PNP Anti-Cybercrime and the BSP consumer portal', tl: 'Mag-file sa PNP Anti-Cybercrime at BSP consumer portal' },
        ],
        why: { en: 'Bank first, because the hold is time-limited. Evidence and police reports come after the money is frozen.', tl: 'Bangko muna, dahil may hangganan ang hold. Ebidensya at police report pagkatapos ma-freeze ang pera.' },
      },
      keep: { text: { en: 'Save the hotline number today, while nothing is wrong.', tl: 'I-save ang hotline ngayon, habang walang problema.' }, action: { kind: 'open', label: { en: 'Add hotlines to Accounts', tl: 'Idagdag ang hotlines sa Accounts' }, payload: { app: 'accounts' } } },
    },
    {
      id: 'first.scam.5',
      title: { en: 'The message from your cousin', tl: 'Ang mensahe mula sa pinsan mo' },
      minutes: 3,
      hook: { text: { en: 'Your cousin messages from a new account. His old one was hacked, he says, and he needs ₱2,000 for a hospital deposit tonight.', tl: 'Nag-message ang pinsan mo mula sa bagong account. Na-hack daw ang luma, at kailangan niya ng ₱2,000 para sa hospital deposit ngayong gabi.' }, illo: 'phone' },
      show: {
        text: { en: 'Everything a scammer needs is public: names, photos, family. The one thing they cannot fake is a voice you know.', tl: 'Lahat ng kailangan ng scammer ay pampubliko: pangalan, larawan, pamilya. Ang hindi nila mapepeke ay ang boses na kilala mo.' },
        points: [],
        illo: 'phone', animate: false,
      },
      do: {
        type: 'story', start: 'n1',
        nodes: {
          n1: { text: { en: 'He says his phone is broken, chat only, and sends a GCash number you do not recognise.', tl: 'Sabi niya sira ang phone, chat lang, at nagpadala ng GCash number na hindi mo kilala.' }, balance: 6200, choices: [
            { text: { en: 'Call his old number', tl: 'Tawagan ang luma niyang numero' }, next: 'a1' },
            { text: { en: 'Send ₱2,000. It is family', tl: 'Magpadala ng ₱2,000. Pamilya iyon' }, next: 'b1' } ] },
          a1: { text: { en: 'He answers. He is at home, phone fine, no hospital. You report the fake account. He warns the rest of the family.', tl: 'Sumagot siya. Nasa bahay, okay ang phone, walang ospital. Ni-report mo ang pekeng account. Binalaan niya ang buong pamilya.' }, balance: 6200, outcome: 'steady' },
          b1: { text: { en: 'A second message: the deposit went up, ₱3,000 more, and please do not tell Aunt. You have ₱4,200 left.', tl: 'Pangalawang mensahe: tumaas ang deposit, ₱3,000 pa, at huwag sabihin kay Tita. ₱4,200 na lang ang natitira mo.' }, balance: 4200, choices: [
            { text: { en: 'Call Aunt', tl: 'Tawagan si Tita' }, next: 'b2' },
            { text: { en: 'Send the ₱3,000', tl: 'Ipadala ang ₱3,000' }, next: 'b3' } ] },
          b2: { text: { en: 'Aunt calls your cousin. He is fine. ₱2,000 is gone and will not come back; wallet-to-wallet transfers to a mule account rarely do. The report you file helps the next person.', tl: 'Tinawagan ni Tita ang pinsan mo. Okay siya. Wala na ang ₱2,000 at hindi na babalik; bihirang bumalik ang wallet-to-wallet sa mule account. Ang report mo ang tutulong sa susunod.' }, balance: 4200, outcome: 'costly' },
          b3: { text: { en: '₱5,000 gone. The account disappears. You find out at Sunday lunch, when your cousin asks why you have not replied to his real account.', tl: 'Wala na ang ₱5,000. Nawala ang account. Nalaman mo sa Sunday lunch, nang tanungin ng pinsan mo kung bakit hindi ka sumasagot sa tunay niyang account.' }, balance: 1200, outcome: 'costly' },
        },
      },
      keep: { text: { en: 'Before money moves to family, a voice confirms it. Every time.', tl: 'Bago lumipat ang pera sa pamilya, boses ang nagkukumpirma. Sa bawat pagkakataon.' }, action: null },
    },
  ],
};

const invest = {
  id: 'first.invest',
  title: { en: 'Invest', tl: 'Invest' },
  summary: { en: 'The risk ladder, MP2, bonds, funds, stocks, and what crypto is for.', tl: 'Ang risk ladder, MP2, bonds, funds, stocks, at para saan ang crypto.' },
  competency: { en: 'Can place a product on the risk ladder', tl: 'Kayang ilagay ang produkto sa risk ladder' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'first.invest.1',
      title: { en: 'The ladder', tl: 'Ang hagdan' },
      minutes: 2,
      hook: { text: { en: 'Every product sits on one ladder. Higher pays more on average and can fall further in a bad year. There is no rung that does both.', tl: 'Bawat produkto ay nasa iisang hagdan. Mas mataas ay mas malaki ang kita sa average at mas malalim ang bagsak sa masamang taon. Walang baitang na pareho.' }, illo: 'coins' },
      show: {
        text: { en: 'Emergency fund at the bottom. Then government bonds and MP2. Then funds that hold many companies. Then single stocks. Crypto at the top, and it is speculation, not investing.', tl: 'Emergency fund sa ibaba. Tapos government bonds at MP2. Tapos funds na may maraming kumpanya. Tapos single stocks. Crypto sa tuktok, at speculation ito, hindi investing.' },
        points: [],
        illo: 'coins', animate: true,
      },
      do: {
        type: 'order',
        prompt: { en: 'Order from safest to riskiest.', tl: 'Ayusin mula pinakaligtas hanggang pinakadelikado.' },
        steps: [
          { en: 'Savings account at a PDIC-insured bank', tl: 'Savings account sa PDIC-insured na bangko' },
          { en: 'Retail treasury bond', tl: 'Retail treasury bond' },
          { en: 'Pag-IBIG MP2', tl: 'Pag-IBIG MP2' },
          { en: 'Index fund holding 30 companies', tl: 'Index fund na may 30 kumpanya' },
          { en: 'Shares of one company', tl: 'Shares ng isang kumpanya' },
          { en: 'A cryptocurrency', tl: 'Cryptocurrency' },
        ],
        why: { en: 'Bonds and MP2 are both government-backed; the bond is tradeable, MP2 is locked five years. Above them, spread beats single, and crypto has no floor.', tl: 'Parehong government-backed ang bonds at MP2; puwedeng ibenta ang bond, naka-lock ng limang taon ang MP2. Sa itaas nila, mas mabuti ang spread kaysa isa, at walang sahig ang crypto.' },
      },
      keep: { text: { en: 'Climb the ladder only after the rung below is full.', tl: 'Umakyat lang sa hagdan kapag puno na ang baitang sa ibaba.' }, action: null },
    },
    {
      id: 'first.invest.2',
      title: { en: 'MP2', tl: 'MP2' },
      minutes: 2,
      hook: { text: { en: 'Pag-IBIG MP2 paid 7.12% for 2025, tax-free, government-backed, minimum ₱500 a month. The catch is five years.', tl: 'Nagbayad ang Pag-IBIG MP2 ng 7.12% para sa 2025, tax-free, government-backed, minimum ₱500 kada buwan. Ang kondisyon ay limang taon.' }, illo: 'tree' },
      show: {
        text: { en: 'Dividends are declared yearly and vary. Compounded, ₱2,000 a month for five years becomes more than the ₱120,000 you put in.', tl: 'Taunang idinedeklara ang dividends at nag-iiba. Naka-compound, ang ₱2,000 kada buwan sa limang taon ay lalampas sa ₱120,000 na inilagay mo.' },
        points: [
          { en: 'It is for a wish with a date five years out, not for emergencies.', tl: 'Para ito sa wish na may petsa limang taon mula ngayon, hindi para sa emergency.' },
          { en: 'Withdraw early and you forfeit dividends.', tl: 'Kapag maagang kinuha, nawawala ang dividends.' },
        ],
        illo: 'tree', animate: false,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Slide to your guess: ₱2,000 a month for five years at about 7%, what does ₱120,000 of contributions become?', tl: 'I-slide ang hula mo: ₱2,000 kada buwan sa limang taon sa mga 7%, magiging magkano ang ₱120,000 na contributions?' },
        min: 100000, max: 200000, step: 1000, format: 'peso', answer: 143000,
        why: { en: 'About ₱143,000, illustrative at a steady 7%. ₱23,000 earned for doing nothing but waiting. The rate changes every year.', tl: 'Mga ₱143,000, illustrative sa steady na 7%. ₱23,000 ang kinita sa paghihintay lang. Nagbabago ang rate kada taon.' },
      },
      keep: { text: { en: 'MP2 is the wish jar with a lid.', tl: 'Ang MP2 ay wish jar na may takip.' }, action: { kind: 'wish', label: { en: 'Add a five-year wish', tl: 'Magdagdag ng limang-taong wish' }, payload: { key: 'mp2', title: { en: 'Five years of MP2', tl: 'Limang taon ng MP2' }, amount: 120000 } } },
    },
    {
      id: 'first.invest.3',
      title: { en: 'Retail treasury bonds', tl: 'Retail treasury bonds' },
      minutes: 2,
      hook: { text: { en: 'In August 2025 the government asked for ₱30 billion and Filipinos offered ₱354 billion. The bond paid 6% a year for five years and could be bought from a phone.', tl: 'Noong Agosto 2025, humingi ang gobyerno ng ₱30 bilyon at nag-alok ang mga Pilipino ng ₱354 bilyon. 6% kada taon ang bond sa limang taon at mabibili sa phone.' }, illo: 'certificate' },
      show: {
        text: { en: 'A retail treasury bond is a loan to the Republic. It pays interest every quarter and returns the principal at the end. Minimum ₱5,000.', tl: 'Ang retail treasury bond ay pautang sa Republika. Nagbabayad ito ng interes kada quarter at ibinabalik ang principal sa dulo. Minimum ₱5,000.' },
        points: [],
        illo: 'certificate', animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'You buy ₱10,000 of a five-year bond at 6%. What happens?', tl: 'Bumili ka ng ₱10,000 na limang-taong bond sa 6%. Ano ang mangyayari?' },
        options: [
          { text: { en: 'About ₱150 arrives every quarter, and ₱10,000 comes back after five years', tl: 'Mga ₱150 ang dumarating kada quarter, at bumabalik ang ₱10,000 pagkatapos ng limang taon' }, correct: true, why: { en: '6% of ₱10,000 is ₱600 a year, paid in four parts, less a 20% tax on the interest.', tl: 'Ang 6% ng ₱10,000 ay ₱600 kada taon, hinati sa apat, bawas 20% tax sa interes.' } },
          { text: { en: 'The ₱10,000 grows to ₱13,000 and you get it all at the end', tl: 'Lumalaki ang ₱10,000 sa ₱13,000 at makukuha lahat sa dulo' }, correct: false, why: { en: 'Interest is paid out as it is earned, not kept inside.', tl: 'Binabayad ang interes habang kinikita, hindi itinatago.' } },
          { text: { en: 'The value doubles if the stock market rises', tl: 'Dumodoble ang value kung tumaas ang stock market' }, correct: false, why: { en: 'Bonds do not follow stocks. That is the point of them.', tl: 'Hindi sumusunod ang bonds sa stocks. Iyon ang silbi nila.' } },
        ],
      },
      keep: { text: { en: 'Bonds pay you to wait. Stocks pay you to bear risk. Know which one you are being paid for.', tl: 'Binabayaran ka ng bonds para maghintay. Binabayaran ka ng stocks para tiisin ang risk. Alamin kung alin ang binabayaran sa iyo.' }, action: null },
    },
    {
      id: 'first.invest.4',
      title: { en: 'Stocks, funds, crypto', tl: 'Stocks, funds, crypto' },
      minutes: 2,
      hook: { text: { en: 'Ninety seconds. Ten statements about the top of the ladder.', tl: 'Siyamnapung segundo. Sampung pahayag tungkol sa tuktok ng hagdan.' }, illo: 'hourglass' },
      show: { text: { en: 'Retail stock accounts reached 3.6 million in 2025, most of them opened inside an e-wallet. Access is easy now. Judgement is not.', tl: 'Umabot sa 3.6 milyon ang retail stock accounts noong 2025, karamihan binuksan sa e-wallet. Madali na ang access. Ang paghuhusga, hindi.' }, points: [], illo: 'hourglass', animate: false },
      do: {
        type: 'rapid', seconds: 90,
        items: [
          { text: { en: 'A UITF or index fund holds many companies at once.', tl: 'Maraming kumpanya nang sabay ang hawak ng UITF o index fund.' }, answer: true, why: { en: 'That spread is the safety.', tl: 'Ang spread ang kaligtasan.' } },
          { text: { en: 'A stock that fell 50% needs to rise 50% to recover.', tl: 'Ang stock na bumaba ng 50% ay kailangang tumaas ng 50% para bumawi.' }, answer: false, why: { en: 'It needs 100%.', tl: 'Kailangan ng 100%.' } },
          { text: { en: 'Money you need within three years belongs in stocks.', tl: 'Sa stocks dapat ang perang kailangan sa loob ng tatlong taon.' }, answer: false, why: { en: 'Too short. A bad year can land exactly then.', tl: 'Masyadong maikli. Puwedeng doon mismo bumagsak.' } },
          { text: { en: 'Crypto exchanges in the Philippines need a licence from the BSP or SEC.', tl: 'Kailangan ng lisensya mula sa BSP o SEC ang crypto exchanges sa Pilipinas.' }, answer: true, why: { en: 'Check the list before you deposit.', tl: 'Tingnan ang listahan bago mag-deposit.' } },
          { text: { en: 'A fund’s fee of 2% a year is small enough to ignore.', tl: 'Sapat na maliit ang 2% kada taon na fee ng fund para hindi pansinin.' }, answer: false, why: { en: 'Over 20 years it takes about a third of the growth.', tl: 'Sa 20 taon, kukunin nito ang ikatlong bahagi ng paglago.' } },
          { text: { en: 'Buying every month, regardless of price, removes the need to time the market.', tl: 'Ang pagbili kada buwan, anuman ang presyo, ay nagtatanggal ng pangangailangang hulaan ang market.' }, answer: true, why: { en: 'Cost averaging.', tl: 'Cost averaging.' } },
          { text: { en: 'A tip in a group chat is a good reason to buy a stock.', tl: 'Magandang dahilan ang tip sa group chat para bumili ng stock.' }, answer: false, why: { en: 'By the time it reaches the chat, the price has moved.', tl: 'Pagdating sa chat, gumalaw na ang presyo.' } },
          { text: { en: 'Dividends from Philippine stocks are taxed at 10% for residents.', tl: '10% ang tax sa dividends ng Philippine stocks para sa residente.' }, answer: true, why: { en: 'Final withholding tax.', tl: 'Final withholding tax.' } },
          { text: { en: 'Crypto can be part of a plan if it is money you can lose entirely.', tl: 'Puwedeng bahagi ng plano ang crypto kung perang kaya mong mawala nang buo.' }, answer: true, why: { en: 'Speculation sized as speculation.', tl: 'Speculation na sinukat bilang speculation.' } },
          { text: { en: 'Past returns tell you next year’s returns.', tl: 'Sinasabi ng nakaraang returns ang returns sa susunod na taon.' }, answer: false, why: { en: 'They tell you the range, never the year.', tl: 'Sinasabi nila ang range, hindi ang taon.' } },
        ],
      },
      keep: { text: { en: 'Own the market before you try to beat it.', tl: 'Ariin muna ang market bago subukang talunin.' }, action: null },
    },
    {
      id: 'first.invest.5',
      title: { en: 'The tip', tl: 'Ang tip' },
      minutes: 3,
      hook: { text: { en: 'The office group chat has a screenshot: ₱10,000 turned into ₱13,000 in one month on a "trading platform". Three colleagues are in. You have ₱10,000 in the savings jar.', tl: 'May screenshot sa office group chat: naging ₱13,000 ang ₱10,000 sa isang buwan sa "trading platform". Tatlong kasamahan ang sumali. May ₱10,000 ka sa savings jar.' }, illo: 'spiral' },
      show: { text: { en: 'Early payouts are the marketing budget of a scheme. They are paid from the next deposits, including yours.', tl: 'Ang maagang payout ang marketing budget ng scheme. Binabayaran ito mula sa susunod na deposito, kasama ang sa iyo.' }, points: [], illo: 'spiral', animate: false },
      do: {
        type: 'story', start: 'n1',
        nodes: {
          n1: { text: { en: 'Month one. The platform has a Philippine phone number and a Telegram admin. It is not on the SEC list.', tl: 'Unang buwan. May Philippine phone number at Telegram admin ang platform. Wala ito sa SEC list.' }, balance: 10000, choices: [
            { text: { en: 'Put in ₱2,000 to test it', tl: 'Maglagay ng ₱2,000 para subukan' }, next: 'a1' },
            { text: { en: 'Put ₱2,000 into a bond fund instead', tl: 'Ilagay ang ₱2,000 sa bond fund' }, next: 'b1' } ] },
          a1: { text: { en: 'Month two: your ₱2,000 shows ₱2,600 and you can withdraw ₱600. It works. The admin says deposits above ₱20,000 get 40%.', tl: 'Ikalawang buwan: ₱2,600 na ang ₱2,000 mo at puwedeng i-withdraw ang ₱600. Gumagana. Sabi ng admin, 40% ang deposit na lampas ₱20,000.' }, balance: 10600, choices: [
            { text: { en: 'Withdraw everything and stop', tl: 'I-withdraw lahat at tumigil' }, next: 'a2' },
            { text: { en: 'Put in the whole savings jar plus a lending-app loan', tl: 'Ilagay ang buong savings jar at utang sa lending app' }, next: 'a3' } ] },
          a2: { text: { en: 'The withdrawal takes four days and a "tax" of 20%. You end month three with ₱10,080 and a lesson that cost ₱520.', tl: 'Apat na araw ang withdrawal at may "tax" na 20%. Nagtapos ka ng ikatlong buwan na may ₱10,080 at aral na nagkakahalaga ng ₱520.' }, balance: 10080, outcome: 'steady' },
          a3: { text: { en: 'Month three the Telegram group is deleted. ₱30,000 of your money and the loan are gone. You repay the app for eight months. Two of the three colleagues borrowed too.', tl: 'Sa ikatlong buwan, na-delete ang Telegram group. Wala na ang ₱30,000 mo at ang utang. Walong buwan kang nagbayad sa app. Dalawa sa tatlong kasamahan ay umutang din.' }, balance: -20000, outcome: 'costly' },
          b1: { text: { en: 'Month three: the bond fund is up ₱24. The group chat is quiet. One colleague asks if anyone else cannot withdraw.', tl: 'Ikatlong buwan: tumaas ng ₱24 ang bond fund. Tahimik ang group chat. May isang kasamahang nagtatanong kung may iba pang hindi makapag-withdraw.' }, balance: 10024, outcome: 'steady' },
        },
      },
      keep: { text: { en: 'A return that has to be explained by a friend is not a return. It is a recruitment.', tl: 'Ang return na kailangang ipaliwanag ng kaibigan ay hindi return. Recruitment ito.' }, action: null },
    },
  ],
};

const retire = {
  id: 'first.retire',
  title: { en: 'Retirement basics', tl: 'Batayan sa Retirement' },
  summary: { en: 'What SSS will pay, what it will not, and why starting at 25 is worth twice as much as starting at 35.', tl: 'Ano ang babayaran ng SSS, ano ang hindi, at bakit doble ang halaga ng pagsisimula sa 25 kaysa 35.' },
  competency: { en: 'Can size the retirement gap', tl: 'Kayang sukatin ang retirement gap' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'first.retire.1',
      title: { en: 'What SSS pays', tl: 'Ano ang bayad ng SSS' },
      minutes: 2,
      hook: { text: { en: 'Every payslip sends 15% of your salary credit to SSS. At 60 it sends something back. Most people have never asked how much.', tl: 'Bawat payslip ay nagpapadala ng 15% ng salary credit mo sa SSS. Sa 60, may ibinabalik ito. Karamihan, hindi pa naitanong kung magkano.' }, illo: 'hourglass' },
      show: {
        text: { en: 'The average SSS retirement pension was about ₱5,100 a month in mid-2025 and rises 10% a year through 2027. Yours depends on your salary credit and your years of contributions, and it will replace a fraction of your last pay.', tl: 'Mga ₱5,100 kada buwan ang average na SSS retirement pension noong kalagitnaan ng 2025, at tumataas ng 10% kada taon hanggang 2027. Ang sa iyo ay nakadepende sa salary credit at taon ng contributions, at bahagi lang ng huling sweldo mo ang papalitan nito.' },
        points: [
          { en: 'A monthly pension needs at least 120 contributions. Fewer means a lump sum.', tl: 'Kailangan ng 120 contributions para sa buwanang pension. Kulang ay lump sum.' },
          { en: 'The gap between the pension and your needs is what savings must cover.', tl: 'Ang kulang sa pagitan ng pension at needs mo ang dapat sagutin ng savings.' },
        ],
        illo: 'hourglass', animate: true,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Slide to your guess: the average monthly SSS retirement pension.', tl: 'I-slide ang hula mo: ang average na buwanang SSS retirement pension.' },
        min: 0, max: 20000, step: 500, format: 'peso', answer: 6000,
        why: { en: 'About ₱6,000 today: ₱5,120 in mid-2025, plus 10% increases in September 2025 and 2026. If your needs at 60 are ₱15,000 a month, the gap is still ₱9,000 a month for twenty or more years.', tl: 'Mga ₱6,000 ngayon: ₱5,120 noong kalagitnaan ng 2025, dagdag ang 10% na taas noong Setyembre 2025 at 2026. Kung ₱15,000 kada buwan ang needs mo sa 60, ₱9,000 kada buwan pa rin ang kulang sa dalawampu o higit pang taon.' },
      },
      keep: { text: { en: 'SSS is the floor of retirement. The building is yours.', tl: 'Ang SSS ang sahig ng retirement. Sa iyo ang gusali.' }, action: null },
    },
    {
      id: 'first.retire.2',
      title: { en: 'Pension Booster and PERA', tl: 'Pension Booster at PERA' },
      minutes: 2,
      hook: { text: { en: 'Two accounts exist to close the gap. One sits inside SSS. The other sits at a bank and hands part of your tax back.', tl: 'May dalawang account para isara ang kulang. Isa sa loob ng SSS. Isa sa bangko at ibinabalik ang bahagi ng tax mo.' }, illo: 'shield' },
      show: {
        text: { en: 'The SSS Pension Booster is voluntary, minimum ₱500, and grows tax-free until retirement. PERA is a retirement account at an accredited bank: 5% of what you put in comes back as a tax credit, and the growth is tax-free.', tl: 'Boluntaryo ang SSS Pension Booster, minimum ₱500, at lumalaki nang tax-free hanggang retirement. Ang PERA ay retirement account sa accredited na bangko: 5% ng inilagay mo ay bumabalik bilang tax credit, at tax-free ang paglago.' },
        points: [],
        illo: 'shield', animate: false,
      },
      do: {
        type: 'match',
        prompt: { en: 'Match each feature to the account.', tl: 'I-match ang bawat feature sa account.' },
        pairs: [
          { a: { en: 'Held inside SSS, minimum ₱500', tl: 'Nasa loob ng SSS, minimum ₱500' }, b: { en: 'Pension Booster', tl: 'Pension Booster' } },
          { a: { en: '5% of contributions returned as a tax credit', tl: '5% ng contributions bumabalik bilang tax credit' }, b: { en: 'PERA', tl: 'PERA' } },
          { a: { en: 'Employer contributions 150% deductible since 2025', tl: '150% deductible ang contributions ng employer mula 2025' }, b: { en: 'PERA, for employers', tl: 'PERA, para sa employer' } },
          { a: { en: 'Mandatory 15% of salary credit', tl: 'Sapilitang 15% ng salary credit' }, b: { en: 'Regular SSS contribution', tl: 'Regular na SSS contribution' } },
        ],
      },
      keep: { text: { en: 'Start with whichever your employer will match. Then the other.', tl: 'Magsimula sa alinmang i-match ng employer mo. Tapos ang isa.' }, action: null },
    },
    {
      id: 'first.retire.3',
      title: { en: 'Five percent back', tl: 'Limang porsyento pabalik' },
      minutes: 2,
      hook: { text: { en: 'You put ₱2,000 a month into PERA. In April the tax credit arrives.', tl: 'Naglagay ka ng ₱2,000 kada buwan sa PERA. Sa Abril, dumating ang tax credit.' }, illo: 'coins' },
      show: { text: { en: 'The credit is 5% of the year’s contributions, applied against your income tax. If you owe no tax yet, it waits until you do.', tl: 'Ang credit ay 5% ng contributions sa taon, ibinabawas sa income tax mo. Kung wala ka pang tax, maghihintay ito hanggang mayroon.' }, points: [], illo: 'coins', animate: false },
      do: {
        type: 'number',
        prompt: { en: '₱2,000 a month for twelve months. What is the PERA tax credit for the year?', tl: '₱2,000 kada buwan sa labindalawang buwan. Magkano ang PERA tax credit sa taon?' },
        answer: 1200, tolerance: 0, format: 'peso',
        worked: { en: '2,000 × 12 = ₱24,000 contributed. 24,000 × 0.05 = ₱1,200 back.', tl: '2,000 × 12 = ₱24,000 na contribution. 24,000 × 0.05 = ₱1,200 pabalik.' },
      },
      keep: { text: { en: 'Free money is rare. Take it when the government offers it.', tl: 'Bihira ang libreng pera. Kunin kapag inaalok ng gobyerno.' }, action: null },
    },
    {
      id: 'first.retire.4',
      title: { en: 'Twenty-five or thirty-five', tl: 'Dalawampu’t lima o tatlumpu’t lima' },
      minutes: 2,
      hook: { text: { en: 'Two friends save ₱1,000 a month at 6% a year until 60. One starts at 25. The other waits until 35, then saves the same amount.', tl: 'Dalawang magkaibigan, ₱1,000 kada buwan sa 6% kada taon hanggang 60. Isa nagsimula sa 25. Isa naghintay hanggang 35, tapos pareho ang inilagay.' }, illo: 'tree' },
      show: { text: { en: 'The saver who starts at 25 ends with about ₱1,420,000. The ten missing years are not ten years of deposits. They are the years the tree was small and could have been growing.', tl: 'Mga ₱1,420,000 ang matatapos ng nagsimula sa 25. Ang sampung nawalang taon ay hindi sampung taon ng deposito. Ito ang mga taong maliit pa ang puno at puwede sanang lumalaki.' }, points: [], illo: 'tree', animate: true },
      do: {
        type: 'predict',
        prompt: { en: 'Slide to your guess: how much does the saver who starts at 35 end with?', tl: 'I-slide ang hula mo: magkano ang matatapos ng nagsimula sa 35?' },
        min: 0, max: 1500000, step: 10000, format: 'peso', answer: 690000,
        why: { en: 'About ₱690,000. Half. The deposits differ by ₱120,000; the result differs by ₱730,000. Time did the rest.', tl: 'Mga ₱690,000. Kalahati. ₱120,000 ang pagkakaiba ng deposito; ₱730,000 ang pagkakaiba ng resulta. Ang oras ang gumawa ng iba.' },
      },
      keep: { text: { en: 'The best month to start is the one you are in.', tl: 'Ang pinakamagandang buwan para magsimula ay ang buwang ito.' }, action: { kind: 'wish', label: { en: 'Add a retirement wish', tl: 'Magdagdag ng retirement wish' }, payload: { key: 'retire', title: { en: 'First year of ₱1,000 a month', tl: 'Unang taon ng ₱1,000 kada buwan' }, amount: 12000 } } },
    },
    {
      id: 'first.retire.5',
      title: { en: 'The first ₱500', tl: 'Ang unang ₱500' },
      minutes: 3,
      hook: { text: { en: 'HR emails: the company will match Pension Booster contributions up to ₱500 a month, starting next payday. The form takes two minutes.', tl: 'Nag-email ang HR: i-match ng kumpanya ang Pension Booster contributions hanggang ₱500 kada buwan, simula sa susunod na payday. Dalawang minuto ang form.' }, illo: 'calendar' },
      show: { text: { en: 'A match is a 100% return on the day of deposit. Nothing on the ladder pays that.', tl: 'Ang match ay 100% return sa araw ng deposito. Wala sa hagdan ang nagbabayad ng ganoon.' }, points: [], illo: 'calendar', animate: false },
      do: {
        type: 'story', start: 'n1',
        nodes: {
          n1: { text: { en: 'Payday is Friday. The wants jar is ₱4,000 and the barkada is planning Baguio.', tl: 'Biyernes ang payday. ₱4,000 ang wants jar at nagpaplano ng Baguio ang barkada.' }, balance: 4000, choices: [
            { text: { en: 'Fill the form now, ₱500 from wants', tl: 'Sagutan ang form ngayon, ₱500 mula sa wants' }, next: 'a1' },
            { text: { en: 'After Baguio. Next month', tl: 'Pagkatapos ng Baguio. Sa susunod na buwan' }, next: 'b1' } ] },
          a1: { text: { en: 'Baguio on ₱3,500 is Baguio. Twelve months later the account holds ₱12,000 plus growth, half of it money you never earned.', tl: 'Baguio pa rin ang Baguio sa ₱3,500. Pagkalipas ng labindalawang buwan, ₱12,000 at growth ang laman, kalahati nito ay perang hindi mo kinita.' }, balance: 12000, outcome: 'steady' },
          b1: { text: { en: 'Next month is a birthday. The month after is Christmas. In March you find the email again.', tl: 'Birthday sa susunod na buwan. Pasko sa kasunod. Sa Marso, nakita mo ulit ang email.' }, balance: 4000, choices: [
            { text: { en: 'Fill the form in March', tl: 'Sagutan ang form sa Marso' }, next: 'b2' },
            { text: { en: 'Leave it. ₱500 is small', tl: 'Hayaan. Maliit lang ang ₱500' }, next: 'b3' } ] },
          b2: { text: { en: 'Five months of match missed: ₱2,500 the company would have given you. The account starts anyway. Late is smaller than never.', tl: 'Limang buwan ng match ang nawala: ₱2,500 na sana ay ibinigay ng kumpanya. Nagsimula pa rin ang account. Mas maliit ang huli kaysa hindi.' }, balance: 7000, outcome: 'steady' },
          b3: { text: { en: '₱6,000 a year of free money, declined, for thirty-five years. At 6% that was about ₱700,000 at 60.', tl: '₱6,000 kada taon na libreng pera, tinanggihan, sa loob ng tatlumpu’t limang taon. Sa 6%, mga ₱700,000 iyon sa 60.' }, balance: 4000, outcome: 'costly' },
        },
      },
      keep: { text: { en: 'Small and automatic beats large and someday.', tl: 'Mas mabuti ang maliit at automatic kaysa malaki at balang araw.' }, action: null },
    },
  ],
};

const pamilya = {
  id: 'first.pamilya',
  title: { en: 'Pamilya money', tl: 'Pera ng pamilya' },
  summary: { en: 'Remittances, the store tab, savings circles, and how to help family without a lending app.', tl: 'Padala, lista, paluwagan, at kung paano tumulong sa pamilya nang walang lending app.' },
  competency: { en: 'Can plan money that leaves the household', tl: 'Kayang planuhin ang perang umaalis sa sambahayan' },
  wish: 'rid',
  status: 'authored',
  bites: [
    {
      id: 'first.pamilya.1',
      title: { en: 'Sending ₱5,000 home', tl: 'Magpadala ng ₱5,000 sa probinsya' },
      minutes: 2,
      hook: { text: { en: 'Every month ₱5,000 goes to your mother in Leyte. The way it travels decides how much of it arrives.', tl: 'Kada buwan, ₱5,000 ang napupunta sa nanay mo sa Leyte. Ang paraan ng pagpapadala ang nagpapasya kung magkano ang dumarating.' }, illo: 'ship' },
      show: { text: { en: 'Compare the fee on your side and the cash-out fee on hers. Amounts here are illustrative; check the current fee table.', tl: 'Ikumpara ang fee sa panig mo at ang cash-out fee sa panig niya. Illustrative ang halaga; tingnan ang kasalukuyang fee table.' }, points: [], illo: 'ship', animate: false },
      do: {
        type: 'compare',
        prompt: { en: 'Which delivers more of the ₱5,000?', tl: 'Alin ang mas marami ang naihahatid sa ₱5,000?' },
        options: [
          { title: { en: 'Wallet to wallet', tl: 'Wallet to wallet' }, lines: [{ en: 'Transfer free between wallets', tl: 'Libre ang transfer sa pagitan ng wallets' }, { en: 'She cashes out at a partner outlet, about 2%', tl: 'Mag-cash out siya sa partner outlet, mga 2%' }], effective: { en: '₱4,900 in her hand, ₱100 lost', tl: '₱4,900 sa kamay niya, ₱100 ang nawala' }, cheaper: true },
          { title: { en: 'Remittance counter', tl: 'Remittance counter' }, lines: [{ en: 'Fee about ₱150 for ₱5,000', tl: 'Mga ₱150 na fee para sa ₱5,000' }, { en: 'Plus a tricycle to town and back', tl: 'Dagdag ang tricycle papuntang bayan at pabalik' }], effective: { en: '₱4,850 in her hand, ₱150 lost, plus fare', tl: '₱4,850 sa kamay niya, ₱150 ang nawala, dagdag pamasahe' }, cheaper: false },
        ],
        why: { en: 'The wallet wins if she has one and an outlet nearby. If she spends from the wallet directly, the cash-out fee disappears too. Twelve months of ₱50 is a ₱600 difference.', tl: 'Panalo ang wallet kung mayroon siya at may malapit na outlet. Kung diretso siyang gumagastos mula sa wallet, nawawala rin ang cash-out fee. Labindalawang buwan ng ₱50 ay ₱600 ang pagkakaiba.' },
      },
      keep: { text: { en: 'Post the remittance in Remit so it is a line in the plan, not a surprise on the 15th.', tl: 'I-post ang padala sa Remit para maging linya sa plano, hindi sorpresa sa a-kinse.' }, action: { kind: 'open', label: { en: 'Open Remit', tl: 'Buksan ang Remit' }, payload: { app: 'remit' } } },
    },
    {
      id: 'first.pamilya.2',
      title: { en: 'The store tab', tl: 'Ang lista' },
      minutes: 2,
      hook: { text: { en: 'Aling Nena lets you take rice and eggs on the store tab until payday. No interest, no forms. It is the oldest credit line in the Philippines.', tl: 'Pinapayagan ka ni Aling Nena na kumuha ng bigas at itlog sa lista hanggang payday. Walang interes, walang forms. Ito ang pinakamatandang credit line sa Pilipinas.' }, illo: 'cart' },
      show: { text: { en: 'A store tab is interest-free credit that runs on a relationship. Its price is paid in trust, and trust is not renewable on demand.', tl: 'Ang lista ay credit na walang interes na tumatakbo sa relasyon. Ang bayad nito ay tiwala, at hindi renewable ang tiwala kapag gusto mo.' }, points: [], illo: 'cart', animate: false },
      do: {
        type: 'choice',
        prompt: { en: 'Payday comes and the store tab is ₱1,800. What is the right move?', tl: 'Dumating ang payday at ₱1,800 ang lista. Ano ang tamang gawin?' },
        options: [
          { text: { en: 'Pay it in full on payday, before wants', tl: 'Bayaran nang buo sa payday, bago ang wants' }, correct: true, why: { en: 'Full and first. The store extends credit to those who clear it.', tl: 'Buo at una. Nagpapautang ang tindahan sa mga nagbabayad nang buo.' } },
          { text: { en: 'Pay half, the store can wait', tl: 'Bayaran ang kalahati, makakapaghintay ang tindahan' }, correct: false, why: { en: 'The store is somebody’s cash flow. Half today means no store tab next month.', tl: 'Cash flow ng iba ang tindahan. Kalahati ngayon ay walang lista sa susunod na buwan.' } },
          { text: { en: 'Take a lending-app loan to pay it and keep wants intact', tl: 'Umutang sa lending app para bayaran at hindi galawin ang wants' }, correct: false, why: { en: 'Replacing 0% credit with 15% a month.', tl: 'Pinapalitan ang 0% credit ng 15% kada buwan.' } },
        ],
      },
      keep: { text: { en: 'Free credit is paid back first. That is how it stays free.', tl: 'Ang libreng credit ay unang binabayaran. Iyon ang dahilan kung bakit nananatiling libre.' }, action: null },
    },
    {
      id: 'first.pamilya.3',
      title: { en: 'Savings circle and friends', tl: 'Paluwagan at mga kaibigan' },
      minutes: 2,
      hook: { text: { en: 'Ten officemates, ₱1,000 each, every payday. Every payday one of them takes home ₱10,000. It is a savings plan, a loan, and a friendship test at once.', tl: 'Sampung officemate, ₱1,000 bawat isa, kada payday. Kada payday, isa sa kanila ang umuuwi na may ₱10,000. Savings plan, utang, at pagsubok sa pagkakaibigan nang sabay.' }, illo: 'family' },
      show: { text: { en: 'Informal money has its own vocabulary. Knowing the words is knowing the risks.', tl: 'May sariling bokabularyo ang informal na pera. Ang pag-alam ng salita ay pag-alam ng panganib.' }, points: [], illo: 'family', animate: false },
      do: {
        type: 'match',
        prompt: { en: 'Match the word to what it is.', tl: 'I-match ang salita sa kahulugan.' },
        pairs: [
          { a: { en: 'Savings circle', tl: 'Paluwagan' }, b: { en: 'Rotating pool: everyone pays in, one takes the pot each round', tl: 'Umiikot na pondo: lahat naghuhulog, isa ang kumukuha kada round' } },
          { a: { en: 'Store tab', tl: 'Lista' }, b: { en: 'Store credit until payday, no interest', tl: 'Credit sa tindahan hanggang payday, walang interes' } },
          { a: { en: 'Five-six', tl: 'Five-six' }, b: { en: 'Informal loan at about 20% per cycle', tl: 'Informal na utang sa mga 20% kada cycle' } },
          { a: { en: 'Remittance', tl: 'Padala' }, b: { en: 'Money sent to family, usually monthly', tl: 'Perang ipinapadala sa pamilya, karaniwang buwanan' } },
          { a: { en: 'Pawning', tl: 'Sangla' }, b: { en: 'A pawn: an item held against a loan', tl: 'Sanla: gamit na hawak kapalit ng utang' } },
        ],
      },
      keep: { text: { en: 'In a savings circle, the last to collect has lent to everyone. Know your number before you join.', tl: 'Sa paluwagan, ang huling kumuha ay nagpautang sa lahat. Alamin ang numero mo bago sumali.' }, action: { kind: 'open', label: { en: 'Track a savings circle in Circles', tl: 'I-track ang paluwagan sa Circles' }, payload: { app: 'circles' } } },
    },
    {
      id: 'first.pamilya.4',
      title: { en: 'How much to send', tl: 'Magkano ang ipapadala' },
      minutes: 3,
      hook: { text: { en: 'Net pay ₱18,300. Needs ₱9,200. Your mother’s share is a number you have never written down.', tl: 'Net pay ₱18,300. Needs ₱9,200. Ang bahagi ng nanay mo ay numerong hindi mo pa naisusulat.' }, illo: 'jars' },
      show: { text: { en: 'Remittance is a jar, not a leak. Give it a size and it stops competing with everything else every month.', tl: 'Jar ang padala, hindi tagas. Bigyan ito ng laki at hindi na ito makikipagkumpitensya sa lahat kada buwan.' }, points: [], illo: 'jars', animate: false },
      do: {
        type: 'allocate',
        prompt: { en: 'Split ₱18,300 with a remittance jar included.', tl: 'Hatiin ang ₱18,300 na may kasamang padala jar.' },
        total: 18300, step: 100,
        jars: [
          { key: 'needs', label: { en: 'Needs', tl: 'Needs' }, hint: { en: 'About ₱9,200', tl: 'Mga ₱9,200' }, guide: [45, 60] },
          { key: 'padala', label: { en: 'Remittance', tl: 'Padala' }, hint: { en: 'A fixed amount, agreed', tl: 'Fixed na halaga, napagkasunduan' }, guide: [5, 20] },
          { key: 'savings', label: { en: 'Savings', tl: 'Savings' }, hint: { en: 'Emergency fund, wishes', tl: 'Emergency fund, wishes' }, guide: [10, 30] },
          { key: 'wants', label: { en: 'Wants', tl: 'Wants' }, hint: { en: 'What is left', tl: 'Ang natitira' }, guide: [5, 30] },
        ],
        why: { en: 'A remittance under 20% keeps savings alive. If it must be more, the conversation is with family, not with the savings jar.', tl: 'Ang padala na wala pang 20% ay nagpapanatili ng savings. Kung kailangang mas malaki, sa pamilya ang usapan, hindi sa savings jar.' },
      },
      keep: { text: { en: 'A fixed remittance is a gift with a size. An open one is a debt with no end.', tl: 'Ang fixed na padala ay regalong may laki. Ang bukas na padala ay utang na walang katapusan.' }, action: null },
    },
    {
      id: 'first.pamilya.5',
      title: { en: 'Remittance month', tl: 'Buwan ng padala' },
      minutes: 3,
      hook: { text: { en: 'Fiesta, a nephew’s enrolment, and a cousin who needs a "loan" arrive in the same month. Your remittance jar holds ₱2,000.', tl: 'Fiesta, enrollment ng pamangkin, at pinsang kailangan ng "utang", lahat sa iisang buwan. ₱2,000 ang laman ng padala jar mo.' }, illo: 'family' },
      show: { text: { en: 'Saying yes to everything costs the emergency fund. Saying no to everything costs the family. The jar is the third answer.', tl: 'Ang oo sa lahat ay katumbas ng emergency fund. Ang hindi sa lahat ay katumbas ng pamilya. Ang jar ang ikatlong sagot.' }, points: [], illo: 'family', animate: false },
      do: {
        type: 'story', start: 'n1',
        nodes: {
          n1: { text: { en: 'Three requests total ₱6,500. The jar has ₱2,000. The emergency fund has ₱12,000.', tl: 'Tatlong hiling, ₱6,500 lahat. ₱2,000 ang jar. ₱12,000 ang emergency fund.' }, balance: 2000, choices: [
            { text: { en: 'Send the ₱2,000 to the enrolment and explain the rest', tl: 'Ipadala ang ₱2,000 sa enrollment at ipaliwanag ang iba' }, next: 'a1' },
            { text: { en: 'Cover all three from the emergency fund', tl: 'Sagutin lahat mula sa emergency fund' }, next: 'b1' } ] },
          a1: { text: { en: 'Enrolment is paid. The fiesta happens without your contribution, and your cousin finds the money elsewhere. Next month the jar refills to ₱2,000 and the fund is untouched.', tl: 'Bayad ang enrollment. Natuloy ang fiesta nang wala ang ambag mo, at nakahanap ng pera ang pinsan mo sa iba. Sa susunod na buwan, ₱2,000 ulit ang jar at buo ang fund.' }, balance: 12000, outcome: 'steady' },
          b1: { text: { en: 'Everyone is happy. The fund is ₱5,500. Three weeks later you get dengue.', tl: 'Masaya ang lahat. ₱5,500 ang fund. Pagkalipas ng tatlong linggo, nagka-dengue ka.' }, balance: 5500, choices: [
            { text: { en: 'Ask your cousin for the "loan" back', tl: 'Singilin ang pinsan sa "utang"' }, next: 'b2' },
            { text: { en: 'Lending app for the hospital gap', tl: 'Lending app para sa kulang sa ospital' }, next: 'b3' } ] },
          b2: { text: { en: 'He does not have it. You pay the ₱9,000 hospital gap from the fund and a ₱3,500 salary advance. The fund is ₱0 and the remittance jar is suspended for two months.', tl: 'Wala siya. Binayaran mo ang ₱9,000 na kulang mula sa fund at ₱3,500 na salary advance. ₱0 ang fund at dalawang buwang suspendido ang padala jar.' }, balance: 0, outcome: 'costly' },
          b3: { text: { en: '₱9,000 at 15% a month. You clear it in four months for ₱12,000. The three yeses cost ₱9,500 more than the one yes would have.', tl: '₱9,000 sa 15% kada buwan. Nabayaran sa apat na buwan sa ₱12,000. ₱9,500 ang dagdag na halaga ng tatlong oo kumpara sa isang oo.' }, balance: -12000, outcome: 'costly' },
        },
      },
      keep: { text: { en: 'A jar lets you say yes to one thing every month for the rest of your life.', tl: 'Ang jar ay nagpapahintulot na sumagot ng oo sa isang bagay kada buwan habambuhay.' }, action: { kind: 'commitment', label: { en: 'Fund a wish on the next two paydays', tl: 'Pondohan ang isang wish sa susunod na dalawang payday' }, payload: { id: 'fund-30' } } },
    },
  ],
};

export default [scam, invest, retire, pamilya];
