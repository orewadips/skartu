gdjs.SplashCode = {};
gdjs.SplashCode.localVariables = [];
gdjs.SplashCode.idToCallbackMap = new Map();
gdjs.SplashCode.GDLogoObjects1= [];
gdjs.SplashCode.GDBidakObjects1= [];
gdjs.SplashCode.GDSorotObjects1= [];
gdjs.SplashCode.GDLapanganObjects1= [];
gdjs.SplashCode.GDMejaObjects1= [];
gdjs.SplashCode.GDLatarObjects1= [];
gdjs.SplashCode.GDPanelObjects1= [];
gdjs.SplashCode.GDKartuObjects1= [];
gdjs.SplashCode.GDTombolObjects1= [];
gdjs.SplashCode.GDPapanObjects1= [];
gdjs.SplashCode.GDTeksObjects1= [];
gdjs.SplashCode.GDKotakObjects1= [];
gdjs.SplashCode.GDUiObjects1= [];
gdjs.SplashCode.GDKartuBesarObjects1= [];
gdjs.SplashCode.GDPrev_9595bidak_9595K0Objects1= [];
gdjs.SplashCode.GDPrev_9595bidak_9595K1Objects1= [];
gdjs.SplashCode.GDPrev_9595bidak_9595P0Objects1= [];
gdjs.SplashCode.GDPrev_9595bidak_9595N0Objects1= [];
gdjs.SplashCode.GDPrev_9595bidak_9595R1Objects1= [];
gdjs.SplashCode.GDPrev_9595bidak_9595Q1Objects1= [];
gdjs.SplashCode.GDPrev_9595bidak_9595B0Objects1= [];
gdjs.SplashCode.GDPrev_9595sorot_9595skakObjects1= [];
gdjs.SplashCode.GDPrev_9595prev_9595dimObjects1= [];
gdjs.SplashCode.GDPrev_9595prev_9595c_9595trackObjects1= [];
gdjs.SplashCode.GDPrev_9595prev_9595c_9595greenObjects1= [];
gdjs.SplashCode.GDPrev_9595prev_9595c_9595glossObjects1= [];
gdjs.SplashCode.GDPrev_9595ui_9595hp_9595frameObjects1= [];
gdjs.SplashCode.GDPrev_9595prev_9595c_9595ghostObjects1= [];
gdjs.SplashCode.GDPrev_9595prev_9595c_9595p1Objects1= [];
gdjs.SplashCode.GDPrev_9595Teks1Objects1= [];
gdjs.SplashCode.GDPrev_9595Teks2Objects1= [];
gdjs.SplashCode.GDPrev_9595Teks3Objects1= [];
gdjs.SplashCode.GDPrev_9595Teks4Objects1= [];
gdjs.SplashCode.GDPrev_9595ui_9595bannerObjects1= [];
gdjs.SplashCode.GDPrev_9595Teks5Objects1= [];
gdjs.SplashCode.GDPrev_9595Teks6Objects1= [];
gdjs.SplashCode.GDPrev_9595prev_9595titik_9595onObjects1= [];
gdjs.SplashCode.GDPrev_9595prev_9595titik_9595offObjects1= [];
gdjs.SplashCode.GDPrev_9595ui_9595panelObjects1= [];
gdjs.SplashCode.GDPrev_9595Teks7Objects1= [];
gdjs.SplashCode.GDPrev_9595Teks8Objects1= [];
gdjs.SplashCode.GDPrev_9595Teks9Objects1= [];
gdjs.SplashCode.GDPrev_9595Teks10Objects1= [];
gdjs.SplashCode.GDPrev_9595Teks11Objects1= [];
gdjs.SplashCode.GDPrev_9595Teks12Objects1= [];
gdjs.SplashCode.GDPrev_9595Teks13Objects1= [];
gdjs.SplashCode.GDPrev_9595Teks14Objects1= [];
gdjs.SplashCode.GDPrev_9595kartu_9595depan_9595P0Objects1= [];
gdjs.SplashCode.GDPrev_9595kartu_9595depan_9595Q0Objects1= [];
gdjs.SplashCode.GDPrev_9595kartu_9595belakangObjects1= [];


gdjs.SplashCode.userFunc0xa55c70 = function GDJSInlineCode(runtimeScene) {
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
/* ===== SPLASH LOGO: tampil 3 detik, lalu lanjut ke Loading ===== */
(function(){const sc=runtimeScene,G=sc.getGame(),T=3,FI=0.5,FO=0.5,H=720,W=H*1536/1024;
let S=sc.__sp;if(!S){const o=sc.createObject('Logo');o.setZOrder(10);o.setOpacity(0);S=sc.__sp={o:o,t0:Date.now(),go:false}}
const t=(Date.now()-S.t0)/1000;let a=t<FI?t/FI:(t>T-FO?(T-t)/FO:1);a=Math.max(0,Math.min(1,a));
const k=0.94+0.06*Math.min(1,t/T),w=W*k,h=H*k;
S.o.setOpacity(255*a);S.o.setWidth(w);S.o.setHeight(h);S.o.setPosition(640-w/2,360-h/2);
if(t>=T&&!S.go){S.go=true;G.getSceneStack().replace('Loading',false)}})();
};
gdjs.SplashCode.eventsList0 = function(runtimeScene) {

{


gdjs.SplashCode.userFunc0xa55c70(runtimeScene);

}


};

gdjs.SplashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashCode.GDLogoObjects1.length = 0;
gdjs.SplashCode.GDBidakObjects1.length = 0;
gdjs.SplashCode.GDSorotObjects1.length = 0;
gdjs.SplashCode.GDLapanganObjects1.length = 0;
gdjs.SplashCode.GDMejaObjects1.length = 0;
gdjs.SplashCode.GDLatarObjects1.length = 0;
gdjs.SplashCode.GDPanelObjects1.length = 0;
gdjs.SplashCode.GDKartuObjects1.length = 0;
gdjs.SplashCode.GDTombolObjects1.length = 0;
gdjs.SplashCode.GDPapanObjects1.length = 0;
gdjs.SplashCode.GDTeksObjects1.length = 0;
gdjs.SplashCode.GDKotakObjects1.length = 0;
gdjs.SplashCode.GDUiObjects1.length = 0;
gdjs.SplashCode.GDKartuBesarObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595bidak_9595K0Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595bidak_9595K1Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595bidak_9595P0Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595bidak_9595N0Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595bidak_9595R1Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595bidak_9595Q1Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595bidak_9595B0Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595sorot_9595skakObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595prev_9595dimObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595prev_9595c_9595trackObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595prev_9595c_9595greenObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595prev_9595c_9595glossObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595ui_9595hp_9595frameObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595prev_9595c_9595ghostObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595prev_9595c_9595p1Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks1Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks2Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks3Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks4Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595ui_9595bannerObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks5Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks6Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595prev_9595titik_9595onObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595prev_9595titik_9595offObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595ui_9595panelObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks7Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks8Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks9Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks10Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks11Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks12Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks13Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks14Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595kartu_9595depan_9595P0Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595kartu_9595depan_9595Q0Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595kartu_9595belakangObjects1.length = 0;

gdjs.SplashCode.eventsList0(runtimeScene);
gdjs.SplashCode.GDLogoObjects1.length = 0;
gdjs.SplashCode.GDBidakObjects1.length = 0;
gdjs.SplashCode.GDSorotObjects1.length = 0;
gdjs.SplashCode.GDLapanganObjects1.length = 0;
gdjs.SplashCode.GDMejaObjects1.length = 0;
gdjs.SplashCode.GDLatarObjects1.length = 0;
gdjs.SplashCode.GDPanelObjects1.length = 0;
gdjs.SplashCode.GDKartuObjects1.length = 0;
gdjs.SplashCode.GDTombolObjects1.length = 0;
gdjs.SplashCode.GDPapanObjects1.length = 0;
gdjs.SplashCode.GDTeksObjects1.length = 0;
gdjs.SplashCode.GDKotakObjects1.length = 0;
gdjs.SplashCode.GDUiObjects1.length = 0;
gdjs.SplashCode.GDKartuBesarObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595bidak_9595K0Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595bidak_9595K1Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595bidak_9595P0Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595bidak_9595N0Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595bidak_9595R1Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595bidak_9595Q1Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595bidak_9595B0Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595sorot_9595skakObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595prev_9595dimObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595prev_9595c_9595trackObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595prev_9595c_9595greenObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595prev_9595c_9595glossObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595ui_9595hp_9595frameObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595prev_9595c_9595ghostObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595prev_9595c_9595p1Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks1Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks2Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks3Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks4Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595ui_9595bannerObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks5Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks6Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595prev_9595titik_9595onObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595prev_9595titik_9595offObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595ui_9595panelObjects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks7Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks8Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks9Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks10Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks11Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks12Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks13Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595Teks14Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595kartu_9595depan_9595P0Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595kartu_9595depan_9595Q0Objects1.length = 0;
gdjs.SplashCode.GDPrev_9595kartu_9595belakangObjects1.length = 0;


return;

}

gdjs['SplashCode'] = gdjs.SplashCode;
