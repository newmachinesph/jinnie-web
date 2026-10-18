// Path: Alkansya (7 to 12). Family gate. Lessons 1 and 2 authored, 3 to 7 outlined.

const jars = {
  id: 'kids.jars',
  title: { en: 'Three jars', tl: 'Tatlong jar' },
  summary: { en: 'Three jars for allowance: one to spend today, one to save for later, one to share.', tl: 'Tatlong jar para sa baon: isa para gastusin ngayon, isa para itabi, isa para ibahagi.' },
  competency: { en: 'Can split allowance into spend, save, and share', tl: 'Kayang hatiin ang baon sa spend, save, at share' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'kids.jars.1',
      title: { en: 'Three jars', tl: 'Tatlong jar' },
      minutes: 2,
      hook: {
        text: { en: 'Your allowance comes in the morning. By afternoon it is gone. You cannot remember where it went.', tl: 'Dumarating ang baon mo sa umaga. Pagtanghali, wala na. Hindi mo maalala kung saan napunta.' },
        illo: 'jars',
      },
      show: {
        text: { en: 'Your allowance has three jobs. One part is for today. One part is for later. One part is for someone else.', tl: 'May tatlong trabaho ang baon mo. Isang bahagi para ngayon. Isang bahagi para mamaya. Isang bahagi para sa iba.' },
        points: [
          { en: 'Spend: what you use today, like a snack or a pencil.', tl: 'Spend: ang gagamitin mo ngayon, tulad ng meryenda o lapis.' },
          { en: 'Save: what waits for something bigger later.', tl: 'Save: ang iniipon mo para sa mas malaking bagay mamaya.' },
          { en: 'Share: what you give to a friend or a cause.', tl: 'Share: ang ibinibigay mo sa kaibigan o sa kapwa.' },
        ],
        illo: 'jars',
        animate: true,
      },
      do: {
        type: 'choice',
        prompt: { en: 'Allowance is ₱50. You already ate breakfast. What should most of it be for?', tl: '₱50 ang baon. Kumain ka na ng almusal. Saan dapat mapunta ang mas malaking bahagi nito?' },
        options: [
          { text: { en: 'All of it for spending today', tl: 'Lahat gastusin ngayon' }, correct: false, why: { en: 'A jar with nothing saved starts every week at zero.', tl: 'Nagsisimula sa zero bawat linggo ang jar na walang natitirang ipon.' } },
          { text: { en: 'A little for spending, and the rest split between save and share', tl: 'Kaunti lang gastusin, at hatiin ang natitira sa save at share' }, correct: true, why: { en: 'A small spend jar still covers today. The rest builds toward something later.', tl: 'Sapat pa rin ang maliit na spend jar para ngayon. Napupunta naman sa mas malaki mamaya ang matitira.' } },
          { text: { en: 'All of it for saving, nothing today', tl: 'Lahat ipunin, wala para ngayon' }, correct: false, why: { en: 'Today needs its own small amount too, like water or a pencil.', tl: 'Kailangan mo ring may panggastos ngayon, tulad ng tubig o lapis.' } },
        ],
      },
      keep: {
        text: { en: 'Every peso of allowance has a job before it leaves your hand.', tl: 'May trabaho ang bawat piso ng baon mo bago ito umalis sa kamay mo.' },
        action: null,
      },
    },
    {
      id: 'kids.jars.2',
      title: { en: 'Splitting ₱50', tl: 'Paghahati ng ₱50' },
      minutes: 3,
      hook: {
        text: { en: 'Your mother hands you ₱50 for the week. You have not decided anything yet.', tl: 'Binigyan ka ng nanay mo ng ₱50 para sa linggo. Wala ka pang desisyon.' },
        illo: 'jars',
      },
      show: {
        text: { en: 'A jar with a guide is easier to fill than a jar with no plan. Spend gets the biggest share. Save and share can be smaller and still add up.', tl: 'Mas madaling punan ang jar na may gabay kaysa jar na walang plano. Mas malaki ang bahagi para sa spend. Puwedeng mas maliit ang save at share pero tumataas pa rin ang mga ito.' },
        points: [
          { en: 'Spend about 60%: today’s snack and small needs.', tl: 'Spend mga 60%: meryenda at maliit na pangangailangan ngayon.' },
          { en: 'Save about 30%: for something you want later.', tl: 'Save mga 30%: para sa gusto mo mamaya.' },
          { en: 'Share about 10%: for a friend, a church basket, or a cause.', tl: 'Share mga 10%: para sa kaibigan, church basket, o kapwa.' },
        ],
        illo: 'jars',
        animate: true,
      },
      do: {
        type: 'allocate',
        prompt: { en: 'Split ₱50 of allowance into the three jars.', tl: 'Hatiin ang ₱50 na baon sa tatlong jar.' },
        total: 50,
        step: 5,
        jars: [
          { key: 'spend', label: { en: 'Spend', tl: 'Spend' }, hint: { en: 'Snack, water, a pencil', tl: 'Meryenda, tubig, lapis' }, guide: [50, 70] },
          { key: 'save', label: { en: 'Save', tl: 'Save' }, hint: { en: 'For something bigger later', tl: 'Para sa mas malaki mamaya' }, guide: [20, 40] },
          { key: 'share', label: { en: 'Share', tl: 'Share' }, hint: { en: 'For a friend or a cause', tl: 'Para sa kaibigan o kapwa' }, guide: [5, 20] },
        ],
        why: { en: 'Any split that keeps save at 20% or more still builds toward something. The amount here is illustrative. Your own allowance may be smaller or bigger.', tl: 'Kahit anong hating 20% pataas ang napupunta sa save, lumalapit pa rin ito sa mas malaki. Illustrative lang ang halagang ito. Puwedeng mas maliit o mas malaki ang baon mo.' },
      },
      keep: {
        text: { en: 'Decide the split once. I will remind you to check the jars on your next allowance day.', tl: 'Magpasya minsan lang sa hati. Paaalalahanan kita na tingnan ang mga jar sa susunod mong baon day.' },
        action: { kind: 'open', label: { en: 'Show this split to a parent in Circles', tl: 'Ipakita ang hating ito sa magulang sa Circles' }, payload: { app: 'circles' } },
      },
    },
    {
      id: 'kids.jars.3',
      title: { en: 'What each jar is for', tl: 'Para saan ang bawat jar' },
      minutes: 2,
      hook: {
        text: { en: 'Three jars look the same until you know what each one is waiting for.', tl: 'Magkamukha ang tatlong jar hanggang malaman mo kung ano ang hinihintay ng bawat isa.' },
        illo: 'alkansya',
      },
      show: {
        text: { en: 'A jar without a name is easy to raid. A jar with a name is easier to protect.', tl: 'Madaling kunan ang jar na walang pangalan. Mas madaling ingatan ang jar na may pangalan.' },
        points: [],
        illo: 'alkansya',
        animate: false,
      },
      do: {
        type: 'match',
        prompt: { en: 'Match the jar to what it is for.', tl: 'Itugma ang jar sa para saan ito.' },
        pairs: [
          { a: { en: 'Spend', tl: 'Spend' }, b: { en: 'A snack today', tl: 'Meryenda ngayon' } },
          { a: { en: 'Save', tl: 'Save' }, b: { en: 'A toy you want in a few weeks', tl: 'Laruang gusto mo sa ilang linggo' } },
          { a: { en: 'Share', tl: 'Share' }, b: { en: 'A gift for a friend’s birthday', tl: 'Regalo sa kaarawan ng kaibigan' } },
          { a: { en: 'A gift of ₱20 from Grandma', tl: 'Regalong ₱20 mula kay Lola' }, b: { en: 'Split among the three jars too', tl: 'Hinati rin sa tatlong jar' } },
        ],
      },
      keep: {
        text: { en: 'Name each jar out loud before you count the coins.', tl: 'Sabihin nang malakas ang pangalan ng bawat jar bago bilangin ang barya.' },
        action: null,
      },
    },
    {
      id: 'kids.jars.4',
      title: { en: 'Weeks to the toy', tl: 'Ilang linggo hanggang sa laruan' },
      minutes: 3,
      hook: {
        text: { en: 'A toy costs ₱150. Your save jar gets ₱15 a week.', tl: '₱150 ang laruan. ₱15 kada linggo ang napupunta sa save jar mo.' },
        illo: 'coins',
      },
      show: {
        text: { en: 'Divide what you want by what you save each week. The answer is how long to wait.', tl: 'Hatiin ang gusto mo sa itinatabi mo kada linggo. Iyon na ang sagot kung gaano katagal ka maghihintay.' },
        points: [
          { en: '₱150 for the toy.', tl: '₱150 ang laruan.' },
          { en: '₱15 saved a week.', tl: '₱15 kada linggo ang naitabi.' },
        ],
        illo: 'coins',
        animate: false,
      },
      do: {
        type: 'number',
        prompt: { en: 'The toy costs ₱150. You save ₱15 a week. How many weeks until you can buy it?', tl: '₱150 ang laruan. ₱15 ang itinatabi mo kada linggo. Ilang linggo bago mo mabili ito?' },
        answer: 10,
        tolerance: 0,
        format: 'number',
        worked: { en: '150 ÷ 15 = 10 weeks.', tl: '150 ÷ 15 = 10 linggo.' },
      },
      keep: {
        text: { en: 'A goal with a number of weeks is easier to wait for than a goal with no end.', tl: 'Mas madaling hintayin ang goal na may bilang ng linggo kaysa goal na walang katapusan.' },
        action: null,
      },
    },
    {
      id: 'kids.jars.5',
      title: { en: 'Louie’s ₱50', tl: 'Ang ₱50 ni Louie' },
      minutes: 4,
      hook: {
        text: { en: 'Recess. Your friend Louie lost his ₱50 somewhere on the court. He has nothing left for lunch.', tl: 'Recess. Nawala sa court ang ₱50 ng kaibigan mong si Louie. Wala na siyang pambili ng lunch.' },
        illo: 'hand',
      },
      show: {
        text: { en: 'You have ₱120 saved toward a ₱150 jump rope. Louie asks you for ₱50.', tl: 'May naitabi kang ₱120 para sa ₱150 na jump rope. Hiningan ka ni Louie ng ₱50.' },
        points: [],
        illo: 'hand',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'Louie has nothing for lunch. You have ₱50 in your share jar and ₱120 in your save jar for the jump rope.', tl: 'Wala si Louie pambili ng lunch. May ₱50 ka sa share jar at ₱120 sa save jar para sa jump rope.' },
            balance: 120,
            choices: [
              { text: { en: 'Give ₱50 from your share jar', tl: 'Bigyan ng ₱50 mula sa share jar' }, next: 'a1' },
              { text: { en: 'Give ₱50 from your save jar', tl: 'Bigyan ng ₱50 mula sa save jar' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'Your share jar is empty now. Your save jar still holds ₱120 for the jump rope. Louie eats lunch.', tl: 'Ubos na ang share jar mo. Nasa ₱120 pa rin ang save jar mo para sa jump rope. Nakakain si Louie.' },
            balance: 120,
            choices: [
              { text: { en: 'Tell Louie it is a gift', tl: 'Sabihin kay Louie na regalo na lang ito' }, next: 'end1' },
              { text: { en: 'Ask Louie to fill your share jar back up next allowance day', tl: 'Hilingin kay Louie na punan ulit ang share jar mo sa susunod na baon day' }, next: 'end2' },
            ],
          },
          b1: {
            text: { en: 'Your save jar drops to ₱70. The jump rope costs ₱150. You were one week away.', tl: 'Bumaba sa ₱70 ang save jar mo. ₱150 ang jump rope. Isang linggo ka na lang sana.' },
            balance: 70,
            choices: [
              { text: { en: 'Wait longer for the jump rope', tl: 'Maghintay pa para sa jump rope' }, next: 'end3' },
              { text: { en: 'Ask Louie to give it back before the store sale ends', tl: 'Hilingin kay Louie na ibalik ito bago matapos ang sale sa tindahan' }, next: 'end4' },
            ],
          },
          end1: { text: { en: 'Your share jar stays empty for now. It fills again next allowance day. The jump rope is still on schedule.', tl: 'Walang laman muna ang share jar mo. Mapupuno ulit ito sa susunod na baon day. Nasa plano pa rin ang jump rope.' }, balance: 120, outcome: 'steady' },
          end2: { text: { en: 'Louie fills your share jar back to ₱50 the next week. You never touched your jump rope savings.', tl: 'Pinuno ni Louie ang share jar mo pabalik sa ₱50 sa susunod na linggo. Hindi mo ginalaw ang ipon mo para sa jump rope.' }, balance: 120, outcome: 'steady' },
          end3: { text: { en: 'The sale ends before Louie can give it back. The jump rope now costs ₱180 at the regular price.', tl: 'Natapos ang sale bago maibalik ni Louie ang pera. ₱180 na ang regular na presyo ng jump rope.' }, balance: 70, outcome: 'costly' },
          end4: { text: { en: 'Louie gives back ₱50 two days before the sale ends. Your save jar reaches ₱120 just in time.', tl: 'Ibinalik ni Louie ang ₱50 dalawang araw bago matapos ang sale. Umabot ulit sa ₱120 ang save jar mo sa tamang oras.' }, balance: 120, outcome: 'steady' },
        },
      },
      keep: {
        text: { en: 'Your share jar can help a friend without touching what you are saving for.', tl: 'Puwedeng makatulong ang share jar mo sa kaibigan nang hindi ginagalaw ang inipon mo.' },
        action: null,
      },
    },
  ],
};

const canteen = {
  id: 'kids.canteen',
  title: { en: 'Need or want', tl: 'Need o want' },
  summary: { en: 'Telling a need from a want with the coins in your pocket at recess.', tl: 'Paghihiwalay ng need sa want gamit ang barya sa bulsa mo sa recess.' },
  competency: { en: 'Can tell a need from a want at the canteen', tl: 'Kayang ihiwalay ang need sa want sa canteen' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'kids.canteen.1',
      title: { en: 'Need or want', tl: 'Need o want' },
      minutes: 2,
      hook: {
        text: { en: 'The canteen line has rice meals and it has ice candy. Both cost money. Only one keeps you full until 3pm.', tl: 'May rice meal at may ice candy sa canteen. Pareho itong may bayad. Isa lang ang nagpapabusog sa iyo hanggang 3pm.' },
        illo: 'cart',
      },
      show: {
        text: { en: 'A need keeps your body working: food, water, fare, school supplies. A want is everything else you like.', tl: 'Pinapatakbo ng need ang katawan mo: pagkain, tubig, pamasahe, gamit sa school. Lahat ng iba pang gusto mo, iyon na ang want.' },
        points: [
          { en: 'A need comes first, every day.', tl: 'Una ang need, araw-araw.' },
          { en: 'A want is fine, but only after the need is covered.', tl: 'Okay ang want, pero pagkatapos lang masagot ang need.' },
        ],
        illo: 'cart',
        animate: true,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each item. Left is need, right is want.', tl: 'I-sort ang bawat item. Kaliwa para sa need, kanan para sa want.' },
        left: { en: 'Need', tl: 'Need' },
        right: { en: 'Want', tl: 'Want' },
        cards: [
          { text: { en: 'Rice meal at lunch', tl: 'Rice meal sa lunch' }, side: 'left', why: { en: 'Food that gets you through the afternoon is a need.', tl: 'Need ang pagkaing tatagal hanggang hapon.' } },
          { text: { en: 'A bottle of water', tl: 'Isang bote ng tubig' }, side: 'left', why: { en: 'Your body needs water every day.', tl: 'Kailangan ng katawan mo ng tubig araw-araw.' } },
          { text: { en: 'Ice candy after lunch', tl: 'Ice candy pagkatapos ng lunch' }, side: 'right', why: { en: 'A want. It is fine once the meal is paid for.', tl: 'Want ito. Okay kapag bayad na ang lunch.' } },
          { text: { en: 'A new pencil when yours broke', tl: 'Bagong lapis nang masira ang dati' }, side: 'left', why: { en: 'A working pencil is a need for class.', tl: 'Need sa klase ang lapis na gumagana.' } },
          { text: { en: 'A sticker pack from the store', tl: 'Sticker pack sa tindahan' }, side: 'right', why: { en: 'A want. Enjoy it from the spend jar.', tl: 'Want ito. Bilhin ito gamit ang spend jar.' } },
          { text: { en: 'Jeepney fare home', tl: 'Pamasahe pauwi' }, side: 'left', why: { en: 'Getting home safely is a need.', tl: 'Need ang ligtas na pag-uwi.' } },
        ],
      },
      keep: {
        text: { en: 'A want is not wrong. It just waits its turn.', tl: 'Hindi mali ang want. Naghihintay lang ito ng turn.' },
        action: null,
      },
    },
    {
      id: 'kids.canteen.2',
      title: { en: 'How much change', tl: 'Magkano ang sukli' },
      minutes: 2,
      hook: {
        text: { en: 'You hand the canteen lady a ₱20 bill for a ₱15 rice meal.', tl: 'Binigay mo ang ₱20 sa canteen lady para sa ₱15 na rice meal.' },
        illo: 'coins',
      },
      show: {
        text: { en: 'Change is what comes back to you. It is the price subtracted from what you paid.', tl: 'Ang sukli ang bumabalik sa iyo. Ito ang presyo na binawas sa binayad mo.' },
        points: [],
        illo: 'coins',
        animate: false,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Slide to your guess: you pay ₱20 for a ₱15 rice meal. How much change should you get?', tl: 'I-slide ang hula mo: nagbayad ka ng ₱20 para sa ₱15 na rice meal. Magkano ang dapat na sukli?' },
        min: 0, max: 20, step: 1, format: 'peso', answer: 5,
        why: { en: '₱20 minus ₱15 leaves ₱5. Count it before you walk away.', tl: '₱20 minus ₱15, ₱5 ang natitira. Bilangin ito bago ka umalis.' },
      },
      keep: {
        text: { en: 'Count your change every time, even from someone you trust.', tl: 'Bilangin ang sukli tuwing pagkakataon, kahit kanino ka pinagkakatiwalaan.' },
        action: null,
      },
    },
    {
      id: 'kids.canteen.3',
      title: { en: 'Before you buy the want', tl: 'Bago bilhin ang want' },
      minutes: 2,
      hook: {
        text: { en: 'The line moves fast. You only have a moment to decide.', tl: 'Mabilis ang linya. May sandali ka lang para magpasya.' },
        illo: 'cart',
      },
      show: {
        text: { en: 'Four quick checks turn a fast decision into a good one.', tl: 'May apat na mabilisang tanong na gumagawa ng mabuting desisyon kahit mabilis lang ito.' },
        points: [],
        illo: 'cart',
        animate: false,
      },
      do: {
        type: 'order',
        prompt: { en: 'Put the steps in order before buying a want at the canteen.', tl: 'Ayusin ang mga hakbang bago bumili ng want sa canteen.' },
        steps: [
          { en: 'Check if you already ate a real meal', tl: 'Tingnan kung kumain ka na ng tunay na meal' },
          { en: 'Check how much is left in your spend jar today', tl: 'Tingnan kung magkano ang natitira sa spend jar mo ngayon' },
          { en: 'Decide if the want can wait until tomorrow', tl: 'Alamin kung kaya pang ipagpaliban ang want hanggang bukas' },
          { en: 'Buy it only if the spend jar still covers tomorrow too', tl: 'Bilhin lang kung sapat pa rin ang spend jar para bukas' },
        ],
        why: { en: 'Meal first, then the jar, then the wait, then the buy. Skipping the meal check is how a want becomes a missed lunch.', tl: 'Meal muna, tapos ang jar, tapos ang paghihintay, tapos ang bili. Kapag nilaktawan mo ang meal check, puwede kang makaligtaan ng lunch dahil sa isang want.' },
      },
      keep: {
        text: { en: 'Four checks, every time, before the want.', tl: 'Apat na tanong, tuwing pagkakataon, bago ang want.' },
        action: null,
      },
    },
    {
      id: 'kids.canteen.4',
      title: { en: 'Need or want, fast', tl: 'Need o want, mabilis' },
      minutes: 2,
      hook: {
        text: { en: 'Sixty seconds. Six things from the canteen. Need or want.', tl: 'Animnapung segundo. Anim na bagay sa canteen. Need o want.' },
        illo: 'hourglass',
      },
      show: {
        text: { en: 'A need does not disappear if you skip it. Skipping water makes you thirsty. Skipping ice candy does nothing.', tl: 'Hindi nawawala ang need kapag nilaktawan mo ito. Kapag nilaktawan mo ang tubig, nauuhaw ka. Kapag nilaktawan mo ang ice candy, wala namang nangyayari.' },
        points: [],
        illo: 'hourglass',
        animate: false,
      },
      do: {
        type: 'rapid',
        seconds: 60,
        items: [
          { text: { en: 'A rice meal at lunch is a need.', tl: 'Need ang rice meal sa lunch.' }, answer: true, why: { en: 'Food for the afternoon.', tl: 'Pagkain para sa hapon.' } },
          { text: { en: 'A toy from the school store is a need.', tl: 'Need ang laruan mula sa school store.' }, answer: false, why: { en: 'A want. It can wait.', tl: 'Want ito. Puwedeng hintayin.' } },
          { text: { en: 'Jeepney fare home is a want.', tl: 'Want ang pamasahe pauwi.' }, answer: false, why: { en: 'Getting home is a need.', tl: 'Need ang pag-uwi.' } },
          { text: { en: 'A second ice candy after already having one is a want.', tl: 'Want ang pangalawang ice candy pagkatapos ng una.' }, answer: true, why: { en: 'The first one was already the want.', tl: 'Want na ang una.' } },
          { text: { en: 'A new notebook when yours is full is a need.', tl: 'Need ang bagong notebook kapag puno na ang dati.' }, answer: true, why: { en: 'You need pages for class.', tl: 'Kailangan mo ng pahina para sa klase.' } },
          { text: { en: 'Sharing your snack with a hungry classmate is a want.', tl: 'Want ang pagbabahagi ng meryenda sa gutom na kaklase.' }, answer: false, why: { en: 'Helping a classmate eat is closer to a need for them.', tl: 'Mas malapit sa need para sa kanila ang pagtulong sa kaklaseng kumain.' } },
        ],
      },
      keep: {
        text: { en: 'When you are not sure, ask if skipping it would hurt.', tl: 'Kapag hindi sigurado, itanong kung masasaktan ka sa paglaktaw dito.' },
        action: null,
      },
    },
    {
      id: 'kids.canteen.5',
      title: { en: 'The missing ₱50', tl: 'Ang nawawalang ₱50' },
      minutes: 4,
      hook: {
        text: { en: 'You have ₱100 for the whole school day. After PE, only ₱50 is in your pocket.', tl: 'May ₱100 ka para sa buong araw sa school. Pagkatapos ng PE, ₱50 na lang ang laman ng bulsa mo.' },
        illo: 'coins',
      },
      show: {
        text: { en: 'When money goes missing, the need still has to be paid for first.', tl: 'Kapag may nawalang pera, ang need pa rin ang dapat unang mabayaran.' },
        points: [],
        illo: 'coins',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'Only ₱50 is left for the rest of the day. Recess is now. Lunch is later.', tl: '₱50 na lang ang natitira para sa buong araw. Ngayon ang recess. Mamaya ang lunch.' },
            balance: 50,
            choices: [
              { text: { en: 'Skip the recess snack, save for lunch', tl: 'Laktawan ang meryenda sa recess, itabi para sa lunch' }, next: 'a1' },
              { text: { en: 'Buy a recess snack now', tl: 'Bumili ng meryenda ngayon' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'Lunch costs ₱35. You have ₱15 left after eating.', tl: '₱35 ang lunch. May ₱15 ka na lang matapos kumain.' },
            balance: 15,
            choices: [
              { text: { en: 'Keep the ₱15 for tomorrow’s fare', tl: 'Itago ang ₱15 para sa pamasahe bukas' }, next: 'end1' },
              { text: { en: 'Spend the ₱15 on chips before checking tomorrow’s fare', tl: 'Gastusin ang ₱15 sa chips bago tingnan ang pamasahe bukas' }, next: 'end2' },
            ],
          },
          b1: {
            text: { en: 'The snack costs ₱30. You have ₱20 left for lunch.', tl: '₱30 ang meryenda. ₱20 na lang ang natitira mo para sa lunch.' },
            balance: 20,
            choices: [
              { text: { en: 'Buy the smallest lunch that ₱20 can pay for', tl: 'Bumili ng pinakamaliit na lunch na kaya ng ₱20' }, next: 'end3' },
              { text: { en: 'Skip lunch and wait until home', tl: 'Laktawan ang lunch, maghintay hanggang umuwi' }, next: 'end4' },
            ],
          },
          end1: { text: { en: 'You eat lunch and still have fare for tomorrow. The missing ₱50 did not change what mattered most.', tl: 'Nakakain ka at may pamasahe ka pa rin bukas. Hindi nabago ng nawalang ₱50 ang pinakamahalaga.' }, balance: 15, outcome: 'steady' },
          end2: { text: { en: 'The ₱15 is gone by dismissal. You walk the last three blocks home the next day.', tl: 'Naubos ang ₱15 bago ang dismissal. Naglakad ka ng tatlong bloke pauwi kinabukasan.' }, balance: 0, outcome: 'costly' },
          end3: { text: { en: 'A smaller lunch is still a full one. You owe no one anything.', tl: 'Maliit man, buo pa rin ang lunch. Wala kang utang na loob kaninuman.' }, balance: 0, outcome: 'steady' },
          end4: { text: { en: 'By the last class, you are too hungry to focus. At home, you and a parent check your bag for the missing ₱50.', tl: 'Sa huling klase, sobra kang gutom para makapag-focus. Sa bahay, hinanap ninyo ng magulang mo ang nawawalang ₱50 sa bag mo.' }, balance: 20, outcome: 'costly' },
        },
      },
      keep: {
        text: { en: 'Tell a parent when money goes missing. Two people find it faster than one.', tl: 'Sabihin sa magulang kapag may nawalang pera. Mas mabilis makahanap ang dalawa kaysa isa.' },
        action: { kind: 'open', label: { en: 'Tell a parent in Circles', tl: 'Sabihin sa magulang sa Circles' }, payload: { app: 'circles' } },
      },
    },
  ],
};

const earning = {
  id: 'kids.earning',
  title: { en: 'Earning', tl: 'Kumita' },
  summary: { en: 'Small ways to earn: chores that pay, helping at the corner store, selling to classmates.', tl: 'Maliliit na paraan para kumita: gawaing bahay na may bayad, pagtulong sa sari-sari store, pagbebenta sa kaklase.' },
  competency: { en: 'Can name three ways to earn allowance', tl: 'Kayang magsabi ng tatlong paraan para kumita ng pambaon' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'kids.earning.1',
      title: { en: 'Chores that pay', tl: 'Gawaing bahay na may bayad' },
      minutes: 2,
      hook: {
        text: { en: 'Your Uncle asks you to wash his tricycle. He says he will pay you ₱30 when it is done.', tl: 'Hinihiling ni Tito na hugasan mo ang traysikel niya. Sabi niya babayaran ka niya ng ₱30 pag tapos na.' },
        illo: 'house',
      },
      show: {
        text: { en: 'Some work at home earns money because someone agrees to pay for it first. Other help is simply part of being in the family.', tl: 'May bayad ang ibang gawain sa bahay dahil may sumang-ayon munang magbayad. Bahagi lang ng pagiging kasapi ng pamilya ang iba.' },
        points: [
          { en: 'A paid chore has an amount agreed before you start.', tl: 'May napagkasunduang halaga muna bago simulan ang may-bayad na gawain.' },
          { en: 'Family help like feeding the dog usually has no pay.', tl: 'Kadalasang walang bayad ang tulong sa pamilya tulad ng pagpapakain sa aso.' },
        ],
        illo: 'house',
        animate: true,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each chore. Left is a paid job, right is family help.', tl: 'I-sort ang bawat gawain. Kaliwa para sa may-bayad na trabaho, kanan para sa tulong sa pamilya.' },
        left: { en: 'Paid job', tl: 'May-bayad' },
        right: { en: 'Family help', tl: 'Tulong sa pamilya' },
        cards: [
          { text: { en: 'Washing Uncle’s tricycle for ₱30', tl: 'Paghuhugas ng traysikel ni Tito para sa ₱30' }, side: 'left', why: { en: 'An amount was agreed before the work started.', tl: 'May napagkasunduang halaga bago nagsimula ang trabaho.' } },
          { text: { en: 'Feeding the family dog', tl: 'Pagpapakain sa asong alaga ng pamilya' }, side: 'right', why: { en: 'A daily family job, not a paid one.', tl: 'Pang-araw-araw na gawain ng pamilya, hindi may-bayad.' } },
          { text: { en: 'Arranging your own bed', tl: 'Pag-aayos ng sarili mong kama' }, side: 'right', why: { en: 'This is your own space, not a paid task.', tl: 'Sarili mong espasyo ito, hindi ito may-bayad na gawain.' } },
          { text: { en: 'Stacking cans at Grandma’s corner store for ₱20', tl: 'Pag-aayos ng lata sa sari-sari store ni Lola para sa ₱20' }, side: 'left', why: { en: 'Grandma agreed to pay ₱20 for this task.', tl: 'Pumayag si Lola na magbayad ng ₱20 para sa gawaing ito.' } },
          { text: { en: 'Watering the plants at home', tl: 'Pagdidilig ng halaman sa bahay' }, side: 'right', why: { en: 'A regular family task with no pay attached.', tl: 'Regular na gawain ng pamilya na walang bayad.' } },
          { text: { en: 'Selling ice candy for Aunt at recess for ₱10', tl: 'Pagtitinda ng ice candy para kay Tita sa recess para sa ₱10' }, side: 'left', why: { en: 'Aunt agreed to pay ₱10 for the selling.', tl: 'Pumayag si Tita na magbayad ng ₱10 para sa pagtitinda.' } },
        ],
      },
      keep: {
        text: { en: 'A paid chore has an amount agreed before the work, not after.', tl: 'May napagkasunduang halaga muna bago ang gawain, hindi pagkatapos.' },
        action: null,
      },
    },
    {
      id: 'kids.earning.2',
      title: { en: 'Helping at the store', tl: 'Pagtulong sa tindahan' },
      minutes: 2,
      hook: {
        text: { en: 'Your Aunt asks you to restock the canned goods at her corner store for one hour.', tl: 'Hinihiling ni Tita na mag-restock ka ng de-lata sa sari-sari store niya sa loob ng isang oras.' },
        illo: 'cart',
      },
      show: {
        text: { en: 'Work traded for money needs a clear amount before the work starts, not a guess after.', tl: 'Kailangan ng malinaw na halaga bago magsimula ang trabahong ipinagpapalit sa pera, hindi hula pagkatapos.' },
        points: [],
        illo: 'cart',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'Your Aunt asks you to restock her store for one hour. What should you ask before you start?', tl: 'Hihilingin sa iyo ni Tita na mag-restock sa tindahan niya sa loob ng isang oras. Ano ang dapat mong itanong bago magsimula?' },
        options: [
          { text: { en: 'How much the pay will be', tl: 'Magkano ang magiging bayad' }, correct: true, why: { en: 'Knowing the amount first means no argument about it later.', tl: 'Kapag alam mo na ang halaga, wala nang pagtatalo tungkol dito mamaya.' } },
          { text: { en: 'Nothing, then ask for whatever feels fair after', tl: 'Wala, tapos humingi na lang ng pakiramdam na tama pagkatapos' }, correct: false, why: { en: 'A guess after the work often disappoints both sides.', tl: 'Kadalasang nakakadismaya sa inyong dalawa ang hula pagkatapos ng trabaho.' } },
          { text: { en: 'Whether you can skip the work halfway if you get tired', tl: 'Kung puwede kang huminto sa kalagitnaan kapag napagod ka' }, correct: false, why: { en: 'Agreeing to the whole hour matters more than an exit plan.', tl: 'Mas mahalaga ang pagsang-ayon sa buong oras kaysa sa paraan ng paghinto.' } },
        ],
      },
      keep: {
        text: { en: 'Ask the amount before the work starts, every time.', tl: 'Itanong ang halaga bago magsimula ang trabaho, tuwing pagkakataon.' },
        action: null,
      },
    },
    {
      id: 'kids.earning.3',
      title: { en: 'Selling to classmates', tl: 'Pagbebenta sa kaklase' },
      minutes: 2,
      hook: {
        text: { en: 'You draw stickers and sell them for ₱5 each at recess. Today you sold eight.', tl: 'Gumuhit ka ng mga sticker at ibinenta ang mga ito ng ₱5 bawat isa sa recess. Ngayon, walo ang naibenta mo.' },
        illo: 'coins',
      },
      show: {
        text: { en: 'Money earned from selling is the price times how many you sold.', tl: 'Presyo beses sa bilang na naibenta ang perang kinita sa pagtitinda.' },
        points: [
          { en: '₱5 for each sticker.', tl: '₱5 bawat sticker.' },
          { en: 'Eight stickers sold today.', tl: 'Walong sticker ang naibenta ngayon.' },
        ],
        illo: 'coins',
        animate: false,
      },
      do: {
        type: 'number',
        prompt: { en: 'You sell stickers for ₱5 each. You sold eight today. How much did you earn?', tl: 'Nagbenta ka ng sticker na ₱5 bawat isa. Walo ang naibenta mo ngayon. Magkano ang kinita mo?' },
        answer: 40,
        tolerance: 0,
        format: 'peso',
        worked: { en: '5 × 8 = 40.', tl: '5 × 8 = 40.' },
      },
      keep: {
        text: { en: 'Money earned by selling is a price times a count, nothing more.', tl: 'Presyo lang beses sa bilang ang perang kinita sa pagbebenta, wala nang iba.' },
        action: null,
      },
    },
    {
      id: 'kids.earning.4',
      title: { en: 'What is fair pay', tl: 'Ano ang tamang bayad' },
      minutes: 2,
      hook: {
        text: { en: 'A neighbor asks you to walk her dog for twenty minutes after school.', tl: 'Hihilingin sa iyo ng kapitbahay na ilakad ang aso niya sa loob ng dalawampung minuto pagkatapos ng klase.' },
        illo: 'scale',
      },
      show: {
        text: { en: 'Fair pay matches the time and effort a task takes, not just what someone offers first.', tl: 'Tugma sa oras at pagod na kailangan ng gawain ang tamang bayad, hindi lang sa unang alok.' },
        points: [],
        illo: 'scale',
        animate: false,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Slide to your guess: what is a fair amount to walk a dog for twenty minutes?', tl: 'I-slide ang hula mo: magkano ang tamang bayad sa paglalakad ng aso sa loob ng dalawampung minuto?' },
        min: 0, max: 100, step: 5, format: 'peso', answer: 20,
        why: { en: '₱20 for twenty minutes of walking is close to fair, about ₱1 a minute. This amount is illustrative; your neighborhood may set a different rate.', tl: 'Malapit sa tama ang ₱20 para sa dalawampung minutong paglalakad, mga ₱1 bawat minuto. Illustrative lang ang halagang ito; puwedeng iba ang rate sa lugar ninyo.' },
      },
      keep: {
        text: { en: 'Fair pay matches the work. Ask around before you agree to less.', tl: 'Tugma sa trabaho ang tamang bayad. Magtanong muna bago sumang-ayon sa mas mababa.' },
        action: null,
      },
    },
    {
      id: 'kids.earning.5',
      title: { en: 'A week of earning', tl: 'Isang linggong kumita' },
      minutes: 4,
      hook: {
        text: { en: 'Monday. You help at Aunt’s corner store for one hour. She pays you ₱30.', tl: 'Lunes. Tumulong ka sa sari-sari store ni Tita sa loob ng isang oras. Binayaran ka niya ng ₱30.' },
        illo: 'jars',
      },
      show: {
        text: { en: 'Earned money is easier to track when it has its own jar, separate from allowance.', tl: 'Mas madaling subaybayan ang kinitang pera kapag may sarili itong jar, hiwalay sa baon.' },
        points: [],
        illo: 'jars',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'Monday. You help at Aunt’s corner store for one hour. She pays you ₱30 for the work.', tl: 'Lunes. Tumulong ka sa sari-sari store ni Tita sa loob ng isang oras. Binayaran ka niya ng ₱30 para sa trabaho.' },
            balance: 30,
            choices: [
              { text: { en: 'Put the ₱30 with your allowance', tl: 'Ilagay ang ₱30 kasama ng baon mo' }, next: 'a1' },
              { text: { en: 'Put the ₱30 in a jar marked “earned”', tl: 'Ilagay ang ₱30 sa jar na may markang “kinita”' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'Wednesday. Your allowance pocket has allowance and earned money mixed together. Part of it is already spent on a want.', tl: 'Miyerkules. Magkahalo na sa bulsa ng baon mo ang baon at ang kinita. Nagastos na ang isang bahagi nito sa isang want.' },
            balance: 10,
            choices: [
              { text: { en: 'Keep spending from the mixed pocket', tl: 'Ituloy ang paggastos mula sa magkahalong bulsa' }, next: 'end1' },
              { text: { en: 'Start a separate jar now for future earnings', tl: 'Magsimula na ngayon ng hiwalay na jar para sa susunod na kikitain' }, next: 'end2' },
            ],
          },
          b1: {
            text: { en: 'Wednesday. You earn ₱20 more selling stickers to classmates. You add it to the earned jar.', tl: 'Miyerkules. Kumita ka ng ₱20 pa sa pagbebenta ng sticker sa kaklase. Idinagdag mo ito sa jar na kinita.' },
            balance: 50,
            choices: [
              { text: { en: 'Use ₱30 from the jar for a new pencil case', tl: 'Gamitin ang ₱30 mula sa jar para sa bagong pencil case' }, next: 'end3' },
              { text: { en: 'Leave the jar until it reaches ₱100', tl: 'Hayaan muna ang jar hanggang umabot sa ₱100' }, next: 'end4' },
            ],
          },
          end1: { text: { en: 'By the weekend, you cannot tell how much of your allowance pocket was earned. The ₱30 is gone either way.', tl: 'Pagsapit ng weekend, hindi mo na alam kung magkano sa bulsa ng baon ang kinita. Wala na rin ang ₱30 kahit paano.' }, balance: 0, outcome: 'costly' },
          end2: { text: { en: 'A separate jar starts this week. Next time you earn, it will not mix with allowance.', tl: 'Nagsimula na ang hiwalay na jar ngayong linggo. Sa susunod na kikita ka, hindi na ito maghahalo sa baon.' }, balance: 10, outcome: 'steady' },
          end3: { text: { en: 'The earned jar pays for the pencil case with money you worked for. ₱20 stays for later.', tl: 'Ang jar na kinita ang nagbayad sa pencil case gamit ang perang pinaghirapan mo. Natitira pang ₱20 para mamaya.' }, balance: 20, outcome: 'steady' },
          end4: { text: { en: 'The earned jar keeps growing toward ₱100, all of it money you worked for.', tl: 'Patuloy na lumalaki ang jar na kinita patungo sa ₱100, lahat perang pinaghirapan mo.' }, balance: 50, outcome: 'steady' },
        },
      },
      keep: {
        text: { en: 'Earned money in its own jar stays easy to count.', tl: 'Madaling bilangin ang kinitang pera kapag nasa sarili nitong jar.' },
        action: null,
      },
    },
  ],
};

const waiting = {
  id: 'kids.waiting',
  title: { en: 'Waiting', tl: 'Paghihintay' },
  summary: { en: 'Saving up for something big against buying something small right now.', tl: 'Pag-iipon para sa malaking bagay laban sa pagbili ng maliit ngayon din.' },
  competency: { en: 'Can choose to wait for a bigger want', tl: 'Kayang pumili na maghintay para sa mas malaking gusto' },
  wish: 'rid',
  status: 'authored',
  bites: [
    {
      id: 'kids.waiting.1',
      title: { en: 'Now or later', tl: 'Ngayon o mamaya' },
      minutes: 2,
      hook: {
        text: { en: 'You get ₱20 extra today. A treat at the store costs ₱20. A toy you want costs ₱350.', tl: 'May dagdag kang ₱20 ngayon. ₱20 ang treat sa tindahan. ₱350 ang laruang gusto mo.' },
        illo: 'hourglass',
      },
      show: {
        text: { en: 'Spending an amount now and saving the same amount lead to two different weeks later.', tl: 'Magkaiba ang dalawang linggo mula ngayon kung gagastusin o itatabi ang parehong halaga.' },
        points: [
          { en: 'A treat now ends today.', tl: 'Ang treat ngayon ay natatapos ngayon din.' },
          { en: 'Saved money still waits for you tomorrow.', tl: 'Ang naitabing pera ay naghihintay pa rin bukas.' },
        ],
        illo: 'hourglass',
        animate: true,
      },
      do: {
        type: 'choice',
        prompt: { en: 'You get ₱20 extra. What should you do with it?', tl: 'May dagdag kang ₱20. Ano ang gagawin mo rito?' },
        options: [
          { text: { en: 'Buy the treat now', tl: 'Bilhin ang treat ngayon' }, correct: false, why: { en: 'The treat ends today. The toy stays ₱350 away.', tl: 'Natatapos ngayon din ang treat. Nananatiling ₱350 ang layo ng laruan.' } },
          { text: { en: 'Put the ₱20 toward the toy', tl: 'Ilaan ang ₱20 para sa laruan' }, correct: true, why: { en: 'Every ₱20 saved brings the ₱350 toy closer.', tl: 'Nagpapalapit sa ₱350 na laruan ang bawat ₱20 na naitabi.' } },
          { text: { en: 'Buy two smaller treats instead of one', tl: 'Bumili ng dalawang mas maliit na treat sa halip na isa' }, correct: false, why: { en: 'Smaller or not, it still leaves nothing toward the toy.', tl: 'Maliit man o hindi, wala pa ring maiiwan para sa laruan.' } },
        ],
      },
      keep: {
        text: { en: 'A treat ends today. Saved money keeps waiting for the bigger want.', tl: 'Natatapos ngayon ang treat. Patuloy na naghihintay ang naitabing pera para sa mas malaking gusto.' },
        action: null,
      },
    },
    {
      id: 'kids.waiting.2',
      title: { en: 'How many days', tl: 'Ilang araw' },
      minutes: 3,
      hook: {
        text: { en: 'The toy costs ₱350. You save ₱20 every day from your allowance.', tl: '₱350 ang laruan. Nagtatabi ka ng ₱20 araw-araw mula sa baon mo.' },
        illo: 'coins',
      },
      show: {
        text: { en: 'Saving does not always land on the exact price. Round up to the next full day.', tl: 'Hindi laging eksakto sa presyo ang pag-ipon. I-round up sa susunod na buong araw.' },
        points: [
          { en: '17 days of ₱20 make ₱340.', tl: '17 araw ng ₱20 ay ₱340.' },
          { en: 'That is still ₱10 short of ₱350.', tl: '₱10 pa itong kulang sa ₱350.' },
        ],
        illo: 'coins',
        animate: false,
      },
      do: {
        type: 'number',
        prompt: { en: 'The toy costs ₱350. You save ₱20 a day. What is the fewest number of days until you have enough?', tl: '₱350 ang laruan. Nagtatabi ka ng ₱20 kada araw. Ano ang pinakakaunting bilang ng araw hanggang sapat na ang naitabi mo?' },
        answer: 18,
        tolerance: 0,
        format: 'number',
        worked: { en: '17 days make ₱340, not enough. 18 days make ₱360, enough for the ₱350 toy.', tl: 'Sa 17 araw, ₱340 pa lang, kulang. Sa 18 araw, ₱360 na, sapat na para sa ₱350 na laruan.' },
      },
      keep: {
        text: { en: 'A saving plan rounds up. The extra peso is not wasted, it starts the next goal.', tl: 'Nagra-round up ang plano sa pag-ipon. Hindi nasasayang ang sobrang piso, doon nagsisimula ang susunod na goal.' },
        action: null,
      },
    },
    {
      id: 'kids.waiting.3',
      title: { en: 'Guess the wait', tl: 'Hulaan ang paghihintay' },
      minutes: 2,
      hook: {
        text: { en: 'You decide to save ₱20 every day instead of buying a treat.', tl: 'Nagpasya kang magtabi ng ₱20 araw-araw sa halip na bumili ng treat.' },
        illo: 'calendar',
      },
      show: {
        text: { en: 'Two weeks is fourteen days. Multiply the daily amount by fourteen to find the total.', tl: 'Labing-apat na araw ang dalawang linggo. I-multiply ang araw-araw na halaga sa labing-apat para sa kabuuan.' },
        points: [],
        illo: 'calendar',
        animate: false,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Slide to your guess: if you save ₱20 every day, how much will you have after two weeks?', tl: 'I-slide ang hula mo: kung mag-iipon ka ng ₱20 araw-araw, magkano ang matitipon mo pagkatapos ng dalawang linggo?' },
        min: 0, max: 400, step: 20, format: 'peso', answer: 280,
        why: { en: 'Fourteen days of ₱20 make ₱280.', tl: 'Umaabot sa ₱280 ang labing-apat na araw ng ₱20.' },
      },
      keep: {
        text: { en: 'Two weeks of small savings already add up to more than you guess.', tl: 'Umaabot na sa higit sa hinuha mo ang dalawang linggo ng maliit na ipon.' },
        action: null,
      },
    },
    {
      id: 'kids.waiting.4',
      title: { en: 'Sort the wants', tl: 'Ayusin ang mga gusto' },
      minutes: 2,
      hook: {
        text: { en: 'Not every want costs the same. Some are worth a longer wait.', tl: 'Hindi pareho ang presyo ng bawat gusto. May mga karapat-dapat sa mas mahabang paghihintay.' },
        illo: 'cart',
      },
      show: {
        text: { en: 'A bigger want usually needs more days of saving than a small one.', tl: 'Kadalasang nangangailangan ng mas maraming araw ng pag-iipon ang mas malaking gusto kaysa sa maliit.' },
        points: [],
        illo: 'cart',
        animate: false,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each want. Left is worth the wait, right is fine to buy now.', tl: 'I-sort ang bawat gusto. Kaliwa para sa karapat-dapat hintayin, kanan para sa okay nang bilhin ngayon.' },
        left: { en: 'Worth the wait', tl: 'Karapat-dapat hintayin' },
        right: { en: 'Fine now', tl: 'Okay ngayon' },
        cards: [
          { text: { en: 'A ₱350 toy that lasts for years', tl: '₱350 na laruang tatagal nang ilang taon' }, side: 'left', why: { en: 'A big want that lasts is worth several weeks of saving.', tl: 'Karapat-dapat sa ilang linggong pag-iipon ang malaking gustong tumatagal.' } },
          { text: { en: 'A ₱15 ice candy on a hot day', tl: '₱15 na ice candy sa mainit na araw' }, side: 'right', why: { en: 'A small want that ends today does not need a wait.', tl: 'Hindi na kailangang hintayin ang maliit na gustong natatapos ngayon din.' } },
          { text: { en: 'A ₱200 storybook you will read many times', tl: '₱200 na storybook na babasahin mo nang paulit-ulit' }, side: 'left', why: { en: 'Repeated use over time makes the wait worth it.', tl: 'Ang paulit-ulit na gamit sa mahabang panahon ang dahilan kung bakit sulit ang paghihintay.' } },
          { text: { en: 'A ₱10 sticker for your notebook', tl: '₱10 na sticker para sa notebook mo' }, side: 'right', why: { en: 'A small, quick want does not need saving days.', tl: 'Hindi na kailangan ng araw ng pag-iipon ang maliit at mabilis na gusto.' } },
          { text: { en: 'A ₱300 art set for a hobby you keep doing', tl: '₱300 na art set para sa hobby na patuloy mong ginagawa' }, side: 'left', why: { en: 'A hobby you keep doing makes the wait worth it.', tl: 'Ang hobby na patuloy mong ginagawa ang nagpapasulit sa paghihintay.' } },
          { text: { en: 'A ₱25 keychain that just looks nice', tl: '₱25 na keychain na maganda lang tingnan' }, side: 'right', why: { en: 'A want with no lasting use is fine to buy now.', tl: 'Okay nang bilhin ngayon ang gustong walang pangmatagalang gamit.' } },
        ],
      },
      keep: {
        text: { en: 'A want that lasts is worth more days of waiting than one that ends today.', tl: 'Karapat-dapat sa mas maraming araw ng paghihintay ang gustong tumatagal kaysa sa natatapos ngayon din.' },
        action: null,
      },
    },
    {
      id: 'kids.waiting.5',
      title: { en: 'The toy that waited', tl: 'Ang laruang naghintay' },
      minutes: 4,
      hook: {
        text: { en: 'You have saved ₱200 toward the ₱350 toy. A treat at the store costs ₱20 today.', tl: 'May naitabi kang ₱200 para sa ₱350 na laruan. ₱20 ang treat sa tindahan ngayon.' },
        illo: 'tree',
      },
      show: {
        text: { en: 'Each day brings the same choice: spend the ₱20 or add it to what is already saved.', tl: 'Pareho ang pagpipilian araw-araw: gastusin ang ₱20 o idagdag sa naitabi na.' },
        points: [],
        illo: 'tree',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'You have saved ₱200 toward the ₱350 toy. A treat at the store costs ₱20 today.', tl: 'May naitabi kang ₱200 para sa ₱350 na laruan. ₱20 ang treat sa tindahan ngayon.' },
            balance: 200,
            choices: [
              { text: { en: 'Buy the treat today', tl: 'Bilhin ang treat ngayon' }, next: 'a1' },
              { text: { en: 'Skip the treat and add ₱20 to savings', tl: 'Laktawan ang treat at idagdag ang ₱20 sa ipon' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'You buy the treat. Your savings stay at ₱200, still ₱150 away from the toy.', tl: 'Binili mo ang treat. Nananatili sa ₱200 ang ipon mo, ₱150 pa ang layo sa laruan.' },
            balance: 200,
            choices: [
              { text: { en: 'Skip treats for the rest of the week', tl: 'Laktawan ang treat sa natitirang linggo' }, next: 'end1' },
              { text: { en: 'Buy a treat again tomorrow', tl: 'Bumili ulit ng treat bukas' }, next: 'end2' },
            ],
          },
          b1: {
            text: { en: 'You skip the treat. Your savings grow to ₱220.', tl: 'Nilaktawan mo ang treat. Umabot sa ₱220 ang ipon mo.' },
            balance: 220,
            choices: [
              { text: { en: 'Keep skipping treats until the toy is paid for', tl: 'Ituloy ang paglaktaw sa treat hanggang mabayaran ang laruan' }, next: 'end3' },
              { text: { en: 'Buy one treat after savings pass ₱300', tl: 'Bumili ng isang treat pagkatapos lumagpas ang ipon sa ₱300' }, next: 'end4' },
            ],
          },
          end1: { text: { en: 'Skipping treats for a week adds ₱140. Your savings reach ₱340, close to the ₱350 toy.', tl: 'Nagdadagdag ng ₱140 ang paglaktaw sa treat sa loob ng isang linggo. Umabot sa ₱340 ang ipon mo, malapit na sa ₱350 na laruan.' }, balance: 340, outcome: 'steady' },
          end2: { text: { en: 'A treat every day uses up the ₱20 you would have saved. Your savings stay at ₱200.', tl: 'Ginagastos ng treat araw-araw ang ₱20 na sana’y naitabi. Nananatili sa ₱200 ang ipon mo.' }, balance: 200, outcome: 'costly' },
          end3: { text: { en: 'Skipping every treat pays off. Your savings reach ₱350 in about seven more days.', tl: 'Nagbunga ang paglaktaw sa bawat treat. Umabot sa ₱350 ang ipon mo sa loob ng mga pitong araw pa.' }, balance: 350, outcome: 'steady' },
          end4: { text: { en: 'One treat after ₱300 still leaves the toy within reach, just a few days later.', tl: 'Naaabot pa rin ang laruan kahit bumili ng isang treat pagkatapos ng ₱300, mas kaunting araw lang ang idinagdag.' }, balance: 320, outcome: 'steady' },
        },
      },
      keep: {
        text: { en: 'The toy that waited was never out of reach, only a few days further each time.', tl: 'Hindi kailanman naging malayo ang laruang naghintay, ilang araw lang dagdag sa bawat pagkakataon.' },
        action: null,
      },
    },
  ],
};

const prices = {
  id: 'kids.prices',
  title: { en: 'Prices and change', tl: 'Presyo at sukli' },
  summary: { en: 'Counting change, buying small portions, and comparing the price of two sizes.', tl: 'Pagbilang ng sukli, pagbili ng tingi, at pagkumpara ng presyo ng dalawang laki.' },
  competency: { en: 'Can count change and compare two sizes', tl: 'Kayang bilangin ang sukli at ikumpara ang dalawang laki' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'kids.prices.1',
      title: { en: 'Counting your change', tl: 'Pagbilang ng sukli' },
      minutes: 2,
      hook: {
        text: { en: 'You pay ₱100 for a snack that costs ₱65.', tl: 'Nagbayad ka ng ₱100 para sa meryenda na nagkakahalaga ng ₱65.' },
        illo: 'coins',
      },
      show: {
        text: { en: 'Change is the price subtracted from what you paid.', tl: 'Ang sukli ang natitira kapag binawas ang presyo sa binayad mo.' },
        points: [
          { en: '₱100 paid.', tl: '₱100 ang binayad.' },
          { en: '₱65 is the price.', tl: '₱65 ang presyo.' },
        ],
        illo: 'coins',
        animate: true,
      },
      do: {
        type: 'number',
        prompt: { en: 'You pay ₱100 for a snack that costs ₱65. How much change should you get?', tl: 'Nagbayad ka ng ₱100 para sa meryendang ₱65. Magkano ang dapat na sukli?' },
        answer: 35,
        tolerance: 0,
        format: 'peso',
        worked: { en: '100 − 65 = 35.', tl: '100 − 65 = 35.' },
      },
      keep: {
        text: { en: 'Count the change before you walk away from the counter.', tl: 'Bilangin ang sukli bago ka umalis sa counter.' },
        action: null,
      },
    },
    {
      id: 'kids.prices.2',
      title: { en: 'Big pack or single pieces', tl: 'Malaking pack o tingi' },
      minutes: 3,
      hook: {
        text: { en: 'One candy sold by the piece costs ₱2. A bag of ten candies costs ₱15.', tl: '₱2 ang isang tingi na candy. ₱15 ang isang bag na may sampung candy.' },
        illo: 'bread',
      },
      show: {
        text: { en: 'The price per piece, not the price on the tag, tells you which is cheaper.', tl: 'Ang presyo bawat piraso, hindi ang presyo sa tag, ang nagsasabi kung alin ang mas mura.' },
        points: [],
        illo: 'bread',
        animate: false,
      },
      do: {
        type: 'compare',
        prompt: { en: 'Which is the cheaper way to buy candy, per piece?', tl: 'Alin ang mas murang paraan bumili ng candy, kada piraso?' },
        options: [
          { title: { en: 'One single candy', tl: 'Isang tingi na candy' }, lines: [{ en: '₱2 for one candy', tl: '₱2 para sa isang candy' }], effective: { en: '₱2 per candy', tl: '₱2 kada candy' }, cheaper: false },
          { title: { en: 'Bag of ten candies', tl: 'Bag ng sampung candy' }, lines: [{ en: '₱15 for ten candies', tl: '₱15 para sa sampung candy' }], effective: { en: '₱1.50 per candy', tl: '₱1.50 kada candy' }, cheaper: true },
        ],
        why: { en: '₱15 for ten candies is ₱1.50 each, less than the ₱2 per-piece price. The bag costs more today but less per piece.', tl: 'Kapag hinati, ₱1.50 bawat isa ang ₱15 para sa sampung candy, mas mababa kaysa ₱2 na tingi. Mas mahal ang bag ngayon pero mas mura kada piraso.' },
      },
      keep: {
        text: { en: 'Divide the price by the count before deciding which pack is cheaper.', tl: 'Hatiin ang presyo sa bilang bago magpasya kung aling pack ang mas mura.' },
        action: null,
      },
    },
    {
      id: 'kids.prices.3',
      title: { en: 'Match the coins', tl: 'Itugma ang barya' },
      minutes: 2,
      hook: {
        text: { en: 'Coins and bills add up to the same total in more than one way.', tl: 'Umaabot sa parehong kabuuan ang barya at bill sa mahigit sa isang paraan.' },
        illo: 'coins',
      },
      show: {
        text: { en: 'Counting coins one by one before you pay avoids a wrong total.', tl: 'Nakakaiwas sa maling kabuuan ang pagbilang ng barya nang isa-isa bago magbayad.' },
        points: [],
        illo: 'coins',
        animate: false,
      },
      do: {
        type: 'match',
        prompt: { en: 'Match each set of coins and bills to its total.', tl: 'Itugma ang bawat set ng barya at bill sa kabuuan nito.' },
        pairs: [
          { a: { en: 'Five ₱1 coins', tl: 'Limang ₱1 na barya' }, b: { en: '₱5 total', tl: '₱5 kabuuan' } },
          { a: { en: 'Two ₱5 coins', tl: 'Dalawang ₱5 na barya' }, b: { en: '₱10 total', tl: '₱10 kabuuan' } },
          { a: { en: 'One ₱20 bill', tl: 'Isang ₱20 na bill' }, b: { en: '₱20 total', tl: '₱20 kabuuan' } },
          { a: { en: 'One ₱20 bill and one ₱5 coin', tl: 'Isang ₱20 na bill at isang ₱5 na barya' }, b: { en: '₱25 total', tl: '₱25 kabuuan' } },
        ],
      },
      keep: {
        text: { en: 'Count coins one by one, out loud if it helps.', tl: 'Bilangin ang barya nang isa-isa, nang malakas kung nakakatulong.' },
        action: null,
      },
    },
    {
      id: 'kids.prices.4',
      title: { en: 'Steps to pay right', tl: 'Hakbang sa tamang pagbayad' },
      minutes: 2,
      hook: {
        text: { en: 'The store is busy. Paying right takes only four steps.', tl: 'Abala ang tindahan. Apat na hakbang lang ang tamang pagbayad.' },
        illo: 'cart',
      },
      show: {
        text: { en: 'A short order keeps every payment correct, even in a hurry.', tl: 'Nagpapanatiling tama ang maikling ayos sa bawat pagbayad, kahit nagmamadali.' },
        points: [],
        illo: 'cart',
        animate: false,
      },
      do: {
        type: 'order',
        prompt: { en: 'Put the steps in order for paying at the store.', tl: 'Ayusin ang mga hakbang sa pagbayad sa tindahan.' },
        steps: [
          { en: 'Check the price before you hand over money', tl: 'Tingnan ang presyo bago ibigay ang pera' },
          { en: 'Hand over the exact bill or a bigger one', tl: 'Ibigay ang eksaktong bill o mas malaking bill' },
          { en: 'Count the change in front of the seller', tl: 'Bilangin ang sukli sa harap ng nagtitinda' },
          { en: 'Put the change away before you walk', tl: 'Itago ang sukli bago lumakad' },
        ],
        why: { en: 'Checking the price first stops any mix-up before money changes hands at all.', tl: 'Ang pagtingin sa presyo muna ang pumipigil sa anumang kalituhan bago pa man magpalit ang pera.' },
      },
      keep: {
        text: { en: 'Four steps, every purchase, even in a hurry.', tl: 'Apat na hakbang, sa bawat bili, kahit nagmamadali.' },
        action: null,
      },
    },
    {
      id: 'kids.prices.5',
      title: { en: 'The wrong change', tl: 'Ang maling sukli' },
      minutes: 4,
      hook: {
        text: { en: 'You buy a notebook for ₱35 and hand over ₱100.', tl: 'Bumili ka ng notebook na ₱35 at nagbigay ng ₱100.' },
        illo: 'scale',
      },
      show: {
        text: { en: 'A wrong change is easiest to fix while you are still standing at the counter.', tl: 'Pinakamadaling ayusin ang maling sukli habang nakatayo ka pa sa counter.' },
        points: [],
        illo: 'scale',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'You buy a notebook for ₱35 and hand over ₱100. The seller starts to hand back change.', tl: 'Bumili ka ng notebook na ₱35 at nagbigay ng ₱100. Nagsisimula nang magbigay ng sukli ang nagtitinda.' },
            balance: 0,
            choices: [
              { text: { en: 'Count the change before you leave', tl: 'Bilangin ang sukli bago umalis' }, next: 'a1' },
              { text: { en: 'Walk away without counting', tl: 'Lumakad nang hindi binibilang' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'You count ₱55. The correct change should be ₱65. You are short by ₱10.', tl: 'Binilang mo ang ₱55. Dapat ₱65 ang tamang sukli. Kulang ka ng ₱10.' },
            balance: 55,
            choices: [
              { text: { en: 'Tell the seller right away', tl: 'Sabihin agad sa nagtitinda' }, next: 'end1' },
              { text: { en: 'Say nothing and keep the ₱55', tl: 'Huwag magsalita at itago ang ₱55' }, next: 'end2' },
            ],
          },
          b1: {
            text: { en: 'At home, you count only ₱55, ₱10 short of what you are owed.', tl: 'Sa bahay, ₱55 lang ang nabilang mo, kulang ng ₱10 sa dapat mong matanggap.' },
            balance: 55,
            choices: [
              { text: { en: 'Go back to the store to ask', tl: 'Bumalik sa tindahan para magtanong' }, next: 'end3' },
              { text: { en: 'Let it go since it is only ₱10', tl: 'Kalimutan na lang dahil ₱10 lang naman' }, next: 'end4' },
            ],
          },
          end1: { text: { en: 'The seller checks and hands you the missing ₱10. The full ₱65 is now yours.', tl: 'Tiningnan ito ng nagtitinda at ibinigay ang kulang na ₱10. Nasa iyo na ang buong ₱65.' }, balance: 65, outcome: 'steady' },
          end2: { text: { en: 'You keep quiet. The missing ₱10 is gone, and the seller never finds out.', tl: 'Hindi ka nagsalita. Wala na ang kulang na ₱10, at hindi na ito nalaman ng nagtitinda.' }, balance: 55, outcome: 'costly' },
          end3: { text: { en: 'The seller remembers the sale and hands over the missing ₱10.', tl: 'Naalala ng nagtitinda ang binentahan at ibinigay ang kulang na ₱10.' }, balance: 65, outcome: 'steady' },
          end4: { text: { en: 'The missing ₱10 is gone for good. Next time, counting happens before you leave.', tl: 'Wala na nang tuluyan ang kulang na ₱10. Sa susunod, magbibilang muna bago umalis.' }, balance: 55, outcome: 'costly' },
        },
      },
      keep: {
        text: { en: 'Count the change before you leave the counter, not after.', tl: 'Bilangin ang sukli bago umalis sa counter, hindi pagkatapos.' },
        action: null,
      },
    },
  ],
};

const safe = {
  id: 'kids.safe',
  title: { en: 'Safe with money', tl: 'Ligtas sa pera' },
  summary: { en: 'What never to share, who to tell, and why lending to a friend needs care.', tl: 'Kung ano ang hindi dapat ibahagi, kanino sasabihin, at bakit maingat sa pagpapahiram sa kaibigan.' },
  competency: { en: 'Can name what to never share and who to tell', tl: 'Kayang sabihin kung ano ang hindi ibabahagi at kanino magsasabi' },
  wish: 'safe',
  status: 'authored',
  bites: [
    {
      id: 'kids.safe.1',
      title: { en: 'Your PIN is yours alone', tl: 'Sarili mo lang ang PIN mo' },
      minutes: 2,
      hook: {
        text: { en: 'Your phone buzzes. A code with six numbers just arrived. Your cousin texts asking for it.', tl: 'Nag-buzz ang phone mo. Dumating lang ang code na may anim na numero. Nag-text ang pinsan mo, hinihingi ito.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'A code that arrives by text is only for the person it was sent to, even a cousin who asks.', tl: 'Para lang sa taong pinadalhan nito ang code na dumating sa text, kahit pinsan ang humihingi.' },
        points: [
          { en: 'A code is never sent to anyone else.', tl: 'Hindi ipinapadala ang code kaninuman.' },
          { en: 'A parent can check if the request is real.', tl: 'Puwedeng tingnan ng magulang kung totoo ang hinihingi.' },
        ],
        illo: 'shield',
        animate: true,
      },
      do: {
        type: 'choice',
        prompt: { en: 'Your cousin texts asking for the code that just arrived. What should you do?', tl: 'Nag-text ang pinsan mo, hinihingi ang code na kararating lang. Ano ang gagawin mo?' },
        options: [
          { text: { en: 'Send the code since he is family', tl: 'Ipadala ang code dahil pamilya naman siya' }, correct: false, why: { en: 'A code stays with the phone it arrived on, even for family.', tl: 'Nananatili ang code sa phone na pinadalhan nito, kahit sa pamilya.' } },
          { text: { en: 'Tell a parent about the text instead', tl: 'Sabihin na lang sa magulang ang tungkol sa text' }, correct: true, why: { en: 'A parent can check if the request is real before anything is sent.', tl: 'Puwedeng tingnan ng magulang kung totoo ang hinihingi bago ipadala ang anuman.' } },
          { text: { en: 'Delete the text and say nothing to anyone', tl: 'Burahin ang text at huwag sabihin kaninuman' }, correct: false, why: { en: 'Telling a parent helps stop the same message from reaching someone else.', tl: 'Nakakatulong ang pagsasabi sa magulang para mapigilan ang parehong mensahe na makarating sa iba.' } },
        ],
      },
      keep: {
        text: { en: 'A code that arrives by text stays only with you.', tl: 'Para lang sa iyo ang code na dumating sa text.' },
        action: null,
      },
    },
    {
      id: 'kids.safe.2',
      title: { en: 'True or not true online', tl: 'Totoo o hindi totoo online' },
      minutes: 2,
      hook: {
        text: { en: 'Sixty seconds. Six lines about playing games on a parent’s phone. True or not true.', tl: 'Animnapung segundo. Anim na linya tungkol sa paglalaro sa phone ng magulang. Totoo o hindi totoo.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'A rushed message is a message worth slowing down for.', tl: 'Karapat-dapat pabagalin ang mensaheng nagmamadali.' },
        points: [],
        illo: 'phone',
        animate: false,
      },
      do: {
        type: 'rapid',
        seconds: 60,
        items: [
          { text: { en: 'A code that arrives by text is only for you.', tl: 'Para lang sa iyo ang code na dumating sa text.' }, answer: true, why: { en: 'Even a request from a friend does not change this.', tl: 'Kahit hiling ito ng kaibigan, hindi ito nagbabago.' } },
          { text: { en: 'Sending a photo of a load card to a stranger online is safe.', tl: 'Ligtas magpadala ng litrato ng load card sa estranghero online.' }, answer: false, why: { en: 'The numbers on a load card are the same as giving away the load.', tl: 'Ang numero sa load card, parang ibinigay mo na ang load.' } },
          { text: { en: 'Telling a parent about a strange message is a good idea.', tl: 'Mainam na sabihin sa magulang ang tungkol sa kakaibang mensahe.' }, answer: true, why: { en: 'A parent can check if the message is real.', tl: 'Puwedeng tingnan ng magulang kung totoo ang mensahe.' } },
          { text: { en: 'A message that rushes you to answer in one minute is normal.', tl: 'Normal lang ang mensaheng nagmamadali sa iyong sumagot sa loob ng isang minuto.' }, answer: false, why: { en: 'Rushing you before you can think is a common trick.', tl: 'Karaniwang paraan ng panloloko ang pagmamadali sa iyo bago ka makapag-isip.' } },
          { text: { en: 'Keeping your PIN in your head instead of writing it down is safer.', tl: 'Mas ligtas itago ang PIN sa isip kaysa isulat ito.' }, answer: true, why: { en: 'A written PIN can be found by anyone.', tl: 'Puwedeng makita ninuman ang nakasulat na PIN.' } },
          { text: { en: 'A player who claims to work for the game company must be telling the truth.', tl: 'Palaging totoo ang sinasabi ng manlalarong nag-aangkin na nagtatrabaho sa kompanya ng game.' }, answer: false, why: { en: 'Anyone can make this claim. It does not make it true.', tl: 'Kahit sino puwedeng mag-angkin nito. Hindi nito ginagawang totoo ang sinasabi.' } },
        ],
      },
      keep: {
        text: { en: 'When a message rushes you, that is the moment to slow down.', tl: 'Kapag nagmamadali ang mensahe, doon dapat magpabagal.' },
        action: null,
      },
    },
    {
      id: 'kids.safe.3',
      title: { en: 'Lending to a friend', tl: 'Pagpapahiram sa kaibigan' },
      minutes: 2,
      hook: {
        text: { en: 'A friend asks to borrow money before class starts.', tl: 'May kaibigang naghihiram ng pera bago magsimula ang klase.' },
        illo: 'hand',
      },
      show: {
        text: { en: 'Lending is easier to manage when a few habits come first.', tl: 'Mas madaling asikasuhin ang pagpapahiram kapag may ilang ugali munang sinusunod.' },
        points: [],
        illo: 'hand',
        animate: false,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each habit. Left is okay to do, right is worth thinking twice about.', tl: 'I-sort ang bawat ugali. Kaliwa para sa okay gawin, kanan para sa isipin muna.' },
        left: { en: 'Okay to do', tl: 'Okay gawin' },
        right: { en: 'Think twice', tl: 'Isipin muna' },
        cards: [
          { text: { en: 'Lend only an amount you can afford to lose', tl: 'Magpahiram lang ng halagang kaya mong mawalan' }, side: 'left', why: { en: 'If it does not come back, your own plans stay safe.', tl: 'Kung hindi ito bumalik, ligtas pa rin ang sarili mong plano.' } },
          { text: { en: 'Lend your whole allowance for the week', tl: 'Ipahiram ang buong baon mo para sa linggo' }, side: 'right', why: { en: 'A missing whole week of allowance hurts your own plans.', tl: 'Nakakaapekto sa sarili mong plano ang pagkawala ng buong baon sa isang linggo.' } },
          { text: { en: 'Ask when the friend will pay you back', tl: 'Itanong kung kailan babayaran ka pabalik ng kaibigan' }, side: 'left', why: { en: 'A date makes it easier to remember and easier to ask.', tl: 'Mas madaling maalala at maitanong ito kapag may petsang nakatakda.' } },
          { text: { en: 'Lend again to a friend who has not paid back before', tl: 'Magpahiram ulit sa kaibigang hindi pa nakabayad noong nakaraan' }, side: 'right', why: { en: 'A pattern is worth noticing before lending again.', tl: 'Karapat-dapat pansinin kung paulit-ulit na ito bago ka magpahiram ulit.' } },
          { text: { en: 'Say no when you cannot afford to lend', tl: 'Sabihing hindi kapag hindi mo kaya' }, side: 'left', why: { en: 'Saying no once is easier than losing your own allowance.', tl: 'Mas madali ang minsang pagtanggi kaysa mawalan ng sarili mong baon.' } },
          { text: { en: 'Lend in secret without telling a parent', tl: 'Magpahiram nang lihim nang hindi sinasabi sa magulang' }, side: 'right', why: { en: 'Telling a parent helps if the amount does not come back.', tl: 'Nakakatulong ang pagsasabi sa magulang kung hindi bumalik ang halaga.' } },
        ],
      },
      keep: {
        text: { en: 'Lend only what you can afford to lose, and say the amount out loud.', tl: 'Magpahiram lang ng kaya mong mawalan, at sabihin ang halaga nang malakas.' },
        action: null,
      },
    },
    {
      id: 'kids.safe.4',
      title: { en: 'Spot the fake message', tl: 'Hanapin ang mensaheng peke' },
      minutes: 3,
      hook: {
        text: { en: 'A message arrives in a game chat from a player you have never met.', tl: 'May dumating na mensahe sa game chat mula sa manlalarong hindi mo pa nakikilala.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'A real request for help never needs your load card numbers or a rushed reply.', tl: 'Hindi kailangan ng numero ng load card mo o mabilisang sagot ang tunay na paghingi ng tulong.' },
        points: [],
        illo: 'phone',
        animate: false,
      },
      do: {
        type: 'spot',
        prompt: { en: 'Tap the lines that should worry you.', tl: 'I-tap ang mga linyang dapat pagdudahan.' },
        seconds: 20,
        message: {
          channel: 'chat',
          from: { en: 'GameBuddy23', tl: 'GameBuddy23' },
          lines: [
            { text: { en: 'Hi, I am on the same server as you.', tl: 'Hi, kasabay kita sa parehong server.' }, suspicious: false, why: { en: 'A plain greeting between players.', tl: 'Karaniwang pagbati lang sa pagitan ng mga manlalaro.' } },
            { text: { en: 'Send a picture of the back of your load card, I just need to check it.', tl: 'Pa-send ng picture ng likod ng load card niyo, kailangan ko lang tingnan.' }, suspicious: true, why: { en: 'The numbers on the back of a load card are the value itself. A photo of them is the same as giving the load away.', tl: 'Ang mga numero sa likod ng load card ang halaga mismo. Ang litrato nito, parang ibinigay mo na ang load.' } },
            { text: { en: 'Reply within one minute or your bonus is gone!', tl: 'Sagot ka sa loob ng isang minuto o mawawala na ang bonus mo!' }, suspicious: true, why: { en: 'Rushing you before you can think or ask a parent is the point.', tl: 'Layunin nitong magmadali ka bago ka makapag-isip o makapagtanong sa magulang.' } },
            { text: { en: 'I know the person who made this game, they said it is safe.', tl: 'Kilala ko yung gumawa ng game na ito, safe lang daw ito.' }, suspicious: true, why: { en: 'Anyone can claim to know someone important. It does not make the request safe.', tl: 'Kahit sino puwedeng mag-angkin ng kilalang tao. Hindi nito ginagawang ligtas ang hinihingi.' } },
            { text: { en: 'What is your favorite character in the game?', tl: 'Anong paborito mong character sa game?' }, suspicious: false, why: { en: 'An ordinary question about the game.', tl: 'Karaniwang tanong lang tungkol sa game.' } },
          ],
        },
        why: { en: 'A real request for help does not need your load card numbers or a rushed reply.', tl: 'Hindi nangangailangan ng numero ng load card mo o mabilisang sagot ang tunay na paghingi ng tulong.' },
      },
      keep: {
        text: { en: 'A stranger who asks for a load card photo is not asking for help.', tl: 'Hindi humihingi ng tulong ang estrangherong humihingi ng litrato ng load card.' },
        action: null,
      },
    },
    {
      id: 'kids.safe.5',
      title: { en: 'When it does not come back', tl: 'Kapag hindi ito bumalik' },
      minutes: 4,
      hook: {
        text: { en: 'Recess. Your classmate Ben asks to borrow ₱20 for a snack. He says he will pay you back tomorrow.', tl: 'Recess. Hihiram ng ₱20 sa iyo ang kaklase mong si Ben para sa meryenda. Sabi niya babayaran ka niya bukas.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'What you say when you lend matters as much as how much you lend.', tl: 'Kasinghalaga ng halagang pinahiram ang sinasabi mo habang nagpapahiram.' },
        points: [],
        illo: 'shield',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'Recess. Ben asks to borrow ₱20 for a snack. He says he will pay you back tomorrow.', tl: 'Recess. Hihiram si Ben ng ₱20 para sa meryenda. Sabi niya babayaran ka niya bukas.' },
            balance: 100,
            choices: [
              { text: { en: 'Lend Ben the ₱20', tl: 'Pahiramin si Ben ng ₱20' }, next: 'a1' },
              { text: { en: 'Say you cannot lend it today', tl: 'Sabihing hindi mo kayang magpahiram ngayon' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'You lend Ben ₱20. Tomorrow comes and he does not mention it.', tl: 'Pinahiram mo si Ben ng ₱20. Dumating ang bukas at wala siyang binanggit.' },
            balance: 80,
            choices: [
              { text: { en: 'Remind Ben about the ₱20', tl: 'Paalalahanan si Ben tungkol sa ₱20' }, next: 'end1' },
              { text: { en: 'Say nothing and wait', tl: 'Huwag magsalita at maghintay na lang' }, next: 'end2' },
            ],
          },
          b1: {
            text: { en: 'You say no. Ben looks for another classmate to ask.', tl: 'Sinabihan mo siyang hindi. Naghanap si Ben ng ibang kaklaseng hihingan.' },
            balance: 100,
            choices: [
              { text: { en: 'Tell Ben the reason so he understands', tl: 'Sabihin kay Ben ang dahilan para maintindihan niya' }, next: 'end3' },
              { text: { en: 'Walk away without explaining', tl: 'Lumakad nang hindi nagpapaliwanag' }, next: 'end4' },
            ],
          },
          end1: { text: { en: 'Ben remembers once you ask. He pays back the ₱20 that same day.', tl: 'Naalala ni Ben nang tanungin mo. Ibinalik niya ang ₱20 nang araw ding iyon.' }, balance: 100, outcome: 'steady' },
          end2: { text: { en: 'The ₱20 never comes up again. It is gone for good.', tl: 'Hindi na muling nabanggit ang ₱20. Wala na ito nang tuluyan.' }, balance: 80, outcome: 'costly' },
          end3: { text: { en: 'Ben understands. Your allowance for today stays at ₱100.', tl: 'Naintindihan ni Ben. Nananatili sa ₱100 ang baon mo ngayon.' }, balance: 100, outcome: 'steady' },
          end4: { text: { en: 'Ben feels brushed off, but your allowance for today still stays at ₱100.', tl: 'Nasaktan si Ben, pero nananatili pa rin sa ₱100 ang baon mo ngayon.' }, balance: 100, outcome: 'steady' },
        },
      },
      keep: {
        text: { en: 'Ask for it back once, out loud. Silence is how ₱20 disappears.', tl: 'Hingin itong pabalik nang malakas, minsan man lang. Ang katahimikan ang nagpapawala ng ₱20.' },
        action: null,
      },
    },
  ],
};

const birthday = {
  id: 'kids.birthday',
  title: { en: 'Birthday money', tl: 'Pera sa kaarawan' },
  summary: { en: 'Turning birthday envelopes into a goal, with a number of weeks to reach it.', tl: 'Paggawang goal ng pera sa sobre ng kaarawan, na may bilang ng linggo para maabot ito.' },
  competency: { en: 'Can turn birthday money into a goal with a date', tl: 'Kayang gawing goal na may petsa ang pera sa kaarawan' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'kids.birthday.1',
      title: { en: 'What came in the envelopes', tl: 'Ano ang laman ng mga sobre' },
      minutes: 2,
      hook: {
        text: { en: 'Grandma gave ₱200. Uncle gave ₱150. Godfather gave ₱150.', tl: 'Nagbigay si Lola ng ₱200. Nagbigay si Tito ng ₱150. Nagbigay si Ninong ng ₱150.' },
        illo: 'family',
      },
      show: {
        text: { en: 'Birthday money from several envelopes adds up to one total.', tl: 'Umaabot sa iisang kabuuan ang perang kaarawan mula sa ilang sobre.' },
        points: [
          { en: '₱200 from Grandma.', tl: '₱200 mula kay Lola.' },
          { en: '₱150 from Uncle.', tl: '₱150 mula kay Tito.' },
          { en: '₱150 from Godfather.', tl: '₱150 mula kay Ninong.' },
        ],
        illo: 'family',
        animate: true,
      },
      do: {
        type: 'number',
        prompt: { en: 'Grandma gave ₱200, Uncle gave ₱150, and Godfather gave ₱150. How much birthday money is that in total?', tl: 'Nagbigay si Lola ng ₱200, si Tito ng ₱150, at si Ninong ng ₱150. Magkano lahat ang perang kaarawan?' },
        answer: 500,
        tolerance: 0,
        format: 'peso',
        worked: { en: '200 + 150 + 150 = 500.', tl: '200 + 150 + 150 = 500.' },
      },
      keep: {
        text: { en: 'Count every envelope before deciding what the money is for.', tl: 'Bilangin ang bawat sobre bago magpasya kung para saan ang pera.' },
        action: null,
      },
    },
    {
      id: 'kids.birthday.2',
      title: { en: 'Name the goal', tl: 'Pangalanan ang goal' },
      minutes: 2,
      hook: {
        text: { en: 'You have ₱500 in birthday money sitting in an envelope on your desk.', tl: 'May ₱500 kang perang kaarawan na nasa sobre sa desk mo.' },
        illo: 'alkansya',
      },
      show: {
        text: { en: 'Money without a name is easy to spend without noticing.', tl: 'Madaling magastos nang hindi namamalayan ang perang walang pangalan.' },
        points: [
          { en: 'A named goal has a specific thing and a price.', tl: 'May tiyak na bagay at presyo ang goal na may pangalan.' },
          { en: 'A date makes the goal easier to work toward.', tl: 'Mas madaling abutin ang goal kapag may petsa.' },
        ],
        illo: 'alkansya',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'You have ₱500 in birthday money. What should you do first?', tl: 'May ₱500 kang perang kaarawan. Ano ang unang dapat gawin?' },
        options: [
          { text: { en: 'Spend it on the first thing you see', tl: 'Gastusin sa unang makita mo' }, correct: false, why: { en: 'Without a goal, the ₱500 disappears without a plan behind it.', tl: 'Kung walang goal, mawawala ang ₱500 nang walang planong kasunod.' } },
          { text: { en: 'Name a specific goal and a date to reach it', tl: 'Pangalanan ang tiyak na goal at petsa para maabot ito' }, correct: true, why: { en: 'A named goal with a date turns ₱500 into a plan, not just cash in an envelope.', tl: 'Ginagawang plano ng goal na may pangalan at petsa ang ₱500, hindi lang cash sa sobre.' } },
          { text: { en: 'Keep it in the envelope and forget about it', tl: 'Itago na lang sa sobre at kalimutan na ito' }, correct: false, why: { en: 'Money with no plan is easy to lose track of over time.', tl: 'Madaling mawalan ng bakas ang perang walang plano sa paglipas ng panahon.' } },
        ],
      },
      keep: {
        text: { en: 'Name the goal before the ₱500 leaves the envelope.', tl: 'Pangalanan ang goal bago umalis ang ₱500 sa sobre.' },
        action: null,
      },
    },
    {
      id: 'kids.birthday.3',
      title: { en: 'Splitting the ₱500', tl: 'Paghahati ng ₱500' },
      minutes: 3,
      hook: {
        text: { en: 'The ₱500 needs a home in the three jars, not just one.', tl: 'Kailangan ng tirahan ng ₱500 sa tatlong jar, hindi lang sa isa.' },
        illo: 'jars',
      },
      show: {
        text: { en: 'A birthday windfall can send more than usual to save, since today’s needs are already covered.', tl: 'Puwedeng magpadala nang mas marami sa save ang biglaang perang kaarawan, dahil nasagot na ang pangangailangan ngayon.' },
        points: [
          { en: 'Spend a small share for something today.', tl: 'Maliit na bahagi lang para sa ngayon.' },
          { en: 'Save most of it toward the named goal.', tl: 'Mapunta ang karamihan sa goal na pinangalanan.' },
          { en: 'Share a small part with someone else.', tl: 'Maliit na bahagi ibahagi sa iba.' },
        ],
        illo: 'jars',
        animate: false,
      },
      do: {
        type: 'allocate',
        prompt: { en: 'Split the ₱500 birthday money into the three jars.', tl: 'Hatiin ang ₱500 na perang kaarawan sa tatlong jar.' },
        total: 500,
        step: 50,
        jars: [
          { key: 'spend', label: { en: 'Spend', tl: 'Spend' }, hint: { en: 'Something small today', tl: 'Maliit na bagay ngayon' }, guide: [10, 30] },
          { key: 'save', label: { en: 'Save', tl: 'Save' }, hint: { en: 'Toward the named goal', tl: 'Para sa goal na pinangalanan' }, guide: [50, 80] },
          { key: 'share', label: { en: 'Share', tl: 'Share' }, hint: { en: 'For someone else', tl: 'Para sa iba' }, guide: [10, 20] },
        ],
        why: { en: 'A birthday amount can send more to save than a weekly allowance can, since less of it is needed today. The split here is illustrative.', tl: 'Puwedeng magpadala nang mas marami sa save ang perang kaarawan kaysa sa lingguhang baon, dahil kaunti lang ang kailangan ngayon. Illustrative lang ang hating ito.' },
      },
      keep: {
        text: { en: 'A bigger amount can still follow the same three jars.', tl: 'Kahit mas malaking halaga, sundin pa rin ang parehong tatlong jar.' },
        action: null,
      },
    },
    {
      id: 'kids.birthday.4',
      title: { en: 'Weeks to reach it', tl: 'Ilang linggo hanggang doon' },
      minutes: 2,
      hook: {
        text: { en: 'Your save jar holds ₱300 from your birthday money. The scooter you want costs ₱700.', tl: 'May ₱300 sa save jar mo mula sa perang kaarawan. ₱700 ang scooter na gusto mo.' },
        illo: 'calendar',
      },
      show: {
        text: { en: 'The gap between what is saved and what the goal costs is closed one week at a time.', tl: 'Isinasara isang linggo sa isang pagkakataon ang agwat sa pagitan ng naitabi at presyo ng goal.' },
        points: [
          { en: '₱400 more is needed.', tl: '₱400 pa ang kailangan.' },
          { en: '₱50 is added to the jar every week.', tl: '₱50 ang idinaragdag sa jar tuwing linggo.' },
        ],
        illo: 'calendar',
        animate: false,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Slide to your guess: your save jar has ₱300 and needs ₱700 for the scooter. Adding ₱50 a week, how many weeks until you reach it?', tl: 'I-slide ang hula mo: may ₱300 ang save jar mo at kailangan ng ₱700 para sa scooter. Kung ₱50 ang idadagdag kada linggo, ilang linggo bago maabot ito?' },
        min: 0, max: 20, step: 1, format: 'number', answer: 8,
        why: { en: '₱700 minus ₱300 leaves ₱400 to go. ₱400 divided by ₱50 a week is eight weeks.', tl: '₱700 minus ₱300, ₱400 pa ang kailangan. ₱400 hatiin sa ₱50 kada linggo, walong linggo ang sagot.' },
      },
      keep: {
        text: { en: 'A gap between savings and a goal is just a number of weeks away.', tl: 'Ilang linggo na lang ang layo sa pagitan ng ipon at goal.' },
        action: null,
      },
    },
    {
      id: 'kids.birthday.5',
      title: { en: 'Order the plan', tl: 'Ayusin ang plano' },
      minutes: 2,
      hook: {
        text: { en: 'Birthday money and a big want need a plan, not a guess.', tl: 'Nangangailangan ng plano, hindi hula, ang perang kaarawan at malaking gusto.' },
        illo: 'ship',
      },
      show: {
        text: { en: 'A plan in the right order turns birthday money into a goal that gets reached.', tl: 'Ang planong nasa tamang ayos ang nagpapapunta sa perang kaarawan tungo sa goal na maaabot.' },
        points: [],
        illo: 'ship',
        animate: false,
      },
      do: {
        type: 'order',
        prompt: { en: 'Put the steps in order for turning birthday money into a goal.', tl: 'Ayusin ang mga hakbang sa paggawang goal ng perang kaarawan.' },
        steps: [
          { en: 'Count all the birthday money', tl: 'Bilangin ang lahat ng perang kaarawan' },
          { en: 'Name what the goal is and its price', tl: 'Pangalanan kung ano ang goal at presyo nito' },
          { en: 'Split the money into the three jars', tl: 'Hatiin ang pera sa tatlong jar' },
          { en: 'Add a set amount to the save jar every week until the goal is reached', tl: 'Magdagdag ng takdang halaga sa save jar tuwing linggo hanggang maabot ang goal' },
        ],
        why: { en: 'Naming the goal before splitting the money means the save jar gets a real target from the start.', tl: 'Kapag pinangalanan muna ang goal bago hatiin ang pera, may tunay na target agad ang save jar.' },
      },
      keep: {
        text: { en: 'The plan works in order: count, name, split, add.', tl: 'Gumagana ang plano sa tamang ayos: bilangin, pangalanan, hatiin, magdagdag.' },
        action: null,
      },
    },
    {
      id: 'kids.birthday.6',
      title: { en: 'The piggy bank at the finish', tl: 'Ang alkansya sa dulo' },
      minutes: 4,
      hook: {
        text: { en: 'Week one. You write “Scooter, ₱700” on a sticker and stick it on your piggy bank.', tl: 'Unang linggo. Isinulat mo ang “Scooter, ₱700” sa sticker at idinikit sa alkansya mo.' },
        illo: 'alkansya',
      },
      show: {
        text: { en: 'A goal written on the piggy bank is a promise you can check every week.', tl: 'Pangakong puwede mong tingnan tuwing linggo ang goal na nakasulat sa alkansya.' },
        points: [],
        illo: 'alkansya',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'Week one. You write “Scooter, ₱700” on the piggy bank. ₱300 from your birthday money goes in.', tl: 'Unang linggo. Isinulat mo ang “Scooter, ₱700” sa alkansya. Nailagay ang ₱300 mula sa perang kaarawan.' },
            balance: 300,
            choices: [
              { text: { en: 'Add ₱50 to the piggy bank every week as planned', tl: 'Magdagdag ng ₱50 sa alkansya tuwing linggo gaya ng plano' }, next: 'a1' },
              { text: { en: 'Skip a week when a smaller want comes up', tl: 'Laktawan ang isang linggo kapag may lumitaw na mas maliit na gusto' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'Eight weeks pass. ₱50 was added every single week, no skips.', tl: 'Walong linggo ang lumipas. Nagdagdag ng ₱50 tuwing linggo, walang nilaktawan.' },
            balance: 700,
            choices: [
              { text: { en: 'Buy the scooter now', tl: 'Bilhin na ang scooter ngayon' }, next: 'end1' },
              { text: { en: 'Wait one more week to be sure', tl: 'Maghintay pa ng isang linggo para siguradong-sigurado' }, next: 'end2' },
            ],
          },
          b1: {
            text: { en: 'You skip week three for a ₱50 toy. After eight weeks, the piggy bank is ₱50 short.', tl: 'Nilaktawan mo ang ikatlong linggo para sa ₱50 na laruan. Pagkatapos ng walong linggo, kulang ng ₱50 ang alkansya.' },
            balance: 650,
            choices: [
              { text: { en: 'Add one more week of ₱50 to finish', tl: 'Magdagdag pa ng isang linggo na ₱50 para matapos' }, next: 'end3' },
              { text: { en: 'Leave it short and wait for another birthday', tl: 'Hayaan itong kulang at maghintay ng susunod na kaarawan' }, next: 'end4' },
            ],
          },
          end1: { text: { en: 'The label on the piggy bank matches the ₱700 inside. The scooter named in week one is bought.', tl: 'Tumugma ang label sa alkansya sa ₱700 na laman nito. Nabili ang scooter na pinangalanan noong unang linggo.' }, balance: 700, outcome: 'steady' },
          end2: { text: { en: 'One more week adds ₱50 past the ₱700 needed. The extra becomes the start of the next goal.', tl: 'Nagdaragdag ng ₱50 lampas sa ₱700 na kailangan ang isa pang linggo. Nagiging simula naman ng susunod na goal ang sobra.' }, balance: 750, outcome: 'steady' },
          end3: { text: { en: 'One more week of ₱50 completes the ₱700. The scooter is bought nine weeks after the label went up.', tl: 'Isa pang linggo ng ₱50 ang kumumpleto sa ₱700. Nabili ang scooter siyam na linggo matapos idikit ang label.' }, balance: 700, outcome: 'steady' },
          end4: { text: { en: 'The ₱50 gap stays unfilled for months. The scooter waits far longer than the label first promised.', tl: 'Nananatiling kulang ang ₱50 sa loob ng ilang buwan. Mas matagal pang naghintay ang scooter kaysa sa unang pangako ng label.' }, balance: 650, outcome: 'costly' },
        },
      },
      keep: {
        text: { en: 'A goal written on the piggy bank is a promise worth checking every week.', tl: 'Pangakong sulit tingnan tuwing linggo ang goal na nakasulat sa alkansya.' },
        action: null,
      },
    },
  ],
};

export default {
  id: 'kids',
  band: '7 to 12',
  title: { en: 'Piggy bank', tl: 'Alkansya' },
  tagline: { en: 'For kids with allowance, at the canteen and the corner store.', tl: 'Para sa mga batang may baon, sa canteen at sa sari-sari store.' },
  gate: 'family',
  intro: {
    text: { en: 'This path follows your own allowance: the coins in your pocket, the jars at home, and the piggy bank on the shelf. A parent reads along with you.', tl: 'Sinusundan ng path na ito ang sarili mong baon: ang barya sa bulsa mo, ang mga jar sa bahay, at ang alkansya sa estante. Kasama mong babasa ang isang magulang.' },
    video: { placeholder: 'Thirty second vertical clip. A child drops a coin into an alkansya shaped like Jinnie’s lamp, then sorts coins into three small jars labelled spend, save, share. Voice: "Your baon has three jobs." No music stings, no exclamation.' },
    illo: 'alkansya',
  },
  lessons: [jars, canteen, earning, waiting, prices, safe, birthday],
};
