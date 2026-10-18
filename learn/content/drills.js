// Scam drills. Each drill is a spot interaction on a fake message, marked simulated on screen. One is served weekly;
// all are open in the drill library. Replace: real screenshots per docs/ASSETS.md. Texts mirror messages reported in 2025 and 2026.
const spot = (id, title, seconds, channel, from, lines, why) => ({ id, title, do: { type: 'spot', seconds, prompt: { en: 'Flag every line that gives it away.', tl: 'I-flag ang bawat linyang nagbubunyag.' }, message: { channel, from, lines }, why } });
const L = (en, tl, suspicious, wen = '', wtl = '') => ({ text: { en, tl }, suspicious, why: { en: wen, tl: wtl } });

export const drills = [
  spot('drill.bank-lock', { en: 'The locked account', tl: 'Ang naka-lock na account' }, 25, 'sms', { en: 'BDO-Alerts', tl: 'BDO-Alerts' }, [
    L('Your account has been temporarily locked due to unusual activity.', 'Pansamantalang na-lock ang account mo dahil sa unusual activity.', true, 'Fear first. Banks lock and then wait for you to call them.', 'Takot muna. Naglo-lock ang bangko at naghihintay ng tawag mo.'),
    L('To restore access, verify now: bdo-secure-verify.com/unlock', 'Para maibalik, i-verify ngayon: bdo-secure-verify.com/unlock', true, 'A link that is not the bank’s domain. Banks do not send unlock links.', 'Link na hindi domain ng bangko. Walang bangkong nagpapadala ng unlock link.'),
    L('You will be asked for the 6-digit code sent to your phone.', 'Hihingin ang 6-digit code na ipinadala sa phone mo.', true, 'A one-time code is never shared. Whoever holds it holds the account.', 'Hindi ibinabahagi ang one-time code. Kung sino ang may hawak, siya ang may account.'),
    L('BDO will never ask for your password.', 'Hindi hihingin ng BDO ang password mo.', false),
  ], { en: 'Three tells: urgency, a link that is not the bank, a request for a code. Any one of them ends the conversation. Call the number on your card.', tl: 'Tatlong palatandaan: pagmamadali, link na hindi sa bangko, paghingi ng code. Isa lang ay tapos na ang usapan. Tawagan ang numero sa card mo.' }),

  spot('drill.cousin', { en: 'The cousin who needs load', tl: 'Ang pinsang kailangan ng load' }, 25, 'chat', { en: 'Jomar Reyes', tl: 'Jomar Reyes' }, [
    L('Hi, this is my new account, the old one got hacked.', 'Hi, bago kong account ito, na-hack ang luma.', true, 'A new account is the setup. Call the old number.', 'Ang bagong account ang simula. Tawagan ang lumang numero.'),
    L('Can you send ₱2,000 to this GCash number, it is an emergency, I will pay you back tomorrow.', 'Pwede bang magpadala ng ₱2,000 sa GCash number na ito, emergency lang, babayaran ko bukas.', true, 'Money to a number you do not know, today, with a promise for tomorrow.', 'Pera sa numerong hindi mo kilala, ngayon, na may pangako para bukas.'),
    L('Please don’t call, my phone is broken, chat only.', 'Huwag ka nang tumawag, sira ang phone ko, chat lang.', true, 'Blocking the one check that would end the scam.', 'Hinaharang ang tanging pagsusuri na tatapos sa scam.'),
    L('How are Aunt and the kids?', 'Kumusta si Tita at ang mga bata?', false),
  ], { en: 'Everything a scammer needs is public: names, photos, family. What they cannot fake is your cousin’s voice. Call.', tl: 'Lahat ng kailangan ng scammer ay pampubliko: pangalan, larawan, pamilya. Ang hindi nila mapepeke ay ang boses ng pinsan mo. Tumawag.' }),

  spot('drill.investment', { en: 'The group chat tip', tl: 'Ang tip sa group chat' }, 25, 'chat', { en: 'Forwarded from Wealth Circle PH', tl: 'Forwarded from Wealth Circle PH' }, [
    L('Guaranteed 30% return every month. Capital fully protected.', 'Guaranteed 30% return kada buwan. Protektado ang capital.', true, 'No legal investment guarantees 30% a month. Treasury bonds pay about 6% a year.', 'Walang legal na investment na guaranteed 30% kada buwan. Mga 6% kada taon ang treasury bonds.'),
    L('Earn ₱500 for every friend you refer.', 'Kumita ng ₱500 sa bawat kaibigang i-refer mo.', true, 'Paid for recruiting, not for investing. That is the structure of a pyramid.', 'Bayad sa pag-recruit, hindi sa pag-invest. Iyan ang hugis ng pyramid.'),
    L('Slots close tonight. Send via GCash to reserve.', 'Magsasara ang slots ngayong gabi. Magpadala sa GCash para mag-reserve.', true, 'Deadline plus a personal wallet. Licensed firms take money into company accounts, on paper.', 'Deadline at personal na wallet. Ang licensed na kumpanya ay tumatanggap sa company account, may papeles.'),
    L('Registered with SEC? Check sec.gov.ph before you send anything.', 'Rehistrado sa SEC? Tingnan ang sec.gov.ph bago magpadala.', false),
  ], { en: 'Check the name on the SEC Check App. Not registered, or registered only as a company but not licensed to sell investments, means no.', tl: 'Tingnan ang pangalan sa SEC Check App. Hindi rehistrado, o rehistrado bilang kumpanya pero walang lisensya magbenta ng investment, ay hindi.' }),

  spot('drill.delivery', { en: 'The parcel fee', tl: 'Ang bayad sa parcel' }, 20, 'sms', { en: '+63 912 555 0140', tl: '+63 912 555 0140' }, [
    L('Your parcel is on hold at our hub. Pay ₱49 customs fee to release.', 'Naka-hold ang parcel mo sa hub namin. Magbayad ng ₱49 customs fee para ma-release.', true, 'A tiny fee is bait for your card details, not the goal.', 'Pain ang maliit na bayad para sa card details mo, hindi ang layunin.'),
    L('Pay here: ph-parcel-release.top/pay', 'Magbayad dito: ph-parcel-release.top/pay', true, 'Unfamiliar domain. Couriers use their own apps and cash on delivery.', 'Hindi kilalang domain. Sariling app at cash on delivery ang gamit ng courier.'),
    L('Unpaid parcels are returned after 24 hours.', 'Ibabalik ang hindi bayad na parcel pagkatapos ng 24 oras.', true, 'Urgency again.', 'Pagmamadali ulit.'),
    L('Track your order in the app you bought it from.', 'I-track ang order sa app na pinagbilhan mo.', false),
  ], { en: 'If you did not order it, there is no parcel. If you did, the app you ordered from is the only place to check.', tl: 'Kung hindi ka nag-order, walang parcel. Kung nag-order ka, ang app na pinagbilhan lang ang lugar para tingnan.' }),

  spot('drill.sss', { en: 'The SSS agent', tl: 'Ang SSS agent' }, 25, 'call', { en: 'Unknown number', tl: 'Hindi kilalang numero' }, [
    L('Good morning, this is SSS. Your pension will be suspended unless we update your records today.', 'Magandang umaga, SSS po ito. Masususpinde ang pension ninyo kung hindi natin ma-update ang records ngayon.', true, 'SSS writes and posts notices in My.SSS. It does not suspend by phone.', 'Sumusulat ang SSS at nagpo-post sa My.SSS. Hindi nagsususpinde sa telepono.'),
    L('Please read me the code we just texted you to confirm your identity.', 'Pakibasa po ang code na ipinadala namin para makumpirma ang identity ninyo.', true, 'The code is being used to take over your account while you read it.', 'Ginagamit ang code para kunin ang account mo habang binabasa mo.'),
    L('For faster processing, we can also update the bank account where your pension is sent.', 'Para mas mabilis, pwede rin naming i-update ang bank account kung saan ipinapadala ang pension.', true, 'This is the goal: redirect the pension.', 'Ito ang layunin: ilipat ang pension.'),
    L('You may also visit any SSS branch with a valid ID.', 'Pwede rin pong pumunta sa kahit anong SSS branch na may valid ID.', false),
  ], { en: 'Hang up. Log in to My.SSS yourself or visit a branch. Nothing real is lost by hanging up on a real agent.', tl: 'Ibaba ang tawag. Mag-log in sa My.SSS o pumunta sa branch. Walang mawawala kung ibababa mo ang tawag ng tunay na agent.' }),

  spot('drill.job', { en: 'The job that needs a fee', tl: 'Ang trabahong may bayad' }, 20, 'chat', { en: 'HR Ms. Angela', tl: 'HR Ms. Angela' }, [
    L('Congratulations, you are hired for online tasking, ₱800 to ₱2,500 a day, no experience needed.', 'Congratulations, hired ka na sa online tasking, ₱800 hanggang ₱2,500 kada araw, walang kailangang experience.', true, 'Hired without applying, for pay far above the minimum wage.', 'Hired nang hindi nag-apply, sa sweldong malayo sa minimum wage.'),
    L('To activate your account, top up ₱500 first. You earn it back on task one.', 'Para ma-activate ang account, mag-top up muna ng ₱500. Babalik ito sa unang task.', true, 'Paying to work is the scam. The first task pays, the fifth asks for ₱20,000.', 'Ang pagbabayad para makapagtrabaho ang scam. Nagbabayad ang unang task, ang ikalima ay hihingi ng ₱20,000.'),
    L('Send a selfie with your ID to verify.', 'Magpadala ng selfie na may ID para ma-verify.', true, 'Your ID and face are used to open accounts in your name. You become the mule.', 'Ginagamit ang ID at mukha mo para magbukas ng account sa pangalan mo. Ikaw ang magiging mule.'),
    L('Legitimate employers never charge applicants.', 'Hindi naniningil ng applicants ang lehitimong employer.', false),
  ], { en: 'No fee, no ID selfie to a stranger, no pay before work. Report the account to the platform and to PNP Anti-Cybercrime.', tl: 'Walang bayad, walang ID selfie sa estranghero, walang bayad bago ang trabaho. I-report ang account sa platform at sa PNP Anti-Cybercrime.' }),

  spot('drill.wallet-verify', { en: 'The wallet that needs verifying', tl: 'Ang wallet na kailangang i-verify' }, 20, 'sms', { en: 'GCash', tl: 'GCash' }, [
    L('Your account will be deactivated in 24 hours due to incomplete verification.', 'Made-deactivate ang account mo sa loob ng 24 oras dahil sa hindi kumpletong verification.', true, 'A deadline that creates fear.', 'Deadline na lumilikha ng takot.'),
    L('Verify now at gcash-verify-ph.net to keep your balance.', 'I-verify ngayon sa gcash-verify-ph.net para mapanatili ang balance.', true, 'Not the app, not the real domain.', 'Hindi ang app, hindi ang tunay na domain.'),
    L('Enter your MPIN and the OTP we send to complete verification.', 'Ilagay ang MPIN at OTP na ipapadala namin para makumpleto.', true, 'MPIN plus OTP is the whole account.', 'MPIN at OTP ay ang buong account.'),
    L('GCash will never ask for your MPIN or OTP.', 'Hindi hihingin ng GCash ang MPIN o OTP mo.', false),
  ], { en: 'Open the real app instead. If the account were really at risk, the app would say so.', tl: 'Buksan ang tunay na app. Kung talagang may panganib, sasabihin ng app.' }),

  spot('drill.preapproved', { en: 'The pre-approved loan', tl: 'Ang pre-approved na loan' }, 20, 'sms', { en: 'QuickPeso', tl: 'QuickPeso' }, [
    L('You are pre-approved for ₱50,000. No requirements, cash in 5 minutes.', 'Pre-approved ka sa ₱50,000. Walang requirements, cash sa loob ng 5 minuto.', true, 'No lender approves without checking. The offer is the hook.', 'Walang lender na nag-aapruba nang hindi nagsusuri. Ang alok ang pain.'),
    L('Pay a ₱1,500 processing fee to release the funds.', 'Magbayad ng ₱1,500 processing fee para ma-release ang pondo.', true, 'A fee before a loan is a theft with paperwork.', 'Ang fee bago ang loan ay nakawan na may papeles.'),
    L('Download here: quickpeso-app.xyz', 'I-download dito: quickpeso-app.xyz', true, 'Not an app store. An app from a link reads your contacts.', 'Hindi app store. Ang app mula sa link ay binabasa ang contacts mo.'),
    L('Licensed lenders are listed on the SEC website.', 'Nakalista sa SEC website ang licensed lenders.', false),
  ], { en: 'Advance fees, links outside the app store, and instant approval are the three tells of a fake lender.', tl: 'Advance fee, link sa labas ng app store, at instant approval ang tatlong palatandaan ng pekeng lender.' }),

  spot('drill.overpay', { en: 'The refund for an overpayment', tl: 'Ang refund sa sobrang bayad' }, 25, 'chat', { en: 'Buyer: Karen D.', tl: 'Buyer: Karen D.' }, [
    L('Hi, I sent ₱5,000 by mistake instead of ₱500 for the item. Please refund ₱4,500.', 'Hi, ₱5,000 ang naipadala ko imbes na ₱500 para sa item. Paki-refund ang ₱4,500.', true, 'Check your real balance in the app. The "receipt" is a picture.', 'Tingnan ang tunay na balance sa app. Larawan lang ang "resibo".'),
    L('Here is the screenshot of the transfer.', 'Ito ang screenshot ng transfer.', true, 'A screenshot is not money. Only your own app shows money.', 'Hindi pera ang screenshot. Ang sarili mong app lang ang nagpapakita ng pera.'),
    L('Send the refund now, I need it for hospital.', 'Ipadala na ang refund, kailangan ko para sa ospital.', true, 'Urgency and sympathy together.', 'Pagmamadali at awa nang sabay.'),
    L('Is the item still available?', 'Available pa ba ang item?', false),
  ], { en: 'Refund nothing you cannot see in your own balance. If the money is real, it stays real tomorrow.', tl: 'Huwag mag-refund ng hindi mo nakikita sa sarili mong balance. Kung totoo ang pera, totoo pa rin ito bukas.' }),

  spot('drill.tax-refund', { en: 'The tax refund', tl: 'Ang tax refund' }, 20, 'email', { en: 'BIR e-Services <refund@bir-gov.co>', tl: 'BIR e-Services <refund@bir-gov.co>' }, [
    L('You are eligible for a tax refund of ₱8,432.15.', 'Kwalipikado ka sa tax refund na ₱8,432.15.', true, 'The BIR does not email refunds to individuals out of the blue.', 'Hindi nag-e-email ng refund ang BIR sa indibidwal nang walang dahilan.'),
    L('Confirm your bank card number and expiry to receive it.', 'Kumpirmahin ang card number at expiry para matanggap.', true, 'A refund needs no card details. That is a purchase.', 'Hindi kailangan ng card details ang refund. Pagbili iyon.'),
    L('The sender address is bir-gov.co, not bir.gov.ph.', 'Ang sender ay bir-gov.co, hindi bir.gov.ph.', true, 'Government domains end in gov.ph.', 'Nagtatapos sa gov.ph ang domain ng gobyerno.'),
    L('Keep your TIN private.', 'Ilihim ang TIN mo.', false),
  ], { en: 'Read the domain. Government is gov.ph. Everything else is someone else.', tl: 'Basahin ang domain. Ang gobyerno ay gov.ph. Lahat ng iba ay ibang tao.' }),

  spot('drill.relative-trouble', { en: 'The grandchild in trouble', tl: 'Ang apo na nasa problema' }, 25, 'call', { en: 'Unknown number', tl: 'Hindi kilalang numero' }, [
    L('Grandma, it’s me. I had an accident and I’m at the police station. Please don’t tell Mama.', 'Lola, ako po ito. Naaksidente ako at nasa police station. Huwag po sabihin kay Mama.', true, 'A crying voice, a secret, and no name. Ask which grandchild, then hang up and call the family.', 'Umiiyak na boses, sikreto, at walang pangalan. Itanong kung sinong apo, ibaba, at tawagan ang pamilya.'),
    L('They need ₱30,000 for bail today or I stay here.', 'Kailangan ng ₱30,000 para sa piyansa ngayon o dito ako mananatili.', true, 'A number and a deadline.', 'Numero at deadline.'),
    L('Send it to my friend’s GCash, my phone was taken.', 'Ipadala sa GCash ng kaibigan ko, kinuha ang phone ko.', true, 'Money to a stranger’s account.', 'Pera sa account ng estranghero.'),
    L('Police stations do not take bail through e-wallets.', 'Hindi tumatanggap ng piyansa ang police station sa e-wallet.', false),
  ], { en: 'Hang up and call the grandchild or their parent directly. A real emergency survives a five-minute check.', tl: 'Ibaba at tawagan mismo ang apo o ang magulang. Nakakatagal ang tunay na emergency sa limang minutong pagsuri.' }),

  spot('drill.romance', { en: 'The friend who trades crypto', tl: 'Ang kaibigang nagte-trade ng crypto' }, 25, 'chat', { en: 'Daniel Cruz', tl: 'Daniel Cruz' }, [
    L('I’ve been earning 5% a day on this platform. Let me teach you, no charge.', 'Kumikita ako ng 5% kada araw sa platform na ito. Tuturuan kita, libre.', true, '5% a day is 1,800% a year. Nothing legal pays that.', 'Ang 5% kada araw ay 1,800% kada taon. Walang legal na nagbabayad niyan.'),
    L('Start with ₱3,000. You can withdraw anytime, look at my screenshots.', 'Magsimula sa ₱3,000. Puwedeng mag-withdraw anumang oras, tingnan ang screenshots ko.', true, 'Small first deposits and fake withdrawals build trust for the big one.', 'Maliit na unang deposito at pekeng withdrawal para sa tiwala sa malaki.'),
    L('The platform link is coinvault-pro.io, use my referral code.', 'Ang link ay coinvault-pro.io, gamitin ang referral code ko.', true, 'Unlicensed platform plus referral code.', 'Walang lisensyang platform at referral code.'),
    L('Licensed crypto exchanges are listed by the BSP and the SEC.', 'Nakalista sa BSP at SEC ang licensed crypto exchanges.', false),
  ], { en: 'Friendship that arrives with a platform is recruitment. Check the exchange on the BSP and SEC lists before a single peso.', tl: 'Ang pagkakaibigang may kasamang platform ay recruitment. Tingnan ang exchange sa listahan ng BSP at SEC bago ang isang piso.' }),

  spot('drill.philhealth-refund', { en: 'The PhilHealth refund', tl: 'Ang PhilHealth refund' }, 20, 'sms', { en: 'PHILHEALTH', tl: 'PHILHEALTH' }, [
    L('You have an unclaimed benefit refund of ₱12,600.', 'May hindi pa na-claim na benefit refund ka na ₱12,600.', true, 'PhilHealth pays hospitals, not refunds by text.', 'Nagbabayad ang PhilHealth sa ospital, hindi refund sa text.'),
    L('Claim within 48 hours at philhealth-benefits.site', 'Mag-claim sa loob ng 48 oras sa philhealth-benefits.site', true, 'Deadline plus a domain that is not gov.ph.', 'Deadline at domain na hindi gov.ph.'),
    L('Enter your PhilHealth number and your e-wallet MPIN to receive the refund.', 'Ilagay ang PhilHealth number at e-wallet MPIN para matanggap ang refund.', true, 'An MPIN is never needed to receive money.', 'Hindi kailangan ng MPIN para tumanggap ng pera.'),
    L('PhilHealth’s website is philhealth.gov.ph.', 'Ang website ng PhilHealth ay philhealth.gov.ph.', false),
  ], { en: 'Receiving money never needs your PIN. Only sending does.', tl: 'Hindi kailangan ng PIN para tumanggap ng pera. Sa pagpapadala lang.' }),

  spot('drill.seller-first', { en: 'The seller who needs payment first', tl: 'Ang seller na kailangang bayaran muna' }, 20, 'chat', { en: 'Marketplace seller', tl: 'Marketplace seller' }, [
    L('Last unit, three others are asking. Pay full now to reserve.', 'Huling unit, tatlo pa ang nagtatanong. Bayaran nang buo ngayon para ma-reserve.', true, 'Scarcity and a deadline.', 'Kakulangan at deadline.'),
    L('Send to my personal GCash, the shop account is under maintenance.', 'Ipadala sa personal kong GCash, under maintenance ang shop account.', true, 'Off-platform payment removes every protection.', 'Nawawala ang bawat proteksyon sa bayad sa labas ng platform.'),
    L('I’ll send the tracking number after payment.', 'Ipapadala ko ang tracking number pagkatapos ng bayad.', true, 'Tracking after money, with no cash on delivery, is the pattern.', 'Tracking pagkatapos ng pera, walang cash on delivery, ang pattern.'),
    L('Cash on delivery is available on the platform.', 'May cash on delivery sa platform.', false),
  ], { en: 'Pay inside the platform or cash on delivery. A seller who cannot do either is not selling.', tl: 'Magbayad sa loob ng platform o cash on delivery. Ang seller na hindi kaya ang alinman ay hindi nagbebenta.' }),

  spot('drill.typhoon', { en: 'The typhoon relief drive', tl: 'Ang relief drive para sa bagyo' }, 20, 'chat', { en: 'Bayanihan Relief 2026', tl: 'Bayanihan Relief 2026' }, [
    L('Families in Catanduanes need help tonight. Every ₱500 feeds a family for a week.', 'Kailangan ng tulong ng mga pamilya sa Catanduanes ngayong gabi. Bawat ₱500 ay pagkain ng pamilya sa isang linggo.', false),
    L('Send donations to this personal GCash number: 0917 555 0182, Ma. Theresa.', 'Ipadala ang donasyon sa personal na GCash number: 0917 555 0182, Ma. Theresa.', true, 'A personal number, not an organisation. Real drives name the group and give an official account.', 'Personal na numero, hindi organisasyon. Ang tunay na drive ay may pangalan ng grupo at opisyal na account.'),
    L('Share to 10 friends to unlock a matching donation from a sponsor.', 'I-share sa 10 kaibigan para ma-unlock ang matching donation ng sponsor.', true, 'Chain-sharing spreads the scam faster.', 'Mas mabilis kumalat ang scam sa chain-sharing.'),
    L('Give through the Red Cross, a church, or a group you can call.', 'Magbigay sa Red Cross, simbahan, o grupong kaya mong tawagan.', false),
  ], { en: 'Generosity is not the mistake. The channel is. Give through a group with a name, an address and a phone that answers.', tl: 'Hindi ang pagbibigay ang mali. Ang daan. Magbigay sa grupong may pangalan, address at teleponong sumasagot.' }),

  spot('drill.sim-upgrade', { en: 'The free SIM upgrade', tl: 'Ang libreng SIM upgrade' }, 20, 'sms', { en: 'GLOBE-5G', tl: 'GLOBE-5G' }, [
    L('Congratulations, you qualify for a free 5G SIM upgrade.', 'Congratulations, kwalipikado ka sa libreng 5G SIM upgrade.', true, 'A prize you did not enter.', 'Premyong hindi mo sinalihan.'),
    L('Reply with your full name, birthday, and the code we text you to activate.', 'I-reply ang buong pangalan, birthday, at ang code na ite-text namin para ma-activate.', true, 'Name, birthday and a code is a SIM swap. Your number moves to their phone, then your bank does.', 'Pangalan, birthday at code ay SIM swap. Lilipat ang numero mo sa phone nila, tapos ang bangko mo.'),
    L('Offer valid for 2 hours only.', 'Valid ang alok sa loob ng 2 oras lang.', true, 'Urgency.', 'Pagmamadali.'),
    L('Telcos upgrade SIMs in their stores with your ID.', 'Nag-a-upgrade ng SIM ang telco sa kanilang tindahan gamit ang ID mo.', false),
  ], { en: 'Your phone number is the key to every account that texts you a code. Nobody gets it by text.', tl: 'Ang phone number mo ang susi sa bawat account na nagte-text ng code. Walang makakakuha nito sa text.' }),
];

export function drillOfTheWeek(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 1);
  const week = Math.floor((date - start) / (7 * 864e5));
  return drills[week % drills.length];
}
