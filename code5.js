gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
gdjs.GameCode.GDBidakObjects1= [];
gdjs.GameCode.GDSorotObjects1= [];
gdjs.GameCode.GDLapanganObjects1= [];
gdjs.GameCode.GDMejaObjects1= [];
gdjs.GameCode.GDLatarObjects1= [];
gdjs.GameCode.GDPanelObjects1= [];
gdjs.GameCode.GDKartuObjects1= [];
gdjs.GameCode.GDTombolObjects1= [];
gdjs.GameCode.GDPapanObjects1= [];
gdjs.GameCode.GDTeksObjects1= [];
gdjs.GameCode.GDKotakObjects1= [];
gdjs.GameCode.GDUiObjects1= [];
gdjs.GameCode.GDKartuBesarObjects1= [];
gdjs.GameCode.GDPrev_9595bidak_9595K0Objects1= [];
gdjs.GameCode.GDPrev_9595bidak_9595K1Objects1= [];
gdjs.GameCode.GDPrev_9595bidak_9595P0Objects1= [];
gdjs.GameCode.GDPrev_9595bidak_9595N0Objects1= [];
gdjs.GameCode.GDPrev_9595bidak_9595R1Objects1= [];
gdjs.GameCode.GDPrev_9595bidak_9595Q1Objects1= [];
gdjs.GameCode.GDPrev_9595bidak_9595B0Objects1= [];
gdjs.GameCode.GDPrev_9595sorot_9595skakObjects1= [];
gdjs.GameCode.GDPrev_9595prev_9595dimObjects1= [];
gdjs.GameCode.GDPrev_9595prev_9595c_9595trackObjects1= [];
gdjs.GameCode.GDPrev_9595prev_9595c_9595greenObjects1= [];
gdjs.GameCode.GDPrev_9595prev_9595c_9595glossObjects1= [];
gdjs.GameCode.GDPrev_9595ui_9595hp_9595frameObjects1= [];
gdjs.GameCode.GDPrev_9595prev_9595c_9595ghostObjects1= [];
gdjs.GameCode.GDPrev_9595prev_9595c_9595p1Objects1= [];
gdjs.GameCode.GDPrev_9595Teks1Objects1= [];
gdjs.GameCode.GDPrev_9595Teks2Objects1= [];
gdjs.GameCode.GDPrev_9595Teks3Objects1= [];
gdjs.GameCode.GDPrev_9595Teks4Objects1= [];
gdjs.GameCode.GDPrev_9595ui_9595bannerObjects1= [];
gdjs.GameCode.GDPrev_9595Teks5Objects1= [];
gdjs.GameCode.GDPrev_9595Teks6Objects1= [];
gdjs.GameCode.GDPrev_9595prev_9595titik_9595onObjects1= [];
gdjs.GameCode.GDPrev_9595prev_9595titik_9595offObjects1= [];
gdjs.GameCode.GDPrev_9595ui_9595panelObjects1= [];
gdjs.GameCode.GDPrev_9595Teks7Objects1= [];
gdjs.GameCode.GDPrev_9595Teks8Objects1= [];
gdjs.GameCode.GDPrev_9595Teks9Objects1= [];
gdjs.GameCode.GDPrev_9595Teks10Objects1= [];
gdjs.GameCode.GDPrev_9595Teks11Objects1= [];
gdjs.GameCode.GDPrev_9595Teks12Objects1= [];
gdjs.GameCode.GDPrev_9595Teks13Objects1= [];
gdjs.GameCode.GDPrev_9595Teks14Objects1= [];
gdjs.GameCode.GDPrev_9595kartu_9595depan_9595P0Objects1= [];
gdjs.GameCode.GDPrev_9595kartu_9595depan_9595Q0Objects1= [];
gdjs.GameCode.GDPrev_9595kartu_9595belakangObjects1= [];


gdjs.GameCode.userFunc0xa55c70 = function GDJSInlineCode(runtimeScene) {
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
SKS.music('Playing_Together.wav');
if(!runtimeScene.__c){
const sc=runtimeScene;
const PREV=["Prev_bidak_K0", "Prev_bidak_K1", "Prev_bidak_P0", "Prev_bidak_N0", "Prev_bidak_R1", "Prev_bidak_Q1", "Prev_bidak_B0", "Prev_sorot_skak", "Prev_prev_dim", "Prev_prev_c_track", "Prev_prev_c_green", "Prev_prev_c_gloss", "Prev_ui_hp_frame", "Prev_prev_c_ghost", "Prev_prev_c_p1", "Prev_Teks1", "Prev_Teks2", "Prev_Teks3", "Prev_Teks4", "Prev_ui_banner", "Prev_Teks5", "Prev_Teks6", "Prev_prev_titik_on", "Prev_prev_titik_off", "Prev_ui_panel", "Prev_Teks7", "Prev_Teks8", "Prev_Teks9", "Prev_Teks10", "Prev_Teks11", "Prev_Teks12", "Prev_Teks13", "Prev_Teks14", "Prev_kartu_depan_P0", "Prev_kartu_depan_Q0", "Prev_kartu_belakang"];PREV.forEach(n=>{const a=sc.getObjects?sc.getObjects(n):[];if(a&&a.slice)a.slice().forEach(o=>o.deleteFromScene(sc))});
/* ===== GEOMETRI PAPAN 8x8 (perspektif) - cocok dengan papan_kayu_8x8.png di objek Meja ===== */
const HG=[[79.77598424,-13.18964353,334.98783385],[0.0,39.5205644,149.12684366],[0.0,-0.02070448,1.0]];   // kotak (x,y) -> koordinat layar
const HI=[[0.01351442,0.00198361,-4.82297549],[0.0,0.02530328,-3.77339863],[0.0,0.00052389,1.0]];   // koordinat layar -> kotak
const FOOT=104,FOOTK=0.2;                                // titik pijak bidak pada sprite & posisinya di tile
const prj=(M,u,v)=>{const w=M[2][0]*u+M[2][1]*v+M[2][2];return[(M[0][0]*u+M[0][1]*v+M[0][2])/w,(M[1][0]*u+M[1][1]*v+M[1][2])/w]};
const TILE={};
/* T(x,y): pusat tile (cx,cy), lebar w, tinggi h, skala bidak s; ay = titik pijak bidak */
function T(x,y){const k=x+','+y;let t=TILE[k];if(t)return t;
const c=prj(HG,x+.5,y+.5),l=prj(HG,x,y+.5),r=prj(HG,x+1,y+.5),a=prj(HG,x+.5,y),b=prj(HG,x+.5,y+1);
t=TILE[k]={cx:c[0],cy:c[1],w:r[0]-l[0],h:b[1]-a[1],s:(r[0]-l[0])/88};t.ay=t.cy+FOOTK*t.h;return t}
function cellAt(mx,my){const q=prj(HI,mx,my),x=Math.floor(q[0]),y=Math.floor(q[1]);return(x>=0&&x<8&&y>=0&&y<8)?[x,y]:null}
/* ===== PENGATURAN GAMEPLAY (ubah di sini) ===== */
const MAXHP=100;                                   // HP awal tiap player
const PTS={P:3,N:5,B:10,R:15,Q:20};                // poin bidak = damage saat men-skak raja
const SAC={P:1,N:2,B:3,R:4,Q:5};                   // NILAI SACRIFICE: harga menyingkirkan bidak ini = total nilai bidak yang harus dikorbankan
const NAMA={P:'Pion',N:'Kuda',B:'Gajah',R:'Benteng',Q:'Ratu',S:'Skill'};
const AI_LEVEL=2;const AI_MISTAKE=0.3;   /* peluang AI salah pilih langkah (0 = tidak pernah, makin besar makin mudah) */
                                // kekuatan AI di mode VS AI: 1 = mudah, 2 = normal, 3 = sulit
/* ============================================== */
const COL=['60;110;200','210;70;90'];
const CW=190,CH=270,CGAP=30,CY=360;                // ukuran kartu & posisi tengah layar
let B,S,dyn=[],hits=[];
/* ---------- ONLINE (P2P): koneksi dibuat di layout Lobby ---------- */
const G0=runtimeScene.getGame();const ON=(G0.__online&&G0.__online.conn)?G0.__online:null;   // null = main lokal biasa
/* ---------- MODE VS AI: variabel global Mode = 'ai' -> pemain 2 dikendalikan komputer ---------- */
let MODE='lokal';try{MODE=G0.getVariables().get('Mode').getAsString()}catch(e){}
const AIS=(!ON&&MODE==='ai')?[1]:[];                 // daftar pemain yang dimainkan AI
const isAI=p=>AIS.indexOf(p)>=0;
const PN=i=>isAI(i)?'KOMPUTER':AIS.length?'KAMU':'PEMAIN '+(i+1);
const PT=i=>isAI(i)?'Komputer':AIS.length?'Kamu':'Pemain '+(i+1);
let applying=false,waiting=!!ON&&ON.role===1,disc=false,netGen=0,curGen=-1;
const mine=()=>ON?S.p===ON.role:!isAI(S.p);                 // giliran saya? (offline: selalu true)
let HP=[MAXHP,MAXHP],GH=[MAXHP,MAXHP],hold=[0,0],shake=[0,0],flash=[0,0];
let fx=[],cards=[],cardMode=null,cardClock=0,pickI=-1,pickT=0,shownDeal=-1,dim=null;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const ease=t=>1-Math.pow(1-t,3);
const zone=(p,x)=>p?x>=6:x<=1;
const cnt=p=>{let n=0;B.forEach(c=>c.forEach(q=>{if(q&&q.o==p)n++}));return n};
const face=(t,p)=>t=='S'?'S':t+p;
/* ---------- helper objek ---------- */
function mk(n,a,x,y,z){const o=sc.createObject(n);if(a)o.setAnimationName(a);o.setPosition(x,y);o.setZOrder(z);dyn.push(o);return o}
function mkp(n,a,x,y,z){const o=sc.createObject(n);if(a)o.setAnimationName(a);o.setPosition(x,y);o.setZOrder(z);return o}
function box(x,y,w,h,col,z,op){if(x===0&&y===0&&w>=1280&&h>=720&&window.__skFit){const F=window.__skFit;x=F.x0;y=F.y0;w=F.w;h=F.h}const o=mkp('Kotak',null,x,y,z);o.setWidth(w);o.setHeight(h);o.setColor(col);if(op!=null)o.setOpacity(op);return o}
function mkt(s,x,y,sz,col,opt){opt=opt||{};const o=sc.createObject('Teks');
if(o.setCharacterSize)o.setCharacterSize(sz);if(o.setColor)o.setColor(col);
if(opt.w&&o.setWrapping){o.setWrapping(true);o.setWrappingWidth(opt.w)}
if(opt.bold&&o.setBold)o.setBold(true);
if(opt.ol&&o.setOutlineColor)o.setOutlineColor(opt.ol);
(o.setText||o.setString).call(o,s);o.setZOrder(opt.z||110);put(o,s,x,y,opt.al||0);return o}
function put(o,s,x,y,al){if(al){let w=o.getWidth?o.getWidth():0;if(!(w>0))w=s.length*9;x-=al==1?w/2:w}o.setPosition(x,y)}
function setT(o,s,x,y,al){(o.setText||o.setString).call(o,s);put(o,s,x,y,al)}
function txt(s,x,y,sz,col,opt){const o=mkt(s,x,y,sz,col,opt);dyn.push(o);return o}
function hit(x,y,w,h,f){hits.push([x,y,w,h,f])}
/* ---------- logika catur ---------- */
function gen(){const p=S.p,n=S.n[p],w={P:5,N:5};if(n>=3){w.B=3;w.R=3}if(n>=6)w.Q=2;if(n>=5&&skillOK(p))w.S=2;
const ks=Object.keys(w),tot=ks.reduce((s,k)=>s+w[k],0),r=[];
for(let i=0;i<3;i++){let v=Math.random()*tot;for(const k of ks){v-=w[k];if(v<=0||k==ks[ks.length-1]){r.push(k);break}}}return r}
function ownVal(p){let v=0;B.forEach(c=>c.forEach(q=>{if(q&&q.o==p&&q.t!='K')v+=SAC[q.t]}));return v}
function sacSum(){let v=0;S.sac.forEach(m=>{const q=B[m[0]][m[1]];if(q)v+=SAC[q.t]});return v}
function skillOK(p){let mn=99;B.forEach(c=>c.forEach(q=>{if(q&&q.o!=p&&q.t!='K')mn=Math.min(mn,SAC[q.t])}));return mn<99&&ownVal(p)>=mn}
function deal(){S.cards=gen();S.deal++}
function raw(b,x,y){const p=b[x][y],o=p.o,r=[];
const add=(a,c)=>{if(a<0||c<0||a>7||c>7)return false;const q=b[a][c];if(!q){r.push([a,c]);return true}if(q.o!=o)r.push([a,c]);return false};
const sl=ds=>ds.forEach(([dx,dy])=>{let a=x+dx,c=y+dy;while(add(a,c)){a+=dx;c+=dy}});
const D=[[1,1],[1,-1],[-1,1],[-1,-1]],O=[[1,0],[-1,0],[0,1],[0,-1]];
if(p.t=='P'){const d=o?-1:1,a=x+d;if(a>=0&&a<8){if(!b[a][y]){r.push([a,y]);const a2=x+2*d;if(!p.m&&a2>=0&&a2<8&&!b[a2][y])r.push([a2,y])}
for(const dy of[-1,1]){const c=y+dy;if(c>=0&&c<8&&b[a][c]&&b[a][c].o!=o)r.push([a,c])}}return r}
if(p.t=='N')[[1,2],[2,1],[-1,2],[-2,1],[1,-2],[2,-1],[-1,-2],[-2,-1]].forEach(([dx,dy])=>add(x+dx,y+dy));
if(p.t=='K')D.concat(O).forEach(([dx,dy])=>add(x+dx,y+dy));
if(p.t=='B'||p.t=='Q')sl(D);if(p.t=='R'||p.t=='Q')sl(O);return r}
function att(b,x,y,by){for(let i=0;i<8;i++)for(let j=0;j<8;j++){const q=b[i][j];if(!q||q.o!=by)continue;
if(q.t=='P'){const d=by?-1:1;if(i+d==x&&Math.abs(j-y)==1)return true}else if(raw(b,i,j).some(m=>m[0]==x&&m[1]==y))return true}return false}
function chk(b,o){for(let i=0;i<8;i++)for(let j=0;j<8;j++){const q=b[i][j];if(q&&q.t=='K'&&q.o==o)return att(b,i,j,1-o)}return false}
/* daftar bidak yang sedang men-skak raja milik o */
function checkers(b,o){let kx=-1,ky=-1;for(let i=0;i<8;i++)for(let j=0;j<8;j++){const q=b[i][j];if(q&&q.t=='K'&&q.o==o){kx=i;ky=j}}
const r=[];if(kx<0)return r;const by=1-o;
for(let i=0;i<8;i++)for(let j=0;j<8;j++){const q=b[i][j];if(!q||q.o!=by)continue;
if(q.t=='P'){const d=by?-1:1;if(i+d==kx&&Math.abs(j-ky)==1)r.push(q)}else if(raw(b,i,j).some(m=>m[0]==kx&&m[1]==ky))r.push(q)}return r}
/* Raja tidak boleh dimakan (hanya bisa di-skak / skakmat): petak raja lawan dikeluarkan dari langkah legal */
function legal(b,x,y){const o=b[x][y].o;return raw(b,x,y).filter(([a,c])=>{if(b[a][c]&&b[a][c].t=='K')return false;const b2=b.map(k=>k.slice());b2[a][c]=b2[x][y];b2[x][y]=null;return !chk(b2,o)})}
function anyLegal(o){for(let i=0;i<8;i++)for(let j=0;j<8;j++)if(B[i][j]&&B[i][j].o==o&&legal(B,i,j).length)return true;return false}
/* ---------- HP & damage ---------- */
function hitKing(p){const cs=checkers(B,p);if(!cs.length)return;
let d=0;cs.forEach(q=>{d+=PTS[q.t]||0});
HP[p]=Math.max(0,HP[p]-d);hold[p]=0.6;shake[p]=0.5;flash[p]=1;
popDamage(p,d,cs);
if(HP[p]>0)SKS.check();
if(HP[p]<=0)S.over={ko:1,win:1-p}}
function popDamage(p,d,cs){
checkFx(p,d);
const h=HUD[p],r=HP[p]/MAXHP,ex=p?h.tx+h.tw*(1-r):h.tx+h.tw*r;
const dx=clamp(ex-(p?0:30),h.f0,h.f0+400);const a=mkt('-'+d,dx,88,34,'230;60;60',{bold:1,z:300,ol:'255;248;225'});
fx.push({o:a,t:0,dur:1.4,x:dx,y:88,vy:-34});
const names=cs.map(q=>NAMA[q.t]).join(' + ');
const s='SKAK oleh '+names+'!  -'+d+' HP';
const b=mkt(s,640,104,26,'215;50;50',{bold:1,z:300,ol:'255;248;225',al:1});
fx.push({o:b,t:0,dur:1.8,cx:640,y:104,vy:-12,center:1,s:s})}
/* ---------- alur giliran ---------- */
function init(){SKS.stopVoice();netGen++;B=[];for(let i=0;i<8;i++)B.push(Array(8).fill(null));B[0][3]={t:'K',o:0};B[7][4]={t:'K',o:1};
HP=[MAXHP,MAXHP];GH=[MAXHP,MAXHP];hold=[0,0];shake=[0,0];flash=[0,0];
fx.forEach(f=>f.o.deleteFromScene(sc));fx=[];clearCards();shownDeal=-1;resetFx();
S={p:0,n:[0,0],ph:'draw',cards:[],card:null,sel:null,hl:[],tgt:null,need:0,sac:[],over:null,deal:0};startTurn()}
function startTurn(){const p=S.p;S.n[p]++;S.sel=null;S.hl=[];S.tgt=null;S.need=0;S.sac=[];S.card=null;
hitKing(p);
if(S.over){S.ph='over';R();return}
splash('GILIRAN '+PN(p),COL[p]);
if(cnt(p)>=8)S.ph='choose';else{S.ph='draw';deal()}R()}
function toMove(){S.ph='move';S.sel=null;S.hl=[];S.tgt=null;S.need=0;S.sac=[];
if(!anyLegal(S.p))S.over=chk(B,S.p)?{win:1-S.p}:{draw:1};R()}
function execSkill(){SKS.skill(S.sac.length);const t=S.tgt;ghost(B[t[0]][t[1]],t[0],t[1]);S.sac.forEach(m=>ghost(B[m[0]][m[1]],m[0],m[1]));camShake(5,0.3);addFlash('255;255;255',70,0.3);B[t[0]][t[1]]=null;S.sac.forEach(m=>{B[m[0]][m[1]]=null});toMove()}
function cell(x,y){if(S.over)return;const p=S.p,q=B[x][y],ph=S.ph;
if(ph=='place'){if(!q&&zone(p,x)){SKS.place();B[x][y]={t:S.card,o:p,m:0};pend[x+','+y]={kind:'drop',t:0,dur:0.55};toMove()}}
else if(ph=='rep'){if(q&&q.o==p&&q.t!='K'){SKS.place();ghost(q,x,y);B[x][y]={t:S.card,o:p,m:0};pend[x+','+y]={kind:'drop',t:0,dur:0.55};toMove()}}
else if(ph=='skT'){if(q&&q.o!=p&&q.t!='K'&&SAC[q.t]<=ownVal(p)){S.tgt=[x,y];S.need=SAC[q.t];S.sac=[];S.ph='skS';R()}}
else if(ph=='skS'){if(q&&q.o==p&&q.t!='K'){const i=S.sac.findIndex(m=>m[0]==x&&m[1]==y);if(i>=0)S.sac.splice(i,1);else S.sac.push([x,y]);
if(sacSum()>=S.need)execSkill();else R()}}
else if(ph=='move'){if(S.sel&&S.hl.some(m=>m[0]==x&&m[1]==y)){const sx=S.sel[0],sy=S.sel[1],pc=B[sx][sy],cap0=B[x][y];const t0=T(sx,sy);pend[x+','+y]={kind:'move',t:0,dur:0.38,fx:t0.cx,fy:t0.ay,fs:t0.s,cap:!!cap0};if(cap0){SKS.capture();ghost(cap0,x,y)}else SKS.place();B[x][y]=pc;B[sx][sy]=null;pc.m=1;S.p=1-S.p;startTurn()}
else if(q&&q.o==p){S.sel=[x,y];S.hl=legal(B,x,y);R()}else{S.sel=null;S.hl=[];R()}}}
function pickCard(i){const t=S.cards[i];if(t=='S'){S.ph='skT';S.tgt=null;S.need=0;S.sac=[]}else{S.card=t;S.ph=cnt(S.p)>=8?'rep':'place'}R()}
function msg(){const p=S.p,c=chk(B,p)?'SKAK! ':'';
return c+({draw:'Pilih 1 kartu',choose:'Bidak penuh (8). Pilih aksi',place:'Taruh bidak di zona warnamu',rep:'Pilih bidakmu yang diganti',skT:'SKILL: pilih bidak lawan',skS:'Korbankan '+sacSum()+'/'+S.need+' untuk '+(S.tgt&&B[S.tgt[0]][S.tgt[1]]?NAMA[B[S.tgt[0]][S.tgt[1]].t]:''),move:'Pilih bidak lalu tujuan'}[S.ph]||'')}
/* ---------- kartu di tengah layar ---------- */
function clearCards(){cards.forEach(c=>c.o.deleteFromScene(sc));cards=[];if(dim){dim.deleteFromScene(sc);dim=null}cardMode=null}
function showCards(instant){clearCards();const p=S.p;
dim=box(0,0,1280,720,'30;20;10',60,instant?120:0);
S.cards.forEach((t,i)=>{const o=sc.createObject('KartuBesar');o.setZOrder(210+i);o.setAnimationName(instant?face(t,p):'belakang');
const cx=640+(i-1)*(CW+CGAP),from=i==0?-CW:i==2?1280+CW:(p?1280+CW:-CW);
o.setPosition(from-CW/2,CY-CH/2);
cards.push({o:o,t:t,i:i,cx:cx,from:from,d:i*0.18,flipped:!!instant,hv:0,x:cx,y:CY,sx:1,sy:1})});
cardClock=instant?99:0;cardMode=instant?'ready':'in';shownDeal=S.deal}
function startPick(i){cardMode='picked';pickI=i;pickT=0;const c=cards[i];if(c)spark(c.x,c.y,18,['255;220;120','255;255;255'],{v0:80,v1:240,l0:0.4,l1:0.8,g:200})}
const FLY=0.55,FLIP0=0.18*2+0.55+0.2,FSTAG=0.07,FDUR=0.5;
function updCards(dt,mx,my){if(cardMode===null)return;
cardClock+=dt;const T=cardClock;
if(dim){let op=120;if(cardMode=='in')op=120*clamp(T/0.5,0,1);if(cardMode=='picked')op=120*(1-clamp(pickT/0.45,0,1));dim.setOpacity(op)}
if(cardMode=='picked')pickT+=dt;
const END=FLIP0+2*FSTAG+FDUR;
cards.forEach(c=>{let x=c.cx,y=CY,sx=1,sy=1,ang=0,op=255;
if(T<END){
 if(T<c.d)x=c.from;
 else if(T<c.d+FLY){const u=ease((T-c.d)/FLY);x=c.from+(c.cx-c.from)*u;y=CY-Math.sin(u*Math.PI)*34;ang=(1-u)*(c.from<c.cx?-14:14)}
 const fT=T-(FLIP0+c.i*FSTAG);
 if(fT>0){const u=clamp(fT/FDUR,0,1);sx=Math.max(0.02,Math.abs(Math.cos(u*Math.PI)));sy=1+0.1*Math.sin(u*Math.PI);
  if(u>=0.5&&!c.flipped){c.flipped=true;c.o.setAnimationName(face(c.t,S.p))}}}
if(cardMode=='in'&&T>=END)cardMode='ready';
if(cardMode=='ready'&&c.flipped){const hov=Math.abs(mx-c.cx)<CW/2&&Math.abs(my-CY)<CH/2;c.hv+=((hov?1:0)-c.hv)*Math.min(1,dt*14);
 const k=1+0.07*c.hv;sx=k;sy=k;y=CY-14*c.hv}
if(cardMode=='picked'){const u=clamp(pickT/0.45,0,1);
 if(c.i==pickI){const k=1+0.18*Math.sin(Math.min(u*1.5,1)*Math.PI/2);sx=k;sy=k;y=CY-18*u;op=255*(1-clamp((u-0.55)/0.45,0,1))}
 else{y=CY+34*u;op=255*(1-u)}}
c.x=x;c.y=y;c.sx=sx;c.sy=sy;
c.o.setScaleX(sx);c.o.setScaleY(sy);c.o.setAngle(ang);c.o.setOpacity(op);c.o.setPosition(x-CW*sx/2,y-CH*sy/2)});
if(cardMode=='picked'&&pickT>=0.45){const i=pickI;clearCards();pickCard(i)}}
/* ---------- HUD tetap: bar HP + banner fase ---------- */
const HUD=[],UI={};
function buildHUD(){
for(let i=0;i<2;i++){const f0=i?810:20,h={f0:f0,tx:f0+6,tw:438,ty:46,th:28};
h.track=box(h.tx,h.ty,h.tw,h.th,'60;38;26',100);
h.ghost=box(h.tx,h.ty,h.tw,h.th,'255;236;160',101);
h.fill=box(h.tx,h.ty,h.tw,h.th,'110;200;70',102);
h.gloss=box(h.tx,h.ty,h.tw,9,'255;255;255',103,80);
h.flash=box(h.tx,h.ty,h.tw,h.th,'255;255;255',104,0);
h.frame=mkp('Ui','hp_frame',f0,40,108);
h.act=box(f0+14,85,422,4,COL[i],105);
h.name=mkt(PN(i)+(ON&&ON.role===i?' (KAMU)':''),i?f0+446:f0+4,10,22,COL[i],{bold:1,al:i?2:0,ol:'255;248;225'});
h.num=mkt(MAXHP+' / '+MAXHP,i?f0+4:f0+446,14,18,'110;70;40',{bold:1,al:i?0:2});
h.nx=h.name.getX();h.mx=h.num.getX();h.last=MAXHP;HUD.push(h)}
UI.ban=mkp('Ui','banner',490,10,100);
UI.t1=mkt('',640,18,15,'110;70;40',{al:1,bold:1});
UI.t2=mkt('',640,38,26,'110;70;40',{al:1,bold:1});
UI.dots=[0,1,2].map(k=>{const o=mkp('Ui','titik',633+(k-1)*30,72,110);o.setColor('225;217;199');return o})}
function updBanner(){
const m={draw:[1,'DRAW KARTU'],choose:[1,'PILIH AKSI'],place:[2,'TARUH BIDAK'],rep:[2,'GANTI BIDAK'],skT:[2,'SKILL: TARGET'],skS:[2,'SKILL: KORBAN'],move:[3,'GERAKKAN BIDAK']}[S.ph];
if(!m){setT(UI.t1,'PERTANDINGAN',640,18,1);UI.t1.setColor('110;70;40');setT(UI.t2,'GAME OVER',640,38,1);UI.dots.forEach(o=>o.hide(true));return}
UI.t1.setColor(COL[S.p]);setT(UI.t1,PN(S.p)+'  -  FASE '+m[0]+'/3',640,18,1);
setT(UI.t2,m[1],640,38,1);
UI.dots.forEach((o,k)=>{o.hide(false);o.setColor(k<m[0]-1?'190;140;85':k==m[0]-1?'247;172;62':'225;217;199')})}
function updHUD(dt){
for(let i=0;i<2;i++){const h=HUD[i];
if(GH[i]>HP[i]){if(hold[i]>0)hold[i]-=dt;else GH[i]=Math.max(HP[i],GH[i]-MAXHP*0.4*dt)}else GH[i]=HP[i];
let sx=0;if(shake[i]>0){shake[i]-=dt;sx=Math.sin(shake[i]*80)*7*clamp(shake[i]/0.5,0,1)}
if(flash[i]>0)flash[i]=Math.max(0,flash[i]-dt*2.2);
const r=HP[i]/MAXHP,g=GH[i]/MAXHP,f0=h.f0+sx,tx=h.tx+sx,wf=h.tw*r,wg=h.tw*g;
h.frame.setPosition(f0,40);h.track.setPosition(tx,h.ty);
h.ghost.setWidth(Math.max(0.01,wg));h.ghost.setPosition(i?tx+h.tw-wg:tx,h.ty);
h.fill.setWidth(Math.max(0.01,wf));h.fill.setPosition(i?tx+h.tw-wf:tx,h.ty);
h.fill.hide(HP[i]<=0);h.gloss.hide(HP[i]<=0);
h.fill.setColor(r>0.5?'110;200;70':r>0.25?'245;180;50':'230;70;60');h.fill.setOpacity(r>0&&r<=0.25?170+85*Math.sin(clk*9):255);
h.gloss.setWidth(Math.max(0.01,wf));h.gloss.setPosition(i?tx+h.tw-wf:tx,h.ty+2);
h.flash.setPosition(tx,h.ty);h.flash.setOpacity(Math.round(200*flash[i]));
h.act.setPosition(h.f0+14+sx,85);h.act.hide(!!S.over||S.p!=i);
if(h.last!==HP[i]){h.last=HP[i];setT(h.num,HP[i]+' / '+MAXHP,i?h.f0+4:h.f0+446,14,i?0:2);h.mx=h.num.getX()}
h.name.setPosition(h.nx+sx,10);h.num.setPosition(h.mx+sx,14)}}
function updFx(dt){for(let i=fx.length-1;i>=0;i--){const f=fx[i];f.t+=dt;const u=f.t/f.dur;
if(u>=1){f.o.deleteFromScene(sc);fx.splice(i,1);continue}
const y=f.y+f.vy*ease(u),op=u<0.6?255:255*(1-(u-0.6)/0.4);
if(f.center)put(f.o,f.s,f.cx,y,1);else f.o.setPosition(f.x,y);
if(f.o.setOpacity)f.o.setOpacity(op)}}

/* ---------- sinkronisasi online ---------- */
function sendState(){if(!ON||applying||waiting||!ON.conn||!ON.conn.open)return;
try{ON.conn.send({t:'state',gen:netGen,B:B,S:S,HP:HP})}catch(e){}}
function applyState(m){applying=true;waiting=false;const old=HP.slice();
if(m.gen!==curGen){curGen=m.gen;clearCards();shownDeal=-1;fx.forEach(f=>f.o.deleteFromScene(sc));fx=[]}
const nOld=cnt(0)+cnt(1);B=m.B;S=m.S;HP=m.HP.slice();const nNew=cnt(0)+cnt(1);if(m.gen===curGen&&nNew<nOld)SKS.capture();else if(m.gen===curGen&&nNew>nOld)SKS.place();
for(let p=0;p<2;p++)if(HP[p]<old[p]){hold[p]=0.6;shake[p]=0.5;flash[p]=1;popDamage(p,old[p]-HP[p],checkers(B,p));if(HP[p]>0)SKS.check()}
R();applying=false}
function pollNet(){if(!ON)return;
while(ON.inbox.length){const m=ON.inbox.shift();if(!m)continue;
if(m.t=='state')applyState(m);else if(m.t=='restart'&&ON.role===0)init()}
if(ON.closed&&!disc)showDisc()}
/* tombol KE MENU di layar kemenangan */
function toMenu(){SKS.stopVoice();if(ON){try{ON.peer.destroy()}catch(e){}G0.__online=null}G0.getSceneStack().replace('Menu',false)}
function restart(){if(!ON||ON.role===0){init();return}try{ON.conn.send({t:'restart'})}catch(e){}}
function showDisc(){disc=true;clearCards();box(0,0,1280,720,'30;20;10',400,170);
mkt('Lawan terputus',640,240,50,'230;120;20',{bold:1,z:410,al:1});
mkt('Koneksi ke lawan terputus.',640,312,24,'255;248;225',{bold:1,z:410,al:1,ol:'110;70;40'});
box(500,400,280,64,'110;70;40',410);mkt('KE MENU',640,416,30,'255;248;225',{bold:1,z:420,al:1})}
function discClick(x,y){if(x>=500&&x<=780&&y>=400&&y<=464){try{ON.peer.destroy()}catch(e){}G0.__online=null;G0.getSceneStack().replace('Menu',false)}}
/* ---------- EFEK VISUAL & ANIMASI ---------- */
const PAL=['255;99;132','255;205;86','75;192;192','54;162;235','153;102;255','255;159;64','255;255;255','120;220;120'];
const rnd=(a,b)=>a+Math.random()*(b-a);
const pick=a=>a[Math.floor(Math.random()*a.length)];
const easeBack=u=>{const c1=1.70158,c3=c1+1;return 1+c3*Math.pow(u-1,3)+c1*Math.pow(u-1,2)};
const easeBounce=u=>{const n=7.5625,d=2.75;if(u<1/d)return n*u*u;if(u<2/d){u-=1.5/d;return n*u*u+0.75}if(u<2.5/d){u-=2.25/d;return n*u*u+0.9375}u-=2.625/d;return n*u*u+0.984375};
let parts=[],clk=0,pend={},pcs=[],pul=[],camT=0,camA=0,camD=1,hover=null,vicOn=false,vicT=0,vt1=null,vt2=null,vb=null,vb2=null,vstars=[],fade=null,motes=[],fwT=0,cfT=0;
const LAY=sc.getLayer('');let CX0=640,CY0=360;try{CX0=LAY.getCameraX();CY0=LAY.getCameraY()}catch(e){}
function camShake(a,d){camA=Math.max(camT>0?camA:0,a);camT=Math.max(camT,d);camD=Math.max(0.01,camT)}
function dot(x,y,sz,col,op,z){const o=mkp('Ui','titik',x-sz/2,y-sz/2,z||285);o.setColor(col);o.setWidth(sz);o.setHeight(sz);o.setOpacity(op);return o}
function addP(p){if(parts.length>360){p.o.deleteFromScene(sc);if(p.bar)p.bar.deleteFromScene(sc);return}parts.push(p)}
function spark(x,y,n,cols,o){o=o||{};for(let i=0;i<n;i++){const a=rnd(0,6.283),v=rnd(o.v0||90,o.v1||280),s=rnd(o.s0||8,o.s1||14),c=Array.isArray(cols)?pick(cols):cols;
addP({k:'dot',o:dot(x,y,s,c,255,o.z),x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,g:o.g==null?420:o.g,t:0,life:rnd(o.l0||0.5,o.l1||0.9),s0:s,s1:o.end||2,drag:o.drag||0})}}
function ring(x,y,col,big,life){addP({k:'dot',o:dot(x,y,20,col,255,284),x:x,y:y,vx:0,vy:0,g:0,t:0,life:life||0.45,s0:20,s1:big||160,fadeOnly:1})}
function dust(x,y){for(let i=0;i<6;i++){const s=rnd(10,18);addP({k:'dot',o:dot(x,y,s,'236;222;196',150,19),x:x+rnd(-10,10),y:y,vx:rnd(-80,80),vy:rnd(-40,-8),g:-10,t:0,life:rnd(0.35,0.55),s0:s,s1:s*2.2,drag:3,fadeOnly:1})}}
function confetti(x,y,vx,vy,g){const w=rnd(8,14),h=rnd(5,9),o=box(x,y,w,h,pick(PAL),290,255);
addP({k:'conf',o:o,x:x,y:y,vx:vx,vy:vy,g:g||0,w:w,h:h,a:rnd(0,360),va:rnd(-420,420),sw:rnd(0,6),sf:rnd(3,6),t:0,life:rnd(3.2,5),drag:g?1.6:0})}
function firework(x,y,col){spark(x,y,30,[col,'255;255;255','255;214;80'],{v0:120,v1:330,l0:0.9,l1:1.4,g:140,s0:9,s1:13,end:1,drag:1.2,z:283});ring(x,y,'255;250;220',150,0.35)}
function addFlash(col,peak,life){addP({k:'flash',o:box(0,0,1280,720,col,286,0),peak:peak,t:0,life:life})}
function ghost(q,x,y){if(!q)return;const t=T(x,y),px=t.cx-40*t.s,py=t.ay-FOOT*t.s,o=sc.createObject('Bidak');o.setAnimationName(q.t+q.o);o.setScale(t.s);o.setZOrder(150);o.setPosition(px,py);
addP({k:'ghost',o:o,x:px,y:py,vx:rnd(-90,90),vy:-rnd(200,300),g:800,a:0,va:rnd(-500,500),t:0,life:0.8});
spark(t.cx,t.cy-10,16,[COL[q.o],'255;255;255','255;214;80'],{v0:80,v1:260,g:300,s0:8,s1:13})}
function splash(s,col){const bar=box(0,300,1280,0,col,282,0),o=mkt(s,640,322,42,'255;248;225',{bold:1,z:284,al:1,ol:col});
addP({k:'splash',o:o,bar:bar,s:s,t:0,life:1.15})}
function kingCell(p){for(let i=0;i<8;i++)for(let j=0;j<8;j++){const q=B[i][j];if(q&&q.t=='K'&&q.o==p)return[i,j]}return null}
function checkFx(p,d){const k=kingCell(p);if(!k)return;const kt=T(k[0],k[1]),cx=kt.cx,cy=kt.cy-20*kt.s;
addFlash('220;30;30',120,0.55);camShake(4+Math.min(d,25)*0.35,0.4);
spark(cx,cy,22,['255;90;70','255;190;80','255;255;255'],{v0:90,v1:300,g:260,l0:0.5,l1:0.9,s0:9,s1:14});ring(cx,cy,'255;80;60',230,0.6)}
function landFx(pc,a){const cx=pc.ax,cy=pc.ay;dust(cx,cy);
if(a.kind=='drop')spark(cx,cy-30,10,[COL[pc.q.o],'255;255;255'],{v0:50,v1:170,g:200,s0:6,s1:10,l0:0.4,l1:0.7});
if(a.cap){spark(cx,cy-20,24,[COL[pc.q.o],'255;214;80','255;255;255'],{v0:100,v1:320,g:380,s0:8,s1:14});ring(cx,cy-10,'255;240;200',200,0.45);camShake(6,0.25)}}
function updPieces(dt){
pcs.forEach(pc=>{const a=pend[pc.k],S0=pc.s;let dx=0,dy=0,op=255,hgt=0,sdx=0,sdy=0,sk0=S0;
if(a){const u=clamp(a.t/a.dur,0,1);
if(a.kind=='drop'){const b=easeBounce(u);hgt=150*(1-b)*S0;dy=-hgt;op=255*clamp(u*5,0,1);if(u>=0.364&&!a.landed){a.landed=1;landFx(pc,a)}}
else{const e=ease(u),fx0=a.fx-pc.ax,fy0=a.fy-pc.ay,arc=Math.sin(u*Math.PI)*38*S0;dx=fx0*(1-e);const base=fy0*(1-e);dy=base-arc;hgt=arc;sdx=dx;sdy=base;sk0=S0+((a.fs||S0)-S0)*(1-e);if(u>=1&&!a.landed){a.landed=1;landFx(pc,a)}}}
let lift=0;if(pc.sel&&!a)lift=(-12+Math.sin(clk*6)*2.5)*S0;
if(vicOn&&S.over&&!S.over.draw&&pc.q.t=='K'){if(pc.q.o==S.over.win)lift=-Math.abs(Math.sin(clk*5))*30*S0;else{op=Math.min(op,110);lift=6*S0}}
const idle=Math.sin(clk*2.2+pc.ph)*1.6,h=Math.max(0,hgt-lift)/S0;
pc.o.setScale(sk0);pc.o.setPosition(pc.ax+dx-40*sk0,pc.ay+dy+idle+lift-FOOT*sk0);pc.o.setOpacity(op);
const sk=1/(1+h/90),w=46*S0*sk,hh=14*S0*sk,cx=pc.ax+sdx,cy=pc.ay-2*S0+sdy;
pc.sh.setWidth(w);pc.sh.setHeight(hh);pc.sh.setPosition(cx-w/2,cy-hh/2);pc.sh.setOpacity(80*sk*op/255)});
for(const k in pend){const a=pend[k];a.t+=dt;if(a.t>=a.dur+0.05)delete pend[k]}}
function updPul(){pul.forEach(p=>{const s=Math.sin(clk*4+p.ph);p.o.setOpacity(p.a=='skak'?150+105*Math.abs(Math.sin(clk*7)):p.a=='sel'?215+40*s:170+85*(0.5+0.5*s))});
HUD.forEach((h,i)=>{if(h.act)h.act.setOpacity(150+105*(0.5+0.5*Math.sin(clk*4)))})}
function updParts(dt){for(let i=parts.length-1;i>=0;i--){const p=parts[i];p.t+=dt;const u=p.t/p.life;
if(u>=1){p.o.deleteFromScene(sc);if(p.bar)p.bar.deleteFromScene(sc);parts.splice(i,1);continue}
if(p.k=='flash'){p.o.setOpacity(p.peak*Math.pow(1-u,2));continue}
if(p.k=='splash'){const a=u<0.22?ease(u/0.22):u>0.78?1-ease((u-0.78)/0.22):1,xo=(u<0.5?-1:1)*(1-a)*260;
put(p.o,p.s,640+xo,322,1);p.o.setOpacity(255*a);p.bar.setHeight(Math.max(0.01,84*a));p.bar.setPosition(0,342-42*a);p.bar.setOpacity(175*a);continue}
if(p.drag){const f=Math.max(0,1-p.drag*dt);p.vx*=f;p.vy*=f}
p.vy+=p.g*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;
if(p.k=='dot'){const s=p.s0+(p.s1-p.s0)*u;p.o.setWidth(s);p.o.setHeight(s);p.o.setPosition(p.x-s/2,p.y-s/2);
p.o.setOpacity(255*(p.fadeOnly?(1-u)*0.6:(u<0.55?1:1-(u-0.55)/0.45)))}
else if(p.k=='conf'){p.a+=p.va*dt;p.sw+=dt*p.sf;if(p.y>780)p.t=p.life;
p.o.setHeight(p.h*(0.3+0.7*Math.abs(Math.cos(p.sw*2))));p.o.setPosition(p.x+Math.sin(p.sw)*28,p.y);p.o.setAngle(p.a);p.o.setOpacity(255*(u>0.85?1-(u-0.85)/0.15:1))}
else if(p.k=='ghost'){p.a+=p.va*dt;p.o.setPosition(p.x,p.y);p.o.setAngle(p.a);p.o.setOpacity(255*(1-u))}}}
function updCam(dt){if(camT>0){camT-=dt;const a=camA*Math.max(0,camT/camD);try{LAY.setCameraX(CX0+rnd(-a,a));LAY.setCameraY(CY0+rnd(-a,a))}catch(e){}}
else if(camA!==0){camA=0;try{LAY.setCameraX(CX0);LAY.setCameraY(CY0)}catch(e){}}}
function updAmb(dt,mx,my){
motes.forEach(m=>{m.y-=m.vy*dt;m.x+=Math.sin(clk*0.8+m.ph)*14*dt;if(m.y<-10){m.y=730;m.x=rnd(0,1280)}
m.o.setPosition(m.x-m.s/2,m.y-m.s/2);m.o.setOpacity(m.op*(0.55+0.45*Math.sin(clk*1.6+m.ph)))});
if(fade){const u=clamp(clk/0.6,0,1);fade.setOpacity(255*(1-u));if(u>=1){fade.deleteFromScene(sc);fade=null}}
if(hover){const cc=HW.open?null:cellAt(mx,my),bx=cc?cc[0]:-1,by=cc?cc[1]:-1,ok=!!cc&&!S.over&&!disc&&!waiting&&mine()&&cardMode===null&&!pcs.some(pc=>pc.k==bx+','+by&&pend[pc.k]);
hover.hide(!ok);if(ok){const t=T(bx,by);hover.setWidth(t.w);hover.setHeight(t.h);hover.setPosition(t.cx-t.w/2,t.cy-t.h/2);hover.setOpacity(60+30*Math.sin(clk*5))}}}
function startVic(o){SKS.win();vicOn=true;vicT=0;fwT=0.2;cfT=0;
camShake(10,0.6);addFlash('255;255;255',200,0.7);
for(let i=0;i<46;i++){confetti(0,720,rnd(180,520),-rnd(560,900),380);confetti(1280,720,-rnd(180,520),-rnd(560,900),380)}
vstars.forEach(s=>s.o.deleteFromScene(sc));vstars=[];
for(let i=0;i<10;i++){const a=i/10*6.283+rnd(-0.2,0.2),o2=box(0,0,18,18,'255;214;80',292);o2.setAngle(45);vstars.push({o:o2,ph:rnd(0,6),x:640+Math.cos(a)*rnd(250,330),y:268+Math.sin(a)*rnd(60,95)})}}
function updOver(dt){
if(!S.over){vicOn=false;vicT=0;return}
if(!S.over.draw&&!vicOn&&vt1)startVic(S.over);
vicT+=dt;const T=vicT;
if(vt1){if(vt1.__w==null)vt1.__w=vt1.getWidth()||200;
const s=Math.max(0.01,easeBack(clamp(T/0.55,0,1))*(1+0.035*Math.sin(clk*4))),w=vt1.__w*s,c=0.5+0.5*Math.sin(clk*5);
if(vt1.setScale)vt1.setScale(s);vt1.setPosition(640-w/2,238+32*(1-s));
vt1.setColor(Math.round(230+25*c)+';'+Math.round(120+90*c)+';'+Math.round(20+40*c))}
if(vt2){const a=clamp((T-0.45)/0.4,0,1);if(vt2.setOpacity)vt2.setOpacity(255*a);const w=vt2.getWidth?vt2.getWidth():200;vt2.setPosition(640-(w>0?w/2:100),306+(1-a)*24)}
if(vb){if(vb.__w==null){vb.__w=vb.getWidth()||280;vb.__h=vb.getHeight()||60}
const a=clamp((T-0.8)/0.35,0,1),k=(0.6+0.4*ease(a))*(1+0.04*Math.sin(clk*5)),cx=500+vb.__w/2,cy=400+vb.__h/2;
vb.setWidth(vb.__w*k);vb.setHeight(vb.__h*k);vb.setPosition(cx-vb.__w*k/2,cy-vb.__h*k/2);vb.setOpacity(255*a)}
if(vb2){vb2.setOpacity(255*clamp((T-0.95)/0.35,0,1))}
if(!vicOn)return;
flash[S.over.win]=0.18+0.18*Math.sin(clk*7);
vstars.forEach(s=>{const z=10+12*(0.5+0.5*Math.sin(clk*6+s.ph));s.o.setWidth(z);s.o.setHeight(z);s.o.setPosition(s.x-z/2,s.y-z/2);s.o.setOpacity(120+135*(0.5+0.5*Math.sin(clk*6+s.ph)))});
fwT-=dt;if(fwT<=0){fwT=rnd(0.3,0.5);firework(rnd(160,1120),rnd(70,300),pick([COL[S.over.win],pick(PAL),pick(PAL)]));camShake(2,0.12)}
cfT+=dt;while(cfT>0.03){cfT-=0.03;confetti(rnd(0,1280),-20,rnd(-25,25),rnd(110,240),0)}}
function mkS(a,z,x,y){const t=T(x,y),o=mk('Sorot',a,t.cx-t.w/2,t.cy-t.h/2,z);o.setWidth(t.w);o.setHeight(t.h);pul.push({o:o,ph:(x+y)*0.5,a:a});return o}
function resetFx(){parts.forEach(p=>{p.o.deleteFromScene(sc);if(p.bar)p.bar.deleteFromScene(sc)});parts=[];
vstars.forEach(s=>s.o.deleteFromScene(sc));vstars=[];vicOn=false;vicT=0;vt1=vt2=vb=vb2=null;
pend={'0,3':{kind:'drop',t:-0.15,dur:0.55},'7,4':{kind:'drop',t:-0.3,dur:0.55}};
if(fade)fade.deleteFromScene(sc);fade=box(0,0,1280,720,'0;0;0',1000,255);clk=Math.min(clk,0);try{LAY.setCameraX(CX0);LAY.setCameraY(CY0)}catch(e){}camT=0;camA=0}
function buildFX(){for(let i=0;i<16;i++){const s=rnd(4,9),m={x:rnd(0,1280),y:rnd(0,720),vy:rnd(6,18),ph:rnd(0,6),s:s,op:rnd(55,115)};m.o=dot(m.x,m.y,s,'255;244;214',m.op,95);motes.push(m)}
hover=mkp('Sorot','sel',0,0,11);hover.setOpacity(70);hover.hide(true)}
/* ---------- AI LAWAN (mode VS AI) ---------- */
/* AI = pemain 2. Tiap giliran AI menyusun semua rencana "aksi kartu + langkah", menilai tiap posisi akhir
   (materi, damage skak, tekanan ke raja, bidak menggantung), lalu (level 2-3) mengecek balasan terbaik lawan. */
const VAL={P:100,N:300,B:320,R:500,Q:900};
const cp=b=>b.map(k=>k.slice());
function aiMoves(b,o){const r=[];for(let i=0;i<8;i++)for(let j=0;j<8;j++){const q=b[i][j];if(q&&q.o==o)legal(b,i,j).forEach(m=>r.push([i,j,m[0],m[1]]))}return r}
function aiApply(b,m){const b2=cp(b),q=b2[m[0]][m[1]];b2[m[2]][m[3]]={t:q.t,o:q.o,m:1};b2[m[0]][m[1]]=null;return b2}
function chkDmg(b,o){let d=0;checkers(b,o).forEach(q=>{d+=PTS[q.t]||0});return d}
function aiAtk(b,i,j,q){if(q.t=='P'){const d=q.o?-1:1,a=i+d,r=[];if(a>=0&&a<8)for(const dy of[-1,1]){const c=j+dy;if(c>=0&&c<8)r.push([a,c])}return r}return raw(b,i,j)}
/* nilai bidak penyerang termurah ke kotak (x,y); 99999 = tidak ada, 10000 = hanya raja */
function minAtk(b,x,y,by){let r=99999;for(let i=0;i<8;i++)for(let j=0;j<8;j++){const q=b[i][j];if(!q||q.o!=by)continue;
let h=false;if(q.t=='P'){const d=by?-1:1;h=(i+d==x&&Math.abs(j-y)==1)}else h=raw(b,i,j).some(m=>m[0]==x&&m[1]==y);
if(h){const v=q.t=='K'?10000:VAL[q.t];if(v<r)r=v}}return r}
/* skor posisi dari sudut pandang 'me' (makin besar makin bagus). mover = yang jalan berikutnya */
function aiEval(b,me,mover,hm,ho){const op=1-me;let s=0,mk=null,ok=null;const pcs=[];
for(let i=0;i<8;i++)for(let j=0;j<8;j++){const q=b[i][j];if(!q)continue;
if(q.t=='K'){if(q.o==me)mk=[i,j];else ok=[i,j];continue}
s+=(q.o==me?1:-1)*VAL[q.t];pcs.push([i,j,q])}
const dm=chkDmg(b,me),dO=chkDmg(b,op);
if(dO>0&&dO>=ho)return 1e6;if(dm>0&&dm>=hm)return-1e6;
const W=(d,hp)=>d*34*(1+0.9*(1-hp/MAXHP));
s+=W(dO,ho)-W(dm,hm);
for(const e of pcs){const i=e[0],j=e[1],q=e[2],own=q.o==me,v=VAL[q.t],tk=own?ok:mk;
if(tk){let c=0;aiAtk(b,i,j,q).forEach(m=>{if(Math.abs(m[0]-tk[0])<=1&&Math.abs(m[1]-tk[1])<=1)c++});s+=(own?1:-1)*c*14}
const by=1-q.o,a=minAtk(b,i,j,by);
if(a<99999){const b2=cp(b);b2[i][j]={t:'P',o:by,m:1};const df=minAtk(b2,i,j,q.o)<99999;
const loss=df?(a>=10000?0:Math.max(0,v-a)):v;s-=(own?1:-1)*loss*(q.o==mover?0.25:0.9)}}
return s}
/* semua rencana giliran ini -> pilih yang terbaik. Mengembalikan {card:{ci,k,...}|null, mv:[x1,y1,x2,y2], b, s} */
function aiThink(){const p=S.p,op=1-p,hm=HP[p],ho=HP[op],cand=[];
const addMoves=(b,card)=>{aiMoves(b,p).forEach(m=>{const b2=aiApply(b,m);cand.push({card:card,mv:m,b:b2,s:aiEval(b2,p,op,hm,ho)})})};
if(S.ph=='choose')addMoves(B,null);
else{const seen={};S.cards.forEach((t,ci)=>{if(seen[t])return;seen[t]=1;
if(t!='S'){
if(cnt(p)<8){for(let x=0;x<8;x++){if(!zone(p,x))continue;for(let y=0;y<8;y++)if(!B[x][y]){const b1=cp(B);b1[x][y]={t:t,o:p,m:0};addMoves(b1,{ci:ci,k:'place',x:x,y:y})}}}
else{for(let x=0;x<8;x++)for(let y=0;y<8;y++){const q=B[x][y];if(q&&q.o==p&&q.t!='K'&&q.t!=t){const b1=cp(B);b1[x][y]={t:t,o:p,m:0};addMoves(b1,{ci:ci,k:'rep',x:x,y:y})}}}}
else{const mi=[],en=[];for(let x=0;x<8;x++)for(let y=0;y<8;y++){const q=B[x][y];if(q&&q.t!='K')(q.o==p?mi:en).push([x,y,SAC[q.t],VAL[q.t]])}
const tot=mi.reduce((s,m)=>s+m[2],0),n=mi.length;
en.forEach(e=>{if(e[2]>tot)return;let bm=null,bv=1e9;
for(let m=1;m<(1<<n);m++){let sp=0,vv=0;for(let i=0;i<n;i++)if(m&(1<<i)){sp+=mi[i][2];vv+=mi[i][3]}
if(sp<e[2])continue;let red=false;for(let i=0;i<n;i++)if((m&(1<<i))&&sp-mi[i][2]>=e[2]){red=true;break}if(red)continue;
if(vv<bv){bv=vv;bm=m}}
if(bm==null)return;const sacs=[];for(let i=0;i<n;i++)if(bm&(1<<i))sacs.push([mi[i][0],mi[i][1]]);
const b1=cp(B);b1[e[0]][e[1]]=null;sacs.forEach(s=>{b1[s[0]][s[1]]=null});
addMoves(b1,{ci:ci,k:'skill',tg:[e[0],e[1]],sac:sacs})})}})}
if(!cand.length)return null;
cand.sort((a,b)=>b.s-a.s);
const lv=AI_LEVEL;let best=cand[0];
if(cand[0].s>=9e5)return best;
if(lv<=1){best=cand[Math.floor(Math.random()*Math.min(cand.length,6))]}
else{const K=Math.min(cand.length,lv>=3?30:8);let bs=-1e12;
for(let i=0;i<K;i++){const c=cand[i];let f=c.s;
const rep=aiMoves(c.b,op);
if(rep.length){const ho2=ho-chkDmg(c.b,op);let mn=1e12;
for(const m of rep){const v=aiEval(aiApply(c.b,m),p,p,hm,ho2);if(v<mn)mn=v}
f=0.3*c.s+0.7*mn}
if(lv<3)f+=(Math.random()-0.5)*90;
if(f>bs){bs=f;best=c}}}
if(lv<3&&cand.length>1&&Math.random()<AI_MISTAKE)best=cand[1+Math.floor(Math.random()*Math.min(4,cand.length-1))];
return best}
/* fase 'choose' (bidak penuh): serang langsung atau ganti kartu? */
function aiChoose(){const p=S.p,pl=aiThink();if(!pl)return{att:true,plan:null};
const cap=!!B[pl.mv[2]][pl.mv[3]],ck=chkDmg(pl.b,1-p)>0;let weak=1e9;
B.forEach(c=>c.forEach(q=>{if(q&&q.o==p&&q.t!='K')weak=Math.min(weak,VAL[q.t])}));
const sw=!cap&&!ck&&weak<=320&&Math.random()<(AI_LEVEL<=1?0.5:0.8);
return{att:!sw,plan:pl}}
let aiK='',aiT=0,aiPlan=null,ACT=new Set();
function aiCancel(){S.ph='draw';S.sac=[];S.tgt=null;S.need=0;S.sel=null;S.hl=[];aiPlan=null;R()}
function aiFirst(f){for(let x=0;x<8;x++)for(let y=0;y<8;y++)if(f(x,y,B[x][y]))return[x,y];return null}
function aiTick(dt){
if(!isAI(S.p)||S.over||disc||waiting){aiT=0;return}
if(HW.open)return;   /* VS AI: game berhenti sementara selama Cara Main dibuka */
const p=S.p,ph=S.ph,key=p+':'+S.n[p]+':'+S.deal+':'+ph+':'+(S.tgt?1:0)+':'+S.sac.length+':'+(S.sel?1:0)+':'+cardMode;
if(key!==aiK){aiK=key;aiT=0}else aiT+=dt;
const a=aiPlan&&aiPlan.card;
if(ph=='choose'){if(aiT<0.9)return;const d=aiChoose();
if(d.att){aiPlan=d.plan;toMove()}else{aiPlan=null;S.ph='draw';deal();R()}return}
if(ph=='draw'){if(cardMode!=='ready'||aiT<0.9)return;aiPlan=aiThink();startPick(aiPlan&&aiPlan.card?aiPlan.card.ci:0);return}
if(ph=='place'||ph=='rep'){if(aiT<0.7)return;
let c=a&&a.k==ph?[a.x,a.y]:aiFirst((x,y,q)=>ph=='place'?(!q&&zone(p,x)):(q&&q.o==p&&q.t!='K'));
if(c)cell(c[0],c[1]);else aiCancel();return}
if(ph=='skT'){if(aiT<0.7)return;
let c=a&&a.k=='skill'?a.tg:aiFirst((x,y,q)=>q&&q.o!=p&&q.t!='K'&&SAC[q.t]<=ownVal(p));
if(c)cell(c[0],c[1]);else aiCancel();return}
if(ph=='skS'){if(aiT<0.6)return;
let c=a&&a.k=='skill'?a.sac.find(m=>!S.sac.some(s=>s[0]==m[0]&&s[1]==m[1])):null;
if(!c)c=aiFirst((x,y,q)=>q&&q.o==p&&q.t!='K'&&!S.sac.some(s=>s[0]==x&&s[1]==y));
if(c)cell(c[0],c[1]);else aiCancel();return}
if(ph=='move'){if(aiT<0.7)return;
let m=aiPlan&&aiPlan.mv;
if(!S.sel){
if(!m||!B[m[0]][m[1]]||B[m[0]][m[1]].o!=p||!legal(B,m[0],m[1]).some(z=>z[0]==m[2]&&z[1]==m[3])){
const all=aiMoves(B,p);m=all.length?all[Math.floor(Math.random()*all.length)]:null}
if(!m)return;aiPlan=aiPlan||{};aiPlan.mv=m;cell(m[0],m[1])}
else if(m)cell(m[2],m[3]);return}}
/* ---------- POP UP "CARA MAIN" (2 halaman: prev / next / close) ---------- */
const HBTN=[545,640,190,56],HW={open:false,page:0,objs:[],hits:[],stat:null},HWN=2;let HB=null;
function hit0(x,y,r){return x>=r[0]&&x<=r[0]+r[2]&&y>=r[1]&&y<=r[1]+r[3]}
function hwBox(x,y,w,h,col,z,op){const o=box(x,y,w,h,col,z,op);HW.objs.push(o);return o}
function hwTxt(s,x,y,sz,col,opt){opt=opt||{};opt.z=opt.z||520;const o=mkt(s,x,y,sz,col,opt);HW.objs.push(o);return o}
function hwSpr(a,x,y,s,z){const o=mkp('Bidak',a,x,y,z||515);o.setScale(s);HW.objs.push(o);return o}
function hwMk(a,x,y,z){const o=mkp('Tombol',a,x,y,z);HW.objs.push(o);return o}
function hwCard(x,y,w,h){hwBox(x+3,y+5,w,h,'110;70;40',506,70);hwBox(x-2,y-2,w+4,h+4,'176;130;80',507);hwBox(x,y,w,h,'255;244;214',508)}
function hwBtn(x,y,w,h,label,col,on,fn){hwMk(!on?'hwb_gray':col=='200;70;60'?'hwb_red':'hwb_blue',x,y,505);
hwTxt(label,x+w/2,y+h/2-14,26,on?'255;248;225':'235;228;214',{bold:1,al:1,ol:on?'60;38;26':'140;125;105',z:520});if(on)HW.hits.push([x,y,w,h,fn])}
function hwFrame(){hwMk('hwpanel',0,0,500);
hwTxt('CARA BERMAIN',640,42,40,'255;248;225',{bold:1,al:1,ol:'110;70;40'});
hwTxt('Halaman '+(HW.page+1)+' / '+HWN,1196,60,20,'110;70;40',{bold:1,al:2,ol:'255;248;225'});
HW.stat=ON?hwTxt('',140,56,18,'255;248;225',{bold:1,ol:'110;70;40'}):null;
hwBtn(100,626,220,50,'< PREV','60;120;200',HW.page>0,()=>{HW.page--;hwBuild()});
hwBtn(530,626,220,50,'TUTUP','200;70;60',true,hwClose);
hwBtn(960,626,220,50,'NEXT >','60;120;200',HW.page<HWN-1,()=>{HW.page++;hwBuild()})}
function hwHead(s,x,y,w){hwBox(x,y+4,w,38,'60;38;26',509,90);hwBox(x,y,w,38,'110;70;40',510);hwTxt(s,x+w/2,y+2,26,'255;248;225',{bold:1,al:1,ol:'60;38;26'})}
function hwPage1(){
const L=[['K','Raja','Melangkah 1 kotak ke segala arah (lurus maupun diagonal). Jaga Rajamu agar tidak di-skak!','Tidak bisa dikorbankan atau disingkirkan'],
['Q','Ratu','Melangkah sejauh apa pun: lurus (kiri/kanan/atas/bawah) maupun diagonal, selama tidak terhalang bidak lain.'],
['R','Benteng','Melangkah sejauh apa pun secara lurus (kiri/kanan/atas/bawah). Tidak bisa melompati bidak lain.'],
['B','Gajah (Bishop)','Melangkah sejauh apa pun secara diagonal. Tidak bisa melompati bidak lain.'],
['N','Kuda','Melangkah berbentuk huruf L: 2 kotak lurus lalu 1 kotak ke samping. Satu-satunya bidak yang bisa melompati bidak lain.'],
['P','Pion','Maju 1 kotak (langkah pertama boleh 2 kotak). Menyerang 1 kotak secara diagonal ke depan.']];
L.forEach((e,i)=>{const cx=i%2,cy=Math.floor(i/2),x0=cx?660:96,y0=118+cy*165;
hwCard(x0-10,y0-4,548,152);
hwSpr(e[0]+'0',x0,y0+10,1.05,515);
hwTxt(e[1],x0+104,y0,26,'230;120;20',{bold:1,ol:'110;70;40',z:520});
hwTxt(e[2],x0+104,y0+34,16,'110;70;40',{w:420,z:520,ol:'255;232;184'});
hwTxt(e[3]||('Nilai korban: '+SAC[e[0]]+'   |   Damage skak: '+PTS[e[0]]),x0+104,y0+118,15,'150;80;30',{bold:1,w:420,z:520,ol:'255;232;184'})})}
function hwPage2(){
/* kiri: kartu skill */
hwHead('KARTU SKILL',90,118,540);
const kc=sc.createObject('KartuBesar');kc.setAnimationName('S');kc.setScale(0.62);kc.setPosition(100,168);kc.setZOrder(515);HW.objs.push(kc);
hwTxt('Kartu Skill muncul mulai giliranmu ke-5. Pakai untuk menyingkirkan 1 bidak lawan (selain Raja) dengan mengorbankan bidakmu sendiri.',232,166,16,'110;70;40',{w:398,z:520,ol:'255;244;214'});
hwTxt('Harga = nilai bidak yang disingkirkan. Korbankan bidakmu sampai total nilainya cukup:',100,346,16,'110;70;40',{w:530,bold:1,z:520,ol:'255;244;214'});
[['P','Pion'],['N','Kuda'],['B','Gajah'],['R','Benteng'],['Q','Ratu']].forEach((e,i)=>{const x=100+i*106;hwCard(x-4,392,100,100);
hwSpr(e[0]+'0',x+2,394,0.56,515);hwTxt('= '+SAC[e[0]],x+50,404,26,'230;120;20',{bold:1,ol:'110;70;40',z:520});hwTxt(e[1],x+44,460,14,'110;70;40',{bold:1,al:1,z:520,ol:'255;232;184'})});
hwTxt('Contoh: menyingkirkan Ratu lawan (5) -> korbankan Benteng (4) + Pion (1), atau Ratu-mu sendiri (5).',100,506,16,'150;80;30',{w:530,bold:1,z:520,ol:'255;244;214'});
hwTxt('Pilih bidak lawan dulu, lalu pilih bidakmu yang dikorbankan. Tekan BATAL bila ingin membatalkan.',100,556,15,'110;70;40',{w:530,z:520,ol:'255;244;214'});
/* kanan: cara mengalahkan lawan */
hwBox(644,118,4,490,'110;70;40',509,120);
hwHead('MENGALAHKAN LAWAN',662,118,528);
const T2=[['SKAK = DAMAGE','Tiap pemain punya '+MAXHP+' HP. Di awal giliran, jika Rajamu sedang diserang (di-skak), HP berkurang sesuai bidak penyerang: Pion '+PTS.P+', Kuda '+PTS.N+', Gajah '+PTS.B+', Benteng '+PTS.R+', Ratu '+PTS.Q+'. Beberapa penyerang = damage dijumlahkan.'],
['MENANG','K.O.: HP lawan habis (0). Atau SKAKMAT: Raja lawan di-skak dan tidak ada langkah yang bisa menyelamatkannya.'],
['SERI','Seri bila pemain tidak punya langkah legal, tetapi Rajanya tidak sedang di-skak (stalemate).'],
['ALUR GILIRAN','1) Pilih 1 dari 3 kartu.  2) Taruh / ganti bidak atau pakai Skill.  3) Gerakkan 1 bidak. Maksimal 8 bidak di papan (termasuk Raja).']];
let y=168;const hs=[84,60,48,60];
T2.forEach((e,i)=>{hwTxt(e[0],662,y,20,'230;120;20',{bold:1,ol:'110;70;40',z:520});hwTxt(e[1],662,y+28,17,'110;70;40',{w:528,z:520,ol:'255;244;214'});y+=hs[i]+40})}
function hwBuild(){hwClear();hwFrame();if(HW.page==0)hwPage1();else hwPage2()}
function hwClear(){HW.objs.forEach(o=>o.deleteFromScene(sc));HW.objs=[];HW.hits=[];HW.stat=null}
function hwOpen(){if(HW.open)return;HW.open=true;SKS.popup();HW.page=0;hwBuild()}
function hwClose(){HW.open=false;hwClear()}
function hwClick(x,y){for(let i=HW.hits.length-1;i>=0;i--){const h=HW.hits[i];if(x>=h[0]&&x<=h[0]+h[2]&&y>=h[1]&&y<=h[1]+h[3]){h[4]();return}}}
function buildHowBtn(){HB=mkp('Tombol','howto',HBTN[0],HBTN[1],125)}
/* tombol Cara Main: berdenyut pelan, membesar saat disorot */
function updHow(mx,my){if(!HB)return;const hv=!HW.open&&!disc&&hit0(mx,my,HBTN),k=hv?1.08:1+0.025*Math.sin(clk*3);HB.setScale(k);HB.setPosition(HBTN[0]-(k-1)*HBTN[2]/2,HBTN[1]-(k-1)*HBTN[3]/2)}
/* saat pop up terbuka: game online tetap jalan; tutup otomatis bila game selesai / koneksi putus */
function updHW(){if(!HW.open)return;if(disc||S.over){hwClose();return}
if(HW.stat){const m=mine();HW.stat.setColor(m?'255;255;150':'255;248;225');setT(HW.stat,m?'LIVE: giliranmu!':'LIVE: lawan bermain',140,56,0)}}
/* ---------- gambar ulang papan & panel pojok ---------- */
function R(){dyn.forEach(o=>o.deleteFromScene(sc));dyn=[];hits=[];pcs=[];pul=[];ACT=new Set();vt1=vt2=vb=vb2=null;const p=S.p,hs=new Set(S.hl.map(m=>m.join())),sk=new Set(S.sac.map(m=>m.join())),tg=S.tgt?S.tgt.join():null,ov=ownVal(p);
for(let y=0;y<8;y++)for(let x=0;x<8;x++){const q=B[x][y],k=x+','+y,t=T(x,y);let a=null;
if(!S.over){if(S.ph=='place'&&!q&&zone(p,x))a='langkah';
if(S.ph=='rep'&&q&&q.o==p&&q.t!='K')a='target';
if(S.ph=='skT'&&q&&q.o!=p&&q.t!='K'&&SAC[q.t]<=ov)a='target';
if(S.ph=='skS'){if(q&&q.o==p&&q.t!='K')a=sk.has(k)?'dipilih':'target';if(k==tg)a='tangkap'}
if(S.ph=='move'){if(S.sel&&S.sel.join()==k)a='sel';if(hs.has(k))a=q?'tangkap':'langkah'}}
if(q&&q.t=='K'&&chk(B,q.o))mkS('skak',9,x,y);
if(a){mkS(a,10,x,y);if(!(S.ph=='skS'&&k==tg))ACT.add(k)}
if(q){const bo=mk('Bidak',q.t+q.o,t.cx-40*t.s,t.ay-FOOT*t.s,20+y),sh=mk('Ui','titik',t.cx-23*t.s,t.ay-9*t.s,12);bo.setScale(t.s);sh.setColor('45;30;20');sh.setWidth(46*t.s);sh.setHeight(14*t.s);sh.setOpacity(80);pcs.push({k:k,o:bo,sh:sh,ax:t.cx,ay:t.ay,s:t.s,ph:x*0.7+y*1.3,sel:!!(S.sel&&S.sel.join()==k),q:q});
if(!S.over&&a=='target'&&(S.ph=='skT'||S.ph=='skS')){const lb=(S.ph=='skT'?'':'+')+SAC[q.t];txt(lb,t.cx,t.ay-FOOT*t.s-18,20,'255;214;80',{bold:1,al:1,z:200,ol:'110;70;40'})}}}
for(let i=0;i<2;i++){const px=i?972:12,py=556,act=!S.over&&S.p==i;
mk('Ui','panel',px,py,100);
txt(PT(i),px+16,py+10,20,COL[i],{bold:1});
txt('Bidak '+cnt(i)+'/8',px+280,py+13,15,'110;70;40',{al:2,bold:1});
txt('Giliran ke-'+S.n[i],px+16,py+36,13,'150;108;72');
if(act){const mm=mine()?msg():(AIS.length?'Komputer sedang berpikir...':'Lawan sedang bermain...');txt(mm,px+16,py+55,mm.length>28?13:15,'110;70;40',{w:266});
if(mine()&&S.ph=='choose'){mk('Ui','btn_ganti',px+10,py+98,110);hit(px+10,py+98,138,46,()=>{S.ph='draw';deal();R()});
mk('Ui','btn_serang',px+148,py+98,110);hit(px+148,py+98,138,46,toMove)}
if(mine()&&(S.ph=='skT'||S.ph=='skS'))txt('Ratu 5, Benteng 4, Gajah 3, Kuda 2, Pion 1',px+16,py+79,11,'150;108;72',{bold:1,w:268});
if(mine()&&['skT','skS','rep','place'].indexOf(S.ph)>=0){mk('Ui','btn_batal',px+79,py+98,110);hit(px+79,py+98,138,46,()=>{S.ph='draw';S.sac=[];S.tgt=null;S.need=0;R()})}}
else if(!S.over)txt('Menunggu...',px+16,py+58,16,'150;120;90')}
if(S.over){const o=S.over,t1=o.ko?'K.O.!':o.draw?'SERI':'SKAKMAT!',
t2=o.draw?'Stalemate - tidak ada langkah legal':o.ko?'HP '+PT(1-o.win)+' habis. '+PT(o.win)+' menang!':PT(o.win)+' menang!';
const d=box(0,0,1280,720,'30;20;10',60,120);dyn.push(d);
vt1=txt(t1,640,238,54,'230;120;20',{bold:1,z:300,al:1});vt2=txt(t2,640,306,26,'255;248;225',{bold:1,z:300,al:1,ol:'110;70;40'});
vb=mk('Tombol','ulang',500,400,301);hit(500,400,280,60,()=>{if(S.over&&!S.over.draw&&vicT<0.8)return;restart()});
vb2=mk('Tombol','menu',500,478,301);hit(500,478,280,60,()=>{if(S.over&&!S.over.draw&&vicT<0.8)return;toMenu()})}
if(S.ph=='draw'&&!S.over&&!waiting){if(cardMode===null)showCards(S.deal===shownDeal)}
else if(cardMode!==null&&cardMode!=='picked')clearCards();
updBanner();sendState()}
function click(x,y){
SKS.click();
if(disc){discClick(x,y);return}
if(HW.open){hwClick(x,y);return}
if(hit0(x,y,HBTN)){hwOpen();return}
if(waiting||(!S.over&&!mine()))return;
if(cardMode!==null){if(cardMode=='ready'){for(const c of cards){if(Math.abs(x-c.cx)<=CW/2&&Math.abs(y-CY)<=CH/2){startPick(c.i);return}}}return}
for(let i=hits.length-1;i>=0;i--){const h=hits[i];if(x>=h[0]&&x<h[0]+h[2]&&y>=h[1]&&y<h[1]+h[3]){h[4]();return}}
const cc=cellAt(x,y);
if(cc&&ACT.has(cc[0]+','+cc[1])){cell(cc[0],cc[1]);return}   /* titik langkah / sorot selalu menang atas badan bidak */
for(let by=7;by>=0;by--)for(let bx=0;bx<8;bx++){if(!B[bx][by])continue;const t=T(bx,by);if(x>=t.cx-30*t.s&&x<=t.cx+30*t.s&&y>=t.ay-92*t.s&&y<=t.ay+6*t.s){cell(bx,by);return}}
if(cc)cell(cc[0],cc[1])}
function update(dt,mx,my){clk+=dt;pollNet();updHW();updHow(mx,my);updCards(dt,mx,my);aiTick(dt);updOver(dt);updHUD(dt);updPieces(dt);updPul();updParts(dt);updCam(dt);updAmb(dt,mx,my);updFx(dt)}
runtimeScene.__c={click:click,update:update};buildHUD();buildFX();buildHowBtn();init();
}
const im=runtimeScene.getGame().getInputManager();
const cur=runtimeScene.getLayer('').convertCoords(im.getCursorX(),im.getCursorY());
if(im.isMouseButtonReleased(0))runtimeScene.__c.click(cur[0],cur[1]);
runtimeScene.__c.update(Math.min(0.05,(runtimeScene.getElapsedTime?runtimeScene.getElapsedTime():16)/1000),cur[0],cur[1]);

};
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.userFunc0xa55c70(runtimeScene);

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDBidakObjects1.length = 0;
gdjs.GameCode.GDSorotObjects1.length = 0;
gdjs.GameCode.GDLapanganObjects1.length = 0;
gdjs.GameCode.GDMejaObjects1.length = 0;
gdjs.GameCode.GDLatarObjects1.length = 0;
gdjs.GameCode.GDPanelObjects1.length = 0;
gdjs.GameCode.GDKartuObjects1.length = 0;
gdjs.GameCode.GDTombolObjects1.length = 0;
gdjs.GameCode.GDPapanObjects1.length = 0;
gdjs.GameCode.GDTeksObjects1.length = 0;
gdjs.GameCode.GDKotakObjects1.length = 0;
gdjs.GameCode.GDUiObjects1.length = 0;
gdjs.GameCode.GDKartuBesarObjects1.length = 0;
gdjs.GameCode.GDPrev_9595bidak_9595K0Objects1.length = 0;
gdjs.GameCode.GDPrev_9595bidak_9595K1Objects1.length = 0;
gdjs.GameCode.GDPrev_9595bidak_9595P0Objects1.length = 0;
gdjs.GameCode.GDPrev_9595bidak_9595N0Objects1.length = 0;
gdjs.GameCode.GDPrev_9595bidak_9595R1Objects1.length = 0;
gdjs.GameCode.GDPrev_9595bidak_9595Q1Objects1.length = 0;
gdjs.GameCode.GDPrev_9595bidak_9595B0Objects1.length = 0;
gdjs.GameCode.GDPrev_9595sorot_9595skakObjects1.length = 0;
gdjs.GameCode.GDPrev_9595prev_9595dimObjects1.length = 0;
gdjs.GameCode.GDPrev_9595prev_9595c_9595trackObjects1.length = 0;
gdjs.GameCode.GDPrev_9595prev_9595c_9595greenObjects1.length = 0;
gdjs.GameCode.GDPrev_9595prev_9595c_9595glossObjects1.length = 0;
gdjs.GameCode.GDPrev_9595ui_9595hp_9595frameObjects1.length = 0;
gdjs.GameCode.GDPrev_9595prev_9595c_9595ghostObjects1.length = 0;
gdjs.GameCode.GDPrev_9595prev_9595c_9595p1Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks1Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks2Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks3Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks4Objects1.length = 0;
gdjs.GameCode.GDPrev_9595ui_9595bannerObjects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks5Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks6Objects1.length = 0;
gdjs.GameCode.GDPrev_9595prev_9595titik_9595onObjects1.length = 0;
gdjs.GameCode.GDPrev_9595prev_9595titik_9595offObjects1.length = 0;
gdjs.GameCode.GDPrev_9595ui_9595panelObjects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks7Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks8Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks9Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks10Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks11Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks12Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks13Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks14Objects1.length = 0;
gdjs.GameCode.GDPrev_9595kartu_9595depan_9595P0Objects1.length = 0;
gdjs.GameCode.GDPrev_9595kartu_9595depan_9595Q0Objects1.length = 0;
gdjs.GameCode.GDPrev_9595kartu_9595belakangObjects1.length = 0;

gdjs.GameCode.eventsList0(runtimeScene);
gdjs.GameCode.GDBidakObjects1.length = 0;
gdjs.GameCode.GDSorotObjects1.length = 0;
gdjs.GameCode.GDLapanganObjects1.length = 0;
gdjs.GameCode.GDMejaObjects1.length = 0;
gdjs.GameCode.GDLatarObjects1.length = 0;
gdjs.GameCode.GDPanelObjects1.length = 0;
gdjs.GameCode.GDKartuObjects1.length = 0;
gdjs.GameCode.GDTombolObjects1.length = 0;
gdjs.GameCode.GDPapanObjects1.length = 0;
gdjs.GameCode.GDTeksObjects1.length = 0;
gdjs.GameCode.GDKotakObjects1.length = 0;
gdjs.GameCode.GDUiObjects1.length = 0;
gdjs.GameCode.GDKartuBesarObjects1.length = 0;
gdjs.GameCode.GDPrev_9595bidak_9595K0Objects1.length = 0;
gdjs.GameCode.GDPrev_9595bidak_9595K1Objects1.length = 0;
gdjs.GameCode.GDPrev_9595bidak_9595P0Objects1.length = 0;
gdjs.GameCode.GDPrev_9595bidak_9595N0Objects1.length = 0;
gdjs.GameCode.GDPrev_9595bidak_9595R1Objects1.length = 0;
gdjs.GameCode.GDPrev_9595bidak_9595Q1Objects1.length = 0;
gdjs.GameCode.GDPrev_9595bidak_9595B0Objects1.length = 0;
gdjs.GameCode.GDPrev_9595sorot_9595skakObjects1.length = 0;
gdjs.GameCode.GDPrev_9595prev_9595dimObjects1.length = 0;
gdjs.GameCode.GDPrev_9595prev_9595c_9595trackObjects1.length = 0;
gdjs.GameCode.GDPrev_9595prev_9595c_9595greenObjects1.length = 0;
gdjs.GameCode.GDPrev_9595prev_9595c_9595glossObjects1.length = 0;
gdjs.GameCode.GDPrev_9595ui_9595hp_9595frameObjects1.length = 0;
gdjs.GameCode.GDPrev_9595prev_9595c_9595ghostObjects1.length = 0;
gdjs.GameCode.GDPrev_9595prev_9595c_9595p1Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks1Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks2Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks3Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks4Objects1.length = 0;
gdjs.GameCode.GDPrev_9595ui_9595bannerObjects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks5Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks6Objects1.length = 0;
gdjs.GameCode.GDPrev_9595prev_9595titik_9595onObjects1.length = 0;
gdjs.GameCode.GDPrev_9595prev_9595titik_9595offObjects1.length = 0;
gdjs.GameCode.GDPrev_9595ui_9595panelObjects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks7Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks8Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks9Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks10Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks11Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks12Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks13Objects1.length = 0;
gdjs.GameCode.GDPrev_9595Teks14Objects1.length = 0;
gdjs.GameCode.GDPrev_9595kartu_9595depan_9595P0Objects1.length = 0;
gdjs.GameCode.GDPrev_9595kartu_9595depan_9595Q0Objects1.length = 0;
gdjs.GameCode.GDPrev_9595kartu_9595belakangObjects1.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
