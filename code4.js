gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.idToCallbackMap = new Map();
gdjs.LobbyCode.GDBgLobbyObjects1= [];
gdjs.LobbyCode.GDBtnBuatObjects1= [];
gdjs.LobbyCode.GDBtnGabungObjects1= [];
gdjs.LobbyCode.GDBtnCloseObjects1= [];
gdjs.LobbyCode.GDJudulLobbyObjects1= [];
gdjs.LobbyCode.GDBidakObjects1= [];
gdjs.LobbyCode.GDSorotObjects1= [];
gdjs.LobbyCode.GDLapanganObjects1= [];
gdjs.LobbyCode.GDMejaObjects1= [];
gdjs.LobbyCode.GDLatarObjects1= [];
gdjs.LobbyCode.GDPanelObjects1= [];
gdjs.LobbyCode.GDKartuObjects1= [];
gdjs.LobbyCode.GDTombolObjects1= [];
gdjs.LobbyCode.GDPapanObjects1= [];
gdjs.LobbyCode.GDTeksObjects1= [];
gdjs.LobbyCode.GDKotakObjects1= [];
gdjs.LobbyCode.GDUiObjects1= [];
gdjs.LobbyCode.GDKartuBesarObjects1= [];
gdjs.LobbyCode.GDPrev_9595bidak_9595K0Objects1= [];
gdjs.LobbyCode.GDPrev_9595bidak_9595K1Objects1= [];
gdjs.LobbyCode.GDPrev_9595bidak_9595P0Objects1= [];
gdjs.LobbyCode.GDPrev_9595bidak_9595N0Objects1= [];
gdjs.LobbyCode.GDPrev_9595bidak_9595R1Objects1= [];
gdjs.LobbyCode.GDPrev_9595bidak_9595Q1Objects1= [];
gdjs.LobbyCode.GDPrev_9595bidak_9595B0Objects1= [];
gdjs.LobbyCode.GDPrev_9595sorot_9595skakObjects1= [];
gdjs.LobbyCode.GDPrev_9595prev_9595dimObjects1= [];
gdjs.LobbyCode.GDPrev_9595prev_9595c_9595trackObjects1= [];
gdjs.LobbyCode.GDPrev_9595prev_9595c_9595greenObjects1= [];
gdjs.LobbyCode.GDPrev_9595prev_9595c_9595glossObjects1= [];
gdjs.LobbyCode.GDPrev_9595ui_9595hp_9595frameObjects1= [];
gdjs.LobbyCode.GDPrev_9595prev_9595c_9595ghostObjects1= [];
gdjs.LobbyCode.GDPrev_9595prev_9595c_9595p1Objects1= [];
gdjs.LobbyCode.GDPrev_9595Teks1Objects1= [];
gdjs.LobbyCode.GDPrev_9595Teks2Objects1= [];
gdjs.LobbyCode.GDPrev_9595Teks3Objects1= [];
gdjs.LobbyCode.GDPrev_9595Teks4Objects1= [];
gdjs.LobbyCode.GDPrev_9595ui_9595bannerObjects1= [];
gdjs.LobbyCode.GDPrev_9595Teks5Objects1= [];
gdjs.LobbyCode.GDPrev_9595Teks6Objects1= [];
gdjs.LobbyCode.GDPrev_9595prev_9595titik_9595onObjects1= [];
gdjs.LobbyCode.GDPrev_9595prev_9595titik_9595offObjects1= [];
gdjs.LobbyCode.GDPrev_9595ui_9595panelObjects1= [];
gdjs.LobbyCode.GDPrev_9595Teks7Objects1= [];
gdjs.LobbyCode.GDPrev_9595Teks8Objects1= [];
gdjs.LobbyCode.GDPrev_9595Teks9Objects1= [];
gdjs.LobbyCode.GDPrev_9595Teks10Objects1= [];
gdjs.LobbyCode.GDPrev_9595Teks11Objects1= [];
gdjs.LobbyCode.GDPrev_9595Teks12Objects1= [];
gdjs.LobbyCode.GDPrev_9595Teks13Objects1= [];
gdjs.LobbyCode.GDPrev_9595Teks14Objects1= [];
gdjs.LobbyCode.GDPrev_9595kartu_9595depan_9595P0Objects1= [];
gdjs.LobbyCode.GDPrev_9595kartu_9595depan_9595Q0Objects1= [];
gdjs.LobbyCode.GDPrev_9595kartu_9595belakangObjects1= [];


gdjs.LobbyCode.userFunc0xa55c70 = function GDJSInlineCode(runtimeScene) {
"use strict";
/* ===== FULLSCREEN FIT: layar penuh, konten 1280x720 tetap di tengah, latar menutupi sisa ruang ===== */
(function(){try{const sc=runtimeScene,g=sc.getGame(),BW=1280,BH=720,K=1.5;const iw=window.innerWidth,ih=window.innerHeight;if(!iw||!ih)return;
const ar=iw/ih;let W=BW,H=BH;if(ar>BW/BH)W=Math.round(BH*ar);else H=Math.round(BW/ar);
const F=window.__skFit=window.__skFit||{};const RW=Math.round(W*K),RH=Math.round(H*K),ch=(g.getGameResolutionWidth()!==RW||g.getGameResolutionHeight()!==RH);
if(ch)g.setGameResolutionSize(RW,RH);
F.x0=BW/2-W/2;F.y0=BH/2-H/2;F.w=W;F.h=H;
if(ch||sc.__skFitOn!==1){sc.__skFitOn=1;const L=sc.getLayer('');L.setCameraX(BW/2);L.setCameraY(BH/2);L.setCameraZoom(K);
const s=Math.max(W/BW,H/BH);
['BgLoading','BgMenu','BgMode','BgLobby','Latar'].forEach(n=>{try{sc.getObjects(n).forEach(o=>{o.setWidth(BW*s);o.setHeight(BH*s);o.setPosition(BW/2-BW*s/2,BH/2-BH*s/2)})}catch(e){}})}
}catch(e){}})();

const SKS=(function(){const G=runtimeScene.getGame();if(G.__SK)return G.__SK;
const K=G.__SK={bgm:null,vq:[],pump:false,tm:null,lastV:0};
const SM=()=>G.getSoundManager();
const DUR={'skak.wav':1.06,'tenang raja.wav':3.52,'aku akan berkorban untukmu raja.wav':2.8,'kami akan berkorban untukmu raja.wav':3.84,'maaf raja.wav':2.76,'sial.wav':2.68,'tidak akan kubiarkan.wav':2.84,'haha rasakan.wav':2.04,'kalahkan mereka.wav':2.28,'kerja bagus prajuritku.wav':1.96,'kita menang raja.wav':2.28};
const pick=a=>a[Math.floor(Math.random()*a.length)];
/* efek & musik */
K.sfx=(n,v)=>{try{SM().playSound(n,false,v==null?100:v,1)}catch(e){}};
K.music=n=>{if(K.bgm===n)return;K.bgm=n;try{SM().playMusicOnChannel(n,0,true,60,1)}catch(e){}};
/* suara karakter: diputar berurutan (antrian) supaya tidak bertumpuk */
K.next=()=>{if(K.pump)return;const n=K.vq.shift();if(!n)return;K.pump=true;K.lastV=Date.now();
try{SM().playSoundOnChannel(n,7,false,100,1)}catch(e){}
K.tm=setTimeout(()=>{K.pump=false;K.next()},(DUR[n]||2.5)*1000+120)};
K.stopVoice=()=>{K.vq=[];K.lastV=0;clearTimeout(K.tm);K.pump=false;try{const s=SM().getSoundOnChannel(7);if(s)s.stop()}catch(e){}};
K.say=(n,prio)=>{if(prio)K.stopVoice();K.vq.push(n);while(K.vq.length>3)K.vq.shift();K.next()};
/* kejadian game */
K.click=()=>K.sfx('Cute Pop Up - OhmLab.wav');
K.popup=()=>K.sfx('pop-up.wav');
K.place=()=>K.sfx('Chess Piece Movement 1.wav');
/* makan: Impact selalu; voice hanya kadang (peluang VO_CHANCE), 1 saja, dan tidak boleh bertumpuk/terlalu sering */
const VO_CHANCE=0.4,VO_GAP=6000;
K.capture=()=>{K.sfx('Impact Character Hit.wav');
if(Math.random()<VO_CHANCE&&!K.pump&&Date.now()-K.lastV>VO_GAP)K.say(pick(['haha rasakan.wav','kalahkan mereka.wav','maaf raja.wav','sial.wav','tidak akan kubiarkan.wav']))};
/* skak: 1 voice saja (skak / tenang raja, acak); menggantikan antrean yang menunggu */
K.check=()=>{K.vq=[];K.say(pick(['skak.wav','tenang raja.wav']))};
K.skill=n=>{K.sfx('Impact Character Hit.wav');K.say(n>=2?'kami akan berkorban untukmu raja.wav':'aku akan berkorban untukmu raja.wav',true)};
K.win=()=>{K.sfx('Win Sound.wav');K.say(pick(['kerja bagus prajuritku.wav','kita menang raja.wav']),true)};
return K})();
SKS.music('Game Crafting Looped Version 1.wav');
const sc=runtimeScene,G=sc.getGame(),im=G.getInputManager();
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const ease=t=>1-Math.pow(1-t,3);
if(!sc.__m){
const M=sc.__m={t:0,ft:0,lt:0,leave:null,sent:false};
/* overlay hitam untuk transisi fade antar layout */
const f=sc.createObject('Kotak');f.setPosition(window.__skFit.x0,window.__skFit.y0);f.setWidth(window.__skFit.w);f.setHeight(window.__skFit.h);f.setColor('0;0;0');f.setZOrder(1000);f.setOpacity(255);M.f=f;
M.cur=on=>{try{G.getRenderer().getCanvas().style.cursor=on?'pointer':''}catch(e){}};
/* pindah layout (dengan fade). mode = 'ai' | 'lokal' | 'online' disimpan ke variabel global Mode */
M.go=(scene,mode)=>{if(M.leave)return;if(mode){try{G.getVariables().get('Mode').setString(mode)}catch(e){}
if(mode!=='online'&&G.__online){try{G.__online.peer.destroy()}catch(e){}G.__online=null}}M.leave=scene;M.lt=0;M.cur(false)};
/* tombol / gambar: ambil posisi & ukuran dari instance di editor */
M.btn=(name,dw,dh)=>{const o=sc.getObjects(name)[0];if(!o)return null;let w=o.getWidth(),h=o.getHeight();if(!(w>0))w=dw;if(!(h>0))h=dh;
return{o:o,cx:o.getX()+w/2,cy:o.getY()+h/2,w:w,h:h,k:0,v:0,show:true,d:0,dy:0}};
M.place=b=>{const k=Math.max(0.001,b.k),w=b.w*k,h=b.h*k;b.o.setWidth(w);b.o.setHeight(h);b.o.setPosition(b.cx-w/2,b.cy+b.dy-h/2);b.o.hide(b.k<0.03)};
M.spring=(b,tk,dt)=>{b.v+=((tk-b.k)*220-16*b.v)*dt;b.k+=b.v*dt};
M.hit=(b,x,y)=>b.k>0.7&&Math.abs(x-b.cx)<=b.w/2&&Math.abs(y-b.cy-b.dy)<=b.h/2;
M.mkt=(s,sz,col,ol)=>{const o=sc.createObject('Teks');o.setCharacterSize(sz);o.setColor(col);if(o.setBold)o.setBold(true);if(ol&&o.setOutlineColor)o.setOutlineColor(ol);o.setText(s);o.setZOrder(50);return o};
M.box=(x,y,w,h,col,z,op)=>{const o=sc.createObject('Kotak');o.setPosition(x,y);o.setWidth(w);o.setHeight(h);o.setColor(col);o.setZOrder(z);if(op!=null)o.setOpacity(op);return o};

/* ===== LOBBY ONLINE (P2P lewat PeerJS) ===== */
/* ---------- PENGATURAN ONLINE (ubah di sini) ---------- */
const PEERJS_URLS=['https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js','https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js'];
const BROKER={host:'',port:443,path:'/',secure:true,key:'peerjs'};   // host kosong = pakai server publik PeerJS
const ICE=[{urls:'stun:stun.l.google.com:19302'},{urls:'stun:stun1.l.google.com:19302'}];  // tambah TURN: {urls:'turn:alamat:3478',username:'u',credential:'p'}
const PREFIX='skartu26-';
/* ------------------------------------------------------ */
const T=sc.getObjects('JudulLobby')[0],TY=T?T.getY():120;
const B={buat:M.btn('BtnBuat',440,130),gabung:M.btn('BtnGabung',440,130),close:M.btn('BtnClose',72,72)};
B.buat.d=0.2;B.gabung.d=0.35;B.close.d=0.5;
const st={mode:'choose',peer:null,conn:null,code:'',entered:'',msg:'',err:false,connecting:false,done:false,tok:0,to:null};
const BRN='110;70;40';
const panel=M.box(250,215,780,330,'255;248;225',3,0);
const tLbl=M.mkt('',26,BRN),tCode=M.mkt('',110,BRN),tInfo=M.mkt('',26,BRN),tHint=M.mkt('',22,'150;108;72');
const ctr=(o,y)=>{const w=o.getWidth();o.setPosition(640-(w>0?w/2:0),y)};
const KL=['1','2','3','4','5','6','7','8','9','DEL','0','OK'],KW=84,KH=58,KG=10,KX=640-(3*KW+2*KG)/2,KY=345;
st.keys=KL.map((l,i)=>{const c=i%3,r=(i/3)|0,x=KX+c*(KW+KG),y=KY+r*(KH+KG);
const o1=M.box(x,y,KW,KH,'60;38;26',20),o2=M.box(x+3,y+3,KW-6,KH-6,'250;232;190',21),tx=M.mkt(l,l.length>1?24:32,BRN);tx.setZOrder(22);
return{x:x,y:y,l:l,o1:o1,o2:o2,tx:tx}});
const showKeys=v=>st.keys.forEach(k=>{k.o1.hide(!v);k.o2.hide(!v);k.tx.hide(!v)});showKeys(false);
const setMsg=(s,e)=>{st.msg=s;st.err=!!e};
function destroyPeer(){clearTimeout(st.to);try{if(st.conn)st.conn.close()}catch(e){}try{if(st.peer)st.peer.destroy()}catch(e){}st.peer=null;st.conn=null}
function loadPeer(cb){if(window.Peer)return cb(null);let i=0;
const next=()=>{if(i>=PEERJS_URLS.length)return cb('Gagal memuat PeerJS. Cek koneksi internet.');
const s=document.createElement('script');s.src=PEERJS_URLS[i++];s.onload=()=>window.Peer?cb(null):next();s.onerror=next;document.head.appendChild(s)};next()}
function opts(){const o={debug:0,config:{iceServers:ICE}};if(BROKER.host){o.host=BROKER.host;o.port=BROKER.port;o.path=BROKER.path;o.secure=BROKER.secure;o.key=BROKER.key}return o}
function errText(e){const t=e&&e.type;if(t==='peer-unavailable')return 'Room tidak ditemukan. Cek kodenya.';
if(t==='network'||t==='server-error'||t==='socket-error'||t==='socket-closed')return 'Tidak bisa terhubung ke server. Cek internet.';
if(t==='webrtc')return 'Koneksi ke lawan gagal. Coba lagi.';return 'Terjadi kesalahan'+(t?': '+t:'')}
/* sambungan siap -> simpan di game, masuk ke layout Game */
function finish(role){if(M.leave||st.done)return;st.done=true;clearTimeout(st.to);
const ON={peer:st.peer,conn:st.conn,role:role,inbox:[],closed:false};
ON.conn.on('data',d=>{ON.inbox.push(d)});ON.conn.on('close',()=>{ON.closed=true});ON.conn.on('error',()=>{ON.closed=true});
G.__online=ON;st.peer=null;st.conn=null;M.go('Game','online')}
function startHost(){st.mode='host';st.code='';T.setText('BUAT ROOM');setMsg('Menghubungkan ke server...');
const tk=++st.tok,stale=()=>tk!==st.tok;
loadPeer(err=>{if(stale())return;if(err){setMsg(err,1);return}tryHost(0,tk,stale)})}
function tryHost(n,tk,stale){
const code=String(Math.floor(1000+Math.random()*9000));let p;
try{p=new window.Peer(PREFIX+code,opts())}catch(e){setMsg('Gagal membuat room',1);return}
st.peer=p;clearTimeout(st.to);
st.to=setTimeout(()=>{if(!stale()&&!st.code){setMsg('Server tidak merespon. Coba lagi.',1);destroyPeer()}},12000);
p.on('open',()=>{if(stale())return;clearTimeout(st.to);st.code=code;setMsg('Menunggu lawan bergabung')});
p.on('connection',c=>{if(stale()||st.conn){try{c.close()}catch(e){}return}st.conn=c;const go=()=>finish(0);if(c.open)go();else c.on('open',go)});
p.on('error',e=>{if(stale())return;if(e&&e.type==='unavailable-id'&&n<6){try{p.destroy()}catch(x){}tryHost(n+1,tk,stale);return}clearTimeout(st.to);setMsg(errText(e),1)})}
function startJoin(){st.mode='join';st.entered='';T.setText('GABUNG ROOM');setMsg('Masukkan 4 angka kode room');showKeys(true)}
function fail(s){destroyPeer();st.connecting=false;setMsg(s,1)}
function doJoin(){if(st.entered.length<4||st.connecting)return;st.connecting=true;setMsg('Menghubungkan...');
const tk=++st.tok,stale=()=>tk!==st.tok;
loadPeer(err=>{if(stale())return;if(err){fail(err);return}
let p;try{p=new window.Peer(opts())}catch(e){fail('Gagal memulai koneksi');return}
st.peer=p;st.to=setTimeout(()=>{if(!stale()&&!st.done)fail('Room tidak ditemukan atau koneksi gagal.')},15000);
p.on('open',()=>{if(stale())return;const c=p.connect(PREFIX+st.entered,{reliable:true,serialization:'json'});st.conn=c;
c.on('open',()=>{if(!stale())finish(1)});c.on('error',()=>{})});
p.on('error',e=>{if(!stale())fail(errText(e))})})}
function back(){if(st.mode==='choose'){M.go('Mode');return}
st.tok++;destroyPeer();st.connecting=false;st.code='';st.entered='';showKeys(false);st.mode='choose';T.setText('MAIN ONLINE');setMsg('')}
const ACT={buat:startHost,gabung:startJoin,close:back};
T.setText('MAIN ONLINE');
M.upd=(dt,x,y,rel,prs)=>{
const u=ease(clamp(M.t/0.5,0,1)),tw=T.getWidth();T.setPosition(640-(tw>0?tw/2:150),TY-26*(1-u));if(T.setOpacity)T.setOpacity(255*u);
B.buat.show=B.gabung.show=st.mode==='choose';
let hv=null;
for(const n in B){const b=B[n];const on=b.show&&M.t>=b.d,h=on&&!M.leave&&M.hit(b,x,y);if(h)hv=n;
M.spring(b,on?(h?(prs?0.95:1.07):1):0,dt);M.place(b)}
/* keypad (mode gabung) */
let kh=null;
if(st.mode==='join'&&!M.leave)st.keys.forEach(k=>{const h=x>=k.x&&x<=k.x+KW&&y>=k.y&&y<=k.y+KH;if(h)kh=k;
k.o2.setColor(h?(prs?'230;190;110':'255;214;140'):'250;232;190');
const w=k.tx.getWidth(),ht=k.tx.getHeight();k.tx.setPosition(k.x+KW/2-(w>0?w/2:8),k.y+KH/2-(ht>0?ht/2:14))});
M.cur(!!hv||!!kh);
if(rel&&kh&&!st.connecting){const l=kh.l;
if(l==='DEL'){st.entered=st.entered.slice(0,-1);setMsg('Masukkan 4 angka kode room')}
else if(l==='OK')doJoin();
else if(st.entered.length<4){st.entered+=l;setMsg('Masukkan 4 angka kode room');if(st.entered.length===4)doJoin()}}
else if(rel&&hv)ACT[hv]();
/* panel & teks */
const pt=st.mode==='choose'?0:165;panel.setOpacity(panel.__o=(panel.__o||0)+(pt-(panel.__o||0))*Math.min(1,dt*10));
if(st.mode==='host'){panel.setPosition(250,215);panel.setWidth(780);panel.setHeight(330);
tLbl.setText('KODE ROOM');tCode.setText(st.code||'....');
tInfo.setText(st.msg+(st.err||!st.code?'':'.'.repeat(1+Math.floor(M.t*2)%3)));tInfo.setColor(st.err?'200;50;50':BRN);
tHint.setText(st.err?'':'Bagikan kode ini ke temanmu');
ctr(tLbl,235);ctr(tCode,285);ctr(tInfo,445);ctr(tHint,490)}
else if(st.mode==='join'){panel.setPosition(380,200);panel.setWidth(520);panel.setHeight(435);
tLbl.setText('KODE ROOM');tCode.setText(st.entered.split('').concat(['_','_','_','_']).slice(0,4).join(' '));
tInfo.setText(st.msg);tInfo.setColor(st.err?'200;50;50':BRN);tHint.setText('');
ctr(tLbl,208);ctr(tCode,232);ctr(tInfo,310);ctr(tHint,640)}
else{tLbl.setText('');tCode.setText('');tInfo.setText('');tHint.setText('')}}

}
const M=sc.__m;
const dt=Math.min(0.05,(sc.getElapsedTime?sc.getElapsedTime():16)/1000);
M.t+=dt;
const cur=sc.getLayer('').convertCoords(im.getCursorX(),im.getCursorY());
M.upd(dt,cur[0],cur[1],im.isMouseButtonReleased(0),im.isMouseButtonPressed(0));
if(M.leave){M.lt+=dt;const u=clamp(M.lt/0.35,0,1);M.f.setOpacity(255*u);if(u>=1&&!M.sent){M.sent=true;G.getSceneStack().replace(M.leave,false)}}
else{M.ft+=dt;M.f.setOpacity(255*(1-clamp(M.ft/0.45,0,1)))}
if(im.isMouseButtonReleased(0))SKS.click();
};
gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{


gdjs.LobbyCode.userFunc0xa55c70(runtimeScene);

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDBgLobbyObjects1.length = 0;
gdjs.LobbyCode.GDBtnBuatObjects1.length = 0;
gdjs.LobbyCode.GDBtnGabungObjects1.length = 0;
gdjs.LobbyCode.GDBtnCloseObjects1.length = 0;
gdjs.LobbyCode.GDJudulLobbyObjects1.length = 0;
gdjs.LobbyCode.GDBidakObjects1.length = 0;
gdjs.LobbyCode.GDSorotObjects1.length = 0;
gdjs.LobbyCode.GDLapanganObjects1.length = 0;
gdjs.LobbyCode.GDMejaObjects1.length = 0;
gdjs.LobbyCode.GDLatarObjects1.length = 0;
gdjs.LobbyCode.GDPanelObjects1.length = 0;
gdjs.LobbyCode.GDKartuObjects1.length = 0;
gdjs.LobbyCode.GDTombolObjects1.length = 0;
gdjs.LobbyCode.GDPapanObjects1.length = 0;
gdjs.LobbyCode.GDTeksObjects1.length = 0;
gdjs.LobbyCode.GDKotakObjects1.length = 0;
gdjs.LobbyCode.GDUiObjects1.length = 0;
gdjs.LobbyCode.GDKartuBesarObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595bidak_9595K0Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595bidak_9595K1Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595bidak_9595P0Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595bidak_9595N0Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595bidak_9595R1Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595bidak_9595Q1Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595bidak_9595B0Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595sorot_9595skakObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595prev_9595dimObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595prev_9595c_9595trackObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595prev_9595c_9595greenObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595prev_9595c_9595glossObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595ui_9595hp_9595frameObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595prev_9595c_9595ghostObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595prev_9595c_9595p1Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks1Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks2Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks3Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks4Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595ui_9595bannerObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks5Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks6Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595prev_9595titik_9595onObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595prev_9595titik_9595offObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595ui_9595panelObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks7Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks8Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks9Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks10Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks11Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks12Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks13Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks14Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595kartu_9595depan_9595P0Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595kartu_9595depan_9595Q0Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595kartu_9595belakangObjects1.length = 0;

gdjs.LobbyCode.eventsList0(runtimeScene);
gdjs.LobbyCode.GDBgLobbyObjects1.length = 0;
gdjs.LobbyCode.GDBtnBuatObjects1.length = 0;
gdjs.LobbyCode.GDBtnGabungObjects1.length = 0;
gdjs.LobbyCode.GDBtnCloseObjects1.length = 0;
gdjs.LobbyCode.GDJudulLobbyObjects1.length = 0;
gdjs.LobbyCode.GDBidakObjects1.length = 0;
gdjs.LobbyCode.GDSorotObjects1.length = 0;
gdjs.LobbyCode.GDLapanganObjects1.length = 0;
gdjs.LobbyCode.GDMejaObjects1.length = 0;
gdjs.LobbyCode.GDLatarObjects1.length = 0;
gdjs.LobbyCode.GDPanelObjects1.length = 0;
gdjs.LobbyCode.GDKartuObjects1.length = 0;
gdjs.LobbyCode.GDTombolObjects1.length = 0;
gdjs.LobbyCode.GDPapanObjects1.length = 0;
gdjs.LobbyCode.GDTeksObjects1.length = 0;
gdjs.LobbyCode.GDKotakObjects1.length = 0;
gdjs.LobbyCode.GDUiObjects1.length = 0;
gdjs.LobbyCode.GDKartuBesarObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595bidak_9595K0Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595bidak_9595K1Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595bidak_9595P0Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595bidak_9595N0Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595bidak_9595R1Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595bidak_9595Q1Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595bidak_9595B0Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595sorot_9595skakObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595prev_9595dimObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595prev_9595c_9595trackObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595prev_9595c_9595greenObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595prev_9595c_9595glossObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595ui_9595hp_9595frameObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595prev_9595c_9595ghostObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595prev_9595c_9595p1Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks1Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks2Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks3Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks4Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595ui_9595bannerObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks5Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks6Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595prev_9595titik_9595onObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595prev_9595titik_9595offObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595ui_9595panelObjects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks7Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks8Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks9Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks10Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks11Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks12Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks13Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595Teks14Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595kartu_9595depan_9595P0Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595kartu_9595depan_9595Q0Objects1.length = 0;
gdjs.LobbyCode.GDPrev_9595kartu_9595belakangObjects1.length = 0;


return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
