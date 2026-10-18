// Path: Building (25 to 39). Cards, a first loan, a family forming, possibly an OFW
// household. Two authored lessons on debt payoff and the credit report, seven outlined.

export default {
  id: 'building',
  band: '25 to 39',
  title: { en: 'Building', tl: 'Pagtatayo' },
  tagline: { en: 'Card limits climb, a first big loan gets approved, and a family may be starting, sometimes from an OFW household sending money home.', tl: 'Tumataas ang card limit, naaprubahan ang unang malaking loan, at posibleng nagsisimula ang pamilya, minsan mula sa OFW household na nagpapadala ng pera pauwi.' },
  gate: null,
  intro: {
    text: { en: 'These are the years debt, credit, and family plans compound the fastest, for better or worse. Everything here starts with the debt already carried, then builds outward to the account, the roof, and the family plan around it.', tl: 'Ito ang mga taon na pinakamabilis kumapal ang utang, credit, at family plans, maganda man o hindi. Nagsisimula ang lahat dito sa utang na dala na, tapos lumalawak papunta sa account, sa bubong, at sa family plan sa paligid nito.' },
    video: { placeholder: 'Forty-five second vertical clip. A couple in their early thirties at a kitchen table with a credit card statement and a toy or crib visible nearby, Jinnie’s lamp in frame. Voice: "The card, the loan, and the family plan can hold together, in one order." No music stings, no exclamation.' },
    illo: 'house',
  },
  lessons: [
    {
      id: 'building.payoff',
      title: { en: 'Paying down debt', tl: 'Pagbabayad ng Utang' },
      summary: { en: 'Every debt on one list, and the order that pays it off for less.', tl: 'Lahat ng utang sa isang lista, at ang pagkakasunod na magpapabayad nito nang mas mura.' },
      competency: { en: 'Can build a debt list and choose avalanche or snowball', tl: 'Kayang gumawa ng debt list at pumili ng avalanche o snowball' },
      wish: 'rid',
      status: 'authored',
      bites: [
        {
          id: 'building.payoff.1',
          title: { en: 'List every debt', tl: 'Ilistá ang Bawat Utang' },
          minutes: 3,
          hook: {
            text: { en: 'A credit card, an appliance installment, and money borrowed from a relative can feel like ten debts when none of them are written down.', tl: 'Parang sampung utang ang credit card, installment sa appliance store, at pera na hiniram sa kamag-anak, kapag wala pang nakasulat.' },
            illo: 'card',
          },
          show: {
            text: { en: 'A debt list turns a vague worry into a plan. Write down every debt, its balance, its minimum payment, and its interest rate, in one place.', tl: 'Ginagawang plano ng debt list ang malabong alalahanin. Isulat ang bawat utang, balance nito, minimum payment, at interest rate, sa isang lugar.' },
            points: [
              { en: 'Every debt counts, even a small one owed to family.', tl: 'Bilang ang bawat utang, kahit maliit na utang sa pamilya.' },
              { en: 'The interest rate decides which debt grows fastest if left alone.', tl: 'Ang interest rate ang nagtatakda kung aling utang ang pinakamabilis lumaki kung hindi pinapansin.' },
              { en: 'The balance and minimum payment decide how soon a debt can close.', tl: 'Ang balance at minimum payment ang nagtatakda kung gaano kabilis maisasara ang isang utang.' },
            ],
            illo: 'card',
            animate: true,
          },
          do: {
            type: 'order',
            prompt: { en: 'Put these steps for building a debt list in the right order.', tl: 'Ilagay sa tamang pagkakasunod-sunod ang mga hakbang sa paggawa ng debt list.' },
            steps: [
              { en: 'Write down every debt you owe, no matter how small.', tl: 'Isulat ang bawat utang mo, kahit gaano kaliit.' },
              { en: 'Note the balance, minimum payment, and interest rate for each one.', tl: 'Itala ang balance, minimum payment, at interest rate ng bawat isa.' },
              { en: 'Mark which debt carries the highest interest rate.', tl: 'Markahan kung aling utang ang may pinakamataas na interest rate.' },
              { en: 'Mark which debt has the smallest balance.', tl: 'Markahan kung aling utang ang may pinakamaliit na balance.' },
              { en: 'Choose avalanche or snowball before the next payment.', tl: 'Piliin ang avalanche o snowball bago ang susunod na bayad.' },
            ],
            why: { en: 'The list itself does not pay anything down. It is what makes avalanche and snowball possible to follow.', tl: 'Hindi nagbabayad ng utang ang lista mismo. Ito ang nagpapahintulot na sundan ang avalanche o snowball.' },
          },
          keep: {
            text: { en: 'A debt not on the list still grows. Write it down first.', tl: 'Lumalaki pa rin ang utang na wala sa lista. Isulat muna ito.' },
            action: { kind: 'commitment', label: { en: 'Start the 30-day debt commitment', tl: 'Simulan ang 30-araw na debt commitment' }, payload: { id: 'debt-30' } },
          },
        },
        {
          id: 'building.payoff.2',
          title: { en: 'Avalanche versus snowball', tl: 'Avalanche Laban sa Snowball' },
          minutes: 4,
          hook: {
            text: { en: 'Two households, each with a ₱25,000 credit card and a ₱10,000 appliance loan, choose different orders to pay them off.', tl: 'Dalawang sambahayan, parehong may ₱25,000 credit card at ₱10,000 appliance loan, magkaiba ang pinili nilang pagkakasunod ng bayad.' },
            illo: 'scale',
          },
          show: {
            text: { en: 'Avalanche pays extra toward the highest interest rate first, which is mathematically the cheapest path. Snowball pays extra toward the smallest balance first, which clears an account sooner.', tl: 'Nagbabayad ang avalanche ng dagdag sa pinakamataas na interest rate muna, na siyang matematikang pinakamura. Nagbabayad naman ang snowball ng dagdag sa pinakamaliit na balance muna, na mas mabilis na nakakasara ng account.' },
            points: [
              { en: 'The card here charges 3% a month, the appliance loan 2% a month; avalanche targets the card first.', tl: 'May 3% kada buwan ang card dito, 2% kada buwan ang appliance loan; tinatarget muna ng avalanche ang card.' },
              { en: 'Snowball would target the ₱10,000 appliance loan first, since it is the smaller balance, even though it charges less interest.', tl: 'Tatarget naman muna ang snowball sa ₱10,000 appliance loan, dahil ito ang mas maliit na balance, kahit mas mababa ang interest nito.' },
              { en: 'Both methods still pay the minimum on every other debt while attacking one at a time.', tl: 'Pareho pa ring binabayaran ang minimum sa lahat ng ibang utang habang tinatapos ang isa-isa.' },
            ],
            illo: 'scale',
            animate: true,
          },
          do: {
            type: 'compare',
            prompt: { en: 'Same two debts, same extra ₱3,000 a month. Which order costs less in total interest?', tl: 'Parehong dalawang utang, parehong dagdag na ₱3,000 kada buwan. Aling pagkakasunod ang mas mababa ang kabuuang interest?' },
            options: [
              {
                title: { en: 'Avalanche: card first', tl: 'Avalanche: Card Muna' },
                lines: [
                  { en: 'Extra ₱3,000 goes to the 3%-a-month card', tl: 'Napupunta ang dagdag na ₱3,000 sa 3%-kada-buwan na card' },
                  { en: 'The appliance loan gets only its minimum until the card closes', tl: 'Minimum lang ang appliance loan hanggang sumara ang card' },
                ],
                effective: { en: 'Illustrative interest paid across both debts: about ₱4,700', tl: 'Illustrative na interest na babayaran sa dalawang utang: humigit-kumulang ₱4,700' },
                cheaper: true,
              },
              {
                title: { en: 'Snowball: appliance loan first', tl: 'Snowball: Appliance Loan Muna' },
                lines: [
                  { en: 'Extra ₱3,000 goes to the ₱10,000 appliance loan', tl: 'Napupunta ang dagdag na ₱3,000 sa ₱10,000 appliance loan' },
                  { en: 'The card gets only its minimum until the loan closes, so it keeps accruing at 3%', tl: 'Minimum lang ang card hanggang sumara ang loan, kaya patuloy itong tumataas sa 3%' },
                ],
                effective: { en: 'Illustrative interest paid across both debts: about ₱5,900', tl: 'Illustrative na interest na babayaran sa dalawang utang: humigit-kumulang ₱5,900' },
                cheaper: false,
              },
            ],
            why: { en: 'Avalanche saves roughly ₱1,200 here because the extra pesos spend fewer months next to the 3% rate. Snowball still works, and clears an account about a month sooner; the choice is between the cheaper path and the faster first win.', tl: 'Nakakatipid ang avalanche ng humigit-kumulang ₱1,200 dahil mas kaunting buwan ang dagdag na pera na katabi ng 3% na rate. Gumagana pa rin ang snowball, at mas mabilis nitong nasasara ang isang account nang mga isang buwan; nasa pagitan ng mas murang landas at ng mas mabilis na unang panalo ang pagpipilian.' },
          },
          keep: {
            text: { en: 'Avalanche is the cheaper path. Snowball is the path more people finish.', tl: 'Ang avalanche ang mas murang landas. Ang snowball ang landas na mas maraming natatapos.' },
            action: null,
          },
        },
        {
          id: 'building.payoff.3',
          title: { en: 'The 3% cap, computed', tl: 'Ang 3% Cap, Kinwenta' },
          minutes: 3,
          hook: {
            text: { en: 'A ₱25,000 credit card balance sits at the legal cap of 3% a month. The peso amount that cap allows is rarely spelled out.', tl: 'Nasa legal na cap na 3% kada buwan ang ₱25,000 na credit card balance. Bihirang ipaliwanag ang aktwal na halaga na pinapayagan ng cap na iyon.' },
            illo: 'card',
          },
          show: {
            text: { en: 'BSP caps credit card interest at 3% a month, 36% a year, and caps the cash advance fee at ₱200. The cap sets a ceiling on what any card can charge, not a guarantee of what is owed.', tl: 'Tinatakdaan ng BSP ang credit card interest sa 3% kada buwan, 36% kada taon, at ang cash advance fee sa ₱200. Kisame ang cap kung magkano ang puwedeng singilin ng kahit anong card, hindi garantiya kung magkano ang utang.' },
            points: [
              { en: '3% a month compounds to 36% a year, not 36% charged all at once.', tl: 'Tumataas ang 3% kada buwan hanggang 36% kada taon, hindi 36% na sinisingil nang sabay-sabay.' },
              { en: 'The interest applies to the balance still owed, so it shrinks as the balance shrinks.', tl: 'Sa balance na natitira pa inaaplay ang interest, kaya lumiliit ito habang lumiliit ang balance.' },
            ],
            illo: 'card',
            animate: true,
          },
          do: {
            type: 'number',
            prompt: { en: 'A card balance of ₱25,000 sits at the 3% a month cap. What is the maximum interest charge this month?', tl: 'Nasa 3% kada buwan na cap ang card balance na ₱25,000. Magkano ang pinakamataas na interest charge ngayong buwan?' },
            answer: 750,
            tolerance: 0,
            format: 'peso',
            worked: { en: '25,000 × 0.03 = ₱750. That is the most this balance can be charged in interest this month; paying above the minimum lowers the balance the next charge applies to.', tl: '25,000 × 0.03 = ₱750. Iyon ang pinakamataas na maisisingil na interest ngayong buwan; nagpapababa sa balance na susunod na sisingilin ang pagbabayad nang higit sa minimum.' },
          },
          keep: {
            text: { en: '₱750 a month on ₱25,000 is the ceiling. Every peso paid above the minimum lowers next month’s number.', tl: '₱750 kada buwan sa ₱25,000 ang kisame. Nagpapababa sa numero sa susunod na buwan ang bawat pisong bayad nang higit sa minimum.' },
            action: null,
          },
        },
        {
          id: 'building.payoff.4',
          title: { en: 'When to consolidate', tl: 'Kailan Mag-consolidate' },
          minutes: 4,
          hook: {
            text: { en: 'A message offers to combine three debts into one loan, in exchange for a single monthly payment.', tl: 'May mensaheng nag-aalok na pagsamahin ang tatlong utang sa isang loan, kapalit ng iisang buwanang bayad.' },
            illo: 'hand',
          },
          show: {
            text: { en: 'Consolidation only helps when the new rate is lower than what it replaces. A lower number of payments is convenient; it is not the same as a lower cost.', tl: 'Nakakatulong lang ang consolidation kapag mas mababa ang bagong rate kaysa sa pinapalitan nito. Maginhawa ang mas kaunting bayad; hindi ito pareho ng mas murang gastos.' },
            points: [
              { en: 'Compare the new rate against each debt it would replace, not against the total balance alone.', tl: 'Ikumpara ang bagong rate sa bawat utang na papalitan nito, hindi lang sa kabuuang balance.' },
              { en: 'A formal lender, a bank or a cooperative, is the source to compare against, not a lending app.', tl: 'Ang formal na lender, bangko o kooperatiba, ang dapat ikumpara, hindi ang lending app.' },
            ],
            illo: 'hand',
            animate: false,
          },
          do: {
            type: 'choice',
            prompt: { en: 'You carry a credit card at 3% a month, a 5-6 loan from an emergency, and a cooperative loan at 1.5% a month. A lending app offers to combine all three into one loan at 6% a month. What should you do?', tl: 'May credit card ka sa 3% kada buwan, 5-6 loan mula sa emergency, at cooperative loan sa 1.5% kada buwan. Nag-aalok ang lending app na pagsamahin ang tatlo sa isang loan sa 6% kada buwan. Ano ang dapat gawin?' },
            options: [
              {
                text: { en: 'Take the lending app offer since it means one payment instead of three', tl: 'Tanggapin ang alok ng lending app dahil iisa na lang ang babayaran' },
                correct: false,
                why: { en: 'One payment does not help if the new rate is higher than what it replaces. 6% a month is double the card’s cap and four times the cooperative rate.', tl: 'Hindi nakakatulong ang iisang bayad kung mas mataas ang bagong rate kaysa sa pinapalitan. Doble ng cap ng card at apat na beses ng cooperative rate ang 6% kada buwan.' },
              },
              {
                text: { en: 'Ask the cooperative to absorb the 5-6 loan, and pay the card down directly', tl: 'Hilingin sa cooperative na isama ang 5-6 loan, at bayaran nang diretso ang card' },
                correct: true,
                why: { en: 'Consolidation helps when the new rate is lower than what it replaces. The cooperative’s 1.5% a month beats the 5-6 loan’s roughly 20% a cycle. The card, already under the 3% cap, needs payments above the minimum, not a new lender.', tl: 'Nakakatulong ang consolidation kapag mas mababa ang bagong rate kaysa sa pinapalitan. Tinatalo ng 1.5% kada buwan ng cooperative ang halos 20% kada cycle ng 5-6 loan. Nangangailangan ang card, nasa ilalim na ng 3% cap, ng bayad na higit sa minimum, hindi ng bagong lender.' },
              },
              {
                text: { en: 'Leave all three as they are and continue the minimum payments', tl: 'Iwanan ang tatlo at ituloy lang ang minimum na bayad' },
                correct: false,
                why: { en: 'The 5-6 loan’s cost compounds fast at roughly 20% a cycle. Leaving it untouched is not a neutral choice; it lets the most expensive debt keep growing.', tl: 'Mabilis tumataas ang gastos ng 5-6 loan sa halos 20% kada cycle. Hindi neutral na pagpipilian ang hindi ito galawin; hinahayaan nitong lumaki ang pinakamahal na utang.' },
              },
            ],
          },
          keep: {
            text: { en: 'Compare the new rate to what it replaces, one debt at a time. Convenience is not the same as cheaper.', tl: 'Ikumpara ang bagong rate sa pinapalitan nito, isa-isa. Hindi pareho ang ginhawa at ang pagiging mas mura.' },
            action: null,
          },
        },
        {
          id: 'building.payoff.5',
          title: { en: 'Never a lending app for the card', tl: 'Hindi Kailanman Lending App Para sa Card' },
          minutes: 3,
          hook: {
            text: { en: 'Ninety seconds. True or false, on the habits that actually move a debt payoff forward.', tl: 'Siyamnapung segundo. Tama o mali, sa mga gawi na talagang nakakatulong sa pagbayad ng utang.' },
            illo: 'phone',
          },
          show: {
            text: { en: 'A lending app that charges more than the debt it is meant to pay off is not a solution. Test what actually helps before the timer starts.', tl: 'Hindi solusyon ang lending app na mas mataas ang singil kaysa sa utang na papalitan nito. Subukan kung ano ang talagang nakakatulong bago magsimula ang timer.' },
            points: [],
            illo: 'phone',
            animate: false,
          },
          do: {
            type: 'rapid',
            seconds: 90,
            items: [
              { text: { en: 'Borrowing from a lending app to pay off a credit card lowers your total cost.', tl: 'Nagpapababa ng kabuuang gastos ang paghiram sa lending app para bayaran ang credit card.' }, answer: false, why: { en: 'Lending apps often charge well above the card’s 3% cap. Paying one high-cost debt with another is not progress.', tl: 'Madalas mas mataas ang singil ng lending app kaysa sa 3% cap ng card. Hindi pag-unlad ang pagbayad ng isang mahal na utang gamit ang isa pang mahal na utang.' } },
              { text: { en: 'Paying only the minimum clears a card balance the fastest.', tl: 'Ang pagbayad ng minimum lang ang pinakamabilis na paraan para masara ang card balance.' }, answer: false, why: { en: 'The minimum is set to keep the balance alive longer, not to close it. Anything above the minimum is what actually shortens the payoff.', tl: 'Itinakda ang minimum para tumagal ang balance, hindi para isara ito. Ang higit sa minimum ang talagang nagpapaikli sa payoff.' } },
              { text: { en: 'Under avalanche, extra payments go to the debt with the highest interest rate first.', tl: 'Sa avalanche, napupunta muna ang dagdag na bayad sa utang na may pinakamataas na interest rate.' }, answer: true, why: { en: 'That is the definition of avalanche, and the reason it costs less overall.', tl: 'Iyon ang kahulugan ng avalanche, at ang dahilan kung bakit mas mura ito sa kabuuan.' } },
              { text: { en: 'Snowball orders debts by interest rate, not by balance.', tl: 'Inaayos ng snowball ang mga utang base sa interest rate, hindi sa balance.' }, answer: false, why: { en: 'Snowball orders by smallest balance first. Avalanche is the one ordered by interest rate.', tl: 'Inaayos ng snowball base sa pinakamaliit na balance. Ang avalanche ang inaayos base sa interest rate.' } },
              { text: { en: 'A credit card’s interest rate is capped at 3% a month under BSP rules.', tl: 'May cap na 3% kada buwan sa ilalim ng BSP ang interest rate ng credit card.' }, answer: true, why: { en: 'Correct, 3% a month, 36% a year, is the ceiling for every card.', tl: 'Tama, ang 3% kada buwan, 36% kada taon, ang kisame para sa bawat card.' } },
              { text: { en: 'Consolidating debt always lowers the cost, no matter the new rate.', tl: 'Laging nagpapababa ng gastos ang pag-consolidate ng utang, kahit ano ang bagong rate.' }, answer: false, why: { en: 'It only lowers cost when the new rate beats what it replaces. A higher rate with fewer payments still costs more.', tl: 'Bumababa lang ang gastos kapag mas mababa ang bagong rate kaysa sa pinapalitan. Mas mahal pa rin ang mas mataas na rate, kahit mas kaunti ang bayad.' } },
            ],
          },
          keep: {
            text: { en: 'A lending app that charges more than the card is not a payoff plan; it is a transfer to a more expensive lender.', tl: 'Hindi payoff plan ang lending app na mas mataas ang singil kaysa sa card; paglipat lang ito sa mas mahal na lender.' },
            action: null,
          },
        },
        {
          id: 'building.payoff.6',
          title: { en: 'The message that arrives at the worst time', tl: 'Ang Mensaheng Dumarating sa Pinakamasamang Sandali' },
          minutes: 5,
          hook: {
            text: { en: 'Payday is three days away. The card balance is ₱25,000. A lending app messages an offer to clear it today.', tl: 'Tatlong araw na lang bago sumweldo. ₱25,000 ang card balance. May mensahe ang lending app na nag-aalok na bayaran ito ngayon din.' },
            illo: 'phone',
          },
          show: {
            text: { en: 'The offer arrives exactly when a balance feels heaviest. What happens over the following months depends on which door gets opened now.', tl: 'Dumarating ang alok eksakto kapag pinakamabigat ang balance. Depende sa pinto na bubuksan ngayon ang mangyayari sa mga susunod na buwan.' },
            points: [],
            illo: 'phone',
            animate: false,
          },
          do: {
            type: 'story',
            start: 'n1',
            nodes: {
              n1: {
                text: { en: 'Card balance ₱25,000, at the 3% a month cap. The lending app offers ₱25,000 today, repaid over six months at 8% a month.', tl: '₱25,000 ang card balance, nasa 3% kada buwan na cap. Nag-aalok ang lending app ng ₱25,000 ngayon, babayaran sa loob ng anim na buwan sa 8% kada buwan.' },
                balance: 25000,
                choices: [
                  { text: { en: 'Take the lending app’s offer', tl: 'Tanggapin ang alok ng lending app' }, next: 'a1' },
                  { text: { en: 'Decline, and add ₱2,000 above the minimum to the card each month', tl: 'Tanggihan, at magdagdag ng ₱2,000 higit sa minimum sa card bawat buwan' }, next: 'b1' },
                ],
              },
              a1: {
                text: { en: 'The lending app clears the card in full. Its first month interest alone is 25,000 × 8% = ₱2,000, already more than the card’s own 3% cap of ₱750.', tl: 'Buo na nabayaran ng lending app ang card. ₱2,000 ang interest sa unang buwan lang (25,000 × 8%), mas mataas na kaysa sa ₱750 na 3% cap ng card.' },
                balance: 25000,
                choices: [
                  { text: { en: 'Continue the lending app’s schedule for six months', tl: 'Ituloy ang schedule ng lending app sa anim na buwan' }, next: 'a2' },
                  { text: { en: 'Try to close the lending app loan in two months instead', tl: 'Subukang isara ang lending app loan sa loob ng dalawang buwan na lang' }, next: 'a3' },
                ],
              },
              a2: {
                text: { en: 'Over six equal payments at 8% a month, the lending app loan costs about ₱7,400 in interest, about ₱5,000 more than the ₱2,300 the card would have charged if the same monthly amount had gone to it directly. One debt became a more expensive one.', tl: 'Sa anim na pantay na bayad sa 8% kada buwan, mga ₱7,400 ang interest ng lending app loan, mga ₱5,000 na mas mataas kaysa sa ₱2,300 na sisingilin sana ng card kung diretsong napunta rito ang parehong buwanang bayad. Isang utang ang naging mas mahal na utang.' },
                balance: 0,
                outcome: 'costly',
              },
              a3: {
                text: { en: 'Closing it in two months still costs about ₱3,000 in interest at 8% a month. The same two payments to the card would have cost about ₱1,100. Speed did not undo the higher rate.', tl: 'Mga ₱3,000 pa ring interest sa 8% kada buwan ang pagsara sa loob ng dalawang buwan. Mga ₱1,100 lang sana ang parehong dalawang bayad sa card. Hindi nabawi ng bilis ang mas mataas na rate.' },
                balance: 0,
                outcome: 'costly',
              },
              b1: {
                text: { en: 'Extra ₱2,000 a month goes to the card on top of the minimum. After three months the balance falls to about ₱18,000, with interest each month computed on the smaller amount.', tl: 'Napupunta ang dagdag na ₱2,000 kada buwan sa card, bukod sa minimum. Pagkalipas ng tatlong buwan, bumaba ang balance sa halos ₱18,000, at batay na sa mas maliit na halaga ang interest bawat buwan.' },
                balance: 18000,
                choices: [
                  { text: { en: 'Keep the ₱2,000 extra payment going', tl: 'Ituloy ang dagdag na ₱2,000 na bayad' }, next: 'b2' },
                  { text: { en: 'Redirect the ₱2,000 to a new want instead', tl: 'Ilipat ang ₱2,000 sa isang bagong gusto' }, next: 'b3' },
                ],
              },
              b2: {
                text: { en: 'At this pace the card clears in about ten months. Interest falls each month as the balance falls, no new lender enters the picture, and the total interest paid comes to about ₱4,200 for the whole payoff.', tl: 'Sa bilis na ito, masasara ang card sa halos sampung buwan. Bumababa ang interest bawat buwan habang bumababa ang balance, walang bagong lender ang pumasok, at mga ₱4,200 lang ang kabuuang interest sa buong payoff.' },
                balance: 0,
                outcome: 'steady',
              },
              b3: {
                text: { en: 'The balance stops falling below ₱18,000. Interest at 3% a month keeps applying to nearly the same amount, and the card lingers instead of closing.', tl: 'Hindi na bumaba ang balance sa ₱18,000. Patuloy na naaaplay ang 3% na interest kada buwan sa halos parehong halaga, at nananatili ang card sa halip na sumara.' },
                balance: 18000,
                outcome: 'costly',
              },
            },
          },
          keep: {
            text: { en: 'The 3% cap is a ceiling, not a rescue. A lender that charges more than the debt it replaces adds a new problem, not a solution.', tl: 'Kisame ang 3% cap, hindi pampasagip. Nagdaragdag ng bagong problema ang lender na mas mataas ang singil kaysa sa utang na papalitan nito, hindi solusyon.' },
            action: { kind: 'wish', label: { en: 'Set paying off the card as a wish', tl: 'Gawing wish ang pagbayad sa card' }, payload: { key: 'card-payoff', title: { en: 'Clear the ₱25,000 card balance', tl: 'Ubusin ang ₱25,000 card balance' }, amount: 25000 } },
          },
        },
      ],
    },
    {
      id: 'building.report',
      title: { en: 'Your credit report and score', tl: 'Ang Credit Report at Score Mo' },
      summary: { en: 'What lenders actually read before they say yes, and how to fix it when it is wrong.', tl: 'Ano ang talagang binabasa ng lenders bago sila pumayag, at paano ito aayusin kapag mali.' },
      competency: { en: 'Can read a credit report and dispute an error', tl: 'Kayang basahin ang credit report at mag-dispute ng mali dito' },
      wish: 'rid',
      status: 'authored',
      bites: [
        {
          id: 'building.report.1',
          title: { en: 'What lenders actually read', tl: 'Ano ang Talagang Binabasa ng Lenders' },
          minutes: 3,
          hook: {
            text: { en: 'A loan application is declined with no explanation beyond “does not meet requirements.” Something in a file decided this before the loan officer did.', tl: 'Na-decline ang loan application, walang ibang paliwanag kundi “hindi natugunan ang requirements.” May nagpasya sa isang file bago pa man ang loan officer.' },
            illo: 'certificate',
          },
          show: {
            text: { en: 'Most lenders check a credit report before approving a loan or card. The report lists your accounts, balances, and payment history, not your income or your reasons.', tl: 'Tumitingin muna ang karamihan ng lenders ng credit report bago mag-apruba ng loan o card. Nakalista sa report ang mga account, balance, at payment history mo, hindi ang kita o mga dahilan mo.' },
            points: [
              { en: 'A missed or late payment on any account can appear, not only on the loan being applied for.', tl: 'Puwedeng lumitaw ang huli o hindi nabayarang account, hindi lang sa loan na inaaplayan.' },
              { en: 'The report does not explain why a payment was missed; it only records that it was.', tl: 'Hindi ipinapaliwanag ng report kung bakit nahuli ang bayad; itinatala lang nito na nahuli ito.' },
            ],
            illo: 'certificate',
            animate: true,
          },
          do: {
            type: 'choice',
            prompt: { en: 'Before approving a card, what is a lender most likely checking in your credit report?', tl: 'Bago mag-apruba ng card, ano ang pinaka-malamang tinitingnan ng lender sa credit report mo?' },
            options: [
              { text: { en: 'Your payment history across existing accounts', tl: 'Ang payment history mo sa mga kasalukuyang account' }, correct: true, why: { en: 'This is exactly what a credit report shows: which accounts exist, and whether payments came on time.', tl: 'Ito mismo ang ipinapakita ng credit report: anong mga account meron, at kung nasa oras ba ang bayad.' } },
              { text: { en: 'Your monthly income and job title', tl: 'Ang buwanang kita at trabaho mo' }, correct: false, why: { en: 'Income is usually verified separately, through payslips or bank statements, not through the credit report.', tl: 'Karaniwang hiwalay na ipinapakita ang kita, sa payslip o bank statement, hindi sa credit report.' } },
              { text: { en: 'Your reasons for wanting the loan', tl: 'Ang dahilan mo sa paghiram' }, correct: false, why: { en: 'A report has no field for reasons. It records accounts and payment behavior only.', tl: 'Walang field ang report para sa dahilan. Mga account at payment behavior lang ang itinatala nito.' } },
            ],
          },
          keep: {
            text: { en: 'A lender reads the record, not the explanation. The record is worth checking before it is read by someone else.', tl: 'Binabasa ng lender ang record, hindi ang paliwanag. Sulit tingnan ang record bago pa ito basahin ng iba.' },
            action: null,
          },
        },
        {
          id: 'building.report.2',
          title: { en: 'CIC and the bureaus', tl: 'Ang CIC at ang mga Bureau' },
          minutes: 3,
          hook: {
            text: { en: 'Two unfamiliar terms sit behind every credit decision: the Credit Information Corporation, and the bureau that hands the report to a lender.', tl: 'May dalawang hindi pamilyar na termino sa likod ng bawat desisyon sa credit: ang Credit Information Corporation, at ang bureau na nagbibigay ng report sa lender.' },
            illo: 'certificate',
          },
          show: {
            text: { en: 'The Credit Information Corporation collects data from banks and lenders. Accredited credit bureaus turn that data into the report a lender actually reads.', tl: 'Kinokolekta ng Credit Information Corporation ang data mula sa mga bangko at lender. Ginagawa naman ng mga accredited credit bureau ang data na iyon na report na talagang binabasa ng lender.' },
            points: [
              { en: 'The Corporation is the central registry; a bureau is where a report is actually requested.', tl: 'Ang Corporation ang sentral na registry; ang bureau ang pinagkukunan mismo ng report.' },
              { en: 'A person can request their own report through an accredited bureau.', tl: 'Puwedeng humingi ang isang tao ng sariling report sa pamamagitan ng accredited bureau.' },
            ],
            illo: 'certificate',
            animate: false,
          },
          do: {
            type: 'match',
            prompt: { en: 'Match each term to what it means.', tl: 'I-match ang bawat termino sa kahulugan nito.' },
            pairs: [
              { a: { en: 'Credit Information Corporation', tl: 'Credit Information Corporation' }, b: { en: 'The central registry that collects data from banks and lenders', tl: 'Ang sentral na registry na kumukolekta ng data mula sa mga bangko at lender' } },
              { a: { en: 'Accredited credit bureau', tl: 'Accredited credit bureau' }, b: { en: 'Turns the registry’s data into the report a lender requests', tl: 'Ginagawang report ang data ng registry na hinihiling ng lender' } },
              { a: { en: 'Credit report', tl: 'Credit report' }, b: { en: 'The list of accounts, balances, and payment history a lender reads', tl: 'Ang listahan ng mga account, balance, at payment history na binabasa ng lender' } },
              { a: { en: 'Dispute', tl: 'Dispute' }, b: { en: 'A formal request to correct an error found on the report', tl: 'Pormal na kahilingan para itama ang maling nakalagay sa report' } },
            ],
          },
          keep: {
            text: { en: 'The report comes from a bureau; the data behind it comes from the Corporation. Both are worth knowing by name.', tl: 'Galing sa bureau ang report; galing sa Corporation ang data sa likod nito. Parehong sulit malaman sa pangalan.' },
            action: null,
          },
        },
        {
          id: 'building.report.3',
          title: { en: 'Disputing an error', tl: 'Pag-dispute sa Mali' },
          minutes: 4,
          hook: {
            text: { en: 'A report shows a missed payment on a card that was closed two years ago. The record is wrong; the process to fix it is not automatic.', tl: 'May nakalagay sa report na hindi nabayarang card na sarado na mula dalawang taon na ang nakaraan. Mali ang record; hindi awtomatiko ang proseso para ayusin ito.' },
            illo: 'certificate',
          },
          show: {
            text: { en: 'An error on a credit report can be disputed through the bureau that issued it. The process takes documentation and follow-through, not just a phone call.', tl: 'Puwedeng i-dispute ang mali sa credit report sa bureau na naglabas nito. Kailangan ng dokumentasyon at follow-through ang proseso, hindi lang isang tawag.' },
            points: [
              { en: 'Proof matters more than the complaint itself: a closed account’s clearance letter, a receipt, a bank certification.', tl: 'Mas mahalaga ang patunay kaysa sa reklamo mismo: clearance letter ng saradong account, resibo, bank certification.' },
              { en: 'A dispute that is not followed up can sit unresolved; keep a copy of everything submitted.', tl: 'Puwedeng manatiling hindi naaayos ang dispute na hindi sinusundan; itago ang kopya ng lahat ng isinumite.' },
            ],
            illo: 'certificate',
            animate: true,
          },
          do: {
            type: 'order',
            prompt: { en: 'Put these steps for disputing a credit report error in the right order.', tl: 'Ilagay sa tamang pagkakasunod-sunod ang mga hakbang sa pag-dispute ng mali sa credit report.' },
            steps: [
              { en: 'Request your credit report from an accredited bureau.', tl: 'Humiling ng credit report mula sa accredited bureau.' },
              { en: 'Identify the exact entry that is wrong.', tl: 'Tukuyin ang eksaktong entry na mali.' },
              { en: 'Gather proof: receipts, clearance letters, or bank certification.', tl: 'Maghanda ng patunay: resibo, clearance letter, o bank certification.' },
              { en: 'File the dispute with the bureau, attaching the proof.', tl: 'I-file ang dispute sa bureau, kalakip ang patunay.' },
              { en: 'Follow up until the correction shows on the report.', tl: 'Mag-follow up hanggang lumitaw ang tama sa report.' },
            ],
            why: { en: 'Skipping the proof step is the most common reason a dispute stalls. A bureau corrects records against documentation, not against a claim alone.', tl: 'Ang paglaktaw sa hakbang ng patunay ang pinakakaraniwang dahilan kung bakit natitigil ang dispute. Nag-aayos ang bureau ng record batay sa dokumentasyon, hindi sa reklamo lang.' },
          },
          keep: {
            text: { en: 'A wrong entry does not fix itself. Proof, filed and followed up, is what moves it.', tl: 'Hindi kusang naaayos ang maling entry. Ang patunay, na na-file at sinundan, ang nagpapagalaw nito.' },
            action: { kind: 'open', label: { en: 'Open Credit in Jinnie', tl: 'Buksan ang Credit sa Jinnie' }, payload: { app: 'credit' } },
          },
        },
        {
          id: 'building.report.4',
          title: { en: 'What helps, what hurts', tl: 'Ano ang Nakakatulong, Ano ang Nakakasira' },
          minutes: 3,
          hook: {
            text: { en: 'Two payslips apart, one habit quietly repairs a credit report and another quietly damages it.', tl: 'Dalawang sweldo ang pagitan, isang gawi ang tahimik na nag-aayos ng credit report at isa naman ang tahimik na sumisira.' },
            illo: 'card',
          },
          show: {
            text: { en: 'Sort the behaviors below by what they do to a credit report over time. Some help it, some hurt it, and a few do neither.', tl: 'Ayusin ang mga gawi sa ibaba ayon sa ginagawa nito sa credit report sa paglipas ng panahon. May nakakatulong, may nakakasira, at may wala namang epekto.' },
            points: [],
            illo: 'card',
            animate: false,
          },
          do: {
            type: 'swipe',
            prompt: { en: 'Sort each habit: does it help or hurt a credit report?', tl: 'Ayusin ang bawat gawi: nakakatulong ba o nakakasira sa credit report?' },
            left: { en: 'Helps', tl: 'Nakakatulong' },
            right: { en: 'Hurts', tl: 'Nakakasira' },
            cards: [
              { text: { en: 'Paying every installment on or before the due date', tl: 'Pagbayad ng bawat installment nang nasa oras o mas maaga' }, side: 'left', why: { en: 'On-time payments are the single strongest positive entry on a report.', tl: 'Ang bayad na nasa oras ang pinakamalakas na positibong entry sa report.' } },
              { text: { en: 'Missing an installment and not paying it for months', tl: 'Hindi nabayaran ang installment sa loob ng ilang buwan' }, side: 'right', why: { en: 'A missed payment that stays unpaid appears as a serious delinquency, worse than a single late payment.', tl: 'Lumalabas bilang seryosong delinquency ang hindi nabayarang installment na tumagal, mas malala kaysa sa isang beses na huli lang.' } },
              { text: { en: 'Opening several new small loans in the same month', tl: 'Pagbukas ng ilang bagong maliit na loan sa parehong buwan' }, side: 'right', why: { en: 'Multiple new accounts at once can read as financial stress to a lender reviewing the report.', tl: 'Puwedeng basahin bilang financial stress ng lender na sumusuri sa report ang maraming bagong account nang sabay.' } },
              { text: { en: 'Keeping an old, fully paid loan on record', tl: 'Panatilihin sa record ang lumang loan na bayad na nang buo' }, side: 'left', why: { en: 'A history of completed, well-paid loans builds a longer positive track record.', tl: 'Bumubuo ng mas mahabang positibong track record ang history ng mga tapos at maayos na binayarang loan.' } },
              { text: { en: 'Checking your own credit report once a year', tl: 'Pagcheck ng sariling credit report isang beses kada taon' }, side: 'left', why: { en: 'Reviewing your own report catches errors early and does not affect the score.', tl: 'Nakakahuli ng mali nang maaga ang pagsuri sa sariling report, at hindi nakakaapekto sa score.' } },
            ],
          },
          keep: {
            text: { en: 'A report rewards patience and on-time payments more than it punishes any single late one. Consistency is what it actually tracks.', tl: 'Mas ginagantimpalaan ng report ang pasensya at bayad na nasa oras kaysa parusahan ang isang beses na huli. Consistency ang talagang sinusubaybayan nito.' },
            action: null,
          },
        },
        {
          id: 'building.report.5',
          title: { en: 'The installment that slipped', tl: 'Ang Installment na Nakaligtaan' },
          minutes: 5,
          hook: {
            text: { en: 'An appliance installment is due the same week as a medical bill. One of them gets paid late.', tl: 'Parehong linggo dumating ang appliance installment at ang medical bill. Isa sa dalawa ang nahuli sa bayad.' },
            illo: 'calendar',
          },
          show: {
            text: { en: 'What happens after a missed installment depends less on the missed month and more on what happens in the weeks right after it.', tl: 'Hindi gaanong nakadepende sa buwang nahuli ang mangyayari pagkatapos ng nahuling installment, kundi sa mga sumunod na linggo pagkatapos nito.' },
            points: [],
            illo: 'calendar',
            animate: false,
          },
          do: {
            type: 'story',
            start: 'n1',
            nodes: {
              n1: {
                text: { en: 'The appliance installment, ₱2,500, is due the same week as a ₱3,000 medical bill. Only one can be paid on time.', tl: 'Dapat bayaran ang appliance installment, ₱2,500, sa parehong linggo ng ₱3,000 na medical bill. Isa lang ang mababayaran sa oras.' },
                choices: [
                  { text: { en: 'Pay the medical bill, and call the lender about the installment', tl: 'Bayaran ang medical bill, at tawagan ang lender tungkol sa installment' }, next: 'a1' },
                  { text: { en: 'Pay the medical bill, and let the installment go unpaid without calling', tl: 'Bayaran ang medical bill, at hayaang hindi mabayaran ang installment nang hindi tumatawag' }, next: 'b1' },
                ],
              },
              a1: {
                text: { en: 'The lender notes the call and offers five extra days with no additional fee, provided the installment is paid within that window.', tl: 'Naitala ng lender ang tawag at nag-alok ng limang karagdagang araw nang walang dagdag na bayad, basta mabayaran sa loob ng window na iyon.' },
                balance: 2500,
                choices: [
                  { text: { en: 'Pay within the five extra days', tl: 'Bayaran sa loob ng limang karagdagang araw' }, next: 'a2' },
                  { text: { en: 'Let the five days pass without paying', tl: 'Hayaang lumipas ang limang araw nang hindi nakakabayad' }, next: 'a3' },
                ],
              },
              a2: {
                text: { en: 'The installment is paid within the grace period. It never appears as missed on the report; only the call and the on-time payment exist in the record.', tl: 'Nabayaran ang installment sa loob ng grace period. Hindi ito kailanman lumitaw bilang hindi bayad sa report; ang tawag at ang bayad na nasa oras lang ang naitala.' },
                balance: 0,
                outcome: 'steady',
              },
              a3: {
                text: { en: 'Even with the call on record, an installment unpaid past the extended window appears as late. The call limited the damage; it did not erase the need to pay.', tl: 'Kahit naitala ang tawag, lumalabas bilang huli ang installment na hindi pa rin nabayaran pagkatapos ng pinahabang window. Nabawasan ng tawag ang pinsala; hindi nito inalis ang pangangailangang bayaran.' },
                balance: 2500,
                outcome: 'costly',
              },
              b1: {
                text: { en: 'No call is made. The installment sits unpaid through the due date and into the following weeks.', tl: 'Walang tawag na ginawa. Nananatiling hindi bayad ang installment lagpas sa due date at sa mga sumunod na linggo.' },
                balance: 2500,
                choices: [
                  { text: { en: 'Pay as soon as the medical bill clears, three weeks later', tl: 'Bayaran sa sandaling ma-clear ang medical bill, tatlong linggo pagkatapos' }, next: 'b2' },
                  { text: { en: 'Wait for the lender to send a formal notice first', tl: 'Hintayin munang magpadala ang lender ng pormal na notice' }, next: 'b3' },
                ],
              },
              b2: {
                text: { en: 'The installment is paid three weeks late, with no call made in between. It appears on the report as a missed payment for that month, even though it was eventually settled in full.', tl: 'Nabayaran ang installment tatlong linggo nang huli, walang tawag na ginawa sa pagitan. Lumalabas ito sa report bilang hindi bayad para sa buwang iyon, kahit nabayaran din ito nang buo sa huli.' },
                balance: 0,
                outcome: 'costly',
              },
              b3: {
                text: { en: 'Waiting adds another cycle before payment. Two consecutive months now show as missed, a pattern that reads very differently from a single late payment.', tl: 'Nagdagdag pa ng isang cycle bago mabayaran ang paghihintay. Dalawang magkasunod na buwan na ngayon ang lumalabas na hindi bayad, isang pattern na ibang-iba ang basa kaysa sa isang beses lang na huli.' },
                balance: 2500,
                outcome: 'costly',
              },
            },
          },
          keep: {
            text: { en: 'A call before the due date changes what a missed installment becomes. Silence turns one late payment into a pattern.', tl: 'Nagbabago kung ano ang magiging resulta ng nahuling installment ang tawag bago ang due date. Ginagawang pattern ng katahimikan ang isang huling bayad.' },
            action: null,
          },
        },
      ],
    },
    {
      id: 'building.cover',
      title: { en: 'Insurance beyond PhilHealth', tl: 'Insurance Lampas sa PhilHealth' },
      summary: { en: 'Term life sized to dependants, what an HMO stops covering, and what to skip.', tl: 'Term life na naaangkop sa dependants, ang hindi na sakop ng HMO, at ang dapat laktawan.' },
      competency: { en: 'Can size a term life policy and spot an add-on to skip', tl: 'Kayang sukatin ang term life policy at makilala ang add-on na dapat laktawan' },
      wish: 'safe',
      status: 'authored',
      bites: [
        {
          id: 'building.cover.1',
          title: { en: 'Sizing term life to dependants', tl: 'Pagsukat ng Term Life sa Dependants' },
          minutes: 3,
          hook: {
            text: { en: 'A parent earning ₱35,000 a month has three dependants and no policy priced yet.', tl: 'May tatlong dependant ang isang magulang na kumikita ng ₱35,000 kada buwan, pero wala pang na-presyo na policy.' },
            illo: 'shield',
          },
          show: {
            text: { en: 'A common rule of thumb sizes term life cover at about ten times annual income, when others depend on that income. Term life sells cover only; a VUL bundles that same cover with an investment account inside one premium.', tl: 'Sinusukat ng karaniwang tuntunin ang term life cover sa humigit-kumulang sampung beses ng taunang kita, kapag may umaasa sa kitang iyon. Nagbebenta lang ng cover ang term life; pinagsasama naman ng VUL ang parehong cover at investment account sa iisang premium.' },
            points: [
              { en: 'Ten times a ₱420,000 annual income is ₱4,200,000, sized to replace years of income, not to enrich anyone.', tl: '₱4,200,000 ang sampung beses ng ₱420,000 na taunang kita, sinukat para palitan ang taon ng kita, hindi para yumaman ang sinuman.' },
              { en: 'A VUL charges for the cover and for the investment inside one premium, so neither gets the full amount.', tl: 'Sinisingil ng VUL ang cover at ang investment sa loob ng iisang premium, kaya wala sa dalawa ang buong halaga.' },
            ],
            illo: 'shield',
            animate: true,
          },
          do: {
            type: 'number',
            prompt: { en: 'A parent earning ₱35,000 a month wants term life cover sized at ten times annual income. What is the cover, in pesos?', tl: 'Gusto ng magulang na kumikita ng ₱35,000 kada buwan ng term life cover na sampung beses ng taunang kita. Magkano ang cover, sa piso?' },
            answer: 4200000,
            tolerance: 0,
            format: 'peso',
            worked: { en: '35,000 × 12 = ₱420,000 a year. 420,000 × 10 = ₱4,200,000. A quote below this number covers less than ten years of this income.', tl: '35,000 × 12 = ₱420,000 kada taon. 420,000 × 10 = ₱4,200,000. Sakop ng mas kaunti sa sampung taon ng kitang ito ang quote na mas mababa dito.' },
          },
          keep: {
            text: { en: 'Ten times annual income is a floor to check a quote against, not a quote itself.', tl: 'Batayan lang sa pag-check ng quote ang sampung beses ng taunang kita, hindi ang quote mismo.' },
            action: null,
          },
        },
        {
          id: 'building.cover.2',
          title: { en: 'HMO limits, and what they leave out', tl: 'Mga Limit ng HMO' },
          minutes: 4,
          hook: {
            text: { en: 'A ₱600,000 stroke bill arrives the same year the HMO’s annual limit resets.', tl: 'Dumating ang ₱600,000 na bill sa stroke sa parehong taon na nag-reset ang taunang limit ng HMO.' },
            illo: 'shield',
          },
          show: {
            text: { en: 'An HMO limit resets every year and can shrink, or cost more to keep, as a member ages. Critical illness cover pays a lump sum on diagnosis, on top of whatever the HMO pays, not instead of it.', tl: 'Nagri-reset ang limit ng HMO bawat taon at puwedeng lumiit, o tumaas ang bayad para mapanatili, habang tumatanda ang miyembro. Nagbabayad ang critical illness cover ng lump sum sa pagkakaroon ng diagnosis, dagdag sa binabayaran ng HMO, hindi kapalit nito.' },
            points: [
              { en: 'An HMO’s yearly limit here is illustrative at ₱300,000; the exact figure differs by plan and employer.', tl: 'Illustrative sa ₱300,000 ang taunang limit ng HMO dito; iba-iba ang eksaktong halaga depende sa plano at employer.' },
              { en: 'A critical illness payout is fixed once diagnosed, regardless of how large the actual hospital bill turns out to be.', tl: 'Fixed na ang critical illness payout kapag na-diagnose na, kahit gaano kalaki ang aktwal na hospital bill.' },
            ],
            illo: 'shield',
            animate: true,
          },
          do: {
            type: 'compare',
            prompt: { en: 'A ₱600,000 stroke bill arrives. Which combination leaves the smaller amount paid out of pocket?', tl: 'Dumating ang ₱600,000 na bill sa stroke. Aling kombinasyon ang mas maliit na babayaran mula sa sariling bulsa?' },
            options: [
              {
                title: { en: 'HMO alone, ₱300,000 yearly limit', tl: 'HMO Lang, ₱300,000 na Taunang Limit' },
                lines: [
                  { en: 'The HMO pays up to its yearly limit of ₱300,000', tl: 'Babayaran ng HMO hanggang sa taunang limit nitong ₱300,000' },
                  { en: 'The remaining ₱300,000 is paid out of pocket', tl: 'Babayaran mula sa sariling bulsa ang natitirang ₱300,000' },
                ],
                effective: { en: 'Out-of-pocket cost: about ₱300,000', tl: 'Babayaran mula sa bulsa: humigit-kumulang ₱300,000' },
                cheaper: false,
              },
              {
                title: { en: 'HMO plus a ₱500,000 critical illness payout', tl: 'HMO Kasama ang ₱500,000 na Critical Illness Payout' },
                lines: [
                  { en: 'The HMO still pays up to its yearly limit of ₱300,000', tl: 'Babayaran pa rin ng HMO hanggang sa taunang limit nitong ₱300,000' },
                  { en: 'The critical illness policy pays a ₱500,000 lump sum on diagnosis, regardless of the HMO', tl: 'Nagbabayad ang critical illness policy ng ₱500,000 na lump sum sa diagnosis, kahit ano ang ginawa ng HMO' },
                ],
                effective: { en: 'Out-of-pocket cost: none, with ₱200,000 left over', tl: 'Babayaran mula sa bulsa: wala, may natitira pang ₱200,000' },
                cheaper: true,
              },
            ],
            why: { en: 'Critical illness cover pays on diagnosis, not against the hospital’s actual bill, so it stacks on top of an HMO instead of replacing it. The illustrative ₱300,000 HMO limit is the number worth checking every renewal, since it can shrink or cost more as a member ages.', tl: 'Nagbabayad ang critical illness cover sa diagnosis, hindi laban sa aktwal na bill ng ospital, kaya dagdag ito sa HMO sa halip na pumalit dito. Ang illustrative na ₱300,000 na limit ng HMO ang dapat suriin bawat renewal, dahil puwede itong lumiit o tumaas ang bayad habang tumatanda ang miyembro.' },
          },
          keep: {
            text: { en: 'An HMO limit resets yearly; a critical illness payout does not depend on it at all.', tl: 'Nagri-reset ang limit ng HMO bawat taon; hindi ito umaasa sa critical illness payout.' },
            action: null,
          },
        },
        {
          id: 'building.cover.3',
          title: { en: 'Critical illness, matched to what it replaces', tl: 'Critical Illness, Itinugma sa Kapalit Nito' },
          minutes: 3,
          hook: {
            text: { en: 'Four kinds of cover get confused for one another at the counter, right when a decision has to be made.', tl: 'Apat na uri ng cover ang nagkakahalo-halo sa harap ng counter, sa eksaktong sandaling kailangan nang magpasya.' },
            illo: 'shield',
          },
          show: {
            text: { en: 'Each kind of cover answers a different question. Term life answers what happens to income if the insured dies; an HMO answers who pays the hospital; critical illness answers what happens the day a serious diagnosis lands.', tl: 'Ibang tanong ang sinasagot ng bawat uri ng cover. Sumasagot ang term life kung ano ang mangyayari sa kita kapag namatay ang insured; sumasagot ang HMO kung sino ang magbabayad sa ospital; sumasagot ang critical illness kung ano ang mangyayari sa araw na dumating ang seryosong diagnosis.' },
            points: [
              { en: 'A VUL answers a third question: how much of the premium becomes an investment.', tl: 'Sinasagot ng VUL ang ikatlong tanong: gaano karami sa premium ang nagiging investment.' },
            ],
            illo: 'shield',
            animate: false,
          },
          do: {
            type: 'match',
            prompt: { en: 'Match each cover to what it actually does.', tl: 'I-match ang bawat cover sa talagang ginagawa nito.' },
            pairs: [
              { a: { en: 'Term life', tl: 'Term life' }, b: { en: 'Pays a lump sum to dependants if the insured dies within the term; no investment attached', tl: 'Nagbabayad ng lump sum sa dependants kung namatay ang insured sa loob ng term; walang investment na kasama' } },
              { a: { en: 'VUL (variable universal life)', tl: 'VUL (variable universal life)' }, b: { en: 'Bundles life cover with an investment account inside one premium, with charges for both', tl: 'Pinagsasama ang life cover at investment account sa iisang premium, may singil para sa dalawa' } },
              { a: { en: 'HMO', tl: 'HMO' }, b: { en: 'Pays hospital and outpatient costs up to a yearly limit that can shrink or cost more with age', tl: 'Nagbabayad ng gastos sa ospital at outpatient hanggang sa taunang limit na puwedeng lumiit o tumaas ang bayad habang tumatanda' } },
              { a: { en: 'Critical illness cover', tl: 'Critical illness cover' }, b: { en: 'Pays a lump sum on diagnosis of a listed illness, regardless of the actual hospital bill', tl: 'Nagbabayad ng lump sum sa diagnosis ng nakalistang sakit, kahit ano ang aktwal na bill sa ospital' } },
            ],
          },
          keep: {
            text: { en: 'Four covers, four different questions. Buying one does not answer what another is for.', tl: 'Apat na cover, apat na magkaibang tanong. Hindi sumasagot sa layunin ng isa pa ang pagbili ng isa.' },
            action: null,
          },
        },
        {
          id: 'building.cover.4',
          title: { en: 'What to skip: add-ons that cost more than they cover', tl: 'Ano ang Lalaktawan sa mga Add-on' },
          minutes: 4,
          hook: {
            text: { en: 'A counter offers five add-ons in the same sitting a term policy gets signed.', tl: 'Limang add-on ang inaalok sa parehong upuan kung saan pinipirmahan ang term policy.' },
            illo: 'card',
          },
          show: {
            text: { en: 'Some add-ons close a real gap; others cost more than they could ever pay out. Sort what is worth keeping from what is worth skipping.', tl: 'May mga add-on na sumasara ng tunay na puwang; may iba namang mas mahal kaysa sa maaari nitong ibayad. Ayusin kung alin ang sulit panatilihin at alin ang lalaktawan.' },
            points: [],
            illo: 'card',
            animate: false,
          },
          do: {
            type: 'swipe',
            prompt: { en: 'Sort each item: worth keeping, or worth skipping?', tl: 'Ayusin ang bawat item: sulit ba panatilihin, o lalaktawan?' },
            left: { en: 'Keep', tl: 'Panatilihin' },
            right: { en: 'Skip', tl: 'Laktawan' },
            cards: [
              { text: { en: 'A term policy sized to about ten times annual income', tl: 'Term policy na sinukat sa halos sampung beses ng taunang kita' }, side: 'left', why: { en: 'This matches the income it needs to replace if the breadwinner dies during the term.', tl: 'Tugma ito sa kitang kailangang palitan kung mamatay ang breadwinner sa loob ng term.' } },
              { text: { en: 'A VUL sold as insurance that also grows your money', tl: 'VUL na ibinebenta bilang insurance na lumalago rin ang pera mo' }, side: 'right', why: { en: 'The same premium pays for cover and for an investment, so neither gets the full amount; a term policy plus a separate MP2 usually costs less for the same cover.', tl: 'Nagbabayad ang iisang premium sa cover at sa investment, kaya wala sa dalawa ang buong halaga; mas mura kadalasan ang term policy kasama ang hiwalay na MP2 para sa parehong cover.' } },
              { text: { en: 'A critical illness rider added on top of an existing HMO', tl: 'Critical illness rider na idinagdag sa umiiral nang HMO' }, side: 'left', why: { en: 'It pays a lump sum on diagnosis, filling exactly the gap an HMO’s yearly limit leaves.', tl: 'Nagbabayad ito ng lump sum sa diagnosis, sinasara nito eksakto ang puwang na iniiwan ng taunang limit ng HMO.' } },
              { text: { en: 'An accident-only rider priced higher than the term policy itself', tl: 'Accident-only rider na mas mahal pa sa term policy mismo' }, side: 'right', why: { en: 'A rider priced above the base premium rarely returns more value than raising the term cover directly.', tl: 'Bihirang mas malaki ang halagang ibinabalik ng rider na mas mahal pa sa base premium kaysa sa pagtaas na lang ng term cover mismo.' } },
              { text: { en: 'Reviewing the term cover amount every few years as income changes', tl: 'Pagsuri sa halaga ng term cover kada ilang taon habang nagbabago ang kita' }, side: 'left', why: { en: 'The ten-times rule is a moving target; income changes, so the cover a family needs changes with it.', tl: 'Gumagalaw ang sampung-beses na tuntunin; nagbabago ang kita, kaya nagbabago rin ang cover na kailangan ng pamilya.' } },
            ],
          },
          keep: {
            text: { en: 'An add-on earns its premium only when it closes a gap the base policy leaves open.', tl: 'Sulit lang ang add-on kung sinasara nito ang puwang na iniwan ng base policy.' },
            action: null,
          },
        },
        {
          id: 'building.cover.5',
          title: { en: 'The breadwinner who skipped the term policy', tl: 'Ang Breadwinner na Nilaktawan ang Term Policy' },
          minutes: 5,
          hook: {
            text: { en: 'A ₱35,000-a-month earner with two dependants compares an ₱8,000-a-year term premium against keeping that money in a fund instead.', tl: 'Ikinukumpara ng kumikita ng ₱35,000 kada buwan na may dalawang dependant ang ₱8,000 na taunang term premium laban sa pagtago na lang ng perang iyon sa fund.' },
            illo: 'shield',
          },
          show: {
            text: { en: 'What a family has on hand after an unexpected loss depends less on the year of the loss and more on what was decided years earlier.', tl: 'Hindi gaanong nakadepende sa taon ng pagkawala ang mapapala ng pamilya matapos ang biglaang pagkawala, kundi sa desisyong ginawa mga taon bago pa nito.' },
            points: [],
            illo: 'shield',
            animate: false,
          },
          do: {
            type: 'story',
            start: 'n1',
            nodes: {
              n1: {
                text: { en: 'A ₱35,000-a-month earner with two dependants prices a term policy: about ₱8,000 a year for ₱4,200,000 of cover.', tl: 'Nag-presyo ng term policy ang kumikitang ₱35,000 kada buwan na may dalawang dependant: humigit-kumulang ₱8,000 kada taon para sa ₱4,200,000 na cover.' },
                choices: [
                  { text: { en: 'Buy the term policy', tl: 'Bilhin ang term policy' }, next: 'a1' },
                  { text: { en: 'Skip it, and add the ₱8,000 to a fund instead', tl: 'Laktawan ito, at idagdag na lang ang ₱8,000 sa fund' }, next: 'b1' },
                ],
              },
              a1: {
                text: { en: 'The first year’s premium is paid. The policy stays in force only as long as the next year’s premium is paid on time.', tl: 'Nabayaran ang premium sa unang taon. Mananatiling active ang policy hangga’t nababayaran nang nasa oras ang premium sa susunod na taon.' },
                choices: [
                  { text: { en: 'Keep paying the premium every year', tl: 'Ituloy ang pagbayad ng premium taun-taon' }, next: 'a2' },
                  { text: { en: 'Let the policy lapse after year one to save the ₱8,000', tl: 'Hayaang mag-lapse ang policy pagkatapos ng unang taon para matipid ang ₱8,000' }, next: 'a3' },
                ],
              },
              a2: {
                text: { en: 'In year three, an accident takes the breadwinner’s life. The policy is active. The ₱4,200,000 payout arrives within weeks.', tl: 'Sa ikatlong taon, kinuha ng aksidente ang buhay ng breadwinner. Active pa ang policy. Dumating ang ₱4,200,000 na payout sa loob ng ilang linggo.' },
                balance: 4200000,
                outcome: 'steady',
              },
              a3: {
                text: { en: 'The policy lapsed after one premium. The same accident occurs in year three. There is no payout; the cover ended the day the second premium went unpaid.', tl: 'Nag-lapse ang policy pagkatapos ng isang premium. Nangyari ang parehong aksidente sa ikatlong taon. Walang payout; natapos ang cover sa araw na hindi nabayaran ang ikalawang premium.' },
                balance: 0,
                outcome: 'costly',
              },
              b1: {
                text: { en: 'The ₱8,000 a year goes into a fund instead of a premium.', tl: 'Napupunta sa fund ang ₱8,000 kada taon, sa halip na premium.' },
                choices: [
                  { text: { en: 'Keep adding ₱8,000 every year without fail', tl: 'Ituloy ang pagdagdag ng ₱8,000 taun-taon nang walang palya' }, next: 'b2' },
                  { text: { en: 'Redirect the ₱8,000 to a different want in some years', tl: 'Ilipat ang ₱8,000 sa ibang gusto sa ilang taon' }, next: 'b3' },
                ],
              },
              b2: {
                text: { en: 'Three years in, the fund holds about ₱24,000 plus interest. The same accident occurs. The fund is real money, but nowhere near the ₱4,200,000 a policy would have paid.', tl: 'Pagkalipas ng tatlong taon, humigit-kumulang ₱24,000 kasama ang interes ang laman ng fund. Nangyari ang parehong aksidente. Tunay na pera ang fund, pero malayo pa rin sa ₱4,200,000 na sana binayaran ng policy.' },
                balance: 24000,
                outcome: 'costly',
              },
              b3: {
                text: { en: 'Some years the ₱8,000 went elsewhere. By year three the fund holds about ₱9,000. The same accident occurs, and the fund covers barely three weeks of the household’s expenses.', tl: 'Ilang taon, napunta sa iba ang ₱8,000. Pagsapit ng ikatlong taon, humigit-kumulang ₱9,000 lang ang laman ng fund. Nangyari ang parehong aksidente, at halos tatlong linggo lang ng gastos ng bahay ang nasasakop ng fund.' },
                balance: 9000,
                outcome: 'costly',
              },
            },
          },
          keep: {
            text: { en: 'A term policy pays within weeks; a fund built at the same pace would need decades to match it.', tl: 'Nagbabayad ang term policy sa loob ng ilang linggo; kakailanganin ng dekada ang fund na ganito rin kabilis para tumugma.' },
            action: { kind: 'wish', label: { en: 'Save this year’s term premium', tl: 'Ipunin ang term premium ngayong taon' }, payload: { key: 'term-life-premium', title: { en: 'Save this year’s term premium', tl: 'Ipunin ang term premium ngayong taon' }, amount: 8000 } },
          },
        },
      ],
    },
    {
      id: 'building.invest',
      title: { en: 'Investing II', tl: 'Investing II' },
      summary: { en: 'MP2, retail bonds, UITFs and index funds, single stocks, and crypto sized to what it actually is: speculation.', tl: 'MP2, retail bonds, UITF at index fund, single stocks, at crypto na sinukat sa totoong pagkatao nito: speculation.' },
      competency: { en: 'Can match an investment to their own risk and time horizon', tl: 'Kayang itugma ang investment sa sariling risk at time horizon' },
      wish: 'have',
      status: 'authored',
      bites: [
        {
          id: 'building.invest.1',
          title: { en: 'Building an MP2 ladder, in order', tl: 'Paggawa ng MP2 Ladder' },
          minutes: 4,
          hook: {
            text: { en: 'Five separate MP2 accounts, opened one year apart, start maturing one after another beginning year six.', tl: 'Limang hiwalay na MP2 account, binuksan nang may pagitan na isang taon, nagsisimulang mag-mature isa-isa simula sa ikaanim na taon.' },
            illo: 'alkansya',
          },
          show: {
            text: { en: 'Pag-IBIG MP2 runs a five-year term, with a minimum of ₱500 a month, paying a dividend of 7.12% for 2025, tax-free. A ladder opens one MP2 account each year, so one account matures every year after the fifth.', tl: 'May limang-taong term ang Pag-IBIG MP2, may minimum na ₱500 kada buwan, may dividend na 7.12% para sa 2025, tax-free. Nagbubukas ang ladder ng isang MP2 account bawat taon, kaya may isang account na nagma-mature bawat taon simula sa ikalima.' },
            points: [
              { en: 'Each account keeps its own five-year clock, counted from the year it opened.', tl: 'May sariling limang-taong orasan ang bawat account, binibilang mula sa taong binuksan ito.' },
              { en: 'By year six the first account matures; by year seven the second, and so on.', tl: 'Pagsapit ng ikaanim na taon, nagma-mature ang unang account; sa ikapitong taon, ang ikalawa, at iba pa.' },
            ],
            illo: 'alkansya',
            animate: true,
          },
          do: {
            type: 'order',
            prompt: { en: 'Put these steps for building an MP2 ladder in the right order.', tl: 'Ilagay sa tamang pagkakasunod-sunod ang mga hakbang sa paggawa ng MP2 ladder.' },
            steps: [
              { en: 'Open the first MP2 account with at least ₱500 a month.', tl: 'Magbukas ng unang MP2 account na may hindi bababa sa ₱500 kada buwan.' },
              { en: 'Open a new MP2 account each following year, on the same schedule.', tl: 'Magbukas ng bagong MP2 account bawat sumunod na taon, sa parehong schedule.' },
              { en: 'Keep contributing to every account already opened, not just the newest one.', tl: 'Ituloy ang kontribusyon sa lahat ng nabuksan nang account, hindi lang sa pinakabago.' },
              { en: 'Let the first account reach its five-year term and mature.', tl: 'Hayaang maabot ng unang account ang limang-taong term nito at mag-mature.' },
              { en: 'Reinvest or withdraw the matured account, then repeat the following year with the next one.', tl: 'I-reinvest o i-withdraw ang na-mature na account, tapos ulitin sa susunod na taon gamit ang kasunod.' },
            ],
            why: { en: 'The ladder only works because each account was opened a year apart. Opening all five in the same year would mature them all at once, and remove the yearly payout the ladder is built for.', tl: 'Gumagana lang ang ladder dahil isang taon ang agwat ng pagbukas ng bawat account. Magpapa-mature sa lahat nang sabay ang pagbukas ng limang account sa parehong taon, at aalisin ang taunang payout na dahilan ng pagkakagawa ng ladder.' },
          },
          keep: {
            text: { en: 'A ladder trades a single lump sum for a payout that repeats every year after the fifth.', tl: 'Ipinagpapalit ng ladder ang iisang lump sum para sa payout na paulit-ulit bawat taon simula sa ikalima.' },
            action: null,
          },
        },
        {
          id: 'building.invest.2',
          title: { en: 'Retail Treasury Bonds versus a UITF', tl: 'RTB Laban sa UITF' },
          minutes: 4,
          hook: {
            text: { en: 'Two ₱50,000 lump sums, one in a Retail Treasury Bond, one in a UITF, sit for five years starting August 2025.', tl: 'Dalawang ₱50,000 na lump sum, isa sa Retail Treasury Bond, isa sa UITF, naiwan sa loob ng limang taon simula Agosto 2025.' },
            illo: 'coins',
          },
          show: {
            text: { en: 'A Retail Treasury Bond pays a fixed rate for a fixed term; a UITF spreads money across many companies and its return moves with the market. One is predictable, the other is not, and both are taxed differently.', tl: 'Nagbabayad ang Retail Treasury Bond ng fixed na rate sa loob ng fixed na term; ikinakalat naman ng UITF ang pera sa maraming kompanya at gumagalaw ang return nito kasabay ng market. Predictable ang isa, hindi ang isa, at magkaiba ang buwis sa dalawa.' },
            points: [
              { en: 'RTB 31, sold August 2025, pays 6% a year for five years, interest paid quarterly, minimum ₱5,000.', tl: 'Nagbabayad ang RTB 31, ibinenta noong Agosto 2025, ng 6% kada taon sa loob ng limang taon, quarterly ang interest, minimum na ₱5,000.' },
              { en: 'Interest on the bond is taxed 20%; a UITF’s return is not a fixed interest rate and moves with its underlying investments.', tl: 'May 20% na buwis ang interest ng bond; hindi fixed na interest rate ang return ng UITF, at gumagalaw kasabay ng mga investment sa likod nito.' },
            ],
            illo: 'coins',
            animate: true,
          },
          do: {
            type: 'compare',
            prompt: { en: '₱50,000 for five years, starting August 2025. Which one gives a known, guaranteed total?', tl: '₱50,000 sa loob ng limang taon, simula Agosto 2025. Alin ang may alam at garantisadong kabuuan?' },
            options: [
              {
                title: { en: 'Retail Treasury Bond, 6% a year', tl: 'Retail Treasury Bond, 6% Kada Taon' },
                lines: [
                  { en: 'Pays 6% a year on ₱50,000, quarterly, for five years', tl: 'Nagbabayad ng 6% kada taon sa ₱50,000, quarterly, sa loob ng limang taon' },
                  { en: '20% tax applies to the interest earned', tl: 'May 20% na buwis sa kinitang interest' },
                ],
                effective: { en: 'Illustrative total after tax over five years: about ₱12,000 in interest', tl: 'Illustrative na kabuuan pagkatapos ng buwis sa loob ng limang taon: humigit-kumulang ₱12,000 na interest' },
                cheaper: true,
              },
              {
                title: { en: 'UITF invested in an equity fund', tl: 'UITF na Nasa Equity Fund' },
                lines: [
                  { en: 'Return moves with the market; five-year equity fund returns commonly range from a loss to over 10% a year', tl: 'Gumagalaw ang return kasabay ng market; karaniwang mula sa lugi hanggang mahigit 10% kada taon ang limang-taong equity fund return' },
                  { en: 'No fixed tax rate on the return itself; a fund is taxed differently from a bond’s interest', tl: 'Walang fixed na buwis sa return mismo; iba ang buwis ng fund kumpara sa interest ng bond' },
                ],
                effective: { en: 'Illustrative outcome after five years: could be more than the bond, or less, including a loss', tl: 'Illustrative na resulta pagkatapos ng limang taon: puwedeng mas malaki kaysa sa bond, o mas maliit, kasama ang lugi' },
                cheaper: false,
              },
            ],
            why: { en: 'The bond’s 6% is locked in the day it is bought; the UITF’s return is not knowable in advance. A bond suits money that must be there in five years; a UITF suits money that can ride out a bad year.', tl: 'Naka-lock na ang 6% ng bond sa araw na binili ito; hindi alam nang maaga ang return ng UITF. Bagay ang bond sa perang kailangang meron talaga sa loob ng limang taon; bagay ang UITF sa perang kayang tumagal sa isang masamang taon.' },
          },
          keep: {
            text: { en: 'A bond’s rate is fixed the day it is bought. A UITF’s return is only known the day it is sold.', tl: 'Naka-fix na ang rate ng bond sa araw na binili ito. Malalaman lang ang return ng UITF sa araw na ibenta ito.' },
            action: null,
          },
        },
        {
          id: 'building.invest.3',
          title: { en: 'A single stock versus an index fund', tl: 'Single Stock Laban sa Index Fund' },
          minutes: 3,
          hook: {
            text: { en: 'A single stock doubled in a year the index it belongs to rose only 8%.', tl: 'Dumoble ang isang single stock sa taon na 8% lang ang taas ng index na kinabibilangan nito.' },
            illo: 'scale',
          },
          show: {
            text: { en: 'A single stock can rise far more than the market, or fall far more; an index fund spreads the same peso across many companies, so no single company’s swing decides the whole return.', tl: 'Puwedeng tumaas nang mas malaki sa market ang single stock, o bumagsak nang mas malaki; ikinakalat naman ng index fund ang parehong piso sa maraming kompanya, kaya walang iisang kompanya ang nagpapasya sa buong return.' },
            points: [
              { en: 'A single stock can outperform the whole market in a good year, and underperform it just as sharply in a bad one.', tl: 'Puwedeng talunin ng single stock ang buong market sa magandang taon, at matalo rin nang husto sa masamang taon.' },
              { en: 'An index fund cannot match a single winning stock’s best year, but it also cannot be wiped out by one company’s worst year.', tl: 'Hindi kayang tapatan ng index fund ang pinakamagandang taon ng isang nanalong stock, pero hindi rin ito mabubura ng pinakamasamang taon ng isang kompanya.' },
            ],
            illo: 'scale',
            animate: true,
          },
          do: {
            type: 'choice',
            prompt: { en: 'A saver wants steadier growth without picking winners one by one. Which fits better?', tl: 'Gusto ng saver ng mas steady na paglago nang hindi pumipili ng mga panalo isa-isa. Alin ang mas bagay?' },
            options: [
              { text: { en: 'A single stock in one company believed to grow fast', tl: 'Isang single stock sa kompanyang pinaniniwalaang mabilis lumago' }, correct: false, why: { en: 'A single company can grow fast, or lose value fast; steadier growth is not what a single stock is built for.', tl: 'Puwedeng mabilis lumago ang isang kompanya, o mabilis mawalan ng halaga; hindi ito ang ginawa para sa mas steady na paglago.' } },
              { text: { en: 'An index fund spread across many companies', tl: 'Index fund na nakakalat sa maraming kompanya' }, correct: true, why: { en: 'Spreading across many companies means no single company’s bad year decides the whole return; that is the steadier path a saver who is not picking winners is looking for.', tl: 'Nangangahulugan ang pagkalat sa maraming kompanya na walang iisang kompanyang masamang taon ang magpapasya sa buong return; iyon ang mas steady na landas na hinahanap ng saver na hindi namimili ng panalo.' } },
              { text: { en: 'Crypto, for the fastest possible growth', tl: 'Crypto, para sa pinakamabilis na paglago' }, correct: false, why: { en: 'Crypto sits at the top of the risk ladder; it is built for speculation, not for steadier growth.', tl: 'Nasa taas ng risk ladder ang crypto; ginawa ito para sa speculation, hindi para sa mas steady na paglago.' } },
            ],
          },
          keep: {
            text: { en: 'A single stock can beat the market. An index fund is built so no single company can sink it.', tl: 'Puwedeng talunin ng single stock ang market. Ginawa ang index fund para walang iisang kompanya ang makakalubog dito.' },
            action: null,
          },
        },
        {
          id: 'building.invest.4',
          title: { en: 'Crypto, sized as a share of the portfolio', tl: 'Crypto, Sinukat Bilang Bahagi ng Portfolio' },
          minutes: 4,
          hook: {
            text: { en: 'A ₱50,000 portfolio gets split across an emergency fund, a UITF, and crypto in one sitting.', tl: 'Nahati ang ₱50,000 na portfolio sa emergency fund, UITF, at crypto sa iisang upuan.' },
            illo: 'jars',
          },
          show: {
            text: { en: 'Crypto sits at the top of the risk ladder: prices can swing sharply in either direction in the same week. Sizing it as a small share of a portfolio limits what a bad week can take.', tl: 'Nasa taas ng risk ladder ang crypto: puwedeng magbago nang husto ang presyo sa alinmang direksyon sa parehong linggo. Naglilimita sa maaaring kunin ng masamang linggo ang pagsukat dito bilang maliit na bahagi ng portfolio.' },
            points: [
              { en: 'A portfolio still needs an emergency fund and steadier holdings before any peso goes to speculation.', tl: 'Kailangan pa rin ng portfolio ng emergency fund at mas steady na holdings bago pumunta ang anumang piso sa speculation.' },
            ],
            illo: 'jars',
            animate: false,
          },
          do: {
            type: 'allocate',
            prompt: { en: 'Split ₱50,000 across these three, keeping crypto to a small share.', tl: 'Hatiin ang ₱50,000 sa tatlong ito, panatilihing maliit ang bahagi ng crypto.' },
            total: 50000,
            step: 500,
            jars: [
              { key: 'emergency', label: { en: 'Emergency fund', tl: 'Emergency Fund' }, hint: { en: 'Cash that must be there without delay', tl: 'Cash na dapat naroon nang walang antala' }, guide: [40, 60] },
              { key: 'index', label: { en: 'UITF or index fund', tl: 'UITF o Index Fund' }, hint: { en: 'Spread across many companies, steadier over years', tl: 'Nakakalat sa maraming kompanya, mas steady sa paglipas ng taon' }, guide: [30, 50] },
              { key: 'crypto', label: { en: 'Crypto', tl: 'Crypto' }, hint: { en: 'Speculation, sized small on purpose', tl: 'Speculation, sinadyang maliit' }, guide: [0, 10] },
            ],
            why: { en: 'Crypto guided at no more than 10% means even a total loss there does not touch the emergency fund or the steadier holdings. The guide is a ceiling for speculation, not a target to reach.', tl: 'Nangangahulugan ang crypto na ginagabayan sa hindi hihigit sa 10% na kahit lugi ito nang buo, hindi madadamay ang emergency fund o ang mas steady na holdings. Kisame ang guide para sa speculation, hindi target na aabutin.' },
          },
          keep: {
            text: { en: 'Crypto priced in as a small share cannot sink a portfolio. Priced in as the whole portfolio, it can.', tl: 'Hindi kayang lubugin ang portfolio ng crypto na maliit na bahagi lang. Kung ito na ang buong portfolio, kaya nito.' },
            action: null,
          },
        },
        {
          id: 'building.invest.5',
          title: { en: 'The relative who moved the house fund into crypto', tl: 'Ang Kamag-anak na Inilipat ang House Fund sa Crypto' },
          minutes: 5,
          hook: {
            text: { en: 'A relative moves the entire house-fund savings into crypto after a friend’s coin triples in a month.', tl: 'Inilipat ng isang kamag-anak ang buong ipon para sa bahay sa crypto matapos tumaas nang tatlong beses ang coin ng kaibigan sa loob ng isang buwan.' },
            illo: 'house',
          },
          show: {
            text: { en: 'A portfolio moved from steadier holdings into a single speculative asset carries the whole risk of that one asset, no matter how well it did for someone else.', tl: 'Dala ng portfolio na inilipat mula sa mas steady na holdings papunta sa iisang speculative asset ang buong risk ng asset na iyon, kahit gaano kaganda ang naging resulta nito sa iba.' },
            points: [],
            illo: 'house',
            animate: false,
          },
          do: {
            type: 'story',
            start: 'n1',
            nodes: {
              n1: {
                text: { en: 'A ₱600,000 house fund, saved over six years toward a Pag-IBIG down payment, sits in a UITF. A friend’s coin tripled in a month.', tl: '₱600,000 na house fund, naipon sa loob ng anim na taon para sa down payment sa Pag-IBIG, nasa UITF. Tumaas nang tatlong beses ang coin ng kaibigan sa loob ng isang buwan.' },
                balance: 600000,
                choices: [
                  { text: { en: 'Move the whole fund into the same coin', tl: 'Ilipat ang buong fund sa parehong coin' }, next: 'a1' },
                  { text: { en: 'Move only 5% of the fund into the coin, and leave the rest in the UITF', tl: 'Ilipat lang ang 5% ng fund sa coin, at iwan ang natitira sa UITF' }, next: 'b1' },
                ],
              },
              a1: {
                text: { en: 'The whole ₱600,000 sits in the coin now. Within two months, the coin gives back most of its gain.', tl: 'Nasa coin na ang buong ₱600,000. Sa loob ng dalawang buwan, naibalik ng coin ang karamihan ng napala nito.' },
                balance: 600000,
                choices: [
                  { text: { en: 'Sell now and return what is left to the UITF', tl: 'Ibenta na ngayon at ibalik ang natitira sa UITF' }, next: 'a2' },
                  { text: { en: 'Hold, expecting the coin to recover', tl: 'Panatilihin, umaasang gaganda ulit ang coin' }, next: 'a3' },
                ],
              },
              a2: {
                text: { en: 'The fund sells at ₱310,000, less than half of what it held before the move. The house down payment plan is set back years.', tl: 'Naibenta ang fund sa ₱310,000, kalahati na lang halos ng dating hawak. Naantala nang ilang taon ang plano sa down payment ng bahay.' },
                balance: 310000,
                outcome: 'costly',
              },
              a3: {
                text: { en: 'The coin falls further over the following months. What is left, ₱180,000, is less than a third of the original fund.', tl: 'Bumagsak pa ang coin sa mga sumunod na buwan. Wala pang isang-katlo ng orihinal na fund ang natitira, ₱180,000.' },
                balance: 180000,
                outcome: 'costly',
              },
              b1: {
                text: { en: '₱30,000 moves into the coin; ₱570,000 stays in the UITF. Within two months, the coin gives back most of its gain, the same as before.', tl: '₱30,000 ang lumipat sa coin; ₱570,000 nanatili sa UITF. Sa loob ng dalawang buwan, naibalik din ng coin ang karamihan ng napala nito, tulad ng dati.' },
                balance: 600000,
                choices: [
                  { text: { en: 'Sell the coin position and return to the UITF', tl: 'Ibenta ang posisyon sa coin at bumalik sa UITF' }, next: 'b2' },
                  { text: { en: 'Hold the coin position, expecting recovery', tl: 'Panatilihin ang posisyon sa coin, umaasang gaganda' }, next: 'b3' },
                ],
              },
              b2: {
                text: { en: 'The coin position sells at about ₱15,000. Combined with the ₱570,000 that stayed in the UITF, the fund holds ₱585,000, close to where it started.', tl: 'Naibenta ang posisyon sa coin sa halos ₱15,000. Kasama ang ₱570,000 na nanatili sa UITF, ₱585,000 ang laman ng fund, malapit sa pinagsimulan.' },
                balance: 585000,
                outcome: 'steady',
              },
              b3: {
                text: { en: 'The coin position keeps falling and is now worth about ₱6,000. The ₱570,000 in the UITF was never at risk. The fund holds roughly ₱576,000, still close to its starting point.', tl: 'Patuloy na bumaba ang posisyon sa coin at humigit-kumulang ₱6,000 na lang ang halaga. Hindi kailanman nasangkot sa risk ang ₱570,000 sa UITF. Humigit-kumulang ₱576,000 ang laman ng fund, malapit pa rin sa pinagsimulan.' },
                balance: 576000,
                outcome: 'steady',
              },
            },
          },
          keep: {
            text: { en: 'A speculative bet sized small still lets a house fund survive a bad month. Sized as the whole fund, it does not.', tl: 'Nakakaligtas pa rin sa masamang buwan ng house fund ang speculative bet na maliit ang laki. Kapag ito na ang buong fund, hindi na.' },
            action: { kind: 'open', label: { en: 'Open Goals in Jinnie', tl: 'Buksan ang Goals sa Jinnie' }, payload: { app: 'goals' } },
          },
        },
      ],
    },
    {
      id: 'building.housing',
      title: { en: 'Housing', tl: 'Pabahay' },
      summary: { en: 'The Pag-IBIG housing loan, what an amortization schedule actually shows, and the true cost of a condo.', tl: 'Ang Pag-IBIG housing loan, ang talagang ipinapakita ng amortization schedule, at ang tunay na gastos ng condo.' },
      competency: { en: 'Can read an amortization schedule and compare renting to buying', tl: 'Kayang basahin ang amortization schedule at ikumpara ang pag-arkila sa pagbili' },
      wish: 'have',
      status: 'authored',
      bites: [
        {
          id: 'building.housing.1',
          title: { en: 'Reading a Pag-IBIG amortization schedule', tl: 'Pagbasa ng Amortization Schedule' },
          minutes: 4,
          hook: {
            text: { en: 'A ₱2,000,000 Pag-IBIG loan at 6.5% over 20 years shows a single monthly number on the approval letter, with no breakdown of what it buys.', tl: 'Nagpapakita ng iisang buwanang numero sa approval letter ang ₱2,000,000 na Pag-IBIG loan sa 6.5% sa loob ng 20 taon, walang breakdown kung ano ang binibili nito.' },
            illo: 'house',
          },
          show: {
            text: { en: 'Pag-IBIG housing loans run up to ₱10,000,000 since May 2026, with terms up to 30 years; the rate depends on the fixing period chosen. An amortization schedule splits every monthly payment into interest and principal, and the split changes every month.', tl: 'Umaabot ang Pag-IBIG housing loan hanggang ₱10,000,000 mula Mayo 2026, may terms na hanggang 30 taon; depende sa napiling fixing period ang rate. Hinahati ng amortization schedule ang bawat buwanang bayad sa interest at principal, at nagbabago ang hati bawat buwan.' },
            points: [
              { en: 'A ₱2,000,000 loan at 6.5% over 20 years runs about ₱14,900 a month, illustrative for this rate and term.', tl: 'Humigit-kumulang ₱14,900 kada buwan ang ₱2,000,000 na loan sa 6.5% sa loob ng 20 taon, illustrative para sa rate at term na ito.' },
              { en: 'Early payments are mostly interest; later payments are mostly principal, even though the monthly amount stays the same.', tl: 'Karamihan interest ang mga unang bayad; karamihan principal ang mga huling bayad, kahit pareho ang buwanang halaga.' },
            ],
            illo: 'house',
            animate: true,
          },
          do: {
            type: 'number',
            prompt: { en: 'A ₱2,000,000 Pag-IBIG loan at 6.5% runs 20 years. What is the total interest paid over the full term, illustrative for this rate?', tl: 'Tatakbo ng 20 taon ang ₱2,000,000 na Pag-IBIG loan sa 6.5%. Magkano ang kabuuang interest na babayaran sa buong term, illustrative para sa rate na ito?' },
            answer: 1580000,
            tolerance: 20000,
            format: 'peso',
            worked: { en: 'About ₱14,900 a month × 240 months ≈ ₱3,580,000 paid in total; minus the ₱2,000,000 principal leaves about ₱1,580,000 in interest, illustrative for this rate and term.', tl: 'Humigit-kumulang ₱14,900 kada buwan × 240 buwan ≈ ₱3,580,000 ang kabuuang babayaran; tanggalin ang ₱2,000,000 na principal, humigit-kumulang ₱1,580,000 ang matitirang interest, illustrative para sa rate at term na ito.' },
          },
          keep: {
            text: { en: 'The monthly number on the approval letter hides a second number: what the interest adds up to over the whole term.', tl: 'Itinatago ng buwanang numero sa approval letter ang ikalawang numero: kung magkano ang kabuuan ng interest sa buong term.' },
            action: null,
          },
        },
        {
          id: 'building.housing.2',
          title: { en: 'Rent versus buy in Metro Manila', tl: 'Renta Laban sa Bili' },
          minutes: 4,
          hook: {
            text: { en: 'The same ₱15,000 a month either rents a unit or comes close to a Pag-IBIG amortization on a smaller loan.', tl: 'Maaaring pang-renta ng unit ang parehong ₱15,000 kada buwan, o malapit sa Pag-IBIG amortization ng mas maliit na loan.' },
            illo: 'house',
          },
          show: {
            text: { en: 'Renting keeps the ₱15,000 a month, illustrative for a similar Metro Manila unit, entirely as an expense. Buying builds equity with part of every payment, but adds costs renting does not carry.', tl: 'Ginagawang gastos lang ng pag-renta ang buong ₱15,000 kada buwan, illustrative para sa katulad na unit sa Metro Manila. Bumubuo naman ng equity ang pagbili sa bahagi ng bawat bayad, pero may dagdag na gastos na wala sa renta.' },
            points: [
              { en: 'A renter carries no real property tax, no association dues, and no responsibility for major repairs.', tl: 'Walang dinadalang real property tax, association dues, o responsibilidad sa malaking pagkukumpuni ang umuupa.' },
              { en: 'An owner builds equity with every principal payment; a renter builds none.', tl: 'Bumubuo ng equity ang may-ari sa bawat bayad na principal; wala nitong nabubuo ang umuupa.' },
            ],
            illo: 'house',
            animate: true,
          },
          do: {
            type: 'compare',
            prompt: { en: 'Ten years out, which leaves more built up: renting at ₱15,000 a month, or buying with a ₱14,900 monthly amortization?', tl: 'Sa loob ng sampung taon, alin ang mas malaki ang naipon: pag-renta sa ₱15,000 kada buwan, o pagbili na may ₱14,900 na buwanang amortization?' },
            options: [
              {
                title: { en: 'Renting, ₱15,000 a month', tl: 'Pag-renta, ₱15,000 Kada Buwan' },
                lines: [
                  { en: '₱15,000 a month for ten years totals about ₱1,800,000 paid', tl: 'Humigit-kumulang ₱1,800,000 ang kabuuang bayad sa ₱15,000 kada buwan sa loob ng sampung taon' },
                  { en: 'None of it becomes equity; no property tax or association dues either', tl: 'Wala sa perang ito ang nagiging equity; wala ring real property tax o association dues' },
                ],
                effective: { en: 'Illustrative equity built after ten years: ₱0', tl: 'Illustrative na equity na naipon pagkatapos ng sampung taon: ₱0' },
                cheaper: false,
              },
              {
                title: { en: 'Buying, ₱14,900 a month amortization', tl: 'Pagbili, ₱14,900 na Buwanang Amortization' },
                lines: [
                  { en: '₱14,900 a month for ten years totals about ₱1,788,000 paid, close to the renting total', tl: 'Humigit-kumulang ₱1,788,000 ang kabuuang bayad sa ₱14,900 kada buwan sa loob ng sampung taon, malapit sa kabuuan ng renta' },
                  { en: 'Part of every payment reduces the loan principal, building equity, on top of real property tax and association dues', tl: 'Nagpapababa sa principal ng loan ang bahagi ng bawat bayad, bumubuo ng equity, dagdag pa ang real property tax at association dues' },
                ],
                effective: { en: 'Illustrative equity built after ten years: roughly ₱600,000 of principal paid down', tl: 'Illustrative na equity na naipon pagkatapos ng sampung taon: humigit-kumulang ₱600,000 na principal ang nabayaran' },
                cheaper: true,
              },
            ],
            why: { en: 'The two monthly amounts land close together, so the real difference is what each peso builds. Renting pays for shelter only; buying pays for shelter and a shrinking loan balance, minus the extra costs ownership carries.', tl: 'Magkalapit ang dalawang buwanang halaga, kaya nasa binubuo ng bawat piso ang tunay na pagkakaiba. Bayad sa tirahan lang ang renta; bayad sa tirahan at sa lumiliit na balance ng loan ang pagbili, bawas ang dagdag na gastos ng pagmamay-ari.' },
          },
          keep: {
            text: { en: 'Renting and buying can cost nearly the same each month. Only one of them leaves equity behind.', tl: 'Puwedeng halos magkapareho ang gastos ng renta at bili bawat buwan. Isa lang sa kanila ang nag-iiwan ng equity.' },
            action: null,
          },
        },
        {
          id: 'building.housing.3',
          title: { en: 'The true cost of a condo', tl: 'Ang Tunay na Gastos ng Condo' },
          minutes: 4,
          hook: {
            text: { en: 'A condo listed at ₱2,000,000 ends up costing more than the sticker price the same month the deed is signed.', tl: 'Naging mas mahal kaysa sa presyong nakasulat ang condo na nakalista sa ₱2,000,000, sa parehong buwan na nalagdaan ang deed.' },
            illo: 'house',
          },
          show: {
            text: { en: 'The sticker price is only the loan principal. Association dues, real property tax, and parking add real monthly and yearly costs that continue for as long as the unit is owned.', tl: 'Ang loan principal lang ang presyong nakasulat. Nagdaragdag ng tunay na buwanan at taunang gastos ang association dues, real property tax, at parking, habang pagmamay-ari ang unit.' },
            points: [
              { en: 'Association dues are billed monthly, whether or not the amenities get used.', tl: 'Sinisingil ang association dues buwan-buwan, gamitin man o hindi ang mga amenities.' },
              { en: 'Real property tax is billed yearly by the local government, separate from the loan.', tl: 'Sinisingil ang real property tax taun-taon ng local government, hiwalay sa loan.' },
            ],
            illo: 'house',
            animate: true,
          },
          do: {
            type: 'order',
            prompt: { en: 'Put these condo costs in the order they typically appear, from the purchase itself to ongoing ownership.', tl: 'Ilagay ang mga gastos sa condo sa pagkakasunod na karaniwang lumalabas, mula sa pagbili hanggang sa patuloy na pagmamay-ari.' },
            steps: [
              { en: 'The loan principal, based on the unit’s sticker price.', tl: 'Ang loan principal, batay sa presyong nakasulat ng unit.' },
              { en: 'A parking slot, often sold or rented separately from the unit.', tl: 'Ang parking slot, kadalasang ibinebenta o pinaparenta nang hiwalay sa unit.' },
              { en: 'Monthly association dues, billed for as long as the unit is owned.', tl: 'Buwanang association dues, sinisingil habang pagmamay-ari ang unit.' },
              { en: 'Yearly real property tax, billed by the local government.', tl: 'Taunang real property tax, sinisingil ng local government.' },
              { en: 'Major repairs not covered by the association, paid by the unit owner directly.', tl: 'Malalaking pagkukumpuni na hindi sakop ng association, direktang binabayaran ng may-ari ng unit.' },
            ],
            why: { en: 'Only the first line appears on the loan approval letter. The other four continue for as long as the unit is owned, and none of them shows up in the sticker price.', tl: 'Ang unang linya lang ang lumalabas sa loan approval letter. Tumatagal ang apat pang natitira habang pagmamay-ari ang unit, at wala sa kanila ang lumalabas sa presyong nakasulat.' },
          },
          keep: {
            text: { en: 'A condo’s true cost is the sticker price plus everything the association and the local government still bill after.', tl: 'Ang presyong nakasulat kasama ang lahat ng sisingilin pa ng association at local government pagkatapos ang tunay na gastos ng condo.' },
            action: null,
          },
        },
        {
          id: 'building.housing.4',
          title: { en: 'Costs that come with owning', tl: 'Mga Gastos sa Pagmamay-ari' },
          minutes: 3,
          hook: {
            text: { en: 'Four bills arrive in the same folder as the condo’s title, each one meaning something different.', tl: 'Apat na bill ang dumarating sa parehong folder ng title ng condo, magkaiba ang kahulugan ng bawat isa.' },
            illo: 'house',
          },
          show: {
            text: { en: 'Owning a unit brings recurring costs beyond the loan. Match each one to what it actually pays for.', tl: 'May kasamang paulit-ulit na gastos ang pagmamay-ari ng unit, lampas sa loan. I-match ang bawat isa sa talagang binabayaran nito.' },
            points: [],
            illo: 'house',
            animate: false,
          },
          do: {
            type: 'match',
            prompt: { en: 'Match each cost to what it pays for.', tl: 'I-match ang bawat gastos sa binabayaran nito.' },
            pairs: [
              { a: { en: 'Association dues', tl: 'Association dues' }, b: { en: 'Monthly fee for shared building upkeep and amenities', tl: 'Buwanang bayad para sa upkeep ng gusali at amenities' } },
              { a: { en: 'Real property tax', tl: 'Real property tax' }, b: { en: 'Yearly tax billed by the local government on the unit’s value', tl: 'Taunang buwis na sinisingil ng local government batay sa halaga ng unit' } },
              { a: { en: 'Parking slot', tl: 'Parking slot' }, b: { en: 'A separate cost, sold or rented apart from the unit itself', tl: 'Hiwalay na gastos, ibinebenta o pinaparenta bukod sa unit mismo' } },
              { a: { en: 'Amortization', tl: 'Amortization' }, b: { en: 'The monthly payment that reduces the loan principal and covers interest', tl: 'Ang buwanang bayad na nagpapababa sa loan principal at sumasakop sa interest' } },
            ],
          },
          keep: {
            text: { en: 'Four separate bills, four separate purposes. None of them replaces another.', tl: 'Apat na hiwalay na bill, apat na hiwalay na layunin. Wala sa kanila ang kapalit ng isa pa.' },
            action: null,
          },
        },
        {
          id: 'building.housing.5',
          title: { en: 'The condo that cost more after the deed was signed', tl: 'Ang Condo na Naging Mas Mahal Pagkatapos Malagdaan ang Deed' },
          minutes: 5,
          hook: {
            text: { en: 'A ₱2,000,000 condo, approved at ₱14,900 a month, gets its first association dues bill the same week the keys are handed over.', tl: 'Tumanggap ng unang association dues bill nito ang ₱2,000,000 na condo, na-approve sa ₱14,900 kada buwan, sa parehong linggo na ibinigay ang mga susi.' },
            illo: 'house',
          },
          show: {
            text: { en: 'What a unit actually costs each month depends on more than the amortization printed on the loan approval.', tl: 'Nakadepende sa higit pa sa amortization na nakalimbag sa loan approval ang tunay na buwanang gastos ng unit.' },
            points: [],
            illo: 'house',
            animate: false,
          },
          do: {
            type: 'story',
            start: 'n1',
            nodes: {
              n1: {
                text: { en: 'The loan is approved at ₱14,900 a month. The buyer budgets exactly that amount for the unit going forward.', tl: 'Na-approve ang loan sa ₱14,900 kada buwan. Ibinudget ng bumibili nang eksakto ang halagang iyon para sa unit mula ngayon.' },
                choices: [
                  { text: { en: 'Add ₱3,000 a month to the budget for dues, tax, and parking before moving in', tl: 'Magdagdag ng ₱3,000 kada buwan sa budget para sa dues, buwis, at parking bago lumipat' }, next: 'a1' },
                  { text: { en: 'Move in on the ₱14,900 budget, and handle the other bills as they arrive', tl: 'Lumipat gamit ang ₱14,900 na budget, at asikasuhin na lang ang ibang bill kapag dumating' }, next: 'b1' },
                ],
              },
              a1: {
                text: { en: 'The association dues bill arrives at ₱2,200 a month, and the parking slot adds ₱500 a month. Both fit inside the ₱3,000 already set aside.', tl: 'Dumating ang association dues bill sa ₱2,200 kada buwan, at ₱500 kada buwan ang idinagdag ng parking slot. Pareho itong kasya sa ₱3,000 na inilaan na.' },
                balance: 2700,
                choices: [
                  { text: { en: 'Continue the combined budget of ₱17,900 a month', tl: 'Ituloy ang pinagsamang budget na ₱17,900 kada buwan' }, next: 'a2' },
                  { text: { en: 'Cut back on the parking slot after the first year', tl: 'Bawasan ang parking slot pagkatapos ng unang taon' }, next: 'a3' },
                ],
              },
              a2: {
                text: { en: 'The real property tax bill arrives the following January, already planned for inside the same set-aside. Nothing about ownership surprises the budget again.', tl: 'Dumating ang real property tax bill sa sumunod na Enero, nakaplano na sa loob ng parehong ilaang pondo. Wala nang gulat sa budget mula sa pagmamay-ari.' },
                balance: 2700,
                outcome: 'steady',
              },
              a3: {
                text: { en: 'Giving up the parking slot saves ₱500 a month, but the unit’s deed already includes the slot under one title; the slot cannot be sold separately. The saving does not materialize.', tl: 'Makakatipid ng ₱500 kada buwan ang pagsuko sa parking slot, pero kasama na ang slot sa iisang title ng unit; hindi ito puwedeng ibenta nang hiwalay. Hindi natupad ang matitipid.' },
                balance: 2700,
                outcome: 'steady',
              },
              b1: {
                text: { en: 'The first month passes on the ₱14,900 budget alone. The association dues bill, ₱2,200, arrives unbudgeted.', tl: 'Lumipas ang unang buwan sa ₱14,900 na budget lang. Dumating ang association dues bill, ₱2,200, hindi nabudget.' },
                balance: 2200,
                choices: [
                  { text: { en: 'Pay the dues late, from the next month’s budget', tl: 'Bayaran nang huli ang dues, mula sa budget ng susunod na buwan' }, next: 'b2' },
                  { text: { en: 'Skip the dues bill and hope it is waived', tl: 'Laktawan ang dues bill at umasang maiwaive' }, next: 'b3' },
                ],
              },
              b2: {
                text: { en: 'Paying late catches the budget up, but the parking bill and, months later, the real property tax bill each repeat the same scramble, since none of them was planned for.', tl: 'Naabutan ng huling bayad ang budget, pero pareho ring nag-uulit ng parehong gulo ang parking bill at, ilang buwan pa, ang real property tax bill, dahil wala sa kanila ang naplano.' },
                balance: 2200,
                outcome: 'costly',
              },
              b3: {
                text: { en: 'Association dues are not waived for nonpayment; unpaid dues accrue and can carry a penalty, on top of the amount already owed.', tl: 'Hindi wina-waive ang association dues kapag hindi binayaran; naipon ang hindi bayad na dues at puwedeng magdala ng penalty, dagdag pa sa halagang utang na.' },
                balance: 2400,
                outcome: 'costly',
              },
            },
          },
          keep: {
            text: { en: 'The amortization on the approval letter is one bill among several. Budgeting for only that one still leaves the rest due.', tl: 'Isa lang sa ilan ang amortization sa approval letter. Iiwan pa ring dapat bayaran ang iba ng pagbudget para dito lang.' },
            action: { kind: 'open', label: { en: 'Open Budget in Jinnie', tl: 'Buksan ang Budget sa Jinnie' }, payload: { app: 'budget' } },
          },
        },
      ],
    },
    {
      id: 'building.family',
      title: { en: 'Family money', tl: 'Pera ng Pamilya' },
      summary: { en: 'What a child costs year by year, an education plan read carefully, and two incomes run as one budget.', tl: 'Ano ang gastos sa anak taon-taon, education plan na binasang mabuti, at dalawang kita na pinapatakbo bilang isang budget.' },
      competency: { en: 'Can run a household budget across two incomes and support for parents', tl: 'Kayang patakbuhin ang household budget sa dalawang kita at suporta sa magulang' },
      wish: 'have',
      status: 'authored',
      bites: [
        {
          id: 'building.family.1',
          title: { en: 'What a child costs, year by year', tl: 'Ano ang Gastos sa Anak, Taon-taon' },
          minutes: 4,
          hook: {
            text: { en: 'A newborn’s monthly costs, diapers and formula, look nothing like the same child’s costs in grade school.', tl: 'Ibang-iba ang buwanang gastos sa bagong panganak, diaper at gatas, kumpara sa gastos ng parehong bata sa grade school.' },
            illo: 'family',
          },
          show: {
            text: { en: 'A child’s cost changes shape every few years: infancy runs on diapers and formula, school years add tuition and fees, and a college-bound fund needs its biggest size years before it is spent.', tl: 'Nagbabago ang hugis ng gastos sa anak kada ilang taon: tumatakbo ang sanggol sa diaper at gatas, nagdaragdag ang taon ng eskuwela ng tuition at fees, at nangangailangan ang fund na pang-kolehiyo ng pinakamalaking laki nito taon bago pa ito gastusin.' },
            points: [
              { en: 'An education fund started at birth has the most years to grow before a ₱100,000-a-year college cost in 2040, illustrative for that year.', tl: 'Ang education fund na sinimulan sa kapanganakan ang may pinakamaraming taon para lumago bago ang ₱100,000-kada-taong gastos sa kolehiyo sa 2040, illustrative para sa taong iyon.' },
              { en: 'Starting later means a smaller monthly amount will not be enough; the same target needs a bigger monthly amount.', tl: 'Nangangahulugan ang mas huling pagsisimula na hindi sasapat ang mas maliit na buwanang ipon; kailangan ng mas malaking buwanang halaga para sa parehong target.' },
            ],
            illo: 'family',
            animate: true,
          },
          do: {
            type: 'number',
            prompt: { en: 'Four years of college are expected to cost ₱1,800,000 by the time a newborn today reaches college, illustrative for that year. Saved monthly over 15 years, ignoring interest, how much is needed each month?', tl: 'Inaasahang ₱1,800,000 ang gastos sa apat na taon ng kolehiyo pagsapit ng kolehiyo ng bagong panganak ngayon, illustrative para sa taong iyon. Kung ipupunan buwan-buwan sa loob ng 15 taon, hindi isinasaalang-alang ang interest, magkano ang kailangan bawat buwan?' },
            answer: 10000,
            tolerance: 0,
            format: 'peso',
            worked: { en: '₱1,800,000 ÷ 180 months (15 years) = ₱10,000 a month, before any interest earned along the way. Starting later shortens the months and raises this number.', tl: '₱1,800,000 ÷ 180 buwan (15 taon) = ₱10,000 kada buwan, bago pa ang interest na kikitain sa daan. Nagpapaikli sa bilang ng buwan at nagpapataas ng numerong ito ang mas huling pagsisimula.' },
          },
          keep: {
            text: { en: 'The fund started at birth needs the smallest monthly amount. Every year of delay raises the number.', tl: 'Ang fund na sinimulan sa kapanganakan ang nangangailangan ng pinakamaliit na buwanang halaga. Nagpapataas ng numero ang bawat taon ng pagkaantala.' },
            action: null,
          },
        },
        {
          id: 'building.family.2',
          title: { en: 'An education plan, matched to what it promises', tl: 'Education Plan, Itinugma sa Pangako Nito' },
          minutes: 3,
          hook: {
            text: { en: 'A traditional education plan and a fund saved independently promise different things, in fine print easy to skip.', tl: 'Magkaiba ang ipinapangako ng traditional education plan at ng fund na inipon nang mag-isa, sa fine print na madaling laktawan.' },
            illo: 'certificate',
          },
          show: {
            text: { en: 'An education plan is a contract with its own terms; a fund saved and invested independently is not bound to any single provider’s promises. Match each term to what it actually means.', tl: 'Kontrata na may sariling termino ang education plan; hindi naman nakatali sa pangako ng isang provider lang ang fund na inipon at ini-invest nang mag-isa. I-match ang bawat termino sa talagang kahulugan nito.' },
            points: [],
            illo: 'certificate',
            animate: false,
          },
          do: {
            type: 'match',
            prompt: { en: 'Match each term to what it means.', tl: 'I-match ang bawat termino sa kahulugan nito.' },
            pairs: [
              { a: { en: 'Education plan', tl: 'Education plan' }, b: { en: 'A contract that promises a fixed payout schedule tied to a child’s school years, under one provider’s terms', tl: 'Kontratang nangangakong may fixed na payout schedule na nakatali sa taon ng eskuwela ng anak, sa ilalim ng termino ng isang provider' } },
              { a: { en: 'Self-funded education fund', tl: 'Self-funded na education fund' }, b: { en: 'Money saved and invested independently, not bound to any single provider’s schedule or terms', tl: 'Perang inipon at ini-invest nang mag-isa, hindi nakatali sa schedule o termino ng isang provider' } },
              { a: { en: 'Payout schedule', tl: 'Payout schedule' }, b: { en: 'The specific years and amounts an education plan promises to release', tl: 'Ang eksaktong taon at halaga na ipinapangako ng education plan na ilalabas' } },
              { a: { en: 'Pre-need plan', tl: 'Pre-need plan' }, b: { en: 'A plan paid for in advance of the need it is meant to cover, years before college starts', tl: 'Planong binayaran nang maaga bago pa ang pangangailangang sasakupin nito, taon bago magsimula ang kolehiyo' } },
            ],
          },
          keep: {
            text: { en: 'A plan’s payout schedule is a promise on paper. A fund saved independently answers to no schedule but the family’s own.', tl: 'Pangako sa papel ang payout schedule ng plano. Hindi naman umaasa sa schedule ng iba ang fund na inipon nang mag-isa, kundi sa sarili ng pamilya.' },
            action: null,
          },
        },
        {
          id: 'building.family.3',
          title: { en: 'Two incomes, one budget', tl: 'Dalawang Kita, Isang Budget' },
          minutes: 4,
          hook: {
            text: { en: 'Two payslips land in two different accounts, and the household still runs on one shared plan.', tl: 'Dalawang payslip ang dumarating sa dalawang magkaibang account, at tumatakbo pa rin ang bahay sa iisang pinagsamang plano.' },
            illo: 'jars',
          },
          show: {
            text: { en: 'Two incomes run as one budget when they still follow one order: emergency fund, insurance, then education savings, before anything discretionary. Combining incomes on paper does not remove that order.', tl: 'Tumatakbo bilang isang budget ang dalawang kita kapag sumusunod pa rin ito sa isang pagkakasunod: emergency fund, insurance, tapos education savings, bago ang anumang discretionary. Hindi nag-aalis sa pagkakasunod na ito ang pagsasama ng kita sa papel.' },
            points: [
              { en: 'A household earning ₱30,000 to ₱60,000 combined still budgets as one total, not as two separate, uncoordinated incomes.', tl: 'Nagbubudget pa rin bilang isang kabuuan ang bahay na kumikita ng ₱30,000 hanggang ₱60,000 pinagsama, hindi bilang dalawang magkahiwalay, hindi magkatugmang kita.' },
            ],
            illo: 'jars',
            animate: false,
          },
          do: {
            type: 'allocate',
            prompt: { en: 'Split a combined ₱45,000 household income across these, in the order that protects the family first.', tl: 'Hatiin ang pinagsamang ₱45,000 na kita ng bahay sa mga ito, ayon sa pagkakasunod na nauunang nagpoprotekta sa pamilya.' },
            total: 45000,
            step: 500,
            jars: [
              { key: 'emergency', label: { en: 'Emergency fund', tl: 'Emergency Fund' }, hint: { en: 'Cash for a shock, built before anything else', tl: 'Cash para sa biglaang pangyayari, itinatayo bago ang lahat' }, guide: [10, 20] },
              { key: 'insurance', label: { en: 'Insurance', tl: 'Insurance' }, hint: { en: 'Term life and health cover, ahead of any investment', tl: 'Term life at health cover, mauna sa anumang investment' }, guide: [5, 10] },
              { key: 'education', label: { en: 'Education savings', tl: 'Education Savings' }, hint: { en: 'For the children’s fund, started as early as possible', tl: 'Para sa fund ng mga anak, sinimulan sa lalong madaling panahon' }, guide: [10, 20] },
              { key: 'household', label: { en: 'Household expenses', tl: 'Gastos sa Bahay' }, hint: { en: 'Rent or amortization, food, utilities, and everything else the month needs', tl: 'Renta o amortization, pagkain, utilities, at lahat pang kailangan ng buwan' }, guide: [50, 70] },
            ],
            why: { en: 'Emergency fund and insurance come before education savings because a shock or a death without cover can erase years of education savings in one event. The order protects the fund meant for later by protecting the family first.', tl: 'Nauuna ang emergency fund at insurance sa education savings dahil puwedeng burahin ng biglaang pangyayari o kamatayan nang walang cover ang taon ng education savings sa iisang pangyayari lang. Pinoprotektahan ng pagkakasunod na ito ang fund na para sa susunod sa pamamagitan ng pagprotekta muna sa pamilya.' },
          },
          keep: {
            text: { en: 'One budget from two incomes still follows one order: protect first, then save for later.', tl: 'Sumusunod pa rin sa isang pagkakasunod ang isang budget mula sa dalawang kita: protektahan muna, tapos mag-ipon para sa susunod.' },
            action: null,
          },
        },
        {
          id: 'building.family.4',
          title: { en: 'Supporting parents without shorting the children’s fund', tl: 'Pagsuporta sa Magulang nang Hindi Naaapektuhan ang Fund ng mga Anak' },
          minutes: 4,
          hook: {
            text: { en: 'A ₱5,000 monthly transfer to a parent competes for the same peso the children’s education fund was counting on.', tl: 'Nakikipagkumpitensya ang ₱5,000 na buwanang padala sa magulang sa parehong pisong inaasahan ng education fund ng mga anak.' },
            illo: 'family',
          },
          show: {
            text: { en: 'Supporting parents is a fixed jar in the budget, not a leak to plug when money runs short. Treating it as a planned line, sized before other spending, keeps it from crowding out the education fund by accident.', tl: 'Fixed na jar sa budget ang pagsuporta sa magulang, hindi butas na tatakpan kapag naubusan ng pera. Pumipigil sa aksidenteng pag-agaw sa education fund ang pagtrato dito bilang planadong linya, sinukat bago ang ibang gastos.' },
            points: [
              { en: 'A fixed jar for parents, sized once, is easier to plan around than an amount that changes every month.', tl: 'Mas madaling planuhan ang fixed na jar para sa magulang, sinukat nang isang beses, kaysa sa halagang nagbabago bawat buwan.' },
            ],
            illo: 'family',
            animate: true,
          },
          do: {
            type: 'choice',
            prompt: { en: 'A household supports a parent with ₱5,000 a month and is also building an education fund. Which approach protects both?', tl: 'Sumusuporta ang isang bahay sa magulang ng ₱5,000 kada buwan at gumagawa rin ng education fund. Aling approach ang nagpoprotekta sa dalawa?' },
            options: [
              { text: { en: 'Size the ₱5,000 as a fixed monthly jar, budgeted before the education fund, and hold both steady', tl: 'Sukatin ang ₱5,000 bilang fixed na buwanang jar, ibinudget bago ang education fund, at panatilihing steady ang dalawa' }, correct: true, why: { en: 'Treating the support as a fixed, planned amount protects the education fund from being the line that quietly shrinks whenever the parent needs a little more.', tl: 'Nagpoprotekta sa education fund ang pagtrato sa suporta bilang fixed at planadong halaga, mula sa pagiging linyang tahimik na lumiliit tuwing kailangan ng kaunti pa ng magulang.' } },
              { text: { en: 'Pause the education fund whenever the parent needs extra, and resume later', tl: 'I-pause ang education fund tuwing kailangan ng dagdag ng magulang, at ituloy na lang mamaya' }, correct: false, why: { en: 'Pausing and resuming loses the years the fund needed to grow; a paused month rarely gets made up later.', tl: 'Nawawalan ng mga taong kailangan ng fund para lumago ang pag-pause at pag-resume; bihirang mabawi ang na-pause na buwan sa hinaharap.' } },
              { text: { en: 'Support the parent only from whatever is left after every other jar is filled', tl: 'Suportahan ang magulang lang mula sa matitira pagkatapos mapuno ang lahat ng ibang jar' }, correct: false, why: { en: 'Leftover support has no floor; a tight month can leave the parent with far less than needed, since it was never planned as its own jar.', tl: 'Walang floor ang suportang mula sa matitira lang; puwedeng mag-iwan sa magulang ng mas kaunti sa kailangan ang masikip na buwan, dahil hindi ito naplano bilang sariling jar.' } },
            ],
          },
          keep: {
            text: { en: 'A fixed jar for parents protects both the parent and the fund from becoming each other’s leftover.', tl: 'Pinoprotektahan ng fixed na jar para sa magulang ang magulang at ang fund mula sa pagiging matitira na lang ng isa’t isa.' },
            action: null,
          },
        },
        {
          id: 'building.family.5',
          title: { en: 'The month both a tuition bill and a parent’s medicine were due', tl: 'Ang Buwang Parehong Dumating ang Tuition Bill at Gamot ng Magulang' },
          minutes: 5,
          hook: {
            text: { en: 'An ₱8,000 tuition bill and a ₱4,000 medicine refill for a parent both fall due the same week.', tl: 'Pareho ring nadatnan ng due date sa parehong linggo ang ₱8,000 na tuition bill at ₱4,000 na refill ng gamot ng magulang.' },
            illo: 'calendar',
          },
          show: {
            text: { en: 'Two fixed jars competing for the same week test whether either one had a cushion built in ahead of time.', tl: 'Sumusubok ang dalawang fixed na jar na nagbabanggaan sa parehong linggo kung mayroon bang kahit isa sa kanila ng inihandang cushion nang maaga.' },
            points: [],
            illo: 'calendar',
            animate: false,
          },
          do: {
            type: 'story',
            start: 'n1',
            nodes: {
              n1: {
                text: { en: 'The household has a ₱10,000 buffer inside its household jar this month, on top of the tuition and medicine jars already set aside.', tl: 'May ₱10,000 na buffer ang bahay sa loob ng household jar nito ngayong buwan, dagdag pa sa tuition at medicine jars na inilaan na.' },
                balance: 10000,
                choices: [
                  { text: { en: 'Pay both bills in full from their own jars, and leave the buffer untouched', tl: 'Bayaran nang buo ang dalawang bill mula sa sariling jars nila, at iwang hindi nagagalaw ang buffer' }, next: 'a1' },
                  { text: { en: 'Pay the medicine in full, and delay part of the tuition using the buffer', tl: 'Bayaran nang buo ang gamot, at antalahin ang bahagi ng tuition gamit ang buffer' }, next: 'b1' },
                ],
              },
              a1: {
                text: { en: 'Both bills clear from their planned jars. The buffer stays untouched.', tl: 'Parehong nalinis ang bill mula sa planadong jars nila. Nananatiling hindi nagagalaw ang buffer.' },
                balance: 10000,
                choices: [
                  { text: { en: 'Roll the untouched buffer into next month’s buffer', tl: 'Ilipat ang hindi nagalaw na buffer sa buffer ng susunod na buwan' }, next: 'a2' },
                  { text: { en: 'Spend the untouched buffer on a discretionary want, since nothing needed it', tl: 'Gastusin ang hindi nagalaw na buffer sa discretionary na gusto, dahil wala namang kumuha rito' }, next: 'a3' },
                ],
              },
              a2: {
                text: { en: 'The buffer carries into next month at ₱10,000, ready if another bill lands unplanned.', tl: 'Dala ang buffer papunta sa susunod na buwan sa ₱10,000, handa kung may susunod pang bill na hindi planado.' },
                balance: 10000,
                outcome: 'steady',
              },
              a3: {
                text: { en: 'The untouched buffer covers a discretionary want instead. The next cycle starts at zero buffer, with no cushion until it is rebuilt.', tl: 'Ginamit sa discretionary na gusto ang hindi nagalaw na buffer, sa halip. Nagsisimula ang susunod na cycle sa zero na buffer, walang cushion hanggang maipon ulit.' },
                balance: 0,
                outcome: 'costly',
              },
              b1: {
                text: { en: 'Part of the tuition is delayed and covered by the buffer instead of the tuition jar. The school accepts partial payment, and the buffer covers the gap.', tl: 'Naantala ang bahagi ng tuition at sinakop ng buffer sa halip na ng tuition jar. Tinanggap ng eskuwelahan ang parsyal na bayad, at sinakop ng buffer ang puwang.' },
                balance: 6000,
                choices: [
                  { text: { en: 'Refill the buffer next month before any other jar', tl: 'Punuin muli ang buffer sa susunod na buwan bago ang ibang jar' }, next: 'b2' },
                  { text: { en: 'Leave the buffer lower and move on to the next bill cycle', tl: 'Iwanan nang mas mababa ang buffer at magpatuloy na lang sa susunod na cycle ng bill' }, next: 'b3' },
                ],
              },
              b2: {
                text: { en: 'The buffer returns to ₱10,000 the following month, ready for the next bill that lands the same week as another.', tl: 'Bumalik sa ₱10,000 ang buffer sa sumunod na buwan, handa na para sa susunod na bill na madatnan sa parehong linggo ng isa pa.' },
                balance: 10000,
                outcome: 'steady',
              },
              b3: {
                text: { en: 'The buffer sits at ₱6,000 into the next cycle. The next unplanned bill has less cushion to draw from than the one before it.', tl: 'Nasa ₱6,000 na lang ang buffer papasok sa susunod na cycle. Mas kaunti na ang cushion na mahahango ng susunod na hindi planadong bill kaysa sa nauna.' },
                balance: 6000,
                outcome: 'costly',
              },
            },
          },
          keep: {
            text: { en: 'A buffer spent is a buffer to refill before the next jar. Left unrefilled, the next surprise has less to draw from.', tl: 'Buffer na dapat punuin muli bago ang susunod na jar ang buffer na nagastos. Kapag hindi ito napunan, mas kaunti na ang mahahango ng susunod na gulat.' },
            action: { kind: 'commitment', label: { en: 'Start the 30-day fund commitment', tl: 'Simulan ang 30-araw na fund commitment' }, payload: { id: 'fund-30' } },
          },
        },
      ],
    },
    {
      id: 'building.ofw',
      title: { en: 'The OFW household', tl: 'Ang OFW Household' },
      summary: { en: 'A remittance plan that splits the money sent home on purpose, SSS coverage while abroad, and the plan for the return.', tl: 'Remittance plan na sinasadyang hinahati ang padala, SSS coverage habang nasa ibang bansa, at ang plano para sa pag-uwi.' },
      competency: { en: 'Can split a remittance and name their SSS coverage as an OFW', tl: 'Kayang hatiin ang remittance at pangalanan ang SSS coverage bilang OFW' },
      wish: 'safe',
      status: 'authored',
      bites: [
        {
          id: 'building.ofw.1',
          title: { en: 'Splitting remittance into needs, savings, and a wish', tl: 'Paghahati ng Padala' },
          minutes: 4,
          hook: {
            text: { en: 'A ₱40,000 remittance arrives on the same day every month, and the whole amount gets spent before the week is over.', tl: 'Dumarating ang ₱40,000 na padala sa parehong araw bawat buwan, at nagagastos ang buong halaga bago matapos ang linggo.' },
            illo: 'jars',
          },
          show: {
            text: { en: 'Remittance split on the day it arrives, into needs, savings, and a wish, turns one lump sum into three purposes before spending starts. Splitting after the money is already gone rarely happens.', tl: 'Ginagawang tatlong layunin ng padalang hinati sa araw na dumating ito, sa needs, savings, at wish, ang iisang lump sum bago pa magsimula ang paggasta. Bihirang mangyari ang paghahati pagkatapos nang naubos na ang pera.' },
            points: [
              { en: 'Needs cover the household’s fixed costs for the month: food, bills, tuition.', tl: 'Sumasakop ang needs sa fixed na gastos ng bahay para sa buwan: pagkain, bills, tuition.' },
              { en: 'Savings build toward the return plan, separate from whatever the month’s needs require.', tl: 'Bumubuo ang savings para sa return plan, hiwalay sa kailangan ng needs ng buwan.' },
            ],
            illo: 'jars',
            animate: true,
          },
          do: {
            type: 'allocate',
            prompt: { en: 'Split a ₱40,000 remittance the day it arrives, before any of it is spent.', tl: 'Hatiin ang ₱40,000 na padala sa araw na dumating ito, bago pa magasta ang kahit ano rito.' },
            total: 40000,
            step: 500,
            jars: [
              { key: 'needs', label: { en: 'Needs', tl: 'Needs' }, hint: { en: 'Food, bills, tuition, and other fixed household costs', tl: 'Pagkain, bills, tuition, at iba pang fixed na gastos ng bahay' }, guide: [50, 65] },
              { key: 'savings', label: { en: 'Savings', tl: 'Savings' }, hint: { en: 'Toward the return plan and the family’s own goals', tl: 'Para sa return plan at sariling goals ng pamilya' }, guide: [25, 40] },
              { key: 'wish', label: { en: 'Wish', tl: 'Wish' }, hint: { en: 'A small, planned want, decided the same day the remittance arrives', tl: 'Maliit, planadong gusto, napagpasyahan sa parehong araw na dumating ang padala' }, guide: [5, 10] },
            ],
            why: { en: 'Splitting on arrival day means the wish jar stays small and planned, not whatever is left after needs and savings quietly take more than intended.', tl: 'Nangangahulugan ang paghahati sa araw ng pagdating na maliit at planado ang wish jar, hindi kung ano ang matitira pagkatapos kunin ng needs at savings nang higit sa nilayon nang tahimik.' },
          },
          keep: {
            text: { en: 'A remittance split the day it arrives has three purposes. Left unsplit, it has one: whatever gets spent first.', tl: 'May tatlong layunin ang padalang hinati sa araw na dumating. Kapag hindi hinati, isa lang: kung ano ang unang magagasta.' },
            action: null,
          },
        },
        {
          id: 'building.ofw.2',
          title: { en: 'SSS coverage for OFWs', tl: 'SSS Coverage para sa OFW' },
          minutes: 3,
          hook: {
            text: { en: 'An OFW pays into SSS but has never seen the word “self-employed” next to their own name on a form.', tl: 'Nagbabayad ng SSS ang isang OFW pero hindi pa nakikita ang salitang “self-employed” sa tabi ng sariling pangalan sa isang form.' },
            illo: 'shield',
          },
          show: {
            text: { en: 'SSS coverage is compulsory for OFWs under RA 11199, and an OFW contributes as a self-employed member, not as an employee with an employer sharing the cost.', tl: 'Compulsory ang SSS coverage para sa mga OFW sa ilalim ng RA 11199, at nagbabayad ang OFW bilang self-employed member, hindi bilang empleyado na may employer na kasamang nagbabayad.' },
            points: [
              { en: 'Compulsory means the coverage is required by law, not a choice to opt into or skip.', tl: 'Nangangahulugan ang compulsory na required sa batas ang coverage, hindi pagpipiliang pasukin o laktawan.' },
              { en: 'A self-employed member pays the full contribution alone, since there is no employer share.', tl: 'Nagbabayad nang buo mag-isa ang self-employed member, dahil walang share ng employer.' },
            ],
            illo: 'shield',
            animate: false,
          },
          do: {
            type: 'match',
            prompt: { en: 'Match each term to what it means for an OFW.', tl: 'I-match ang bawat termino sa kahulugan nito para sa OFW.' },
            pairs: [
              { a: { en: 'RA 11199', tl: 'RA 11199' }, b: { en: 'The law that makes SSS coverage compulsory for OFWs', tl: 'Ang batas na nagpapa-compulsory sa SSS coverage para sa mga OFW' } },
              { a: { en: 'Self-employed member', tl: 'Self-employed member' }, b: { en: 'The category an OFW contributes under, paying the full contribution alone', tl: 'Ang kategoryang pinagbabayaran ng OFW, nagbabayad nang buo mag-isa' } },
              { a: { en: 'Compulsory coverage', tl: 'Compulsory coverage' }, b: { en: 'Required by law, not something an OFW can opt out of', tl: 'Required sa batas, hindi puwedeng laktawan ng OFW' } },
              { a: { en: 'Monthly contribution', tl: 'Monthly contribution' }, b: { en: 'Paid directly by the OFW, since no employer shares the cost', tl: 'Direktang binabayaran ng OFW, dahil walang employer na kasamang nagbabayad' } },
            ],
          },
          keep: {
            text: { en: 'SSS coverage for an OFW is required, not optional, and it is paid alone, not shared.', tl: 'Required, hindi optional, ang SSS coverage ng OFW, at binabayaran ito nang mag-isa, hindi shared.' },
            action: null,
          },
        },
        {
          id: 'building.ofw.3',
          title: { en: 'Building the remittance plan before the flight', tl: 'Paggawa ng Remittance Plan Bago Umalis' },
          minutes: 4,
          hook: {
            text: { en: 'A remittance plan written on the plane ride out lands differently than one written after the first remittance already went astray.', tl: 'Ibang-iba ang resulta ng remittance plan na isinulat habang nasa eroplano papalabas kumpara sa isinulat na pagkatapos malihis na ang unang padala.' },
            illo: 'ship',
          },
          show: {
            text: { en: 'A remittance plan set before departure names who receives it, how it is split, and what happens if a bill arrives that was not expected. Building it after the first transfer has already left is building it too late.', tl: 'Nagpapangalan ang remittance plan na itinakda bago umalis kung sino ang tatanggap, paano ito hahatiin, at ano ang mangyayari kung may bill na dumating na hindi inaasahan. Huli na ang paggawa nito pagkatapos nang lumipad na ang unang padala.' },
            points: [
              { en: 'A plan made before the flight can be discussed calmly, with everyone involved present.', tl: 'Puwedeng pag-usapan nang kalmado ang planong ginawa bago ang flight, kasama ang lahat ng kinauukulan.' },
            ],
            illo: 'ship',
            animate: true,
          },
          do: {
            type: 'order',
            prompt: { en: 'Put these steps for building a remittance plan in the right order, before departure.', tl: 'Ilagay sa tamang pagkakasunod-sunod ang mga hakbang sa paggawa ng remittance plan, bago umalis.' },
            steps: [
              { en: 'Agree with the household on who receives the remittance and how often.', tl: 'Magkasundo sa bahay kung sino ang tatanggap ng padala at gaano kadalas.' },
              { en: 'Agree on the split: needs, savings, and a wish, as shares of the total.', tl: 'Magkasundo sa hati: needs, savings, at wish, bilang bahagi ng kabuuan.' },
              { en: 'Name who decides if an unplanned bill needs more than the needs jar holds.', tl: 'Pangalanan kung sino ang magpapasya kung kailangan ng hindi planadong bill ng higit sa laman ng needs jar.' },
              { en: 'Set the remittance channel and schedule before the flight leaves.', tl: 'Itakda ang remittance channel at schedule bago umalis ang flight.' },
              { en: 'Review the plan together after the first three months abroad.', tl: 'Suriin ang plano nang magkasama pagkatapos ng unang tatlong buwan sa ibang bansa.' },
            ],
            why: { en: 'A plan agreed on before departure has no one improvising alone once distance and the time difference make quick conversations harder.', tl: 'Walang nag-iisang nag-iimprobisa sa planong napagkasunduan bago umalis, kapag pinahirapan na ng distansya at pagkakaiba ng oras ang mabilis na usapan.' },
          },
          keep: {
            text: { en: 'A remittance plan made before the flight is a plan. Made after the first transfer, it is a repair.', tl: 'Plano ang remittance plan na ginawa bago ang flight. Ginawa pagkatapos ng unang padala, pag-aayos na lang ito.' },
            action: null,
          },
        },
        {
          id: 'building.ofw.4',
          title: { en: 'The return plan, five years out', tl: 'Ang Return Plan, Limang Taon Mula Ngayon' },
          minutes: 3,
          hook: {
            text: { en: '“Someday” is not a date, and “enough” is not a number, yet both describe most return plans.', tl: 'Hindi petsa ang “balang araw”, at hindi numero ang “sapat na”, gayunpaman parehong naglalarawan sa karamihan ng return plan.' },
            illo: 'calendar',
          },
          show: {
            text: { en: 'A return plan needs a date and a number: the year the household expects the OFW home, and the amount saved by then. Without both, the plan cannot be checked against what is actually being saved.', tl: 'Kailangan ng return plan ng petsa at numero: ang taong inaasahan ng bahay na uuwi na ang OFW, at ang halagang naipon na sa oras na iyon. Kung wala ang dalawa, hindi masusuri ang plano laban sa talagang inipon na.' },
            points: [
              { en: 'A date without a number cannot say whether savings are on pace.', tl: 'Hindi masasabi ng petsa nang walang numero kung on pace ba ang ipon.' },
            ],
            illo: 'calendar',
            animate: true,
          },
          do: {
            type: 'choice',
            prompt: { en: 'Which return plan can actually be checked for progress along the way?', tl: 'Aling return plan ang talagang masusuri ang progreso sa daan?' },
            options: [
              { text: { en: 'Return home once enough has been saved', tl: 'Umuwi kapag sapat na ang naipon' }, correct: false, why: { en: '“Enough” has no number attached, so there is no way to check whether this month’s savings are on pace toward it.', tl: 'Walang numerong kasama ang “sapat na”, kaya walang paraan para masuri kung on pace ba ang ipon ngayong buwan.' } },
              { text: { en: 'Return home in five years, with ₱600,000 saved by then', tl: 'Umuwi sa loob ng limang taon, na may ₱600,000 na naipon sa oras na iyon' }, correct: true, why: { en: 'A date and a number together can be checked every year: divide ₱600,000 by five years, and see whether the pace matches.', tl: 'Masusuri bawat taon ang petsa at numero na magkasama: hatiin ang ₱600,000 sa limang taon, at tingnan kung tumutugma ang bilis.' } },
              { text: { en: 'Return home whenever the current contract simply ends', tl: 'Umuwi kapag natapos na lang ang kasalukuyang kontrata' }, correct: false, why: { en: 'A contract’s end date says nothing about whether the household’s savings target has been met.', tl: 'Walang sinasabi ang pagtatapos ng kontrata tungkol sa kung naabot na ang savings target ng bahay.' } },
            ],
          },
          keep: {
            text: { en: 'A date and a number, together, turn “someday” into something that can be tracked every year.', tl: 'Ginagawang masusubaybayan ng petsa at numero, magkasama, ang “balang araw” bawat taon.' },
            action: null,
          },
        },
        {
          id: 'building.ofw.5',
          title: { en: 'The month the remittance arrived late', tl: 'Ang Buwang Huling Dumating ang Padala' },
          minutes: 5,
          hook: {
            text: { en: 'The remittance that always lands on the 25th does not show up until the 2nd, and the tuition deadline is the 28th.', tl: 'Hindi dumating hanggang ika-2 ang padalang laging dumarating sa ika-25, at ika-28 ang deadline ng tuition.' },
            illo: 'phone',
          },
          show: {
            text: { en: 'A remittance delay tests whether the household had anything set aside for exactly this, or whether every jar was already fully spent by the 25th.', tl: 'Sinusubok ng pagkaantala ng remittance kung may inilaan ba ang bahay para eksakto rito, o kung nagasta na ba nang buo ang bawat jar bago pa ang ika-25.' },
            points: [],
            illo: 'phone',
            animate: false,
          },
          do: {
            type: 'story',
            start: 'n1',
            nodes: {
              n1: {
                text: { en: 'The remittance is late. The tuition deadline is in three days, and last month’s needs jar still holds ₱2,000 unspent.', tl: 'Huli ang padala. Tatlong araw na lang bago ang deadline ng tuition, at may natitirang ₱2,000 pa rin ang needs jar mula noong nakaraang buwan.' },
                balance: 2000,
                choices: [
                  { text: { en: 'Use the ₱2,000 leftover, and ask the school for three more days', tl: 'Gamitin ang ₱2,000 na natira, at hilingin sa eskuwelahan ang tatlo pang araw' }, next: 'a1' },
                  { text: { en: 'Borrow from a lending app to cover the rest, expecting the remittance any day', tl: 'Manghiram sa lending app para sakupin ang natitira, umaasang darating na ang padala anumang araw' }, next: 'b1' },
                ],
              },
              a1: {
                text: { en: 'The school agrees to the extra days. The remittance arrives on day two of the extension, and the balance is paid on time within the new deadline.', tl: 'Sumang-ayon ang eskuwelahan sa dagdag na araw. Dumating ang padala sa ikalawang araw ng extension, at nabayaran ang balance nang nasa oras sa loob ng bagong deadline.' },
                balance: 2000,
                choices: [
                  { text: { en: 'Keep a ₱2,000 cushion in the needs jar every month going forward', tl: 'Panatilihin ang ₱2,000 na cushion sa needs jar bawat buwan mula ngayon' }, next: 'a2' },
                  { text: { en: 'Spend the needs jar down to zero again next month, as before', tl: 'Gastusin ulit ang needs jar hanggang zero sa susunod na buwan, tulad ng dati' }, next: 'a3' },
                ],
              },
              a2: {
                text: { en: 'The cushion becomes standard practice. The next time a delay happens, the same ₱2,000 is there again, with no need to ask the school for anything.', tl: 'Naging standard practice ang cushion. Sa susunod na pagkaantala, naroon ulit ang parehong ₱2,000, walang kailangang hilingin sa eskuwelahan.' },
                balance: 2000,
                outcome: 'steady',
              },
              a3: {
                text: { en: 'Next month’s needs jar starts at zero again. The next delay will need the same call to the school, or something else, to bridge the gap.', tl: 'Nagsisimula ulit sa zero ang needs jar sa susunod na buwan. Kakailanganin ng susunod na pagkaantala ang parehong tawag sa eskuwelahan, o iba pa, para sakupin ang puwang.' },
                balance: 0,
                outcome: 'costly',
              },
              b1: {
                text: { en: 'The loan covers the tuition gap immediately, at a cost the household did not plan for. The remittance arrives two days later, and part of it now goes to the loan instead of this month’s needs.', tl: 'Sinakop agad ng loan ang puwang sa tuition, sa halagang hindi inaasahan ng bahay. Dumating ang padala dalawang araw pagkatapos, at napupunta na ngayon ang bahagi nito sa loan, sa halip na sa needs ng buwang ito.' },
                balance: 0,
                choices: [
                  { text: { en: 'Pay off the loan in full from this month’s remittance, even if the needs jar shrinks', tl: 'Bayaran nang buo ang loan mula sa padala ngayong buwan, kahit lumiit ang needs jar' }, next: 'b2' },
                  { text: { en: 'Pay only the loan’s minimum, and keep the needs jar whole', tl: 'Bayaran lang ang minimum ng loan, at panatilihing buo ang needs jar' }, next: 'b3' },
                ],
              },
              b2: {
                text: { en: 'The loan clears this month, but the needs jar falls short, and something in it gets delayed instead.', tl: 'Nalinis ang loan ngayong buwan, pero kinapos ang needs jar, at may naantala na naman dito sa halip.' },
                balance: 0,
                outcome: 'costly',
              },
              b3: {
                text: { en: 'The needs jar stays whole, but the loan’s remaining balance keeps charging interest, adding a bill this household did not have before the remittance was late.', tl: 'Nanatiling buo ang needs jar, pero patuloy na sinisingil ng interest ang natitirang balance ng loan, dagdag na bill na wala pa sa bahay na ito bago naantala ang padala.' },
                balance: 0,
                outcome: 'costly',
              },
            },
          },
          keep: {
            text: { en: 'A leftover from last month’s jar is a cushion for exactly this kind of delay. A lending app is a new cost stacked on top of it.', tl: 'Cushion para eksakto sa ganitong klaseng pagkaantala ang natira mula sa jar ng nakaraang buwan. Bagong gastos na idinagdag pa dito ang lending app.' },
            action: { kind: 'open', label: { en: 'Open Remit in Jinnie', tl: 'Buksan ang Remit sa Jinnie' }, payload: { app: 'remit' } },
          },
        },
      ],
    },
    {
      id: 'building.business',
      title: { en: 'Business basics', tl: 'Batayan ng Negosyo' },
      summary: { en: 'Corner store books kept daily, business money separated from household money, and what DTI and BMBE actually give a small business.', tl: 'Sari-sari store books na inaayos araw-araw, pera ng negosyo na hiwalay sa pera ng bahay, at ang talagang ibinibigay ng DTI at BMBE sa maliit na negosyo.' },
      competency: { en: 'Can separate business money from household money and name what DTI and BMBE offer', tl: 'Kayang paghiwalayin ang pera ng negosyo sa pera ng bahay at pangalanan ang alok ng DTI at BMBE' },
      wish: 'have',
      status: 'authored',
      bites: [
        {
          id: 'building.business.1',
          title: { en: 'Corner store books, kept daily', tl: 'Sari-sari Store Books, Araw-araw' },
          minutes: 4,
          hook: {
            text: { en: 'A corner store’s cash box holds today’s sales, yesterday’s, and the store tab of three regular customers, all mixed together.', tl: 'Nasa loob ng cash box ng sari-sari store ang benta ngayon, kahapon, at ang lista ng tatlong regular na customer, magkakahalo.' },
            illo: 'cart',
          },
          show: {
            text: { en: 'A daily record separates three things that get mixed together in a cash box: sales, purchases, and store tab owed by customers. Kept daily, each one stays countable on its own.', tl: 'Pinaghihiwalay ng araw-araw na record ang tatlong bagay na nagkakahalo sa cash box: benta, pambili, at lista na utang ng customer. Kapag ginawa araw-araw, mabibilang ang bawat isa nang mag-isa.' },
            points: [
              { en: 'Sales recorded daily show which items actually move, not a guess at month’s end.', tl: 'Nagpapakita ang benta na naitala araw-araw kung aling item ang talagang nabibili, hindi hula sa dulo ng buwan.' },
              { en: 'Store tab left untracked is money already spent by the store but not yet collected.', tl: 'Perang nagasta na ng tindahan pero hindi pa nakokolekta ang lista na hindi natrack.' },
            ],
            illo: 'cart',
            animate: true,
          },
          do: {
            type: 'order',
            prompt: { en: 'Put these steps for keeping corner store books in the right daily order.', tl: 'Ilagay sa tamang pang-araw-araw na pagkakasunod ang mga hakbang sa pag-book ng sari-sari store.' },
            steps: [
              { en: 'Count the cash on hand at the start of the day.', tl: 'Bilangin ang cash na meron sa simula ng araw.' },
              { en: 'Record every sale as it happens, in cash or on tab.', tl: 'Itala ang bawat benta habang nangyayari, cash man o lista.' },
              { en: 'Record every purchase of new stock the same day it is bought.', tl: 'Itala ang bawat pambiling bagong stock sa parehong araw na binili ito.' },
              { en: 'Total the day’s sales, purchases, and new tab entries before closing.', tl: 'Kabuuin ang benta, pambili, at bagong lista ng araw bago magsara.' },
              { en: 'Count the cash on hand again, and compare it to what the day’s record says it should be.', tl: 'Bilangin ulit ang cash na meron, at ikumpara ito sa sinasabi ng record ng araw.' },
            ],
            why: { en: 'The count at closing is the check. If it does not match the record, the gap is easier to find the same day than a week later.', tl: 'Ang bilang sa pagsasara ang siyang tsek. Kung hindi ito tumugma sa record, mas madaling hanapin ang puwang sa parehong araw kaysa isang linggo pagkatapos.' },
          },
          keep: {
            text: { en: 'A record kept daily catches a gap the same day it happens. Kept weekly, the gap has already had a week to hide in.', tl: 'Nakakahuli ng puwang ang record na ginawa araw-araw, sa parehong araw na nangyari ito. Kapag lingguhan, may isang linggo nang nakatago ang puwang.' },
            action: { kind: 'commitment', label: { en: 'Start the 7-day record commitment', tl: 'Simulan ang 7-araw na record commitment' }, payload: { id: 'record-7' } },
          },
        },
        {
          id: 'building.business.2',
          title: { en: 'Separating business money from household money', tl: 'Paghihiwalay ng Pera ng Negosyo' },
          minutes: 3,
          hook: {
            text: { en: 'The same coin purse pays for the store’s new stock and for tonight’s dinner, with no line between them.', tl: 'Ang parehong coin purse ang nagbabayad sa bagong stock ng tindahan at sa hapunan ngayong gabi, walang linya sa pagitan.' },
            illo: 'card',
          },
          show: {
            text: { en: 'A business kept in a separate account shows its own true profit. Mixed with household money, a good sales month and a good grocery month look exactly the same.', tl: 'Ipinapakita ng negosyong nasa hiwalay na account ang tunay na kitang-kita nito. Kapag halo sa pera ng bahay, magkamukha ang magandang buwan ng benta at ang magandang buwan ng grocery.' },
            points: [
              { en: 'A separate account, even a simple envelope or a second e-wallet, is enough to start the split.', tl: 'Sapat na para simulan ang paghihiwalay ang hiwalay na account, kahit envelope lang o pangalawang e-wallet.' },
            ],
            illo: 'card',
            animate: true,
          },
          do: {
            type: 'choice',
            prompt: { en: 'A corner store owner wants to know if the store is actually profitable. What is the first step?', tl: 'Gusto malaman ng may-ari ng sari-sari store kung talagang kumikita ang tindahan. Ano ang unang hakbang?' },
            options: [
              { text: { en: 'Keep business cash separate from household cash, even in a simple envelope', tl: 'Panatilihing hiwalay ang cash ng negosyo sa cash ng bahay, kahit envelope lang' }, correct: true, why: { en: 'Separating the two is what makes a real profit number possible; without it, spending on dinner and spending on stock are indistinguishable.', tl: 'Ang paghihiwalay ng dalawa ang nagpapahintulot ng tunay na numero ng kita; kung wala ito, hindi makikilala ang gastos sa hapunan at gastos sa stock.' } },
              { text: { en: 'Estimate profit at the end of the year from memory', tl: 'Tantiyahin ang kita sa dulo ng taon, batay sa memorya' }, correct: false, why: { en: 'A year of mixed spending cannot be sorted from memory alone; the split needs to happen as the money moves, not after.', tl: 'Hindi masusuri sa memorya lang ang isang taon ng halong gastos; kailangang mangyari ang paghihiwalay habang gumagalaw ang pera, hindi pagkatapos.' } },
              { text: { en: 'Wait until the store is bigger before separating the money', tl: 'Hintayin munang lumaki ang tindahan bago paghiwalayin ang pera' }, correct: false, why: { en: 'The mixing gets harder to untangle the longer it continues; a small store benefits from the habit as much as a large one.', tl: 'Lalong nahihirapang alisin ang paghahalo habang tumatagal ito; nakikinabang ang maliit na tindahan sa gawi nang kasing dami ng malaki.' } },
            ],
          },
          keep: {
            text: { en: 'A separate account is the smallest step that makes a real profit number possible.', tl: 'Ang hiwalay na account ang pinakamaliit na hakbang na nagpapahintulot ng tunay na numero ng kita.' },
            action: null,
          },
        },
        {
          id: 'building.business.3',
          title: { en: 'DTI registration versus staying unregistered', tl: 'DTI Registration Laban sa Hindi Pagrehistro' },
          minutes: 4,
          hook: {
            text: { en: 'Two corner stores, same size, same sales; one has a DTI certificate taped by the counter and one does not.', tl: 'Dalawang sari-sari store, magkaparehong laki, magkaparehong benta; may DTI certificate na nakadikit sa counter ang isa, wala naman ang isa.' },
            illo: 'certificate',
          },
          show: {
            text: { en: 'DTI registers a business name, giving it a name no one else can register in the same territory. Registration itself is a small, one-time cost against what an unregistered name risks losing later.', tl: 'Nire-register ng DTI ang pangalan ng negosyo, binibigyan ito ng pangalan na walang ibang makakapagparehistro sa parehong teritoryo. Maliit at isang beses lang ang gastos ng registration kumpara sa maaaring mawala ng hindi rehistradong pangalan sa hinaharap.' },
            points: [
              { en: 'A registered name can be defended if another business tries to use the same one nearby.', tl: 'Puwedeng ipagtanggol ang rehistradong pangalan kung may ibang negosyo na susubok gumamit ng pareho malapit dito.' },
              { en: 'A DTI certificate is also usually the first document asked for when opening a business bank account or applying for a small loan.', tl: 'Karaniwang unang dokumentong hinihingi ang DTI certificate kapag nagbubukas ng business bank account o nag-aapply ng maliit na loan.' },
            ],
            illo: 'certificate',
            animate: true,
          },
          do: {
            type: 'compare',
            prompt: { en: 'Which leaves the store better positioned to grow: registering the name with DTI, or staying unregistered?', tl: 'Alin ang mas handa para lumago ang tindahan: pagpaparehistro ng pangalan sa DTI, o hindi pagpaparehistro?' },
            options: [
              {
                title: { en: 'Unregistered business name', tl: 'Hindi Rehistradong Pangalan' },
                lines: [
                  { en: 'No registration cost, but no protection over the name either', tl: 'Walang gastos sa registration, pero walang proteksyon din sa pangalan' },
                  { en: 'A bank or lender often asks for DTI registration before opening a business account or a small loan', tl: 'Kadalasang hinihingi ng bangko o lender ang DTI registration bago magbukas ng business account o maliit na loan' },
                ],
                effective: { en: 'Illustrative cost today: ₱0; cost later if the name or a loan is needed: potentially higher', tl: 'Illustrative na gastos ngayon: ₱0; gastos sa hinaharap kung kailangan ang pangalan o loan: posibleng mas mataas' },
                cheaper: false,
              },
              {
                title: { en: 'DTI-registered business name', tl: 'Rehistrado sa DTI' },
                lines: [
                  { en: 'A one-time registration fee secures the name in its territory', tl: 'Isang beses na registration fee ang nag-ssecure sa pangalan sa teritoryo nito' },
                  { en: 'The certificate is ready when a bank account or a small loan is applied for later', tl: 'Handa na ang certificate kapag nag-apply ng business account o maliit na loan sa hinaharap' },
                ],
                effective: { en: 'Illustrative cost: a small one-time fee, avoiding a bigger scramble later', tl: 'Illustrative na gastos: maliit na isang beses na bayad, iniiwasan ang mas malaking gulo sa hinaharap' },
                cheaper: true,
              },
            ],
            why: { en: 'The unregistered name costs nothing today but leaves the store unprotected and unready for the paperwork a bank or lender will eventually ask for. DTI registration is a small cost paid once, ahead of that need.', tl: 'Walang gastos ngayon ang hindi rehistradong pangalan pero iniiwan nitong hindi protektado at hindi handa ang tindahan para sa papeles na hihingin balang araw ng bangko o lender. Maliit na gastos, bayad nang isang beses, ang DTI registration, bago pa kailanganin iyon.' },
          },
          keep: {
            text: { en: 'A registered name is ready before it is needed. An unregistered one is a scramble the day it is.', tl: 'Handa na ang rehistradong pangalan bago pa kailanganin. Pagmamadali sa araw na kailanganin ito ang hindi rehistrado.' },
            action: null,
          },
        },
        {
          id: 'building.business.4',
          title: { en: 'BMBE, matched to what it exempts', tl: 'BMBE, Itinugma sa Exemption Nito' },
          minutes: 3,
          hook: {
            text: { en: 'A store owner hears “BMBE” and “DTI” used interchangeably, though they answer completely different questions.', tl: 'Naririnig ng may-ari ng tindahan ang “BMBE” at “DTI” na parang magkapareho, kahit magkaibang tanong ang sinasagot ng dalawa.' },
            illo: 'certificate',
          },
          show: {
            text: { en: 'DTI registers a business name. BMBE is a separate status, for a business with assets up to ₱3,000,000, that exempts the business from income tax on its earnings. BIR registration, separately again, is what makes a business able to issue official receipts.', tl: 'Nagre-register ang DTI ng pangalan ng negosyo. Hiwalay na status ang BMBE, para sa negosyong may assets na hanggang ₱3,000,000, na nag-eexempt sa negosyo mula sa income tax sa kita nito. Ang BIR registration, hiwalay ulit, ang nagpapahintulot sa negosyong makapag-isyu ng opisyal na resibo.' },
            points: [],
            illo: 'certificate',
            animate: false,
          },
          do: {
            type: 'match',
            prompt: { en: 'Match each term to what it actually does for a small business.', tl: 'I-match ang bawat termino sa talagang ginagawa nito para sa maliit na negosyo.' },
            pairs: [
              { a: { en: 'DTI registration', tl: 'DTI registration' }, b: { en: 'Registers the business name, protecting it in its territory', tl: 'Nagre-register ng pangalan ng negosyo, pinoprotektahan ito sa teritoryo nito' } },
              { a: { en: 'BMBE status', tl: 'BMBE status' }, b: { en: 'Exempts a business with assets up to ₱3,000,000 from income tax on its earnings', tl: 'Nag-eexempt sa negosyong may assets na hanggang ₱3,000,000 mula sa income tax sa kita nito' } },
              { a: { en: 'BIR registration', tl: 'BIR registration' }, b: { en: 'Separate from DTI; needed to issue official receipts and pay applicable taxes', tl: 'Hiwalay sa DTI; kailangan para makapag-isyu ng opisyal na resibo at magbayad ng naaangkop na buwis' } },
              { a: { en: 'Business asset ceiling', tl: 'Business asset ceiling' }, b: { en: 'The ₱3,000,000 limit that decides whether a business still qualifies as a BMBE', tl: 'Ang ₱3,000,000 na limit na nagpapasya kung kwalipikado pa ang negosyo bilang BMBE' } },
            ],
          },
          keep: {
            text: { en: 'DTI, BMBE, and BIR each answer a different question. None of them substitutes for the other two.', tl: 'Magkaibang tanong ang sinasagot ng DTI, BMBE, at BIR. Wala sa kanila ang kapalit ng dalawa pa.' },
            action: null,
          },
        },
        {
          id: 'building.business.5',
          title: { en: 'The store that could not tell if it was making money', tl: 'Ang Tindahan na Hindi Malaman Kung Kumikita' },
          minutes: 5,
          hook: {
            text: { en: 'A corner store has run for two years on instinct: busy most days, broke by the end of most months.', tl: 'Dalawang taon nang tumatakbo ang sari-sari store batay sa instinct: busy karamihan ng araw, walang pera sa dulo ng karamihan ng buwan.' },
            illo: 'cart',
          },
          show: {
            text: { en: 'Whether a store is actually profitable is a question a daily record answers and a full-looking cash box cannot.', tl: 'Sinasagot ng araw-araw na record ang tanong kung talagang kumikita ba ang tindahan, hindi ng cash box na mukhang puno.' },
            points: [],
            illo: 'cart',
            animate: false,
          },
          do: {
            type: 'story',
            start: 'n1',
            nodes: {
              n1: {
                text: { en: 'The store has ₱8,000 in the cash box today, mixed with household money. Sales feel good, but nothing is written down.', tl: 'May ₱8,000 sa cash box ng tindahan ngayon, halo sa pera ng bahay. Maganda ang pakiramdam sa benta, pero walang nakasulat.' },
                balance: 8000,
                choices: [
                  { text: { en: 'Start a daily record and a separate business envelope this week', tl: 'Simulan ang araw-araw na record at hiwalay na business envelope ngayong linggo' }, next: 'a1' },
                  { text: { en: 'Keep running on instinct, since the store has survived two years already', tl: 'Ituloy ang pagpapatakbo base sa instinct, dahil nakaraos na ang tindahan sa dalawang taon' }, next: 'b1' },
                ],
              },
              a1: {
                text: { en: 'The first week’s record shows ₱21,000 in sales, ₱16,000 in new stock purchases, and ₱1,500 added to store tab not yet collected.', tl: 'Ipinapakita ng record ng unang linggo ang ₱21,000 na benta, ₱16,000 na bagong pambiling stock, at ₱1,500 na naidagdag sa lista na hindi pa nakokolekta.' },
                balance: 3500,
                choices: [
                  { text: { en: 'Follow up on the store tab before it grows further', tl: 'Sundan ang lista bago pa ito lumaki' }, next: 'a2' },
                  { text: { en: 'Let the store tab carry on as before, uncollected', tl: 'Hayaang tumuloy ang lista tulad ng dati, hindi kinokolekta' }, next: 'a3' },
                ],
              },
              a2: {
                text: { en: 'Following up collects most of the store tab within the month. The record now shows a real weekly profit of about ₱3,500, the first clear number the store has had in two years.', tl: 'Nakakolekta ang pagsunod ng karamihan ng lista sa loob ng buwan. Ipinapakita na ngayon ng record ang tunay na lingguhang kita na humigit-kumulang ₱3,500, ang unang malinaw na numero ng tindahan sa loob ng dalawang taon.' },
                balance: 3500,
                outcome: 'steady',
              },
              a3: {
                text: { en: 'The store tab keeps growing, uncollected. The record shows sales happening, but the cash to match it never arrives.', tl: 'Patuloy na lumalaki ang lista, hindi kinokolekta. Ipinapakita ng record na may nangyayaring benta, pero hindi kailanman dumarating ang cash na katumbas nito.' },
                balance: 1500,
                outcome: 'costly',
              },
              b1: {
                text: { en: 'A second year passes the same way. The store still feels busy, and the cash box is still empty by the end of most months.', tl: 'Lumipas ang ikalawang taon sa parehong paraan. Busy pa rin ang tindahan, at walang pera pa rin sa cash box sa dulo ng karamihan ng buwan.' },
                balance: 0,
                choices: [
                  { text: { en: 'Start the daily record now, two years in', tl: 'Simulan na ang araw-araw na record ngayon, dalawang taon na' }, next: 'b2' },
                  { text: { en: 'Assume the store simply is not profitable, and consider closing it', tl: 'Ipagpalagay na hindi lang kumikita ang tindahan, at isaalang-alang ang pagsasara nito' }, next: 'b3' },
                ],
              },
              b2: {
                text: { en: 'The record, once started, shows the same gap the store had all along: store tab uncollected, and stock bought without tracking what it replaced. The number was findable after all, just two years late.', tl: 'Ipinapakita ng record, kapag nasimulan, ang parehong puwang na taglay ng tindahan sa buong panahong ito: lista na hindi kinokolekta, at stock na binili nang hindi tinatrack kung ano ang pinapalitan nito. Nahanap din ang numero, dalawang taon na lang ang huli.' },
                balance: 0,
                outcome: 'costly',
              },
              b3: {
                text: { en: 'Without a record, the decision to close rests on a feeling, not a number. The store may have been profitable all along, with the store tab simply never collected.', tl: 'Kung walang record, nakasalalay sa pakiramdam ang desisyong magsara, hindi sa numero. Puwedeng kumikita naman pala ang tindahan sa buong panahong ito, ang lista lang ang hindi kinolekta.' },
                balance: 0,
                outcome: 'costly',
              },
            },
          },
          keep: {
            text: { en: 'A cash box that feels full and a store that is actually profitable are two different claims. Only a record can tell them apart.', tl: 'Magkaibang claim ang cash box na parang puno at ang tindahang talagang kumikita. Ang record lang ang makakapagsabi ng pagkakaiba.' },
            action: { kind: 'open', label: { en: 'Open Accounts in Jinnie', tl: 'Buksan ang Accounts sa Jinnie' }, payload: { app: 'accounts' } },
          },
        },
      ],
    },
    {
      id: 'building.tax',
      title: { en: 'Taxes', tl: 'Buwis' },
      summary: { en: 'BIR basics, the freelancer’s 8% option computed, and what a receipt is actually for.', tl: 'Batayan ng BIR, ang 8% option ng freelancer na kinwenta, at ang talagang gamit ng resibo.' },
      competency: { en: 'Can compute the freelancer 8% option and list the annual filing steps', tl: 'Kayang kwentahin ang 8% option ng freelancer at ilista ang mga hakbang sa annual filing' },
      wish: 'rid',
      status: 'authored',
      bites: [
        {
          id: 'building.tax.1',
          title: { en: 'BIR basics, matched to the forms', tl: 'Batayan ng BIR' },
          minutes: 3,
          hook: {
            text: { en: 'A freelancer’s folder holds four BIR terms, and no memory of which one does what.', tl: 'Apat na termino ng BIR ang laman ng folder ng isang freelancer, at wala nang matandaan kung alin ang para saan.' },
            illo: 'certificate',
          },
          show: {
            text: { en: 'Each BIR term answers a different moment in a freelancer’s year: registering, declaring income each quarter, filing the annual return, and issuing a receipt. Match each one to its purpose.', tl: 'Sinasagot ng bawat termino ng BIR ang ibang sandali sa taon ng freelancer: pagrehistro, pagdeklara ng kita bawat quarter, pag-file ng annual return, at pag-isyu ng resibo. I-match ang bawat isa sa layunin nito.' },
            points: [],
            illo: 'certificate',
            animate: false,
          },
          do: {
            type: 'match',
            prompt: { en: 'Match each term to what it is for.', tl: 'I-match ang bawat termino sa gamit nito.' },
            pairs: [
              { a: { en: 'BIR registration', tl: 'BIR registration' }, b: { en: 'Signs up a freelancer or business as a taxpayer, separate from DTI or business name registration', tl: 'Nagpaparehistro sa freelancer o negosyo bilang taxpayer, hiwalay sa DTI o pagrehistro ng pangalan ng negosyo' } },
              { a: { en: 'Official receipt', tl: 'Official receipt' }, b: { en: 'Proof of a sale made and proof of an expense paid, for both the seller and the buyer', tl: 'Patunay ng bentang nagawa at patunay ng gastos na binayaran, para sa nagbenta at bumili' } },
              { a: { en: 'Quarterly return', tl: 'Quarterly return' }, b: { en: 'A declaration of income filed every few months through the year', tl: 'Deklarasyon ng kita na naifa-file kada ilang buwan sa taon' } },
              { a: { en: 'Annual income tax return', tl: 'Annual income tax return' }, b: { en: 'The year’s full income declaration, due 15 April', tl: 'Ang buong deklarasyon ng kita ng taon, dapat i-file bago mag-15 Abril' } },
            ],
          },
          keep: {
            text: { en: 'Four terms, four different moments in the same year. None of them is optional once registered.', tl: 'Apat na termino, apat na magkaibang sandali sa parehong taon. Wala sa mga ito ang optional kapag rehistrado na.' },
            action: null,
          },
        },
        {
          id: 'building.tax.2',
          title: { en: 'The freelancer’s 8% option, computed', tl: 'Ang 8% Option, Kinwenta' },
          minutes: 4,
          hook: {
            text: { en: 'A freelancer earning ₱600,000 gross this year has never compared the two ways BIR lets that income be taxed.', tl: 'Hindi pa kailanman inikumpara ng freelancer na kumikita ng ₱600,000 gross ngayong taon ang dalawang paraan na pinapayagan ng BIR na pagbuwisan ang kitang iyon.' },
            illo: 'coins',
          },
          show: {
            text: { en: 'A freelancer or small business with gross sales up to ₱3,000,000 may elect an 8% tax on gross sales above ₱250,000, instead of the graduated income tax rates plus the separate percentage tax.', tl: 'Puwedeng pumili ng 8% na buwis sa gross sales lampas ₱250,000 ang freelancer o maliit na negosyo na may gross sales na hanggang ₱3,000,000, sa halip na ang graduated income tax rates kasama ang hiwalay na percentage tax.' },
            points: [
              { en: 'The first ₱250,000 of the year’s gross is not taxed under the 8% option either.', tl: 'Hindi rin binubuwisan ang unang ₱250,000 ng gross ng taon, sa ilalim ng 8% option.' },
              { en: 'The 8% option replaces both the income tax and the percentage tax in one flat rate.', tl: 'Pinapalitan ng 8% option ang income tax at percentage tax sa iisang flat rate.' },
            ],
            illo: 'coins',
            animate: true,
          },
          do: {
            type: 'number',
            prompt: { en: 'A freelancer earns ₱600,000 gross this year and elects the 8% option. What is the tax owed?', tl: 'Kumikita ang freelancer ng ₱600,000 gross ngayong taon at pinili ang 8% option. Magkano ang utang na buwis?' },
            answer: 28000,
            tolerance: 0,
            format: 'peso',
            worked: { en: '₱600,000 − ₱250,000 = ₱350,000 taxable. ₱350,000 × 8% = ₱28,000. This replaces both the graduated income tax and the percentage tax that would otherwise apply.', tl: '₱600,000 − ₱250,000 = ₱350,000 na buwisan. ₱350,000 × 8% = ₱28,000. Pinapalitan nito ang graduated income tax at percentage tax na sana aaplay.' },
          },
          keep: {
            text: { en: 'The 8% option only applies below ₱3,000,000 gross; the first ₱250,000 stays untaxed either way.', tl: 'Aplay lang ang 8% option kung mas mababa sa ₱3,000,000 ang gross; hindi pa rin binubuwisan ang unang ₱250,000 sa alinmang paraan.' },
            action: null,
          },
        },
        {
          id: 'building.tax.3',
          title: { en: 'Annual filing, in order', tl: 'Annual Filing, Ayon sa Pagkakasunod' },
          minutes: 3,
          hook: {
            text: { en: '15 April arrives the same way every year, and a freelancer’s documents are rarely ready before the week it lands.', tl: 'Dumarating ang ika-15 ng Abril sa parehong paraan bawat taon, at bihirang handa ang mga dokumento ng freelancer bago pa ang linggong iyon.' },
            illo: 'calendar',
          },
          show: {
            text: { en: 'Annual filing has a fixed order, and most of it can happen months before the 15 April deadline.', tl: 'May fixed na pagkakasunod ang annual filing, at puwedeng mangyari ang karamihan dito buwan bago ang deadline sa ika-15 ng Abril.' },
            points: [],
            illo: 'calendar',
            animate: false,
          },
          do: {
            type: 'order',
            prompt: { en: 'Put these annual filing steps in the right order.', tl: 'Ilagay sa tamang pagkakasunod-sunod ang mga hakbang sa annual filing.' },
            steps: [
              { en: 'Gather all receipts and records of income and expenses for the year.', tl: 'Tipunin ang lahat ng resibo at record ng kita at gastos ng taon.' },
              { en: 'Total the year’s gross sales and decide between the 8% option and the graduated rates, if eligible.', tl: 'Kabuuin ang gross sales ng taon at magpasya sa pagitan ng 8% option at graduated rates, kung kwalipikado.' },
              { en: 'Compute the tax owed using the chosen method.', tl: 'Kwentahin ang utang na buwis gamit ang napiling paraan.' },
              { en: 'File the annual income tax return on or before 15 April.', tl: 'I-file ang annual income tax return bago o sa ika-15 ng Abril.' },
              { en: 'Keep a copy of the filed return and proof of payment.', tl: 'Itago ang kopya ng na-file na return at patunay ng bayad.' },
            ],
            why: { en: 'Gathering receipts is the step most often left for the last week, yet it is the one that takes the longest and needs the whole year’s paper trail.', tl: 'Ang pagtipon ng resibo ang hakbang na kadalasang iniiwan para sa huling linggo, gayunpaman ito ang pinakamatagal at kailangan ang buong taon na paper trail.' },
          },
          keep: {
            text: { en: 'Filing on 15 April is one step. Gathering the year’s receipts is the one that actually takes the months before it.', tl: 'Isang hakbang lang ang pag-file bago mag-15 Abril. Ang pagtipon ng resibo ng taon ang siyang talagang umuubos ng mga buwan bago nito.' },
            action: null,
          },
        },
        {
          id: 'building.tax.4',
          title: { en: 'What a receipt is for, beyond the sale', tl: 'Ano ang Gamit ng Resibo' },
          minutes: 3,
          hook: {
            text: { en: 'A customer waves off the receipt: “No need.” The freelancer keeps a copy anyway.', tl: 'Iwinagayway ng customer ang resibo: “Hindi na kailangan.” Nagtago pa rin ng kopya ang freelancer.' },
            illo: 'card',
          },
          show: {
            text: { en: 'A receipt proves two things at once: income for the one who issued it, and an expense for the one who received it. Both sides may need it later, for reasons that have nothing to do with the sale itself.', tl: 'Nagpapatunay ang resibo ng dalawang bagay nang sabay: kita para sa nag-isyu, at gastos para sa tumanggap. Puwedeng kailanganin ito ng dalawang panig sa hinaharap, sa mga dahilang wala nang kinalaman sa benta mismo.' },
            points: [
              { en: 'A receipt kept by the freelancer backs up the gross sales reported at filing time.', tl: 'Sumusuporta ang resibong itinago ng freelancer sa gross sales na inireport sa oras ng pag-file.' },
            ],
            illo: 'card',
            animate: true,
          },
          do: {
            type: 'choice',
            prompt: { en: 'A freelancer issues a receipt for a ₱5,000 project. What is the receipt actually for?', tl: 'Nag-isyu ang freelancer ng resibo para sa ₱5,000 na proyekto. Para saan talaga ang resibo?' },
            options: [
              { text: { en: 'Proof of income for the freelancer, and proof of expense for the client', tl: 'Patunay ng kita para sa freelancer, at patunay ng gastos para sa kliyente' }, correct: true, why: { en: 'A receipt serves both sides: it backs the freelancer’s reported income, and it backs the client’s claimed expense.', tl: 'Naglilingkod ang resibo sa dalawang panig: sinusuportahan nito ang naireport na kita ng freelancer, at ang inaangkin na gastos ng kliyente.' } },
              { text: { en: 'A courtesy for the client, with no other use', tl: 'Kagandahang-loob lang para sa kliyente, walang ibang gamit' }, correct: false, why: { en: 'A receipt is documentation both sides can be asked to produce later, not a courtesy that ends at the counter.', tl: 'Dokumentasyon ang resibo na puwedeng hingin sa dalawang panig sa hinaharap, hindi lang kagandahang-loob na natatapos sa counter.' } },
              { text: { en: 'Required only if the client asks for one', tl: 'Kailangan lang kung hihingin ng kliyente' }, correct: false, why: { en: 'A registered seller issues a receipt for a sale regardless of whether the client asks, since it also backs the seller’s own reported income.', tl: 'Nag-iisyu ng resibo ang rehistradong nagbebenta para sa benta kahit hindi humingi ang kliyente, dahil sinusuportahan din nito ang sariling naireport na kita ng nagbenta.' } },
            ],
          },
          keep: {
            text: { en: 'A receipt backs two claims at once: the seller’s income and the buyer’s expense.', tl: 'Sinusuportahan ng resibo ang dalawang claim nang sabay: ang kita ng nagbenta at ang gastos ng bumili.' },
            action: null,
          },
        },
        {
          id: 'building.tax.5',
          title: { en: 'The freelancer who filed late', tl: 'Ang Freelancer na Huling Nag-file' },
          minutes: 5,
          hook: {
            text: { en: '15 April passes. The freelancer’s receipts are gathered on the 20th, not before.', tl: 'Lumipas ang ika-15 ng Abril. Natipon ang mga resibo ng freelancer sa ika-20, hindi bago nito.' },
            illo: 'calendar',
          },
          show: {
            text: { en: 'Filing late tests what a freelancer already knew: the return needed the whole year’s receipts, not a week’s worth.', tl: 'Sinusubok ng huling pag-file kung ano na ang alam ng freelancer: kailangan ng return ang resibo ng buong taon, hindi ng isang linggo lang.' },
            points: [],
            illo: 'calendar',
            animate: false,
          },
          do: {
            type: 'story',
            start: 'n1',
            nodes: {
              n1: {
                text: { en: 'On 10 April, the freelancer realizes half the year’s receipts are still scattered across messages and drawers.', tl: 'Noong ika-10 ng Abril, napagtanto ng freelancer na nakakalat pa rin ang kalahati ng resibo ng taon sa mga mensahe at drawer.' },
                choices: [
                  { text: { en: 'Spend the next five days gathering everything and file by the 15th', tl: 'Gugulin ang susunod na limang araw sa pagtipon ng lahat at mag-file bago ang ika-15' }, next: 'a1' },
                  { text: { en: 'File late, once everything is finally gathered', tl: 'Mag-file nang huli, kapag natipon na talaga ang lahat' }, next: 'b1' },
                ],
              },
              a1: {
                text: { en: 'The scramble is tight, but the return files on the 14th, with every receipt accounted for.', tl: 'Masikip ang pagmamadali, pero na-file ang return sa ika-14, kasama ang bawat resibo.' },
                balance: 0,
                outcome: 'steady',
              },
              b1: {
                text: { en: 'The return files on the 25th, ten days late. A surcharge and interest now apply on top of the tax originally owed.', tl: 'Na-file ang return sa ika-25, sampung araw na huli. May surcharge at interest na ngayon dagdag sa buwis na dati nang utang.' },
                balance: 0,
                choices: [
                  { text: { en: 'Pay the surcharge and interest in full immediately', tl: 'Bayaran nang buo ang surcharge at interest agad' }, next: 'b2' },
                  { text: { en: 'Delay payment further while gathering the rest of the amount', tl: 'Antalahin pa ang bayad habang tinitipon ang natitirang halaga' }, next: 'b3' },
                ],
              },
              b2: {
                text: { en: 'The surcharge and interest add a real amount on top of the original tax, illustrative here at ₱3,000, but the account closes with nothing further accruing.', tl: 'Nagdagdag ng tunay na halaga ang surcharge at interest sa orihinal na buwis, illustrative dito sa ₱3,000, pero nagsasara ang account nang wala nang idadagdag pa.' },
                balance: 3000,
                outcome: 'costly',
              },
              b3: {
                text: { en: 'Interest continues to accrue on the unpaid surcharge itself the longer it waits, adding to a bill that started as a filing delay alone.', tl: 'Patuloy na tumataas ang interest sa hindi pa bayad na surcharge habang tumatagal ito, dagdag sa bill na nagsimula bilang pagkaantala lang sa pag-file.' },
                balance: 4500,
                outcome: 'costly',
              },
            },
          },
          keep: {
            text: { en: 'A return filed on time needs receipts gathered all year. A return filed late adds a bill the tax itself never included.', tl: 'Kailangan ng return na na-file sa oras ng resibong tinipon buong taon. Nagdaragdag ng bill na wala sa orihinal na buwis ang return na na-file nang huli.' },
            action: { kind: 'commitment', label: { en: 'Start the 7-day record commitment', tl: 'Simulan ang 7-araw na record commitment' }, payload: { id: 'record-7' } },
          },
        },
      ],
    },
  ],
};
