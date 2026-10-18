// Path: Retired (60 and over). Seven lessons: claiming a pension, fraud defence,
// PhilHealth and the senior discount, spending down savings, a pension budget,
// estate and transfers, and helping family without going broke.

const claim = {
  id: 'retired.claim',
  title: { en: 'Claiming your pension', tl: 'Pag-claim ng pension' },
  summary: { en: 'When to file, how many contributions you need, and the extra pension every December.', tl: 'Kailan mag-file, ilang contributions ang kailangan, at ang dagdag na pension tuwing Disyembre.' },
  competency: { en: 'Can claim an SSS or GSIS pension', tl: 'Kayang mag-claim ng SSS o GSIS pension' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'retired.claim.1',
      title: { en: 'Sixty or sixty-five', tl: 'Animnapu o animnapu’t lima' },
      minutes: 3,
      hook: {
        text: { en: 'You turn sixty. You have stopped working. A neighbor says you must wait until sixty-five to claim.', tl: 'Nag-sisenta na po kayo. Tumigil na kayo sa pagtatrabaho. Sabi ng kapitbahay, kailangan pa raw ninyong maghintay hanggang sesenta-singko.' },
        illo: 'calendar',
      },
      show: {
        text: { en: 'Retirement can start at sixty if you have stopped working. It becomes compulsory at sixty-five either way.', tl: 'Puwede na po kayong mag-retire sa animnapu, kung tumigil na kayo sa trabaho. Compulsory pa rin ito sa animnapu’t lima, kahit ano pa ang trabaho ninyo.' },
        points: [
          { en: 'At 60: optional, only if you are no longer employed or self-employed.', tl: 'Sa 60: optional po, kung tumigil na kayo sa trabaho o negosyo.' },
          { en: 'At 65: compulsory, whether you are still working or not.', tl: 'Sa 65: compulsory po, kahit nagtatrabaho pa kayo.' },
          { en: 'Filing early at 60 can mean a smaller monthly pension for life.', tl: 'Kapag maaga kayong nag-claim sa 60, mas maliit ang pension ninyo habambuhay.' },
        ],
        illo: 'calendar',
        animate: true,
      },
      do: {
        type: 'choice',
        prompt: { en: 'You are 60 and no longer working. When can you start claiming your SSS pension?', tl: 'Animnapu na po kayo at hindi na nagtatrabaho. Kailan po kayo puwedeng mag-claim ng SSS pension?' },
        options: [
          { text: { en: 'Now, at 60', tl: 'Ngayon, sa 60' }, correct: true, why: { en: 'You qualify at 60 once you have stopped working or running a business.', tl: 'Kwalipikado na po kayo sa 60, kapag tumigil na kayo sa trabaho o negosyo.' } },
          { text: { en: 'Only at 65', tl: 'Sa 65 lang' }, correct: false, why: { en: '65 is when retirement becomes compulsory, not the earliest age.', tl: 'Compulsory ang retirement sa 65, hindi ito ang pinakamaagang edad na puwede.' } },
          { text: { en: 'Only if you have 120 contributions', tl: 'Kung 120 contributions na lang po ang mayroon kayo' }, correct: false, why: { en: 'Contributions decide the amount, not whether you can start at 60.', tl: 'Ang contributions ang nagtatakda ng halaga, hindi kung kailan po kayo puwedeng mag-claim.' } },
        ],
      },
      keep: {
        text: { en: 'Sixty is a choice, not a rule. You decide when to stop.', tl: 'Pagpipilian ang animnapu, hindi patakaran. Kayo po ang magpapasya kung kailan titigil.' },
        action: null,
      },
    },
    {
      id: 'retired.claim.2',
      title: { en: '120 contributions', tl: '120 contributions' },
      minutes: 3,
      hook: {
        text: { en: 'Two neighbors turn 65 the same month. One gets a pension for life. The other gets one payment.', tl: 'Dalawang kapitbahay, parehong buwan silang nag-65. Isa, may pension habambuhay. Isa, minsanang bayad na lang.' },
        illo: 'certificate',
      },
      show: {
        text: { en: 'A monthly pension for life needs at least 120 monthly contributions. Fewer than that, SSS pays a lump sum instead.', tl: 'Kailangan ng hindi bababa sa 120 monthly contributions para sa buwanang pension habambuhay. Kulang dito, lump sum na lang ang ibibigay ng SSS.' },
        points: [
          { en: '120 contributions is ten years of paying in, in any order.', tl: 'Sampung taon ng pagbabayad ang 120 contributions, kahit anong pagkakasunod.' },
          { en: 'GSIS has its own contribution rule. Ask at your agency’s HR.', tl: 'May sariling patakaran ang GSIS. Magtanong po sa HR ng ahensya ninyo.' },
          { en: 'A lump sum is your contributions plus interest, paid once.', tl: 'Ang lump sum ay ang contributions ninyo kasama ang interes, minsanang bayad po.' },
        ],
        illo: 'certificate',
        animate: false,
      },
      do: {
        type: 'number',
        prompt: { en: 'You have paid 96 monthly contributions. How many more until 120?', tl: 'Nakabayad na po kayo ng 96 monthly contributions. Ilan pa hanggang 120?' },
        answer: 24,
        tolerance: 0,
        format: 'number',
        worked: { en: '120 − 96 = 24. Twenty-four more months of contributions make the pension lifelong.', tl: '120 − 96 = 24. Dalawampu’t apat na buwan pa ng contributions, at habambuhay na ang pension ninyo.' },
      },
      keep: {
        text: { en: '120 is ten years. Ask SSS or GSIS exactly how many you have.', tl: '120 ay sampung taon. Itanong po sa SSS o GSIS kung ilan na talaga ang sa inyo.' },
        action: { kind: 'commitment', label: { en: 'Check my SSS or GSIS contributions', tl: 'Tingnan ang SSS o GSIS contributions ko' }, payload: { id: 'check-benefits' } },
      },
    },
    {
      id: 'retired.claim.3',
      title: { en: 'The extra pension in December', tl: 'Ang dagdag na pension sa Disyembre' },
      minutes: 2,
      hook: {
        text: { en: 'Same amount lands every month, all year. Then December brings a second deposit.', tl: 'Pareho ang halagang dumarating kada buwan, buong taon. Tapos may pangalawang deposito sa Disyembre.' },
        illo: 'calendar',
      },
      show: {
        text: { en: 'SSS pays a 13th month pension every December, the same as one month’s pension, with no application needed. GSIS pays a Christmas cash gift instead: one month’s pension or ₱10,000, whichever is lower.', tl: 'Nagbibigay ang SSS ng 13th month pension tuwing Disyembre. Kapareho ito ng isang buwang pension, walang kailangang i-apply. Ang GSIS naman ay nagbibigay ng Christmas cash gift. Isang buwang pension o ₱10,000, alinman ang mas mababa.' },
        points: [
          { en: 'It arrives automatically, on top of the regular December pension.', tl: 'Awtomatiko itong dumarating, dagdag sa regular na pension sa Disyembre.' },
          { en: 'Illustrative: a ₱4,500 monthly pension adds ₱4,500 more in December.', tl: 'Illustrative: ang ₱4,500 na buwanang pension ay may dagdag na ₱4,500 sa Disyembre.' },
        ],
        illo: 'calendar',
        animate: true,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Your monthly pension is ₱4,500. Slide your guess: how much extra in December?', tl: 'Ang buwanang pension ninyo ay ₱4,500 po. I-slide ang hula ninyo: magkano ang dagdag sa Disyembre?' },
        min: 0, max: 10000, step: 100, format: 'peso', answer: 4500,
        why: { en: '₱4,500. The 13th month pension matches one month’s pension, paid every December.', tl: '₱4,500. Ang 13th month pension ay kapareho ng isang buwang pension, binabayaran tuwing Disyembre.' },
      },
      keep: {
        text: { en: 'Expect two deposits in December, not one. Plan for both.', tl: 'Umasa po ng dalawang deposito sa Disyembre, hindi isa lang. Planuhin ang dalawa.' },
        action: { kind: 'wish', label: { en: 'Save half of the December extra', tl: 'Itabi ang kalahati ng dagdag sa Disyembre' }, payload: { key: 'thirteenth-pension', title: { en: 'Half of the December pension, kept', tl: 'Kalahati ng pension sa Disyembre, naitabi' }, amount: 2250 } },
      },
    },
    {
      id: 'retired.claim.4',
      title: { en: 'Filing without the long line', tl: 'Pag-file nang walang mahabang pila' },
      minutes: 3,
      hook: {
        text: { en: 'The nearest SSS branch is two jeepney rides away. Ate files her claim from her phone instead.', tl: 'Dalawang sakay ng jeep ang pinakamalapit na SSS branch. Sa phone na lang nag-file si Ate ng claim niya.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'My.SSS and the SSS mobile app accept a retirement claim online. GSIS members file through their agency’s eServices portal.', tl: 'Tinatanggap ng My.SSS at SSS mobile app ang online na retirement claim. Ang GSIS members ay nag-file sa eServices portal ng ahensya nila.' },
        points: [
          { en: 'Upload a valid ID and your bank account details.', tl: 'Mag-upload po ng valid ID at detalye ng bank account ninyo.' },
          { en: 'File before your last working day, not after.', tl: 'Mag-file bago ang huling araw ninyo ng trabaho, hindi pagkatapos.' },
        ],
        illo: 'phone',
        animate: false,
      },
      do: {
        type: 'order',
        prompt: { en: 'Put the steps to file an SSS retirement claim online in order.', tl: 'Ayusin po ang mga hakbang sa pag-file ng SSS retirement claim online.' },
        steps: [
          { en: 'Log in to My.SSS or the SSS mobile app', tl: 'Mag-log in sa My.SSS o SSS mobile app' },
          { en: 'Open the retirement claim application', tl: 'Buksan ang retirement claim application' },
          { en: 'Upload your ID and bank account details', tl: 'Mag-upload ng ID at detalye ng bank account' },
          { en: 'Submit the claim and wait for the SMS confirmation', tl: 'I-submit ang claim at hintayin ang SMS confirmation' },
          { en: 'Check the claim status online', tl: 'Tingnan ang status ng claim online' },
        ],
        why: { en: 'Filing before your last working day means the first pension arrives without a gap.', tl: 'Mag-file bago ang huling araw ninyo ng trabaho. Walang puwang bago dumating ang unang pension.' },
      },
      keep: {
        text: { en: 'File it yourself, from home, before you need the pension.', tl: 'Kayo mismo po ang mag-file, mula sa bahay, bago ninyo kailanganin ang pension.' },
        action: null,
      },
    },
    {
      id: 'retired.claim.5',
      title: { en: 'Confirming you are still there', tl: 'Kumpirmahing nariyan pa po kayo' },
      minutes: 4,
      hook: {
        text: { en: 'Once a year, SSS asks some pensioners to confirm they are still there: those 80 and over, those abroad, and disability or survivor pensioners. GSIS asks all its pensioners. Skip it, and the pension stops.', tl: 'Minsan sa isang taon, may hihilingin ang SSS sa ilang pensioner. Kasama ang 80 pataas, nasa abroad, at disability o survivor pensioners. Kumpirmahin nilang buhay pa sila. Sa GSIS, lahat ng pensioner. Kapag nilaktawan, titigil ang pension.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'This is the Annual Confirmation of Pensioners. It protects the fund from paying a pension no one is receiving.', tl: 'Ito ang Annual Confirmation of Pensioners. Pinoprotektahan nito ang fund sa pagbabayad ng pension na walang tumatanggap.' },
        points: [
          { en: 'Confirm at a branch, or in the app with a facial check, accepted since March 2026.', tl: 'Kumpirma po sa branch, o sa app gamit ang facial check, tinatanggap mula Marso 2026.' },
          { en: 'A missed confirmation suspends the pension until you confirm. Two years unconfirmed cancels it.', tl: 'Ang di-nakumpirmang taon ay nagsususpinde ng pension hanggang kumpirma po kayo. Dalawang taong walang kumpirmasyon, kakanselahin ito.' },
        ],
        illo: 'shield',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'A text reminds you: confirm your pension status this month or it pauses.', tl: 'May text na paalala: kumpirmahin po ang status ng pension ninyo ngayong buwan. Kung hindi, mapapatigil ito.' },
            balance: 4500,
            choices: [
              { text: { en: 'Confirm this week through the mobile app', tl: 'Kumpirma ngayong linggo gamit ang mobile app' }, next: 'a1' },
              { text: { en: 'Set it aside, confirm next month instead', tl: 'Ipagpaliban muna, kumpirma na lang sa susunod na buwan' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'The app confirms your status in minutes. December’s pension, ₱4,500, arrives on schedule.', tl: 'Ilang minuto lang, nakumpirma ng app ang status ninyo po. Dumating sa oras ang pension sa Disyembre, ₱4,500.' },
            balance: 4500,
            outcome: 'steady',
          },
          b1: {
            text: { en: 'Next month arrives, and the confirmation is still not done. The pension pauses at ₱0 until you confirm.', tl: 'Dumating ang susunod na buwan, wala pa ring kumpirmasyon. Napatigil ang pension sa ₱0 hanggang kumpirma po kayo.' },
            balance: 0,
            choices: [
              { text: { en: 'Confirm now at the nearest branch', tl: 'Kumpirma na ngayon sa pinakamalapit na branch' }, next: 'b2' },
              { text: { en: 'Wait for someone to call about it', tl: 'Maghintay na lang na may tumawag tungkol dito' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'The branch confirms your status the same day. The pension resumes next cycle, ₱4,500 again.', tl: 'Kinumpirma ng branch ang status ninyo po sa parehong araw. Bumalik ang pension sa susunod na cycle, ₱4,500 ulit.' },
            balance: 4500,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'No one calls. Weeks pass with no pension, and the gap has to be covered from savings.', tl: 'Walang tumatawag. Ilang linggo nang walang pension, at ang puwang ay kailangang saluhin ng savings.' },
            balance: 0,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'Confirm every year, on time. It keeps the pension moving.', tl: 'Kumpirma po bawat taon, sa tamang oras. Nagpapatuloy nito ang pension.' },
        action: { kind: 'commitment', label: { en: 'Check my SSS or GSIS contributions', tl: 'Tingnan ang SSS o GSIS contributions ko' }, payload: { id: 'check-benefits' } },
      },
    },
  ],
};

const fraud = {
  id: 'retired.fraud',
  title: { en: 'Fraud defence', tl: 'Depensa laban sa scam' },
  summary: { en: 'How to spot a scam call and a fake SMS. What to do in the first hour after a mistake.', tl: 'Paano mapansin ang scam call, fake SMS, at ang unang oras pagkatapos ng maling padala.' },
  competency: { en: 'Can spot and stop a scam aimed at seniors', tl: 'Kayang mapansin at mapigilan ang scam laban sa senior' },
  wish: 'safe',
  status: 'authored',
  bites: [
    {
      id: 'retired.fraud.1',
      title: { en: 'The bank never asks for your OTP', tl: 'Hindi kailanman hihingi ng OTP ang bangko' },
      minutes: 3,
      hook: {
        text: { en: 'A caller says your account is compromised. He needs the OTP sent to your phone to fix it.', tl: 'May tumawag, sabing na-compromise ang account ninyo. Kailangan daw niya ang OTP na dumating sa phone ninyo para ayusin ito.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'No bank employee will ever ask for your OTP, even to protect your account. The OTP is yours alone.', tl: 'Walang empleyado ng bangko ang hihingi ng OTP ninyo, kahit para protektahan ang account ninyo. Sa inyo lang po dapat ang OTP.' },
        points: [
          { en: 'A real bank already knows your account details.', tl: 'Alam na po ng tunay na bangko ang detalye ng account ninyo.' },
          { en: 'Banks are moving away from OTP for risky transactions by mid-2026.', tl: 'Papalitan ng bangko ang OTP sa mga mapanganib na transaksyon sa 2026.' },
        ],
        illo: 'phone',
        animate: true,
      },
      do: {
        type: 'choice',
        prompt: { en: 'A caller claims to be your bank and asks for your OTP. What should you do?', tl: 'May tumawag, sabing taga-bangko, at humihingi ng OTP ninyo. Ano po ang dapat ninyong gawin?' },
        options: [
          { text: { en: 'Read the OTP so they can protect the account', tl: 'Basahin ang OTP para maprotektahan ang account' }, correct: false, why: { en: 'Reading it out gives the caller everything needed to take the money.', tl: 'Ang pagbasa nito ang siya mismong kailangan ng scammer para kunin ang pera.' } },
          { text: { en: 'Hang up, then call the number on your ATM card', tl: 'Ibaba ang tawag, tapos tumawag sa numero sa ATM card ninyo' }, correct: true, why: { en: 'Calling a number you already trust closes the door on the caller.', tl: 'Ang pagtawag sa numerong pinagkakatiwalaan na ninyo ang sumasara sa tumawag.' } },
          { text: { en: 'Ask the caller to call back tomorrow', tl: 'Sabihin sa tumawag na bukas na lang tumawag ulit' }, correct: false, why: { en: 'Waiting does not remove the risk. Hang up and verify now.', tl: 'Hindi nawawala ang panganib sa paghihintay. Ibaba po at i-verify agad.' } },
        ],
      },
      keep: {
        text: { en: 'No bank will ever ask for your OTP over the phone.', tl: 'Walang bangko ang hihingi ng OTP ninyo po sa telepono.' },
        action: null,
      },
    },
    {
      id: 'retired.fraud.2',
      title: { en: 'The message from your apo', tl: 'Ang mensahe mula sa apo ninyo' },
      minutes: 3,
      hook: {
        text: { en: 'Twenty seconds. A message arrives that says it is from your grandchild. Read it closely.', tl: 'Dalawampung segundo. May dumating na mensahe, sabi galing sa apo ninyo. Basahin po nang mabuti.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'Some messages arrive built on urgency, a new number, and a request for secrecy. Tap the lines that raise doubt.', tl: 'May mga mensaheng ginawa sa urgency, bagong number, at request na manahimik na lang kayo. I-tap po ang linyang may pag-aalinlangan.' },
        points: [],
        illo: 'phone',
        animate: false,
      },
      do: {
        type: 'spot',
        prompt: { en: 'Tap the lines that should make you pause before sending money.', tl: 'I-tap po ang mga linyang dapat magpapatigil sa inyo bago magpadala ng pera.' },
        seconds: 20,
        message: {
          channel: 'sms',
          from: { en: 'Unknown number', tl: 'Hindi kilalang numero' },
          lines: [
            { text: { en: 'Hi Grandma, how are you?', tl: 'Hi Lola, kumusta ka na?' }, suspicious: false, why: { en: 'A greeting on its own is not a warning sign.', tl: 'Ang pagbati lang ay hindi babala.' } },
            { text: { en: 'This is my new number, I lost my phone.', tl: 'Ito na lang ang bagong number ko, nawala ang phone ko.' }, suspicious: true, why: { en: 'A sudden new number is how this scam usually opens.', tl: 'Ang biglaang bagong number ang karaniwang simula ng scam na ito.' } },
            { text: { en: 'I hope I can visit soon.', tl: 'Sana malapit na akong makabisita.' }, suspicious: false, why: { en: 'A warm line on its own does not ask for money.', tl: 'Ang mainit na linya lang ay hindi humihingi ng pera.' } },
            { text: { en: 'I need ₱3,000 now, just send it here.', tl: 'Kailangan ko ng ₱3,000 ngayon, ipadala mo na lang dito.' }, suspicious: true, why: { en: 'Urgency plus an immediate demand for money is the pressure tactic.', tl: 'Ang urgency at biglaang hingi ng pera ang taktika ng scam.' } },
            { text: { en: 'Please don’t tell my parents.', tl: 'Huwag mo na lang sabihin sa mga magulang ko.' }, suspicious: true, why: { en: 'Asking a family member to keep a secret is a warning sign.', tl: 'Ang paghingi ng lihim mula sa kapamilya ay isang babala.' } },
          ],
        },
        why: { en: 'Three signs together: a new number, urgency, and a request for secrecy. Call a family member you trust before sending anything.', tl: 'Tatlong senyales magkasama: bagong number, urgency, at paghingi ng lihim. Tumawag po sa kapamilyang pinagkakatiwalaan ninyo bago magpadala ng kahit ano.' },
      },
      keep: {
        text: { en: 'A real apo will not mind if you call to confirm first.', tl: 'Kung tunay na apo, hindi po magagalit kung tatawag muna kayo para i-confirm.' },
        action: { kind: 'drill', label: { en: 'Join the weekly scam drill', tl: 'Sumali sa weekly scam drill' }, payload: {} },
      },
    },
    {
      id: 'retired.fraud.3',
      title: { en: 'Real SSS, real PhilHealth', tl: 'Tunay na SSS, tunay na PhilHealth' },
      minutes: 3,
      hook: {
        text: { en: 'A caller says your PhilHealth benefits stop today unless you pay a fee right now.', tl: 'May tumawag, sabing titigil ang PhilHealth benefits ninyo ngayon, kung hindi kayo magbabayad ng fee.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'SSS and PhilHealth never suspend a benefit through a phone call or a text link. Sort what is real from what is fake.', tl: 'Hindi kailanman sinususpinde ng SSS at PhilHealth ang benefit sa tawag o text link. Ayusin po kung alin ang tunay at alin ang huwad.' },
        points: [],
        illo: 'shield',
        animate: false,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each card. Left is real, right is a scam.', tl: 'I-sort po ang bawat card. Kaliwa ay tunay, kanan ay scam.' },
        left: { en: 'Real', tl: 'Tunay' },
        right: { en: 'Scam', tl: 'Scam' },
        cards: [
          { text: { en: 'A text asks you to click a link to keep your pension active', tl: 'May text na nagpapa-click ng link para “keep active” ang pension ninyo' }, side: 'right', why: { en: 'SSS and GSIS never confirm a pension through a private link.', tl: 'Hindi kailanman kumpirma ang SSS at GSIS sa pribadong link.' } },
          { text: { en: 'A letter asks you to visit the branch with your ID for the annual confirmation', tl: 'May sulat na nagpapapunta sa branch, dala ang ID ninyo, para sa annual confirmation' }, side: 'left', why: { en: 'The annual confirmation happens in person, online, or through the official app.', tl: 'Ang annual confirmation ay sa branch, online, o sa opisyal na app.' } },
          { text: { en: 'A caller says PhilHealth needs a processing fee now or benefits stop', tl: 'May tumawag, sabing kailangan ng processing fee ngayon o titigil ang benefits' }, side: 'right', why: { en: 'Benefits are never conditioned on paying a caller over the phone.', tl: 'Hindi kailanman nakadepende ang benefits sa bayad sa tumawag.' } },
          { text: { en: 'A text reminds you it is time for your annual confirmation of pensioners', tl: 'May text na paalala na oras na po ng annual confirmation of pensioners ninyo' }, side: 'left', why: { en: 'A reminder that points you to the official SSS or GSIS channel is normal.', tl: 'Normal ang paalalang nagtuturo sa opisyal na channel ng SSS o GSIS.' } },
          { text: { en: 'A caller asks you to read the one-time PIN sent to your phone', tl: 'May tumawag na nagpapabasa ng one-time PIN na dumating sa phone ninyo' }, side: 'right', why: { en: 'No government agency asks for a one-time PIN over a call.', tl: 'Walang ahensya ng gobyerno ang humihingi ng one-time PIN sa tawag.' } },
          { text: { en: 'A visiting agent shows an ID you can verify by calling the hotline', tl: 'May bumisitang ahente na may ID na puwedeng i-verify sa hotline' }, side: 'left', why: { en: 'A real agent does not mind you checking before you talk further.', tl: 'Hindi nag-aalala ang tunay na ahente kung chine-check ninyo muna siya.' } },
        ],
      },
      keep: {
        text: { en: 'A real agency lets you verify first. A scammer rushes you.', tl: 'Pinapayagan kayo pong mag-verify muna ng tunay na ahensya. Pinapabilis kayo ng scammer.' },
        action: null,
      },
    },
    {
      id: 'retired.fraud.4',
      title: { en: 'The seminar with free lunch', tl: 'Ang seminar na may libreng lunch' },
      minutes: 3,
      hook: {
        text: { en: 'Ninety seconds. Ten statements about investment seminars and scams aimed at retirees.', tl: 'Siyamnapung segundo. Sampung pahayag tungkol sa investment seminars at scam na laban sa retirees.' },
        illo: 'certificate',
      },
      show: {
        text: { en: 'A free lunch and a guaranteed high return are the two most common bait.', tl: 'Ang libreng lunch at guaranteed na mataas na kita ang dalawang pinaka-karaniwang pain.' },
        points: [],
        illo: 'certificate',
        animate: false,
      },
      do: {
        type: 'rapid',
        seconds: 90,
        items: [
          { text: { en: 'A seminar promising 5% every month, guaranteed, is a normal offer.', tl: 'Normal lang ang seminar na nangakong 5% kada buwan, guaranteed.' }, answer: false, why: { en: 'A guaranteed high return with no risk is the clearest warning sign.', tl: 'Ang guaranteed na mataas na kita na walang risk ang pinakamalinaw na babala.' } },
          { text: { en: 'You can check an investment offer on the SEC Check App.', tl: 'Puwede po ninyong i-check ang investment offer sa SEC Check App.' }, answer: true, why: { en: 'Check every offer there before you hand over any money.', tl: 'I-check po muna doon bago magbigay ng kahit anong pera.' } },
          { text: { en: 'A bank can hold disputed funds under the Anti-Financial Account Scamming Act.', tl: 'Puwedeng i-hold ng bangko ang pinagtatalunang pera sa ilalim ng Anti-Financial Account Scamming Act.' }, answer: true, why: { en: 'RA 12010 lets a bank act fast once you report a scam.', tl: 'Pinapayagan ng RA 12010 ang bangko na kumilos agad pagkatapos ninyong mag-report.' } },
          { text: { en: 'Selling your own bank account to someone else is a crime.', tl: 'Krimen ang pagbenta ng sarili ninyong bank account sa iba.' }, answer: true, why: { en: 'Account sellers and money mules are criminally liable under the same law.', tl: 'Managot sa parehong batas ang nagbebenta ng account at money mule.' } },
          { text: { en: 'A real SSS or PhilHealth agent will ask for your full ATM PIN.', tl: 'Hihingi ng buong ATM PIN ninyo ang tunay na SSS o PhilHealth agent.' }, answer: false, why: { en: 'No government agent needs your PIN for anything they do.', tl: 'Walang kailangan ng PIN ninyo ang ahente ng gobyerno para sa trabaho nila.' } },
          { text: { en: 'No risk and a much higher return than a bank still needs checking.', tl: 'Kailangan pa ring i-check ang investment na walang risk pero mas mataas kaysa bangko.' }, answer: true, why: { en: 'No risk and higher return than a bank rarely happens together.', tl: 'Bihirang magkasama ang walang risk at mas mataas na kita kaysa bangko.' } },
          { text: { en: 'You can check a lender’s licence on the SEC list.', tl: 'Puwede po ninyong i-check ang lisensya ng lender sa listahan ng SEC.' }, answer: true, why: { en: 'An unlicensed lender has no one to answer to when things go wrong.', tl: 'Walang managot ang lender na walang lisensya kapag may problema.' } },
          { text: { en: 'Retirees are targeted because seminars assume they hold savings or a pension.', tl: 'Tina-target ang retirees dahil inaakala ng seminar na may savings o pension sila.' }, answer: true, why: { en: 'A lump sum or a steady pension is exactly what a scammer looks for.', tl: 'Ang lump sum o steady na pension ang eksaktong hinahanap ng scammer.' } },
        ],
      },
      keep: {
        text: { en: 'Check the SEC list before the seminar, not after you pay.', tl: 'I-check po ang listahan ng SEC bago ang seminar, hindi pagkatapos kayo magbayad.' },
        action: null,
      },
    },
    {
      id: 'retired.fraud.5',
      title: { en: 'The first hour', tl: 'Ang unang oras' },
      minutes: 4,
      hook: {
        text: { en: 'You realize the money you just sent went to a scammer. The next hour matters most.', tl: 'Napansin ninyong napunta sa scammer ang perang ipinadala ninyo. Ang susunod na oras ang pinakamahalaga.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'Speed matters more than anything else. A bank can act fast if you report right away.', tl: 'Mas mahalaga ang bilis kaysa sa lahat. Puwedeng kumilos agad ang bangko kung agad ninyo itong i-report.' },
        points: [],
        illo: 'shield',
        animate: false,
      },
      do: {
        type: 'order',
        prompt: { en: 'Put the steps for the first hour after a scam in order.', tl: 'Ayusin po ang mga hakbang sa unang oras pagkatapos ng scam.' },
        steps: [
          { en: 'Call your bank’s hotline and report the fraud', tl: 'Tumawag sa hotline ng bangko at i-report ang scam' },
          { en: 'Ask the bank to hold the account that received the money', tl: 'Hilingin sa bangko na i-hold ang account na tumanggap ng pera' },
          { en: 'Change your online banking and e-wallet passwords', tl: 'Palitan ang password ng online banking at e-wallet' },
          { en: 'Write down the caller’s number and the time of the transfer', tl: 'Isulat ang numero ng tumawag at oras ng paglipat' },
          { en: 'File a report with the PNP Anti-Cybercrime Group', tl: 'Mag-file ng report sa PNP Anti-Cybercrime Group' },
        ],
        why: { en: 'The law lets a bank freeze a suspicious account the moment you report it.', tl: 'Pinapayagan ng batas ang bangko na i-freeze agad ang kahina-hinalang account, pag-report ninyo.' },
      },
      keep: {
        text: { en: 'Save your bank’s hotline number now, before you ever need it.', tl: 'I-save na po ngayon ang hotline number ng bangko, bago ninyo ito kailanganin.' },
        action: { kind: 'open', label: { en: 'Share these steps with family in Circles', tl: 'Ibahagi ang mga hakbang na ito sa pamilya sa Circles' }, payload: { app: 'circles' } },
      },
    },
    {
      id: 'retired.fraud.6',
      title: { en: 'The call about ₱48,000', tl: 'Ang tawag tungkol sa ₱48,000' },
      minutes: 4,
      hook: {
        text: { en: 'A caller says he is from your bank. A suspicious transfer needs your OTP to stop it.', tl: 'May tumawag, sabing taga-bangko siya. Kailangan po ng OTP ninyo para mapigilan ang kahina-hinalang paglipat.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'Two calls, one month, each testing what you learned this lesson.', tl: 'Dalawang tawag, isang buwan, sinusubok ang natutunan ninyo sa araling ito.' },
        points: [],
        illo: 'phone',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'A caller says a suspicious ₱48,000 transfer needs your OTP to be stopped.', tl: 'May tumawag, sabing kailangan ang OTP ninyo para mapigilan ang kahina-hinalang ₱48,000 na paglipat.' },
            balance: 150000,
            choices: [
              { text: { en: 'Hang up and call the official bank hotline', tl: 'Ibaba ang tawag at tumawag sa opisyal na hotline ng bangko' }, next: 'a1' },
              { text: { en: 'Give the OTP to stop the transfer', tl: 'Ibigay ang OTP para mapigilan ang paglipat' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'The real bank confirms there is no such transfer. A week later, a caller claims to be from SSS.', tl: 'Kumpirmado ng tunay na bangko na walang ganoong transfer. Isang linggo pagkatapos, may tumawag na taga-SSS umano.' },
            balance: 150000,
            choices: [
              { text: { en: 'Refuse, and verify at the SSS branch yourself', tl: 'Tumanggi, at i-verify mismo sa SSS branch' }, next: 'a2' },
              { text: { en: 'Give your ATM number and PIN for the “increase”', tl: 'Ibigay ang ATM number at PIN para sa “dagdag”' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'The branch confirms there is no such program. ₱150,000 stays safe, two scams avoided in one month.', tl: 'Kumpirmado ng branch na walang ganoong programa. Ligtas ang ₱150,000, dalawang scam ang naiwasan sa isang buwan.' },
            balance: 150000,
            outcome: 'steady',
          },
          a3: {
            text: { en: 'Hours later, ₱150,000 is gone from the account. The PIN was all a scammer needed.', tl: 'Ilang oras pagkatapos, nawala ang ₱150,000 mula sa account. Ang PIN lang ang kailangan ng scammer.' },
            balance: 0,
            outcome: 'costly',
          },
          b1: {
            text: { en: 'Minutes later, ₱48,000 is gone. You realize immediately that it was a scam.', tl: 'Ilang minuto pagkatapos, nawala ang ₱48,000. Alam ninyo agad na na-scam kayo.' },
            balance: 102000,
            choices: [
              { text: { en: 'Call the bank and report it within the hour', tl: 'Tawagan ang bangko at i-report sa loob ng oras' }, next: 'b2' },
              { text: { en: 'Wait until tomorrow to report it', tl: 'Maghintay hanggang bukas para mag-report' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'Reporting fast lets the bank hold the receiving account under the law. ₱30,000 comes back.', tl: 'Dahil mabilis na-report, na-hold ng bangko ang tumanggap na account gamit ang batas. Bumalik ang ₱30,000.' },
            balance: 132000,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'By morning the scammer has already moved the money. Nothing comes back.', tl: 'Pagsapit ng umaga, nailipat na ng scammer ang pera. Wala nang nabawi.' },
            balance: 102000,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'The pause before you answer is worth more than any caller’s urgency.', tl: 'Ang pag-iisip bago sumagot ay mas mahalaga kaysa sa urgency ng sinumang tumawag.' },
        action: null,
      },
    },
  ],
};

const health = {
  id: 'retired.health',
  title: { en: 'PhilHealth and the 20% discount', tl: 'PhilHealth at ang 20% discount' },
  summary: { en: 'Automatic PhilHealth membership, the senior discount, and what each one does not cover.', tl: 'Awtomatikong PhilHealth membership, ang senior discount, at ang hindi nito sinasakop.' },
  competency: { en: 'Can use PhilHealth and the senior discount fully', tl: 'Kayang gamitin nang buo ang PhilHealth at senior discount' },
  wish: 'safe',
  status: 'authored',
  bites: [
    {
      id: 'retired.health.1',
      title: { en: 'Automatic PhilHealth membership', tl: 'Awtomatikong PhilHealth membership' },
      minutes: 3,
      hook: {
        text: { en: 'You turn sixty this year. A form at the clinic asks for your PhilHealth number.', tl: 'Nag-sisenta na po kayo ngayong taon. May form sa clinic na humihingi ng PhilHealth number ninyo.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'Every senior citizen is a PhilHealth member by law, RA 10645. No application, no premium to pay.', tl: 'Bawat senior citizen ay PhilHealth member na sa batas, RA 10645. Walang application, walang babayarang premium.' },
        points: [
          { en: 'Membership starts the moment you turn sixty.', tl: 'Nagsisimula po ang membership sa sandaling mag-sisenta kayo.' },
          { en: 'PhilHealth pays a fixed amount per illness, not the full bill.', tl: 'Nagbabayad ang PhilHealth ng fixed na halaga bawat sakit, hindi ang buong bill.' },
          { en: 'PhilHealth covered about 52% of an average hospital bill in 2023, and the share has been falling.', tl: 'Sinakop ng PhilHealth ang mga 52% ng karaniwang hospital bill noong 2023. Bumababa pa ang bahagi.' },
        ],
        illo: 'shield',
        animate: true,
      },
      do: {
        type: 'choice',
        prompt: { en: 'You turn sixty this year. Do you need to apply for PhilHealth membership?', tl: 'Nag-sisenta na po kayo ngayong taon. Kailangan pa po ba ninyong mag-apply para sa PhilHealth membership?' },
        options: [
          { text: { en: 'No, membership starts automatically at sixty.', tl: 'Hindi, awtomatiko nang nagsisimula ang membership sa animnapu.' }, correct: true, why: { en: 'RA 10645 makes every senior citizen a PhilHealth member, no application needed.', tl: 'Ginagawa ng RA 10645 na PhilHealth member ang bawat senior citizen, walang kailangang i-apply.' } },
          { text: { en: 'Yes, at the nearest PhilHealth office.', tl: 'Oo, sa pinakamalapit na PhilHealth office.' }, correct: false, why: { en: 'No office visit is needed. The law makes membership automatic at sixty.', tl: 'Walang kailangang puntahan. Ginagawang awtomatiko ng batas ang membership sa animnapu.' } },
          { text: { en: 'Only if you were never employed.', tl: 'Kung hindi pa po kayo nagtrabaho lang.' }, correct: false, why: { en: 'Employment history does not matter. Every senior citizen qualifies at sixty.', tl: 'Hindi mahalaga ang employment history. Kwalipikado ang bawat senior citizen sa animnapu.' } },
        ],
      },
      keep: {
        text: { en: 'Turning sixty already made you a PhilHealth member.', tl: 'Ang pag-sisenta ninyo na po mismo ang gumawa sa inyong PhilHealth member.' },
        action: { kind: 'commitment', label: { en: 'Check my SSS and PhilHealth records', tl: 'Tingnan ang SSS at PhilHealth records ko' }, payload: { id: 'check-benefits' } },
      },
    },
    {
      id: 'retired.health.2',
      title: { en: 'What the discount covers', tl: 'Saan sakop ang discount' },
      minutes: 3,
      hook: {
        text: { en: 'The cashier rings up your medicine, then subtracts twenty percent before you even ask.', tl: 'Kino-ring up ng cashier ang gamot ninyo. Binabawasan agad ng twenty percent bago pa kayo humingi.' },
        illo: 'cart',
      },
      show: {
        text: { en: 'RA 9994 gives seniors 20% off plus VAT exemption on several everyday purchases.', tl: 'Binibigyan ng RA 9994 ang senior ng 20% discount. May VAT exemption din sa ilang pang-araw-araw na bili.' },
        points: [
          { en: 'Medicines, medical and dental services, and funeral services are covered.', tl: 'Sakop ang gamot, medical at dental services, at funeral services.' },
          { en: 'Restaurant food, transport fares, and hotel stays are covered too.', tl: 'Sakop din ang restaurant food, transport fares, at hotel stays.' },
          { en: 'Electricity and water get 5% off when the account is in your name.', tl: 'May 5% discount ang kuryente at tubig kung nasa pangalan ninyo ang account.' },
        ],
        illo: 'cart',
        animate: false,
      },
      do: {
        type: 'match',
        prompt: { en: 'Match each purchase to the discount it carries.', tl: 'I-match ang bawat bili sa discount na kasama nito.' },
        pairs: [
          { a: { en: 'Prescription medicine', tl: 'Gamot na de-reseta' }, b: { en: '20% off, no VAT', tl: '20% discount, walang VAT' } },
          { a: { en: 'Bus or jeepney fare', tl: 'Pamasahe sa bus o jeep' }, b: { en: '20% off, no VAT', tl: '20% discount, walang VAT' } },
          { a: { en: 'Meal at a restaurant', tl: 'Kain sa restaurant' }, b: { en: '20% off, no VAT', tl: '20% discount, walang VAT' } },
          { a: { en: 'Electricity bill in your name', tl: 'Kuryente bill sa pangalan ninyo' }, b: { en: '5% off, up to 100 kWh', tl: '5% discount, hanggang 100 kWh' } },
          { a: { en: 'Water bill in your name', tl: 'Tubig bill sa pangalan ninyo' }, b: { en: '5% off, up to 30 cubic meters', tl: '5% discount, hanggang 30 cubic meters' } },
        ],
      },
      keep: {
        text: { en: 'Five categories, one ID. Bring it every time you spend.', tl: 'Limang kategorya, iisang ID. Dalhin po ito tuwing gumagastos kayo.' },
        action: null,
      },
    },
    {
      id: 'retired.health.3',
      title: { en: 'Computing the discount at the counter', tl: 'Pagkwenta ng discount sa counter' },
      minutes: 3,
      hook: {
        text: { en: 'The tag says ₱336. The cashier says you pay ₱240. You want to check the math.', tl: '₱336 ang nasa tag. Sabi ng cashier, ₱240 ang bayad ninyo. Gusto ninyong tsekin ang kwenta.' },
        illo: 'coins',
      },
      show: {
        text: { en: 'The tag price already has 12% VAT built in. Remove the VAT first, then take 20% off.', tl: 'May 12% VAT na sa presyo sa tag. Alisin muna ang VAT, saka bawasan ng 20%.' },
        points: [
          { en: '₱336 ÷ 1.12 removes the VAT, leaving ₱300.', tl: '₱336 ÷ 1.12 ang nag-aalis ng VAT, ₱300 ang matitira.' },
          { en: '20% off ₱300 is ₱60, so you pay ₱240.', tl: '20% ng ₱300 ay ₱60, kaya ₱240 ang babayaran ninyo.' },
        ],
        illo: 'coins',
        animate: false,
      },
      do: {
        type: 'number',
        prompt: { en: 'A medicine is tagged ₱336, VAT included. What do you pay with the senior discount?', tl: 'Nakatag ang gamot ng ₱336, kasama ang VAT. Magkano ang babayaran ninyo gamit ang senior discount?' },
        answer: 240,
        tolerance: 5,
        format: 'peso',
        worked: { en: '₱336 ÷ 1.12 = ₱300 without VAT. Less 20% (₱60) leaves ₱240.', tl: '₱336 ÷ 1.12 = ₱300 kapag wala nang VAT. Bawas 20% (₱60), ₱240 na lang.' },
      },
      keep: {
        text: { en: 'Check the math yourself. The receipt should show both cuts.', tl: 'Suriin po ninyo mismo ang kwenta. Dapat makita sa resibo ang dalawang bawas.' },
        action: { kind: 'open', label: { en: 'Record what you saved in Budget', tl: 'I-record sa Budget ang naitipid ninyo' }, payload: { app: 'budget' } },
      },
    },
    {
      id: 'retired.health.4',
      title: { en: 'What is not covered', tl: 'Ano ang hindi kasama' },
      minutes: 3,
      hook: {
        text: { en: 'Your grandchild rides the jeep beside you. You hand over your ID for both fares.', tl: 'Kasabay ninyong sumakay sa jeep ang apo ninyo. Inabot ninyo ang ID ninyo para sa dalawang pamasahe.' },
        illo: 'scale',
      },
      show: {
        text: { en: 'The discount belongs to the senior citizen’s own purchase, not a companion’s.', tl: 'Para sa sariling bili ng senior citizen ang discount, hindi para sa kasama.' },
        points: [],
        illo: 'scale',
        animate: false,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each purchase. Left gets the discount, right does not.', tl: 'I-sort ang bawat bili. Kaliwa may discount, kanan wala.' },
        left: { en: 'Covered', tl: 'Sakop' },
        right: { en: 'Not covered', tl: 'Hindi sakop' },
        cards: [
          { text: { en: 'Your own prescription medicine', tl: 'Sariling gamot na de-reseta' }, side: 'left', why: { en: 'Medicine bought for the senior citizen is squarely covered.', tl: 'Sakop nang husto ang gamot na binili para sa senior citizen.' } },
          { text: { en: 'Your own jeepney fare', tl: 'Sariling pamasahe sa jeep' }, side: 'left', why: { en: 'Transport fares for the senior’s own trip are covered.', tl: 'Sakop ang pamasahe para sa sariling biyahe ng senior.' } },
          { text: { en: 'Groceries at the supermarket', tl: 'Grocery sa supermarket' }, side: 'right', why: { en: 'Grocery items are not on the list RA 9994 covers.', tl: 'Wala sa listahan ng RA 9994 ang grocery items.' } },
          { text: { en: 'A grandchild’s fare paid with your ID', tl: 'Pamasahe ng apo, bayad gamit ang ID ninyo' }, side: 'right', why: { en: 'The discount covers the senior’s own fare, not a companion’s.', tl: 'Sakop lang ng discount ang sariling pamasahe ng senior, hindi ng kasama.' } },
          { text: { en: 'Your own hotel stay on a trip', tl: 'Sariling tuloy sa hotel habang biyahe' }, side: 'left', why: { en: 'Hotel and lodging for the senior’s own stay are covered.', tl: 'Sakop ang hotel at lodging para sa sariling tuloy ng senior.' } },
          { text: { en: 'A cash advance fee at the ATM', tl: 'Cash advance fee sa ATM' }, side: 'right', why: { en: 'Bank fees are not on the discount list at all.', tl: 'Wala talaga sa listahan ng discount ang bank fees.' } },
        ],
      },
      keep: {
        text: { en: 'The ID buys your own purchase, not a companion’s.', tl: 'Ang ID ay para sa sarili ninyong bili, hindi sa kasama.' },
        action: null,
      },
    },
    {
      id: 'retired.health.5',
      title: { en: 'Using the ID without being denied', tl: 'Paggamit ng ID nang hindi tinatanggihan' },
      minutes: 4,
      hook: {
        text: { en: 'A cashier looks twice, then says your ID is not enough.', tl: 'Dalawang beses tiningnan ng cashier ang ID ninyo, sabing hindi raw ito sapat.' },
        illo: 'card',
      },
      show: {
        text: { en: 'Some counters push back on a valid ID. Knowing the rule keeps the discount yours.', tl: 'May mga counter na tumututol kahit valid ang ID. Ang kaalaman sa patakaran ang bumabantay ng discount ninyo.' },
        points: [],
        illo: 'card',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'At the pharmacy, the cashier says your barangay ID is not enough.', tl: 'Sa botika, sabi ng cashier na hindi raw sapat ang barangay ID ninyo.' },
            choices: [
              { text: { en: 'Show your OSCA senior citizen ID or booklet', tl: 'Ipakita ang OSCA senior citizen ID o booklet' }, next: 'a1' },
              { text: { en: 'Pay the full price to avoid an argument', tl: 'Bayaran nang buo para maiwasan ang alitan' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'The cashier checks the ID and applies it. The ₱336 medicine costs ₱240.', tl: 'Tiningnan ng cashier ang ID at kinuha ito. Naging ₱240 ang ₱336 na gamot.' },
            outcome: 'steady',
          },
          b1: {
            text: { en: 'You pay ₱336 in full. That evening, the dentist tries the same excuse.', tl: 'Binayaran ninyo nang buo ang ₱336. Kinagabihan, ganoon din ang dahilan ng dentista.' },
            choices: [
              { text: { en: 'Ask for the senior citizen counter or a supervisor', tl: 'Humingi ng senior citizen counter o supervisor' }, next: 'b2' },
              { text: { en: 'Pay in full again to avoid an argument', tl: 'Magbayad ulit nang buo para maiwasan ang alitan' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'The supervisor applies the discount without further question. The ₱1,000 cleaning drops to ₱800.', tl: 'Kinuha ng supervisor ang discount nang walang tanong. Naging ₱800 ang ₱1,000 na cleaning.' },
            outcome: 'steady',
          },
          b3: {
            text: { en: 'You pay full price twice in one day. ₱296 in discounts went unclaimed.', tl: 'Dalawang beses po kayong nagbayad nang buo sa isang araw. ₱296 na discount ang hindi nakuha.' },
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'Present the ID every time. The discount is your right, not a favor.', tl: 'Ipakita po ang ID tuwing bibili. Karapatan ninyo ang discount, hindi pabor.' },
        action: null,
      },
    },
  ],
};

const buckets = {
  id: 'retired.buckets',
  title: { en: 'Spending down safely', tl: 'Paggastos ng ipon nang ligtas' },
  summary: { en: 'The bucket approach: cash for one year, bonds and MP2 for five. Growth gets the rest.', tl: 'Ang bucket approach: cash para sa isang taon, bonds at MP2 para sa lima. Growth ang para sa natitira.' },
  competency: { en: 'Can spend down savings without running out', tl: 'Kayang gastusin ang ipon nang hindi nauubos' },
  wish: 'safe',
  status: 'authored',
  bites: [
    {
      id: 'retired.buckets.1',
      title: { en: 'Saving up versus spending down', tl: 'Pag-iipon kumpara sa paggastos ng ipon' },
      minutes: 3,
      hook: {
        text: { en: 'For forty years, every payday added to your savings. Retirement flips that plan.', tl: 'Apatnapung taon, tumataas ang ipon ninyo tuwing may sweldo. Baligtad ito pagretiro ninyo.' },
        illo: 'hourglass',
      },
      show: {
        text: { en: 'Spending down means using savings on purpose, at a pace that lasts. It is not the same as saving up.', tl: 'Ang pag-spend down ay sinasadyang paggamit ng ipon, sa bilis na tatagal. Iba ito sa pag-iipon.' },
        points: [
          { en: 'Saving up grows a pile. Spending down manages how fast it shrinks.', tl: 'Ang pag-iipon ay pagpapalaki ng tambak. Ang pag-spend down ay pagbabantay sa bilis ng pagbawas.' },
          { en: 'A plan for spending prevents the pile from running out too soon.', tl: 'Ang plano sa paggastos ang pumipigil sa maagang paubos ng tambak.' },
        ],
        illo: 'hourglass',
        animate: true,
      },
      do: {
        type: 'choice',
        prompt: { en: 'You just retired with savings built over forty years. What changes now?', tl: 'Bagong retiro lang po kayo, may ipon na tinipon sa apatnapung taon. Ano ang nagbabago ngayon?' },
        options: [
          { text: { en: 'You now spend it down on purpose, at a pace that lasts.', tl: 'Ginagastos na ninyo ito sa sadyang bilis, na tatagal.' }, correct: true, why: { en: 'Retirement turns saving into a planned, paced withdrawal.', tl: 'Ginagawang planado at pasadong withdrawal ng retirement ang pag-iipon.' } },
          { text: { en: 'You keep adding to it and never withdraw.', tl: 'Patuloy pa rin kayong nagdaragdag, hindi kailanman kumukuha.' }, correct: false, why: { en: 'Without a plan to spend, the savings cannot support daily needs.', tl: 'Kung walang plano sa paggastos, hindi kayang suportahan ng ipon ang pang-araw-araw.' } },
          { text: { en: 'You move everything into one account and stop checking.', tl: 'Inilipat ninyo ang lahat sa isang account at hindi na tinitingnan.' }, correct: false, why: { en: 'One account with no plan is how savings run out early.', tl: 'Isang account lang na walang plano ang dahilan ng maagang pagkaubos ng ipon.' } },
        ],
      },
      keep: {
        text: { en: 'Retirement is a new plan, not the old one in reverse.', tl: 'Bagong plano ang retirement, hindi lang baligtad ng dati.' },
        action: null,
      },
    },
    {
      id: 'retired.buckets.2',
      title: { en: 'The three buckets', tl: 'Ang tatlong bucket' },
      minutes: 3,
      hook: {
        text: { en: '₱2,000,000 in savings. Where should each peso sit while you retire?', tl: '₱2,000,000 na ipon. Saan po dapat nakalagay ang bawat piso habang retirado kayo?' },
        illo: 'jars',
      },
      show: {
        text: { en: 'Split retirement savings into three buckets: cash, bonds and MP2, and growth.', tl: 'Hatiin ang retirement savings sa tatlong bucket: cash, bonds at MP2, at growth.' },
        points: [
          { en: 'Bucket one: cash for the next year, safe and ready.', tl: 'Bucket one: cash para sa susunod na taon, ligtas at handa.' },
          { en: 'Bucket two: bonds and MP2 for the next five years.', tl: 'Bucket two: bonds at MP2 para sa susunod na limang taon.' },
          { en: 'Bucket three: the rest, left to grow longer term.', tl: 'Bucket three: ang natitira, iniiwan para lumago nang mas matagal.' },
        ],
        illo: 'jars',
        animate: true,
      },
      do: {
        type: 'allocate',
        prompt: { en: 'Split ₱2,000,000 across the three buckets.', tl: 'Hatiin po ang ₱2,000,000 sa tatlong bucket.' },
        total: 2000000,
        step: 10000,
        jars: [
          { key: 'cash', label: { en: 'Cash, one year', tl: 'Cash, isang taon' }, hint: { en: 'A PDIC-insured bank, ready to spend.', tl: 'Bangkong PDIC-insured, handang gastusin.' }, guide: [5, 10] },
          { key: 'bonds', label: { en: 'Bonds and MP2, five years', tl: 'Bonds at MP2, limang taon' }, hint: { en: 'Retail treasury bonds and MP2, steadier growth.', tl: 'Retail treasury bonds at MP2, mas matatag na paglago.' }, guide: [25, 35] },
          { key: 'growth', label: { en: 'Growth, the rest', tl: 'Growth, ang natitira' }, hint: { en: 'Left untouched the longest, for later years.', tl: 'Hindi ginagalaw nang pinakamatagal, para sa mas huling taon.' }, guide: [55, 70] },
        ],
        why: { en: 'One year in cash, five years in bonds and MP2, the rest for growth.', tl: 'Isang taon sa cash, limang taon sa bonds at MP2, ang natitira sa growth.' },
      },
      keep: {
        text: { en: 'One year, five years, then whatever is left to grow.', tl: 'Isang taon, limang taon, tapos ang natitira ay para lumago.' },
        action: null,
      },
    },
    {
      id: 'retired.buckets.3',
      title: { en: 'Bucket one: one year in cash', tl: 'Bucket one: isang taon sa cash' },
      minutes: 3,
      hook: {
        text: { en: 'Your monthly needs are ₱10,000. Bucket one should cover a full year.', tl: '₱10,000 ang buwanang pangangailangan ninyo. Dapat masakop ng bucket one ang buong taon.' },
        illo: 'alkansya',
      },
      show: {
        text: { en: 'One year of cash means twelve months of needs, sitting in a PDIC-insured bank.', tl: 'Ang isang taong cash ay labindalawang buwang pangangailangan, nasa bangkong PDIC-insured.' },
        points: [
          { en: 'PDIC insures deposits up to ₱1,000,000 per depositor, per bank.', tl: 'Sini-insure ng PDIC ang deposito hanggang ₱1,000,000 kada depositor, kada bangko.' },
          { en: 'This bucket is for spending, not for growth.', tl: 'Ang bucket na ito ay para gastusin, hindi para lumago.' },
        ],
        illo: 'alkansya',
        animate: false,
      },
      do: {
        type: 'number',
        prompt: { en: 'Your monthly needs are ₱10,000. How much goes in bucket one, for one year?', tl: '₱10,000 ang buwanang pangangailangan ninyo. Magkano ang ilalagay sa bucket one, para sa isang taon?' },
        answer: 120000,
        tolerance: 5000,
        format: 'peso',
        worked: { en: '₱10,000 × 12 months = ₱120,000, one full year of cash.', tl: '₱10,000 × 12 buwan = ₱120,000, isang buong taong cash.' },
      },
      keep: {
        text: { en: 'One year of needs, always in cash, always insured.', tl: 'Isang taong pangangailangan, laging cash, laging insured.' },
        action: { kind: 'wish', label: { en: 'Save one year of cash', tl: 'Itabi ang isang taong cash' }, payload: { key: 'cash-bucket', title: { en: 'One year of cash, ready', tl: 'Isang taong cash, handa na' }, amount: 120000 } },
      },
    },
    {
      id: 'retired.buckets.4',
      title: { en: 'Bucket two: five years in bonds and MP2', tl: 'Bucket two: limang taon sa bonds at MP2' },
      minutes: 3,
      hook: {
        text: { en: 'Bucket two sits still for five years. Two names come up: RTBs and MP2.', tl: 'Limang taong hindi ginagalaw ang bucket two. Dalawang pangalan ang lumalabas: RTB at MP2.' },
        illo: 'tree',
      },
      show: {
        text: { en: 'Retail treasury bonds and Pag-IBIG MP2 both grow steadily, meant to sit for years.', tl: 'Parehong lumalago nang steady ang retail treasury bonds at Pag-IBIG MP2, para nakaupo nang matagal.' },
        points: [],
        illo: 'tree',
        animate: false,
      },
      do: {
        type: 'match',
        prompt: { en: 'Match each feature to the right bucket-two option.', tl: 'I-match ang bawat detalye sa tamang opsyon sa bucket two.' },
        pairs: [
          { a: { en: 'Retail Treasury Bond', tl: 'Retail Treasury Bond' }, b: { en: 'Government-backed, five-year term, sold through banks', tl: 'Suportado ng gobyerno, limang taong term, ibinebenta sa bangko' } },
          { a: { en: 'Pag-IBIG MP2', tl: 'Pag-IBIG MP2' }, b: { en: 'Five-year term, minimum ₱500 a month, dividend paid yearly', tl: 'Limang taong term, minimum ₱500 kada buwan, dividend taun-taon' } },
          { a: { en: 'Bucket one, cash', tl: 'Bucket one, cash' }, b: { en: 'One year only, at a PDIC-insured bank', tl: 'Isang taon lang, sa bangkong PDIC-insured' } },
          { a: { en: 'Bucket three, growth', tl: 'Bucket three, growth' }, b: { en: 'Left the longest, meant to grow the most', tl: 'Pinakamatagal na iniwan, para lumagong pinakamalaki' } },
        ],
      },
      keep: {
        text: { en: 'Five years is long enough to ride out a bad year.', tl: 'Sapat na ang limang taon para malampasan ang masamang taon.' },
        action: null,
      },
    },
    {
      id: 'retired.buckets.5',
      title: { en: 'Refilling the buckets each year', tl: 'Pagpuno ulit ng bucket bawat taon' },
      minutes: 4,
      hook: {
        text: { en: 'January arrives. Bucket one, the cash, is one year thinner than before.', tl: 'Dumating ang Enero. Isang taong manipis na ang bucket one, ang cash.' },
        illo: 'jars',
      },
      show: {
        text: { en: 'Each year, move enough from bucket two into bucket one to refill it.', tl: 'Bawat taon, maglipat po ng sapat mula sa bucket two papunta sa bucket one.' },
        points: [],
        illo: 'jars',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'Bucket one is down to ₱20,000, not enough for the coming year.', tl: 'Bumaba na sa ₱20,000 ang bucket one, hindi sapat para sa darating na taon.' },
            balance: 20000,
            choices: [
              { text: { en: 'Move ₱100,000 from bucket two to refill bucket one', tl: 'Maglipat ng ₱100,000 mula sa bucket two para punuin ang bucket one' }, next: 'a1' },
              { text: { en: 'Leave it and hope the year is a short one', tl: 'Iwan na lang at umasang maikli ang taon' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'Bucket one is back to ₱120,000, a full year of cash again.', tl: 'Bumalik sa ₱120,000 ang bucket one, buong taon ulit ng cash.' },
            balance: 120000,
            outcome: 'steady',
          },
          b1: {
            text: { en: 'By June, bucket one is down to ₱5,000, six months early.', tl: 'Pagsapit ng Hunyo, bumaba na sa ₱5,000 ang bucket one. Anim na buwan itong maaga sa plano.' },
            balance: 5000,
            choices: [
              { text: { en: 'Refill now from bucket two before it runs out', tl: 'Mag-refill na ngayon mula sa bucket two bago ito maubos' }, next: 'b2' },
              { text: { en: 'Wait, hoping the rest of the year needs less', tl: 'Maghintay, umaasang mas kaunti ang kakailanganin sa natitirang taon' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'The refill arrives in time. Bucket one holds ₱105,000 for the rest of the year.', tl: 'Dumating sa oras ang refill. Humawak ng ₱105,000 ang bucket one para sa natitirang taon.' },
            balance: 105000,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'By October, bucket one runs dry. Bills wait for the next transfer.', tl: 'Pagsapit ng Oktubre, naubos ang bucket one. Naghihintay ang bills sa susunod na lipat.' },
            balance: 0,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'Refill bucket one every year, before it runs low.', tl: 'Punuin po ang bucket one bawat taon, bago ito maubos.' },
        action: { kind: 'open', label: { en: 'Track bucket one in Goals', tl: 'Subaybayan ang bucket one sa Goals' }, payload: { app: 'goals' } },
      },
    },
  ],
};

const budget = {
  id: 'retired.budget',
  title: { en: 'Staying independent on a pension', tl: 'Nananatiling independent sa pension' },
  summary: { en: 'A monthly budget that fits ₱5,000 to ₱15,000. Utilities, medicines, and the discount each get a line.', tl: 'Buwanang budget na kasya sa ₱5,000 hanggang ₱15,000, may utilities, gamot, at discount bilang linya.' },
  competency: { en: 'Can live within a pension', tl: 'Kayang mabuhay sa loob ng pension' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'retired.budget.1',
      title: { en: 'A budget that fits the pension', tl: 'Budget na kasya sa pension' },
      minutes: 3,
      hook: {
        text: { en: '₱9,000 comes in this month: pension, savings, and a little from family.', tl: '₱9,000 ang pumasok ngayong buwan: pension, savings, at kaunti mula sa pamilya.' },
        illo: 'jars',
      },
      show: {
        text: { en: 'A pension budget starts with needs, then medicines, then whatever is left over.', tl: 'Nagsisimula ang budget ng pension sa needs, tapos gamot, tapos ang matitira.' },
        points: [
          { en: 'Utilities, food, and rent come first, before anything else.', tl: 'Una ang utilities, pagkain, at renta, bago ang iba pa.' },
          { en: 'Medicines get their own line, not what is left over.', tl: 'May sariling linya ang gamot, hindi ang matitirang pera na lang.' },
        ],
        illo: 'jars',
        animate: true,
      },
      do: {
        type: 'allocate',
        prompt: { en: 'Split ₱9,000 across three lines this month.', tl: 'Hatiin po ang ₱9,000 sa tatlong linya ngayong buwan.' },
        total: 9000,
        step: 100,
        jars: [
          { key: 'needs', label: { en: 'Needs: rent, food, utilities', tl: 'Needs: renta, pagkain, utilities' }, hint: { en: 'Paid first, every month, no exceptions.', tl: 'Binabayaran muna, bawat buwan, walang exception.' }, guide: [55, 70] },
          { key: 'medicine', label: { en: 'Medicines and check-ups', tl: 'Gamot at check-up' }, hint: { en: 'Its own line, protected by the senior discount.', tl: 'Sariling linya, protektado ng senior discount.' }, guide: [15, 25] },
          { key: 'extra', label: { en: 'Family and small extras', tl: 'Pamilya at maliliit na extra' }, hint: { en: 'What is left after needs and medicine.', tl: 'Ang matitira pagkatapos ng needs at gamot.' }, guide: [10, 20] },
        ],
        why: { en: 'Needs first, medicine protected, extras from what remains.', tl: 'Needs muna, protektado ang gamot, extras mula sa matitira.' },
      },
      keep: {
        text: { en: 'Three lines, in order: needs, medicine, then extras.', tl: 'Tatlong linya, ayon sa pagkakasunod: needs, gamot, extras.' },
        action: { kind: 'open', label: { en: 'Set up this budget in Budget', tl: 'I-set up ang budget na ito sa Budget' }, payload: { app: 'budget' } },
      },
    },
    {
      id: 'retired.budget.2',
      title: { en: 'Utilities and medicines come first', tl: 'Utilities at gamot ang una' },
      minutes: 3,
      hook: {
        text: { en: 'The pension lands. A grandchild asks for load before the electric bill is paid.', tl: 'Dumating ang pension. May humingi ng load na apo bago pa mabayaran ang kuryente.' },
        illo: 'cart',
      },
      show: {
        text: { en: 'Some spending keeps the lights on and the body well. The rest can wait its turn.', tl: 'May gastos na nagpapanatili ng ilaw at katawan. Puwedeng maghintay ng turn ang iba.' },
        points: [],
        illo: 'cart',
        animate: false,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each expense. Left pays first, right can wait.', tl: 'I-sort po ang bawat gastos. Kaliwa una babayaran, kanan puwedeng maghintay.' },
        left: { en: 'Pays first', tl: 'Una babayaran' },
        right: { en: 'Can wait', tl: 'Puwedeng maghintay' },
        cards: [
          { text: { en: 'Electric bill, due this week', tl: 'Kuryente bill, due ngayong linggo' }, side: 'left', why: { en: 'Utilities keep the home running and cannot be skipped.', tl: 'Pinapatakbo ng utilities ang bahay, hindi ito puwedeng laktawan.' } },
          { text: { en: 'Maintenance medicine for blood pressure', tl: 'Maintenance na gamot para sa presyon' }, side: 'left', why: { en: 'Skipping maintenance medicine risks a more costly hospital visit.', tl: 'Ang paglaktaw sa maintenance ay nagreresulta sa mas magastos na ospital.' } },
          { text: { en: 'Load for a grandchild’s phone', tl: 'Load para sa phone ng apo' }, side: 'right', why: { en: 'A kind gesture, but it can wait until needs are paid.', tl: 'Magandang gesture, pero puwedeng maghintay hanggang mabayaran ang needs.' } },
          { text: { en: 'Water bill, due next week', tl: 'Tubig bill, due sa isang linggo' }, side: 'left', why: { en: 'Water is a need, due date or not.', tl: 'Kailangan ang tubig, may due date man o wala.' } },
          { text: { en: 'A new phone case', tl: 'Bagong phone case' }, side: 'right', why: { en: 'A want, not a need. It waits for what is left.', tl: 'Isang want, hindi need. Naghihintay ito sa matitira.' } },
        ],
      },
      keep: {
        text: { en: 'Utilities and medicine first. Everything else waits its turn.', tl: 'Utilities at gamot muna. Naghihintay ang lahat ng iba.' },
        action: null,
      },
    },
    {
      id: 'retired.budget.3',
      title: { en: 'The discount as a budget line', tl: 'Ang discount bilang linya sa budget' },
      minutes: 3,
      hook: {
        text: { en: 'A ₱600 medicine bill arrives. The senior discount changes what actually leaves your pocket.', tl: 'Dumating ang ₱600 na gamot bill. Binabago ng senior discount kung magkano talaga ang lalabas sa bulsa ninyo.' },
        illo: 'coins',
      },
      show: {
        text: { en: 'Budget the full price, then subtract the 20% discount before you pay.', tl: 'I-budget ang buong presyo, tapos bawasan ng 20% discount bago magbayad.' },
        points: [
          { en: 'The discount is a line in your budget, not a surprise.', tl: 'Linya ito sa budget ninyo, hindi biglaang tipid na lang.' },
        ],
        illo: 'coins',
        animate: false,
      },
      do: {
        type: 'number',
        prompt: { en: 'Medicine costs ₱600. After the 20% senior discount, what do you actually pay?', tl: '₱600 ang gamot. Pagkatapos ng 20% senior discount, magkano talaga ang babayaran ninyo?' },
        answer: 480,
        tolerance: 0,
        format: 'peso',
        worked: { en: '₱600 − 20% (₱120) = ₱480, the real cost to budget.', tl: '₱600 − 20% (₱120) = ₱480, ang tunay na gastos na ibi-budget.' },
      },
      keep: {
        text: { en: 'Budget the full price, then let the discount lower what you owe.', tl: 'I-budget po ang buong presyo, hayaang bawasan ng discount ang utang ninyo.' },
        action: null,
      },
    },
    {
      id: 'retired.budget.4',
      title: { en: 'The daily number on a small pension', tl: 'Ang daily number sa maliit na pension' },
      minutes: 3,
      hook: {
        text: { en: '₱9,000 for the month. Slide your guess: how much is that a day?', tl: '₱9,000 para sa buwan. I-slide po ang hula ninyo: magkano iyon kada araw?' },
        illo: 'hourglass',
      },
      show: {
        text: { en: 'Dividing the month by thirty gives a daily number to watch against spending.', tl: 'Ang paghahati ng buwan sa tatlumpu ay nagbibigay ng daily number na babantayan.' },
        points: [
          { en: 'A daily number makes overspending visible before the month ends.', tl: 'Nakikita agad ang sobrang gastos kapag may daily number.' },
        ],
        illo: 'hourglass',
        animate: true,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Your budget is ₱9,000 for thirty days. Guess the daily number.', tl: '₱9,000 ang budget ninyo sa tatlumpung araw. Hulaan po ang daily number.' },
        min: 0, max: 1000, step: 10, format: 'peso', answer: 300,
        why: { en: '₱9,000 ÷ 30 = ₱300 a day, after needs and medicine are set aside.', tl: '₱9,000 ÷ 30 = ₱300 kada araw, pagkatapos nailaan ang needs at gamot.' },
      },
      keep: {
        text: { en: 'Know the daily number. It catches a slow leak early.', tl: 'Alamin po ang daily number. Napapansin nito agad ang unti-unting pagtagas.' },
        action: null,
      },
    },
    {
      id: 'retired.budget.5',
      title: { en: 'When the pension is not enough', tl: 'Kapag hindi sapat ang pension' },
      minutes: 4,
      hook: {
        text: { en: 'Week three of the month. ₱9,000 is already down to ₱600.', tl: 'Ikatlong linggo ng buwan. Bumaba na ang ₱9,000 sa ₱600 na lang.' },
        illo: 'scale',
      },
      show: {
        text: { en: 'When the number runs short, small choices decide whether the month closes safely.', tl: 'Kapag naubos ang bilang, mahalaga ang bawat maliit na desisyon. Ito ang nagtatakda kung ligtas ang pagsara ng buwan.' },
        points: [],
        illo: 'scale',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: '₱600 is left with a week to go. The rice is almost gone.', tl: '₱600 na lang ang natira, isang linggo pa. Halos ubos na ang bigas.' },
            balance: 600,
            choices: [
              { text: { en: 'Buy rice in small portions to stretch the week', tl: 'Bumili ng bigas nang tingi para tumagal sa linggo' }, next: 'a1' },
              { text: { en: 'Borrow through a lending app to cover the gap', tl: 'Manghiram sa lending app para masakop ang kulang' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'Rice bought by the portion and a smaller list get you to payday. ₱9,000 arrives on schedule.', tl: 'Tingi na bigas at mas maliit na grocery ang nagpatawid hanggang payday. Dumating ang ₱9,000 sa oras.' },
            balance: 9000,
            outcome: 'steady',
          },
          b1: {
            text: { en: 'The app approves ₱3,000 fast, to repay at ₱3,600 within the month.', tl: 'Mabilis na-approve ng app ang ₱3,000, babayaran ng ₱3,600 sa loob ng buwan.' },
            balance: 3000,
            choices: [
              { text: { en: 'Repay the full ₱3,600 the moment ₱9,000 arrives', tl: 'Bayaran nang buo ang ₱3,600 sa sandaling dumating ang ₱9,000' }, next: 'b2' },
              { text: { en: 'Pay the minimum and carry the rest another month', tl: 'Bayaran ang minimum at dalhin ang natitira sa susunod na buwan' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'Payday covers the ₱3,600 repayment. ₱5,400 is left for the new month.', tl: 'Sasaklawin ng ₱9,000 ang ₱3,600 na bayad. ₱5,400 ang matitira para sa bagong buwan.' },
            balance: 5400,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'A new fee is added to what is unpaid. Next month starts already short.', tl: 'May dagdag na fee sa hindi pa bayad. Nagsisimula nang kulang ang susunod na buwan.' },
            balance: 2900,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'A short week is survivable. A loan on top of it is not.', tl: 'Kaya ang maiksing linggo. Ang utang sa ibabaw nito, hindi.' },
        action: null,
      },
    },
  ],
};

const estate = {
  id: 'retired.estate',
  title: { en: 'Estate and transfers', tl: 'Estate at paglilipat' },
  summary: { en: 'A will, a named beneficiary, and the 6% estate tax. Why a joint account can freeze.', tl: 'Will, beneficiary, ang 6% estate tax, at kung bakit puwedeng ma-freeze ang joint account.' },
  competency: { en: 'Can prepare an estate that transfers without delay', tl: 'Kayang ihanda ang estate na madaling malipat' },
  wish: 'rid',
  status: 'authored',
  bites: [
    {
      id: 'retired.estate.1',
      title: { en: 'Why a will matters even for a small estate', tl: 'Bakit mahalaga ang will kahit maliit ang estate' },
      minutes: 3,
      hook: {
        text: { en: '₱300,000 in savings, a small house, no will. The heirs disagree on what happens next.', tl: '₱300,000 sa savings, maliit na bahay, walang will. Hindi magkasundo ang heirs kung ano ang susunod.' },
        illo: 'house',
      },
      show: {
        text: { en: 'A will names who gets what, even for a modest estate. Without one, the law decides for you.', tl: 'Ang will ang nagtatakda kung sino ang makakakuha ng ano, kahit maliit ang estate. Kung wala nito, batas ang magdedesisyon.' },
        points: [
          { en: 'A will can be notarial, or holographic: handwritten, dated, and signed.', tl: 'Puwedeng notarial ang will, o holographic: sulat-kamay, may petsa, at may lagda.' },
          { en: 'Without a will, the law splits the estate by default rules.', tl: 'Kung walang will, hinahati ng batas ang estate ayon sa default rules.' },
        ],
        illo: 'house',
        animate: true,
      },
      do: {
        type: 'choice',
        prompt: { en: 'You have a small house and modest savings. Do you still need a will?', tl: 'May maliit kayong bahay at katamtamang savings po. Kailangan pa rin ba ninyo ng will?' },
        options: [
          { text: { en: 'Yes, a will names who gets what, at any estate size.', tl: 'Oo, itinatakda ng will kung sino ang makakakuha ng ano, sa anumang laki ng estate.' }, correct: true, why: { en: 'A will settles who gets what, whether the estate is large or small.', tl: 'Nireresolba ng will kung sino ang makakakuha ng ano, malaki man o maliit ang estate.' } },
          { text: { en: 'No, a will is only for large estates.', tl: 'Hindi, para sa malalaking estate lang ang will.' }, correct: false, why: { en: 'Size does not decide the need. An unwritten wish can cause disputes.', tl: 'Hindi ang laki ang batayan. Anumang hindi nasusulat na wish ay puwedeng maging alitan.' } },
          { text: { en: 'No, the family will agree on their own.', tl: 'Hindi, magkakasundo naman ang pamilya nang wala nito.' }, correct: false, why: { en: 'Families often disagree exactly where no will exists to guide them.', tl: 'Madalas hindi magkasundo ang pamilya kung saan walang will na gabay.' } },
        ],
      },
      keep: {
        text: { en: 'A will is not for the wealthy. It is for the specific.', tl: 'Hindi para sa mayaman lang ang will. Para ito sa specific na hiling.' },
        action: null,
      },
    },
    {
      id: 'retired.estate.2',
      title: { en: 'Naming a beneficiary on every account', tl: 'Pagtukoy ng beneficiary sa bawat account' },
      minutes: 3,
      hook: {
        text: { en: 'An insurance policy, a Pag-IBIG account, a bank account. Each one asks: who is the beneficiary?', tl: 'Insurance policy, Pag-IBIG account, bank account. Bawat isa ay may tanong: sino ang beneficiary?' },
        illo: 'certificate',
      },
      show: {
        text: { en: 'A named beneficiary receives that account directly, often without going through the estate.', tl: 'Direktang natatanggap ng nakatalagang beneficiary ang account na iyon, kadalasan hindi na dumadaan sa estate.' },
        points: [],
        illo: 'certificate',
        animate: false,
      },
      do: {
        type: 'match',
        prompt: { en: 'Match each account type to what happens at death.', tl: 'I-match ang bawat account sa mangyayari pagkamatay.' },
        pairs: [
          { a: { en: 'Life insurance with a named beneficiary', tl: 'Life insurance na may nakatalagang beneficiary' }, b: { en: 'Goes straight to that beneficiary', tl: 'Diretso sa beneficiary na iyon' } },
          { a: { en: 'Pag-IBIG savings with a named beneficiary', tl: 'Pag-IBIG savings na may nakatalagang beneficiary' }, b: { en: 'Death benefit paid directly to them', tl: 'Direktang binabayaran sa kanila ang death benefit' } },
          { a: { en: 'A bank account with no beneficiary named', tl: 'Bank account na walang nakatalagang beneficiary' }, b: { en: 'Frozen until estate tax clearance', tl: 'Naka-freeze hanggang estate tax clearance' } },
          { a: { en: 'A joint bank account', tl: 'Joint bank account' }, b: { en: 'Frozen too, even with a co-owner still living', tl: 'Naka-freeze din, kahit buhay pa ang co-owner' } },
        ],
      },
      keep: {
        text: { en: 'Name a beneficiary on every account that allows it.', tl: 'Magtalaga po ng beneficiary sa bawat account na pumapayag nito.' },
        action: { kind: 'open', label: { en: 'Check my named beneficiaries', tl: 'Tingnan ang mga nakatalaga kong beneficiary' }, payload: { app: 'accounts' } },
      },
    },
    {
      id: 'retired.estate.3',
      title: { en: 'The 6% estate tax', tl: 'Ang 6% estate tax' },
      minutes: 3,
      hook: {
        text: { en: 'A ₱7,000,000 estate. The heirs want to know what the government takes.', tl: '₱7,000,000 na estate. Gustong malaman ng heirs kung magkano ang kukunin ng gobyerno.' },
        illo: 'scale',
      },
      show: {
        text: { en: 'Estate tax is a flat 6% of the net estate, after standard deductions.', tl: 'Flat 6% ng net estate ang estate tax, pagkatapos ng standard deductions.' },
        points: [
          { en: 'A standard deduction of ₱5,000,000 applies before the tax is computed.', tl: 'May ₱5,000,000 standard deduction bago kwentahin ang tax.' },
          { en: 'The family home gets its own exemption, up to ₱10,000,000.', tl: 'May sariling exemption ang family home, hanggang ₱10,000,000.' },
        ],
        illo: 'scale',
        animate: false,
      },
      do: {
        type: 'number',
        prompt: { en: 'A net estate, after deductions, is ₱2,000,000. What is the estate tax?', tl: '₱2,000,000 ang net estate, pagkatapos ng deductions. Magkano ang estate tax?' },
        answer: 120000,
        tolerance: 0,
        format: 'peso',
        worked: { en: '₱2,000,000 × 6% = ₱120,000, the estate tax due.', tl: '₱2,000,000 × 6% = ₱120,000, ang dapat bayarang estate tax.' },
      },
      keep: {
        text: { en: '6% of the net estate, after deductions, not the full estate.', tl: '6% ng net estate, pagkatapos ng deductions, hindi ng buong estate.' },
        action: null,
      },
    },
    {
      id: 'retired.estate.4',
      title: { en: 'Giving during life versus after', tl: 'Pagbibigay habang buhay kumpara sa pagkatapos' },
      minutes: 3,
      hook: {
        text: { en: '₱200,000 to a child. Given now, or left for later. The cost is not the same.', tl: '₱200,000 para sa anak. Ibigay ngayon, o iwan para mamaya. Hindi pareho ang gastos.' },
        illo: 'hand',
      },
      show: {
        text: { en: 'A gift while you are alive and a transfer after death follow different rules.', tl: 'Iba ang patakaran ng regalo habang buhay kayo, at ang paglipat pagkamatay.' },
        points: [],
        illo: 'hand',
        animate: false,
      },
      do: {
        type: 'compare',
        prompt: { en: 'Which costs less: ₱200,000 given now, or ₱200,000 left in the estate?', tl: 'Alin ang mas mura: ₱200,000 ibinigay ngayon, o ₱200,000 na iniwan sa estate?' },
        options: [
          {
            title: { en: '₱200,000 given this year, with a written record', tl: '₱200,000 ibinigay ngayong taon, may nakasulat na record' },
            lines: [{ en: 'Under the ₱250,000 yearly limit, no donor’s tax applies.', tl: 'Sa ilalim ng ₱250,000 taunang limit, walang donor’s tax.' }],
            effective: { en: '₱0 in tax, and the gift is settled today.', tl: '₱0 na tax, at nasettle na ang regalo ngayon din.' },
            cheaper: true,
          },
          {
            title: { en: '₱200,000 left as part of a larger estate', tl: '₱200,000 na iniwan bilang bahagi ng mas malaking estate' },
            lines: [{ en: 'Once the estate is above its deductions, every peso costs 6%.', tl: 'Pagkatapos ng deductions, 6% ang bawat piso ng estate.' }],
            effective: { en: '₱12,000 in estate tax, plus a wait for clearance.', tl: '₱12,000 na estate tax, dagdag ang paghihintay sa clearance.' },
            cheaper: false,
          },
        ],
        why: { en: 'Gifts within the yearly limit skip donor’s tax. The same peso, once in a taxed estate, does not.', tl: 'Nakakaligtas sa donor’s tax ang regalong nasa loob ng taunang limit. Hindi ito nangyayari sa parehong piso sa estate na higit sa deductions.' },
      },
      keep: {
        text: { en: 'A written gift now can cost nothing in tax and avoid a dispute later.', tl: 'Ang nakasulat na regalo ngayon ay puwedeng walang tax at walang alitan mamaya.' },
        action: null,
      },
    },
    {
      id: 'retired.estate.5',
      title: { en: 'Why a joint account can freeze at death', tl: 'Bakit puwedeng ma-freeze ang joint account' },
      minutes: 4,
      hook: {
        text: { en: 'Grandma passes away. Her joint account with her daughter freezes the next morning.', tl: 'Namatay si Lola. Nag-freeze ang joint account niya at ng anak niya kinabukasan.' },
        illo: 'house',
      },
      show: {
        text: { en: 'A bank freezes a deceased owner’s accounts, joint ones included, until estate tax clearance.', tl: 'Nagfi-freeze ang bangko sa account ng namatay, kasama ang joint, hanggang estate tax clearance.' },
        points: [],
        illo: 'house',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'The bank freezes the joint account the day after Grandma’s death.', tl: 'Nagfreeze ang bangko ng joint account kinabukasan ng pagkamatay ni Lola.' },
            balance: 300000,
            choices: [
              { text: { en: 'File the estate tax return and pay within the deadline', tl: 'Mag-file ng estate tax return at magbayad bago ang deadline' }, next: 'a1' },
              { text: { en: 'Wait, assuming the daughter’s name unfreezes it', tl: 'Maghintay, akala kaya ng pangalan ng anak ito na maalis' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'Estate tax clearance arrives in months. The account unfreezes, ₱300,000 released.', tl: 'Dumating sa loob ng ilang buwan ang estate tax clearance. Na-unfreeze ang account, ₱300,000 napalabas.' },
            balance: 300000,
            outcome: 'steady',
          },
          b1: {
            text: { en: 'Months pass with no filing. The bank still holds the ₱300,000.', tl: 'Ilang buwang lumipas nang walang na-file. Hawak pa rin ng bangko ang ₱300,000.' },
            balance: 0,
            choices: [
              { text: { en: 'File the estate tax return now, even though it is late', tl: 'Mag-file na ng estate tax return ngayon, kahit huli na' }, next: 'b2' },
              { text: { en: 'Keep waiting for the bank to release it on its own', tl: 'Magpatuloy na maghintay na palabasin ito ng bangko nang mag-isa' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'Filing late still clears the account. ₱300,000 is released, months later than needed.', tl: 'Nakaka-clear pa rin kahit huli ang pag-file. Napalabas ang ₱300,000, ilang buwan huli sa dapat.' },
            balance: 300000,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'A year passes with the account still frozen. Funeral costs are covered by a loan instead.', tl: 'Isang taon na naka-freeze pa rin ang account. Utang na lang ang sumakop sa gastos sa libing.' },
            balance: 0,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'A joint name does not skip the freeze. File the estate tax early.', tl: 'Hindi naiiwasan ng joint na pangalan ang freeze. Mag-file po ng estate tax nang maaga.' },
        action: null,
      },
    },
  ],
};

const family = {
  id: 'retired.family',
  title: { en: 'Helping family without going broke', tl: 'Pagtulong sa pamilya nang hindi nauubos' },
  summary: { en: 'Setting a limit, and saying no to a lending app opened in your name. Also the remittance you can afford.', tl: 'Pagtakda ng limit, at pagtanggi sa lending app na binuksan sa pangalan ninyo. Pati ang padalang kaya ninyo.' },
  competency: { en: 'Can help family without risking own money', tl: 'Kayang tumulong sa pamilya nang hindi nanganganib ang sariling pera' },
  wish: 'rid',
  status: 'authored',
  bites: [
    {
      id: 'retired.family.1',
      title: { en: 'Setting the limit before anyone asks', tl: 'Pagtakda ng limit bago pa may humingi' },
      minutes: 3,
      hook: {
        text: { en: 'A nephew calls with an emergency, again. You have not decided your limit yet.', tl: 'Tumawag ang pamangkin, may emergency ulit. Wala pa po kayong natatakdang limit.' },
        illo: 'coins',
      },
      show: {
        text: { en: 'A fixed monthly amount you can afford is a gift, decided before anyone asks.', tl: 'Ang fixed na buwanang halaga na kaya ninyo ay regalo. Tinatakda po ito bago pa may humingi.' },
        points: [
          { en: 'Decide the number on a calm day, not during a call.', tl: 'Itakda ang bilang sa payapang araw, hindi habang may tawag.' },
          { en: 'A number said kindly is easier to hear than a yes you regret.', tl: 'Mas madaling tanggapin ang bilang na sinabi nang mahinahon kaysa sa oo na pinagsisisihan.' },
        ],
        illo: 'coins',
        animate: true,
      },
      do: {
        type: 'number',
        prompt: { en: 'Your monthly income is ₱10,000. What is a fair limit for helping family?', tl: '₱10,000 ang buwanang kita ninyo. Ano ang makatarungang limit para tumulong sa pamilya?' },
        answer: 1000,
        tolerance: 500,
        format: 'peso',
        worked: { en: 'About 10% of ₱10,000 is ₱1,000, a limit that still leaves needs covered.', tl: 'Humigit-kumulang 10% ng ₱10,000 ay ₱1,000, limit na hindi naaapektuhan ang needs.' },
      },
      keep: {
        text: { en: 'Decide the number before anyone calls. Say it kindly when they do.', tl: 'Itakda po ang bilang bago may tumawag. Sabihin nang mahinahon kapag tumawag na sila.' },
        action: { kind: 'open', label: { en: 'Add a family line to Budget', tl: 'Magdagdag ng family line sa Budget' }, payload: { app: 'budget' } },
      },
    },
    {
      id: 'retired.family.2',
      title: { en: 'A lending app taken out in your name', tl: 'Lending app na binuksan sa pangalan ninyo' },
      minutes: 3,
      hook: {
        text: { en: 'Your son asks you to open a lending app account. He says he will pay it back.', tl: 'Hiniling sa inyo ng anak na buksan ang lending app account. Sabi niya, siya ang magbabayad.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'A loan taken in your name is your debt, no matter who promised to pay.', tl: 'Ang utang na binuksan sa pangalan ninyo ay utang ninyo rin po. Kahit sino ang nangako, kayo pa rin ang managot.' },
        points: [
          { en: 'The lender will collect from you, not from your son.', tl: 'Sa inyo po mangongolekta ang lender, hindi sa anak ninyo.' },
          { en: 'A missed payment can affect your name in a credit report.', tl: 'Ang di-nabayarang utang ay nakakaapekto sa pangalan ninyo sa credit report.' },
        ],
        illo: 'phone',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'Your son asks you to open a lending app in your name for him. What should you do?', tl: 'Gusto ng anak ninyo na buksan ninyo ang lending app para sa kanya. Ano po ang dapat ninyong gawin?' },
        options: [
          { text: { en: 'Decline. Suggest he apply for credit in his own name.', tl: 'Tumanggi. Iminungkahi na sa sarili niyang pangalan siya mag-apply.' }, correct: true, why: { en: 'A loan in your name stays your debt if payments stop.', tl: 'Ang utang sa pangalan ninyo ay mananatiling utang ninyo kapag tumigil ang bayad.' } },
          { text: { en: 'Open it, since he promised to pay every month.', tl: 'Buksan, dahil nangako naman siyang magbabayad kada buwan.' }, correct: false, why: { en: 'A promise does not change whose name the lender collects from.', tl: 'Hindi nababago ng pangako kung kaninong pangalan mangongolekta ang lender.' } },
          { text: { en: 'Open it, but only for a small amount.', tl: 'Buksan, pero maliit na halaga lang.' }, correct: false, why: { en: 'Any amount in your name is still your debt if he stops paying.', tl: 'Anumang halaga sa pangalan ninyo ay utang ninyo pa rin kapag tumigil siya sa pagbabayad.' } },
        ],
      },
      keep: {
        text: { en: 'Never take a loan in your own name for someone else.', tl: 'Huwag po kailanman umutang sa sarili ninyong pangalan para sa iba.' },
        action: null,
      },
    },
    {
      id: 'retired.family.3',
      title: { en: 'The remittance you can afford', tl: 'Ang padalang kaya ninyo' },
      minutes: 3,
      hook: {
        text: { en: '₱9,000 comes in this month. A daughter overseas, a grandchild at home, both need something.', tl: '₱9,000 ang pumasok ngayong buwan. May anak sa ibang bansa, may apo sa bahay, pareho may kailangan.' },
        illo: 'ship',
      },
      show: {
        text: { en: 'Split what you can spare, needs first, before deciding the remittance amount.', tl: 'Hatiin po ang kaya ninyong ibigay, needs muna, bago itakda ang halaga ng padala.' },
        points: [],
        illo: 'ship',
        animate: false,
      },
      do: {
        type: 'allocate',
        prompt: { en: 'Split ₱9,000: your needs, your remittance, and savings.', tl: 'Hatiin po ang ₱9,000: sariling needs, padala, at savings.' },
        total: 9000,
        step: 100,
        jars: [
          { key: 'needs', label: { en: 'Your own needs', tl: 'Sariling needs' }, hint: { en: 'Rent, food, utilities, medicine, always first.', tl: 'Renta, pagkain, utilities, gamot, laging una.' }, guide: [60, 75] },
          { key: 'padala', label: { en: 'Remittance to family', tl: 'Padala sa pamilya' }, hint: { en: 'A fixed amount you decided calmly.', tl: 'Fixed na halaga na napagpasyahan ninyo nang mahinahon.' }, guide: [10, 20] },
          { key: 'savings', label: { en: 'Your own savings', tl: 'Sariling savings' }, hint: { en: 'What is left, kept for you.', tl: 'Ang matitira, para sa inyo mismo.' }, guide: [10, 20] },
        ],
        why: { en: 'Needs protected first, remittance fixed, savings from what remains.', tl: 'Protektado muna ang needs, fixed ang padala, savings mula sa matitira.' },
      },
      keep: {
        text: { en: 'The remittance is what is left after your own needs, not before.', tl: 'Ang padala ay ang matitira pagkatapos ng sariling needs, hindi bago.' },
        action: { kind: 'open', label: { en: 'Set a fixed remittance amount in Remit', tl: 'Magtakda ng fixed na padala sa Remit' }, payload: { app: 'remit' } },
      },
    },
    {
      id: 'retired.family.4',
      title: { en: 'Saying no without guilt', tl: 'Pagtanggi nang walang guilt' },
      minutes: 3,
      hook: {
        text: { en: 'A grandson asks for ₱5,000 for a “sure win” bet. Saying no feels hard.', tl: 'Humihingi ng ₱5,000 ang apo para sa “sure win” bet. Mahirap sabihin ang hindi.' },
        illo: 'hand',
      },
      show: {
        text: { en: 'Some requests deserve a fixed remittance. Others deserve a kind no with a number.', tl: 'May kahilingang karapat-dapat sa fixed na padala. May karapat-dapat sa mabait na hindi, may bilang.' },
        points: [],
        illo: 'hand',
        animate: false,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each request. Left gets help, right gets a kind no.', tl: 'I-sort po ang bawat kahilingan. Kaliwa tinutulungan, kanan mabait na tinatanggihan.' },
        left: { en: 'Help', tl: 'Tulong' },
        right: { en: 'Kind no', tl: 'Mabait na hindi' },
        cards: [
          { text: { en: 'School supplies for a grandchild this month', tl: 'School supplies ng apo ngayong buwan' }, side: 'left', why: { en: 'A small, planned need fits inside the remittance you set.', tl: 'Kasya ang maliit, planadong pangangailangan sa padalang itinakda ninyo.' } },
          { text: { en: 'Money for a “sure win” bet', tl: 'Pera para sa “sure win” bet' }, side: 'right', why: { en: 'A bet is not a need, and no bet is truly sure.', tl: 'Hindi need ang bet, at walang bet na talagang sure.' } },
          { text: { en: 'Medicine for a sick grandchild', tl: 'Gamot para sa maysakit na apo' }, side: 'left', why: { en: 'Health is worth stretching for, within what you can afford.', tl: 'Sulit unahin ang kalusugan, hangga’t kaya ninyong ibigay.' } },
          { text: { en: 'A lending app opened in your name', tl: 'Lending app na binuksan sa pangalan ninyo' }, side: 'right', why: { en: 'A debt in your name is never the kind way to help.', tl: 'Hindi kailanman ang utang sa pangalan ninyo ang mabait na paraan ng tulong.' } },
          { text: { en: 'Another advance beyond this month’s remittance', tl: 'Isa pang advance lampas sa padala ngayong buwan' }, side: 'right', why: { en: 'Saying no with a number protects next month’s needs too.', tl: 'Pinoprotektahan ng pagtanggi na may bilang ang needs ng susunod na buwan.' } },
        ],
      },
      keep: {
        text: { en: 'A no with a number is kinder than a yes that empties your cash.', tl: 'Mas mabait ang hindi na may bilang kaysa sa oo na nag-uubos ng pera ninyo.' },
        action: null,
      },
    },
    {
      id: 'retired.family.5',
      title: { en: 'When helping becomes harm', tl: 'Kapag ang pagtulong ay nagiging pinsala' },
      minutes: 4,
      hook: {
        text: { en: 'A daughter asks for ₱3,000 again, the third time this month.', tl: 'Humihingi ng ₱3,000 ang anak, ikatlong beses na ngayong buwan.' },
        illo: 'family',
      },
      show: {
        text: { en: 'A pattern of asking can quietly empty the cash bucket meant for a year.', tl: 'Ang paulit-ulit na paghingi ay unti-unting naguubos sa cash bucket na para sa isang taon.' },
        points: [],
        illo: 'family',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'She asks again for ₱3,000, the third time this month.', tl: 'Humingi ulit siya ng ₱3,000, ikatlong beses na ngayong buwan.' },
            balance: 20000,
            choices: [
              { text: { en: 'Give the remittance already set, and explain there is no more', tl: 'Ibigay ang padalang naitakda na, at ipaliwanag na wala nang dagdag' }, next: 'a1' },
              { text: { en: 'Give it again, on top of this month’s remittance', tl: 'Ibigay ulit, dagdag sa padala ngayong buwan' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'She understands. The cash bucket stays at ₱20,000, ready for the months ahead.', tl: 'Naiintindihan niya. Nananatili sa ₱20,000 ang cash bucket, handa para sa susunod na buwan.' },
            balance: 20000,
            outcome: 'steady',
          },
          b1: {
            text: { en: 'The cash bucket drops to ₱17,000. A fourth request comes before month’s end.', tl: 'Bumaba sa ₱17,000 ang cash bucket. May ikaapat na hingi bago matapos ang buwan.' },
            balance: 17000,
            choices: [
              { text: { en: 'Hold the line this time, with the same kind no', tl: 'Panindigan ito ngayon, gamit ang parehong mabait na hindi' }, next: 'b2' },
              { text: { en: 'Give again, since it is only once more', tl: 'Magbigay ulit, dahil minsan na lang naman' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'The bucket holds at ₱17,000. The pattern stops before it grows.', tl: 'Nananatili sa ₱17,000 ang bucket. Tumigil ang pattern bago ito lumaki.' },
            balance: 17000,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'By the fourth request, the cash bucket is down to ₱11,000, months earlier than planned.', tl: 'Sa ikaapat na hingi, bumaba sa ₱11,000 ang cash bucket, mas maaga kaysa sa plano.' },
            balance: 11000,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'A number said kindly protects both the bucket and the relationship.', tl: 'Pinoprotektahan ng bilang na sinabi nang mahinahon ang bucket at ang relasyon.' },
        action: { kind: 'open', label: { en: 'Share the limit with family in Circles', tl: 'Ibahagi ang limit sa pamilya sa Circles' }, payload: { app: 'circles' } },
      },
    },
  ],
};

export default {
  id: 'retired',
  band: '60 and over',
  title: { en: 'Retired', tl: 'Retirado' },
  tagline: { en: 'For seniors living on a pension, savings, and family support. They are who scammers target most.', tl: 'Para sa mga senior na umaasa sa pension, savings, at tulong ng pamilya. Sila ang pinaka-target ng scammer.' },
  gate: null,
  intro: {
    text: { en: 'Every lesson here uses a monthly income of ₱5,000 to ₱15,000. That is pension, savings, and family support combined. Your own numbers replace it wherever Jinnie has them.', tl: 'Gumagamit ang bawat aralin dito ng buwanang kita na ₱5,000 hanggang ₱15,000. Kasama na dito ang pension, savings, at tulong ng pamilya. Papalitan ito ng sarili ninyong numero po, kung saan mayroon si Jinnie.' },
    video: { placeholder: 'Thirty second vertical clip. An older parent and an adult child look at a phone screen together, Jinnie’s lamp in the corner. Voice: "These are your wishes now, and you do not have to guard them alone." No music stings, no exclamation.' },
    illo: 'family',
  },
  lessons: [claim, fraud, health, buckets, budget, estate, family],
};
