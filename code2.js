gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDBgMenuObjects1= [];
gdjs.MenuCode.GDJudulObjects1= [];
gdjs.MenuCode.GDBtnPlayObjects1= [];
gdjs.MenuCode.GDBidakObjects1= [];
gdjs.MenuCode.GDSorotObjects1= [];
gdjs.MenuCode.GDLapanganObjects1= [];
gdjs.MenuCode.GDMejaObjects1= [];
gdjs.MenuCode.GDLatarObjects1= [];
gdjs.MenuCode.GDPanelObjects1= [];
gdjs.MenuCode.GDKartuObjects1= [];
gdjs.MenuCode.GDTombolObjects1= [];
gdjs.MenuCode.GDPapanObjects1= [];
gdjs.MenuCode.GDTeksObjects1= [];
gdjs.MenuCode.GDKotakObjects1= [];
gdjs.MenuCode.GDUiObjects1= [];
gdjs.MenuCode.GDKartuBesarObjects1= [];
gdjs.MenuCode.GDPrev_9595bidak_9595K0Objects1= [];
gdjs.MenuCode.GDPrev_9595bidak_9595K1Objects1= [];
gdjs.MenuCode.GDPrev_9595bidak_9595P0Objects1= [];
gdjs.MenuCode.GDPrev_9595bidak_9595N0Objects1= [];
gdjs.MenuCode.GDPrev_9595bidak_9595R1Objects1= [];
gdjs.MenuCode.GDPrev_9595bidak_9595Q1Objects1= [];
gdjs.MenuCode.GDPrev_9595bidak_9595B0Objects1= [];
gdjs.MenuCode.GDPrev_9595sorot_9595skakObjects1= [];
gdjs.MenuCode.GDPrev_9595prev_9595dimObjects1= [];
gdjs.MenuCode.GDPrev_9595prev_9595c_9595trackObjects1= [];
gdjs.MenuCode.GDPrev_9595prev_9595c_9595greenObjects1= [];
gdjs.MenuCode.GDPrev_9595prev_9595c_9595glossObjects1= [];
gdjs.MenuCode.GDPrev_9595ui_9595hp_9595frameObjects1= [];
gdjs.MenuCode.GDPrev_9595prev_9595c_9595ghostObjects1= [];
gdjs.MenuCode.GDPrev_9595prev_9595c_9595p1Objects1= [];
gdjs.MenuCode.GDPrev_9595Teks1Objects1= [];
gdjs.MenuCode.GDPrev_9595Teks2Objects1= [];
gdjs.MenuCode.GDPrev_9595Teks3Objects1= [];
gdjs.MenuCode.GDPrev_9595Teks4Objects1= [];
gdjs.MenuCode.GDPrev_9595ui_9595bannerObjects1= [];
gdjs.MenuCode.GDPrev_9595Teks5Objects1= [];
gdjs.MenuCode.GDPrev_9595Teks6Objects1= [];
gdjs.MenuCode.GDPrev_9595prev_9595titik_9595onObjects1= [];
gdjs.MenuCode.GDPrev_9595prev_9595titik_9595offObjects1= [];
gdjs.MenuCode.GDPrev_9595ui_9595panelObjects1= [];
gdjs.MenuCode.GDPrev_9595Teks7Objects1= [];
gdjs.MenuCode.GDPrev_9595Teks8Objects1= [];
gdjs.MenuCode.GDPrev_9595Teks9Objects1= [];
gdjs.MenuCode.GDPrev_9595Teks10Objects1= [];
gdjs.MenuCode.GDPrev_9595Teks11Objects1= [];
gdjs.MenuCode.GDPrev_9595Teks12Objects1= [];
gdjs.MenuCode.GDPrev_9595Teks13Objects1= [];
gdjs.MenuCode.GDPrev_9595Teks14Objects1= [];
gdjs.MenuCode.GDPrev_9595kartu_9595depan_9595P0Objects1= [];
gdjs.MenuCode.GDPrev_9595kartu_9595depan_9595Q0Objects1= [];
gdjs.MenuCode.GDPrev_9595kartu_9595belakangObjects1= [];


gdjs.MenuCode.userFunc0xa55c70 = function GDJSInlineCode(runtimeScene) {
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

/* ===== MENU UTAMA ===== */
const T=M.btn('Judul',680,465),P=M.btn('BtnPlay',337,140);
T.d=0.1;P.d=0.4;
M.upd=(dt,x,y,rel,prs)=>{
if(!M.jdl&&M.t>=T.d){M.jdl=1;SKS.sfx('jdl.wav')}   /* sound judul muncul */
T.dy=Math.sin(M.t*1.7)*5;                               // judul melayang pelan
M.spring(T,M.t>=T.d?1:0,dt);
const hov=!M.leave&&M.hit(P,x,y);
M.spring(P,M.t<P.d?0:(hov?(prs?0.95:1.07):1+0.035*Math.sin(M.t*3.2)),dt);
M.place(T);M.place(P);M.cur(hov);
if(hov&&rel)M.go('Mode')}

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
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.userFunc0xa55c70(runtimeScene);

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBgMenuObjects1.length = 0;
gdjs.MenuCode.GDJudulObjects1.length = 0;
gdjs.MenuCode.GDBtnPlayObjects1.length = 0;
gdjs.MenuCode.GDBidakObjects1.length = 0;
gdjs.MenuCode.GDSorotObjects1.length = 0;
gdjs.MenuCode.GDLapanganObjects1.length = 0;
gdjs.MenuCode.GDMejaObjects1.length = 0;
gdjs.MenuCode.GDLatarObjects1.length = 0;
gdjs.MenuCode.GDPanelObjects1.length = 0;
gdjs.MenuCode.GDKartuObjects1.length = 0;
gdjs.MenuCode.GDTombolObjects1.length = 0;
gdjs.MenuCode.GDPapanObjects1.length = 0;
gdjs.MenuCode.GDTeksObjects1.length = 0;
gdjs.MenuCode.GDKotakObjects1.length = 0;
gdjs.MenuCode.GDUiObjects1.length = 0;
gdjs.MenuCode.GDKartuBesarObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595bidak_9595K0Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595bidak_9595K1Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595bidak_9595P0Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595bidak_9595N0Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595bidak_9595R1Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595bidak_9595Q1Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595bidak_9595B0Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595sorot_9595skakObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595prev_9595dimObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595prev_9595c_9595trackObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595prev_9595c_9595greenObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595prev_9595c_9595glossObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595ui_9595hp_9595frameObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595prev_9595c_9595ghostObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595prev_9595c_9595p1Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks1Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks2Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks3Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks4Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595ui_9595bannerObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks5Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks6Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595prev_9595titik_9595onObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595prev_9595titik_9595offObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595ui_9595panelObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks7Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks8Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks9Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks10Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks11Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks12Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks13Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks14Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595kartu_9595depan_9595P0Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595kartu_9595depan_9595Q0Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595kartu_9595belakangObjects1.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDBgMenuObjects1.length = 0;
gdjs.MenuCode.GDJudulObjects1.length = 0;
gdjs.MenuCode.GDBtnPlayObjects1.length = 0;
gdjs.MenuCode.GDBidakObjects1.length = 0;
gdjs.MenuCode.GDSorotObjects1.length = 0;
gdjs.MenuCode.GDLapanganObjects1.length = 0;
gdjs.MenuCode.GDMejaObjects1.length = 0;
gdjs.MenuCode.GDLatarObjects1.length = 0;
gdjs.MenuCode.GDPanelObjects1.length = 0;
gdjs.MenuCode.GDKartuObjects1.length = 0;
gdjs.MenuCode.GDTombolObjects1.length = 0;
gdjs.MenuCode.GDPapanObjects1.length = 0;
gdjs.MenuCode.GDTeksObjects1.length = 0;
gdjs.MenuCode.GDKotakObjects1.length = 0;
gdjs.MenuCode.GDUiObjects1.length = 0;
gdjs.MenuCode.GDKartuBesarObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595bidak_9595K0Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595bidak_9595K1Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595bidak_9595P0Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595bidak_9595N0Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595bidak_9595R1Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595bidak_9595Q1Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595bidak_9595B0Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595sorot_9595skakObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595prev_9595dimObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595prev_9595c_9595trackObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595prev_9595c_9595greenObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595prev_9595c_9595glossObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595ui_9595hp_9595frameObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595prev_9595c_9595ghostObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595prev_9595c_9595p1Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks1Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks2Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks3Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks4Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595ui_9595bannerObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks5Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks6Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595prev_9595titik_9595onObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595prev_9595titik_9595offObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595ui_9595panelObjects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks7Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks8Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks9Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks10Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks11Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks12Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks13Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595Teks14Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595kartu_9595depan_9595P0Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595kartu_9595depan_9595Q0Objects1.length = 0;
gdjs.MenuCode.GDPrev_9595kartu_9595belakangObjects1.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
