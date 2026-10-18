// Path: First money (18 to 24). Lessons 1 to 5. Lessons 6 to 9 are in first2.js.
import more from './first2.js';

const sweldo = {
  id: 'first.sweldo',
  title: { en: 'Salary', tl: 'Sweldo' },
  summary: { en: 'What a payslip says, what leaves it, and what you are owed.', tl: 'Ano ang nasa payslip, ano ang binabawas, at ano ang dapat mong matanggap.' },
  competency: { en: 'Can read a payslip', tl: 'Kayang basahin ang payslip' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'first.sweldo.1',
      title: { en: 'What a payslip says', tl: 'Ano ang nasa payslip' },
      minutes: 3,
      hook: {
        text: { en: 'Your first payslip says ₱20,000 at the top and ₱18,300 at the bottom. The difference did not disappear. It went to three places.', tl: 'Sa unang payslip mo, ₱20,000 ang nasa taas at ₱18,300 ang nasa baba. Hindi nawala ang difference. Napunta ito sa tatlong lugar.' },
        illo: 'payslip',
      },
      show: {
        text: { en: 'Gross pay is what you earned. Deductions are what the law sets aside for you. Net pay is what lands in your account.', tl: 'Ang gross pay ay ang kinita mo. Ang deductions ay ang itinatabi ng batas para sa iyo. Ang net pay ay ang pumapasok sa account mo.' },
        points: [
          { en: 'SSS: 5% of your salary credit. Retirement, sickness, maternity, disability.', tl: 'SSS: 5% ng salary credit mo. Retirement, sickness, maternity, disability.' },
          { en: 'PhilHealth: 2.5% of basic pay. Hospital bills.', tl: 'PhilHealth: 2.5% ng basic pay. Hospital bills.' },
          { en: 'Pag-IBIG: 2% up to ₱200. Housing loans and savings.', tl: 'Pag-IBIG: 2% hanggang ₱200. Housing loan at savings.' },
          { en: 'Withholding tax: nothing until you earn above ₱250,000 a year.', tl: 'Withholding tax: wala hanggang lumampas sa ₱250,000 kada taon.' },
        ],
        illo: 'payslip',
        animate: true,
      },
      do: {
        type: 'number',
        prompt: { en: 'Basic pay is ₱20,000. How much is the SSS deduction on this payslip?', tl: 'Basic pay ay ₱20,000. Magkano ang SSS deduction sa payslip na ito?' },
        answer: 1000,
        tolerance: 0,
        format: 'peso',
        worked: { en: 'Employee share is 5% of the ₱20,000 salary credit. 20,000 × 0.05 = ₱1,000. Your employer adds 10% on top, which never touches your pay.', tl: 'Ang employee share ay 5% ng ₱20,000 salary credit. 20,000 × 0.05 = ₱1,000. Dagdag ng employer ang 10%, na hindi galing sa sweldo mo.' },
      },
      keep: {
        text: { en: 'Net pay is the number your budget starts from. Not gross.', tl: 'Net pay ang simula ng budget mo. Hindi gross.' },
        action: { kind: 'open', label: { en: 'Record your net pay in Wallet', tl: 'I-record ang net pay sa Wallet' }, payload: { app: 'wallet' } },
      },
    },
    {
      id: 'first.sweldo.2',
      title: { en: 'Three deductions, three promises', tl: 'Tatlong deduction, tatlong pangako' },
      minutes: 2,
      hook: {
        text: { en: 'Each line that leaves your pay buys something specific. Most people cannot say what.', tl: 'Bawat linya na binabawas sa sweldo mo ay may binibili na tiyak. Karamihan, hindi masabi kung ano.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'These are not taxes. They are memberships. Each one pays out on a day you will be glad it exists.', tl: 'Hindi ito tax. Membership ito. Bawat isa ay may bayad sa araw na matutuwa kang mayroon nito.' },
        points: [
          { en: 'SSS pays when you are sick, on maternity leave, disabled, unemployed, or retired.', tl: 'Nagbabayad ang SSS kapag may sakit, maternity leave, disabled, unemployed, o retired.' },
          { en: 'PhilHealth pays part of a hospital bill. About half of an average one, and the share has been falling.', tl: 'Nagbabayad ang PhilHealth ng bahagi ng hospital bill. Mga kalahati ng average, at bumababa pa ang bahagi.' },
          { en: 'Pag-IBIG holds your savings and lends for a house.', tl: 'Hawak ng Pag-IBIG ang savings mo at nagpapautang para sa bahay.' },
        ],
        illo: 'shield',
        animate: false,
      },
      do: {
        type: 'match',
        prompt: { en: 'Match each deduction to what it pays for.', tl: 'I-match ang bawat deduction sa binabayaran nito.' },
        pairs: [
          { a: { en: 'SSS', tl: 'SSS' }, b: { en: 'Sickness, maternity, retirement pension', tl: 'Sakit, maternity, retirement pension' } },
          { a: { en: 'PhilHealth', tl: 'PhilHealth' }, b: { en: 'Part of a hospital bill', tl: 'Bahagi ng hospital bill' } },
          { a: { en: 'Pag-IBIG', tl: 'Pag-IBIG' }, b: { en: 'Housing loan and savings with dividends', tl: 'Housing loan at savings na may dividends' } },
          { a: { en: 'Withholding tax', tl: 'Withholding tax' }, b: { en: 'Income tax paid in advance to the BIR', tl: 'Income tax na paunang bayad sa BIR' } },
        ],
      },
      keep: {
        text: { en: 'Deductions are the cheapest insurance you will ever hold. Check that your employer actually remits them.', tl: 'Ang deductions ang pinakamurang insurance na hahawakan mo. Tingnan kung talagang niremit ng employer mo.' },
        action: { kind: 'commitment', label: { en: 'Check my SSS and PhilHealth records', tl: 'Tingnan ang SSS at PhilHealth records ko' }, payload: { id: 'check-benefits' } },
      },
    },
    {
      id: 'first.sweldo.3',
      title: { en: 'Is tax taken from ₱20,000?', tl: 'May tax ba sa ₱20,000?' },
      minutes: 2,
      hook: {
        text: { en: 'A friend says a third of your salary goes to tax. Your payslip says something else.', tl: 'Sabi ng kaibigan mo, isang-katlo ng sweldo mo ay napupunta sa tax. Iba ang sinasabi ng payslip mo.' },
        illo: 'scale',
      },
      show: {
        text: { en: 'Income tax only starts above ₱250,000 of taxable income a year. ₱20,000 a month is ₱240,000 a year, and deductions lower it further.', tl: 'Nagsisimula lang ang income tax kapag lampas ₱250,000 ang taxable income kada taon. Ang ₱20,000 kada buwan ay ₱240,000 kada taon, at bumababa pa dahil sa deductions.' },
        points: [
          { en: 'First ₱250,000 a year: 0%.', tl: 'Unang ₱250,000 kada taon: 0%.' },
          { en: 'Next ₱150,000: 15%. Then 20%, 25%, 30%, 35% as income rises.', tl: 'Susunod na ₱150,000: 15%. Tapos 20%, 25%, 30%, 35% habang tumataas ang kita.' },
          { en: 'Only the peso above each line is taxed at the higher rate.', tl: 'Ang pesong lampas sa bawat linya lang ang may mas mataas na rate.' },
        ],
        illo: 'scale',
        animate: true,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Slide to your guess: monthly income tax on a ₱20,000 basic salary.', tl: 'I-slide ang hula mo: buwanang income tax sa ₱20,000 basic salary.' },
        min: 0, max: 6000, step: 100, format: 'peso', answer: 0,
        why: { en: '₱0. Annual pay of ₱240,000 sits under the ₱250,000 line, and SSS, PhilHealth and Pag-IBIG contributions are subtracted before tax is computed. Tax begins when you are promoted.', tl: '₱0. Ang ₱240,000 kada taon ay nasa ilalim ng ₱250,000 line, at binabawas pa ang SSS, PhilHealth at Pag-IBIG bago i-compute ang tax. Magsisimula ang tax kapag na-promote ka.' },
      },
      keep: {
        text: { en: 'Marginal means only the peso above the line is taxed more. A raise never leaves you with less.', tl: 'Marginal ang ibig sabihin, ang pesong lampas sa linya lang ang mas mataas ang tax. Hindi ka mababawasan dahil sa raise.' },
        action: null,
      },
    },
    {
      id: 'first.sweldo.4',
      title: { en: 'Thirteenth month', tl: '13th Month Pay' },
      minutes: 3,
      hook: {
        text: { en: 'You started in March. In December the office talks about 13th month pay. Yours will not be a full month, and that is correct.', tl: 'Nagsimula ka noong Marso. Sa Disyembre, usap-usapan ang 13th month pay. Hindi buong buwan ang sa iyo, at tama iyon.' },
        illo: 'calendar',
      },
      show: {
        text: { en: 'Thirteenth month pay is the basic salary you earned this year, divided by twelve. It is due by 24 December and tax-free up to ₱90,000 of bonuses.', tl: 'Ang 13th month pay ay ang basic salary na kinita mo ngayong taon, hinati sa labindalawa. Dapat maibigay bago 24 December at tax-free hanggang ₱90,000 ng bonuses.' },
        points: [
          { en: 'Overtime and allowances are not included. Basic pay only.', tl: 'Hindi kasama ang overtime at allowances. Basic pay lang.' },
          { en: 'Every rank-and-file employee is covered, including probationary.', tl: 'Lahat ng rank-and-file ay kasama, pati probationary.' },
        ],
        illo: 'calendar',
        animate: false,
      },
      do: {
        type: 'number',
        prompt: { en: 'Basic pay ₱20,000 a month, employed from March to December. What is the 13th month pay?', tl: 'Basic pay ₱20,000 kada buwan, employed mula Marso hanggang Disyembre. Magkano ang 13th month pay?' },
        answer: 16667,
        tolerance: 60,
        format: 'peso',
        worked: { en: 'Ten months × ₱20,000 = ₱200,000 earned. 200,000 ÷ 12 = ₱16,667.', tl: 'Sampung buwan × ₱20,000 = ₱200,000 na kinita. 200,000 ÷ 12 = ₱16,667.' },
      },
      keep: {
        text: { en: 'A bonus that arrives once a year is the easiest money to save, because you never budgeted it.', tl: 'Ang bonus na dumarating minsan sa isang taon ang pinakamadaling i-save, dahil hindi mo ito na-budget.' },
        action: { kind: 'wish', label: { en: 'Set aside half of it as a wish', tl: 'Itabi ang kalahati bilang wish' }, payload: { key: 'thirteenth', title: { en: 'Half of 13th month, kept', tl: 'Kalahati ng 13th month, naitabi' }, amount: 8300 } },
      },
    },
    {
      id: 'first.sweldo.5',
      title: { en: 'What you are owed', tl: 'Ano ang dapat mong matanggap' },
      minutes: 2,
      hook: {
        text: { en: 'Ninety seconds. Ten statements about pay in the Philippines. Some are true.', tl: 'Siyamnapung segundo. Sampung pahayag tungkol sa sweldo sa Pilipinas. May mga totoo.' },
        illo: 'hourglass',
      },
      show: {
        text: { en: 'The Labor Code sets floors. Employers can pay more, never less.', tl: 'May floor ang Labor Code. Puwedeng magbayad ng mas mataas ang employer, hindi mas mababa.' },
        points: [],
        illo: 'hourglass',
        animate: false,
      },
      do: {
        type: 'rapid',
        seconds: 90,
        items: [
          { text: { en: 'Your employer must give you a payslip.', tl: 'Dapat kang bigyan ng payslip ng employer mo.' }, answer: true, why: { en: 'Required by DOLE rules.', tl: 'Requirement ng DOLE.' } },
          { text: { en: 'Overtime on an ordinary day pays 25% extra per hour.', tl: 'Ang overtime sa ordinaryong araw ay may 25% dagdag kada oras.' }, answer: true, why: { en: 'Labor Code, Article 87.', tl: 'Labor Code, Article 87.' } },
          { text: { en: 'Night shift between 10 pm and 6 am pays 10% extra.', tl: 'Ang night shift mula 10 pm hanggang 6 am ay may 10% dagdag.' }, answer: true, why: { en: 'Night shift differential.', tl: 'Night shift differential.' } },
          { text: { en: 'The Metro Manila minimum wage is ₱500 a day.', tl: 'Ang minimum wage sa Metro Manila ay ₱500 kada araw.' }, answer: false, why: { en: '₱755 from July 2026, with ₱780 scheduled for January 2027.', tl: '₱755 mula Hulyo 2026, at ₱780 ang nakatakda sa Enero 2027.' } },
          { text: { en: 'Your employer keeps your SSS share until you resign.', tl: 'Hinahawakan ng employer ang SSS share mo hanggang mag-resign ka.' }, answer: false, why: { en: 'It must be remitted monthly. Check My.SSS.', tl: 'Dapat i-remit buwan-buwan. Tingnan sa My.SSS.' } },
          { text: { en: 'Probationary employees get 13th month pay.', tl: 'May 13th month pay ang probationary employees.' }, answer: true, why: { en: 'All rank-and-file employees.', tl: 'Lahat ng rank-and-file.' } },
          { text: { en: 'A ₱20,000 monthly salary pays income tax.', tl: 'May income tax ang ₱20,000 buwanang sweldo.' }, answer: false, why: { en: 'Under the ₱250,000 yearly line.', tl: 'Nasa ilalim ng ₱250,000 kada taon.' } },
          { text: { en: 'Service incentive leave is five paid days a year after one year.', tl: 'Limang araw na bayad ang service incentive leave kada taon pagkatapos ng isang taon.' }, answer: true, why: { en: 'Labor Code, Article 95.', tl: 'Labor Code, Article 95.' } },
          { text: { en: 'An employer can deduct the cost of a broken item without your written consent.', tl: 'Puwedeng ibawas ng employer ang sirang gamit kahit walang written consent mo.' }, answer: false, why: { en: 'Deductions need your written authorisation or a legal basis.', tl: 'Kailangan ng written authorisation mo o legal na batayan.' } },
          { text: { en: 'Holiday pay on a regular holiday is double pay if you work.', tl: 'Doble ang bayad sa regular holiday kung papasok ka.' }, answer: true, why: { en: '200% of the daily wage.', tl: '200% ng daily wage.' } },
        ],
      },
      keep: {
        text: { en: 'Keep every payslip. It is your proof for SSS, loans, and disputes.', tl: 'Itago ang bawat payslip. Ito ang patunay mo para sa SSS, loans, at reklamo.' },
        action: null,
      },
    },
    {
      id: 'first.sweldo.6',
      title: { en: 'The offer', tl: 'Ang alok' },
      minutes: 4,
      hook: {
        text: { en: 'Two job offers. One pays ₱18,000 with full benefits. The other pays ₱20,000 cash, "no deductions". Three months later you get dengue.', tl: 'Dalawang job offer. Isa ₱18,000 na may kumpletong benefits. Isa ₱20,000 cash, "walang deductions". Pagkalipas ng tatlong buwan, nagka-dengue ka.' },
        illo: 'scale',
      },
      show: {
        text: { en: 'Cash with no deductions means no SSS sickness benefit, no PhilHealth, no 13th month, no proof of income for a loan.', tl: 'Ang cash na walang deductions ay walang SSS sickness benefit, walang PhilHealth, walang 13th month, walang proof of income para sa loan.' },
        points: [],
        illo: 'scale',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'Month one. Choose the offer.', tl: 'Unang buwan. Piliin ang alok.' },
            choices: [
              { text: { en: '₱18,000 with SSS, PhilHealth, Pag-IBIG', tl: '₱18,000 na may SSS, PhilHealth, Pag-IBIG' }, next: 'a1' },
              { text: { en: '₱20,000 cash, no deductions', tl: '₱20,000 cash, walang deductions' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'Net pay is about ₱16,600 a month. Three months in, dengue puts you in hospital for five days. The bill is ₱40,000.', tl: 'Mga ₱16,600 kada buwan ang net pay. Sa ikatlong buwan, dengue. Limang araw sa ospital. ₱40,000 ang bill.' },
            balance: 16600,
            choices: [
              { text: { en: 'Present your PhilHealth number and file an SSS sickness claim', tl: 'Ibigay ang PhilHealth number at mag-file ng SSS sickness claim' }, next: 'a2' },
              { text: { en: 'Pay cash and sort it out later', tl: 'Magbayad ng cash at ayusin na lang mamaya' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'PhilHealth covers about ₱22,000 of the bill. SSS pays sickness benefit for the days you could not work. You owe ₱18,000 and keep your job.', tl: 'Mga ₱22,000 ng bill ang sagot ng PhilHealth. Nagbayad ang SSS ng sickness benefit para sa mga araw na hindi ka nakapasok. ₱18,000 ang balance mo at buo ang trabaho.' },
            balance: -18000,
            outcome: 'steady',
          },
          a3: {
            text: { en: 'You borrow ₱40,000 from a lending app at 15% a month. Six months later you have paid ₱60,000. The PhilHealth claim you never filed expires.', tl: 'Umutang ka ng ₱40,000 sa lending app sa 15% kada buwan. Pagkalipas ng anim na buwan, ₱60,000 na ang nabayaran mo. Nag-expire ang PhilHealth claim na hindi mo na-file.' },
            balance: -60000,
            outcome: 'costly',
          },
          b1: {
            text: { en: '₱20,000 lands in cash every month. Three months in, dengue puts you in hospital for five days. The bill is ₱40,000. There is no PhilHealth on record and no SSS.', tl: '₱20,000 cash kada buwan. Sa ikatlong buwan, dengue. Limang araw sa ospital. ₱40,000 ang bill. Walang PhilHealth sa record at walang SSS.' },
            balance: 20000,
            choices: [
              { text: { en: 'Ask family for ₱40,000', tl: 'Manghiram ng ₱40,000 sa pamilya' }, next: 'b2' },
              { text: { en: 'Borrow from a lending app', tl: 'Umutang sa lending app' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'Family covers it. You owe ₱40,000 with no interest and five days of unpaid absence. The ₱2,000 monthly difference took twenty months to equal one hospital stay.', tl: 'Sinagot ng pamilya. ₱40,000 ang utang mo nang walang interes at limang araw na walang sweldo. Dalawampung buwan ng ₱2,000 difference ang katumbas ng isang hospital stay.' },
            balance: -40000,
            outcome: 'costly',
          },
          b3: {
            text: { en: 'The app lends ₱40,000 at 15% a month. Six months later you have paid ₱60,000 and the collector has messaged your contacts.', tl: '₱40,000 sa 15% kada buwan. Pagkalipas ng anim na buwan, ₱60,000 na ang bayad mo at nag-message na ang collector sa contacts mo.' },
            balance: -60000,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'Benefits are pay you cannot see until the day you need them.', tl: 'Ang benefits ay sweldong hindi mo nakikita hanggang sa araw na kailangan mo.' },
        action: null,
      },
    },
  ],
};

const budget = {
  id: 'first.budget',
  title: { en: 'Budget', tl: 'Budget' },
  summary: { en: 'Where the money goes, and a plan that survives payday.', tl: 'Saan napupunta ang pera, at plano na tatagal lampas payday.' },
  competency: { en: 'Can split a salary into a plan', tl: 'Kayang hatiin ang sweldo sa isang plano' },
  wish: 'have',
  status: 'authored',
  bites: [
    {
      id: 'first.budget.1',
      title: { en: 'Need or want', tl: 'Need o want' },
      minutes: 2,
      hook: {
        text: { en: 'Payday was Friday. By Wednesday the milk tea, the load, and the delivery fees have taken more than the rent did.', tl: 'Biyernes ang payday. Pagdating ng Miyerkules, mas malaki na ang nakuha ng milk tea, load, at delivery fees kaysa sa upa.' },
        illo: 'cart',
      },
      show: {
        text: { en: 'A need keeps you housed, fed, working, and insured. A want is everything else. Both are allowed. Only one of them gets to move.', tl: 'Ang need ay ang nagpapanatili sa iyo na may tirahan, kumakain, nagtatrabaho, at insured. Ang want ay lahat ng iba. Pareho pwede. Isa lang ang puwedeng galawin.' },
        points: [],
        illo: 'cart',
        animate: false,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort each card. Left is need, right is want.', tl: 'I-sort ang bawat card. Kaliwa ay need, kanan ay want.' },
        left: { en: 'Need', tl: 'Need' },
        right: { en: 'Want', tl: 'Want' },
        cards: [
          { text: { en: 'Rent for the bedspace', tl: 'Upa sa bedspace' }, side: 'left', why: { en: 'Housing is a need.', tl: 'Need ang tirahan.' } },
          { text: { en: 'Jeep and MRT fare to work', tl: 'Pamasahe sa jeep at MRT papuntang trabaho' }, side: 'left', why: { en: 'Getting to work earns the salary.', tl: 'Ang pagpasok ang nagbibigay ng sweldo.' } },
          { text: { en: 'Daily milk tea', tl: 'Araw-araw na milk tea' }, side: 'right', why: { en: 'A want. Allowed, but it lives in the wants jar.', tl: 'Want. Pwede, pero sa wants jar ito nakatira.' } },
          { text: { en: 'Prepaid load for work chats', tl: 'Prepaid load para sa work chats' }, side: 'left', why: { en: 'A need at the size work requires. The extra is a want.', tl: 'Need sa laki na kailangan ng trabaho. Ang sobra ay want.' } },
          { text: { en: 'Streaming subscription', tl: 'Streaming subscription' }, side: 'right', why: { en: 'A want. Track it in Subscriptions so it does not hide.', tl: 'Want. I-track sa Subscriptions para hindi magtago.' } },
          { text: { en: 'PhilHealth contribution', tl: 'PhilHealth contribution' }, side: 'left', why: { en: 'Insurance is a need. It is taken before you see it.', tl: 'Need ang insurance. Binabawas ito bago mo makita.' } },
          { text: { en: 'New phone on 12-month installment', tl: 'Bagong phone na 12-month installment' }, side: 'right', why: { en: 'A want, and a debt. Two jars at once.', tl: 'Want, at utang. Dalawang jar nang sabay.' } },
          { text: { en: 'Groceries for the week', tl: 'Grocery para sa isang linggo' }, side: 'left', why: { en: 'Food is a need. Delivery fees on it are a want.', tl: 'Need ang pagkain. Ang delivery fee ay want.' } },
        ],
      },
      keep: {
        text: { en: 'You do not cut wants. You give them a size.', tl: 'Hindi mo tinatanggal ang wants. Binibigyan mo sila ng laki.' },
        action: null,
      },
    },
    {
      id: 'first.budget.2',
      title: { en: 'Four jars', tl: 'Apat na jar' },
      minutes: 3,
      hook: {
        text: { en: 'Net pay is ₱18,300. Rent, fare, food and load come to about ₱9,200. The rest has no owner yet.', tl: 'Net pay ay ₱18,300. Upa, pamasahe, pagkain at load ay mga ₱9,200. Wala pang may-ari ang natitira.' },
        illo: 'jars',
      },
      show: {
        text: { en: 'A plan is money with owners. Four jars: needs, wants, savings, debt. A common starting split is 50, 30, 20, with debt taking from wants first.', tl: 'Ang plano ay perang may may-ari. Apat na jar: needs, wants, savings, utang. Karaniwang simula ay 50, 30, 20, at ang utang ay kumukuha muna sa wants.' },
        points: [
          { en: 'Needs 50%: rent, fare, food, load, contributions.', tl: 'Needs 50%: upa, pamasahe, pagkain, load, contributions.' },
          { en: 'Wants 30%: everything you would miss but survive without.', tl: 'Wants 30%: lahat ng hahanap-hanapin mo pero mabubuhay ka nang wala.' },
          { en: 'Savings 20%: the emergency fund first, then wishes.', tl: 'Savings 20%: emergency fund muna, tapos wishes.' },
          { en: 'In Metro Manila rent can push needs past 50%. Then wants shrink, not savings.', tl: 'Sa Metro Manila, puwedeng lumampas ng 50% ang needs dahil sa upa. Wants ang lumiliit, hindi savings.' },
        ],
        illo: 'jars',
        animate: true,
      },
      do: {
        type: 'allocate',
        prompt: { en: 'Split ₱18,300 into the four jars. Needs are already about ₱9,200.', tl: 'Hatiin ang ₱18,300 sa apat na jar. Mga ₱9,200 na ang needs.' },
        total: 18300,
        step: 100,
        jars: [
          { key: 'needs', label: { en: 'Needs', tl: 'Needs' }, hint: { en: 'Rent, fare, food, load', tl: 'Upa, pamasahe, pagkain, load' }, guide: [45, 60] },
          { key: 'wants', label: { en: 'Wants', tl: 'Wants' }, hint: { en: 'Milk tea, streaming, going out', tl: 'Milk tea, streaming, gala' }, guide: [15, 30] },
          { key: 'savings', label: { en: 'Savings', tl: 'Savings' }, hint: { en: 'Emergency fund, wishes', tl: 'Emergency fund, wishes' }, guide: [15, 30] },
          { key: 'debt', label: { en: 'Debt', tl: 'Utang' }, hint: { en: 'Installments, borrowed money', tl: 'Installment, hiniram na pera' }, guide: [0, 15] },
        ],
        why: { en: 'Any split that keeps savings at 15% or more and needs under 60% will hold. The exact numbers matter less than the fact that every peso has a jar.', tl: 'Kahit anong hati na 15% o higit ang savings at wala pang 60% ang needs ay tatagal. Mas mahalaga na may jar ang bawat piso kaysa sa eksaktong numero.' },
      },
      keep: {
        text: { en: 'Fill the savings jar on payday, before the wants jar opens.', tl: 'Punuin ang savings jar sa payday, bago buksan ang wants jar.' },
        action: { kind: 'open', label: { en: 'Set the plan in Budget', tl: 'I-set ang plano sa Budget' }, payload: { app: 'budget' } },
      },
    },
    {
      id: 'first.budget.3',
      title: { en: 'Your daily number', tl: 'Ang daily number mo' },
      minutes: 2,
      hook: {
        text: { en: 'A monthly budget is hard to feel. A daily number is not. You either stayed under it today or you did not.', tl: 'Mahirap maramdaman ang monthly budget. Ang daily number, hindi. Nakalampas ka o hindi ngayong araw.' },
        illo: 'coins',
      },
      show: {
        text: { en: 'Take what is left after fixed costs and savings. Divide by the days until the next payday. That is the number you carry in your head.', tl: 'Kunin ang natitira pagkatapos ng fixed costs at savings. Hatiin sa araw hanggang sa susunod na payday. Iyon ang numerong dala mo sa isip.' },
        points: [
          { en: 'Fixed: rent ₱5,000, load ₱500, savings ₱3,600, contributions already out.', tl: 'Fixed: upa ₱5,000, load ₱500, savings ₱3,600, contributions bawas na.' },
          { en: 'Variable: food, fare, wants. This is what the daily number covers.', tl: 'Variable: pagkain, pamasahe, wants. Ito ang sakop ng daily number.' },
        ],
        illo: 'coins',
        animate: false,
      },
      do: {
        type: 'number',
        prompt: { en: 'Net pay ₱18,300. Fixed costs and savings ₱9,100. Thirty days to the next payday. What is the daily number?', tl: 'Net pay ₱18,300. Fixed costs at savings ₱9,100. Tatlumpung araw hanggang susunod na payday. Ano ang daily number?' },
        answer: 307,
        tolerance: 4,
        format: 'peso',
        worked: { en: '18,300 − 9,100 = ₱9,200. 9,200 ÷ 30 = ₱307 a day for food, fare and wants.', tl: '18,300 − 9,100 = ₱9,200. 9,200 ÷ 30 = ₱307 kada araw para sa pagkain, pamasahe at wants.' },
      },
      keep: {
        text: { en: 'A day under the number is a win you can count. Wallet counts it for you.', tl: 'Ang araw na nasa ilalim ng number ay panalo na mabibilang. Binibilang ito ng Wallet para sa iyo.' },
        action: { kind: 'commitment', label: { en: 'Record every expense for 7 days', tl: 'I-record ang bawat gastos sa loob ng 7 araw' }, payload: { id: 'record-7' } },
      },
    },
    {
      id: 'first.budget.4',
      title: { en: 'Sachet math', tl: 'Tingi math' },
      minutes: 2,
      hook: {
        text: { en: 'The corner store sells coffee at ₱8 a sachet. The supermarket sells a jar for ₱140. Which is cheaper depends on one question.', tl: 'Sa sari-sari store, ₱8 ang isang sachet ng kape. Sa supermarket, ₱140 ang isang jar. Kung alin ang mas mura ay nakadepende sa isang tanong.' },
        illo: 'cart',
      },
      show: {
        text: { en: 'Buying by the sachet is the price of not having ₱140 today. It is often the right call. Knowing the per-serving cost tells you what the convenience costs.', tl: 'Ang tingi ay ang presyo ng kawalan ng ₱140 ngayon. Madalas tama ito. Ang pag-alam ng per-serving cost ang nagsasabi kung magkano ang convenience.' },
        points: [],
        illo: 'cart',
        animate: false,
      },
      do: {
        type: 'compare',
        prompt: { en: 'Which is cheaper per cup, if you drink one cup a day?', tl: 'Alin ang mas mura kada tasa, kung isang tasa ka kada araw?' },
        options: [
          { title: { en: 'Sachets', tl: 'Sachet' }, lines: [{ en: '₱8 per sachet, one cup each', tl: '₱8 kada sachet, isang tasa' }, { en: 'Buy as you go', tl: 'Bili habang kailangan' }], effective: { en: '₱8 a cup, ₱240 a month', tl: '₱8 kada tasa, ₱240 kada buwan' }, cheaper: false },
          { title: { en: 'Jar', tl: 'Jar' }, lines: [{ en: '₱140 for 200 g', tl: '₱140 para sa 200 g' }, { en: 'About 25 cups', tl: 'Mga 25 tasa' }], effective: { en: '₱5.60 a cup, ₱168 a month', tl: '₱5.60 kada tasa, ₱168 kada buwan' }, cheaper: true },
        ],
        why: { en: 'The jar saves about ₱72 a month, ₱864 a year, on one item. The catch is the ₱140 up front. That is what a small cash buffer is for.', tl: 'Nakakatipid ang jar ng mga ₱72 kada buwan, ₱864 kada taon, sa isang item. Ang hadlang ay ang ₱140 na paunang bayad. Para diyan ang maliit na cash buffer.' },
      },
      keep: {
        text: { en: 'Convenience has a price. Pay it knowingly, not by default.', tl: 'May presyo ang convenience. Bayaran nang alam mo, hindi dahil default.' },
        action: null,
      },
    },
    {
      id: 'first.budget.5',
      title: { en: 'Three paydays', tl: 'Tatlong payday' },
      minutes: 4,
      hook: {
        text: { en: 'Three paydays in a row. Each one asks the same question in a different costume.', tl: 'Tatlong sunod na payday. Iisa ang tanong ng bawat isa, iba lang ang kasuotan.' },
        illo: 'calendar',
      },
      show: {
        text: { en: 'Payday is the only day the savings jar can be filled without effort. Every day after, it competes with everything.', tl: 'Payday lang ang araw na mapupuno ang savings jar nang walang hirap. Bawat araw pagkatapos, kalaban nito ang lahat.' },
        points: [],
        illo: 'calendar',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'Payday one. ₱18,300 arrives. A friend suggests a weekend in Tagaytay, ₱3,000.', tl: 'Unang payday. Dumating ang ₱18,300. May nag-aya sa Tagaytay, ₱3,000.' },
            balance: 18300,
            choices: [
              { text: { en: 'Move ₱3,600 to savings first, then decide', tl: 'Ilipat muna ang ₱3,600 sa savings, tapos magdesisyon' }, next: 'a1' },
              { text: { en: 'Go, and save whatever is left at month end', tl: 'Sumama, at i-save ang matitira sa katapusan' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'Savings holds ₱3,600. You go to Tagaytay from the wants jar and skip two weekends after. Payday two: your phone screen cracks. Repair ₱2,500.', tl: 'May ₱3,600 na sa savings. Sumama ka sa Tagaytay mula sa wants jar at nag-skip ng dalawang weekend. Payday two: nabasag ang screen ng phone. ₱2,500 ang repair.' },
            balance: 3600,
            choices: [
              { text: { en: 'Pay from wants, savings untouched', tl: 'Bayaran mula sa wants, hindi galawin ang savings' }, next: 'a2' },
              { text: { en: 'Pay from savings, refill later', tl: 'Bayaran mula sa savings, punan mamaya' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'Payday three. Savings ₱7,200, wants tight but honest. Month four you are one third of the way to a three-month emergency fund.', tl: 'Payday three. ₱7,200 ang savings, masikip ang wants pero tapat. Sa ikaapat na buwan, ikatlong bahagi na ng tatlong-buwang emergency fund.' },
            balance: 7200,
            outcome: 'steady',
          },
          a3: {
            text: { en: '"Later" arrives with its own expenses. Savings holds ₱4,700 after three paydays instead of ₱10,800. Still ahead, slower.', tl: 'May sariling gastos ang "mamaya". ₱4,700 ang savings pagkatapos ng tatlong payday sa halip na ₱10,800. Nauuna pa rin, mas mabagal.' },
            balance: 4700,
            outcome: 'steady',
          },
          b1: {
            text: { en: 'Tagaytay was good. Month end leaves ₱400 to save. Payday two: your phone screen cracks. Repair ₱2,500.', tl: 'Masaya ang Tagaytay. ₱400 ang natira para sa savings. Payday two: nabasag ang screen. ₱2,500 ang repair.' },
            balance: 400,
            choices: [
              { text: { en: 'Put it on a lending app, "pay next payday"', tl: 'Ilagay sa lending app, "bayad sa susunod na payday"' }, next: 'b2' },
              { text: { en: 'Move ₱3,600 to savings this time and pay repair from wants', tl: 'Ilipat ang ₱3,600 sa savings ngayon at bayaran ang repair mula sa wants' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'The app charges ₱375 for the month. Payday three starts ₱2,875 behind. Savings after three paydays: ₱400.', tl: '₱375 ang singil ng app sa isang buwan. Nagsimula ang payday three na kulang ng ₱2,875. Savings pagkatapos ng tatlong payday: ₱400.' },
            balance: 400,
            outcome: 'costly',
          },
          b3: {
            text: { en: 'Late start, right order. Savings after three paydays: ₱7,600. The first payday cost you a month of progress, not the plan.', tl: 'Huli ang simula, tama ang pagkakasunod. Savings pagkatapos ng tatlong payday: ₱7,600. Isang buwan ng progreso ang nawala sa unang payday, hindi ang plano.' },
            balance: 7600,
            outcome: 'steady',
          },
        },
      },
      keep: {
        text: { en: 'Savings first on payday is not discipline. It is sequence.', tl: 'Ang savings muna sa payday ay hindi disiplina. Pagkakasunod-sunod ito.' },
        action: { kind: 'commitment', label: { en: 'Fund a wish on the next two paydays', tl: 'Pondohan ang isang wish sa susunod na dalawang payday' }, payload: { id: 'fund-30' } },
      },
    },
  ],
};

const ipon = {
  id: 'first.ipon',
  title: { en: 'Savings', tl: 'Ipon' },
  summary: { en: 'The emergency fund: how big, where, and how to fill it without noticing.', tl: 'Ang emergency fund: gaano kalaki, saan, at paano punuin nang hindi napapansin.' },
  competency: { en: 'Can size and place an emergency fund', tl: 'Kayang sukatin at ilagay ang emergency fund' },
  wish: 'safe',
  status: 'authored',
  bites: [
    {
      id: 'first.ipon.1',
      title: { en: 'How long would you last', tl: 'Gaano ka katagal tatagal' },
      minutes: 2,
      hook: {
        text: { en: 'If your salary stopped this Friday, how many weeks before the money ran out. Most people have never done the arithmetic.', tl: 'Kung tumigil ang sweldo mo ngayong Biyernes, ilang linggo bago maubos ang pera. Karamihan, hindi pa nakukuwenta.' },
        illo: 'hourglass',
      },
      show: {
        text: { en: 'In the BSP survey of 2025, three in ten adults said their savings would last through an emergency. Seven in ten said no.', tl: 'Sa survey ng BSP noong 2025, tatlo sa sampung adult ang nagsabing tatagal ang savings nila sa emergency. Pito sa sampu, hindi.' },
        points: [
          { en: 'An emergency is a job loss, a hospital stay, a typhoon, a family call.', tl: 'Ang emergency ay pagkawala ng trabaho, ospital, bagyo, tawag ng pamilya.' },
          { en: 'The fund is not for wants. It is the wall between you and a lending app.', tl: 'Hindi para sa wants ang fund. Ito ang pader sa pagitan mo at ng lending app.' },
        ],
        illo: 'hourglass',
        animate: true,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Slide to your guess: what share of Filipino adults say their savings would last through an emergency?', tl: 'I-slide ang hula mo: ilang porsyento ng Filipino adults ang nagsasabing tatagal ang savings nila sa emergency?' },
        min: 0, max: 100, step: 5, format: 'percent', answer: 30,
        why: { en: '30%. It was 28% in 2021. The number moves slowly because the fund is built slowly.', tl: '30%. Ito ay 28% noong 2021. Mabagal gumalaw ang numero dahil mabagal itayo ang fund.' },
      },
      keep: {
        text: { en: 'The goal is to be in the three, not the seven.', tl: 'Ang layunin ay mapabilang sa tatlo, hindi sa pito.' },
        action: null,
      },
    },
    {
      id: 'first.ipon.2',
      title: { en: 'The target', tl: 'Ang target' },
      minutes: 3,
      hook: {
        text: { en: 'Three months of needs. Not three months of salary. The difference is the wants you would drop the day the salary stopped.', tl: 'Tatlong buwan ng needs. Hindi tatlong buwan ng sweldo. Ang pagkakaiba ay ang wants na ititigil mo sa araw na tumigil ang sweldo.' },
        illo: 'jars',
      },
      show: {
        text: { en: 'Emergency fund = monthly needs × 3. Six months if your income is irregular or you support family.', tl: 'Emergency fund = buwanang needs × 3. Anim na buwan kung hindi regular ang kita o may sinusuportahang pamilya.' },
        points: [
          { en: 'Needs from the budget lesson: ₱9,150 a month.', tl: 'Needs mula sa budget lesson: ₱9,150 kada buwan.' },
          { en: 'Reach it in steps: ₱5,000 first, then one month, then three.', tl: 'Abutin nang paunti-unti: ₱5,000 muna, tapos isang buwan, tapos tatlo.' },
        ],
        illo: 'jars',
        animate: false,
      },
      do: {
        type: 'number',
        prompt: { en: 'Monthly needs are ₱9,150. What is a three-month emergency fund?', tl: 'Buwanang needs ay ₱9,150. Magkano ang tatlong-buwang emergency fund?' },
        answer: 27450,
        tolerance: 0,
        format: 'peso',
        worked: { en: '9,150 × 3 = ₱27,450. At ₱3,600 a payday it takes about eight months.', tl: '9,150 × 3 = ₱27,450. Sa ₱3,600 kada payday, mga walong buwan.' },
      },
      keep: {
        text: { en: 'A number you can name is a number you can reach.', tl: 'Ang numerong kayang pangalanan ay numerong kayang abutin.' },
        action: { kind: 'wish', label: { en: 'Make this the safe wish', tl: 'Gawin itong safe wish' }, payload: { key: 'emergency', title: { en: 'Three months of needs', tl: 'Tatlong buwan ng needs' }, amount: 27450 } },
      },
    },
    {
      id: 'first.ipon.3',
      title: { en: 'Where to keep it', tl: 'Saan itatago' },
      minutes: 2,
      hook: {
        text: { en: 'Under the mattress it is safe from the bank and unsafe from everything else, including you.', tl: 'Sa ilalim ng kutson, ligtas ito sa bangko pero hindi sa lahat ng iba, pati sa iyo.' },
        illo: 'alkansya',
      },
      show: {
        text: { en: 'An emergency fund needs three things: reachable in a day, insured, and slightly out of sight.', tl: 'Tatlong bagay ang kailangan ng emergency fund: maaabot sa isang araw, insured, at bahagyang hindi nakikita.' },
        points: [
          { en: 'PDIC insures bank deposits up to ₱1,000,000 per bank.', tl: 'Insured ng PDIC ang bank deposits hanggang ₱1,000,000 kada bangko.' },
          { en: 'Digital banks pay more interest and are PDIC members too.', tl: 'Mas mataas ang interes ng digital banks at PDIC members din sila.' },
          { en: 'MP2 and bonds are for wishes, not emergencies. They lock the money.', tl: 'Ang MP2 at bonds ay para sa wishes, hindi emergencies. Naka-lock ang pera.' },
        ],
        illo: 'alkansya',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'Where should the emergency fund live?', tl: 'Saan dapat nakatira ang emergency fund?' },
        options: [
          { text: { en: 'Cash at home', tl: 'Cash sa bahay' }, correct: false, why: { en: 'Fire, theft, and the easiest money to spend. Here is the number: 0% interest.', tl: 'Sunog, nakaw, at pinakamadaling gastusin. Narito ang numero: 0% interes.' } },
          { text: { en: 'A separate savings account at a PDIC-insured bank or digital bank', tl: 'Hiwalay na savings account sa PDIC-insured na bangko o digital bank' }, correct: true, why: { en: 'Insured, reachable the same day, and not in your spending wallet.', tl: 'Insured, maaabot sa parehong araw, at hindi nasa spending wallet mo.' } },
          { text: { en: 'Pag-IBIG MP2', tl: 'Pag-IBIG MP2' }, correct: false, why: { en: 'Good for a five-year wish. Withdrawing early forfeits dividends.', tl: 'Maganda para sa limang-taong wish. Kapag maagang kinuha, nawawala ang dividends.' } },
          { text: { en: 'The e-wallet you pay with', tl: 'Ang e-wallet na pambayad mo' }, correct: false, why: { en: 'Reachable, but it sits one tap from every purchase.', tl: 'Maaabot, pero isang tap lang mula sa bawat bili.' } },
        ],
      },
      keep: {
        text: { en: 'Separate account, same-day access, insured. Nothing more clever than that.', tl: 'Hiwalay na account, same-day access, insured. Walang mas magaling pa diyan.' },
        action: { kind: 'open', label: { en: 'Add the account in Accounts', tl: 'Idagdag ang account sa Accounts' }, payload: { app: 'accounts' } },
      },
    },
    {
      id: 'first.ipon.4',
      title: { en: 'Fill it without noticing', tl: 'Punuin nang hindi napapansin' },
      minutes: 2,
      hook: {
        text: { en: 'People who save successfully rarely decide to save. They decided once, and a transfer has been happening ever since.', tl: 'Ang mga nakakapag-ipon ay bihirang magdesisyong mag-ipon. Minsan silang nagdesisyon, at may transfer na nangyayari mula noon.' },
        illo: 'calendar',
      },
      show: {
        text: { en: 'Five steps, done once. After that the fund fills itself.', tl: 'Limang hakbang, minsan lang. Pagkatapos, kusang napupuno ang fund.' },
        points: [],
        illo: 'calendar',
        animate: false,
      },
      do: {
        type: 'order',
        prompt: { en: 'Put the steps in order.', tl: 'Ayusin ang mga hakbang.' },
        steps: [
          { en: 'Name the target: ₱27,450', tl: 'Pangalanan ang target: ₱27,450' },
          { en: 'Open a separate savings account', tl: 'Magbukas ng hiwalay na savings account' },
          { en: 'Choose the payday amount: ₱3,600', tl: 'Piliin ang halaga kada payday: ₱3,600' },
          { en: 'Schedule the transfer for payday morning', tl: 'I-schedule ang transfer sa umaga ng payday' },
          { en: 'Check the balance once a month, not daily', tl: 'Tingnan ang balance minsan sa isang buwan, hindi araw-araw' },
        ],
        why: { en: 'Target, place, amount, automation, review. The transfer on payday morning is the step most people skip.', tl: 'Target, lugar, halaga, automation, review. Ang transfer sa umaga ng payday ang hakbang na madalas laktawan.' },
      },
      keep: {
        text: { en: 'I will remind you on payday. The transfer is yours to make.', tl: 'Paaalalahanan kita sa payday. Ikaw ang gagawa ng transfer.' },
        action: { kind: 'commitment', label: { en: 'Fund the safe wish for 30 days', tl: 'Pondohan ang safe wish sa loob ng 30 araw' }, payload: { id: 'fund-30' } },
      },
    },
    {
      id: 'first.ipon.5',
      title: { en: 'The flat tire month', tl: 'Ang buwan ng flat tire' },
      minutes: 4,
      hook: {
        text: { en: 'Same month, two versions. In one you have ₱27,450 set aside. In the other you have ₱0 and a good salary.', tl: 'Parehong buwan, dalawang bersyon. Sa isa, may ₱27,450 kang nakatabi. Sa isa, ₱0 at magandang sweldo.' },
        illo: 'spiral',
      },
      show: {
        text: { en: 'An emergency fund does not stop emergencies. It changes what they cost.', tl: 'Hindi pinipigilan ng emergency fund ang emergencies. Binabago nito kung magkano ang halaga nila.' },
        points: [],
        illo: 'spiral',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'Your mother calls. The roof was damaged by the typhoon. ₱15,000 for repairs before the next storm. Which version of you takes the call?', tl: 'Tumawag ang nanay mo. Nasira ng bagyo ang bubong. ₱15,000 para sa repair bago ang susunod na bagyo. Aling bersyon mo ang sasagot?' },
            choices: [
              { text: { en: 'The one with ₱27,450 set aside', tl: 'Ang may ₱27,450 na nakatabi' }, next: 'a1' },
              { text: { en: 'The one with ₱0 set aside', tl: 'Ang may ₱0 na nakatabi' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'You send ₱15,000 the same day. The fund drops to ₱12,450. Two weeks later your laptop charger dies. ₱1,800.', tl: 'Nagpadala ka ng ₱15,000 sa parehong araw. Bumaba ang fund sa ₱12,450. Dalawang linggo pagkatapos, nasira ang laptop charger. ₱1,800.' },
            balance: 12450,
            choices: [
              { text: { en: 'Pay from the fund, restart the payday transfer', tl: 'Bayaran mula sa fund, ipagpatuloy ang payday transfer' }, next: 'a2' },
              { text: { en: 'Pay from wants, fund untouched', tl: 'Bayaran mula sa wants, hindi galawin ang fund' }, next: 'a2' },
            ],
          },
          a2: {
            text: { en: 'The month ends with no new debt. The fund refills at ₱3,600 a payday and is whole again in five months. Nobody outside the family knows anything happened.', tl: 'Natapos ang buwan nang walang bagong utang. Napupuno ulit ang fund sa ₱3,600 kada payday at buo ulit sa limang buwan. Walang nakakaalam sa labas ng pamilya.' },
            balance: 10650,
            outcome: 'steady',
          },
          b1: {
            text: { en: 'You have ₱2,100 until payday. The roof cannot wait. Two ways to find ₱15,000 tonight.', tl: 'May ₱2,100 ka hanggang payday. Hindi makakapaghintay ang bubong. Dalawang paraan para makahanap ng ₱15,000 ngayong gabi.' },
            balance: 2100,
            choices: [
              { text: { en: 'Lending app, 15% a month', tl: 'Lending app, 15% kada buwan' }, next: 'b2' },
              { text: { en: 'Ask a cousin, repay in three paydays', tl: 'Manghiram sa pinsan, bayaran sa tatlong payday' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'You repay ₱17,250 next payday and cannot, so you roll it. Three months later the total paid is ₱21,750 and the collector has your contacts. The roof is fixed.', tl: 'Dapat magbayad ng ₱17,250 sa susunod na payday at hindi kaya, kaya nag-roll. Pagkalipas ng tatlong buwan, ₱21,750 na ang bayad at nasa collector ang contacts mo. Ayos na ang bubong.' },
            balance: -21750,
            outcome: 'costly',
          },
          b3: {
            text: { en: 'No interest, but three paydays with ₱5,000 less each, and a debt to family that sits at every gathering. The roof is fixed. The fund still does not exist.', tl: 'Walang interes, pero tatlong payday na kulang ng ₱5,000 bawat isa, at utang sa pamilya na nandiyan sa bawat salu-salo. Ayos na ang bubong. Wala pa ring fund.' },
            balance: -15000,
            outcome: 'costly',
          },
        },
      },
      keep: {
        text: { en: 'The fund is the difference between a bad month and a bad year.', tl: 'Ang fund ang pagkakaiba ng masamang buwan at masamang taon.' },
        action: null,
      },
    },
  ],
};

const utang = {
  id: 'first.utang',
  title: { en: 'Debt', tl: 'Utang' },
  summary: { en: 'What credit actually costs: cards, apps, 5-6, installments, and your credit report.', tl: 'Ang tunay na halaga ng utang: cards, apps, 5-6, installment, at ang credit report mo.' },
  competency: { en: 'Can price a loan', tl: 'Kayang kuwentahin ang presyo ng utang' },
  wish: 'rid',
  status: 'authored',
  bites: [
    {
      id: 'first.utang.1',
      title: { en: 'The minimum payment', tl: 'Ang minimum payment' },
      minutes: 3,
      hook: {
        text: { en: 'The credit card statement says balance ₱10,000, minimum due ₱500. Paying the minimum feels like paying. It is mostly renting the debt.', tl: 'Sabi ng statement, balance ₱10,000, minimum due ₱500. Parang pagbabayad ang minimum. Pag-upa lang ito sa utang.' },
        illo: 'card',
      },
      show: {
        text: { en: 'Card interest is capped at 3% a month. On ₱10,000 that is ₱300 a month before you touch the principal.', tl: 'Hanggang 3% kada buwan ang interes ng card. Sa ₱10,000, ₱300 kada buwan iyon bago mo mabawasan ang principal.' },
        points: [
          { en: 'Pay ₱500: ₱300 is interest, ₱200 reduces the debt.', tl: 'Magbayad ng ₱500: ₱300 ay interes, ₱200 ang bawas sa utang.' },
          { en: 'Pay the full balance by the due date: 0% interest. The card is free.', tl: 'Bayaran ang buong balance bago due date: 0% interes. Libre ang card.' },
        ],
        illo: 'card',
        animate: true,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Slide to your guess: paying ₱500 a month on ₱10,000 at 3% a month, how many months to reach zero?', tl: 'I-slide ang hula mo: magbayad ng ₱500 kada buwan sa ₱10,000 sa 3% kada buwan, ilang buwan bago mag-zero?' },
        min: 0, max: 60, step: 1, format: 'months', answer: 31,
        why: { en: 'About 31 months, and about ₱15,500 paid in total. ₱5,500 of interest on a ₱10,000 purchase. Pay ₱1,000 a month instead and it ends in 12.', tl: 'Mga 31 buwan, at mga ₱15,500 ang kabuuang bayad. ₱5,500 na interes sa ₱10,000 na bili. Magbayad ng ₱1,000 kada buwan at 12 buwan lang.' },
      },
      keep: {
        text: { en: 'The minimum is the card company’s number. Yours is the full balance.', tl: 'Ang minimum ay numero ng card company. Ang sa iyo ay ang buong balance.' },
        action: { kind: 'open', label: { en: 'Post the card balance in Credit', tl: 'I-post ang card balance sa Credit' }, payload: { app: 'credit' } },
      },
    },
    {
      id: 'first.utang.2',
      title: { en: 'Five-six', tl: 'Five-six' },
      minutes: 2,
      hook: {
        text: { en: 'Borrow ₱5,000 today, return ₱6,000 in forty days. No forms. It sounds like ₱1,000.', tl: 'Umutang ng ₱5,000 ngayon, magbalik ng ₱6,000 sa apatnapung araw. Walang forms. Parang ₱1,000 lang.' },
        illo: 'spiral',
      },
      show: {
        text: { en: 'The price of a loan is the interest per period and how many periods fit in a year. Five-six fits nine cycles into a year.', tl: 'Ang presyo ng utang ay ang interes kada period at ilang period ang kasya sa isang taon. Siyam na cycle ang kasya ng five-six sa isang taon.' },
        points: [
          { en: '₱1,000 on ₱5,000 is 20% per cycle.', tl: '₱1,000 sa ₱5,000 ay 20% kada cycle.' },
          { en: 'Nine cycles a year: over 180% before compounding.', tl: 'Siyam na cycle sa isang taon: lampas 180% bago ang compounding.' },
          { en: 'A credit card at the 3% cap is 36% a year. Five-six costs five times more.', tl: 'Ang credit card sa 3% cap ay 36% kada taon. Limang beses mas mahal ang five-six.' },
        ],
        illo: 'spiral',
        animate: false,
      },
      do: {
        type: 'number',
        prompt: { en: 'Borrow ₱5,000, repay ₱6,000 in one cycle. What is the interest rate per cycle, in percent?', tl: 'Umutang ng ₱5,000, magbayad ng ₱6,000 sa isang cycle. Ilang porsyento ang interes kada cycle?' },
        answer: 20,
        tolerance: 0,
        format: 'percent',
        worked: { en: '(6,000 − 5,000) ÷ 5,000 = 0.20 = 20% for forty days. Times nine cycles: 180% a year.', tl: '(6,000 − 5,000) ÷ 5,000 = 0.20 = 20% sa apatnapung araw. Beses siyam na cycle: 180% kada taon.' },
      },
      keep: {
        text: { en: 'Always turn a loan into a yearly rate before you say yes.', tl: 'Laging gawing yearly rate ang utang bago sumagot ng oo.' },
        action: null,
      },
    },
    {
      id: 'first.utang.3',
      title: { en: 'Which is cheaper', tl: 'Alin ang mas mura' },
      minutes: 2,
      hook: {
        text: { en: 'You need ₱5,000 for a month. The pawnshop and the lending app both say yes in ten minutes.', tl: 'Kailangan mo ng ₱5,000 sa isang buwan. Parehong oo ang pawnshop at lending app sa loob ng sampung minuto.' },
        illo: 'scale',
      },
      show: {
        text: { en: 'Compare the total you will hand back, not the words on the ad.', tl: 'Ikumpara ang kabuuang ibabalik mo, hindi ang salita sa ad.' },
        points: [],
        illo: 'scale',
        animate: false,
      },
      do: {
        type: 'compare',
        prompt: { en: 'Which costs less for ₱5,000 over 30 days?', tl: 'Alin ang mas mura para sa ₱5,000 sa 30 araw?' },
        options: [
          { title: { en: 'Pawnshop', tl: 'Pawnshop' }, lines: [{ en: 'Pledge a gold ring', tl: 'Isangla ang gold ring' }, { en: '₱4 per ₱100 a month', tl: '₱4 kada ₱100 kada buwan' }], effective: { en: 'Repay ₱5,200. 4% for the month, about 48% a year', tl: 'Bayaran ₱5,200. 4% sa buwan, mga 48% kada taon' }, cheaper: true },
          { title: { en: 'Lending app', tl: 'Lending app' }, lines: [{ en: 'No collateral', tl: 'Walang collateral' }, { en: '"Service fee" ₱750 deducted, repay ₱5,000 in 30 days', tl: '"Service fee" ₱750 bawas, bayaran ₱5,000 sa 30 araw' }], effective: { en: 'Receive ₱4,250, repay ₱5,000. 17.6% for the month, over 200% a year', tl: 'Tanggap ₱4,250, bayad ₱5,000. 17.6% sa buwan, lampas 200% kada taon' }, cheaper: false },
        ],
        why: { en: 'The app never said a rate. It said a fee. A fee taken up front on a small, short loan is the most expensive kind of interest there is. BSP caps small loans at 15% a month, and this one breaks it.', tl: 'Hindi nagsabi ng rate ang app. Fee ang sinabi. Ang fee na bawas agad sa maliit at maikling utang ang pinakamahal na uri ng interes. Hanggang 15% kada buwan ang cap ng BSP sa maliit na utang, at lampas dito ang isang ito.' },
      },
      keep: {
        text: { en: 'A fee is interest wearing a different name.', tl: 'Ang fee ay interes na may ibang pangalan.' },
        action: null,
      },
    },
    {
      id: 'first.utang.4',
      title: { en: 'Buy now, pay later', tl: 'Buy now, pay later' },
      minutes: 2,
      hook: {
        text: { en: 'Four payments of ₱1,250, zero interest, one tap. Nothing about that sentence is false. Something about it is missing.', tl: 'Apat na bayad na ₱1,250, zero interest, isang tap. Walang mali sa pangungusap. May kulang.' },
        illo: 'cart',
      },
      show: {
        text: { en: 'Installments move a want into the needs jar for four months. Late fees, not interest, are where the cost hides.', tl: 'Inililipat ng installment ang want sa needs jar sa loob ng apat na buwan. Sa late fees, hindi interes, nagtatago ang halaga.' },
        points: [],
        illo: 'cart',
        animate: false,
      },
      do: {
        type: 'swipe',
        prompt: { en: 'Sort the statements. Left is true, right is false.', tl: 'I-sort ang mga pahayag. Kaliwa ay totoo, kanan ay mali.' },
        left: { en: 'True', tl: 'Totoo' },
        right: { en: 'False', tl: 'Mali' },
        cards: [
          { text: { en: 'Zero-interest installments can still cost money through late fees', tl: 'Puwedeng magkagastos pa rin ang zero-interest installment dahil sa late fees' }, side: 'left', why: { en: 'Late fees are the business model.', tl: 'Late fees ang negosyo.' } },
          { text: { en: 'An installment is a debt and belongs in the Debts app', tl: 'Ang installment ay utang at dapat nasa Debts app' }, side: 'left', why: { en: 'Every future payment is a commitment.', tl: 'Bawat susunod na bayad ay commitment.' } },
          { text: { en: 'Three installments at once are fine if each is small', tl: 'Okay lang ang tatlong installment nang sabay kung maliit ang bawat isa' }, side: 'right', why: { en: 'Three small payments are one large one.', tl: 'Tatlong maliit na bayad ay isang malaki.' } },
          { text: { en: 'Missing one payment can be reported to the Credit Information Corporation', tl: 'Puwedeng i-report sa Credit Information Corporation ang isang missed payment' }, side: 'left', why: { en: 'Licensed lenders submit to the CIC.', tl: 'Nagsu-submit sa CIC ang licensed lenders.' } },
          { text: { en: 'The price is the same whether you pay in full or in four', tl: 'Pareho ang presyo kahit buo o hati sa apat ang bayad' }, side: 'right', why: { en: 'Often there is a cash price and an installment price. Ask.', tl: 'Madalas may cash price at installment price. Magtanong.' } },
          { text: { en: 'A ₱5,000 phone at four payments costs ₱1,250 a month from the needs jar', tl: 'Ang ₱5,000 na phone sa apat na bayad ay ₱1,250 kada buwan mula sa needs jar' }, side: 'left', why: { en: 'It is fixed. That makes it a need until it is paid.', tl: 'Fixed ito. Kaya need ito hanggang mabayaran.' } },
        ],
      },
      keep: {
        text: { en: 'Post every installment in Debts on the day you sign. Then it cannot surprise you.', tl: 'I-post ang bawat installment sa Debts sa araw na pumirma ka. Hindi ka nito masosorpresa.' },
        action: { kind: 'open', label: { en: 'Open Debts', tl: 'Buksan ang Debts' }, payload: { app: 'debts' } },
      },
    },
    {
      id: 'first.utang.5',
      title: { en: 'Your credit report', tl: 'Ang credit report mo' },
      minutes: 2,
      hook: {
        text: { en: 'Somewhere there is a file with your name on it, listing every loan you took and whether you paid. You are allowed to read it.', tl: 'May file na may pangalan mo, nakalista ang bawat utang mo at kung nagbayad ka. Puwede mo itong basahin.' },
        illo: 'certificate',
      },
      show: {
        text: { en: 'The Credit Information Corporation collects loan histories from banks, cards, and licensed lenders. A clean file lowers the rate on your next loan.', tl: 'Kinokolekta ng Credit Information Corporation ang loan history mula sa bangko, cards, at licensed lenders. Ang malinis na file ay nagpapababa ng rate sa susunod mong utang.' },
        points: [],
        illo: 'certificate',
        animate: false,
      },
      do: {
        type: 'order',
        prompt: { en: 'Order the steps to check your credit report.', tl: 'Ayusin ang mga hakbang para tingnan ang credit report mo.' },
        steps: [
          { en: 'Choose a CIC-accredited credit bureau', tl: 'Pumili ng CIC-accredited credit bureau' },
          { en: 'Verify your identity with a government ID', tl: 'I-verify ang identity mo gamit ang government ID' },
          { en: 'Request the report', tl: 'I-request ang report' },
          { en: 'Read every loan listed and its status', tl: 'Basahin ang bawat utang na nakalista at ang status nito' },
          { en: 'Dispute anything that is not yours or already paid', tl: 'I-dispute ang hindi sa iyo o bayad na' },
        ],
        why: { en: 'Errors happen. A paid loan still marked open can cost you a housing loan later.', tl: 'May mga mali. Ang bayad na utang na naka-open pa ay puwedeng makasira ng housing loan mo mamaya.' },
      },
      keep: {
        text: { en: 'Read your file once a year. Before a big loan, read it twice.', tl: 'Basahin ang file mo minsan sa isang taon. Bago ang malaking utang, dalawang beses.' },
        action: null,
      },
    },
    {
      id: 'first.utang.6',
      title: { en: 'The gadget on installment', tl: 'Ang gadget na installment' },
      minutes: 4,
      hook: {
        text: { en: 'A ₱24,000 phone. Twelve payments of ₱2,000. Your wants jar is ₱4,000. Walk through six months.', tl: 'Isang ₱24,000 na phone. Labindalawang bayad na ₱2,000. ₱4,000 ang wants jar mo. Daanan ang anim na buwan.' },
        illo: 'phone',
      },
      show: {
        text: { en: 'A fixed payment does not care what month it is.', tl: 'Walang pakialam ang fixed payment kung anong buwan.' },
        points: [],
        illo: 'phone',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'Month one. The store offers 12 × ₱2,000 at zero interest, or ₱22,000 cash if you wait three months and save for it.', tl: 'Unang buwan. Alok ng tindahan: 12 × ₱2,000 na zero interest, o ₱22,000 cash kung maghihintay ka ng tatlong buwan at mag-iipon.' },
            balance: 4000,
            choices: [
              { text: { en: 'Sign the installment now', tl: 'Pumirma sa installment ngayon' }, next: 'a1' },
              { text: { en: 'Save ₱7,400 a month for three months', tl: 'Mag-ipon ng ₱7,400 kada buwan sa tatlong buwan' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'Wants jar is now ₱2,000 for twelve months. Month three: a cousin’s wedding, ₱3,000 for the gift and the trip.', tl: '₱2,000 na lang ang wants jar sa loob ng labindalawang buwan. Ikatlong buwan: kasal ng pinsan, ₱3,000 para sa regalo at biyahe.' },
            balance: 2000,
            choices: [
              { text: { en: 'Skip the phone payment this month', tl: 'Laktawan ang bayad sa phone ngayong buwan' }, next: 'a2' },
              { text: { en: 'Go cheaper on the gift, pay the phone', tl: 'Mas mura ang regalo, bayaran ang phone' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'Late fee ₱500 and a mark on your credit file. Month six you have paid ₱10,500 for ₱10,000 of phone, and the file will be read by the bank when you apply for anything.', tl: '₱500 na late fee at marka sa credit file mo. Sa ikaanim na buwan, ₱10,500 na ang bayad para sa ₱10,000 na phone, at babasahin ng bangko ang file kapag nag-apply ka ng kahit ano.' },
            balance: -10500,
            outcome: 'costly',
          },
          a3: {
            text: { en: 'Month six: on schedule, six payments left, wants jar tight for the rest of the year. The phone is fine. The year is smaller than it needed to be.', tl: 'Ikaanim na buwan: nasa schedule, anim na bayad pa, masikip ang wants jar sa buong taon. Okay ang phone. Mas maliit ang taon kaysa kailangan.' },
            balance: -12000,
            outcome: 'steady',
          },
          b1: {
            text: { en: 'Three months with ₱600 of wants a month. Month three: a cousin’s wedding, ₱3,000 for the gift and the trip.', tl: 'Tatlong buwan na ₱600 lang ang wants. Ikatlong buwan: kasal ng pinsan, ₱3,000 para sa regalo at biyahe.' },
            balance: 14800,
            choices: [
              { text: { en: 'Take ₱3,000 from the phone fund, buy the phone month four', tl: 'Kumuha ng ₱3,000 sa phone fund, bilhin ang phone sa ikaapat na buwan' }, next: 'b2' },
              { text: { en: 'Skip the wedding trip', tl: 'Laktawan ang biyahe sa kasal' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'Month four you pay ₱22,000 cash, ₱2,000 under the installment price, with no file, no fee, and a wedding attended. Month six the wants jar is back to ₱4,000.', tl: 'Sa ikaapat na buwan, ₱22,000 cash, ₱2,000 mas mura kaysa installment, walang file, walang fee, at nakadalo sa kasal. Sa ikaanim na buwan, balik sa ₱4,000 ang wants jar.' },
            balance: 4000,
            outcome: 'steady',
          },
          b3: {
            text: { en: 'Month three you pay ₱22,000 cash. The phone is yours and ₱2,000 cheaper. The wedding photos have a gap where you were.', tl: 'Sa ikatlong buwan, ₱22,000 cash. Sa iyo na ang phone at ₱2,000 mas mura. May puwang sa wedding photos kung nasaan ka dapat.' },
            balance: 4000,
            outcome: 'steady',
          },
        },
      },
      keep: {
        text: { en: 'Saving for it first costs the same wants jar, for a shorter time, with no file.', tl: 'Ang pag-ipon muna ay parehong wants jar, mas maikling panahon, walang file.' },
        action: null,
      },
    },
  ],
};

const proteksyon = {
  id: 'first.proteksyon',
  title: { en: 'Proteksyon', tl: 'Proteksyon' },
  summary: { en: 'PhilHealth, SSS, HMO and insurance: what each one pays, and what none of them do.', tl: 'PhilHealth, SSS, HMO at insurance: ano ang bayad ng bawat isa, at ano ang hindi.' },
  competency: { en: 'Can tell what each protection pays', tl: 'Alam kung ano ang bayad ng bawat proteksyon' },
  wish: 'safe',
  status: 'authored',
  bites: [
    {
      id: 'first.proteksyon.1',
      title: { en: 'What PhilHealth pays', tl: 'Ano ang bayad ng PhilHealth' },
      minutes: 2,
      hook: {
        text: { en: 'The hospital bill is ₱40,000. You have PhilHealth. The cashier asks for ₱17,600. Nobody explained the gap.', tl: '₱40,000 ang hospital bill. May PhilHealth ka. Humihingi ang cashier ng ₱17,600. Walang nagpaliwanag ng kulang.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'PhilHealth pays a fixed amount per condition, not a share of the bill. On average it covered about 52% of a hospital bill in 2023, down from 75% in 2018, because case rates have not kept up with hospital charges.', tl: 'Nagbabayad ang PhilHealth ng fixed na halaga kada kondisyon, hindi bahagi ng bill. Sa average, mga 52% ng hospital bill noong 2023, mula 75% noong 2018, dahil hindi nakasabay ang case rates sa singil ng ospital.' },
        points: [
          { en: 'The rest is yours, an HMO’s, or a private insurer’s.', tl: 'Ang natitira ay sa iyo, sa HMO, o sa private insurer.' },
          { en: 'Public hospitals and ward rooms leave a smaller gap than private rooms.', tl: 'Mas maliit ang kulang sa public hospital at ward kaysa private room.' },
        ],
        illo: 'shield',
        animate: true,
      },
      do: {
        type: 'predict',
        prompt: { en: 'Slide to your guess: what share of an average hospital bill does PhilHealth cover?', tl: 'I-slide ang hula mo: ilang porsyento ng average hospital bill ang sagot ng PhilHealth?' },
        min: 0, max: 100, step: 5, format: 'percent', answer: 52,
        why: { en: 'About 52% in 2023, by a PIDS study of support value, down from 75% in 2018. It varies by condition and hospital. The gap is why an emergency fund and an HMO exist.', tl: 'Mga 52% noong 2023, ayon sa pag-aaral ng PIDS sa support value, mula 75% noong 2018. Nag-iiba ayon sa kondisyon at ospital. Ang kulang ang dahilan kung bakit may emergency fund at HMO.' },
      },
      keep: {
        text: { en: 'PhilHealth is the floor, not the ceiling.', tl: 'Ang PhilHealth ay ang sahig, hindi ang kisame.' },
        action: null,
      },
    },
    {
      id: 'first.proteksyon.2',
      title: { en: 'Six things SSS pays for', tl: 'Anim na binabayaran ng SSS' },
      minutes: 2,
      hook: {
        text: { en: 'Most members meet SSS twice: on the payslip and at 60. It pays out on four other occasions in between.', tl: 'Dalawang beses lang nakikita ng karamihan ang SSS: sa payslip at sa 60. May apat pang pagkakataon sa pagitan.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'Every benefit needs contributions on record. Check My.SSS; if your employer did not remit, the benefit is not there.', tl: 'Kailangan ng contributions sa record ang bawat benefit. Tingnan ang My.SSS; kung hindi nag-remit ang employer, wala ang benefit.' },
        points: [],
        illo: 'shield',
        animate: false,
      },
      do: {
        type: 'match',
        prompt: { en: 'Match the event to the SSS benefit.', tl: 'I-match ang pangyayari sa SSS benefit.' },
        pairs: [
          { a: { en: 'Off work sick for five days', tl: 'Limang araw na may sakit' }, b: { en: 'Sickness benefit, daily allowance', tl: 'Sickness benefit, araw-araw na allowance' } },
          { a: { en: 'Giving birth', tl: 'Manganganak' }, b: { en: 'Maternity benefit, 105 days', tl: 'Maternity benefit, 105 araw' } },
          { a: { en: 'Laid off', tl: 'Natanggal sa trabaho' }, b: { en: 'Unemployment benefit, up to two months', tl: 'Unemployment benefit, hanggang dalawang buwan' } },
          { a: { en: 'Turning 60 with 120 contributions', tl: 'Mag-60 na may 120 contributions' }, b: { en: 'Monthly retirement pension', tl: 'Buwanang retirement pension' } },
          { a: { en: 'Permanent injury', tl: 'Permanenteng pinsala' }, b: { en: 'Disability benefit', tl: 'Disability benefit' } },
        ],
      },
      keep: {
        text: { en: 'Fewer than 120 contributions at 60 means a lump sum, not a pension. Count them.', tl: 'Kulang sa 120 contributions sa 60 ay lump sum, hindi pension. Bilangin.' },
        action: { kind: 'commitment', label: { en: 'Check my SSS and PhilHealth records', tl: 'Tingnan ang SSS at PhilHealth records ko' }, payload: { id: 'check-benefits' } },
      },
    },
    {
      id: 'first.proteksyon.3',
      title: { en: 'Term or VUL', tl: 'Term o VUL' },
      minutes: 3,
      hook: {
        text: { en: 'An agent offers ₱1,000,000 of life cover for ₱3,000 a month "with investment". Another company offers the same cover for ₱600 a month with nothing else.', tl: 'May agent na nag-aalok ng ₱1,000,000 life cover sa ₱3,000 kada buwan "na may investment". May ibang kumpanya na parehong cover sa ₱600 kada buwan, wala nang iba.' },
        illo: 'scale',
      },
      show: {
        text: { en: 'Term insurance is cover only. VUL bundles cover with an investment and charges for both. Whether you need cover at all depends on who depends on you.', tl: 'Ang term insurance ay cover lang. Ang VUL ay cover na may kasamang investment at may bayad sa pareho. Kung kailangan mo ng cover ay nakadepende sa kung sino ang umaasa sa iyo.' },
        points: [
          { en: 'No dependants: an emergency fund and PhilHealth come first.', tl: 'Walang dependants: emergency fund at PhilHealth muna.' },
          { en: 'Dependants: buy the cover you need as term, invest the difference yourself.', tl: 'May dependants: bilhin ang cover na kailangan bilang term, ikaw na ang mag-invest ng difference.' },
          { en: 'Amounts here are illustrative. Quotes depend on age and health.', tl: 'Illustrative ang mga halaga. Nakadepende sa edad at kalusugan ang quote.' },
        ],
        illo: 'scale',
        animate: false,
      },
      do: {
        type: 'compare',
        prompt: { en: 'You are 24 with a younger sibling you help support. Which gives ₱1,000,000 of cover for less?', tl: 'Ikaw ay 24 na may nakababatang kapatid na tinutulungan. Alin ang nagbibigay ng ₱1,000,000 cover sa mas mura?' },
        options: [
          { title: { en: 'Term life', tl: 'Term life' }, lines: [{ en: '₱600 a month, illustrative', tl: '₱600 kada buwan, illustrative' }, { en: 'Cover for 20 years, nothing back', tl: 'Cover sa 20 taon, walang balik' }], effective: { en: '₱7,200 a year for the cover. The other ₱28,800 goes to MP2 or a fund you chose.', tl: '₱7,200 kada taon para sa cover. Ang ibang ₱28,800 ay sa MP2 o fund na pinili mo.' }, cheaper: true },
          { title: { en: 'VUL', tl: 'VUL' }, lines: [{ en: '₱3,000 a month, illustrative', tl: '₱3,000 kada buwan, illustrative' }, { en: 'Cover plus a managed fund, charges on both', tl: 'Cover at managed fund, may bayad sa pareho' }], effective: { en: '₱36,000 a year. Early years mostly pay charges; the fund value can be below what you paid for years.', tl: '₱36,000 kada taon. Sa unang mga taon, karamihan ay bayad sa charges; puwedeng mas mababa ang fund value sa binayad mo sa loob ng ilang taon.' }, cheaper: false },
        ],
        why: { en: 'Term buys the same protection for a fraction of the cost. VUL is not a scam, but it is an expensive way to do two things. Ask any seller for the charges in pesos, per year.', tl: 'Binibili ng term ang parehong proteksyon sa maliit na bahagi ng halaga. Hindi scam ang VUL, pero mahal na paraan ito para gawin ang dalawang bagay. Hingin sa nagbebenta ang charges sa piso, kada taon.' },
      },
      keep: {
        text: { en: 'Buy protection as protection. Buy investments as investments.', tl: 'Bilhin ang proteksyon bilang proteksyon. Bilhin ang investment bilang investment.' },
        action: null,
      },
    },
    {
      id: 'first.proteksyon.4',
      title: { en: 'HMO', tl: 'HMO' },
      minutes: 2,
      hook: {
        text: { en: 'Your company card says HMO. It is not insurance and it is not PhilHealth. It is a third thing.', tl: 'Sabi sa company card mo, HMO. Hindi ito insurance at hindi PhilHealth. Ikatlong bagay ito.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'An HMO prepays care at its own clinics and hospitals up to a yearly limit. It works with PhilHealth, not instead of it.', tl: 'Paunang bayad ng HMO ang gamot sa sarili nitong clinic at ospital hanggang sa taunang limit. Kasabay ito ng PhilHealth, hindi kapalit.' },
        points: [],
        illo: 'shield',
        animate: false,
      },
      do: {
        type: 'choice',
        prompt: { en: 'You are admitted for appendicitis at an HMO-accredited hospital. What happens to the ₱80,000 bill?', tl: 'Na-admit ka dahil sa appendicitis sa HMO-accredited na ospital. Ano ang mangyayari sa ₱80,000 na bill?' },
        options: [
          { text: { en: 'PhilHealth pays its fixed amount first, the HMO pays the rest up to your limit', tl: 'Nagbabayad muna ang PhilHealth ng fixed na halaga, ang HMO ang sa natitira hanggang sa limit mo' }, correct: true, why: { en: 'That is the order. Any amount above the HMO limit is yours.', tl: 'Iyon ang pagkakasunod. Anumang lampas sa HMO limit ay sa iyo.' } },
          { text: { en: 'The HMO pays everything', tl: 'Ang HMO ang lahat' }, correct: false, why: { en: 'Only up to its yearly limit, and only at accredited hospitals.', tl: 'Hanggang sa taunang limit lang, at sa accredited na ospital lang.' } },
          { text: { en: 'You pay first and claim from both later', tl: 'Ikaw muna, tapos mag-claim sa dalawa mamaya' }, correct: false, why: { en: 'At accredited hospitals both are deducted at discharge.', tl: 'Sa accredited na ospital, bawas ang dalawa sa discharge.' } },
        ],
      },
      keep: {
        text: { en: 'Know your HMO limit and the list of hospitals before you need them.', tl: 'Alamin ang HMO limit at listahan ng ospital bago mo kailanganin.' },
        action: null,
      },
    },
    {
      id: 'first.proteksyon.5',
      title: { en: 'Small covers', tl: 'Maliliit na cover' },
      minutes: 2,
      hook: {
        text: { en: 'Ninety seconds. Ten statements about protection in the Philippines.', tl: 'Siyamnapung segundo. Sampung pahayag tungkol sa proteksyon sa Pilipinas.' },
        illo: 'hourglass',
      },
      show: {
        text: { en: 'Microinsurance costs less than a jeepney fare a day and pays for the small disasters.', tl: 'Mas mura ang microinsurance kaysa pamasahe sa jeep kada araw at nagbabayad para sa maliliit na sakuna.' },
        points: [],
        illo: 'hourglass',
        animate: false,
      },
      do: {
        type: 'rapid',
        seconds: 90,
        items: [
          { text: { en: 'PhilHealth pays a percentage of every bill.', tl: 'Nagbabayad ang PhilHealth ng porsyento ng bawat bill.' }, answer: false, why: { en: 'Fixed amounts per condition.', tl: 'Fixed na halaga kada kondisyon.' } },
          { text: { en: 'Microinsurance can cost under ₱50 a month.', tl: 'Puwedeng wala pang ₱50 kada buwan ang microinsurance.' }, answer: true, why: { en: 'Sold through pawnshops, coops and e-wallets.', tl: 'Binebenta sa pawnshop, coop at e-wallet.' } },
          { text: { en: 'An HMO replaces PhilHealth.', tl: 'Kapalit ng PhilHealth ang HMO.' }, answer: false, why: { en: 'They stack.', tl: 'Nagsasama sila.' } },
          { text: { en: 'SSS maternity benefit lasts 105 days.', tl: '105 araw ang SSS maternity benefit.' }, answer: true, why: { en: 'Expanded Maternity Leave Law.', tl: 'Expanded Maternity Leave Law.' } },
          { text: { en: 'Term life insurance returns your premiums if you survive.', tl: 'Ibinabalik ng term life ang premiums kung mabuhay ka.' }, answer: false, why: { en: 'Cover only. That is why it is cheap.', tl: 'Cover lang. Kaya mura.' } },
          { text: { en: 'A 24-year-old with no dependants must buy life insurance.', tl: 'Dapat bumili ng life insurance ang 24-year-old na walang dependants.' }, answer: false, why: { en: 'Emergency fund and health cover first.', tl: 'Emergency fund at health cover muna.' } },
          { text: { en: 'The Insurance Commission licenses insurers and takes complaints.', tl: 'Ang Insurance Commission ang nagbibigay ng lisensya sa insurers at tumatanggap ng reklamo.' }, answer: true, why: { en: 'Check a company there before paying.', tl: 'Tingnan doon ang kumpanya bago magbayad.' } },
          { text: { en: 'Unemployment benefit from SSS needs at least 36 contributions.', tl: 'Kailangan ng 36 contributions ang SSS unemployment benefit.' }, answer: true, why: { en: 'Twelve of them in the last 18 months.', tl: 'Labindalawa sa huling 18 buwan.' } },
          { text: { en: 'Fire and typhoon cover for a home costs more than a phone plan.', tl: 'Mas mahal sa phone plan ang fire at typhoon cover sa bahay.' }, answer: false, why: { en: 'Often a few hundred pesos a year for basic cover.', tl: 'Madalas ilang daang piso kada taon para sa basic cover.' } },
          { text: { en: 'A hospital can refuse to apply PhilHealth if you have no ID.', tl: 'Puwedeng tumanggi ang ospital na i-apply ang PhilHealth kung walang ID.' }, answer: false, why: { en: 'Your number and a valid ID are enough; the hospital can verify.', tl: 'Sapat ang number mo at valid ID; puwedeng i-verify ng ospital.' } },
        ],
      },
      keep: {
        text: { en: 'Protection is a stack: PhilHealth, then HMO, then the fund, then insurance for the people who depend on you.', tl: 'Patong-patong ang proteksyon: PhilHealth, tapos HMO, tapos ang fund, tapos insurance para sa mga umaasa sa iyo.' },
        action: null,
      },
    },
    {
      id: 'first.proteksyon.6',
      title: { en: 'The admission', tl: 'Ang admission' },
      minutes: 4,
      hook: {
        text: { en: 'Two in the morning, appendicitis. The nearest hospital is private. The HMO-accredited one is twenty minutes further. The bill will be ₱80,000 either way.', tl: 'Alas-dos ng umaga, appendicitis. Private ang pinakamalapit na ospital. Dalawampung minuto pa ang HMO-accredited. ₱80,000 ang bill saan ka man pumunta.' },
        illo: 'shield',
      },
      show: {
        text: { en: 'The same bill is paid by different people depending on where you are admitted and what you present at the counter.', tl: 'Ang parehong bill ay binabayaran ng iba-ibang tao depende sa kung saan ka na-admit at kung ano ang ipinakita mo sa counter.' },
        points: [],
        illo: 'shield',
        animate: false,
      },
      do: {
        type: 'story',
        start: 'n1',
        nodes: {
          n1: {
            text: { en: 'You are conscious and it is not yet an emergency of minutes. Choose the hospital.', tl: 'May malay ka pa rin, at hindi ito emergency na dapat pagpasyahan sa loob lang ng ilang minuto. Piliin ang ospital.' },
            balance: 12000,
            choices: [
              { text: { en: 'The HMO-accredited hospital, twenty minutes away', tl: 'Ang HMO-accredited na ospital, dalawampung minuto ang layo' }, next: 'a1' },
              { text: { en: 'The nearest private hospital', tl: 'Ang pinakamalapit na private hospital' }, next: 'b1' },
            ],
          },
          a1: {
            text: { en: 'At admission they ask for your PhilHealth number and HMO card. Your HMO limit is ₱100,000 a year.', tl: 'Sa admission, hinihingi ang PhilHealth number at HMO card mo. ₱100,000 kada taon ang HMO limit mo.' },
            balance: 12000,
            choices: [
              { text: { en: 'Present both', tl: 'Ipakita ang dalawa' }, next: 'a2' },
              { text: { en: 'Present only the HMO card, it covers everything anyway', tl: 'Ipakita lang ang HMO card, sagot naman nito lahat' }, next: 'a3' },
            ],
          },
          a2: {
            text: { en: 'PhilHealth pays its fixed amount for appendectomy first, the HMO pays the rest. You leave with ₱0 owed and ₱12,000 still in the fund.', tl: 'Nagbayad muna ang PhilHealth ng fixed na halaga para sa appendectomy, ang HMO ang sa natitira. Umuwi kang walang utang at ₱12,000 pa rin sa fund.' },
            balance: 12000,
            outcome: 'steady',
          },
          a3: {
            text: { en: 'The HMO covers the full ₱80,000 and your yearly limit drops to ₱20,000 in February. The dengue in August costs you ₱25,000 from the fund and a salary advance.', tl: 'Sinagot ng HMO ang buong ₱80,000 at bumaba ang taunang limit mo sa ₱20,000 sa Pebrero. Ang dengue sa Agosto ay ₱25,000 mula sa fund at salary advance.' },
            balance: -13000,
            outcome: 'costly',
          },
          b1: {
            text: { en: 'The private hospital is not on your HMO list. PhilHealth still applies. The counter asks for a ₱30,000 deposit.', tl: 'Wala sa HMO list ang private hospital. Puwede pa rin ang PhilHealth. Humihingi ang counter ng ₱30,000 na deposit.' },
            balance: 12000,
            choices: [
              { text: { en: 'Pay ₱12,000 from the fund and ask family for ₱18,000', tl: 'Magbayad ng ₱12,000 mula sa fund at manghiram ng ₱18,000 sa pamilya' }, next: 'b2' },
              { text: { en: 'Ask for a transfer to the accredited hospital once stable', tl: 'Ipa-transfer sa accredited na ospital kapag stable na' }, next: 'b3' },
            ],
          },
          b2: {
            text: { en: 'PhilHealth covers about ₱30,000 of the ₱80,000. The HMO reimburses a part, later, with forms. You owe family ₱18,000 and the hospital ₱20,000 on a payment plan.', tl: 'Mga ₱30,000 ng ₱80,000 ang sagot ng PhilHealth. Bahagi lang ang binalik ng HMO, mamaya, may forms. May utang ka sa pamilya na ₱18,000 at sa ospital na ₱20,000 sa payment plan.' },
            balance: -38000,
            outcome: 'costly',
          },
          b3: {
            text: { en: 'The emergency room bill is ₱9,000, paid from the fund. The surgery happens at the accredited hospital with both cards on file. You owe ₱0 beyond that.', tl: '₱9,000 ang bill ng emergency room, bayad mula sa fund. Ang operasyon ay sa accredited na ospital na may dalawang card. Wala ka nang utang bukod doon.' },
            balance: 3000,
            outcome: 'steady',
          },
        },
      },
      keep: {
        text: { en: 'Know your accredited hospital before the night you need it. Present PhilHealth first, always.', tl: 'Alamin ang accredited na ospital mo bago ang gabing kailangan mo ito. Ipakita muna ang PhilHealth, lagi.' },
        action: null,
      },
    },
  ],
};

export default {
  id: 'first',
  band: '18 to 24',
  title: { en: 'First money', tl: 'Unang sweldo' },
  tagline: { en: 'The first payslip, the first card, the first emergency. Nine lessons for the first years of earning.', tl: 'Ang unang payslip, unang card, unang emergency. Siyam na aralin para sa unang mga taon ng pagkita.' },
  gate: null,
  intro: {
    text: { en: 'Everything in this path starts from a ₱20,000 salary in Metro Manila and follows it through a year. Your own numbers replace it wherever Jinnie has them.', tl: 'Lahat sa path na ito ay nagsisimula sa ₱20,000 na sweldo sa Metro Manila at sinusundan ito sa isang taon. Papalitan ito ng sarili mong numero kung saan mayroon si Jinnie.' },
    video: { placeholder: 'Forty-five second vertical clip. A first payslip on a phone screen, Jinnie’s lamp beside it. Voice: "This is the year the numbers start to belong to you." No music stings, no exclamation.' },
    illo: 'lamp',
  },
  lessons: [sweldo, budget, ipon, utang, proteksyon, ...more],
};
