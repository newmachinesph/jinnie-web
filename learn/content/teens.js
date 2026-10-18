// Path: Baon (13 to 17). Two authored lessons (allowance, DMs), six outlined.
const allowance = {
  id: 'teens.allowance',
  title: { en: 'The allowance budget', tl: 'Ang budget ng baon' },
  summary: { en: 'Turning a weekly allowance into a daily number that actually lasts the week.', tl: 'Paggawang daily number ang weekly baon na kayang tumagal sa buong linggo.' },
  competency: { en: 'Can turn a weekly allowance into a daily number', tl: 'Kayang gawing daily number ang weekly baon' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'teens.allowance.1',
      title: { en: 'The weekly number becomes a daily one', tl: 'Nagiging daily ang weekly number' },
      minutes: 2,
      hook: {
        text: { en: 'Every Monday you get ₱500 for the week. By Wednesday only ₱150 is left, and there are still three school days to go.', tl: 'Tuwing Lunes, binibigyan ka ng ₱500 para sa isang linggo. Pagdating ng Miyerkules, ₱150 na lang ang natitira, at tatlong araw pa ng pasok.' },
        illo: 'coins',
      },
      show: {
        text: { en: 'A weekly allowance is a budget, planned or not. Divide it by the days it has to cover, and you get the number that keeps it lasting the whole week.', tl: 'Ang weekly baon ay budget, plinano man o hindi. Hatiin ito sa bilang ng araw na dapat nitong sapatin, at makukuha mo ang numerong magpapatagal dito sa buong linggo.' },
        points: [
          { en: '₱500 for 5 school days is ₱100 a day.', tl: '₱500 para sa 5 araw ng pasok ay ₱100 kada araw.' },
          { en: 'Spend more on Monday, and the days after get less, not more.', tl: 'Kung mas malaki ang gastos sa Lunes, mas kokonti ang matitira sa mga sumunod na araw, hindi dadagdag.' },
        ],
        illo: 'coins',
        animate: true,
      },
      do: {
        type: 'number',
        prompt: { en: 'Ella gets ₱600 a week for 5 school days. What is her daily number?', tl: 'Si Ella ay binibigyan ng ₱600 kada linggo para sa 5 araw ng pasok. Ano ang daily number niya?' },
        answer: 120,
        tolerance: 0,
        format: 'peso',
        worked: { en: '600 ÷ 5 = ₱120 a day. Spending ₱120 or less each school day makes the ₱600 last the full week.', tl: '600 ÷ 5 = ₱120 kada araw. Kung ₱120 pababa ang gastos bawat araw ng pasok, aabot ang ₱600 sa buong linggo.' },
      },
      keep: {
        text: { en: 'Know your daily number before Monday, not by Wednesday.', tl: 'Alamin ang daily number mo bago mag-Lunes, hindi sa Miyerkules na lang.' },
        action: null,
      },
    },
    {
      id: 'teens.allowance.2',
      title: { en: 'Canteen needs and canteen wants', tl: 'Need at want sa canteen' },
      minutes: 2,
      hook: {
        text: { en: 'The canteen line has rice meals and iced tea. It also has chips, extra siomai, and a second soft drink. Not all of it is keeping you fed.', tl: 'Sa pila sa canteen, may rice meal at iced tea. May chips din, extra siomai, at pangalawang softdrink. Hindi lahat nito ay para lang sa pagkain mo.' },
        illo: 'cart',
      },
      show: {
        text: { en: 'A need in the canteen keeps you fed and gets you to class on time. A want is what you order on top of that. Both are allowed. Only the want should compete for what is left of your daily number.', tl: 'Ang need sa canteen ang nagpapakain sa iyo at nagpapadating sa oras sa klase. Ang want naman ang idinagdag mo sa ibabaw niyan. Puwede pareho ang dalawa. Ang want lang ang dapat lumaban sa natitira sa daily number mo.' },
        points: [],
        illo: 'cart',
        animate: false,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each item. Left is need, right is want.', tl: 'I-sort ang bawat item. Kaliwa ay need, kanan ay want.' },
        left: { en: 'Need', tl: 'Need' },
        right: { en: 'Want', tl: 'Want' },
        cards: [
          { text: { en: 'Rice meal with viand', tl: 'Rice meal na may ulam' }, side: 'left', why: { en: 'Lunch keeps you through the afternoon classes.', tl: 'Ang lunch ang nagpapatagal sa iyo hanggang hapon na klase.' } },
          { text: { en: 'Jeepney fare home', tl: 'Pamasahe ng jeep pauwi' }, side: 'left', why: { en: 'Getting home is not optional.', tl: 'Hindi optional ang pag-uwi.' } },
          { text: { en: 'A second rice serving because the first one was small', tl: 'Pangalawang extra rice dahil maliit ang una' }, side: 'left', why: { en: 'Still food, sized to finish the day without hunger.', tl: 'Pagkain pa rin ito, para hindi ka gutom hanggang matapos ang araw.' } },
          { text: { en: 'Chips after you already ate', tl: 'Chips kahit kumain ka na' }, side: 'right', why: { en: 'A want. Allowed, but it comes from what is left.', tl: 'Want ito. Puwede, pero galing sa natitira na lang.' } },
          { text: { en: 'Load for the group chat', tl: 'Load para sa group chat' }, side: 'right', why: { en: 'Talking to friends is not a school requirement.', tl: 'Hindi requirement sa school ang chat sa mga kaibigan.' } },
          { text: { en: 'Photocopies the teacher asked for', tl: 'Photocopy na hiningi ng teacher' }, side: 'left', why: { en: 'A school requirement is a need.', tl: 'Need ang hinihingi ng school.' } },
          { text: { en: 'A second soft drink', tl: 'Pangalawang softdrink' }, side: 'right', why: { en: 'Thirst is already covered by the first one.', tl: 'Nasagot na ang uhaw sa una.' } },
          { text: { en: 'A birthday treat for a classmate', tl: 'Birthday treat para sa kaklase' }, side: 'right', why: { en: 'Kind, but still a want. Plan for it, do not let it surprise your daily number.', tl: 'Mabait, pero want pa rin. Planuhin ito, huwag hayaang biglain ang daily number mo.' } },
        ],
      },
      keep: {
        text: { en: 'You do not skip the want. You give it a smaller seat.', tl: 'Hindi mo tinatanggal ang want. Bibigyan mo lang ito ng mas maliit na puwesto.' },
        action: null,
      },
    },
    {
      id: 'teens.allowance.3',
      title: { en: 'The daily leak', tl: 'Ang munting paltos araw-araw' },
      minutes: 2,
      hook: {
        text: { en: '₱15 a day for chips does not feel like anything. It is one small bag.', tl: 'Parang wala lang ang ₱15 kada araw sa chips. Isang maliit na bag lang naman.' },
        illo: 'spiral',
      },
      show: {
        text: { en: 'A small daily spend repeats every school day. Multiply it by the school days in a month to see its real size.', tl: 'Umuulit ang maliit na araw-araw na gastos sa bawat araw ng pasok. I-multiply ito sa bilang ng araw ng pasok sa isang buwan para makita ang tunay na laki nito.' },
        points: [
          { en: 'About 20 school days in a month, illustrative.', tl: 'Mga 20 araw ng pasok kada buwan, illustrative.' },
        ],
        illo: 'spiral',
        animate: true,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Slide to your guess: ₱15 a day on chips, 20 school days in a month. How much is that in a month?', tl: 'I-slide ang hula mo: ₱15 kada araw sa chips, 20 araw ng pasok kada buwan. Magkano ito sa isang buwan?' },
        min: 0,
        max: 600,
        step: 10,
        format: 'peso',
        answer: 300,
        why: { en: '₱300. Fifteen pesos times twenty days. That is more than a movie ticket, spent one small bag at a time.', tl: '₱300. Labinlimang piso beses dalawampung araw. Mas malaki pa ito sa isang movie ticket, kahit paisa-isang bag lang ang ginagastos kada araw.' },
      },
      keep: {
        text: { en: 'A small number times twenty days is never a small number.', tl: 'Ang maliit na numero, kapag pinarami nang dalawampung beses, hindi na maliit.' },
        action: null,
      },
    },
    {
      id: 'teens.allowance.4',
      title: { en: 'Split the week', tl: 'Hatiin ang linggo' },
      minutes: 3,
      hook: {
        text: { en: '₱500 lands on Monday with no owner yet. By Friday it decides for you where it went.', tl: 'Dumarating ang ₱500 tuwing Lunes nang walang may-ari. Pagdating ng Biyernes, ito na mismo ang nagdedesisyon kung saan napunta.' },
        illo: 'jars',
      },
      show: {
        text: { en: 'Give the ₱500 owners before Monday ends: canteen food, load, a small savings jar, and everything else. A parent can see this same split in Circles.', tl: 'Bigyan ng may-ari ang ₱500 bago matapos ang Lunes: pagkain sa canteen, load, maliit na savings jar, at lahat ng iba. Makikita rin ito ng magulang sa Circles.' },
        points: [
          { en: 'Canteen: the biggest jar, it feeds five school days.', tl: 'Canteen: pinakamalaking jar, ito ang pagkain sa limang araw ng pasok.' },
          { en: 'Load: small and fixed, so it does not surprise you.', tl: 'Load: maliit at fixed, para hindi ka na magulat.' },
          { en: 'Savings: even ₱50 a week becomes ₱2,600 in a year.', tl: 'Savings: kahit ₱50 kada linggo ay nagiging ₱2,600 sa isang taon.' },
        ],
        illo: 'jars',
        animate: true,
      },
      do: {
        type: 'allocate',
        prompt: { en: 'Split ₱500 into four jars for the week.', tl: 'Hatiin ang ₱500 sa apat na jar para sa linggo.' },
        total: 500,
        step: 10,
        jars: [
          { key: 'canteen', label: { en: 'Canteen', tl: 'Canteen' }, hint: { en: 'Meals for 5 school days', tl: 'Baon sa 5 araw ng pasok' }, guide: [55, 70] },
          { key: 'load', label: { en: 'Load', tl: 'Load' }, hint: { en: 'Group chat and school apps', tl: 'Group chat at school apps' }, guide: [5, 15] },
          { key: 'savings', label: { en: 'Savings', tl: 'Savings' }, hint: { en: 'The jar you do not open midweek', tl: 'Ang jar na hindi mo binubuksan kahit kalagitnaan ng linggo' }, guide: [10, 20] },
          { key: 'wants', label: { en: 'Wants', tl: 'Wants' }, hint: { en: 'Chips, extra siomai, treats', tl: 'Chips, extra siomai, treat' }, guide: [10, 20] },
        ],
        why: { en: 'Any split that keeps savings at 10% or more, with canteen above half, will last the week. ₱50 in savings this week is ₱50 you do not have to explain to anyone.', tl: 'Kahit anong hati na 10% pataas ang savings, at higit sa kalahati ang canteen, ay tatagal sa linggo. Ang ₱50 na savings ngayong linggo ay ₱50 na hindi mo na kailangang ipaliwanag kaninuman.' },
      },
      keep: {
        text: { en: 'The savings jar is filled Monday morning, before anything else opens.', tl: 'Pinupunan ang savings jar tuwing umaga ng Lunes, bago pa man magbukas ang iba.' },
        action: { kind: 'open', label: { en: 'Show this split to a parent in Circles', tl: 'Ipakita ang hating ito sa magulang sa Circles' }, payload: { app: 'circles' } },
      },
    },
    {
      id: 'teens.allowance.5',
      title: { en: 'Thursday, ₱30 left', tl: 'Huwebes, ₱30 na lang' },
      minutes: 3,
      hook: {
        text: { en: 'Two school days to go. ₱30 left in your pocket, and a classmate is asking to borrow ₱50.', tl: 'Dalawang araw pa ng pasok. ₱30 na lang sa bulsa mo, at may kaklaseng humihiram ng ₱50.' },
        illo: 'hand',
      },
      show: {
        text: { en: 'Running low midweek is common. What you do next decides whether Friday is tight or broken.', tl: 'Karaniwan lang ang maubusan sa gitna ng linggo. Ang susunod mong gawin ang magpapasya kung masikip lang o sira na ang Biyernes.' },
        points: [],
        illo: 'hand',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'Thursday. ₱30 left, two school days to go. A classmate asks to borrow ₱50 until Monday.', tl: 'Huwebes. ₱30 na lang, dalawang araw pa ng pasok. May kaklaseng humihiram ng ₱50 hanggang Lunes.' },
            balance: 30,
            choices: [
              { text: { en: 'Say you only have ₱30, and offer that', tl: 'Sabihing ₱30 lang ang meron ka, at ialok iyon' }, next: 'a1' },
              { text: { en: 'Move ₱20 from your own savings jar to lend the full ₱50', tl: 'Kumuha ng ₱20 sa sarili mong savings jar para maipahiram ang buong ₱50' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'You lend the ₱30 you have. Pocket cash: ₱0. Friday, canteen budget is empty.', tl: 'Naipahiram mo ang ₱30 na meron ka. Pocket cash: ₱0. Sa Biyernes, wala kang canteen budget.' },
            balance: 0,
            choices: [
              { text: { en: 'Bring allowance from home Friday morning', tl: 'Magdala ng baon galing bahay Biyernes ng umaga' }, next: 'a2' },
              { text: { en: 'Borrow ₱30 from a second classmate for Friday', tl: 'Manghiram ng ₱30 sa ibang kaklase para sa Biyernes' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'You pack rice and egg from home instead of buying. No new debt anywhere. Monday, your classmate returns the ₱30, in full.', tl: 'Nagdala ka ng kanin at itlog galing bahay sa halip na bumili. Walang bagong utang kahit saan. Lunes, naibalik ng kaklase mo ang buong ₱30.' },
            balance: 30,
            outcome: 'steady',
          },
          a3: {
            text: { en: 'A second classmate lends you ₱30 for Friday lunch. Monday, the first ₱30 returns to you, and you hand the same ₱30 to the second classmate. Net for you: ₱0, but you have started borrowing to lend.', tl: 'May ikalawang kaklaseng nagpahiram ng ₱30 para sa Biyernes. Lunes, naibalik ang unang ₱30 sa iyo, at ibinigay mo rin ang parehong ₱30 sa ikalawang kaklase. Net para sa iyo: ₱0, pero nagsimula ka nang manghiram para lang makapagpahiram.' },
            balance: 0,
            outcome: 'costly',
          },
          b1: {
            text: { en: 'You move ₱20 from your savings jar, which held ₱150, to lend the full ₱50 asked. The jar now holds ₱130.', tl: 'Kumuha ka ng ₱20 sa savings jar mo, na may ₱150, para maipahiram ang buong ₱50 na hiniram. ₱130 na lang ang natitira sa jar.' },
            balance: 130,
            choices: [
              { text: { en: 'Skip an extra snack Friday, leave the jar alone from here', tl: 'Laktawan ang extra na snack sa Biyernes, huwag nang galawin ang jar' }, next: 'b2' },
              { text: { en: 'Take ₱15 more from the jar for a Friday snack anyway', tl: 'Kumuha pa ng ₱15 sa jar para sa Friday snack pa rin' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'Friday, you skip the extra snack and spend only the ₱10 pocket cash left. Monday, the ₱50 is repaid in full and goes straight back into the jar: ₱180.', tl: 'Sa Biyernes, nilaktawan mo ang extra na snack at ang natitirang ₱10 na lang ang ginastos mo. Lunes, nabayaran ang buong ₱50 at diretso itong napunta pabalik sa jar: ₱180.' },
            balance: 180,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'The jar gives up ₱15 more for a Friday snack, and drops to ₱115. Monday, the ₱50 is repaid, but it goes into your pocket instead of the jar, because the snack already spent it in your head. The jar stays at ₱115.', tl: 'Nawalan pa ng ₱15 ang jar para sa Friday snack, bumaba sa ₱115. Lunes, nabayaran ang ₱50, pero napunta ito sa bulsa mo sa halip na sa jar, dahil nagastos na ito sa isip mo para sa snack. Nananatili sa ₱115 ang jar.' },
            balance: 115,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'Lend what is actually yours to lend. The jar is not a backup wallet.', tl: 'Ipahiram lang ang talagang sa iyo. Hindi backup wallet ang jar.' },
        action: null,
      },
    },
  ],
};

const dms = {
  id: 'teens.dms',
  title: { en: 'Scams in your DMs', tl: 'Scam sa DM mo' },
  summary: { en: 'Spotting the offers, giveaways, and hacked accounts that ask for load, money, or your OTP.', tl: 'Pagkilala sa mga alok, giveaway, at na-hack na account na humihingi ng load, pera, o OTP mo.' },
  competency: { en: 'Can spot a scam DM before replying', tl: 'Kayang makilala ang scam DM bago sumagot' },
  wish: 'safe',
  status: 'authored',
  bites: [
    {
      id: 'teens.dms.1',
      title: { en: 'Why you, out of everyone', tl: 'Bakit ikaw, sa lahat ng tao' },
      minutes: 2,
      hook: {
        text: { en: 'A message says you are one of 50 winners chosen for a ₱1,000 GCash raffle. You do not remember joining any raffle.', tl: 'May mensaheng nagsasabing isa ka sa 50 nanalo ng ₱1,000 GCash raffle. Hindi mo naaalala na sumali ka sa kahit anong raffle.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'A real giveaway can name the exact post you joined, and never asks for your PIN, OTP, or a processing fee first. A message that skips straight to asking for those is not checking if you won. It is checking if you will pay.', tl: 'Kayang sabihin ng tunay na giveaway kung anong post mo sinalihan, at hindi ito humihingi ng PIN, OTP, o processing fee muna. Ang mensaheng diretsong humihingi nito ay hindi tumitingin kung nanalo ka. Tinitingnan nito kung magbabayad ka.' },
        points: [
          { en: 'A real prize does not need a fee to be released.', tl: 'Ang tunay na premyo ay hindi kailangan ng bayad para mailabas.' },
          { en: 'Your OTP is a key to your account, not a claim ticket for a prize.', tl: 'Ang OTP mo ay susi sa account mo, hindi claim ticket para sa premyo.' },
        ],
        illo: 'phone',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'A stranger messages: "Congrats! You won ₱1,000 GCash. Reply with your number and the OTP you will receive to claim." What do you do?', tl: 'May stranger na nag-message: "Congrats! You won ₱1,000 GCash. Reply with your number and the OTP you will receive to claim." Ano ang gagawin mo?' },
        options: [
          { text: { en: 'Reply with your number only, and keep the OTP to yourself', tl: 'I-reply ang number lang, at itago ang OTP' }, correct: false, why: { en: 'Your number alone can already start an account takeover attempt. Do not reply at all.', tl: 'Ang number mo lang ay kaya nang makapagsimula ng account takeover. Huwag munang sumagot.' } },
          { text: { en: 'Ask them to prove the raffle is real first', tl: 'Patunayan muna nila na totoo ang raffle' }, correct: false, why: { en: 'A reply here still teaches the account that this number is active. Scammers can fake proof too.', tl: 'Ang pagsagot dito ay nagsasabi lang sa account na aktibo ang numerong ito. Kayang pekehin din ng scammer ang patunay.' } },
          { text: { en: 'Do not reply, block, and report the account', tl: 'Huwag sumagot, i-block, at i-report ang account' }, correct: true, why: { en: 'No information given, no reply expected, and the account is removed from your inbox.', tl: 'Walang ibinigay na impormasyon, walang inaasahang reply, at tanggal na ang account sa inbox mo.' } },
          { text: { en: 'Send the OTP once it arrives, since it is just a number', tl: 'Ipadala ang OTP pagdating, dahil numero lang naman ito' }, correct: false, why: { en: 'That OTP can open your own GCash or Messenger account. It is never just a number.', tl: 'Kaya buksan ng OTP na iyon ang sarili mong GCash o Messenger account. Hindi ito numero lang.' } },
        ],
      },
      keep: {
        text: { en: 'A prize that needs your OTP first is not a prize.', tl: 'Ang premyong kailangan muna ng OTP mo ay hindi premyo.' },
        action: null,
      },
    },
    {
      id: 'teens.dms.2',
      title: { en: 'Real offer or set-up', tl: 'Totoong alok o patibong' },
      minutes: 2,
      hook: {
        text: { en: 'Game top-up pages, resellers, and official-looking accounts fill your feed before every big update. A few of them are not selling anything.', tl: 'Puno ng game top-up page, reseller, at mukhang-official na account ang feed mo bago ang bawat malaking update. May ilan sa kanila na wala talagang binebenta.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'A real seller shows a receipt after payment, and the diamonds land in the game itself. A set-up asks for payment first, to a personal account, then goes quiet.', tl: 'Ang tunay na seller ay may ibinibigay na resibo pagkatapos magbayad, at dumarating ang diamonds sa mismong laro. Ang patibong ay humihingi ng bayad muna, sa personal na account, tapos biglang nawawala.' },
        points: [],
        illo: 'phone',
        animate: false,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each offer. Left is safe to trust, right is a warning sign.', tl: 'I-sort ang bawat alok. Kaliwa ay maaasahan, kanan ay babala.' },
        left: { en: 'Trust', tl: 'Maaasahan' },
        right: { en: 'Warning', tl: 'Babala' },
        cards: [
          { text: { en: 'Top-up inside the game store itself', tl: 'Top-up sa loob mismo ng game store' }, side: 'left', why: { en: 'The diamonds land the moment payment clears.', tl: 'Dumarating agad ang diamonds pagka-clear ng bayad.' } },
          { text: { en: 'A seller with hundreds of reviews who sends a receipt after payment', tl: 'Seller na may daan-daang review at nagbibigay ng resibo pagkatapos magbayad' }, side: 'left', why: { en: 'A record exists if something goes wrong.', tl: 'May record kung sakaling may masira.' } },
          { text: { en: '"50% off diamonds, GCash to a personal account first, message after"', tl: '"50% off diamonds, GCash to a personal account first, message after"' }, side: 'right', why: { en: 'No shop, no receipt, payment first. The usual order of a scam.', tl: 'Walang shop, walang resibo, bayad muna. Karaniwang pagkakasunod ng scam.' } },
          { text: { en: 'An account created this week, offering a giveaway of 10,000 diamonds', tl: 'Account na ginawa lang ngayong linggo, nag-aalok ng 10,000 diamonds na giveaway' }, side: 'right', why: { en: 'A new account with no history has nothing to lose by disappearing.', tl: 'Walang mawawala sa bagong account na walang history kung mawala ito bigla.' } },
          { text: { en: '"Send load muna, babayaran kita pabalik agad"', tl: '"Send load muna, babayaran kita pabalik agad"' }, side: 'right', why: { en: 'Load sent cannot be pulled back. Nothing enforces "agad."', tl: 'Hindi na maibabalik ang naipadalang load. Walang mapipilit sa "agad."' } },
          { text: { en: 'A reseller who accepts payment only after the diamonds show in your account', tl: 'Reseller na tumatanggap ng bayad pagkatapos lang lumabas ang diamonds sa account mo' }, side: 'left', why: { en: 'The risk sits with the seller, not with you.', tl: 'Nasa seller ang risk, hindi sa iyo.' } },
        ],
      },
      keep: {
        text: { en: 'Payment before the item, to a personal account, is the pattern to remember.', tl: 'Bayad bago ang item, sa personal account, ang pattern na dapat tandaan.' },
        action: null,
      },
    },
    {
      id: 'teens.dms.3',
      title: { en: 'Your friend, sort of', tl: 'Kaibigan mo, medyo' },
      minutes: 3,
      hook: {
        text: { en: 'Twenty seconds. A message arrives from a friend you actually know. Something about it does not match how she usually types.', tl: 'Dalawampung segundo. May dumating na mensahe mula sa kaibigan mong kilala mo talaga. May hindi bagay sa karaniwan niyang pag-type.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'An account can be taken over without its owner knowing. It still shows the real name and photo. What gives it away is the request, and the way it is written.', tl: 'Puwedeng ma-take over ang account kahit hindi alam ng may-ari. Nananatili ang tunay na pangalan at larawan. Ang request at paraan ng pagsulat ang nagbubunyag.' },
        points: [],
        illo: 'phone',
        animate: false,
      },
      do: {
        type: 'spot',
        prompt: { en: 'Tap the lines that should worry you.', tl: 'I-tap ang mga linyang dapat ikaalala.' },
        seconds: 20,
        message: {
          channel: 'chat',
          from: { en: 'Anna (your seatmate)', tl: 'Si Anna (katabi mo sa klase)' },
          lines: [
            { text: { en: 'Hi! Sorry it took me so long to reply', tl: 'Hi! Sorry ang tagal kong nireplyan' }, suspicious: false, why: { en: 'An ordinary opening line.', tl: 'Karaniwang panimula lang.' } },
            { text: { en: 'Send me ₱100 load first, I just need it, I will send it right back', tl: 'Pa-send muna ng ₱100 load, kailangan ko lang, ipapadala ko rin sayo agad' }, suspicious: true, why: { en: 'A sudden money request with an immediate promise to pay back is the core move of an account takeover.', tl: 'Ang biglaang paghingi ng pera na may pangakong ibabalik agad ang pangunahing galaw ng account takeover.' } },
            { text: { en: 'Don’t call, I have no load, let’s just chat here', tl: 'Wag mo na lang i-tawagan, walang load, chat na lang tayo dito' }, suspicious: true, why: { en: 'Blocking the one way you could confirm it is really her is the other half of the same move.', tl: 'Ang pagharang sa tanging paraan para ma-confirm mo na talagang siya ang kabilang bahagi ng parehong galaw.' } },
            { text: { en: 'Do you have extra load? I just need it now', tl: 'May extra load ka ba? kailangan ko lang ngayon' }, suspicious: false, why: { en: 'On its own, a plain question. It becomes a pattern only with the lines around it.', tl: 'Mag-isa, karaniwang tanong lang ito. Nagiging pattern lang ito kasama ng mga linyang kasunod nito.' } },
            { text: { en: 'Just send it to my GCash number, 09XX-XXX-XXXX', tl: 'GCash number ko na lang ipadala mo, 09XX-XXX-XXXX' }, suspicious: true, why: { en: 'A different number from the one you have saved for her is the tell an account takeover cannot hide.', tl: 'Ang ibang number kaysa sa naka-save mo para sa kanya ang senyales na hindi kayang itago ng account takeover.' } },
          ],
        },
        why: { en: 'Three lines here try to move money fast and cut off the one check that would expose them: a phone call.', tl: 'Tatlong linya rito ang sumusubok magpalipat ng pera nang mabilis at inaalis ang tanging paraan para malantad sila: ang pagtawag.' },
      },
      keep: {
        text: { en: 'Before sending anything, call. A voice is harder to fake than a chat.', tl: 'Bago magpadala ng anuman, tumawag. Mas mahirap peke ang boses kaysa sa chat.' },
        action: null,
      },
    },
    {
      id: 'teens.dms.4',
      title: { en: 'What to do in the next five minutes', tl: 'Ano ang gagawin sa susunod na limang minuto' },
      minutes: 2,
      hook: {
        text: { en: 'You just spotted a scam message, or a friend’s account is acting strange. The next five minutes matter more than being right about it.', tl: 'Nakakita ka lang ng mensaheng scam, o kakaiba ang kilos ng account ng kaibigan mo. Mas mahalaga ang susunod na limang minuto kaysa sa pagiging tama tungkol dito.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'A clear order stops the situation from spreading to your account, or to your friend’s.', tl: 'Ang malinaw na pagkakasunod ang pumipigil sa paglaganap ng sitwasyon sa account mo, o sa account ng kaibigan mo.' },
        points: [],
        illo: 'shield',
        animate: false,
      },
      do: {
        type: 'order',
        prompt: { en: 'Put the steps in order.', tl: 'Ayusin ang mga hakbang.' },
        steps: [
          { en: 'Stop. Do not reply, pay, or share a code.', tl: 'Huminto. Huwag sumagot, magbayad, o magbigay ng code.' },
          { en: 'Screenshot the message.', tl: 'I-screenshot ang mensahe.' },
          { en: 'Call or message your friend on a different channel to confirm.', tl: 'Tawagan o i-message ang kaibigan mo sa ibang channel para i-confirm.' },
          { en: 'Block and report the account.', tl: 'I-block at i-report ang account.' },
          { en: 'Tell a parent or guardian what happened.', tl: 'Sabihin sa magulang o guardian ang nangyari.' },
        ],
        why: { en: 'Confirming through a second channel, before blocking, is what tells you whether it is really your friend asking, or her account being used without her knowledge.', tl: 'Ang pag-confirm sa ikalawang channel, bago mag-block, ang magsasabi kung talagang siya ang humihingi, o ginagamit lang ang account niya nang wala siyang alam.' },
      },
      keep: {
        text: { en: 'You are allowed to double-check a friend. A real one will understand why.', tl: 'Puwede mong i-double check ang kaibigan. Mauunawaan ito ng tunay na kaibigan.' },
        action: null,
      },
    },
    {
      id: 'teens.dms.5',
      title: { en: 'True or not, ninety seconds', tl: 'Tama o mali, siyamnapung segundo' },
      minutes: 2,
      hook: {
        text: { en: 'Ninety seconds. Ten statements about staying safe on Messenger and Telegram.', tl: 'Siyamnapung segundo. Sampung pahayag tungkol sa pananatiling ligtas sa Messenger at Telegram.' },
        illo: 'hourglass',
      },
      show: {
        text: { en: 'A law now exists specifically for account scams like these. Knowing the basics costs nothing and saves everything.', tl: 'May batas na ngayon na tukoy sa mga account scam na ganito. Walang bayad ang pag-alam ng basics, at nakakaligtas ito ng lahat.' },
        points: [],
        illo: 'hourglass',
        animate: false,
      },
      do: {
        type: 'rapid',
        seconds: 90,
        items: [
          { text: { en: 'It is safe to share an OTP with a friend if they ask nicely.', tl: 'Ligtas ibahagi ang OTP sa kaibigan kung mahinahon ang paghingi.' }, answer: false, why: { en: 'An OTP is never meant to be shared with anyone, friend or not.', tl: 'Hindi dapat ibahagi ang OTP kahit kanino, kaibigan man o hindi.' } },
          { text: { en: 'Turning on two-factor authentication makes an account harder to take over.', tl: 'Ang pag-on ng two-factor authentication ang gumagawang mas mahirap kunin ang account.' }, answer: true, why: { en: 'It adds a second lock beyond the password.', tl: 'Nagdaragdag ito ng ikalawang kandado bukod sa password.' } },
          { text: { en: 'A message from a verified-looking name is always the real person.', tl: 'Ang mensahe mula sa mukhang verified na pangalan ay laging totoong tao.' }, answer: false, why: { en: 'A name and photo can be copied. A takeover keeps both.', tl: 'Kaya kopyahin ang pangalan at larawan. Nananatili ang dalawa kahit na-take over.' } },
          { text: { en: 'Using the same password for a game account and Messenger is fine.', tl: 'Okay lang gamitin ang parehong password sa game account at Messenger.' }, answer: false, why: { en: 'One leaked password opens both.', tl: 'Isang na-leak na password ang magbubukas sa dalawa.' } },
          { text: { en: 'A law in the Philippines makes it a crime to sell your own bank or e-wallet account to someone else.', tl: 'May batas sa Pilipinas na krimen ang pagbenta ng sarili mong bank o e-wallet account sa iba.' }, answer: true, why: { en: 'The Anti-Financial Account Scamming Act, 2024.', tl: 'Ang Anti-Financial Account Scamming Act, 2024.' } },
          { text: { en: 'If money is lost to a scam, a bank can be told to hold the scammer’s account.', tl: 'Kung may nawalang pera sa scam, puwedeng payagan ang bangko na i-hold ang account ng scammer.' }, answer: true, why: { en: 'The same law lets banks hold disputed funds temporarily.', tl: 'Ang parehong batas ang nagpapayag sa bangko na pansamantalang i-hold ang pinagtatalunang pera.' } },
          { text: { en: 'A giveaway that asks you to forward the message to five group chats first is a normal requirement.', tl: 'Normal lang ang giveaway na nagpapa-forward ng mensahe sa limang group chat bago makakuha.' }, answer: false, why: { en: 'That spreads the scam faster. A real promo does not need you to recruit for it.', tl: 'Doon lumalaganap ang scam nang mas mabilis. Hindi kailangan ng tunay na promo na kumuha ka pa ng iba.' } },
          { text: { en: 'A scam account can be reported to the platform itself, not just to a parent.', tl: 'Puwedeng i-report ang scam account mismo sa platform, hindi lang sa magulang.' }, answer: true, why: { en: 'Messenger and Telegram both have a report function on every account.', tl: 'May report function ang Messenger at Telegram sa bawat account.' } },
          { text: { en: 'A password only needs changing after a scam attempt if you actually replied.', tl: 'Kailangan lang palitan ang password pagkatapos ng scam attempt kung sumagot ka talaga.' }, answer: false, why: { en: 'Change it if a link was clicked too, even without replying.', tl: 'Palitan din kung may na-click na link, kahit hindi sumagot.' } },
          { text: { en: 'A price for game diamonds far below the official one is always a bonus, never a warning sign.', tl: 'Ang presyo ng game diamonds na sobrang mura sa opisyal ay laging bonus, hindi kailanman babala.' }, answer: false, why: { en: 'A price far below the official one is usually the first sign, not the last.', tl: 'Ang presyong sobrang mura sa opisyal ang kadalasang unang senyales, hindi ang huli.' } },
        ],
      },
      keep: {
        text: { en: 'None of these facts help if they are not used in the moment. That is why you just practiced.', tl: 'Walang tutulong ang mga factong ito kung hindi gagamitin sa mismong sandali. Kaya ka nag-practice.' },
        action: null,
      },
    },
    {
      id: 'teens.dms.6',
      title: { en: 'The message that came back', tl: 'Ang mensaheng bumalik' },
      minutes: 4,
      hook: {
        text: { en: 'It is 9 in the evening. A message from your cousin’s account arrives, asking for a small favor.', tl: 'Alas nuwebe ng gabi. May dumating na mensahe mula sa account ng pinsan mo, humihingi ng maliit na pabor.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'Everything from this lesson meets one message. What you do in the next minute is the whole lesson.', tl: 'Lahat ng natutunan sa araling ito ay makakaharap sa isang mensahe. Ang gagawin mo sa susunod na isang minuto ang buong aralin.' },
        points: [],
        illo: 'phone',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: '"Please send ₱100 load, I just need it, I will pay you back on Saturday." The number matches your cousin’s saved contact.', tl: '"Pa-send naman ng ₱100 load, need ko lang, babayaran kita sa Sabado." Tugma ang number sa naka-save mong contact ng pinsan mo.' },
            balance: 100,
            choices: [
              { text: { en: 'Send the load right away, it is family', tl: 'Ipadala agad ang load, family naman' }, next: 'a1' },
              { text: { en: 'Call your cousin first to confirm', tl: 'Tawagan muna ang pinsan mo para i-confirm' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'You send ₱100 load. Ten minutes later your cousin calls, confused. Her account had been logged into from another phone since that afternoon.', tl: 'Nagpadala ka ng ₱100 load. Sampung minuto pagkatapos, tumawag ang pinsan mo, nalilito. Naka-login pala ang account niya mula sa ibang phone mula pa umagang iyon.' },
            balance: -100,
            choices: [
              { text: { en: 'Help her change her password and report the account', tl: 'Tulungan siyang palitan ang password at i-report ang account' }, next: 'a2' },
              { text: { en: 'Let it go, since it is only ₱100', tl: 'Hayaan na lang, dahil ₱100 lang naman' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'Together you report the account, and she resets her password with two-factor authentication on. The ₱100 does not come back, but the account is hers again by the end of the night.', tl: 'Sabay ninyong ni-report ang account, at nireset niya ang password nang may two-factor authentication na. Hindi na babalik ang ₱100, pero sa kanya na ulit ang account bago matapos ang gabi.' },
            balance: -100,
            outcome: 'steady',
          },
          a3: {
            text: { en: 'The account keeps messaging her other contacts the same way, for a week, before Messenger takes it down. Three more relatives lose ₱100 to ₱300 each before anyone reports it.', tl: 'Patuloy na nagme-message ang account sa ibang contacts niya sa loob ng isang linggo, bago ito tanggalin ng Messenger. Tatlo pang kamag-anak ang nawalan ng ₱100 hanggang ₱300 bawat isa bago may nag-report.' },
            balance: -100,
            outcome: 'costly',
          },
          b1: {
            text: { en: 'Your cousin does not pick up right away. Ten minutes pass with no reply on chat either.', tl: 'Hindi agad sumagot ang pinsan mo. Sampung minutong walang reply kahit sa chat.' },
            balance: 100,
            choices: [
              { text: { en: 'Wait for her call back before sending anything', tl: 'Hintayin ang tawag niya bago magpadala ng kahit ano' }, next: 'b2' },
              { text: { en: 'Send the load anyway, she is probably just busy', tl: 'Ipadala na rin ang load, siguro busy lang siya' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'She calls back twenty minutes later. It was not her; her account had been logged into from another phone since that afternoon. Nothing was sent, and she resets her password that night.', tl: 'Tumawag siya pagkalipas ng dalawampung minuto. Hindi pala siya; naka-login ang account niya mula sa ibang phone mula pa umaga. Walang naipadala, at ni-reset niya ang password nang gabing iyon.' },
            balance: 100,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'You send ₱100 load anyway. Her real reply arrives an hour later: she was watching a movie and never asked for anything.', tl: 'Ipinadala mo pa rin ang ₱100 load. Dumating ang totoong reply niya isang oras pagkatapos: nanonood lang siya ng movie at hindi naman siya humingi ng kahit ano.' },
            balance: -100,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'A call takes one minute. A wrong reply cannot be undone.', tl: 'Isang minuto lang ang tawag. Hindi na mababawi ang maling reply.' },
        action: { kind: 'open', label: { en: 'Tell a parent about this in Circles', tl: 'Sabihin ito sa magulang sa Circles' }, payload: { app: 'circles' } },
      },
    },
  ],
};

const account = {
  id: 'teens.account',
  title: { en: 'First account, with a parent', tl: 'Unang account, kasama ang magulang' },
  summary: { en: 'GCash Jr, a bank kiddie account, and what a parent can see.', tl: 'GCash Jr, bank kiddie account, at ang nakikita ng magulang.' },
  competency: { en: 'Can explain how a first account works with a parent', tl: 'Kayang ipaliwanag kung paano gumagana ang unang account kasama ang magulang' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'teens.account.1',
      title: { en: 'A jar with a lock, not just a jar', tl: 'Jar na may kandado, hindi lang basta jar' },
      minutes: 2,
      hook: {
        text: { en: 'Money kept in a piggy bank at home is safe from most things, but not from a curious sibling, or from being spent before you notice it is gone.', tl: 'Ligtas ang pera sa alkansya sa bahay sa karamihan, pero hindi ligtas sa mausisang kapatid, o sa nagastos na bago mo pa mapansin na nawala na.' },
        illo: 'alkansya',
      },
      show: {
        text: { en: 'A first account, opened with a parent, works like a jar that only you can unlock, with a PIN instead of a key. GCash Jr and a bank kiddie account both need a parent alongside you, and both keep a record of every cash-in and cash-out.', tl: 'Ang unang account, na binuksan kasama ang magulang, ay parang jar na ikaw lang ang kayang magbukas, may PIN sa halip na susi. Ang GCash Jr at ang bank kiddie account ay pareho pang kailangan ng magulang kasama mo, at pareho ring may record ng bawat cash-in at cash-out.' },
        points: [
          { en: 'A PIN only you know replaces a lock only you can pick.', tl: 'Ang PIN na alam mo lang ang humahalili sa kandadong ikaw lang ang bukas.' },
          { en: 'Every cash-in and cash-out leaves a record, unlike coins from a jar.', tl: 'May naiiwang record ang bawat cash-in at cash-out, hindi tulad ng barya mula sa jar.' },
        ],
        illo: 'alkansya',
        animate: true,
      },
      do: {
        type: 'choice',
        prompt: { en: 'Your piggy bank has ₱800 saved over two months. What can a first account with a parent add that the piggy bank cannot?', tl: 'May ₱800 nang naipon ang alkansya mo sa loob ng dalawang buwan. Ano ang maidaragdag ng unang account kasama ang magulang na hindi kaya ng alkansya?' },
        options: [
          { text: { en: 'A PIN that only you know for every transaction', tl: 'PIN na alam mo lang para sa bawat transaction' }, correct: true, why: { en: 'A PIN is the one thing a coin jar cannot have. It confirms that only you approved the cash-out.', tl: 'Ang PIN ang tanging bagay na wala ang isang jar ng barya. Kumpirmasyon ito na ikaw lang ang nag-approve ng cash-out.' } },
          { text: { en: 'A place with no record of what you spent', tl: 'Lugar na walang record ng ginastos mo' }, correct: false, why: { en: 'The opposite is true. An account keeps a record of every cash-in and cash-out; a jar does not.', tl: 'Kabaligtaran ang totoo. May record ang account sa bawat cash-in at cash-out; wala nito ang jar.' } },
          { text: { en: 'Money a parent can never see', tl: 'Perang hindi kailanman makikita ng magulang' }, correct: false, why: { en: 'A parent can see the balance on a first account. That is part of how it is set up, not something it avoids.', tl: 'Nakikita ng magulang ang balance sa unang account. Bahagi ito ng kung paano ito na-set up, hindi iniiwasan.' } },
          { text: { en: 'Coins that turn into bills by themselves', tl: 'Barya na nagiging papel na kusa' }, correct: false, why: { en: 'Coins and bills work the same in either. What changes is the record and the PIN.', tl: 'Pareho lang ang barya at papel sa dalawa. Ang record at PIN ang nagbabago.' } },
        ],
      },
      keep: {
        text: { en: 'A PIN only you know is what makes an account yours, even with a parent alongside.', tl: 'Ang PIN na alam mo lang ang gumagawang sa iyo ang account, kahit kasama ang magulang.' },
        action: null,
      },
    },
    {
      id: 'teens.account.2',
      title: { en: 'GCash Jr versus a bank kiddie account', tl: 'GCash Jr kumpara sa bank kiddie account' },
      minutes: 3,
      hook: {
        text: { en: 'Two ways to open a first account this year: an app inside a parent’s own GCash, or a passbook at a bank branch.', tl: 'Dalawang paraan para magbukas ng unang account ngayong taon: app sa loob ng sariling GCash ng magulang, o passbook sa bank branch.' },
        illo: 'card',
      },
      show: {
        text: { en: 'GCash Jr runs inside a parent’s own GCash app, for ages 7 to 17. A bank kiddie account is opened at a branch, with a parent or guardian signing as co-signer. Both give you a first account of your own, tied to an adult who can see it.', tl: 'Tumatakbo ang GCash Jr sa loob ng sariling GCash app ng magulang, para sa edad 7 hanggang 17. Ang bank kiddie account naman ay binubuksan sa branch, may pirma ng magulang o guardian bilang co-signer. Pareho itong nagbibigay sa iyo ng sariling unang account, na naka-link sa adult na makakakita nito.' },
        points: [],
        illo: 'card',
        animate: false,
      },
      do: {
        type: 'match',
        prompt: { en: 'Match the term to what it means.', tl: 'I-match ang termino sa kahulugan nito.' },
        pairs: [
          { a: { en: 'GCash Jr', tl: 'GCash Jr' }, b: { en: 'An account for ages 7 to 17, opened inside a parent’s own GCash', tl: 'Account para sa edad 7 hanggang 17, binukas sa loob ng sariling GCash ng magulang' } },
          { a: { en: 'Bank kiddie account', tl: 'Bank kiddie account' }, b: { en: 'A savings account opened at a branch with a parent or guardian as co-signer', tl: 'Savings account na binubuksan sa branch, may magulang o guardian bilang co-signer' } },
          { a: { en: 'Co-signer', tl: 'Co-signer' }, b: { en: 'The adult whose signature is also needed on the account', tl: 'Ang adult na kailangan din ang pirma sa account' } },
          { a: { en: 'Passbook', tl: 'Passbook' }, b: { en: 'The booklet a bank stamps to show every deposit and withdrawal', tl: 'Ang libritong tinatatakan ng bangko para ipakita ang bawat deposit at withdrawal' } },
        ],
      },
      keep: {
        text: { en: 'Different app, different branch, same idea: a first account with an adult who can see it.', tl: 'Ibang app, ibang branch, pareho ang ideya: unang account na may adult na nakakakita nito.' },
        action: null,
      },
    },
    {
      id: 'teens.account.3',
      title: { en: 'What a parent can see, and what they cannot change without you', tl: 'Ano ang nakikita ng magulang, at hindi nila mababago nang wala ka' },
      minutes: 2,
      hook: {
        text: { en: 'Your mom checks the GCash Jr balance and sees ₱350 sitting there. She has not touched it.', tl: 'Tiningnan ng mama mo ang balance ng GCash Jr at nakita ang ₱350 doon. Hindi niya ito ginalaw.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'A parent linked to your first account can see the balance and set a limit on how much moves in a day. What they cannot do is spend it as their own, or take your PIN without you there.', tl: 'Ang magulang na naka-link sa unang account mo ay nakikita ang balance at kayang mag-set ng limit sa kung magkano ang gagalaw kada araw. Ang hindi nila kaya ay gastusin ito na parang sarili nila, o kunin ang PIN mo nang wala ka.' },
        points: [],
        illo: 'shield',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'Which of these can a parent do on your first account?', tl: 'Alin dito ang kaya ng magulang sa unang account mo?' },
        options: [
          { text: { en: 'See the balance and set a spending limit', tl: 'Makita ang balance at mag-set ng spending limit' }, correct: true, why: { en: 'This is exactly what a first account gives a parent: visibility and a limit, not control of every peso.', tl: 'Ito mismo ang ibinibigay ng unang account sa magulang: makikita nila ito at may limit, hindi kontrol sa bawat piso.' } },
          { text: { en: 'Read your private chat messages through the same app', tl: 'Basahin ang private chat mo sa parehong app' }, correct: false, why: { en: 'A financial account shows money movement, not your messages elsewhere.', tl: 'Ang financial account ay nagpapakita ng galaw ng pera, hindi ng mensahe mo sa ibang app.' } },
          { text: { en: 'Use your PIN without asking you', tl: 'Gamitin ang PIN mo nang hindi nagtatanong' }, correct: false, why: { en: 'The PIN is yours to know and yours to give. It is not something a parent enters unasked.', tl: 'Ang PIN ay alam mo lang at ikaw ang magbibigay nito. Hindi ito basta-basta ipinapasok ng magulang nang wala kang alam.' } },
        ],
      },
      keep: {
        text: { en: 'A first account gives a parent a window, not a second set of hands on your money.', tl: 'Ang unang account ay nagbibigay sa magulang ng bintana, hindi ikalawang kamay sa pera mo.' },
        action: null,
      },
    },
    {
      id: 'teens.account.4',
      title: { en: 'Opening it together', tl: 'Pagbukas nito nang magkasama' },
      minutes: 3,
      hook: {
        text: { en: 'Opening a first account is a short conversation, then a few taps or a short visit, not a mystery.', tl: 'Ang pagbukas ng unang account ay maikling usapan lang, tapos ilang tap o maikling pagbisita, hindi ito mahiwagang proseso.' },
        illo: 'family',
      },
      show: {
        text: { en: 'The steps are the same whether it becomes GCash Jr or a bank kiddie account: talk first, choose together, bring what the adult needs, then set what is yours alone.', tl: 'Pareho ang mga hakbang, maging GCash Jr man o bank kiddie account: mag-usap muna, pumili nang magkasama, dalhin ang kailangan ng adult, tapos i-set ang para sa iyo lang.' },
        points: [],
        illo: 'family',
        animate: false,
      },
      do: {
        type: 'order',
        prompt: { en: 'Put the steps in order.', tl: 'Ayusin ang mga hakbang.' },
        steps: [
          { en: 'Tell a parent or guardian you want your own first account', tl: 'Sabihin sa magulang o guardian na gusto mo ng sarili mong unang account' },
          { en: 'Decide together: GCash Jr, or a bank kiddie account', tl: 'Magpasya nang magkasama: GCash Jr, o bank kiddie account' },
          { en: 'Bring the ID a parent or guardian needs to co-sign', tl: 'Dalhin ang ID na kailangan ng magulang o guardian para maka-co-sign' },
          { en: 'Set a PIN that only you will know', tl: 'Mag-set ng PIN na ikaw lang ang makakaalam' },
          { en: 'Cash in a small first amount to see the balance move', tl: 'Mag-cash in ng maliit na unang halaga para makita ang paggalaw ng balance' },
        ],
        why: { en: 'Talking first and choosing together comes before any paperwork, because the account only works if both of you agree on how it gets used.', tl: 'Ang pag-uusap muna at pagpili nang magkasama ang mauuna sa kahit anong papeles, dahil gagana lang ang account kung parehong sang-ayon kayo sa paggamit nito.' },
      },
      keep: {
        text: { en: 'The conversation with a parent is the first step, not the last one.', tl: 'Ang usapan sa magulang ang unang hakbang, hindi ang huli.' },
        action: null,
      },
    },
    {
      id: 'teens.account.5',
      title: { en: 'The pocket you do not touch', tl: 'Ang pocket na hindi mo ginagalaw' },
      minutes: 2,
      hook: {
        text: { en: 'Your account shows one balance, but nothing stops you from treating part of it as untouchable.', tl: 'Isang balance lang ang ipinapakita ng account mo, pero walang pumipigil sa iyong ituring na hindi-magagalaw ang bahagi nito.' },
        illo: 'alkansya',
      },
      show: {
        text: { en: 'A savings pocket inside a first account works the same as a jar you do not open midweek. Cash in a fixed amount, then leave it, and it adds up on its own.', tl: 'Ang savings pocket sa loob ng unang account ay gaya ng jar na hindi mo binubuksan kahit kalagitnaan ng linggo. Mag-cash in ng fixed na halaga, tapos huwag nang galawin, at dadami ito nang mag-isa.' },
        points: [
          { en: 'What stays in is what grows.', tl: 'Ang natitira ang siyang lumalaki.' },
        ],
        illo: 'alkansya',
        animate: true,
      },
      do: {
        type: 'number',
        prompt: { en: 'You cash in ₱100 into your savings pocket every week, and you never cash out from it. After 8 weeks, how much is in the pocket?', tl: 'Nagka-cash in ka ng ₱100 sa savings pocket mo kada linggo, at hindi mo ito kinukuha. Pagkatapos ng 8 linggo, magkano na ang nasa pocket?' },
        answer: 800,
        tolerance: 0,
        format: 'peso',
        worked: { en: '₱100 × 8 = ₱800. The pocket only grows because nothing is taken back out.', tl: '₱100 × 8 = ₱800. Lumalaki lang ang pocket dahil walang kinukuha pabalik.' },
      },
      keep: {
        text: { en: 'A pocket you do not open is the only kind that reliably grows.', tl: 'Ang pocket na hindi mo binubuksan lang ang tumataas nang maaasahan.' },
        action: null,
      },
    },
    {
      id: 'teens.account.6',
      title: { en: 'The PIN, and who asks for it', tl: 'Ang PIN, at sino ang humihingi nito' },
      minutes: 4,
      hook: {
        text: { en: 'Your cousin is visiting and asks to borrow your phone to cash out ₱200 for jeepney fare home, since your account already has it loaded.', tl: 'Bumibisita ang pinsan mo at humihiram ng phone mo para mag-cash out ng ₱200 para sa pamasahe pauwi, dahil naka-load na ito sa account mo.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'Everything from this lesson meets one request. What you do with your PIN in the next minute is the whole lesson.', tl: 'Lahat ng natutunan sa araling ito ay makakaharap sa isang request. Ang gagawin mo sa PIN mo sa susunod na isang minuto ang buong aralin.' },
        points: [],
        illo: 'shield',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'Your cousin asks to borrow your phone and PIN to cash out ₱200 for jeepney fare home. She is trusted, and in a hurry.', tl: 'Humihiram ang pinsan mo ng phone at PIN mo para mag-cash out ng ₱200 para sa pamasahe pauwi. Pinagkakatiwalaan mo siya, at nagmamadali siya.' },
            balance: 200,
            choices: [
              { text: { en: 'Hand over the phone and say the PIN out loud', tl: 'Ibigay ang phone at sabihin ang PIN nang malakas' }, next: 'a1' },
              { text: { en: 'Keep the phone, type the PIN yourself, and hand her the cash', tl: 'Panatilihin ang phone, ikaw mismo ang mag-type ng PIN, at ibigay sa kanya ang cash' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'She cashes out ₱200 correctly. But now she, and anyone near her at the time, has heard your PIN.', tl: 'Naka-cash out siya nang tama ng ₱200. Pero ngayon, siya at ang sinumang malapit sa kanya noon ay narinig ang PIN mo.' },
            balance: 0,
            choices: [
              { text: { en: 'Change your PIN that same night', tl: 'Palitan ang PIN mo nang gabing iyon din' }, next: 'a2' },
              { text: { en: 'Leave the PIN as is, since nothing went wrong this time', tl: 'Iwan na lang ang PIN, dahil walang nangyaring masama ngayon' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'You reset the PIN before bed. The account still works exactly the same, only now the old PIN is worthless to anyone who heard it.', tl: 'Nireset mo ang PIN bago matulog. Gumagana pa rin nang pareho ang account, pero wala nang silbi ang lumang PIN kahit kanino nakarinig.' },
            balance: 0,
            outcome: 'steady',
          },
          a3: {
            text: { en: 'Weeks later, ₱150 goes missing from the account on a day you never touched your phone. There is no way to prove who used the old PIN, because more than one person knows it.', tl: 'Ilang linggo pagkatapos, nawala ang ₱150 sa account sa isang araw na hindi mo man lang ginalaw ang phone. Walang paraan para patunayan kung sino ang gumamit ng lumang PIN, dahil higit sa isa na ang nakakaalam nito.' },
            balance: -150,
            outcome: 'costly',
          },
          b1: {
            text: { en: 'You keep the phone, type the PIN yourself, and hand her ₱200 cash. She gets home the same way, and the PIN stays known only to you.', tl: 'Pinanatili mo ang phone, ikaw mismo ang nag-type ng PIN, at binigyan mo siya ng ₱200 cash. Nakauwi pa rin siya, at ikaw lang pa rin ang nakakaalam ng PIN.' },
            balance: 0,
            choices: [
              { text: { en: 'Tell her gently that the PIN stays with you next time too', tl: 'Sabihin sa kanya nang mahinahon na sa iyo pa rin mananatili ang PIN sa susunod' }, next: 'b2' },
              { text: { en: 'Offer to just tell her the PIN next time, so it is faster', tl: 'Ialok na lang sabihin sa kanya ang PIN sa susunod, para mas mabilis' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'She understands, and next time she just asks you to cash out for her. The account works exactly as fast, and the PIN is still yours alone.', tl: 'Naiintindihan niya, at sa susunod, ikaw na lang ang hihilingin niyang mag-cash out para sa kanya. Kasing bilis pa rin gumana ang account, at sa iyo lang pa rin ang PIN.' },
            balance: 0,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'The next time she visits, she uses the PIN herself and cashes out ₱300, more than she asked to borrow. She meant to explain later, but the balance surprises you first.', tl: 'Sa susunod niyang pagbisita, ginamit niya mismo ang PIN at nag-cash out ng ₱300, mas malaki sa hiniram niya. Balak niya itong ipaliwanag mamaya, pero ang balance na mismo ang unang nagulat sa iyo.' },
            balance: -300,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'The PIN is the one thing in a first account you never hand over, not even to someone you trust.', tl: 'Ang PIN ang tanging bagay sa unang account na hindi mo ipinapaubaya, kahit pa sa taong pinagkakatiwalaan mo.' },
        action: null,
      },
    },
  ],
};

const online = {
  id: 'teens.online',
  title: { en: 'Online spending', tl: 'Online na gastos' },
  summary: { en: 'Games, loads, in-app purchases, and why pay-later apps wait until you are 18.', tl: 'Games, load, in-app purchases, at bakit naghihintay ang pay-later apps hanggang mag-18 ka.' },
  competency: { en: 'Can name the traps in online spending before tapping buy', tl: 'Kayang kilalanin ang patibong sa online na gastos bago mag-tap ng buy' },
  wish: 'safe',
  status: 'authored',
  bites: [
    {
      id: 'teens.online.1',
      title: { en: 'The wallet inside the game', tl: 'Ang wallet sa loob ng laro' },
      minutes: 2,
      hook: {
        text: { en: 'The game store shows 500 gems for ₱299. Checkout has no PIN, no confirmation, because a parent’s card is already saved.', tl: 'Nagpapakita ang game store ng 500 gems para sa ₱299. Walang PIN sa checkout, walang confirmation, dahil naka-save na ang card ng magulang.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'Gems, diamonds, and coins inside a game feel like game money, but they are bought with real pesos. When a card is already saved, one tap is all that stands between a want and a real charge.', tl: 'Ang gems, diamonds, o coins sa loob ng laro ay parang pera lang ng laro, pero binibili ito ng tunay na piso. Kapag naka-save na ang card, isang tap na lang ang pagitan ng gusto mo at ng totoong charge.' },
        points: [
          { en: 'In-game currency still spends real money, one level removed.', tl: 'Gumagastos pa rin ng totoong pera ang in-game currency, isang hakbang lang ang layo.' },
          { en: 'A saved card removes the one pause that used to make you think twice.', tl: 'Ang naka-save na card ang nag-aalis ng pagkakataong mag-isip nang dalawang beses.' },
        ],
        illo: 'phone',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'You want 500 gems for ₱299. Checkout does not ask for a PIN, since a parent’s card is already saved. What should you do first?', tl: 'Gusto mo ng 500 gems para sa ₱299. Walang hinihinging PIN ang checkout, dahil naka-save na ang card ng magulang. Ano ang unang gagawin mo?' },
        options: [
          { text: { en: 'Ask the parent whose card it is before buying', tl: 'Tanungin muna ang magulang na may-ari ng card bago bumili' }, correct: true, why: { en: 'A saved card is still their money. Asking first is the step checkout skipped.', tl: 'Pera pa rin nila ang naka-save na card. Ang pagtatanong muna ang hakbang na nilaktawan ng checkout.' } },
          { text: { en: 'Buy it now, since the card is already saved anyway', tl: 'Bilhin na, dahil naka-save na naman ang card' }, correct: false, why: { en: 'Saved does not mean approved for this purchase. It only means the typing was already done once.', tl: 'Ang naka-save ay hindi pareho ng aprubado para sa gastos na ito. Ibig lang sabihin nito ay nai-type na noon.' } },
          { text: { en: 'Buy it now and mention it to a parent later', tl: 'Bilhin na at sabihin na lang mamaya sa magulang' }, correct: false, why: { en: 'Telling them after the charge already happened removes their chance to say no.', tl: 'Kapag pagkatapos mo pa sabihin, nawala na ang pagkakataon nilang sabihing hindi.' } },
          { text: { en: 'Ask a friend to gift the gems instead, since that avoids the card', tl: 'Pakiusapan na lang ang kaibigan na mag-gift ng gems, para maiwasan ang card' }, correct: false, why: { en: 'A gift still costs the friend real money. It moves the same question to someone else’s parent.', tl: 'Totoong pera pa rin ang nagagastos ng kaibigan sa gift. Inililipat lang nito ang parehong tanong sa magulang ng iba.' } },
        ],
      },
      keep: {
        text: { en: 'A saved card removes a step for you, not the question of whether to ask first.', tl: 'Inaalis ng naka-save na card ang isang hakbang para sa iyo, pero hindi ang tanong kung magtatanong ka muna.' },
        action: null,
      },
    },
    {
      id: 'teens.online.2',
      title: { en: 'Sort the spend', tl: 'I-sort ang gastos' },
      minutes: 2,
      hook: {
        text: { en: 'Some game purchases stay useful for months. Others are gone the moment the event banner changes.', tl: 'May mga binibili sa laro na kapaki-pakinabang pa rin pagkalipas ng buwan. May iba namang nawawala sa sandaling magpalit ang event banner.' },
        illo: 'cart',
      },
      show: {
        text: { en: 'A permanent unlock keeps its value every time you open the game again. A limited-time boost or skin only pays off if you actually use it before the timer runs out.', tl: 'Ang permanenteng unlock ay nananatiling may halaga tuwing binubuksan mo ulit ang laro. Ang limited-time boost o skin ay may saysay lang kung nagamit mo ito bago matapos ang timer.' },
        points: [],
        illo: 'cart',
        animate: false,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each purchase. Left stays useful, right vanishes fast.', tl: 'I-sort ang bawat binili. Kaliwa ay kapaki-pakinabang pa rin, kanan ay mabilis mawala.' },
        left: { en: 'Stays useful', tl: 'Kapaki-pakinabang pa rin' },
        right: { en: 'Vanishes fast', tl: 'Mabilis mawala' },
        cards: [
          { text: { en: 'A permanent character unlock you can use anytime', tl: 'Permanenteng character unlock na puwede mong gamitin anumang oras' }, side: 'left', why: { en: 'It keeps working every time you log in, this month and next.', tl: 'Gumagana pa rin ito tuwing mag-log in ka, ngayong buwan at sa susunod.' } },
          { text: { en: 'A 24-hour double-XP boost bought while at school', tl: 'Isang 24-hour double-XP boost na binili habang nasa school' }, side: 'right', why: { en: 'If the 24 hours pass without much play time, the boost is gone unused.', tl: 'Kung lumipas ang 24 oras nang hindi gaanong nalaro, nawala ang boost na hindi nagamit.' } },
          { text: { en: 'Mobile load spent on calling home', tl: 'Load na ginastos sa pagtawag sa bahay' }, side: 'left', why: { en: 'Load spent on an actual call did exactly what it was bought for.', tl: 'Ginawa ng load na ginastos sa tawag ang eksaktong dahilan kung bakit ito binili.' } },
          { text: { en: 'A skin tied to a season that ends in two weeks', tl: 'Skin na naka-tali sa season na matatapos sa loob ng dalawang linggo' }, side: 'right', why: { en: 'Once the season ends, the skin often stops being visible to anyone else.', tl: 'Pagkatapos ng season, kadalasan hindi na ito nakikita ng iba.' } },
          { text: { en: 'A save-file cosmetic that stays on your account for good', tl: 'Cosmetic na permanenteng naka-save sa account mo' }, side: 'left', why: { en: 'Nothing about it expires, so the purchase keeps its value over time.', tl: 'Walang mag-e-expire dito, kaya nananatiling may halaga ang binili sa paglipas ng panahon.' } },
          { text: { en: 'A limited-time event currency left unused when the event closes', tl: 'Limited-time event currency na hindi nagamit bago magsara ang event' }, side: 'right', why: { en: 'Currency that cannot be spent after the event ends was money with a deadline.', tl: 'Ang currency na hindi na magagamit pagsara ng event ay perang may deadline.' } },
        ],
      },
      keep: {
        text: { en: 'Ask if it still has value next month. That question sorts most of the store for you.', tl: 'Itanong kung may halaga pa ito sa susunod na buwan. Ang tanong na iyon ang halos sasagot na para sa iyo sa buong store.' },
        action: null,
      },
    },
    {
      id: 'teens.online.3',
      title: { en: 'Ten small taps', tl: 'Sampung maliit na tap' },
      minutes: 2,
      hook: {
        text: { en: '₱20 for a small in-game buy does not feel like real spending. It feels like one tap.', tl: 'Ang ₱20 sa maliit na in-game na binili ay hindi parang totoong paggasta. Parang isang tap lang.' },
        illo: 'spiral',
      },
      show: {
        text: { en: 'A small in-game buy repeats almost every day, unlike a school-day-only spend. Multiply it by the days in a month to see its real size.', tl: 'Umuulit ang maliit na in-game na gastos halos araw-araw, hindi lang tuwing araw ng pasok. I-multiply ito sa bilang ng araw sa isang buwan para makita ang tunay na laki nito.' },
        points: [
          { en: '30 days in a typical month, not just school days.', tl: '30 araw sa karaniwang buwan, hindi lang araw ng pasok.' },
        ],
        illo: 'spiral',
        animate: true,
      },
      do: {
        type: 'number',
        prompt: { en: 'You spend ₱20 almost every day on a small in-game buy, 30 days in the month. How much is that in total?', tl: 'Gumagastos ka ng ₱20 halos araw-araw sa maliit na in-game na binili, 30 araw sa buwan. Magkano ang kabuuan nito?' },
        answer: 600,
        tolerance: 0,
        format: 'peso',
        worked: { en: '₱20 × 30 = ₱600. Ten small taps a week add up to more than most single purchases in the store.', tl: '₱20 × 30 = ₱600. Ang sampung maliit na tap kada linggo ay mas malaki pa sa karamihan ng iisang binibili sa store.' },
      },
      keep: {
        text: { en: 'A tap that costs ₱20 is never just ₱20 once you count the days.', tl: 'Ang tap na ₱20 ay hindi na ₱20 lang kapag binilang mo ang mga araw.' },
        action: null,
      },
    },
    {
      id: 'teens.online.4',
      title: { en: 'Why pay-later waits for eighteen', tl: 'Bakit naghihintay ng eighteen ang pay-later' },
      minutes: 2,
      hook: {
        text: { en: 'A "Pay in 4" button appears at checkout for a ₱1,200 skin bundle. It only asks for a birthdate.', tl: 'May lumalabas na "Pay in 4" button sa checkout para sa ₱1,200 skin bundle. Petsa ng kapanganakan lang ang hinihingi nito.' },
        illo: 'card',
      },
      show: {
        text: { en: '"Pay later" is a loan, and a loan is a contract. Signing a contract legally needs age 18. A checkout form that accepts a birthdate does not change what the law requires.', tl: 'Utang ang "pay later", at kontrata ang utang. Ang pagpirma sa kontrata ay legal na nangangailangan ng edad 18. Ang checkout form na tumatanggap ng birthdate ay hindi nagbabago sa kinakailangan ng batas.' },
        points: [
          { en: 'A form accepting your birthdate is not the same as the law accepting it.', tl: 'Ang form na tumatanggap ng birthdate mo ay hindi pareho ng batas na tumatanggap nito.' },
        ],
        illo: 'card',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'A "Pay in 4" option appears for a ₱1,200 bundle, asking only for your birthdate. What is true?', tl: 'May lumabas na "Pay in 4" para sa ₱1,200 bundle, birthdate lang ang hinihingi. Ano ang totoo?' },
        options: [
          { text: { en: 'Signing a payment plan needs age 18, no matter what the checkout form accepts', tl: 'Ang pagpirma sa payment plan ay nangangailangan ng edad 18, kahit ano ang tanggapin ng checkout form' }, correct: true, why: { en: 'The form accepting a birthdate does not make signing legal before 18.', tl: 'Ang pagtanggap ng form ng birthdate ay hindi nagpapalegal sa pagpirma bago mag-18.' } },
          { text: { en: 'It is fine as long as the amount is small', tl: 'Okay lang basta maliit ang halaga' }, correct: false, why: { en: 'Age is the requirement, not the size of the purchase.', tl: 'Edad ang kailangan, hindi ang laki ng binibili.' } },
          { text: { en: 'It is fine as long as it gets paid back fast', tl: 'Okay lang basta mabilis mabayaran' }, correct: false, why: { en: 'How fast it is repaid does not change who is legally allowed to sign it.', tl: 'Ang bilis ng pagbabayad ay hindi nagbabago kung sino ang legal na puwedeng pumirma.' } },
          { text: { en: 'A parent’s permission by chat message makes it allowed', tl: 'Ang pahintulot ng magulang sa chat message ang gumagawang allowed' }, correct: false, why: { en: 'The contract is between the app and whoever is 18. A message does not change who is signing it.', tl: 'Ang kontrata ay sa pagitan ng app at ng sinumang 18 na. Hindi nagbabago sa mensahe kung sino ang pumipirma.' } },
        ],
      },
      keep: {
        text: { en: 'A checkout form is not the law. Pay-later waits for eighteen either way.', tl: 'Hindi batas ang checkout form. Naghihintay pa rin ng eighteen ang pay-later.' },
        action: null,
      },
    },
    {
      id: 'teens.online.5',
      title: { en: 'Before you tap buy', tl: 'Bago mag-tap ng buy' },
      minutes: 2,
      hook: {
        text: { en: 'The buy button is one tap away. The five checks that should come before it usually take less time than the purchase itself.', tl: 'Isang tap na lang ang layo ng buy button. Ang limang beses na pagche-check bago rito ay mas mabilis pa kaysa sa mismong bili.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'A short order, run the same way every time, catches most of what a countdown timer or a saved card is counting on you to skip.', tl: 'Ang maikling pagkakasunod, ginagawa nang pareho tuwing beses, ang siyang sumasagip sa karamihang gustong lampasan ng countdown timer o naka-save na card.' },
        points: [],
        illo: 'shield',
        animate: false,
      },
      do: {
        type: 'order',
        prompt: { en: 'Put the steps in order.', tl: 'Ayusin ang mga hakbang.' },
        steps: [
          { en: 'Check the price in pesos, not just in gems or diamonds', tl: 'Tingnan ang presyo sa piso, hindi lang sa gems o diamonds' },
          { en: 'Check if a parent’s card or number is linked to this purchase', tl: 'Tingnan kung naka-link ang card o number ng magulang sa binibiling ito' },
          { en: 'Wait if the urge came from a limited-time countdown', tl: 'Maghintay kung galing sa limited-time countdown ang pagkagusto' },
          { en: 'Confirm the purchase with a parent before paying', tl: 'I-confirm sa magulang ang binibili bago magbayad' },
          { en: 'Keep the receipt or confirmation screen', tl: 'Itago ang resibo o confirmation screen' },
        ],
        why: { en: 'Checking the peso price first is what stops gems and diamonds from hiding how much the purchase really costs.', tl: 'Ang pagtingin muna sa presyo sa piso ang pumipigil sa gems at diamonds na itago kung magkano talaga ang gastos.' },
      },
      keep: {
        text: { en: 'A countdown timer wants a fast tap. A short checklist takes the same time either way.', tl: 'Gusto ng countdown timer ng mabilis na tap. Ang maikling checklist ay kasing bilis din naman gawin.' },
        action: null,
      },
    },
    {
      id: 'teens.online.6',
      title: { en: 'The bundle that disappears at midnight', tl: 'Ang bundle na mawawala sa hatinggabi' },
      minutes: 4,
      hook: {
        text: { en: 'A countdown shows "Offer ends in 10 minutes": 3,000 gems for ₱500, using your mom’s saved card.', tl: 'May countdown na nagsasabing "Offer ends in 10 minutes": 3,000 gems para sa ₱500, gamit ang naka-save na card ng mama mo.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'Everything from this lesson meets one countdown. What you do in the next ten minutes is the whole lesson.', tl: 'Lahat ng natutunan sa araling ito ay makakaharap sa isang countdown. Ang gagawin mo sa susunod na sampung minuto ang buong aralin.' },
        points: [],
        illo: 'phone',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'The countdown shows 10 minutes left: 3,000 gems for ₱500, on your mom’s saved card.', tl: 'Sampung minuto na lang ang countdown: 3,000 gems para sa ₱500, sa naka-save na card ng mama mo.' },
            balance: 500,
            choices: [
              { text: { en: 'Tap buy now, before the timer runs out', tl: 'I-tap na ang buy, bago matapos ang timer' }, next: 'a1' },
              { text: { en: 'Message your mom first, even if the offer might end', tl: 'I-message muna ang mama mo, kahit matapos man ang offer' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'You buy the 3,000 gems. That night your mom sees a ₱500 charge she did not make herself.', tl: 'Nabili mo ang 3,000 gems. Kinagabihan, nakita ng mama mo ang ₱500 charge na hindi niya ginawa.' },
            balance: 500,
            choices: [
              { text: { en: 'Tell her yourself before she asks', tl: 'Sabihin mo mismo bago pa siya magtanong' }, next: 'a2' },
              { text: { en: 'Wait and see if she notices on her own', tl: 'Hintayin na lang kung mapapansin niya mismo' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'You explain right away. She reviews the game’s payment settings with you, and purchases now ask for her approval first.', tl: 'Ipinaliwanag mo agad. Sinuri ninyo ang payment settings ng laro, at ngayon, humihingi na ng approval niya muna ang bawat binibili.' },
            balance: 500,
            outcome: 'steady',
          },
          a3: {
            text: { en: 'She asks about the charge three days later. By then two more countdown offers already went through the same way, ₱1,000 more.', tl: 'Tinanong niya ang charge pagkalipas ng tatlong araw. Sa oras na iyon, dalawa pang countdown offer ang naipasok na sa parehong paraan, ₱1,000 pa.' },
            balance: 1500,
            outcome: 'costly',
          },
          b1: {
            text: { en: 'You message her. The countdown ends before she replies.', tl: 'Na-message mo siya. Natapos ang countdown bago pa siya nakasagot.' },
            balance: 0,
            choices: [
              { text: { en: 'Let the offer expire, and ask again if a similar one returns', tl: 'Hayaang mag-expire ang offer, at magtanong na lang ulit kung may bumalik na kagaya nito' }, next: 'b2' },
              { text: { en: 'Buy anyway once she is online, without waiting for her actual answer', tl: 'Bilhin pa rin sa sandaling naka-online na siya, kahit wala pang sagot' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'The offer is gone, but a similar one returns the next week. This time she replies in time, and you buy it together, once.', tl: 'Nawala ang offer, pero may bumalik na kagaya nito sa susunod na linggo. Sa pagkakataong ito, sumagot siya sa tamang oras, at sabay ninyong binili ito, minsan lang.' },
            balance: 500,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'She sees your message after the purchase already went through, and asks why you did not wait for her actual reply.', tl: 'Nakita niya ang message mo pagkatapos na mismong maipasok ang bili, at tinanong kung bakit hindi mo hinintay ang totoong sagot niya.' },
            balance: 500,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'A countdown timer is built to skip the one step that protects you: waiting for a real yes.', tl: 'Ang countdown timer ay ginawa para lampasan ang isang hakbang na proteksyon mo: ang paghihintay ng totoong oo.' },
        action: null,
      },
    },
  ],
};

const friends = {
  id: 'teens.friends',
  title: { en: 'Friends and money', tl: 'Kaibigan at pera' },
  summary: { en: 'Savings circle among classmates, lending to friends, and splitting a bill fairly.', tl: 'Paluwagan ng mga kaklase, pagpapahiram sa kaibigan, at patas na paghahati ng bill.' },
  competency: { en: 'Can lend, borrow, and split with a friendship intact', tl: 'Kayang magpahiram, manghiram, at maghati nang buo pa rin ang pagkakaibigan' },
  wish: 'rid',
  status: 'authored',
  bites: [
    {
      id: 'teens.friends.1',
      title: { en: 'What a savings circle actually is', tl: 'Ano talaga ang paluwagan' },
      minutes: 2,
      hook: {
        text: { en: 'Five classmates each put in ₱100 a week. Every week, one of them takes home the full ₱500 pot.', tl: 'Limang kaklase, tig-₱100 kada linggo. Tuwing linggo, may isang kukuha ng buong ₱500 na pot.' },
        illo: 'jars',
      },
      show: {
        text: { en: 'A savings circle rotates a shared pot among its members, one collector a week, until everyone has had a turn. Whoever collects early has borrowed from the group. Whoever collects last has lent to everyone else the whole time.', tl: 'Umiikot ang paluwagan, isang kukuha kada linggo, hanggang sa lahat ay nakakuha na. Ang unang kumuha ay parang humiram sa grupo. Ang huling kumuha ay parang nagpahiram sa lahat sa buong panahon.' },
        points: [
          { en: 'Collecting early means you owe the group your future payments.', tl: 'Ang maagang pagkuha ay parang may utang ka pa sa grupo na babayaran sa hinaharap.' },
          { en: 'Collecting last means the group has owed you the whole time.', tl: 'Ang huling pagkuha ay parang may utang sa iyo ang grupo sa buong panahon.' },
        ],
        illo: 'jars',
        animate: true,
      },
      do: {
        type: 'choice',
        prompt: { en: 'In a 5-person savings circle of ₱100 a week, you are picked to collect last, in week 5. What does that mean for you compared to the others?', tl: 'Sa 5-person na paluwagan na ₱100 kada linggo, ikaw ang huling kukuha, sa week 5. Ano ang ibig sabihin nito para sa iyo kumpara sa iba?' },
        options: [
          { text: { en: 'You are effectively lending your share to everyone who collected earlier', tl: 'Parang nagpapahiram ka ng share mo sa lahat ng unang nakakuha' }, correct: true, why: { en: 'Your ₱100 each week went to someone else first. You only get the group’s share back at the very end.', tl: 'Napunta muna sa iba ang ₱100 mo tuwing linggo. Sa pinakahuli ka lang makakakuha ng share ng grupo.' } },
          { text: { en: 'You get exactly the same deal as whoever collected in week 1', tl: 'Pareho lang ng deal mo sa nakakuha sa week 1' }, correct: false, why: { en: 'Week 1’s collector received the pot immediately. You wait four extra weeks for the same amount.', tl: 'Agad nakuha ng nakakuha sa week 1 ang pot. Ikaw naman, apat na linggo pang hihintayin bago makuha ang parehong halaga.' } },
          { text: { en: 'You end up paying more into the pot than anyone else', tl: 'Sa huli, mas malaki ang binabayad mo sa pot kaysa kaninuman' }, correct: false, why: { en: 'Everyone pays the same ₱100 each week. Only the timing of collecting the pot differs.', tl: 'Pareho ang bayad ng lahat, ₱100 kada linggo. Ang oras lang ng pagkuha ng pot ang naiiba.' } },
        ],
      },
      keep: {
        text: { en: 'A savings circle is fair only if everyone actually pays every round, on time.', tl: 'Patas lang ang paluwagan kung talagang nagbabayad ang lahat tuwing round, sa oras.' },
        action: null,
      },
    },
    {
      id: 'teens.friends.2',
      title: { en: 'Lend or not, this time', tl: 'Magpahiram ba o hindi, ngayon' },
      minutes: 2,
      hook: {
        text: { en: 'Someone always asks eventually. The amount and the reason are not always the same kind of ask.', tl: 'May humihiram lang talaga paminsan-minsan. Hindi pareho ang bigat ng bawat hiling, depende sa halaga at dahilan.' },
        illo: 'hand',
      },
      show: {
        text: { en: 'A small amount, a clear reason, and a specific date to return it are what make lending manageable. A large amount, a vague reason, or no return date at all are what turn a favor into a risk.', tl: 'Ang maliit na halaga, malinaw na dahilan, at tiyak na araw ng pagbabalik ang gumagawang kaya ang pagpapahiram. Ang malaking halaga, malabo na dahilan, o walang petsa ng pagbabalik ang gumagawang risk sa isang pabor.' },
        points: [],
        illo: 'hand',
        animate: false,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each ask. Left is reasonable to lend, right is a warning sign.', tl: 'I-sort ang bawat hiling. Kaliwa ay makatwirang pahiramin, kanan ay babala.' },
        left: { en: 'Reasonable', tl: 'Makatwiran' },
        right: { en: 'Warning', tl: 'Babala' },
        cards: [
          { text: { en: 'A close friend borrows ₱50 for jeepney fare, pays back on payday', tl: 'Humihiram ang matalik na kaibigan ng ₱50 para sa pamasahe, babayaran sa payday' }, side: 'left', why: { en: 'Small amount, clear reason, and a specific date to return it.', tl: 'Maliit na halaga, malinaw na dahilan, at tiyak na araw ng pagbabalik.' } },
          { text: { en: 'A classmate you barely talk to asks for ₱300 for "something urgent"', tl: 'May kaklaseng bihira mong kausap, humihiram ng ₱300 para sa "urgent na bagay"' }, side: 'right', why: { en: 'A vague reason from someone you barely know is the exact combination that is hard to follow up on.', tl: 'Ang malabong dahilan mula sa hindi mo gaanong kilala ang pinakamahirap habulin.' } },
          { text: { en: 'A friend asks to borrow an amount you actually have to spare this week', tl: 'Humihiram ang kaibigan ng halagang kaya mong ipagbigay ngayong linggo' }, side: 'left', why: { en: 'Lending only what you can afford to lose keeps the favor from becoming your own problem.', tl: 'Ang pagpapahiram lang ng kaya mong iwan ang pumipigil sa pabor na maging sarili mong problema.' } },
          { text: { en: 'A friend asks to borrow with no mention of when it comes back', tl: 'Humihiram ang kaibigan nang hindi binabanggit kung kailan ibabalik' }, side: 'right', why: { en: 'Without a date, "later" can quietly become "never".', tl: 'Kung walang petsa, puwedeng tahimik na maging "hindi na" ang "mamaya".' } },
          { text: { en: 'A friend asks to borrow more than your whole week’s allowance', tl: 'Humihiram ang kaibigan ng mas malaki sa buong linggo mong baon' }, side: 'right', why: { en: 'Lending more than you have to spare puts your own week at risk, not just theirs.', tl: 'Ang pagpapahiram ng higit sa kaya mong iwan ay nanganganib din sa sarili mong linggo, hindi lang sa kanya.' } },
          { text: { en: 'A friend who has paid back on time before asks again for the same small amount', tl: 'Humihiram muli ang kaibigang laging nagbabayad sa oras, kaparehong maliit na halaga' }, side: 'left', why: { en: 'A track record of paying back on time is real evidence, not just a feeling.', tl: 'Ang record ng pagbabayad sa oras ay tunay na patunay, hindi lang pakiramdam.' } },
        ],
      },
      keep: {
        text: { en: 'Lend what you can afford to lose, to someone with a reason and a date.', tl: 'Ipahiram lang ang kaya mong iwan, sa taong may dahilan at may petsa ng pagbabalik.' },
        action: null,
      },
    },
    {
      id: 'teens.friends.3',
      title: { en: 'Splitting the bill down to the peso', tl: 'Paghahati ng bill hanggang piso' },
      minutes: 3,
      hook: {
        text: { en: 'Four of you share a canteen bill. One of you also got a dessert the rest did not touch.', tl: 'Apat kayong naghati sa bill sa canteen. Isa sa inyo ay may dessert na hindi nagalaw ng iba.' },
        illo: 'scale',
      },
      show: {
        text: { en: 'A fair split separates what everyone shared from what only one person ordered. Split the shared part evenly, then add back what each person ordered alone.', tl: 'Ang patas na hati ay hinihiwalay ang shinare ng lahat sa ininorder ng iisang tao lamang. Hatiin nang pantay ang shinare, tapos idagdag ang inorder ng bawat isa na sarili niya lang.' },
        points: [],
        illo: 'scale',
        animate: true,
      },
      do: {
        type: 'number',
        prompt: { en: 'The bill is ₱600. One friend also ordered a ₱120 dessert that only she ate. Splitting only what everyone shared four ways, then adding her dessert, how much does she owe in total?', tl: 'Ang bill ay ₱600. May kaibigang nag-order din ng ₱120 dessert na siya lang ang kumain. Kung hahatiin lang sa apat ang shinare ng lahat, tapos idadagdag ang dessert niya, magkano ang total na utang niya?' },
        answer: 240,
        tolerance: 0,
        format: 'peso',
        worked: { en: 'Shared part: ₱600 − ₱120 = ₱480. Split four ways: ₱480 ÷ 4 = ₱120 each. She pays her ₱120 share plus her ₱120 dessert: ₱240 total.', tl: 'Shinare: ₱600 − ₱120 = ₱480. Hatiin sa apat: ₱480 ÷ 4 = ₱120 bawat isa. Babayaran niya ang ₱120 share niya kasama ang ₱120 dessert: ₱240 lahat-lahat.' },
      },
      keep: {
        text: { en: 'Split what was shared. Add back what was not.', tl: 'Hatiin ang shinare. Idagdag ang hindi shinare.' },
        action: null,
      },
    },
    {
      id: 'teens.friends.4',
      title: { en: 'When a friend does not pay back', tl: 'Kapag hindi nagbayad ang kaibigan' },
      minutes: 2,
      hook: {
        text: { en: 'It has been three weeks since you lent ₱200. Neither of you has mentioned it since.', tl: 'Tatlong linggo na mula nang pinahiram mo ang ₱200. Wala pa ring nagbanggit nito mula noon.' },
        illo: 'hand',
      },
      show: {
        text: { en: 'Silence does not make an unpaid loan go away. A direct, private, and kind reminder is what actually resolves it, before it grows into resentment on either side.', tl: 'Hindi nawawala ang hindi pa bayad na utang kahit walang nagsasabi. Ang direktang, private, at magalang na paalala ang talagang nagsasara nito, bago pa ito maging sama ng loob sa alinman sa dalawa.' },
        points: [],
        illo: 'hand',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'Three weeks after lending ₱200, your friend still has not paid it back. What is the best next move?', tl: 'Tatlong linggo matapos magpahiram ng ₱200, hindi pa rin nagbabayad ang kaibigan mo. Ano ang pinakamainam na susunod na gawin?' },
        options: [
          { text: { en: 'Bring it up privately and kindly, and ask what date works for her', tl: 'Sabihin nang private at magalang, at itanong kung anong petsa ang kaya niya' }, correct: true, why: { en: 'A direct, private reminder gives her a chance to plan the payback without embarrassment.', tl: 'Ang direktang, private na paalala ay nagbibigay sa kanya ng pagkakataong magplano ng pagbabayad nang walang hiya.' } },
          { text: { en: 'Say nothing and quietly stop talking to her as much', tl: 'Manahimik na lang at unti-unting umiwas makipag-usap sa kanya' }, correct: false, why: { en: 'Withdrawing without saying why leaves both the money and the friendship unresolved.', tl: 'Ang pag-iwas nang walang paliwanag ay iniiwan pareho ang pera at ang pagkakaibigan na hindi malutas.' } },
          { text: { en: 'Bring it up in front of your other friends so she feels pressured', tl: 'Sabihin sa harap ng ibang kaibigan para maramdaman niyang pressured' }, correct: false, why: { en: 'Public pressure can settle the debt while damaging the friendship far more than the ₱200 was worth.', tl: 'Puwedeng maayos ang utang sa public pressure, pero mas malaki ang masisirang pagkakaibigan kaysa sa halaga ng ₱200.' } },
          { text: { en: 'Lend her more, hoping she repays both amounts together', tl: 'Magpahiram pa ulit, umaasang babayaran niya ang dalawang halaga nang sabay' }, correct: false, why: { en: 'A second loan does not make the first one more likely to be repaid.', tl: 'Ang ikalawang utang ay hindi gumagawang mas malamang na mabayaran ang una.' } },
        ],
      },
      keep: {
        text: { en: 'Ask directly, in private, and kindly. That is not rude. That is fair to both of you.', tl: 'Magtanong nang diretso, private, at magalang. Hindi ito bastos. Patas ito sa inyong dalawa.' },
        action: null,
      },
    },
    {
      id: 'teens.friends.5',
      title: { en: 'Rules that keep a savings circle fair', tl: 'Mga patakarang nagpapanatiling patas sa paluwagan' },
      minutes: 2,
      hook: {
        text: { en: 'A savings circle among five classmates only stays fair if everyone agrees on the rules before the first peso goes in.', tl: 'Ang paluwagan ng limang kaklase ay mananatiling patas lang kung sang-ayon ang lahat sa patakaran bago pa man pumasok ang unang piso.' },
        illo: 'jars',
      },
      show: {
        text: { en: 'The order of collecting, the amount, and what happens if someone misses a payment all need to be settled first, in writing, where every member can see it.', tl: 'Ang pagkakasunod ng pagkuha, ang halaga, at ang mangyayari kung may hindi nakabayad ay kailangang maayos muna, nakasulat, at nakikita ng lahat ng miyembro.' },
        points: [],
        illo: 'jars',
        animate: false,
      },
      do: {
        type: 'order',
        prompt: { en: 'Put the steps in order.', tl: 'Ayusin ang mga hakbang.' },
        steps: [
          { en: 'Agree the amount and the schedule before the first round', tl: 'Pagkasunduan ang halaga at schedule bago ang unang round' },
          { en: 'Write down who collects on which week', tl: 'Isulat kung sino ang kukuha sa aling linggo' },
          { en: 'Everyone pays before the pot moves, no exceptions', tl: 'Magbayad muna ang lahat bago ilipat ang pot, walang exception' },
          { en: 'Agree what happens if someone misses a payment', tl: 'Pagkasunduan ang mangyayari kung may hindi nakabayad' },
          { en: 'Keep the list where every member can see it', tl: 'Itago ang listahan kung saan makikita ito ng lahat ng miyembro' },
        ],
        why: { en: 'Agreeing the amount and schedule first is what every later rule builds on. Without it, "who collects when" has nothing to refer back to.', tl: 'Ang pagkasundo muna sa halaga at schedule ang pinagbabatayan ng lahat ng susunod na patakaran. Kung wala nito, walang mababalikan ang "sino ang kukuha kailan".' },
      },
      keep: {
        text: { en: 'A savings circle runs on trust, but trust works better written down.', tl: 'Umaandar ang paluwagan sa tiwala, pero mas maayos ang tiwala kapag nakasulat.' },
        action: null,
      },
    },
    {
      id: 'teens.friends.6',
      title: { en: 'Saying no without losing the friend', tl: 'Pagsasabi ng hindi nang hindi nawawala ang kaibigan' },
      minutes: 4,
      hook: {
        text: { en: 'A friend you like asks to borrow ₱250 until Friday. Your own allowance this week is already tight.', tl: 'May kaibigang gusto mo, humihiram ng ₱250 hanggang Biyernes. Masikip na ang baon mo ngayong linggo.' },
        illo: 'hand',
      },
      show: {
        text: { en: 'Everything from this lesson meets one ask. What you say in the next minute is the whole lesson.', tl: 'Lahat ng natutunan sa araling ito ay makakaharap sa isang hiling. Ang sasabihin mo sa susunod na isang minuto ang buong aralin.' },
        points: [],
        illo: 'hand',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'A friend you like asks to borrow ₱250 until Friday. Your own allowance this week is already tight.', tl: 'May kaibigang gusto mo, humihiram ng ₱250 hanggang Biyernes. Masikip na ang baon mo ngayong linggo.' },
            balance: 250,
            choices: [
              { text: { en: 'Say yes anyway, so as not to disappoint her', tl: 'Sabihing oo pa rin, para hindi siya madisappoint' }, next: 'a1' },
              { text: { en: 'Say no for now, and offer to help another way', tl: 'Sabihing hindi muna, at mag-alok ng ibang paraan ng tulong' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'You lend the ₱250. By Thursday your own canteen money runs out, and you have not mentioned it to her.', tl: 'Naipahiram mo ang ₱250. Pagdating ng Huwebes, naubos na ang sarili mong canteen money, at hindi mo pa siya nasabihan.' },
            balance: 0,
            choices: [
              { text: { en: 'Ask her directly for the ₱250 back', tl: 'Diretsong hingin sa kanya ang ₱250 pabalik' }, next: 'a2' },
              { text: { en: 'Say nothing and hope she remembers on her own', tl: 'Manahimik na lang at umasang maalala niya rin' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'She apologizes and pays you back that afternoon. The friendship holds, and next time you both agree on an amount first.', tl: 'Humingi siya ng paumanhin at binayaran ka nang hapong iyon. Buo pa rin ang pagkakaibigan, at sa susunod, pinag-uusapan muna ninyo ang halaga.' },
            balance: 250,
            outcome: 'steady',
          },
          a3: {
            text: { en: 'Two weeks pass. She never brings it up, and you never ask again. The ₱250 is gone, and so is the ease you used to have around money with her.', tl: 'Dalawang linggong lumipas. Hindi na niya binanggit, at hindi mo na rin muling hiningi. Nawala ang ₱250, at nawala rin ang ginhawa na dati ninyong pakiramdam tungkol sa pera.' },
            balance: 0,
            outcome: 'costly',
          },
          b1: {
            text: { en: 'You tell her honestly that this week you cannot spare it, but offer to split your allowance for lunch instead.', tl: 'Sinabi mo nang tapat na hindi mo kaya ngayong linggo, pero inalok mong hatiin na lang ang baon mo para sa lunch.' },
            balance: 250,
            choices: [
              { text: { en: 'She accepts, and lunch works out for both of you', tl: 'Tinanggap niya, at naging okay ang lunch para sa inyong dalawa' }, next: 'b2' },
              { text: { en: 'She seems hurt at first, and you are unsure how she will react', tl: 'Parang nasaktan siya sa umpisa, at hindi mo sigurado kung paano siya rereact' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'She takes you up on splitting lunch. By Friday, she is teasing you about the same things as always.', tl: 'Sumang-ayon siya sa paghahati ng lunch. Pagdating ng Biyernes, nagbibiro na siya ulit tulad ng dati.' },
            balance: 250,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'She stays quiet through lunch, then messages that night to say she gets it, and asks if you want to split a snack tomorrow instead.', tl: 'Tahimik siya sa buong lunch, tapos nag-message nang gabing iyon na naiintindihan niya, at tinanong kung gusto mong maghati na lang ng snack bukas.' },
            balance: 250,
            outcome: 'steady',
          },
        },
      },
      keep: {
        text: { en: 'Saying no to a peso amount is not the same as saying no to the friendship.', tl: 'Ang pagsabi ng hindi sa isang halaga ay hindi pagsabi ng hindi sa pagkakaibigan.' },
        action: null,
      },
    },
  ],
};

const firstjob = {
  id: 'teens.firstjob',
  title: { en: 'First job', tl: 'Unang trabaho' },
  summary: { en: 'Part-time and summer work, the working permit for minors, minimum wage, and being paid on time.', tl: 'Part-time at summer work, working permit para sa menor de edad, minimum wage, at pagbabayad sa tamang oras.' },
  competency: { en: 'Can check that a first job pays what the law requires', tl: 'Kayang tingnan kung binabayaran ng trabaho ang dapat ayon sa batas' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'teens.firstjob.1',
      title: { en: 'Can you legally work at fifteen', tl: 'Puwede ka bang magtrabaho nang legal sa fifteen' },
      minutes: 2,
      hook: {
        text: { en: 'Your group chat is planning summer jobs. Someone says you have to wait until eighteen to work at all.', tl: 'Nagpaplano ang group chat ninyo ng summer job. May nagsabing kailangan mo munang mag-18 bago makapagtrabaho.' },
        illo: 'certificate',
      },
      show: {
        text: { en: 'Under RA 9231, children below 15 may work only for family or in entertainment with a DOLE permit. From 15 to 17, work is allowed in non-hazardous jobs, at most 8 hours a day and 40 a week, never between 10 pm and 6 am.', tl: 'Sa ilalim ng RA 9231, ang mga batang wala pang 15 ay puwede lang magtrabaho para sa pamilya o sa entertainment na may DOLE permit. Mula 15 hanggang 17, puwedeng magtrabaho sa hindi mapanganib na trabaho, hanggang 8 oras kada araw at 40 kada linggo, hindi kailanman sa pagitan ng 10 ng gabi at 6 ng umaga.' },
        points: [
          { en: 'Below 15: family work or entertainment with a DOLE permit only.', tl: 'Wala pang 15: trabaho lang sa pamilya o entertainment na may DOLE permit.' },
          { en: '15 to 17: non-hazardous work, at most 8 hours a day, 40 a week.', tl: '15 hanggang 17: hindi mapanganib na trabaho, hanggang 8 oras kada araw, 40 kada linggo.' },
        ],
        illo: 'certificate',
        animate: true,
      },
      do: {
        type: 'choice',
        prompt: { en: 'You are 15 and want a part-time summer job at a bookstore. Which of these is true under Philippine law?', tl: 'Ikaw ay 15 at gustong magtrabaho nang part-time sa isang bookstore ngayong summer. Alin dito ang totoo ayon sa batas ng Pilipinas?' },
        options: [
          { text: { en: 'You may work non-hazardous hours, at most 8 hours a day and 40 a week, never between 10 pm and 6 am', tl: 'Puwede kang magtrabaho sa hindi mapanganib na oras, hanggang 8 oras kada araw at 40 kada linggo, hindi kailanman sa pagitan ng 10 ng gabi at 6 ng umaga' }, correct: true, why: { en: 'This is exactly what RA 9231 allows for ages 15 to 17.', tl: 'Ito mismo ang pinapayagan ng RA 9231 para sa edad 15 hanggang 17.' } },
          { text: { en: 'You must wait until 18 to work at all', tl: 'Kailangan mong maghintay ng 18 bago makapagtrabaho' }, correct: false, why: { en: 'The law already allows non-hazardous work from age 15, with limits on hours.', tl: 'Pinapayagan na ng batas ang hindi mapanganib na trabaho mula edad 15, may limitasyon sa oras.' } },
          { text: { en: 'You can work any hours as long as your parents agree', tl: 'Puwede kang magtrabaho kahit anong oras basta pumayag ang magulang mo' }, correct: false, why: { en: 'Parental consent does not override the hour limits and the 10 pm to 6 am restriction.', tl: 'Ang pahintulot ng magulang ay hindi nagpapawalang-bisa sa limitasyon ng oras at sa bawal na 10 ng gabi hanggang 6 ng umaga.' } },
          { text: { en: 'Only entertainment jobs are allowed before 18', tl: 'Entertainment job lang ang pinapayagan bago mag-18' }, correct: false, why: { en: 'That rule applies below age 15. From 15 to 17, non-hazardous work of any kind is allowed within the hour limits.', tl: 'Para iyon sa wala pang 15. Mula 15 hanggang 17, pinapayagan ang kahit anong hindi mapanganib na trabaho sa loob ng limitasyon ng oras.' } },
        ],
      },
      keep: {
        text: { en: 'At 15, work is legal. What is limited is the kind of job and the hours, not whether you can work.', tl: 'Sa edad 15, legal na magtrabaho. Ang klase ng trabaho at ang oras ang may limitasyon, hindi ang puwede ka bang magtrabaho.' },
        action: null,
      },
    },
    {
      id: 'teens.firstjob.2',
      title: { en: 'What a working permit needs', tl: 'Ano ang kailangan sa working permit' },
      minutes: 3,
      hook: {
        text: { en: 'A bookstore says yes to hiring you for the summer. Before your first shift, a few things need to be in place.', tl: 'Pumayag ang bookstore na kunin ka para sa summer. Bago ang unang shift mo, may mga kailangan munang maayos.' },
        illo: 'certificate',
      },
      show: {
        text: { en: 'A minor employee needs a parent or guardian’s consent, proof of age, and a DOLE work permit, before the employer can legally schedule the first shift.', tl: 'Kailangan ng menor de edad na empleyado ang pahintulot ng magulang o guardian, patunay ng edad, at DOLE work permit, bago legal na maiskedyul ng employer ang unang shift.' },
        points: [],
        illo: 'certificate',
        animate: false,
      },
      do: {
        type: 'order',
        prompt: { en: 'Put the steps in order.', tl: 'Ayusin ang mga hakbang.' },
        steps: [
          { en: 'Get a parent or guardian’s written consent', tl: 'Kumuha ng nakasulat na pahintulot ng magulang o guardian' },
          { en: 'Bring proof of age, like a birth certificate', tl: 'Dalhin ang patunay ng edad, gaya ng birth certificate' },
          { en: 'Secure a DOLE work permit for a minor employee', tl: 'Kumuha ng DOLE work permit para sa menor de edad na empleyado' },
          { en: 'Confirm the employer agrees to the hour limits for minors', tl: 'I-confirm na sumasang-ayon ang employer sa limitasyon ng oras para sa menor de edad' },
          { en: 'Keep a copy of the permit for yourself, not only the employer', tl: 'Magtago ng sariling kopya ng permit, hindi lang ang sa employer' },
        ],
        why: { en: 'Consent comes first because everything after it, the permit included, is processed on behalf of a minor who cannot sign for themselves yet.', tl: 'Mauuna ang pahintulot dahil lahat ng susunod, kasama ang permit, ay pinoproseso para sa menor de edad na hindi pa puwedeng pumirma para sa sarili.' },
      },
      keep: {
        text: { en: 'The permit protects you. Keep your own copy, not just the one the employer holds.', tl: 'Ang permit ay proteksyon mo. Magtago ng sariling kopya, hindi lang ang hawak ng employer.' },
        action: null,
      },
    },
    {
      id: 'teens.firstjob.3',
      title: { en: 'Minimum wage for a part-time shift', tl: 'Minimum wage sa part-time shift' },
      minutes: 2,
      hook: {
        text: { en: 'A part-time summer job pays by the shift, not by the month. The peso number should still match what the law sets as a floor.', tl: 'Ang part-time na summer job ay bayad kada shift, hindi kada buwan. Ang halaga ay dapat pa ring tugma sa itinakda ng batas na minimum.' },
        illo: 'payslip',
      },
      show: {
        text: { en: 'The Metro Manila minimum wage is ₱755 for a full 8-hour day, from July 2026. A part-time worker who works full shifts on fewer days should still get the full rate for each shift worked.', tl: 'Ang minimum wage sa Metro Manila ay ₱755 para sa buong 8-oras na araw, mula Hulyo 2026. Ang part-time worker na buong shift ang trabaho, kahit iilang araw lang, ay dapat pa ring makatanggap ng buong rate kada shift.' },
        points: [
          { en: '₱755 a day is the floor for a full 8-hour shift, not a suggestion.', tl: 'Ang ₱755 kada araw ang minimum para sa buong 8-oras na shift, hindi lang mungkahi.' },
        ],
        illo: 'payslip',
        animate: true,
      },
      do: {
        type: 'number',
        prompt: { en: 'You work 3 full 8-hour shifts this week, at the Metro Manila minimum wage of ₱755 a day. How much should you be paid before any deductions?', tl: 'Nagtrabaho ka ng 3 buong 8-oras na shift ngayong linggo, sa Metro Manila minimum wage na ₱755 kada araw. Magkano ang dapat mong matanggap bago ang anumang deductions?' },
        answer: 2265,
        tolerance: 0,
        format: 'peso',
        worked: { en: '₱755 × 3 = ₱2,265. That is the floor for three full shifts, before any deductions.', tl: '₱755 × 3 = ₱2,265. Ito ang minimum para sa tatlong buong shift, bago ang anumang deductions.' },
      },
      keep: {
        text: { en: 'Multiply the daily rate by the shifts you actually worked. That is the number to expect.', tl: 'I-multiply ang daily rate sa bilang ng shift na talagang nagawa mo. Iyon ang numerong dapat asahan.' },
        action: null,
      },
    },
    {
      id: 'teens.firstjob.4',
      title: { en: 'Reading your first payslip', tl: 'Pagbasa ng unang payslip mo' },
      minutes: 2,
      hook: {
        text: { en: 'Your first payslip: 3 days worked, ₱755 a day, gross ₱2,265, deductions ₱0, net ₱2,265.', tl: 'Unang payslip mo: 3 araw na nagtrabaho, ₱755 kada araw, gross na ₱2,265, deductions na ₱0, net na ₱2,265.' },
        illo: 'payslip',
      },
      show: {
        text: { en: 'A payslip is required by law. Reading it starts with one check: does the gross pay actually equal the days worked times the daily rate, and did the full net pay actually arrive.', tl: 'Kailangan ang payslip ayon sa batas. Ang pagbasa nito ay nagsisimula sa isang check: tugma ba ang gross pay sa bilang ng araw na ginawa beses ang daily rate, at dumating ba ang buong net pay.' },
        points: [],
        illo: 'payslip',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'Your first payslip shows: 3 days worked, ₱755 a day, gross ₱2,265, deductions ₱0, net ₱2,265. What should you check first?', tl: 'Ipinapakita ng unang payslip mo: 3 araw, ₱755 kada araw, gross na ₱2,265, deductions na ₱0, net na ₱2,265. Ano ang unang dapat mong i-check?' },
        options: [
          { text: { en: 'That gross pay equals days worked times the daily rate, and net pay arrived in full', tl: 'Na ang gross pay ay tugma sa araw na ginawa beses ang daily rate, at dumating ang net pay nang buo' }, correct: true, why: { en: 'That single check confirms the arithmetic is right and that nothing was quietly withheld.', tl: 'Ang check na iyon lang ang nagpapatunay na tama ang math at walang tahimik na na-withhold.' } },
          { text: { en: 'That the payslip has a company logo printed on it', tl: 'Na may naka-print na logo ng kumpanya ang payslip' }, correct: false, why: { en: 'A logo says nothing about whether the numbers on it are correct.', tl: 'Walang sinasabi ang logo tungkol sa kung tama ang mga numero rito.' } },
          { text: { en: 'That the payslip is printed in color', tl: 'Na naka-print sa kulay ang payslip' }, correct: false, why: { en: 'Color has nothing to do with whether you were paid correctly.', tl: 'Walang kinalaman ang kulay sa kung tama ka bang nabayaran.' } },
          { text: { en: 'That your name is spelled in cursive', tl: 'Na nakasulat sa cursive ang pangalan mo' }, correct: false, why: { en: 'Handwriting style has no bearing on whether the pay is correct.', tl: 'Walang kinalaman ang estilo ng sulat sa kung tama ang bayad.' } },
        ],
      },
      keep: {
        text: { en: 'A payslip is required by law. Check the math on it every payday, not just once.', tl: 'Kailangan ang payslip ayon sa batas. I-check ang math nito tuwing payday, hindi lang minsan.' },
        action: null,
      },
    },
    {
      id: 'teens.firstjob.5',
      title: { en: 'Sort the job offers, paid on time or not', tl: 'I-sort ang mga job offer, bayad ba sa oras o hindi' },
      minutes: 2,
      hook: {
        text: { en: 'Two summer job offers can sound almost the same in a group chat. Reading them closely tells you which one actually pays what it should, on time.', tl: 'Puwedeng magkapareho ang dalawang summer job offer kapag nabasa sa group chat. Ang maingat na pagbasa ang magsasabi kung alin ang talagang nagbabayad ng dapat, sa tamang oras.' },
        illo: 'certificate',
      },
      show: {
        text: { en: 'A real employer follows the hour limits, gives a payslip, and pays on the agreed date. A red flag employer asks for exceptions "just this once", or treats the payslip and the schedule as optional.', tl: 'Ang tunay na employer ay sumusunod sa limitasyon ng oras, nagbibigay ng payslip, at nagbabayad sa napagkasunduang petsa. Ang employer na dapat pagdudahan ay humihingi ng exception na "isang beses lang", o itinuturing na optional ang payslip at ang schedule.' },
        points: [],
        illo: 'certificate',
        animate: false,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each offer. Left is a job worth trusting, right is a warning sign.', tl: 'I-sort ang bawat offer. Kaliwa ay trabahong maaasahan, kanan ay babala.' },
        left: { en: 'Trust', tl: 'Maaasahan' },
        right: { en: 'Warning', tl: 'Babala' },
        cards: [
          { text: { en: 'A canteen offers ₱755 a day and gives a payslip every payday', tl: 'Nag-aalok ang canteen ng ₱755 kada araw at nagbibigay ng payslip tuwing payday' }, side: 'left', why: { en: 'The rate matches the minimum, and a payslip means the pay can actually be checked.', tl: 'Tugma ang rate sa minimum, at ang payslip ay ibig sabihin nachecheck talaga ang bayad.' } },
          { text: { en: 'A job asks you to stay past 10 pm "just this once"', tl: 'May trabahong pinapaiwan hanggang lampas 10 ng gabi, "isang beses lang naman"' }, side: 'right', why: { en: 'The 10 pm to 6 am restriction for minors has no "just this once" exception.', tl: 'Walang exception na "isang beses lang" ang bawal na 10 ng gabi hanggang 6 ng umaga para sa menor de edad.' } },
          { text: { en: 'An employer asks for the DOLE permit before your first day', tl: 'Hinihingi ng employer ang DOLE permit bago ang unang araw mo' }, side: 'left', why: { en: 'Asking for the permit upfront shows the employer follows the process, not around it.', tl: 'Ang paghingi ng permit nang maaga ay nagpapakitang sinusunod ng employer ang proseso, hindi ito nililigtasan.' } },
          { text: { en: 'A "trainee" role that pays "exposure" instead of wages', tl: 'May "trainee" role na "exposure" ang bayad sa halip na sweldo' }, side: 'right', why: { en: '"Exposure" is not wages. Actual work still needs actual pay under the law.', tl: 'Hindi sweldo ang "exposure". Kailangan pa rin ng tunay na bayad ang tunay na trabaho ayon sa batas.' } },
          { text: { en: 'Pay arrives two weeks late every cutoff, "next time" promised each time', tl: 'Dalawang linggong huli ang bayad tuwing cutoff, "susunod na" ang laging pangako' }, side: 'right', why: { en: 'A repeated pattern of late pay is not an exception anymore. It is how the employer actually operates.', tl: 'Ang paulit-ulit na huling bayad ay hindi na exception. Ganoon na talaga kumilos ang employer.' } },
          { text: { en: 'An 8-hour shift, paid at ₱755, with a rest day every week', tl: 'Walong-oras na shift, ₱755 ang bayad, may rest day tuwing linggo' }, side: 'left', why: { en: 'The rate, the hours, and the rest day all match what the law sets for a fair schedule.', tl: 'Tugma ang rate, oras, at rest day sa itinakda ng batas para sa patas na schedule.' } },
        ],
      },
      keep: {
        text: { en: 'A job that follows the hour limits and the payslip on its own is a job worth staying at.', tl: 'Ang trabahong sumusunod sa limitasyon ng oras at sa payslip nang kusa ay trabahong sulit panatilihin.' },
        action: null,
      },
    },
    {
      id: 'teens.firstjob.6',
      title: { en: 'Keeping the salary separate from allowance', tl: 'Paghihiwalay ng sweldo sa baon' },
      minutes: 4,
      hook: {
        text: { en: 'Your first salary, ₱2,265 for three shifts at the corner store, arrives in cash on payday.', tl: 'Ang unang sweldo mo, ₱2,265 para sa tatlong shift sa sari-sari store, ay dumating sa cash sa payday.' },
        illo: 'payslip',
      },
      show: {
        text: { en: 'Everything from this lesson meets one payday. What you do with the salary in the next hour is the whole lesson.', tl: 'Lahat ng natutunan sa araling ito ay makakaharap sa isang payday. Ang gagawin mo sa sweldo sa susunod na isang oras ang buong aralin.' },
        points: [],
        illo: 'payslip',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'Your first salary, ₱2,265, arrives in cash. Your weekly allowance of ₱500 is still in the same wallet.', tl: 'Dumating ang unang sweldo mo, ₱2,265, sa cash. Nasa parehong wallet pa rin ang weekly baon mong ₱500.' },
            balance: 2265,
            choices: [
              { text: { en: 'Mix it straight into your allowance wallet', tl: 'Isama agad sa baon wallet' }, next: 'a1' },
              { text: { en: 'Keep it in a separate envelope from your allowance', tl: 'Ilagay sa hiwalay na envelope, hindi kasama ng baon' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'By the following week you cannot tell which peso was allowance and which was salary. Only ₱300 is left, though you meant to save some of it.', tl: 'Pagdating ng susunod na linggo, hindi mo na matukoy kung alin ang baon at alin ang sweldo. ₱300 na lang ang natira, kahit balak mong mag-ipon ng bahagi nito.' },
            balance: 300,
            choices: [
              { text: { en: 'Start a separate envelope for the next payday', tl: 'Magsimula ng hiwalay na envelope sa susunod na payday' }, next: 'a2' },
              { text: { en: 'Keep mixing it with allowance next payday too', tl: 'Ipagpatuloy pa rin ang paghahalo sa baon sa susunod na payday' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'Next payday, ₱2,265 goes straight into its own envelope first. Allowance and salary stop competing for the same coins.', tl: 'Sa susunod na payday, diretso munang napunta sa sariling envelope ang ₱2,265. Hindi na naglalaban ang baon at sweldo para sa parehong barya.' },
            balance: 2265,
            outcome: 'steady',
          },
          a3: {
            text: { en: 'Three paydays later, you still cannot say how much of your own salary you have ever actually saved.', tl: 'Tatlong payday pagkatapos, hindi mo pa rin masabi kung magkano talaga ang naipon mo mula sa sarili mong sweldo.' },
            balance: 150,
            outcome: 'costly',
          },
          b1: {
            text: { en: 'You keep the ₱2,265 in its own envelope, separate from your ₱500 weekly allowance.', tl: 'Inilagay mo ang ₱2,265 sa sariling envelope, hiwalay sa weekly baon mong ₱500.' },
            balance: 2265,
            choices: [
              { text: { en: 'Move some into savings before spending any of it', tl: 'Maglipat muna ng bahagi sa savings bago gumastos' }, next: 'b2' },
              { text: { en: 'Leave the whole envelope untouched for now', tl: 'Iwanang hindi galaw ang buong envelope sa ngayon' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: '₱1,500 goes into savings first. The rest is yours to spend, already decided, not guessed at.', tl: 'Napunta muna sa savings ang ₱1,500. Ang natitira ay para gastusin, desidido na, hindi hula-hula na lang.' },
            balance: 1500,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'The envelope stays closed for two weeks, until a real want comes up. You know exactly how much of it is still yours to decide on.', tl: 'Sarado ang envelope sa loob ng dalawang linggo, hanggang may totoong gusto na lumabas. Alam mo nang eksakto kung magkano pa rito ang desisyon mo.' },
            balance: 2265,
            outcome: 'steady',
          },
        },
      },
      keep: {
        text: { en: 'Salary and allowance are both yours, but they answer different questions. Keep them in different places.', tl: 'Pareho mong pag-aari ang sweldo at baon, pero magkaiba ang sagot nila sa tanong. Ihiwalay ang mga ito.' },
        action: null,
      },
    },
  ],
};

const tree = {
  id: 'teens.tree',
  title: { en: 'The mango tree', tl: 'Ang puno ng mangga' },
  summary: { en: 'How ₱1,000 grows with interest, and how a debt grows faster.', tl: 'Kung paano lumalaki ang ₱1,000 dahil sa interest, at kung paano mas mabilis lumaki ang utang.' },
  competency: { en: 'Can explain why interest works for savings and against debt', tl: 'Kayang ipaliwanag kung bakit kumakampi ang interest sa savings at kontra sa utang' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'teens.tree.1',
      title: { en: 'Planting ₱1,000', tl: 'Pagtatanim ng ₱1,000' },
      minutes: 2,
      hook: {
        text: { en: 'You plant ₱1,000 in a savings account earning 2% a year, illustrative, and forget about it.', tl: 'Nagtanim ka ng ₱1,000 sa savings account na kumikita ng 2% kada taon, illustrative, at hindi mo na ito ginagalaw.' },
        illo: 'tree',
      },
      show: {
        text: { en: 'Interest is what a savings account grows on its own, without you adding anything more. Left alone, it earns a little every year, and each year’s interest earns on top of the last.', tl: 'Ang interest ang kusang lumalaki ng savings account, kahit walang dinadagdag pa. Kapag iniwan nang hindi ginagalaw, kumikita ito nang kaunti bawat taon, at ang interest ng bawat taon ay kumikita pa sa ibabaw ng nauna.' },
        points: [
          { en: '2% a year is a small, illustrative rate, not a promise from any single bank.', tl: 'Ang 2% kada taon ay maliit, illustrative na rate, hindi pangako ng anumang partikular na bangko.' },
        ],
        illo: 'tree',
        animate: true,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Slide to your guess: ₱1,000 saved at 2% a year, illustrative. After five years, how much will it be?', tl: 'I-slide ang hula mo: ₱1,000 na na-save sa 2% kada taon, illustrative. Pagkatapos ng limang taon, magkano na ito?' },
        min: 900,
        max: 1300,
        step: 10,
        format: 'peso',
        answer: 1104,
        why: { en: '₱1,104. At an illustrative 2% a year, compounding, ₱1,000 becomes about ₱1,104 in five years. Small, but it only grows.', tl: '₱1,104. Sa illustrative na 2% kada taon, dahil sa compounding, ang ₱1,000 ay nagiging halos ₱1,104 sa limang taon. Maliit, pero lumalaki lang.' },
      },
      keep: {
        text: { en: 'A planted ₱1,000 does nothing dramatic. It just does not stop growing.', tl: 'Walang dramatikong ginagawa ang naitanim na ₱1,000. Hindi lang ito tumitigil sa paglaki.' },
        action: null,
      },
    },
    {
      id: 'teens.tree.2',
      title: { en: 'The tree that grows savings', tl: 'Ang punong nagpapalaki ng savings' },
      minutes: 2,
      hook: {
        text: { en: 'After one year, your ₱1,000 became ₱1,020. It does not stop there if you leave it planted.', tl: 'Pagkatapos ng isang taon, naging ₱1,020 ang ₱1,000 mo. Hindi ito huminto doon kung iiwan mong nakatanim.' },
        illo: 'tree',
      },
      show: {
        text: { en: 'In year two, the 2% is earned on the new total, ₱1,020, not just the original ₱1,000. Interest earning on top of interest already earned is what compounding means.', tl: 'Sa ikalawang taon, kinikita ang 2% sa bagong total, ₱1,020, hindi na lang sa orihinal na ₱1,000. Ang interest na kumikita sa ibabaw ng interest na nakuha na ang tinatawag na compounding.' },
        points: [
          { en: 'Year 1: ₱1,000 grows to ₱1,020.', tl: 'Taon 1: lumaki ang ₱1,000 sa ₱1,020.' },
        ],
        illo: 'tree',
        animate: true,
      },
      do: {
        type: 'number',
        prompt: { en: '₱1,000 at an illustrative 2% a year, compounding. What is the total after 2 years, rounded to the nearest peso?', tl: 'Ang ₱1,000 sa illustrative na 2% kada taon, compounding. Ano ang total pagkatapos ng 2 taon, i-round sa pinakamalapit na piso?' },
        answer: 1040,
        tolerance: 1,
        format: 'peso',
        worked: { en: 'Year 1: ₱1,000 × 1.02 = ₱1,020. Year 2: ₱1,020 × 1.02 = ₱1,040.40, rounded to ₱1,040. Interest earns on interest already earned, that is compounding.', tl: 'Taon 1: ₱1,000 × 1.02 = ₱1,020. Taon 2: ₱1,020 × 1.02 = ₱1,040.40, na-round sa ₱1,040. Kumikita ang interest sa ibabaw ng interest na nakuha na, iyon ang compounding.' },
      },
      keep: {
        text: { en: 'Each year, interest grows on the whole tree, not just the seed you planted.', tl: 'Bawat taon, lumalaki ang interest sa buong puno, hindi lang sa binhing itinanim mo.' },
        action: null,
      },
    },
    {
      id: 'teens.tree.3',
      title: { en: 'The tree that grows debt faster', tl: 'Ang punong mas mabilis magpalaki ng utang' },
      minutes: 3,
      hook: {
        text: { en: 'You need ₱1,000 now. One way costs exactly ₱1,000. Another way costs more, much sooner.', tl: 'Kailangan mo ng ₱1,000 ngayon. May paraang eksaktong ₱1,000 lang ang gagastusin. May paraan namang mas malaki ang gagastusin, at mas maaga pa.' },
        illo: 'spiral',
      },
      show: {
        text: { en: 'Debt is a tree too, but it grows against you. A typical 5-6 loan of ₱1,000 costs ₱1,200 in just forty days, far faster than a savings account earns for you.', tl: 'Puno rin ang utang, pero kontra sa iyo ito lumalaki. Ang karaniwang 5-6 loan na ₱1,000 ay nagiging ₱1,200 sa loob lang ng apatnapung araw, mas mabilis kaysa sa kinikita para sa iyo ng savings account.' },
        points: [],
        illo: 'spiral',
        animate: false,
      },
      do: {
        type: 'compare',
        prompt: { en: 'You need ₱1,000 now. Compare two ways to get it.', tl: 'Kailangan mo ng ₱1,000 ngayon. Ikumpara ang dalawang paraan para makuha ito.' },
        options: [
          { title: { en: 'Wait and save, or ask a parent', tl: 'Maghintay at mag-ipon, o humingi sa magulang' }, lines: [ { en: 'No repayment', tl: 'Walang babayaran' }, { en: 'No extra cost added', tl: 'Walang idinaragdag na extra na gastos' } ], effective: { en: 'Costs exactly ₱1,000, nothing more.', tl: 'Eksaktong ₱1,000 ang gastos, wala nang iba pa.' }, cheaper: true },
          { title: { en: 'Borrow ₱1,000 through a 5-6 arrangement', tl: 'Manghiram ng ₱1,000 sa 5-6' }, lines: [ { en: 'Repay ₱1,200 in 40 days', tl: 'Babayaran ang ₱1,200 sa loob ng 40 araw' }, { en: 'That is ₱200 extra for less than six weeks', tl: 'Iyon ay ₱200 dagdag sa loob lang ng wala pang anim na linggo' } ], effective: { en: 'Costs ₱1,200 for the same ₱1,000, borrowed for less than two months.', tl: 'Nagkakahalaga ng ₱1,200 para sa parehong ₱1,000, hiniram sa loob lang ng wala pang dalawang buwan.' }, cheaper: false },
        ],
        why: { en: 'The 5-6 arrangement’s ₱200 over 40 days works out to about 20% for that period alone, far more than the 2% a year a savings account earns. Debt grows against you much faster than savings grows for you.', tl: 'Ang ₱200 ng 5-6 sa loob ng 40 araw ay halos 20% para lang sa panahong iyon, mas malaki kaysa sa 2% kada taon na kinikita ng savings account. Mas mabilis lumaki ang utang kontra sa iyo kaysa sa paglaki ng savings para sa iyo.' },
      },
      keep: {
        text: { en: 'The same ₱1,000 grows for you slowly, or against you fast. The direction depends on which side you are on.', tl: 'Ang parehong ₱1,000 ay dahan-dahang lumalaki para sa iyo, o mabilis kontra sa iyo. Nakadepende sa panig kung saan ka nakatayo.' },
        action: null,
      },
    },
    {
      id: 'teens.tree.4',
      title: { en: 'Same word, opposite direction', tl: 'Parehong salita, magkabaligtad na direksyon' },
      minutes: 2,
      hook: {
        text: { en: 'The word "interest" appears on your savings account passbook, and on a loan agreement. It does not mean the same thing for you in both.', tl: 'Ang salitang "interest" ay lumalabas sa passbook ng savings account mo, at sa kasunduan ng utang. Hindi pareho ang ibig sabihin nito para sa iyo sa dalawa.' },
        illo: 'scale',
      },
      show: {
        text: { en: 'On savings, interest grows what you keep. On a loan, interest grows what you owe. The word is the same. The direction it grows is opposite.', tl: 'Sa savings, ang interest ay nagpapalaki sa iniipon mo. Sa utang, ang interest ay nagpapalaki sa utang mo. Pareho ang salita. Magkabaligtad ang direksyon ng paglaki.' },
        points: [],
        illo: 'scale',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'The word "interest" appears on both your savings account and a loan. What is the real difference?', tl: 'Lumalabas ang salitang "interest" sa savings account mo at sa utang. Ano ang tunay na pagkakaiba?' },
        options: [
          { text: { en: 'On savings it grows what you keep; on a loan it grows what you owe', tl: 'Sa savings, pinapalaki nito ang iniipon mo; sa utang, pinapalaki nito ang inuutang mo' }, correct: true, why: { en: 'Same math, opposite direction: one grows in your favor, the other against it.', tl: 'Parehong math, magkabaligtad na direksyon: ang isa ay lumalaki para sa iyo, ang isa ay kontra sa iyo.' } },
          { text: { en: 'There is no real difference, it just sounds different', tl: 'Walang tunay na pagkakaiba, iba lang ang tunog' }, correct: false, why: { en: 'The direction it moves your money is the actual difference, not just the sound of the word.', tl: 'Ang direksyon ng galaw ng pera mo ang tunay na pagkakaiba, hindi lang ang tunog ng salita.' } },
          { text: { en: 'Interest on savings is always higher than interest on a loan', tl: 'Laging mas mataas ang interest sa savings kaysa sa utang' }, correct: false, why: { en: 'The facts show the opposite. Loan interest, like a 5-6 arrangement, is usually far higher than savings interest.', tl: 'Kabaligtaran ang totoo. Ang interest sa utang, gaya ng 5-6, ay kadalasang mas mataas kaysa sa interest ng savings.' } },
          { text: { en: 'Interest only applies to loans, not to savings', tl: 'Sa utang lang lumalapat ang interest, hindi sa savings' }, correct: false, why: { en: 'A savings account earns interest too, just usually a much smaller rate.', tl: 'Kumikita rin ng interest ang savings account, pero kadalasang mas maliit na rate.' } },
        ],
      },
      keep: {
        text: { en: 'Before agreeing to anything with interest, ask which direction it grows.', tl: 'Bago pumayag sa kahit anong may interest, itanong kung saang direksyon ito lumalaki.' },
        action: null,
      },
    },
    {
      id: 'teens.tree.5',
      title: { en: 'Match the tree to the number', tl: 'I-match ang puno sa numero' },
      minutes: 2,
      hook: {
        text: { en: 'Four small trees, four different numbers. Same idea of growth, different speed and different direction.', tl: 'Apat na maliit na puno, apat na magkaibang numero. Parehong ideya ng paglaki, pero magkaiba ang bilis at direksyon.' },
        illo: 'tree',
      },
      show: {
        text: { en: 'The numbers from this lesson, matched to what grew them.', tl: 'Ang mga numero mula sa araling ito, itinugma sa nagpalaki sa kanila.' },
        points: [],
        illo: 'tree',
        animate: false,
      },
      do: {
        type: 'match',
        prompt: { en: 'Match each tree to its number.', tl: 'Itugma ang bawat puno sa numero nito.' },
        pairs: [
          { a: { en: '₱1,000 in savings at 2% a year, illustrative', tl: '₱1,000 sa savings, 2% kada taon, illustrative' }, b: { en: 'About ₱1,104 after five years', tl: 'Halos ₱1,104 pagkatapos ng limang taon' } },
          { a: { en: '₱1,000 borrowed 5-6 style', tl: '₱1,000 na hiniram sa 5-6' }, b: { en: '₱1,200 owed in forty days', tl: '₱1,200 na utang sa loob ng apatnapung araw' } },
          { a: { en: '₱1,000 at 2% for one year, illustrative', tl: '₱1,000 sa 2% kada isang taon, illustrative' }, b: { en: '₱1,020 after one year', tl: '₱1,020 pagkatapos ng isang taon' } },
          { a: { en: 'A debt left unpaid and repeated', tl: 'Utang na hindi binayaran at inulit' }, b: { en: 'Grows again every cycle it is not paid off', tl: 'Lumalaki ulit bawat cycle na hindi ito nababayaran' } },
        ],
      },
      keep: {
        text: { en: 'Same starting number, four very different endings. The tree you plant decides which one you get.', tl: 'Parehong panimulang numero, apat na magkaibang katapusan. Ang punong itinanim mo ang magpapasya kung alin ang makukuha mo.' },
        action: null,
      },
    },
    {
      id: 'teens.tree.6',
      title: { en: 'The five years no one interrupted', tl: 'Ang limang taong walang nakasabat' },
      minutes: 4,
      hook: {
        text: { en: 'You have ₱1,000 saved at an illustrative 2% a year. A want for ₱1,000 comes up right now.', tl: 'May ₱1,000 kang naipon sa illustrative na 2% kada taon. May gusto kang ₱1,000 na sumulpot ngayon.' },
        illo: 'tree',
      },
      show: {
        text: { en: 'Everything from this lesson meets one want. What you do with the ₱1,000 in the next five years is the whole lesson.', tl: 'Lahat ng natutunan sa araling ito ay makakaharap sa isang gusto. Ang gagawin mo sa ₱1,000 sa susunod na limang taon ang buong aralin.' },
        points: [],
        illo: 'tree',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'You have ₱1,000 saved at an illustrative 2% a year. A want for ₱1,000 comes up right now.', tl: 'May ₱1,000 kang naipon sa illustrative na 2% kada taon. May gusto kang ₱1,000 na sumulpot ngayon.' },
            balance: 1000,
            choices: [
              { text: { en: 'Leave the ₱1,000 planted, and find another way for the want', tl: 'Iwanang nakatanim ang ₱1,000, at maghanap ng ibang paraan para sa gusto' }, next: 'a1' },
              { text: { en: 'Take the ₱1,000 out now for the want', tl: 'Kunin na ang ₱1,000 ngayon para sa gusto' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'A year passes. Your ₱1,000 is now ₱1,020, and the want from before is mostly forgotten.', tl: 'Lumipas ang isang taon. ₱1,020 na ang ₱1,000 mo, at halos nakalimutan na ang dating gusto.' },
            balance: 1020,
            choices: [
              { text: { en: 'Leave it planted for four more years', tl: 'Iwanang nakatanim pa ng apat na taon' }, next: 'a2' },
              { text: { en: 'Take it out now that it grew a little', tl: 'Kunin na ito ngayong kumaunti itong lumaki' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'Five years total, untouched. Your ₱1,000 is now about ₱1,104, and it grew only because nothing interrupted it.', tl: 'Limang taon lahat-lahat, hindi ginalaw. Halos ₱1,104 na ngayon ang ₱1,000 mo, at lumaki ito dahil lang walang nakasabat dito.' },
            balance: 1104,
            outcome: 'steady',
          },
          a3: {
            text: { en: 'You take out ₱1,020 after one year for a new want. The tree stops growing the moment it is cut down.', tl: 'Kinuha mo ang ₱1,020 pagkatapos ng isang taon para sa bagong gusto. Huminto sa paglaki ang puno sa sandaling puputulin ito.' },
            balance: 0,
            outcome: 'costly',
          },
          b1: {
            text: { en: 'You take the ₱1,000 out for the want right away. The account goes back to ₱0.', tl: 'Kinuha mo agad ang ₱1,000 para sa gusto. Bumalik sa ₱0 ang account.' },
            balance: 0,
            choices: [
              { text: { en: 'Start planting again with whatever is left this month', tl: 'Magsimula ulit magtanim gamit ang natitira ngayong buwan' }, next: 'b2' },
              { text: { en: 'Decide saving does not really work for a want this size', tl: 'Magpasyang hindi gumagana ang pag-iipon para sa ganitong laking gusto' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'You start over with ₱100 this month. It will take longer to reach ₱1,000 again, but the tree is planted once more.', tl: 'Nagsimula ka ulit gamit ang ₱100 ngayong buwan. Mas matagal bago maabot ulit ang ₱1,000, pero naitanim ulit ang puno.' },
            balance: 100,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'Nothing is planted again for the rest of the year. The next want arrives with nothing saved toward it either.', tl: 'Walang naitanim ulit sa natitirang bahagi ng taon. Dumating ang susunod na gusto nang wala ring naipon para dito.' },
            balance: 0,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'A tree needs years left alone. A debt needs only weeks to grow past what you borrowed.', tl: 'Kailangan ng puno ng mga taong hindi ginagalaw. Ilang linggo lang kailangan ng utang para lumaki nang higit pa sa hiniram.' },
        action: null,
      },
    },
  ],
};

const big = {
  id: 'teens.big',
  title: { en: 'Saving for something big', tl: 'Pag-iipon para sa malaking bagay' },
  summary: { en: 'Turning a want, like a bike or a phone, into monthly goal math.', tl: 'Paggawang goal math bawat buwan ang isang gustong bagay, tulad ng bike o phone.' },
  competency: { en: 'Can turn a big want into a monthly saving number', tl: 'Kayang gawing buwanang saving number ang isang malaking gusto' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'teens.big.1',
      title: { en: 'Naming the big thing', tl: 'Pagpapangalan sa malaking bagay' },
      minutes: 2,
      hook: {
        text: { en: 'A ₱6,000 phone you actually want, or the school trip everyone is joining. Neither one fits in a single week’s allowance.', tl: 'Isang ₱6,000 phone na talagang gusto mo, o ang school trip na sinasalihan ng lahat. Wala sa dalawang ito ang kasya sa isang linggong baon lang.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'A big thing is a want too large for one week or one month of allowance alone. It needs its own goal, its own number, and its own timeline, separate from everyday spending.', tl: 'Ang malaking bagay ay gustong masyadong malaki para sa isang linggo o isang buwang baon lang. Kailangan nito ng sariling goal, sariling numero, at sariling timeline, hiwalay sa pang-araw-araw na gastos.' },
        points: [],
        illo: 'phone',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'Which of these is a "big thing" worth planning for with monthly math, instead of just this week’s allowance?', tl: 'Alin dito ang "malaking bagay" na dapat planuhin gamit ang buwanang math, sa halip na baon lang ngayong linggo?' },
        options: [
          { text: { en: 'A ₱6,000 phone you want in a few months', tl: 'Isang ₱6,000 phone na gusto mo sa loob ng ilang buwan' }, correct: true, why: { en: 'This is large enough, and far enough away, to need its own monthly plan.', tl: 'Malaki na ito, at malayo pa ang pagitan, para kailanganin ng sarili nitong buwanang plano.' } },
          { text: { en: 'A ₱15 bag of chips', tl: 'Isang ₱15 na chips' }, correct: false, why: { en: 'This fits easily inside a single day’s allowance. It needs no separate plan.', tl: 'Kasya ito nang madali sa isang araw na baon. Hindi na kailangan ng hiwalay na plano.' } },
          { text: { en: 'This week’s canteen lunch', tl: 'Ang canteen lunch ngayong linggo' }, correct: false, why: { en: 'That is already covered by the weekly allowance split, not a separate goal.', tl: 'Nasakop na ito ng weekly baon split, hindi na hiwalay na goal.' } },
          { text: { en: 'A ₱50 load top-up', tl: 'Isang ₱50 na load top-up' }, correct: false, why: { en: 'Small and immediate, this belongs in the weekly plan, not a monthly one.', tl: 'Maliit at agarang gastos ito, kaya nasa weekly plan, hindi sa buwanan.' } },
        ],
      },
      keep: {
        text: { en: 'Name the big thing first, in pesos and in a rough date. A goal without a number is just a wish.', tl: 'Pangalanan muna ang malaking bagay, sa piso at sa tantyang petsa. Ang goal na walang numero ay wish lang.' },
        action: null,
      },
    },
    {
      id: 'teens.big.2',
      title: { en: 'Months to goal', tl: 'Ilang buwan bago maabot' },
      minutes: 2,
      hook: {
        text: { en: '₱6,000 sounds far away until it is broken into what you can actually set aside each month.', tl: 'Parang malayo ang ₱6,000 hanggang hatiin ito sa kaya mong ilaan bawat buwan.' },
        illo: 'calendar',
      },
      show: {
        text: { en: 'Divide the goal by what you can set aside each month, and the timeline becomes a real number of months, not a guess.', tl: 'Hatiin ang goal sa kayang ilaan bawat buwan, at magiging totoong bilang ng buwan ang timeline, hindi hula lang.' },
        points: [],
        illo: 'calendar',
        animate: true,
      },
      do: {
        type: 'number',
        prompt: { en: 'You want to save ₱6,000 for a phone. You can set aside ₱500 a month. How many months until you reach ₱6,000?', tl: 'Gusto mong mag-ipon ng ₱6,000 para sa phone. Kaya mong maglaan ng ₱500 kada buwan. Ilang buwan bago maabot ang ₱6,000?' },
        answer: 12,
        tolerance: 0,
        format: 'number',
        worked: { en: '₱6,000 ÷ ₱500 = 12. Twelve months of ₱500 reaches the goal exactly.', tl: '₱6,000 ÷ ₱500 = 12. Aabot ang goal sa eksaktong labindalawang buwan ng ₱500.' },
      },
      keep: {
        text: { en: 'The goal amount divided by the monthly amount is your real timeline, not a feeling.', tl: 'Ang goal na hinati sa buwanang ilalaan ang tunay na timeline mo, hindi lang pakiramdam.' },
        action: null,
      },
    },
    {
      id: 'teens.big.3',
      title: { en: 'The weekly number, again', tl: 'Ang weekly number, muli' },
      minutes: 2,
      hook: {
        text: { en: '₱500 a month is the plan. It still has to come from somewhere, one week at a time.', tl: 'Ang ₱500 kada buwan ang plano. Kailangan pa rin nitong manggaling sa kung saan, isang linggo sa isang pagkakataon.' },
        illo: 'jars',
      },
      show: {
        text: { en: 'The same monthly goal, split into a weekly number, is easier to actually set aside than a lump sum remembered only at month’s end.', tl: 'Ang parehong buwanang goal, hinati sa weekly number, ay mas madaling ilaan talaga kaysa sa lump sum na naaalala lang sa katapusan ng buwan.' },
        points: [],
        illo: 'jars',
        animate: false,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Slide to your guess: ₱500 a month for the phone, split evenly across about 4 weeks. What is the weekly number?', tl: 'I-slide ang hula mo: ₱500 kada buwan para sa phone, hatiin nang pantay sa mga 4 na linggo. Ano ang weekly number?' },
        min: 0,
        max: 200,
        step: 5,
        format: 'peso',
        answer: 125,
        why: { en: '₱125 a week for four weeks is ₱500 a month. Same goal, smaller number, easier to actually set aside each week.', tl: '₱125 kada linggo sa loob ng apat na linggo ay ₱500 kada buwan. Parehong goal, mas maliit na numero, mas madaling ilaan talaga bawat linggo.' },
      },
      keep: {
        text: { en: 'A smaller weekly number is easier to keep than a bigger monthly promise.', tl: 'Mas madaling sundin ang mas maliit na weekly number kaysa sa mas malaking buwanang pangako.' },
        action: null,
      },
    },
    {
      id: 'teens.big.4',
      title: { en: 'When a birthday gets in the way', tl: 'Kapag naharang ng birthday' },
      minutes: 2,
      hook: {
        text: { en: 'A classmate’s birthday lands right in the middle of the goal months. A gift still costs something.', tl: 'Tama sa gitna ng goal months ang birthday ng kaklase. May halaga pa rin ang regalo.' },
        illo: 'jars',
      },
      show: {
        text: { en: 'A birthday, or any surprise expense, does not have to pause the goal. What matters is whether the ₱500 still gets set aside that month, adjusted or not.', tl: 'Hindi kailangang ipahinto ng birthday, o anumang biglaang gastos, ang goal. Ang mahalaga ay kung ilalaan pa rin ang ₱500 sa buwang iyon, adjusted man o hindi.' },
        points: [],
        illo: 'jars',
        animate: false,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each move. Left keeps the goal on track, right pauses it.', tl: 'I-sort ang bawat galaw. Kaliwa ay nananatiling on track ang goal, kanan ay napaparada ito.' },
        left: { en: 'Keeps the goal on track', tl: 'Nananatiling on track' },
        right: { en: 'Pauses the goal', tl: 'Napaparada' },
        cards: [
          { text: { en: 'Giving a ₱100 gift and still setting aside ₱400 that month', tl: 'Pagbibigay ng ₱100 na regalo at pag-iipon pa rin ng ₱400 sa buwang iyon' }, side: 'left', why: { en: 'The goal amount adjusts a little, but it still moves forward.', tl: 'Bahagyang nag-adjust ang goal amount, pero umuusad pa rin ito.' } },
          { text: { en: 'Spending the whole ₱500 on a friend’s birthday gift', tl: 'Paggastos ng buong ₱500 sa regalo para sa kaibigan' }, side: 'right', why: { en: 'Nothing is left for the goal that month, which quietly adds a delay.', tl: 'Wala nang matitira para sa goal sa buwang iyon, na tahimik na nagdaragdag ng delay.' } },
          { text: { en: 'Setting aside the ₱500 first, then spending what is left on a gift', tl: 'Ilaan muna ang ₱500, tapos gastusin sa regalo ang natira' }, side: 'left', why: { en: 'The goal amount is protected before anything else is decided.', tl: 'Protektado na ang goal amount bago pa magpasya sa iba pang gastos.' } },
          { text: { en: 'Borrowing next month’s ₱500 early for this month’s gift', tl: 'Pauna nang gamitin ang ₱500 ng susunod na buwan para sa regalo ngayon' }, side: 'right', why: { en: 'This just moves the shortfall to next month instead of solving it.', tl: 'Inililipat lang nito ang kulang sa susunod na buwan sa halip na malutas ito.' } },
          { text: { en: 'Skipping the goal "just this once" becomes "just this month" again', tl: 'Ang paglaktaw sa goal na "isang beses lang" ay nagiging "ngayong buwan na naman lang" muli' }, side: 'right', why: { en: 'A one-time skip that repeats is no longer one time.', tl: 'Ang isang beses na laktaw na inuulit ay hindi na isang beses.' } },
          { text: { en: 'Giving a smaller gift so the ₱500 still fits', tl: 'Magbigay ng mas maliit na regalo para kasya pa rin ang ₱500' }, side: 'left', why: { en: 'The goal and the gift both happen, just at a smaller scale for the gift.', tl: 'Nangyayari pareho ang goal at ang regalo, mas maliit lang ang regalo.' } },
        ],
      },
      keep: {
        text: { en: 'A gift and a goal can both happen the same month, if the goal gets decided first.', tl: 'Puwedeng mangyari pareho ang regalo at ang goal sa parehong buwan, kung ang goal ang unang pinagdedesisyunan.' },
        action: null,
      },
    },
    {
      id: 'teens.big.5',
      title: { en: 'The plan that survives a detour', tl: 'Ang planong nakakatawid sa detour' },
      minutes: 2,
      hook: {
        text: { en: 'No twelve-month plan runs without at least one month that does not go as planned.', tl: 'Walang labindalawang buwan na plano ang tumatakbo nang walang kahit isang buwang hindi napunta sa plano.' },
        illo: 'calendar',
      },
      show: {
        text: { en: 'A plan that survives a detour adjusts the amount for one month, without abandoning the goal itself.', tl: 'Ang planong nakakatawid sa detour ay nag-aadjust ng halaga para sa isang buwan, nang hindi tinatalikuran ang mismong goal.' },
        points: [],
        illo: 'calendar',
        animate: false,
      },
      do: {
        type: 'order',
        prompt: { en: 'Put the steps in order.', tl: 'Ayusin ang mga hakbang.' },
        steps: [
          { en: 'Set the goal number and the monthly amount first', tl: 'Itakda muna ang goal number at ang buwanang halaga' },
          { en: 'Save the monthly amount as soon as it is available, not last', tl: 'Ilaan ang buwanang halaga sa sandaling available ito, hindi sa huli' },
          { en: 'When an expense comes up, adjust the amount, not the goal itself', tl: 'Kapag may biglaang gastos, i-adjust ang halaga, hindi ang mismong goal' },
          { en: 'Write down any month you saved less, and why', tl: 'Isulat ang anumang buwang mas kaunti ang naipon, at kung bakit' },
          { en: 'Add a little extra the following month if you can', tl: 'Magdagdag ng kaunti sa susunod na buwan kung kaya' },
        ],
        why: { en: 'Saving the monthly amount early comes before any detour, because a plan that waits until month’s end has nothing left to protect when an expense shows up.', tl: 'Ang maagang pag-ipon ng buwanang halaga ay nauuna sa anumang detour, dahil ang planong naghihintay hanggang katapusan ng buwan ay wala nang maiingatan kapag may biglaang gastos.' },
      },
      keep: {
        text: { en: 'A detour changes this month’s number. It does not have to change the goal.', tl: 'Binabago ng detour ang numero ngayong buwan. Hindi na kailangang baguhin ang goal.' },
        action: null,
      },
    },
    {
      id: 'teens.big.6',
      title: { en: 'The month the plan got tested', tl: 'Ang buwang nasubok ang plano' },
      minutes: 4,
      hook: {
        text: { en: 'You are three months into saving ₱500 a month for the ₱6,000 phone, ₱1,500 saved so far. A school project suddenly needs ₱300 in materials this month.', tl: 'Tatlong buwan ka nang nag-iipon ng ₱500 kada buwan para sa ₱6,000 phone, ₱1,500 na ang naipon. May school project na biglang nangailangan ng ₱300 na materyales ngayong buwan.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'Everything from this lesson meets one detour. What you do with this month’s ₱500 is the whole lesson.', tl: 'Lahat ng natutunan sa araling ito ay makakaharap sa isang detour. Ang gagawin mo sa ₱500 ngayong buwan ang buong aralin.' },
        points: [],
        illo: 'phone',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'Three months in, ₱1,500 saved so far. A school project suddenly needs ₱300 in materials this month.', tl: 'Tatlong buwan na, ₱1,500 na ang naipon. May school project na biglang nangailangan ng ₱300 na materyales ngayong buwan.' },
            balance: 1500,
            choices: [
              { text: { en: 'Take the ₱300 from this month’s ₱500 goal savings', tl: 'Kunin ang ₱300 sa ₱500 goal savings ngayong buwan' }, next: 'a1' },
              { text: { en: 'Cover the ₱300 from allowance instead, and still save the full ₱500', tl: 'Kunin na lang ang ₱300 sa baon, at ilaan pa rin ang buong ₱500' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'You save only ₱200 this month. Total so far: ₱1,700 instead of ₱2,000.', tl: '₱200 na lang ang naipon mo ngayong buwan. Kabuuan sa ngayon: ₱1,700 sa halip na ₱2,000.' },
            balance: 1700,
            choices: [
              { text: { en: 'Add ₱300 extra next month to catch up', tl: 'Magdagdag ng ₱300 sa susunod na buwan para makaabot' }, next: 'a2' },
              { text: { en: 'Let the shortfall go, and just continue with ₱500 next month', tl: 'Hayaan na lang ang kulang, at ipagpatuloy na lang ang ₱500 sa susunod' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'Next month you save ₱800. The total catches back up to where twelve months of ₱500 would have had you, and the phone is still reachable on time.', tl: 'Sa susunod na buwan, ₱800 ang naipon mo. Naabutan ng kabuuan ang dapat na antas ng labindalawang buwan ng ₱500, at maaabot pa rin ang phone sa oras.' },
            balance: 2500,
            outcome: 'steady',
          },
          a3: {
            text: { en: 'The plan is now short by ₱300 that no month makes up. The phone arrives one month later than the original twelve.', tl: 'Kulang na ngayon nang ₱300 ang plano na walang buwang nakakabawi. Isang buwan mas huli darating ang phone kaysa sa orihinal na labindalawa.' },
            balance: 2200,
            outcome: 'costly',
          },
          b1: {
            text: { en: 'You cover the ₱300 from allowance, tightening the canteen budget for two weeks. The full ₱500 still goes to the goal this month.', tl: 'Kinuha mo ang ₱300 sa baon, hinigpitan ang canteen budget sa loob ng dalawang linggo. Napunta pa rin ang buong ₱500 sa goal ngayong buwan.' },
            balance: 2000,
            choices: [
              { text: { en: 'Keep the tighter canteen budget only until the ₱300 is made up', tl: 'Panatilihin ang mahigpit na canteen budget hanggang lang mabawi ang ₱300' }, next: 'b2' },
              { text: { en: 'Keep the canteen budget tight for the rest of the goal, just in case', tl: 'Panatilihing mahigpit ang canteen budget hanggang matapos ang goal, para sigurado' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'Two weeks of a tighter canteen budget cover the ₱300, then canteen spending returns to normal. The goal stays exactly on the twelve-month plan.', tl: 'Dalawang linggong mahigpit na canteen budget ang bumawi sa ₱300, tapos bumalik sa normal ang canteen spending. Nananatili sa eksaktong labindalawang buwang plano ang goal.' },
            balance: 2000,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'The canteen budget stays tight for months longer than needed. The goal is reached on time, but school lunches are thin for far longer than the ₱300 ever required.', tl: 'Nananatiling mahigpit ang canteen budget nang mas matagal kaysa kailangan. Naaabot ang goal sa oras, pero manipis ang baon sa canteen nang mas matagal kaysa sa talagang kailangan ng ₱300.' },
            balance: 2000,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'A detour changes this month’s number. It does not have to change the goal.', tl: 'Binabago ng detour ang numero ngayong buwan. Hindi na kailangang baguhin ang goal.' },
        action: null,
      },
    },
  ],
};

export default {
  id: 'teens',
  band: '13 to 17',
  title: { en: 'Allowance', tl: 'Baon' },
  tagline: { en: 'For high-school students with a weekly allowance, a phone, and a Messenger inbox.', tl: 'Para sa mga high school student na may weekly baon, cellphone, at Messenger inbox.' },
  gate: 'family',
  intro: {
    text: { en: 'Your allowance is the first budget you actually run. This path follows it from the canteen line to the messages that try to take it from you.', tl: 'Ang baon mo ang unang budget na talagang hawak mo. Sinusundan ito ng path na ito mula sa pila sa canteen hanggang sa mga mensaheng sumusubok na agawin ito sa iyo.' },
    video: { placeholder: 'Thirty second vertical clip. A student counting coins and small bills into a school pouch, a phone buzzing beside it with a Messenger notification. Voice: a calm line about baon being the first budget you run. No music stings, no exclamation.' },
    illo: 'phone',
  },
  lessons: [allowance, dms, account, online, friends, firstjob, tree, big],
};
