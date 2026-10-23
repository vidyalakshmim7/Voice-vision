/* VoicePay Vision – Redesigned | frontend demo only. No backend, no real payments. */
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- Translations ---------- */
const T = {
  en: {
    tagline:'Voice Based Payment Assistance for Blind and Visually Impaired', getStarted:'Get Started', login:'Login', selectLang:'Select Language',
    demoNote:'Frontend demo – no real payments are made.', createAcc:'Create Your Account', fullName:'Full Name', email:'Email Address', phone:'Phone Number',
    password:'Password', register:'Register', haveAcc:'Already have an account?', back:'Back', welcomeBack:'Welcome Back', emailPhone:'Email or Phone Number',
    forgot:'Forgot password?', noAcc:"Don't have an account?", hello:'Hello', goodToSee:'Good to see you again.', scanQR:'Scan QR', voiceAsst:'Voice Assistant',
    txHistory:'Transaction History', profile:'Profile', settings:'Settings', help:'Help', home:'Home', tapMic:'Tap the microphone and speak…', tryCmds:'Try saying:',
    noPayVoice:'Payments can never be approved by voice. They always need an on-screen confirmation.', manual:'Manual controls', scanTitle:'Scan QR Code',
    align:'Align the QR code within the frame', scan:'Scan', manualQR:'Enter QR data manually', submit:'Submit', useSample:'Use sample QR', cancel:'Cancel',
    vendorInfo:'Vendor Information', vendorDet:'Vendor Detected', vendorNote:'Read the vendor name carefully. A QR code cannot prove who the vendor is.',
    payAmt:'Payment Amount', confirmAmt:'Confirm Amount', listen:'Press to listen', payConfirm:'Payment Confirmation', amount:'Amount',
    mockWarn:'Simulated demo payment. No money will move. Fingerprint authentication is not available in this demo.',
    iConfirm:'I have checked the vendor and amount and I want to pay.', confirmHelp:'Tick the box, then press Pay Now. Voice commands cannot approve payments.',
    payNow:'Pay Now (Demo)', result:'Payment Result', simLabel:'Simulated demo payment', viewReceipt:'View Receipt', hearReceipt:'Press to hear receipt',
    returnHome:'Return to Dashboard', search:'Search vendor', all:'All', success:'Success', failed:'Failed', sampleData:'Sample data – not real transactions.',
    userProfile:'User Profile', personal:'Personal Information', saveProfile:'Save changes', changePw:'Change Password', langPref:'Language Preference', logout:'Logout',
    language:'Language', voiceSpeed:'Voice Speed', voiceVol:'Voice Volume', voiceGuide:'Voice guidance', notif:'Notifications', access:'Accessibility',
    bigText:'Larger text', contrast:'High contrast', testVoice:'Test voice', about:'About', reset:'Reset demo data', respView:'Mobile Responsive View',
    respNote:'The same app at phone width. Resize your browser to see tablet and desktop layouts.', processing:'Processing…', phName:'Enter your full name', phCreatePw:'Create a password (min 8)',
    phId:'Enter your email or phone number', phPw:'Enter your password',
    homeSpeak:'Home. Options are Scan QR, Voice Assistant, Transaction History, Profile, Settings and Help.',
    scanHelp:'Point the camera at a QR code and press Scan. If the camera is not available, use manual entry.',
    helpSpeak:'Help. Use the large buttons or the Voice Assistant. Payments always need an on-screen confirmation.',
    voiceIntro:'Tap the microphone and speak. You can say scan QR, transaction history, profile, settings or help.',
    noPay:'Payments cannot be approved by voice. Please use the on-screen confirmation.', unknownCmd:'Sorry, I did not understand that command.',
    noSR:'Voice recognition is not supported in this browser. Use the manual buttons.', listening:'Listening…', heardTxt:'Heard',
    errFill:'Please fill in all fields.', errMail:'Enter a valid email address.', errPhone:'Enter a valid 10-digit phone number.', errPw:'Password must be at least 8 characters.',
    errId:'Enter a valid email or 10-digit phone number.', loggedIn:'Logged in (demo).', registered:'Account created (demo).', badQR:'Invalid QR code. Expected format: VPV|Vendor|Location|Amount.',
    noCam:'Camera not available or permission denied. Use manual entry below.', noDetect:'QR detection is not supported in this browser. Use manual entry.', noQR:'No QR code found. Try again.',
    camOn:'Camera ready', paySuccess:'Payment Successful', payFail:'Payment Failed', paidMsg:'Demo payment completed.', failMsg:'The simulated payment did not go through. No money was taken.',
    vendor:'Vendor', ref:'Demo reference', dateTime:'Date & Time', statusL:'Status', details:'Details', saved:'Saved.', pwDemo:'Password change is not available in this demo.',
    forgotDemo:'Password reset is not available in this demo.', empty:'No transactions match your search.', loggedOut:'Logged out.', resetDone:'Demo data cleared.', demoLbl:'Demo'
  },
  ta: {
    tagline:'பார்வையற்றோர் மற்றும் பார்வைக் குறைபாடுள்ளோருக்கான குரல் வழி பணம் செலுத்தும் உதவி', getStarted:'தொடங்குக', login:'உள்நுழை', selectLang:'மொழி தேர்வு',
    demoNote:'இது டெமோ – உண்மையான பணம் செலுத்தப்படாது.', createAcc:'உங்கள் கணக்கை உருவாக்குங்கள்', fullName:'முழு பெயர்', email:'மின்னஞ்சல்', phone:'தொலைபேசி எண்',
    password:'கடவுச்சொல்', register:'பதிவு செய்', haveAcc:'ஏற்கனவே கணக்கு உள்ளதா?', back:'பின்', welcomeBack:'மீண்டும் வரவேற்கிறோம்', emailPhone:'மின்னஞ்சல் அல்லது தொலைபேசி',
    forgot:'கடவுச்சொல் மறந்துவிட்டதா?', noAcc:'கணக்கு இல்லையா?', hello:'வணக்கம்', goodToSee:'மீண்டும் சந்தித்ததில் மகிழ்ச்சி.', scanQR:'QR ஸ்கேன்', voiceAsst:'குரல் உதவியாளர்',
    txHistory:'பரிவர்த்தனை வரலாறு', profile:'சுயவிவரம்', settings:'அமைப்புகள்', help:'உதவி', home:'முகப்பு', tapMic:'மைக்கைத் தொட்டுப் பேசுங்கள்…', tryCmds:'இவ்வாறு சொல்லுங்கள்:',
    noPayVoice:'குரல் மூலம் பணம் செலுத்த அனுமதிக்க முடியாது. திரையில் உறுதிப்படுத்த வேண்டும்.', manual:'கைமுறை கட்டுப்பாடுகள்', scanTitle:'QR குறியீடு ஸ்கேன்',
    align:'QR குறியீட்டை சட்டத்துக்குள் வையுங்கள்', scan:'ஸ்கேன்', manualQR:'QR தரவை கைமுறையாக உள்ளிடுக', submit:'சமர்ப்பி', useSample:'மாதிரி QR', cancel:'ரத்து',
    vendorInfo:'விற்பனையாளர் தகவல்', vendorDet:'விற்பனையாளர் கண்டறியப்பட்டது', vendorNote:'விற்பனையாளர் பெயரை கவனமாகப் படியுங்கள். QR குறியீடு விற்பனையாளரை உறுதிசெய்யாது.',
    payAmt:'செலுத்த வேண்டிய தொகை', confirmAmt:'தொகையை உறுதிசெய்', listen:'கேட்க அழுத்தவும்', payConfirm:'பணம் செலுத்த உறுதி', amount:'தொகை',
    mockWarn:'இது டெமோ பணப்பரிவர்த்தனை. பணம் செல்லாது. கைரேகை அங்கீகாரம் இந்த டெமோவில் இல்லை.',
    iConfirm:'விற்பனையாளரையும் தொகையையும் சரிபார்த்தேன்; பணம் செலுத்த விரும்புகிறேன்.', confirmHelp:'பெட்டியைத் தேர்ந்து, இப்போது செலுத்து என்பதை அழுத்தவும். குரல் கட்டளையால் செலுத்த முடியாது.',
    payNow:'இப்போது செலுத்து (டெமோ)', result:'பணம் செலுத்தும் முடிவு', simLabel:'டெமோ பணப்பரிவர்த்தனை', viewReceipt:'ரசீது பார்', hearReceipt:'ரசீது கேட்க அழுத்தவும்',
    returnHome:'முகப்புக்குத் திரும்பு', search:'விற்பனையாளர் தேடு', all:'அனைத்தும்', success:'வெற்றி', failed:'தோல்வி', sampleData:'மாதிரி தரவு – உண்மையான பரிவர்த்தனைகள் அல்ல.',
    userProfile:'பயனர் சுயவிவரம்', personal:'தனிப்பட்ட தகவல்', saveProfile:'மாற்றங்களைச் சேமி', changePw:'கடவுச்சொல் மாற்று', langPref:'மொழி விருப்பம்', logout:'வெளியேறு',
    language:'மொழி', voiceSpeed:'குரல் வேகம்', voiceVol:'குரல் ஒலி அளவு', voiceGuide:'குரல் வழிகாட்டல்', notif:'அறிவிப்புகள்', access:'அணுகல்தன்மை',
    bigText:'பெரிய எழுத்து', contrast:'அதிக மாறுபாடு', testVoice:'குரலைச் சோதி', about:'பற்றி', reset:'டெமோ தரவை அழி', respView:'மொபைல் காட்சி',
    respNote:'அதே செயலி தொலைபேசி அகலத்தில். டேப்லெட், கணினி தோற்றத்தைக் காண உலாவியின் அளவை மாற்றுங்கள்.', processing:'செயலாக்கப்படுகிறது…', phName:'முழு பெயரை உள்ளிடுக', phCreatePw:'கடவுச்சொல் (குறைந்தது 8)',
    phId:'மின்னஞ்சல் அல்லது தொலைபேசி எண்', phPw:'கடவுச்சொல்லை உள்ளிடுக',
    homeSpeak:'முகப்பு. QR ஸ்கேன், குரல் உதவியாளர், பரிவர்த்தனை வரலாறு, சுயவிவரம், அமைப்புகள், உதவி ஆகியவை உள்ளன.',
    scanHelp:'கேமராவை QR குறியீடு மீது காட்டி ஸ்கேன் அழுத்தவும். கேமரா இல்லையெனில் கைமுறையாக உள்ளிடவும்.',
    helpSpeak:'உதவி. பெரிய பொத்தான்களை அல்லது குரல் உதவியாளரைப் பயன்படுத்துங்கள். பணம் செலுத்த திரையில் உறுதிப்படுத்த வேண்டும்.',
    voiceIntro:'மைக்கைத் தொட்டுப் பேசுங்கள். QR ஸ்கேன், பரிவர்த்தனை வரலாறு, சுயவிவரம், அமைப்புகள், உதவி எனச் சொல்லலாம்.',
    noPay:'குரலால் பணம் செலுத்த முடியாது. திரையில் உறுதிப்படுத்துங்கள்.', unknownCmd:'மன்னிக்கவும், கட்டளை புரியவில்லை.',
    noSR:'இந்த உலாவியில் குரல் அறிதல் இல்லை. கைமுறை பொத்தான்களைப் பயன்படுத்துங்கள்.', listening:'கேட்கிறேன்…', heardTxt:'கேட்டது',
    errFill:'அனைத்து புலங்களையும் நிரப்புங்கள்.', errMail:'சரியான மின்னஞ்சலை உள்ளிடுக.', errPhone:'சரியான 10 இலக்க எண்ணை உள்ளிடுக.', errPw:'கடவுச்சொல் குறைந்தது 8 எழுத்துகள்.',
    errId:'சரியான மின்னஞ்சல் அல்லது 10 இலக்க எண்ணை உள்ளிடுக.', loggedIn:'உள்நுழைந்தீர்கள் (டெமோ).', registered:'கணக்கு உருவாக்கப்பட்டது (டெமோ).', badQR:'தவறான QR. வடிவம்: VPV|விற்பனையாளர்|இடம்|தொகை.',
    noCam:'கேமரா கிடைக்கவில்லை அல்லது அனுமதி மறுக்கப்பட்டது. கீழே கைமுறையாக உள்ளிடுக.', noDetect:'இந்த உலாவியில் QR கண்டறிதல் இல்லை. கைமுறையாக உள்ளிடுக.', noQR:'QR கிடைக்கவில்லை. மீண்டும் முயலவும்.',
    camOn:'கேமரா தயார்', paySuccess:'பணம் செலுத்தப்பட்டது', payFail:'பணம் செலுத்த முடியவில்லை', paidMsg:'டெமோ பணப்பரிவர்த்தனை முடிந்தது.', failMsg:'டெமோ பரிவர்த்தனை தோல்வியடைந்தது. பணம் எடுக்கப்படவில்லை.',
    vendor:'விற்பனையாளர்', ref:'டெமோ குறிப்பு எண்', dateTime:'தேதி & நேரம்', statusL:'நிலை', details:'விவரங்கள்', saved:'சேமிக்கப்பட்டது.', pwDemo:'கடவுச்சொல் மாற்றம் டெமோவில் இல்லை.',
    forgotDemo:'கடவுச்சொல் மீட்பு டெமோவில் இல்லை.', empty:'பொருந்தும் பரிவர்த்தனைகள் இல்லை.', loggedOut:'வெளியேறினீர்கள்.', resetDone:'டெமோ தரவு அழிக்கப்பட்டது.', demoLbl:'டெமோ'
  }
};

/* ---------- State (Local Storage). Passwords are NEVER stored. ---------- */
const KEY = 'vpv_demo';
const SAMPLE = [
  { vendor:'Ramesh Store', amount:50, date:'2025-04-18T10:30', status:'success', ref:'SAMPLE-001' },
  { vendor:'Tea Stall', amount:20, date:'2025-04-17T16:15', status:'success', ref:'SAMPLE-002' },
  { vendor:'Mobile Shop', amount:150, date:'2025-04-16T12:20', status:'failed', ref:'SAMPLE-003' },
  { vendor:'Super Market', amount:75, date:'2025-04-15T11:10', status:'success', ref:'SAMPLE-004' }
];
const DEFAULTS = { lang:'en', speed:'1', vol:'1', voice:true, notif:true, big:false, contrast:false,
  user:{ name:'Kumar', email:'kumar@example.com', phone:'+91 98765 43210' }, logged:false, history:[] };
let S;
try { S = Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch { S = { ...DEFAULTS }; }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} };
const t = k => (T[S.lang] && T[S.lang][k]) || T.en[k] || k;

/* ---------- UI helpers ---------- */
let toastTimer;
function toast(msg) { const el = $('#toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 3200); }
function loading(on) { $('#loader').hidden = !on; }
const fmt = n => '₹ ' + Number(n).toFixed(2);
const fmtDate = iso => new Date(iso).toLocaleString(S.lang === 'ta' ? 'ta-IN' : 'en-IN', { dateStyle:'medium', timeStyle:'short' });

/* ---------- Text to speech ---------- */
function speak(text, force) {
  if (!('speechSynthesis' in window) || (!S.voice && !force)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = S.lang === 'ta' ? 'ta-IN' : 'en-IN'; u.rate = +S.speed; u.volume = +S.vol;
  speechSynthesis.speak(u);
}

/* ---------- Navigation ---------- */
const stack = [];
let current = 'welcome';
function go(id, push = true) {
  if (!$('#s-' + id)) return;
  if (current === 'scan' && id !== 'scan') stopCam();
  if (current === 'voice' && id !== 'voice') stopListen();
  if (push && id !== current) stack.push(current);
  $$('.screen').forEach(s => s.classList.toggle('active', s.id === 's-' + id));
  current = id; window.scrollTo(0, 0);
  if (id === 'scan') startCam();
  if (id === 'history') renderHistory();
  if (id === 'profile') renderProfile();
  if (id === 'settings') loadSettings();
  if (id === 'confirm') { $('#cCheck').checked = false; $('#payBtn').disabled = true; }
  if (id === 'home') $('#s-home .uname')?.replaceChildren(S.user.name);
}
const back = () => go(stack.pop() || 'home', false);

/* ---------- Language ---------- */
function applyLang() {
  document.documentElement.lang = S.lang;
  $$('[data-i18n]').forEach(e => { e.textContent = t(e.dataset.i18n); });
  $$('[data-i18n-ph]').forEach(e => { e.placeholder = t(e.dataset.i18nPh); });
  $$('.langs button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === S.lang)));
  $$('[data-tabs]').forEach(renderTabs);
  $('#langVal').textContent = S.lang === 'ta' ? 'தமிழ்' : 'English';
  if ($('#setLang')) $('#setLang').value = S.lang;
  if (current === 'history') renderHistory();
}
function setLang(l) { S.lang = l; save(); applyLang(); speak(l === 'ta' ? 'தமிழ்' : 'English'); }
function buildLangButtons() {
  $$('.langs').forEach(box => {
    box.innerHTML = '<button type="button" data-lang="en">English</button><button type="button" data-lang="ta">தமிழ்</button>';
    $$('button', box).forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  });
}
function renderTabs(nav) {
  const items = [['home','🏠','home'],['history','🕒','txHistory'],['profile','👤','profile'],['settings','⚙','settings']];
  nav.innerHTML = items.map(([id, ic, k]) => `<button data-go="${id}" class="${id === nav.dataset.tabs ? 'on' : ''}" ${id === nav.dataset.tabs ? 'aria-current="page"' : ''}><div>${ic}</div>${t(k)}</button>`).join('');
}

/* ---------- Forms ---------- */
const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, rePhone = /^(\+91[\s-]?)?[6-9]\d{9}$/;
$('#regForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#rName').value.trim(), email = $('#rEmail').value.trim(), phone = $('#rPhone').value.trim(), pw = $('#rPass').value;
  const err = !name || !email || !phone || !pw ? 'errFill' : !reEmail.test(email) ? 'errMail' : !rePhone.test(phone.replace(/\s/g, '')) ? 'errPhone' : pw.length < 8 ? 'errPw' : '';
  $('#regErr').textContent = err ? t(err) : '';
  if (err) return speak(t(err));
  S.user = { name, email, phone }; S.logged = true; save(); $('#rPass').value = '';   // password is discarded
  loading(true); setTimeout(() => { loading(false); toast(t('registered')); speak(t('registered')); go('home'); }, 700);
});
$('#loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const id = $('#lId').value.trim(), pw = $('#lPass').value;
  const err = !id || !pw ? 'errFill' : !(reEmail.test(id) || rePhone.test(id.replace(/\s/g, ''))) ? 'errId' : pw.length < 8 ? 'errPw' : '';
  $('#loginErr').textContent = err ? t(err) : '';
  if (err) return speak(t(err));
  S.logged = true; save(); $('#lPass').value = '';
  loading(true); setTimeout(() => { loading(false); toast(t('loggedIn')); go('home'); speak(t('homeSpeak')); }, 700);
});
$('#showPw').addEventListener('click', e => {
  const i = $('#lPass'), show = i.type === 'password'; i.type = show ? 'text' : 'password'; e.currentTarget.setAttribute('aria-pressed', String(show));
});
$('#forgot').addEventListener('click', e => { e.preventDefault(); toast(t('forgotDemo')); });

/* ---------- Voice assistant ---------- */
let rec = null;
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
function stopListen() { if (rec) { try { rec.stop(); } catch {} rec = null; } $('#mic').classList.remove('on'); }
function toggleListen() {
  if (!SR) { $('#micStatus').textContent = t('noSR'); speak(t('noSR'), true); return; }
  if (rec) return stopListen();
  rec = new SR(); rec.lang = S.lang === 'ta' ? 'ta-IN' : 'en-IN'; rec.interimResults = false; rec.maxAlternatives = 1;
  rec.onstart = () => { $('#mic').classList.add('on'); $('#micStatus').textContent = t('listening'); };
  rec.onresult = e => { const said = e.results[0][0].transcript; $('#heard').textContent = t('heardTxt') + ': “' + said + '”'; handleCommand(said.toLowerCase()); };
  rec.onerror = e => { $('#micStatus').textContent = e.error === 'not-allowed' ? t('noSR') : t('tapMic'); };
  rec.onend = () => { $('#mic').classList.remove('on'); rec = null; if ($('#micStatus').textContent === t('listening')) $('#micStatus').textContent = t('tapMic'); };
  try { rec.start(); } catch { stopListen(); }
}
function handleCommand(c) {
  const has = re => re.test(c);
  if (has(/\b(pay|confirm|authori[sz]e|approve)\b|செலுத்து|உறுதி/)) { toast(t('noPay')); return speak(t('noPay'), true); }   // voice can never authorize payments
  if (has(/scan|qr|ஸ்கேன்/)) return go('scan');
  if (has(/history|transaction|வரலாறு|பரிவர்த்தனை/)) return go('history');
  if (has(/profile|சுயவிவரம்/)) return go('profile');
  if (has(/setting|அமைப்பு/)) return go('settings');
  if (has(/help|உதவி/)) return $('#helpBtn').click();
  if (has(/home|dashboard|முகப்பு/)) return go('home');
  if (has(/tamil|தமிழ்/)) return setLang('ta');
  if (has(/english|ஆங்கிலம்/)) return setLang('en');
  speak(t('unknownCmd'), true); toast(t('unknownCmd'));
}
$('#mic').addEventListener('click', toggleListen);
$('#repeat').addEventListener('click', () => speak(t('voiceIntro'), true));

/* ---------- QR scanner ---------- */
let stream = null, detector = null;
async function startCam() {
  $('#scanErr').textContent = ''; $('#camMsg').textContent = '';
  if (document.body.classList.contains('preview')) return;   // no camera inside the preview frames
  if (!navigator.mediaDevices?.getUserMedia) { $('#camMsg').textContent = t('noCam'); return; }
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video:{ facingMode:'environment' }, audio:false });
    $('#video').srcObject = stream; await $('#video').play(); $('#camMsg').textContent = t('camOn');
    if ('BarcodeDetector' in window) detector = new BarcodeDetector({ formats:['qr_code'] });
  } catch { $('#camMsg').textContent = t('noCam'); speak(t('noCam')); }
}
function stopCam() { if (stream) stream.getTracks().forEach(tr => tr.stop()); stream = null; $('#video').srcObject = null; }
async function scanNow() {
  $('#scanErr').textContent = '';
  if (!stream) return showScanErr('noCam');
  if (!detector) return showScanErr('noDetect');
  try { const r = await detector.detect($('#video')); r.length ? processQR(r[0].rawValue) : showScanErr('noQR'); } catch { showScanErr('noQR'); }
}
function showScanErr(k) { $('#scanErr').textContent = t(k); speak(t(k)); }
/* Demo format: VPV|Vendor name|Location|Amount  (a QR code cannot prove vendor identity) */
let pending = null;
function processQR(raw) {
  const m = /^VPV\|([^|]{2,40})\|([^|]{0,40})\|(\d{1,6}(?:\.\d{1,2})?)$/.exec(String(raw).trim());
  if (!m || +m[3] <= 0) return showScanErr('badQR');
  pending = { vendor:m[1].trim(), loc:m[2].trim(), amount:+m[3] };
  stopCam();
  $('#vName').textContent = pending.vendor; $('#vLoc').textContent = pending.loc || '';
  $('#vAmt').textContent = fmt(pending.amount);
  go('vendor'); readVendor();
}
const readVendor = () => pending && speak(`${t('vendorDet')}. ${pending.vendor}. ${pending.loc}. ${t('payAmt')}: ${pending.amount} rupees.`);
$('#scanBtn').addEventListener('click', scanNow);
$('#torch').addEventListener('click', () => { stopCam(); startCam(); });
$('#qrSubmit').addEventListener('click', () => processQR($('#qrManual').value));
$('#qrSample').addEventListener('click', () => { $('#qrManual').value = 'VPV|Ramesh Store|Tamil Nadu|50.00'; });
$('#vRead').addEventListener('click', () => { if (pending) speak(`${pending.vendor}. ${pending.loc}. ${pending.amount} rupees.`, true); });
$('#vConfirm').addEventListener('click', () => {
  if (!pending) return go('scan');
  $('#cName').textContent = pending.vendor; $('#cLoc').textContent = pending.loc || ''; $('#cAmt').textContent = fmt(pending.amount);
  go('confirm'); speak(`${t('payConfirm')}. ${pending.vendor}. ${pending.amount} rupees. ${t('confirmHelp')}`);
});

/* ---------- Payment (simulated; explicit on-screen control only) ---------- */
let lastTx = null;
$('#cCheck').addEventListener('change', e => { $('#payBtn').disabled = !e.target.checked; });
$('#payBtn').addEventListener('click', () => {
  if (!pending || !$('#cCheck').checked) return;           // requires the on-screen tick + click
  loading(true);
  setTimeout(() => {
    loading(false);
    const ok = Math.random() < 0.85;
    lastTx = { vendor:pending.vendor, amount:pending.amount, date:new Date().toISOString(), status:ok ? 'success' : 'failed',
      ref:'DEMO-' + Date.now().toString(36).toUpperCase() };
    S.history.unshift(lastTx); S.history = S.history.slice(0, 30); save();
    showResult(lastTx); pending = null;
  }, 1600);
});
function showResult(x) {
  const ok = x.status === 'success';
  $('#rIcon').textContent = ok ? '✔' : '✖'; $('#rIcon').className = 'status' + (ok ? '' : ' fail');
  $('#rTitle').textContent = t(ok ? 'paySuccess' : 'payFail'); $('#rMsg').textContent = t(ok ? 'paidMsg' : 'failMsg');
  $('#rDetail').innerHTML = rows(x); $('#receipt').hidden = true;
  go('result'); speak(`${t(ok ? 'paySuccess' : 'payFail')}. ${x.vendor}. ${x.amount} rupees.`);
}
const rows = x => `<div><span>${t('vendor')}</span><b>${esc(x.vendor)}</b></div><div><span>${t('amount')}</span><b>${fmt(x.amount)}</b></div>
  <div><span>${t('ref')}</span><b>${x.ref}</b></div><div><span>${t('dateTime')}</span><b>${fmtDate(x.date)}</b></div>`;
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c])); }
$('#viewReceipt').addEventListener('click', () => {
  if (!lastTx) return; const r = $('#receipt');
  r.innerHTML = `<b>${t('simLabel')}</b>` + rows(lastTx) + `<div><span>${t('statusL')}</span><b>${t(lastTx.status)}</b></div>`; r.hidden = !r.hidden;
});
$('#audioReceipt').addEventListener('click', () => lastTx && speak(`${t(lastTx.status === 'success' ? 'paySuccess' : 'payFail')}. ${lastTx.vendor}. ${lastTx.amount} rupees. ${t('simLabel')}. ${t('ref')} ${lastTx.ref.split('').join(' ')}.`, true));

/* ---------- History ---------- */
function renderHistory() {
  const q = $('#hSearch').value.trim().toLowerCase(), f = $('#hFilter').value;
  const all = [...S.history, ...SAMPLE].filter(x => (f === 'all' || x.status === f) && x.vendor.toLowerCase().includes(q));
  $('#hList').innerHTML = all.length ? all.map((x, i) => `
    <button class="card tx" data-i="${i}" aria-expanded="false"><span class="avatar">${x.status === 'success' ? '✔' : '✖'}</span>
      <span class="grow"><b>${esc(x.vendor)}</b><small>${fmtDate(x.date)}</small></span>
      <span style="text-align:right"><b>${fmt(x.amount)}</b><br><span class="${x.status === 'success' ? 'ok' : 'bad'}">${t(x.status)}</span></span></button>
    <div class="card tx-d" id="d${i}" hidden>${rows(x)}<small>${x.ref.startsWith('SAMPLE') ? t('sampleData') : t('simLabel')}</small></div>`).join('') : `<p class="center">${t('empty')}</p>`;
  $$('.tx').forEach(b => b.addEventListener('click', () => { const d = $('#d' + b.dataset.i); d.hidden = !d.hidden; b.setAttribute('aria-expanded', String(!d.hidden)); }));
}
$('#hSearch').addEventListener('input', renderHistory); $('#hFilter').addEventListener('change', renderHistory);

/* ---------- Profile ---------- */
function renderProfile() {
  $$('#s-profile .uname, #s-home .uname').forEach(e => e.textContent = S.user.name);
  $('#pMail').textContent = S.user.email; $('#pPhone').textContent = S.user.phone;
  $('#eName').value = S.user.name; $('#eEmail').value = S.user.email; $('#ePhone').value = S.user.phone;
}
$('#editToggle').addEventListener('click', () => { $('#editForm').hidden = !$('#editForm').hidden; });
$('#editForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#eName').value.trim(), email = $('#eEmail').value.trim(), phone = $('#ePhone').value.trim();
  const err = !name ? 'errFill' : !reEmail.test(email) ? 'errMail' : !rePhone.test(phone.replace(/\s/g, '')) ? 'errPhone' : '';
  $('#editErr').textContent = err ? t(err) : ''; if (err) return;
  S.user = { name, email, phone }; save(); renderProfile(); $('#editForm').hidden = true; toast(t('saved'));
});
$('#chPw').addEventListener('click', () => toast(t('pwDemo')));
$('#langRow').addEventListener('click', () => setLang(S.lang === 'en' ? 'ta' : 'en'));
$('#logout').addEventListener('click', () => { S.logged = false; save(); stack.length = 0; toast(t('loggedOut')); go('welcome', false); });

/* ---------- Settings ---------- */
function loadSettings() {
  $('#setSpeed').value = S.speed; $('#setVol').value = S.vol; $('#setVoice').checked = S.voice; $('#setNotif').checked = S.notif;
  $('#setBig').checked = S.big; $('#setContrast').checked = S.contrast; $('#setLang').value = S.lang;
}
function applyA11y() { document.body.classList.toggle('big', S.big); document.body.classList.toggle('contrast', S.contrast); }
$('#setLang').addEventListener('change', e => setLang(e.target.value));
$('#setSpeed').addEventListener('change', e => { S.speed = e.target.value; save(); });
$('#setVol').addEventListener('input', e => { S.vol = e.target.value; save(); });
[['setVoice','voice'],['setNotif','notif'],['setBig','big'],['setContrast','contrast']].forEach(([id, k]) =>
  $('#' + id).addEventListener('change', e => { S[k] = e.target.checked; save(); applyA11y(); }));
$('#testVoice').addEventListener('click', () => speak(t('voiceIntro'), true));
$('#resetDemo').addEventListener('click', () => { localStorage.removeItem(KEY); S = { ...DEFAULTS, user:{ ...DEFAULTS.user }, history:[] }; applyA11y(); applyLang(); loadSettings(); toast(t('resetDone')); });
$('#helpBtn').addEventListener('click', () => { toast(t('helpSpeak')); speak(t('helpSpeak')); });

/* ---------- Wiring & start ---------- */
document.addEventListener('click', e => {
  const g = e.target.closest('[data-go]'); if (g) { e.preventDefault(); go(g.dataset.go); return; }
  if (e.target.closest('[data-back]')) return back();
  const s = e.target.closest('[data-speak]'); if (s) speak(t(s.dataset.speak), true);
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && current !== 'home' && current !== 'welcome') back(); });

buildLangButtons(); applyA11y(); applyLang();
const isPreview = new URLSearchParams(location.search).has('preview');
if (isPreview) document.body.classList.add('preview');
const start = location.hash.slice(1);
go($('#s-' + start) && isPreview ? start : 'welcome', false);
