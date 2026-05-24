'use strict';

// ─── GAS BACKEND URL ──────────────────────────────────────────────────────────
const GAS_URL = import.meta.env.VITE_GAS_URL ?? '';

function cloudEnabled(){ return !!GAS_URL; }

// ─── FORMATIONS ───────────────────────────────────────────────────────────────
const FORMATS = {
  '5v5':{label:'5v5',dur:40,formations:{
    '1-2-1':[{id:'GK',l:'GK',x:50,y:86},{id:'RD',l:'D',x:70,y:66},{id:'LD',l:'D',x:30,y:66},{id:'CM',l:'M',x:50,y:44},{id:'ST',l:'F',x:50,y:20}],
    '2-2':[{id:'GK',l:'GK',x:50,y:86},{id:'RD',l:'D',x:70,y:66},{id:'LD',l:'D',x:30,y:66},{id:'RS',l:'F',x:68,y:26},{id:'LS',l:'F',x:32,y:26}],
  }},
  '7v7':{label:'7v7',dur:50,formations:{
    '2-3-1':[{id:'GK',l:'GK',x:50,y:87},{id:'RD',l:'RD',x:72,y:71},{id:'LD',l:'LD',x:28,y:71},{id:'RM',l:'RM',x:76,y:50},{id:'CM',l:'CM',x:50,y:50},{id:'LM',l:'LM',x:24,y:50},{id:'ST',l:'ST',x:50,y:21}],
    '3-2-1':[{id:'GK',l:'GK',x:50,y:87},{id:'RD',l:'RD',x:76,y:71},{id:'CD',l:'CD',x:50,y:71},{id:'LD',l:'LD',x:24,y:71},{id:'RM',l:'RM',x:66,y:48},{id:'LM',l:'LM',x:34,y:48},{id:'ST',l:'ST',x:50,y:20}],
    '1-3-2':[{id:'GK',l:'GK',x:50,y:87},{id:'CB',l:'CB',x:50,y:72},{id:'RM',l:'RM',x:76,y:51},{id:'CM',l:'CM',x:50,y:51},{id:'LM',l:'LM',x:24,y:51},{id:'RF',l:'RF',x:67,y:21},{id:'LF',l:'LF',x:33,y:21}],
  }},
  '9v9':{label:'9v9',dur:60,formations:{
    '3-3-2':[{id:'GK',l:'GK',x:50,y:87},{id:'RD',l:'RD',x:76,y:72},{id:'CD',l:'CD',x:50,y:72},{id:'LD',l:'LD',x:24,y:72},{id:'RM',l:'RM',x:76,y:51},{id:'CM',l:'CM',x:50,y:51},{id:'LM',l:'LM',x:24,y:51},{id:'RF',l:'RF',x:65,y:23},{id:'LF',l:'LF',x:35,y:23}],
    '3-2-3':[{id:'GK',l:'GK',x:50,y:87},{id:'RD',l:'RD',x:76,y:73},{id:'CD',l:'CD',x:50,y:73},{id:'LD',l:'LD',x:24,y:73},{id:'RM',l:'RM',x:66,y:52},{id:'LM',l:'LM',x:34,y:52},{id:'RW',l:'RW',x:78,y:23},{id:'CF',l:'CF',x:50,y:19},{id:'LW',l:'LW',x:22,y:23}],
    '4-3-1':[{id:'GK',l:'GK',x:50,y:87},{id:'RB',l:'RB',x:80,y:72},{id:'CB1',l:'CB',x:60,y:72},{id:'CB2',l:'CB',x:40,y:72},{id:'LB',l:'LB',x:20,y:72},{id:'RM',l:'RM',x:72,y:50},{id:'CM',l:'CM',x:50,y:50},{id:'LM',l:'LM',x:28,y:50},{id:'ST',l:'ST',x:50,y:20}],
  }},
  '11v11':{label:'11v11',dur:70,formations:{
    '4-3-3':[{id:'GK',l:'GK',x:50,y:87},{id:'RB',l:'RB',x:82,y:71},{id:'CB1',l:'CB',x:62,y:71},{id:'CB2',l:'CB',x:38,y:71},{id:'LB',l:'LB',x:18,y:71},{id:'RM',l:'RM',x:78,y:51},{id:'CM',l:'CM',x:50,y:51},{id:'LM',l:'LM',x:22,y:51},{id:'RW',l:'RW',x:76,y:27},{id:'ST',l:'ST',x:50,y:20},{id:'LW',l:'LW',x:24,y:27}],
    '4-4-2':[{id:'GK',l:'GK',x:50,y:87},{id:'RB',l:'RB',x:82,y:71},{id:'CB1',l:'CB',x:62,y:71},{id:'CB2',l:'CB',x:38,y:71},{id:'LB',l:'LB',x:18,y:71},{id:'RM',l:'RM',x:80,y:50},{id:'CM1',l:'CM',x:60,y:50},{id:'CM2',l:'CM',x:40,y:50},{id:'LM',l:'LM',x:20,y:50},{id:'ST1',l:'ST',x:64,y:21},{id:'ST2',l:'ST',x:36,y:21}],
    '4-2-3-1':[{id:'GK',l:'GK',x:50,y:87},{id:'RB',l:'RB',x:82,y:71},{id:'CB1',l:'CB',x:62,y:71},{id:'CB2',l:'CB',x:38,y:71},{id:'LB',l:'LB',x:18,y:71},{id:'CDM1',l:'CDM',x:62,y:57},{id:'CDM2',l:'CDM',x:38,y:57},{id:'RAM',l:'AM',x:76,y:37},{id:'CAM',l:'AM',x:50,y:37},{id:'LAM',l:'AM',x:24,y:37},{id:'ST',l:'ST',x:50,y:20}],
    '3-5-2':[{id:'GK',l:'GK',x:50,y:87},{id:'CB1',l:'CB',x:70,y:72},{id:'CB2',l:'CB',x:50,y:72},{id:'CB3',l:'CB',x:30,y:72},{id:'RWB',l:'WB',x:88,y:52},{id:'CM1',l:'CM',x:68,y:52},{id:'CM2',l:'CM',x:50,y:52},{id:'CM3',l:'CM',x:32,y:52},{id:'LWB',l:'WB',x:12,y:52},{id:'ST1',l:'ST',x:64,y:22},{id:'ST2',l:'ST',x:36,y:22}],
  }},
};

const PROFILES = {
  GK:{color:'#6D28D9',bg:'#F5F3FF',label:'Goalkeeper',behaviors:['Shot stopping — set position, ready for all shot types','Distribution short — plays to defenders confidently under pressure','Distribution long — accurate service to switch or relieve pressure','Sweeper-keeper — reads through balls, comes to claim, wins 1v1s','Communication — organizes defensive line, commands the box','Build-out role — acts as 11th field player in team possession']},
  DEF:{color:'#2563EB',bg:'#EFF6FF',label:'Defender',behaviors:['Distribution under pressure — receives and plays out with confidence','1v1 defending — delay, deny, dictate, win the ball cleanly','Defensive shape — maintains compact block, pressure-cover-balance','Recovery run — tracks runners, gets back behind the ball quickly','Aerial defending — times jump, wins header, clears decisively','Communication — organizes teammates, leads defensive line']},
  MID:{color:'#1E8449',bg:'#EDFAF1',label:'Midfielder',behaviors:['Receiving between lines — shows to receive, protects ball, turns','Vertical passing — plays through pressure, finds feet behind the press','Pressing trigger recognition — presses at the right moment','Box arrival — late runs into finishing positions, arrives unmarked','Defensive recovery — transitions back to shape after losing ball','Combination play — wall passes, overlaps, third-man combinations']},
  FWD:{color:'#C0392B',bg:'#FEF0EE',label:'Forward',behaviors:['Timing of run — moves in behind at the right moment, stays onside','Central positioning — stays in goal zone, resists drifting wide','Combination play — links with midfielders in tight spaces','Pressing from front — applies immediate pressure on GK or CB','First touch under pressure — cushions and controls to create space','Finishing composure — stays calm, selects the right finish type']},
};

function posColor(p){return{GK:'#6D28D9',DEF:'#2563EB',MID:'#1E8449',FWD:'#C0392B'}[p]||'#0F1D3D';}
function posLabel(p){return PROFILES[p]?.label||p;}
function uid(){return Math.random().toString(36).slice(2,9);}
function fmtTime(s){const m=Math.floor(s/60),sec=s%60;return String(m).padStart(2,'0')+':'+String(sec).padStart(2,'0');}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

function computePlayingTime(starters,log,gameSecs){
  const times={},entry={},onField=new Set(starters);
  starters.forEach(id=>{entry[id]=0;});
  log.filter(e=>e.type==='sub').sort((a,b)=>a.min-b.min).forEach(ev=>{
    if(ev.outId&&entry[ev.outId]!==undefined){
      times[ev.outId]=(times[ev.outId]||0)+Math.max(0,ev.min-entry[ev.outId])*60;
      delete entry[ev.outId];onField.delete(ev.outId);
    }
    if(ev.inId){entry[ev.inId]=ev.min;onField.add(ev.inId);}
  });
  const endMin=Math.floor(gameSecs/60);
  onField.forEach(id=>{if(entry[id]!==undefined)times[id]=(times[id]||0)+Math.max(0,endMin-entry[id])*60;});
  return times;
}

// ─── DEMO DATA ────────────────────────────────────────────────────────────────
const DEMO_PLAYERS = [
  {id:'p01',name:'Marcus Webb',    jersey:'1', pos:'GK',  age:'13',notes:'Strong shot-stopper. Distribution under pressure is the main development focus this season.',games:[]},
  {id:'p02',name:'Tyler Brooks',   jersey:'2', pos:'DEF', age:'13',notes:'Right back with good attacking instinct. Needs to track runners more consistently.',games:[]},
  {id:'p03',name:'Noah Chen',      jersey:'4', pos:'DEF', age:'13',notes:'Physically dominant CB. 1v1 defending is a real strength. Technical work on the ball is the priority.',games:[]},
  {id:'p04',name:'Jaylen Foster',  jersey:'5', pos:'DEF', age:'12',notes:'Left-footed CB with excellent reading of the game. Needs to develop communication.',games:[]},
  {id:'p05',name:'Cam Rivera',     jersey:'3', pos:'DEF', age:'13',notes:'Attack-minded left back. Defensive recovery runs need consistent attention.',games:[]},
  {id:'p06',name:'Ethan Price',    jersey:'8', pos:'MID', age:'13',notes:'Best passer on the team. Vertical passing courage is the key development focus.',games:[]},
  {id:'p07',name:'Darius King',    jersey:'6', pos:'MID', age:'13',notes:'Box-to-box energy. Pressing trigger recognition improving — needs to hold shape more consistently.',games:[]},
  {id:'p08',name:'Lucas Ortiz',    jersey:'10',pos:'MID', age:'12',notes:'Creative and technically gifted. Defensive recovery is the main growth area.',games:[]},
  {id:'p09',name:'Aiden Scott',    jersey:'7', pos:'MID', age:'13',notes:'Wide midfielder with great work rate. Final ball quality is the next step.',games:[]},
  {id:'p10',name:'Jordan Cole',    jersey:'9', pos:'FWD', age:'13',notes:'Top scorer. Tendency to drift wide when frustrated. Central positioning is an ongoing focus.',games:[]},
  {id:'p11',name:'Marcus Lee',     jersey:'11',pos:'FWD', age:'12',notes:'Explosive pace. Decision-making in the final third improving each week.',games:[]},
  {id:'p12',name:'Caleb Nash',     jersey:'14',pos:'MID', age:'12',notes:'Youngest on the team. Sharp football brain. Physical development is the main limiter.',games:[]},
  {id:'p13',name:'Devon Shaw',     jersey:'16',pos:'DEF', age:'13',notes:'Squad depth at CB. Has improved more than any other player this season.',games:[]},
  {id:'p14',name:'Kofi Mensah',    jersey:'17',pos:'FWD', age:'13',notes:'Good hold-up play and link-up with midfielders. Finishing composure under development.',games:[]},
];

// Build 10 games of history and attach to players
function buildDemoData(){
  const players = JSON.parse(JSON.stringify(DEMO_PLAYERS));

  const gameData = [
    {id:'g01',date:'Sep 7',  opponent:'Northside FC',    format:'11v11',formation:'4-3-3',result:'Won', us:3,them:1,dur:4200,
     goals:[{scorer:'p10',assist:'p08',min:14},{scorer:'p10',assist:'p06',min:38},{scorer:'p11',assist:null,min:61}],
     subs:[{outId:'p09',inId:'p12',min:55},{outId:'p11',inId:'p14',min:65}],
     starters:['p01','p02','p03','p04','p05','p06','p07','p08','p09','p10','p11'],
     goals_conceded:1,
     idpNotes:{p10:'Scored twice — both from central positions. Stayed in the goal zone well in the first half. Drifted wide in second half after the third goal.',p08:'Excellent distribution. Two assists — both from vertical passes through the press. Keep building on this.',p01:'Good shot-stop at 0-0. Distribution to Tyler was confident. Keep playing out under pressure.'}},
    {id:'g02',date:'Sep 14', opponent:'Eastside United', format:'11v11',formation:'4-3-3',result:'Won', us:2,them:0,dur:4200,
     goals:[{scorer:'p06',assist:'p08',min:22},{scorer:'p10',assist:'p09',min:57}],
     subs:[{outId:'p07',inId:'p12',min:50},{outId:'p14',inId:'p13',min:60}],
     starters:['p01','p02','p03','p04','p05','p06','p07','p08','p09','p10','p11'],
     goals_conceded:0,
     idpNotes:{p06:'First goal of the season — late run from midfield, arrived unmarked. This is exactly what we worked on.',p03:'Clean sheet largely down to Noah reading the game early. Two key interceptions.',p01:'Clean sheet. Short distribution was excellent today — confident on the ball.'}},
    {id:'g03',date:'Sep 21', opponent:'Valley Rapids',   format:'11v11',formation:'4-3-3',result:'Lost',us:1,them:3,dur:4200,
     goals:[{scorer:'p10',assist:'p06',min:34}],
     subs:[{outId:'p08',inId:'p14',min:45},{outId:'p09',inId:'p12',min:45}],
     starters:['p01','p02','p03','p04','p05','p06','p07','p08','p09','p10','p11'],
     goals_conceded:3,
     idpNotes:{p07:'Three goals conceded from transitions. Darius was caught upfield twice. Counter-press trigger needs urgent work.',p04:'Jaylen was exposed aerially for two of the goals. Timing of the jump and defensive communication needs work.',p01:'Difficult day — one of the goals was stoppable. Reset well for the next game.'}},
    {id:'g04',date:'Sep 28', opponent:'Westport SC',     format:'11v11',formation:'4-4-2',result:'Won', us:3,them:2,dur:4200,
     goals:[{scorer:'p11',assist:'p09',min:8},{scorer:'p10',assist:'p08',min:29},{scorer:'p14',assist:'p10',min:72}],
     subs:[{outId:'p11',inId:'p14',min:60},{outId:'p06',inId:'p12',min:68}],
     starters:['p01','p02','p03','p04','p05','p06','p07','p08','p09','p10','p11'],
     goals_conceded:2,
     idpNotes:{p14:'Came on and scored the winner — excellent hold-up play leading to the goal. First goal of the season.',p10:'Two goals — central positioning was much improved from last week. Stayed in the goal zone both times.',p11:'Fast start — scored inside 10 mins. Combination play with Aiden is really clicking.'}},
    {id:'g05',date:'Oct 5',  opponent:'Central City FC', format:'11v11',formation:'4-3-3',result:'Draw',us:2,them:2,dur:4200,
     goals:[{scorer:'p08',assist:'p10',min:18},{scorer:'p09',assist:'p06',min:44}],
     subs:[{outId:'p09',inId:'p14',min:55},{outId:'p12',inId:'p13',min:70}],
     starters:['p01','p02','p03','p04','p05','p06','p07','p08','p12','p10','p11'],
     goals_conceded:2,
     idpNotes:{p08:'Lucas scored and assisted — the creative role suits him. Defensive recovery was better today.',p05:'Cam was caught on the overlap twice — led to both conceded goals. Recovery run timing needs more work.',p03:'Solid defensively until the 70th minute. Communication with Marcus in goal was noticeably better.'}},
    {id:'g06',date:'Oct 12', opponent:'Lakewood SC',     format:'11v11',formation:'4-3-3',result:'Won', us:4,them:0,dur:4200,
     goals:[{scorer:'p10',assist:'p08',min:11},{scorer:'p11',assist:'p09',min:24},{scorer:'p06',assist:null,min:55},{scorer:'p10',assist:'p11',min:67}],
     subs:[{outId:'p10',inId:'p14',min:70},{outId:'p07',inId:'p12',min:70}],
     starters:['p01','p02','p03','p04','p05','p06','p07','p08','p09','p10','p11'],
     goals_conceded:0,
     idpNotes:{p10:'Best game of the season — two goals, stayed central throughout. Relationship with Lucas in behind is developing well.',p06:'Ethan scored from midfield run — pressing trigger was sharp all game. Q:I from the coach was excellent today.',p01:'Clean sheet. Commanded the box on two corners — communication was clear and decisive.'}},
    {id:'g07',date:'Oct 19', opponent:'Hillside United', format:'11v11',formation:'4-3-3',result:'Lost',us:0,them:2,dur:4200,
     goals:[],
     subs:[{outId:'p08',inId:'p12',min:50},{outId:'p11',inId:'p14',min:50}],
     starters:['p01','p02','p03','p04','p05','p06','p07','p08','p09','p10','p11'],
     goals_conceded:2,
     idpNotes:{p10:'Jordan was well-marked all game — drifted wide to find space which pulled him out of position. Need to find him centrally.',p07:'Darius had a quiet game defensively — shape was poor after losing possession twice.',p02:'Tyler had a strong defensive game despite the loss — tracked his winger consistently.'}},
    {id:'g08',date:'Nov 2',  opponent:'Metro SC',        format:'11v11',formation:'4-2-3-1',result:'Won',us:2,them:1,dur:4200,
     goals:[{scorer:'p09',assist:'p06',min:33},{scorer:'p10',assist:'p08',min:58}],
     subs:[{outId:'p09',inId:'p14',min:65},{outId:'p11',inId:'p12',min:65}],
     starters:['p01','p02','p03','p04','p05','p06','p07','p08','p09','p10','p11'],
     goals_conceded:1,
     idpNotes:{p09:"Aiden's best goal of the season — combination play with Ethan leading to the finish. Final ball quality is improving.",p08:'Two key vertical passes led to both goals. Ethan is consistently finding feet behind the press now.',p04:'Jaylen commanded the aerial duels well in this game — timing of the jump was much better than the Valley Rapids match.'}},
    {id:'g09',date:'Nov 9',  opponent:'Harbor FC',       format:'11v11',formation:'4-3-3',result:'Won',us:3,them:1,dur:4200,
     goals:[{scorer:'p11',assist:'p08',min:7},{scorer:'p10',assist:null,min:41},{scorer:'p14',assist:'p10',min:78}],
     subs:[{outId:'p10',inId:'p13',min:72},{outId:'p06',inId:'p12',min:72}],
     starters:['p01','p02','p03','p04','p05','p06','p07','p08','p09','p10','p11'],
     goals_conceded:1,
     idpNotes:{p11:'Marcus started fast — goal inside 10 minutes from excellent timing of run behind the back line.',p14:'Kofi came on and scored again as a sub — hold-up play and link-up with Jordan is becoming a real threat late in games.',p06:'Three assists this season now for Ethan — vertical passing consistency is exceptional.'}},
    {id:'g10',date:'Nov 16', opponent:'Coastal United',  format:'11v11',formation:'4-3-3',result:'Won',us:3,them:0,dur:4200,
     goals:[{scorer:'p06',assist:'p10',min:19},{scorer:'p10',assist:'p11',min:44},{scorer:'p11',assist:'p09',min:63}],
     subs:[{outId:'p08',inId:'p12',min:60},{outId:'p09',inId:'p14',min:68}],
     starters:['p01','p02','p03','p04','p05','p06','p07','p08','p09','p10','p11'],
     goals_conceded:0,
     idpNotes:{p01:"Marcus's best game — clean sheet, commanded the box three times, and short distribution was confident every time. Big development from the start of the season.",p03:"Noah's communication was excellent today — led the defensive line verbally and kept the shape compact.",p10:'Jordan stayed central all game — three key involvements in goals. The combination play with Marcus Lee at the top is the best it has been.'}}
  ];

  // Build playing time and attach game history to each player
  gameData.forEach(g=>{
    const dur=g.dur;
    const starters=g.starters;
    const subs=g.subs.map(s=>({type:'sub',min:s.min,outId:s.outId,inId:s.inId}));
    const pt=computePlayingTime(starters,subs,dur);
    g.pt=pt;

    // Build full log
    const log=[];
    g.goals.forEach(gl=>{
      log.push({id:uid(),type:'goal',min:gl.min,team:'us',scorerId:gl.scorer,assistId:gl.assist||''});
    });
    // Add conceded goals at rough minutes
    const concMins=[35,52,65,78,82];let ci=0;
    for(let i=0;i<g.goals_conceded;i++){
      log.push({id:uid(),type:'goal',min:concMins[ci++]||70,team:'them',scorerId:'',assistId:''});
    }
    g.subs.forEach(s=>{
      log.push({id:uid(),type:'sub',min:s.min,outId:s.outId,inId:s.inId});
    });
    g.log=log.sort((a,b)=>a.min-b.min);

    // Attach to players
    Object.entries(pt).forEach(([pid,secs])=>{
      const player=players.find(p=>p.id===pid);
      if(!player)return;
      const mins=Math.round(secs/60);
      const pGoals=g.goals.filter(gl=>gl.scorer===pid).length;
      const pAssists=g.goals.filter(gl=>gl.assist===pid).length;
      const note=g.idpNotes?.[pid]||'';
      player.games.push({
        id:g.id,date:g.date,opponent:g.opponent,
        result:g.result,mins,goals:pGoals,assists:pAssists,note
      });
    });

    // Clean up fields we don't need in the game record
    delete g.goals;delete g.goals_conceded;delete g.subs;delete g.idpNotes;
  });

  return {players, games: gameData};
}

// ─── STATE ─────────────────────────────────────────────────────────────────────
let S={
  tab:'gameday',teamName:'NCFC U13 South',editingTeam:false,
  coachId:'',syncStatus:'offline',
  players:[],games:[],
  phase:'plan',opponent:'',matchDate:'',format:'11v11',formation:'4-3-3',
  lineup:{},subPlan:[],gameGoals:['','',''],
  gameSecs:0,timerOn:false,liveLog:[],onField:new Set(),confirmEnd:false,
  // playerOnSince: when each on-field player last came on (in gameSecs)
  // playerAccTime: banked seconds for players who have been subbed off
  playerOnSince:{},playerAccTime:{},
  pickerSlot:null,
  showAddPlayer:false,editPlayerId:null,formName:'',formJersey:'',formPos:'MID',formAge:'',formNotes:'',
  showSubPlanAdd:false,spOutId:'',spInId:'',spMin:'',spReason:'',
  showSubModal:false,lsOutId:'',lsInId:'',
  showGoalModal:false,lgTeam:'us',lgScorerId:'',lgAssistId:'',
  activeGameId:null,expandedPtPlayer:null,idpNotes:{},ptSaved:false,
  openProfileId:null,
  showSettings:false,restoreCode:'',restoreStatus:'',
  isDemo:false,
};

// ─── CLOUD SYNC ───────────────────────────────────────────────────────────────
let syncTimeout=null;
function scheduleSync(){if(!cloudEnabled())return;clearTimeout(syncTimeout);syncTimeout=setTimeout(syncToCloud,2000);}
async function syncToCloud(){
  if(!cloudEnabled()||!S.coachId)return;
  S.syncStatus='syncing';updateSyncDot();
  try{
    const res=await fetch(GAS_URL,{method:'POST',body:JSON.stringify({action:'save',coachId:S.coachId,data:{players:S.players,games:S.games,teamName:S.teamName}})});
    const json=await res.json();
    S.syncStatus=json.ok?'synced':'error';
  }catch(e){S.syncStatus='error';}
  updateSyncDot();
}
async function loadFromCloud(coachId){
  if(!cloudEnabled()||!coachId)return null;
  try{
    const res=await fetch(GAS_URL,{method:'POST',body:JSON.stringify({action:'load',coachId})});
    const json=await res.json();
    return json.ok?json.data:null;
  }catch(e){return null;}
}
function updateSyncDot(){
  const dot=document.getElementById('sync-dot');if(!dot)return;
  dot.className='sync-dot '+(cloudEnabled()?S.syncStatus:'offline');
  const lbl=document.getElementById('sync-label');
  if(lbl)lbl.textContent=cloudEnabled()?({synced:'Saved',syncing:'Saving…',error:'Sync error',offline:''}[S.syncStatus]||''):'';
}

// ─── PERSIST ──────────────────────────────────────────────────────────────────
function save(){
  if(S.isDemo)return;
  try{
    localStorage.setItem('gdm_players',JSON.stringify(S.players));
    localStorage.setItem('gdm_games',JSON.stringify(S.games));
    localStorage.setItem('gdm_team',S.teamName);
    localStorage.setItem('gdm_coach_id',S.coachId);
  }catch(e){}
  scheduleSync();
}

function load(){
  try{
    const p=localStorage.getItem('gdm_players');if(p)S.players=JSON.parse(p);
    const g=localStorage.getItem('gdm_games');if(g)S.games=JSON.parse(g);
    const t=localStorage.getItem('gdm_team');if(t)S.teamName=t;
    const c=localStorage.getItem('gdm_coach_id');
    if(c){S.coachId=c;}
    else{S.coachId=uid()+uid()+uid();localStorage.setItem('gdm_coach_id',S.coachId);}
  }catch(e){
    if(!S.coachId)S.coachId=uid()+uid()+uid();
  }
}

function loadDemo(){
  const demo=buildDemoData();
  S.players=demo.players;
  S.games=demo.games;
  S.teamName='NCFC U13 South';
  S.isDemo=true;
  S.lineup={GK:'p01',RB:'p02',CB1:'p03',CB2:'p04',LB:'p05',RM:'p06',CM:'p07',LM:'p08',RW:'p09',ST:'p10',LW:'p11'};
  S.opponent='Ridgeline FC';
  S.matchDate='Nov 23';
  S.gameGoals=['Counter-attack within 3 seconds of winning the ball','Defend set pieces — shape and communication','Jordan stays central — resist the drift wide'];
}

function clearDemoAndStart(){
  S.players=[];S.games=[];S.teamName='My Team';S.isDemo=false;
  S.lineup={};S.opponent='';S.matchDate='';S.gameGoals=['','',''];
  S.coachId=uid()+uid()+uid();
  localStorage.setItem('gdm_coach_id',S.coachId);
  save();render();
}

// ─── EXPORT / IMPORT ──────────────────────────────────────────────────────────
function exportData(){
  const data={version:1,exportedAt:new Date().toISOString(),teamName:S.teamName,coachId:S.coachId,players:S.players,games:S.games};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download='gameday-backup-'+new Date().toISOString().slice(0,10)+'.json';
  a.click();URL.revokeObjectURL(url);
}
function handleImportFile(input){
  const file=input.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      const data=JSON.parse(e.target.result);
      if(data.players)S.players=data.players;
      if(data.games)S.games=data.games;
      if(data.teamName)S.teamName=data.teamName;
      S.isDemo=false;
      save();render();
      alert('Data imported successfully.');
    }catch(ex){alert('Could not read that file.');}
  };
  reader.readAsText(file);
  input.value='';
}
async function restoreFromCode(code){
  if(!code.trim()){S.restoreStatus='Enter a sync code first.';render();return;}
  if(!cloudEnabled()){S.restoreStatus='Cloud backup is not configured yet.';render();return;}
  S.restoreStatus='Restoring…';render();
  const data=await loadFromCloud(code.trim());
  if(!data){S.restoreStatus='No data found for that sync code.';render();return;}
  if(data.players)S.players=data.players;
  if(data.games)S.games=data.games;
  if(data.teamName)S.teamName=data.teamName;
  S.coachId=code.trim();S.isDemo=false;
  S.restoreStatus='';S.restoreCode='';
  save();render();
  alert('Restored! All your data is back.');
}

// ─── TIMER ────────────────────────────────────────────────────────────────────
let timerInterval=null;
function startTimer(){
  if(timerInterval)return;
  timerInterval=setInterval(()=>{
    S.gameSecs++;
    // Update the main scoreboard clock
    const el=document.getElementById('live-timer');if(el)el.textContent=fmtTime(S.gameSecs);
    const el2=document.getElementById('live-min');if(el2)el2.textContent=Math.floor(S.gameSecs/60)+"'";
    // Update each on-field player's personal minute counter without re-rendering
    Object.entries(S.playerOnSince).forEach(([id,startSecs])=>{
      const el3=document.getElementById('pt-'+id);
      if(el3)el3.textContent=Math.floor(((S.playerAccTime[id]||0)+(S.gameSecs-startSecs))/60)+"'";
    });
  },1000);
}
function stopTimer(){clearInterval(timerInterval);timerInterval=null;}

// ─── RENDER ────────────────────────────────────────────────────────────────────
function render(){document.getElementById('app').innerHTML=buildApp();updateSyncDot();}

function buildApp(){
  return`
    <div class="hdr">
      <div class="hdr-row">
        <div class="hdr-logo">⚽</div>
        <div style="flex:1;cursor:pointer" onclick="toggleTeamEdit()">
          <div class="hdr-team">${esc(S.teamName)} <span style="font-size:10px;opacity:0.4">▾</span></div>
          <div class="hdr-sub">${S.players.length} players · ${S.games.length} games${S.isDemo?' · DEMO MODE':''}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="display:flex;align-items:center;gap:5px;cursor:pointer" onclick="openSettings()">
            <div class="sync-dot ${cloudEnabled()?S.syncStatus:'offline'}" id="sync-dot"></div>
            <span id="sync-label" style="font-size:9px;color:rgba(255,255,255,0.4)"></span>
          </div>
          <div onclick="openSettings()" style="width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:14px">⚙️</div>
        </div>
      </div>
      ${S.editingTeam?`<div class="hdr-edit-row"><input class="hdr-edit-input" id="team-name-input" value="${esc(S.teamName)}" placeholder="Team name"/><button style="padding:8px 16px;background:var(--gd);border-radius:8px;color:var(--nv);font-weight:700;font-size:13px;cursor:pointer;border:none;font-family:inherit" onclick="saveTeamName()">Save</button></div>`:''}
    </div>
    <div class="scroll-area">${buildContent()}</div>
    ${buildNav()}
    ${buildModals()}
  `;
}

function buildNav(){
  const tabs=[{id:'gameday',icon:'⚽',label:'Game Day'},{id:'roster',icon:'👥',label:'Roster'},{id:'profiles',icon:'👤',label:'Players'},{id:'history',icon:'📅',label:'History'}];
  return`<nav class="nav">${tabs.map(t=>`<div class="nav-item ${S.tab===t.id?'active':''}" onclick="setTab('${t.id}')"><div class="nav-icon">${t.icon}</div><div class="nav-label">${t.label}</div></div>`).join('')}</nav>`;
}

function buildContent(){
  if(S.tab==='gameday'){
    if(S.phase==='plan')return buildPlan();
    if(S.phase==='live')return buildLive();
    if(S.phase==='report')return buildReport();
  }
  if(S.tab==='roster')return buildRoster();
  if(S.tab==='profiles')return buildProfiles();
  if(S.tab==='history')return buildHistory();
  return '';
}

// ─── PLAN ──────────────────────────────────────────────────────────────────────
function buildPlan(){
  const fmt=FORMATS[S.format]||FORMATS['11v11'];
  const slots=fmt.formations[S.formation]||Object.values(fmt.formations)[0];
  const assigned=Object.values(S.lineup).filter(Boolean);
  const bench=S.players.filter(p=>!assigned.includes(p.id));
  return`
    ${S.isDemo?`<div class="demo-banner"><span style="font-size:20px">👋</span><div><div style="font-size:12px;font-weight:700;color:var(--gd)">Demo mode — NCFC U13 South</div><div style="font-size:10px;color:rgba(255,255,255,0.5);margin-top:2px">Exploring with sample data · <span style="color:var(--gd);cursor:pointer;text-decoration:underline" onclick="clearDemoAndStart()">Start with your own team →</span></div></div></div>`:''}
    <div class="card">
      <div class="field-label" style="margin-bottom:10px">MATCH DETAILS</div>
      <div class="grid2" style="margin-bottom:10px">
        <div><div class="field-label">OPPONENT</div><input type="text" value="${esc(S.opponent)}" placeholder="e.g. Westport SC" oninput="S.opponent=this.value"/></div>
        <div><div class="field-label">DATE</div><input type="text" value="${esc(S.matchDate)}" placeholder="Jan 18" oninput="S.matchDate=this.value"/></div>
      </div>
      <div style="margin-bottom:10px">
        <div class="field-label" style="margin-bottom:6px">GAME FORMAT</div>
        <div style="display:flex;gap:6px">
          ${Object.keys(FORMATS).map(f=>`<div class="pos-btn" style="background:${S.format===f?posColor({'5v5':'GK','7v7':'DEF','9v9':'MID','11v11':'FWD'}[f]||'GK'):'var(--sf)'};color:${S.format===f?'#fff':'var(--mu)'}" onclick="setFormat('${f}')">${f}</div>`).join('')}
        </div>
      </div>
      <div>
        <div class="field-label" style="margin-bottom:6px">FORMATION</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          ${Object.keys(fmt.formations).map(f=>`<div class="pill-btn" style="background:${S.formation===f?'var(--nv)':'var(--sf)'};color:${S.formation===f?'var(--gd)':'var(--mu)'}" onclick="setFormation('${f}')">${f}</div>`).join('')}
        </div>
      </div>
    </div>
    <div class="sect"><span>STARTING LINEUP — ${assigned.length}/${slots.length}</span><div class="sect-line"></div></div>
    ${S.players.length===0?`<div class="info-box" style="background:var(--aml);color:var(--am);border:0.5px solid #fcd34d">Add players to your roster first, then build your lineup here.</div>`:''}
    ${buildPitch(slots,S.lineup,S.players)}
    <div class="sect"><span>BENCH — ${bench.length}</span><div class="sect-line"></div></div>
    <div class="field-now-wrap" style="margin-bottom:14px">
      ${bench.map(p=>`<div class="chip"><div class="chip-jersey" style="background:${posColor(p.pos)}">${esc(p.jersey)}</div><span class="chip-name">${esc(p.name.split(' ')[0])}</span><span class="chip-pos">${esc(p.pos)}</span></div>`).join('')}
      ${bench.length===0?`<span style="font-size:11px;color:var(--su);font-style:italic">All players assigned</span>`:''}
    </div>
    <div class="sect"><span>SUBSTITUTION PLAN</span><div class="sect-line"></div><button class="sect-btn" onclick="openSubPlanAdd()">+ Add</button></div>
    ${S.subPlan.length===0?`<div style="font-size:11px;color:var(--su);font-style:italic;margin-bottom:12px">No planned substitutions yet.</div>`:''}
    ${S.subPlan.map((s,i)=>{const out=S.players.find(p=>p.id===s.outId);const inn=S.players.find(p=>p.id===s.inId);return`<div class="sub-plan-card"><div style="width:24px;height:24px;border-radius:50%;background:rgba(15,29,61,0.1);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:var(--nv);flex-shrink:0">${i+1}</div><div style="flex:1;font-size:12px"><span style="color:var(--mu)">${s.min}'</span><span style="color:var(--rd);font-weight:600;margin-left:5px">↓${out?.name.split(' ')[0]||'?'}</span><span style="color:var(--gn);font-weight:600;margin-left:4px">↑${inn?.name.split(' ')[0]||'?'}</span>${s.reason?`<div style="font-size:10px;color:var(--su)">${esc(s.reason)}</div>`:''}</div><div onclick="removeSubPlan('${s.id}')" style="font-size:12px;color:var(--rd);cursor:pointer;padding:4px 8px;background:var(--rdl);border-radius:6px">✕</div></div>`;}).join('')}
    <div class="sect"><span>GAME GOALS</span><div class="sect-line"></div></div>
    <div class="card">
      <div style="font-size:11px;color:var(--mu);margin-bottom:10px;line-height:1.5">2–3 things you want to focus on as a team today.</div>
      ${[0,1,2].map(i=>`<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><div style="width:20px;height:20px;border-radius:50%;background:var(--nv);color:var(--gd);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${i+1}</div><input type="text" value="${esc(S.gameGoals[i])}" placeholder="${['e.g. Counter-attack within 3 seconds','e.g. Defend set pieces — shape and communication','e.g. Keep our shape out of possession'][i]}" oninput="setGameGoal(${i},this.value)"/></div>`).join('')}
    </div>
    <button class="btn-primary ${assigned.length>0?'green':'disabled'}" onclick="startGame()" style="margin-top:4px"><span>▶️</span> Start game</button>
    ${assigned.length===0?`<div style="font-size:10px;color:var(--mu);text-align:center;margin-top:4px">Assign at least one player to start</div>`:''}
  `;
}

function buildPitch(slots,lineup,players){
  const tokens=slots.map(slot=>{
    const pid=lineup[slot.id];const player=pid?players.find(p=>p.id===pid):null;
    if(player)return`<div class="pitch-token" style="left:${slot.x}%;top:${slot.y}%" onclick="openPicker('${slot.id}')"><div class="token-circle filled"><div class="token-jersey">${esc(player.jersey)}</div><div class="token-lbl">${esc(slot.l)}</div></div><div class="token-name-tag"><div class="token-name-text">${esc(player.name.split(' ')[0])}</div></div></div>`;
    return`<div class="pitch-token" style="left:${slot.x}%;top:${slot.y}%" onclick="openPicker('${slot.id}')"><div class="token-circle empty"><span style="font-size:8px;color:rgba(255,255,255,0.4)">+</span></div><div style="margin-top:2px;font-size:7px;color:rgba(255,255,255,0.3);font-weight:600">${esc(slot.l)}</div></div>`;
  }).join('');
  return`<div class="pitch-wrap"><svg class="pitch-svg" viewBox="0 0 100 148"><rect x="2" y="2" width="96" height="144" rx="2" fill="none" stroke="rgba(255,255,255,.2)" stroke-width=".5"/><line x1="2" y1="74" x2="98" y2="74" stroke="rgba(255,255,255,.18)" stroke-width=".5"/><circle cx="50" cy="74" r="11" fill="none" stroke="rgba(255,255,255,.13)" stroke-width=".5"/><rect x="20" y="2" width="60" height="21" fill="none" stroke="rgba(255,255,255,.13)" stroke-width=".5"/><rect x="20" y="125" width="60" height="21" fill="none" stroke="rgba(255,255,255,.13)" stroke-width=".5"/></svg>${tokens}</div>`;
}

// ─── LIVE ──────────────────────────────────────────────────────────────────────
function buildLive(){
  const us=S.liveLog.filter(e=>e.type==='goal'&&e.team==='us').length;
  const them=S.liveLog.filter(e=>e.type==='goal'&&e.team==='them').length;
  const min=Math.floor(S.gameSecs/60);
  return`
    <div class="scoreboard">
      <div class="score-opp">${esc(S.opponent||'OPPONENT')} · ${esc(S.matchDate||'TODAY')}</div>
      <div class="score-main">${us} <span style="color:rgba(255,255,255,0.3);font-size:36px">:</span> ${them}</div>
      <div class="score-timer ${S.timerOn?'running':'paused'}" id="live-timer">${fmtTime(S.gameSecs)}</div>
      <div style="display:flex;gap:8px;justify-content:center">
        <button onclick="toggleTimer()" style="padding:10px 22px;border-radius:20px;cursor:pointer;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);font-size:13px;font-weight:600;color:rgba(255,255,255,0.8);font-family:inherit">${S.timerOn?'⏸ Pause':'▶ Resume'}</button>
        <button onclick="showEndConfirm()" style="padding:10px 22px;border-radius:20px;cursor:pointer;background:var(--gd);border:none;font-size:13px;font-weight:700;color:var(--nv);font-family:inherit">End game</button>
      </div>
    </div>
    ${S.confirmEnd?`<div class="end-confirm-bar"><div class="end-confirm-title">⚠️ End the game?</div><div class="end-confirm-score">Final score: <strong>${us}–${them}</strong> · ${min}' played.</div><div class="end-confirm-btns"><button class="end-no-btn" onclick="hideEndConfirm()">Cancel</button><button class="end-yes-btn" onclick="endGame()">Yes, end game</button></div></div>`:''}
    ${S.gameGoals.filter(Boolean).length>0?`<div class="card" style="margin-bottom:12px"><div class="field-label" style="margin-bottom:6px">GAME GOALS</div>${S.gameGoals.filter(Boolean).map(g=>`<div style="font-size:12px;color:var(--tx);margin-bottom:3px;display:flex;gap:6px"><span style="color:var(--gd);font-weight:700">·</span>${esc(g)}</div>`).join('')}</div>`:''}
    <div class="live-btns">
      <div class="live-btn" style="background:var(--gnl);border-color:var(--gn)" onclick="openGoal('us')"><div class="live-btn-icon">⚽</div><div class="live-btn-label" style="color:#166534">Our goal</div></div>
      <div class="live-btn" style="background:var(--rdl);border-color:var(--rd)" onclick="openGoal('them')"><div class="live-btn-icon">🔴</div><div class="live-btn-label" style="color:#991b1b">Conceded</div></div>
    </div>
    <button class="sub-btn" onclick="openSubModal()">🔄 Make substitution <span id="live-min" style="font-size:12px;opacity:0.6">${min}'</span></button>
    ${S.liveLog.length>0?`<div class="sect"><span>EVENTS</span><div class="sect-line"></div></div>${[...S.liveLog].reverse().map(ev=>{const p=S.players.find(x=>x.id===ev.scorerId);const ap=S.players.find(x=>x.id===ev.assistId);const outp=S.players.find(x=>x.id===ev.outId);const inp=S.players.find(x=>x.id===ev.inId);return`<div class="event-card"><span style="font-size:16px">${ev.type==='goal'?(ev.team==='us'?'⚽':'🔴'):'🔄'}</span><div style="flex:1">${ev.type==='goal'?`<div style="font-size:13px;font-weight:600">${ev.team==='us'?`Goal — ${esc(p?.name||'?')}${ap?` · 🅰️${esc(ap.name.split(' ')[0])}`:''}`:' Conceded'}</div>`:''} ${ev.type==='sub'?`<div style="font-size:13px;font-weight:600">${esc(inp?.name.split(' ')[0]||'?')} ↑ · ${esc(outp?.name.split(' ')[0]||'?')} ↓</div>`:''}<div style="font-size:11px;color:var(--mu)">${ev.min}'</div></div></div>`;}).join('')}`:''}
    <div class="sect"><span>ON FIELD — ${[...S.onField].length}</span><div class="sect-line"></div></div>
    <div class="field-now-wrap">${[...S.onField].map(pid=>{
      const p=S.players.find(x=>x.id===pid);if(!p)return'';
      // Show ticking minute counter — updated each second by startTimer without re-render
      const currentMins=Math.floor(((S.playerAccTime[pid]||0)+(S.gameSecs-(S.playerOnSince[pid]||0)))/60);
      return`<div class="chip" style="background:var(--gnl);border-color:rgba(30,132,73,0.3)"><div class="chip-jersey" style="background:${posColor(p.pos)}">${esc(p.jersey)}</div><span class="chip-name">${esc(p.name.split(' ')[0])}</span><span id="pt-${pid}" style="font-size:10px;font-weight:700;color:var(--gn);margin-left:3px">${currentMins}'</span></div>`;
    }).join('')}</div>
    ${(()=>{
      // Every player NOT currently on the field — covers both waiting subs and subbed-off players
      const benchPlayers=S.players.filter(p=>!S.onField.has(p.id));
      if(!benchPlayers.length)return'';
      return`<div class="sect" style="margin-top:10px"><span>BENCH — ${benchPlayers.length}</span><div class="sect-line"></div></div>
    <div class="field-now-wrap">${benchPlayers.map(p=>{
        // Show frozen minutes if this player has been on the field, otherwise nothing
        const banked=S.playerAccTime[p.id];
        const timeLabel=banked!==undefined?`<span style="font-size:10px;font-weight:700;color:var(--mu);margin-left:3px">${Math.floor(banked/60)}'</span>`:'';
        return`<div class="chip" style="background:var(--sf);border-color:var(--br)"><div class="chip-jersey" style="background:${posColor(p.pos)}">${esc(p.jersey)}</div><span class="chip-name">${esc(p.name.split(' ')[0])}</span>${timeLabel}</div>`;
      }).join('')}</div>`;
    })()}

  `;
}

// ─── REPORT ───────────────────────────────────────────────────────────────────
function buildReport(){
  const g=S.games.find(x=>x.id===S.activeGameId);
  if(!g)return`<div class="empty-state"><div style="font-size:44px">📋</div><div style="font-size:16px;font-weight:700;color:var(--mu);margin-top:12px">No report available</div></div>`;
  const us=g.log.filter(e=>e.type==='goal'&&e.team==='us');
  const them=g.log.filter(e=>e.type==='goal'&&e.team==='them');
  const subs=g.log.filter(e=>e.type==='sub');
  const ptimes=g.pt||{};
  const rc=g.result==='Won'?'var(--gn)':g.result==='Lost'?'var(--rd)':'var(--am)';
  const sorted=Object.keys(ptimes).map(pid=>({pid,player:S.players.find(p=>p.id===pid),mins:Math.round(ptimes[pid]/60)})).filter(x=>x.player).sort((a,b)=>b.mins-a.mins);
  return`
    <div class="report-hdr">
      <div style="font-size:10px;color:rgba(255,255,255,0.4);font-weight:700;letter-spacing:0.5px;margin-bottom:5px">FULL TIME · ${esc(g.date)}</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.55);margin-bottom:5px">vs ${esc(g.opponent)}</div>
      <div class="report-score">${us.length} <span style="color:rgba(255,255,255,0.3);font-size:36px">:</span> ${them.length}</div>
      <div><span class="badge" style="background:${rc};color:#fff;font-size:14px;padding:5px 18px">${g.result}</span></div>
      <div style="font-size:10px;color:rgba(255,255,255,0.35);margin-top:8px">${g.format} · ${g.formation} · ${Math.round(g.dur/60)}' played</div>
    </div>
    ${g.gameGoals?.filter(Boolean).length>0?`<div class="card"><div class="field-label" style="margin-bottom:8px">GAME GOALS</div>${g.gameGoals.filter(Boolean).map(gg=>`<div style="font-size:12px;color:var(--tx);margin-bottom:4px;display:flex;gap:6px"><span style="color:var(--gd)">·</span>${esc(gg)}</div>`).join('')}</div>`:''}
    ${us.length>0||them.length>0?`<div class="sect"><span>GOALS</span><div class="sect-line"></div></div>${us.map(e=>{const sc=S.players.find(p=>p.id===e.scorerId);const as=S.players.find(p=>p.id===e.assistId);return`<div class="event-card" style="border-left:3px solid var(--gn)"><span style="font-size:16px">⚽</span><div style="flex:1"><div style="font-size:13px;font-weight:600">${esc(sc?.name||'?')}${as?` · 🅰️ ${esc(as.name.split(' ')[0])}`:''}</div></div><div style="font-size:11px;color:var(--mu)">${e.min}'</div></div>`;}).join('')}${them.map(e=>`<div class="event-card" style="border-left:3px solid var(--rd)"><span style="font-size:16px">🔴</span><div style="flex:1"><div style="font-size:13px;color:var(--rd);font-weight:600">Conceded</div></div><div style="font-size:11px;color:var(--mu)">${e.min}'</div></div>`).join('')}`:''}
    ${subs.length>0?`<div class="sect"><span>SUBSTITUTIONS</span><div class="sect-line"></div></div>${subs.map(s=>{const outp=S.players.find(p=>p.id===s.outId);const inp=S.players.find(p=>p.id===s.inId);return`<div class="event-card"><span style="font-size:14px">🔄</span><div style="flex:1;font-size:12px"><span style="color:var(--gn);font-weight:600">↑${esc(inp?.name.split(' ')[0]||'?')}</span><span style="color:var(--rd);font-weight:600;margin-left:6px">↓${esc(outp?.name.split(' ')[0]||'?')}</span></div><div style="font-size:11px;color:var(--mu)">${s.min}'</div></div>`;}).join('')}`:''}
    <div class="sect"><span>PLAYING TIME — tap to add IDP note</span><div class="sect-line"></div></div>
    <div style="font-size:11px;color:var(--mu);margin-bottom:10px;line-height:1.5">Notes save to each player's profile and build their development plan.</div>
    ${sorted.map(({pid,player,mins})=>{
      const pGoals=us.filter(e=>e.scorerId===pid).length;
      const pAssists=us.filter(e=>e.assistId===pid).length;
      const isExpanded=S.expandedPtPlayer===pid;
      const profile=PROFILES[player.pos];
      const isStarter=g.starters.includes(pid);
      const subOutEv=subs.find(s=>s.outId===pid);
      const subInEv=subs.find(s=>s.inId===pid);
      return`<div class="pt-player-card">
        <div class="pt-player-hdr" onclick="togglePtPlayer('${pid}')">
          <div class="player-avatar" style="background:${posColor(player.pos)}">${esc(player.jersey)}</div>
          <div style="flex:1"><div class="player-name">${esc(player.name)}</div><div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:2px"><span style="font-size:11px;color:var(--mu)">${esc(profile?.label||player.pos)}</span>${isStarter?`<span class="badge" style="background:var(--gnl);color:var(--gn)">Starter</span>`:`<span class="badge" style="background:var(--aml);color:var(--am)">Sub</span>`}${subOutEv?`<span style="font-size:10px;color:var(--mu)">Off ${subOutEv.min}'</span>`:''}${subInEv?`<span style="font-size:10px;color:var(--mu)">On ${subInEv.min}'</span>`:''}</div></div>
          <div style="text-align:right"><div style="font-size:24px;font-weight:700;color:var(--nv)">${mins}'</div><div style="font-size:9px;color:var(--su)">played</div></div>
          <span style="font-size:12px;color:var(--mu);margin-left:8px">${isExpanded?'▲':'▼'}</span>
        </div>
        ${pGoals>0||pAssists>0?`<div style="display:flex;gap:7px;margin-top:8px">${pGoals>0?`<div style="background:var(--gnl);border-radius:7px;padding:3px 9px;font-size:11px;font-weight:700;color:var(--gn)">⚽ ${pGoals}</div>`:''} ${pAssists>0?`<div style="background:var(--bll);border-radius:7px;padding:3px 9px;font-size:11px;font-weight:700;color:var(--bl)">🅰️ ${pAssists}</div>`:''}</div>`:''}
        ${isExpanded?`<div class="pt-expand">
          ${profile?`<div style="font-size:10px;font-weight:700;color:${profile.color};letter-spacing:0.5px;margin-bottom:7px">${profile.label.toUpperCase()} POSITIONAL PROFILE</div><div style="background:${profile.bg};border-radius:9px;padding:10px 11px;margin-bottom:12px;border:0.5px solid ${profile.color}33">${profile.behaviors.map((b,i)=>`<div class="profile-behavior"><span class="profile-num" style="color:${profile.color}">${i+1}</span><span class="profile-text">${esc(b)}</span></div>`).join('')}</div>`:''}
          <div class="field-label">IDP NOTE — saves to player profile</div>
          <textarea placeholder="What did you observe from ${esc(player.name.split(' ')[0])} today? Reference the positional behaviors above." oninput="setIdpNote('${pid}',this.value)">${esc(S.idpNotes[pid]||'')}</textarea>
          ${player.games?.length>0?`<div class="prev-notes"><div class="prev-notes-lbl">PREVIOUS GAMES</div>${player.games.slice(-3).reverse().map(gg=>`<div style="font-size:11px;color:var(--tx);margin-bottom:5px;padding-bottom:5px;border-bottom:0.5px solid #fcd34d33"><strong>${esc(gg.date)}</strong> vs ${esc(gg.opponent)}<span style="color:${gg.result==='Won'?'var(--gn)':gg.result==='Lost'?'var(--rd)':'var(--am)'}"> ${gg.result}</span><span style="color:var(--mu)"> · ${gg.mins}'</span>${gg.goals>0?`<span style="color:var(--gn)"> ${gg.goals}G</span>`:''}${gg.assists>0?`<span style="color:var(--bl)"> ${gg.assists}A</span>`:''}${gg.note?`<div style="color:var(--mu);font-style:italic;margin-top:2px">"${esc(gg.note)}"</div>`:''}</div>`).join('')}</div>`:''}
        </div>`:''}
      </div>`;
    }).join('')}
    <div style="display:flex;gap:8px;margin-top:8px">
      <button onclick="saveToProfiles()" style="flex:2;padding:14px;background:${S.ptSaved?'var(--gn)':'var(--nv)'};border-radius:11px;color:${S.ptSaved?'#fff':'var(--gd)'};font-weight:700;font-size:14px;cursor:pointer;border:none;font-family:inherit;transition:all 0.3s">${S.ptSaved?'✓ Saved to profiles':'Save to player profiles'}</button>
      <button onclick="newGame()" class="btn-outline" style="flex:1">New game</button>
    </div>
  `;
}

// ─── ROSTER ───────────────────────────────────────────────────────────────────
function buildRoster(){
  if(S.players.length===0)return`<div class="empty-state"><div style="font-size:44px">👥</div><div style="font-size:16px;font-weight:700;color:var(--mu);margin-top:12px;margin-bottom:6px">No players yet</div><div style="font-size:12px;color:var(--su);line-height:1.6;margin-bottom:20px">Add your squad to get started.</div><button class="btn-primary" style="max-width:220px;margin:0 auto" onclick="openAddPlayer()">Add first player</button></div>`;
  let html='';
  if(S.isDemo) html+=`<div class="demo-banner"><span style="font-size:20px">👋</span><div><div style="font-size:12px;font-weight:700;color:var(--gd)">Demo roster — 14 players</div><div style="font-size:10px;color:rgba(255,255,255,0.5);margin-top:2px"><span style="color:var(--gd);cursor:pointer;text-decoration:underline" onclick="clearDemoAndStart()">Start with your own team →</span></div></div></div>`;
  html+=`<div class="grid3" style="margin-bottom:14px">${[['Players',S.players.length,'var(--nv)'],['GK',S.players.filter(p=>p.pos==='GK').length,'#6D28D9'],['DEF',S.players.filter(p=>p.pos==='DEF').length,'var(--bl)'],['MID',S.players.filter(p=>p.pos==='MID').length,'var(--gn)'],['FWD',S.players.filter(p=>p.pos==='FWD').length,'var(--rd)']].slice(0,3).map(([l,v,c])=>`<div class="stat-box"><div class="stat-val" style="color:${c}">${v}</div><div class="stat-lbl">${l}</div></div>`).join('')}</div>`;
  ['GK','DEF','MID','FWD'].forEach(pos=>{
    const grp=S.players.filter(p=>p.pos===pos).sort((a,b)=>(parseInt(a.jersey)||99)-(parseInt(b.jersey)||99));
    if(!grp.length)return;
    html+=`<div style="font-size:10px;font-weight:700;color:${posColor(pos)};letter-spacing:0.5px;margin-bottom:8px">${posLabel(pos).toUpperCase()} · ${grp.length}</div>`;
    grp.forEach(p=>{
      const pG=p.games||[];const tM=pG.reduce((t,g)=>t+(g.mins||0),0);const tGl=pG.reduce((t,g)=>t+(g.goals||0),0);
      html+=`<div class="player-card"><div class="player-avatar" style="background:${posColor(p.pos)}">${esc(p.jersey)}</div><div style="flex:1"><div class="player-name">${esc(p.name)}</div><div class="player-meta">${posLabel(p.pos)}${p.age?` · Age ${p.age}`:''}</div>${p.notes?`<div style="font-size:10px;color:var(--su);margin-top:1px;font-style:italic">${esc(p.notes)}</div>`:''} ${pG.length>0?`<div style="font-size:10px;color:var(--mu);margin-top:3px">${pG.length} game${pG.length!==1?'s':''} · ${tM}'${tGl>0?` · ${tGl}G`:''}</div>`:''}</div><div style="display:flex;gap:5px"><button onclick="editPlayer('${p.id}')" style="padding:6px 12px;border-radius:6px;border:0.5px solid var(--br);cursor:pointer;font-size:11px;color:var(--mu);background:var(--sf);font-family:inherit">Edit</button><button onclick="removePlayer('${p.id}')" style="padding:6px 10px;border-radius:6px;cursor:pointer;font-size:11px;color:var(--rd);background:var(--rdl);border:none;font-family:inherit">✕</button></div></div>`;
    });
  });
  html+=`<div class="sect"><span>${S.players.length} players</span><div class="sect-line"></div><button class="sect-btn" onclick="openAddPlayer()">+ Add player</button></div>`;
  return html;
}

// ─── PROFILES ─────────────────────────────────────────────────────────────────
function buildProfiles(){
  if(S.players.length===0)return`<div class="empty-state"><div style="font-size:44px">👤</div><div style="font-size:16px;font-weight:700;color:var(--mu);margin-top:12px;margin-bottom:6px">No profiles yet</div><div style="font-size:12px;color:var(--su);line-height:1.6">Add players and play games to build development profiles.</div></div>`;
  let html='';
  if(S.isDemo) html+=`<div class="demo-banner" style="margin-bottom:12px"><span style="font-size:20px">💡</span><div><div style="font-size:12px;font-weight:700;color:var(--gd)">Player profiles build automatically</div><div style="font-size:10px;color:rgba(255,255,255,0.5);margin-top:2px">Each game adds minutes played, goals, assists and your IDP notes</div></div></div>`;
  ['GK','DEF','MID','FWD'].forEach(pos=>{
    const grp=S.players.filter(p=>p.pos===pos).sort((a,b)=>(parseInt(a.jersey)||99)-(parseInt(b.jersey)||99));
    if(!grp.length)return;
    html+=`<div style="font-size:10px;font-weight:700;color:${posColor(pos)};letter-spacing:0.5px;margin-bottom:8px;margin-top:14px">${posLabel(pos).toUpperCase()} · ${grp.length}</div>`;
    grp.forEach(p=>{
      const pG=p.games||[];const tM=pG.reduce((t,g)=>t+(g.mins||0),0);const tGl=pG.reduce((t,g)=>t+(g.goals||0),0);const tAs=pG.reduce((t,g)=>t+(g.assists||0),0);
      const profile=PROFILES[p.pos];const recentNote=pG.slice(-1)[0]?.note;const isOpen=S.openProfileId===p.id;
      html+=`<div class="profile-card" onclick="toggleProfile('${p.id}')">
        <div style="display:flex;align-items:center;gap:10px"><div class="player-avatar" style="background:${posColor(p.pos)}">${esc(p.jersey)}</div><div style="flex:1"><div class="player-name">${esc(p.name)}</div><div class="player-meta">${posLabel(p.pos)}${p.age?` · Age ${p.age}`:''}</div></div><div style="text-align:right">${pG.length>0?`<div style="font-size:13px;font-weight:600;color:var(--nv)">${pG.length} game${pG.length!==1?'s':''}</div><div style="font-size:10px;color:var(--mu)">${tM}' played</div>`:`<div style="font-size:11px;color:var(--su)">No games</div>`}</div><span style="font-size:12px;color:var(--mu);margin-left:8px">${isOpen?'▲':'▼'}</span></div>
        ${tGl>0||tAs>0?`<div style="display:flex;gap:7px;margin-top:8px">${tGl>0?`<div style="background:var(--gnl);border-radius:7px;padding:3px 9px;font-size:11px;font-weight:700;color:var(--gn)">⚽ ${tGl}</div>`:''}${tAs>0?`<div style="background:var(--bll);border-radius:7px;padding:3px 9px;font-size:11px;font-weight:700;color:var(--bl)">🅰️ ${tAs}</div>`:''}<div style="background:var(--sf);border-radius:7px;padding:3px 9px;font-size:11px;color:var(--mu)">${tM}' total</div></div>`:''}
        ${isOpen?`<div style="padding-top:12px;margin-top:10px;border-top:0.5px solid var(--br)">
          ${profile?`<div style="font-size:10px;font-weight:700;color:${profile.color};letter-spacing:0.5px;margin-bottom:7px">${profile.label.toUpperCase()} POSITIONAL PROFILE</div><div style="background:${profile.bg};border-radius:9px;padding:10px 12px;margin-bottom:12px;border:0.5px solid ${profile.color}22">${profile.behaviors.map((b,i)=>`<div class="profile-behavior"><span class="profile-num" style="color:${profile.color}">${i+1}</span><span class="profile-text">${esc(b)}</span></div>`).join('')}</div>`:''}
          ${p.notes?`<div style="background:#FFFBEB;border-radius:8px;padding:8px 11px;margin-bottom:10px;border:0.5px solid #fcd34d"><div style="font-size:10px;font-weight:700;color:var(--am);margin-bottom:3px">COACH NOTES</div><div style="font-size:12px;color:var(--tx);line-height:1.5;font-style:italic">"${esc(p.notes)}"</div></div>`:''}
          ${recentNote?`<div style="background:var(--bll);border-radius:8px;padding:8px 11px;margin-bottom:10px;border:0.5px solid rgba(37,99,235,0.2)"><div style="font-size:10px;font-weight:700;color:var(--bl);margin-bottom:3px">MOST RECENT IDP NOTE</div><div style="font-size:12px;color:var(--tx);line-height:1.5;font-style:italic">"${esc(recentNote)}"</div><div style="font-size:10px;color:var(--mu);margin-top:3px">From: ${esc(pG.slice(-1)[0]?.date)} vs ${esc(pG.slice(-1)[0]?.opponent)}</div></div>`:''}
          ${pG.length>0?`<div style="font-size:10px;font-weight:700;color:var(--mu);letter-spacing:0.5px;margin-bottom:8px">GAME HISTORY</div>${pG.slice().reverse().map(gg=>`<div class="game-row"><div class="result-dot" style="background:${gg.result==='Won'?'var(--gnl)':gg.result==='Lost'?'var(--rdl)':'var(--aml)'};color:${gg.result==='Won'?'var(--gn)':gg.result==='Lost'?'var(--rd)':'var(--am)'}">${gg.result==='Won'?'W':gg.result==='Lost'?'L':'D'}</div><div style="flex:1"><div style="font-weight:600;color:var(--tx)">${esc(gg.date)} · ${esc(gg.opponent)}</div><div style="color:var(--mu);font-size:10px">${gg.mins}' played${gg.goals>0?` · ${gg.goals}G`:''}${gg.assists>0?` ${gg.assists}A`:''}</div></div>${gg.note?`<div style="font-size:10px;color:var(--bl);max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-style:italic">"${esc(gg.note)}"</div>`:''}</div>`).join('')}`:`<div style="font-size:11px;color:var(--su);font-style:italic;text-align:center;padding:10px 0">No games played yet.</div>`}
        </div>`:''}
      </div>`;
    });
  });
  return html;
}

// ─── HISTORY ──────────────────────────────────────────────────────────────────
function buildHistory(){
  if(S.games.length===0)return`<div class="empty-state"><div style="font-size:44px">📅</div><div style="font-size:16px;font-weight:700;color:var(--mu);margin-top:12px;margin-bottom:6px">No games yet</div><div style="font-size:12px;color:var(--su)">Complete a game in the Game Day tab to see history here.</div></div>`;
  const wins=S.games.filter(g=>g.result==='Won').length;
  const gf=S.games.reduce((t,g)=>t+g.log.filter(e=>e.type==='goal'&&e.team==='us').length,0);
  const ga=S.games.reduce((t,g)=>t+g.log.filter(e=>e.type==='goal'&&e.team==='them').length,0);
  let html='';
  if(S.isDemo) html+=`<div class="demo-banner" style="margin-bottom:12px"><span style="font-size:20px">📊</span><div><div style="font-size:12px;font-weight:700;color:var(--gd)">10 games of demo data</div><div style="font-size:10px;color:rgba(255,255,255,0.5);margin-top:2px">Tap any game to expand the full report</div></div></div>`;
  html+=`<div class="grid3" style="margin-bottom:8px"><div class="stat-box"><div class="stat-val" style="color:var(--nv)">${S.games.length}</div><div class="stat-lbl">Games</div></div><div class="stat-box"><div class="stat-val" style="color:var(--gn)">${wins}</div><div class="stat-lbl">Wins</div></div><div class="stat-box"><div class="stat-val" style="color:var(--gd)">${S.games.length?Math.round(wins/S.games.length*100)+'%':'—'}</div><div class="stat-lbl">Win %</div></div></div>`;
  html+=`<div class="grid3" style="margin-bottom:14px"><div class="stat-box"><div class="stat-val" style="color:var(--gn)">${gf}</div><div class="stat-lbl">Goals for</div></div><div class="stat-box"><div class="stat-val" style="color:var(--rd)">${ga}</div><div class="stat-lbl">Goals against</div></div><div class="stat-box"><div class="stat-val" style="color:${gf>=ga?'var(--gn)':'var(--rd)'}">${gf>=ga?'+':''}${gf-ga}</div><div class="stat-lbl">Difference</div></div></div>`;
  S.games.slice().reverse().forEach(g=>{
    const us=g.log.filter(e=>e.type==='goal'&&e.team==='us').length;const them=g.log.filter(e=>e.type==='goal'&&e.team==='them').length;
    const subs=g.log.filter(e=>e.type==='sub');const ptimes=g.pt||{};const isOpen=S.openProfileId===g.id;
    const rc=g.result==='Won'?'var(--gn)':g.result==='Lost'?'var(--rd)':'var(--am)';const rbg=g.result==='Won'?'var(--gnl)':g.result==='Lost'?'var(--rdl)':'var(--aml)';
    html+=`<div class="card" style="cursor:pointer" onclick="toggleProfile('${g.id}')"><div style="display:flex;justify-content:space-between;align-items:flex-start"><div style="flex:1"><div style="font-size:14px;font-weight:700;color:var(--tx);margin-bottom:2px">vs ${esc(g.opponent)}</div><div style="font-size:11px;color:var(--mu)">${esc(g.date)} · ${g.format} · ${g.formation}</div></div><div style="display:flex;align-items:center;gap:8px"><div style="font-size:20px;font-weight:700;color:${rc}">${us}–${them}</div><span class="badge" style="background:${rbg};color:${rc}">${g.result}</span></div></div>
    ${isOpen?`<div style="margin-top:10px;padding-top:10px;border-top:0.5px solid var(--br)">${g.gameGoals?.filter(Boolean).length>0?`<div style="margin-bottom:8px"><div class="field-label" style="margin-bottom:4px">GAME GOALS</div>${g.gameGoals.filter(Boolean).map(gg=>`<div style="font-size:11px;color:var(--tx);margin-bottom:2px">· ${esc(gg)}</div>`).join('')}</div>`:''} ${g.log.filter(e=>e.type==='goal'&&e.team==='us').length>0?`<div style="margin-bottom:8px"><div class="field-label" style="margin-bottom:4px">GOALS</div>${g.log.filter(e=>e.type==='goal'&&e.team==='us').map(e=>{const sc=S.players.find(p=>p.id===e.scorerId);const as=S.players.find(p=>p.id===e.assistId);return`<div style="font-size:11px;color:var(--tx);margin-bottom:2px">⚽ ${esc(sc?.name||'?')} ${e.min}'${as?` · 🅰️${esc(as.name.split(' ')[0])}`:''}  </div>`;}).join('')}</div>`:''} ${subs.length>0?`<div style="margin-bottom:8px"><div class="field-label" style="margin-bottom:4px">SUBSTITUTIONS</div>${subs.map(s=>{const outp=S.players.find(p=>p.id===s.outId);const inp=S.players.find(p=>p.id===s.inId);return`<div style="font-size:11px;color:var(--tx);margin-bottom:2px">🔄 ${esc(inp?.name.split(' ')[0]||'?')} ↑ · ${esc(outp?.name.split(' ')[0]||'?')} ↓ · ${s.min}'</div>`;}).join('')}</div>`:''} <div><div class="field-label" style="margin-bottom:5px">PLAYING TIME</div><div style="display:flex;flex-wrap:wrap;gap:5px">${Object.entries(ptimes).sort((a,b)=>b[1]-a[1]).map(([pid,secs])=>{const p=S.players.find(x=>x.id===pid);if(!p)return'';return`<div class="chip"><div class="chip-jersey" style="background:${posColor(p.pos)}">${esc(p.jersey)}</div><span class="chip-name">${esc(p.name.split(' ')[0])}</span><span style="font-size:10px;font-weight:700;color:var(--nv);margin-left:2px">${Math.round(secs/60)}'</span></div>`;}).join('')}</div></div></div>`:''}
    </div>`;
  });
  return html;
}

// ─── SETTINGS ─────────────────────────────────────────────────────────────────
function buildSettings(){
  return`<div class="modal-overlay" onclick="closeSettings()">
    <div class="modal-sheet" onclick="event.stopPropagation()" style="max-height:92vh">
      <div class="modal-hdr"><div class="modal-title">⚙️ Settings &amp; Backup</div><button class="modal-close" onclick="closeSettings()">✕</button></div>
      ${S.isDemo?`<div style="background:var(--aml);border:0.5px solid #fcd34d;border-radius:10px;padding:11px 13px;margin-bottom:12px"><div style="font-size:12px;font-weight:700;color:var(--am);margin-bottom:4px">You are in demo mode</div><div style="font-size:11px;color:var(--tx);line-height:1.5;margin-bottom:8px">This is sample data for NCFC U13 South. To start tracking your own team, tap the button below.</div><button onclick="clearDemoAndStart();closeSettings()" style="width:100%;padding:10px;background:var(--gn);border-radius:8px;color:#fff;font-weight:700;font-size:13px;cursor:pointer;border:none;font-family:inherit">Start with my own team</button></div>`:''}
      <div class="settings-section">
        <div class="settings-title">☁️ Cloud backup</div>
        <div class="settings-sub">Your data automatically saves to Google Sheets. Each coach has a unique sync code — save yours somewhere safe.</div>
        ${!cloudEnabled()?`<div class="setup-warning"><strong>Cloud backup not yet configured.</strong> Set <code>VITE_GAS_URL</code> in your <code>.env</code> file. Until then, use Export/Import below.</div>`:`<div class="cloud-status-row"><div class="sync-dot ${S.syncStatus}"></div><span>${{synced:'All data saved',syncing:'Saving…',error:'Sync failed',offline:'Not connected'}[S.syncStatus]||''}</span></div>`}
        <div class="field-label" style="margin-bottom:5px">YOUR SYNC CODE</div>
        <div class="sync-code-box">${esc(S.coachId)}</div>
        <button class="copy-btn" onclick="copyCode()">📋 Copy sync code</button>
        <div style="font-size:11px;color:var(--mu);margin-bottom:14px;line-height:1.5">Screenshot this or email it to yourself. Enter it below if you ever switch phones.</div>
        <div class="field-label" style="margin-bottom:5px">RESTORE FROM ANOTHER DEVICE</div>
        <div class="restore-row">
          <input class="restore-input" type="text" value="${esc(S.restoreCode)}" placeholder="Paste sync code here" oninput="S.restoreCode=this.value"/>
          <button class="restore-btn" onclick="restoreFromCode(S.restoreCode)">Restore</button>
        </div>
        ${S.restoreStatus?`<div style="margin-top:8px;font-size:12px;color:${S.restoreStatus.includes('Restoring')?'var(--am)':'var(--rd)'}">${esc(S.restoreStatus)}</div>`:''}
      </div>
      <div class="settings-section">
        <div class="settings-title">📁 Manual backup</div>
        <div class="settings-sub">Download all your data as a file. Import it on any device to restore everything.</div>
        <button class="export-btn" onclick="exportData()">⬇️ Export all data</button>
        <label class="import-label" onclick="document.getElementById('import-file-input').click()">⬆️ Import from backup file</label>
      </div>
      <div class="settings-section">
        <div class="settings-title">🏷️ Team name</div>
        <input type="text" id="team-name-settings" value="${esc(S.teamName)}" placeholder="e.g. U13 South" style="margin-top:8px"/>
        <button onclick="saveTeamNameSettings()" style="width:100%;padding:10px;background:var(--nv);border-radius:8px;color:var(--gd);font-weight:700;font-size:13px;cursor:pointer;border:none;font-family:inherit;margin-top:8px">Save team name</button>
      </div>
      <button onclick="closeSettings()" style="width:100%;padding:13px;background:var(--nv);border-radius:11px;color:var(--gd);font-weight:700;font-size:14px;cursor:pointer;border:none;font-family:inherit">Done</button>
    </div>
  </div>`;
}

// ─── ALL MODALS ───────────────────────────────────────────────────────────────
function buildModals(){
  if(S.showSettings)return buildSettings();
  let html='';
  if(S.pickerSlot!==null){
    const fmt=FORMATS[S.format]||FORMATS['11v11'];const slots=fmt.formations[S.formation]||Object.values(fmt.formations)[0];const slot=slots.find(s=>s.id===S.pickerSlot);const assigned=Object.values(S.lineup).filter(Boolean);const currentPid=S.lineup[S.pickerSlot];
    html+=`<div class="modal-overlay" onclick="closePicker()"><div class="modal-sheet" onclick="event.stopPropagation()"><div class="modal-hdr"><div class="modal-title">Assign player</div><button class="modal-close" onclick="closePicker()">✕</button></div><div style="font-size:11px;color:var(--mu);margin-bottom:12px">Slot: ${esc(slot?.l||S.pickerSlot)}</div>${currentPid?`<div class="clear-slot" onclick="clearSlot()"><span style="font-size:16px">🚫</span><div><div style="font-size:13px;font-weight:600;color:var(--rd)">Clear position</div><div style="font-size:11px;color:var(--mu)">Remove ${esc(S.players.find(p=>p.id===currentPid)?.name||'')}</div></div></div>`:''}${['GK','DEF','MID','FWD'].map(pos=>{const grp=S.players.filter(p=>p.pos===pos&&(!assigned.includes(p.id)||p.id===currentPid));if(!grp.length)return'';return`<div style="margin-bottom:12px"><div style="font-size:10px;font-weight:700;color:${posColor(pos)};letter-spacing:0.5px;margin-bottom:7px">${posLabel(pos).toUpperCase()}</div><div class="grid2">${grp.map(p=>{const isCur=p.id===currentPid;const isUsed=assigned.includes(p.id)&&!isCur;return`<div class="picker-player ${isCur?'selected':''} ${isUsed?'used':''}" onclick="${isUsed?'':'pickPlayer(\''+p.id+'\')'}"><div style="font-size:14px;font-weight:700;color:${isCur?'#1e40af':posColor(p.pos)}">${esc(p.jersey)}</div><div style="font-size:12px;font-weight:600;color:${isCur?'#1e40af':'var(--tx)'}">${esc(p.name)}</div><div style="font-size:9px;color:var(--su)">${esc(p.pos)}${isUsed?' · Lineup':''}</div></div>`;}).join('')}</div></div>`;}).join('')}</div></div>`;
  }
  if(S.showAddPlayer){
    html+=`<div class="modal-overlay" onclick="closeAddPlayer()"><div class="modal-sheet" onclick="event.stopPropagation()"><div class="modal-hdr"><div class="modal-title">${S.editPlayerId?'Edit player':'Add player'}</div><button class="modal-close" onclick="closeAddPlayer()">✕</button></div><div class="grid2" style="margin-bottom:10px"><div><div class="field-label">FULL NAME *</div><input type="text" value="${esc(S.formName)}" placeholder="Player name" oninput="S.formName=this.value"/></div><div><div class="field-label">JERSEY</div><input type="number" value="${esc(S.formJersey)}" placeholder="9" oninput="S.formJersey=this.value" style="text-align:center"/></div></div><div style="margin-bottom:10px"><div class="field-label" style="margin-bottom:7px">POSITION</div><div style="display:flex;gap:6px">${['GK','DEF','MID','FWD'].map(pos=>`<div class="pos-btn" style="background:${S.formPos===pos?posColor(pos):'var(--sf)'};color:${S.formPos===pos?'#fff':'var(--mu)'}" onclick="S.formPos='${pos}';render()">${pos}</div>`).join('')}</div></div><div class="grid2" style="margin-bottom:10px"><div><div class="field-label">AGE</div><input type="number" value="${esc(S.formAge)}" placeholder="12" oninput="S.formAge=this.value" style="text-align:center"/></div><div></div></div><div style="margin-bottom:16px"><div class="field-label">COACH NOTES (optional)</div><input type="text" value="${esc(S.formNotes)}" placeholder="Strengths, development focus…" oninput="S.formNotes=this.value"/></div><div style="display:flex;gap:8px"><button onclick="closeAddPlayer()" class="btn-outline" style="flex:1">Cancel</button><button onclick="savePlayer()" style="flex:2;padding:12px;background:${S.formName.trim()?'var(--nv)':'#e5e7eb'};border-radius:8px;color:${S.formName.trim()?'var(--gd)':'#9ca3af'};font-weight:700;font-size:14px;cursor:${S.formName.trim()?'pointer':'default'};border:none;font-family:inherit">${S.editPlayerId?'Save changes':'Add to roster'}</button></div></div></div>`;
  }
  if(S.showSubPlanAdd){
    const assigned=Object.values(S.lineup).filter(Boolean);const bench=S.players.filter(p=>!assigned.includes(p.id));
    html+=`<div class="modal-overlay" onclick="closeSubPlanAdd()"><div class="modal-sheet" onclick="event.stopPropagation()"><div class="modal-hdr"><div class="modal-title">Planned substitution</div><button class="modal-close" onclick="closeSubPlanAdd()">✕</button></div><div style="margin-bottom:10px"><div class="field-label">MINUTE</div><input type="number" value="${esc(S.spMin)}" placeholder="e.g. 60" oninput="S.spMin=this.value"/></div><div style="margin-bottom:10px"><div class="field-label" style="color:var(--rd)">PLAYER OFF</div><div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:5px">${assigned.map(pid=>{const p=S.players.find(x=>x.id===pid);if(!p)return'';return`<div class="pill-btn" style="background:${S.spOutId===pid?'var(--rdl)':'var(--sf)'};color:${S.spOutId===pid?'var(--rd)':'var(--tx)'};border:0.5px solid ${S.spOutId===pid?'var(--rd)':'var(--br)'}" onclick="S.spOutId='${pid}';render()">${esc(p.name.split(' ')[0])}</div>`;}).join('')}</div></div><div style="margin-bottom:10px"><div class="field-label" style="color:var(--gn)">PLAYER ON</div><div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:5px">${bench.map(p=>`<div class="pill-btn" style="background:${S.spInId===p.id?'var(--gnl)':'var(--sf)'};color:${S.spInId===p.id?'var(--gn)':'var(--tx)'};border:0.5px solid ${S.spInId===p.id?'var(--gn)':'var(--br)'}" onclick="S.spInId='${p.id}';render()">${esc(p.name.split(' ')[0])}</div>`).join('')}</div></div><div style="margin-bottom:14px"><div class="field-label">REASON (optional)</div><input type="text" value="${esc(S.spReason)}" placeholder="e.g. Fresh legs…" oninput="S.spReason=this.value"/></div><button onclick="saveSubPlan()" style="width:100%;padding:12px;background:${S.spOutId&&S.spInId?'var(--nv)':'#e5e7eb'};border-radius:9px;color:${S.spOutId&&S.spInId?'var(--gd)':'#9ca3af'};font-weight:700;font-size:14px;cursor:${S.spOutId&&S.spInId?'pointer':'default'};border:none;font-family:inherit">Add to sub plan</button></div></div>`;
  }
  if(S.showSubModal){
    const onFieldArr=[...S.onField];const benchLive=S.players.filter(p=>!S.onField.has(p.id));const min=Math.floor(S.gameSecs/60);
    html+=`<div class="modal-overlay" onclick="closeSubModal()"><div class="modal-sheet" onclick="event.stopPropagation()"><div class="modal-hdr"><div class="modal-title">Substitution — ${min}'</div><button class="modal-close" onclick="closeSubModal()">✕</button></div><div style="margin-bottom:12px"><div class="field-label" style="color:var(--rd);margin-bottom:7px">PLAYER OFF</div><div class="grid3">${onFieldArr.map(pid=>{const p=S.players.find(x=>x.id===pid);if(!p)return'';const sel=S.lsOutId===pid;return`<div class="sel-btn" style="background:${sel?'var(--rdl)':'var(--sf)'};border:${sel?'1.5px':'0.5px'} solid ${sel?'var(--rd)':'var(--br)'}" onclick="S.lsOutId='${pid}';render()"><div style="font-size:14px;font-weight:700;color:${sel?'var(--rd)':'var(--nv)'}">${esc(p.jersey)}</div><div style="font-size:11px;font-weight:600;color:${sel?'var(--rd)':'var(--tx)'}">${esc(p.name.split(' ')[0])}</div><div style="font-size:9px;color:var(--su)">${esc(p.pos)}</div></div>`;}).join('')}</div></div><div style="margin-bottom:16px"><div class="field-label" style="color:var(--gn);margin-bottom:7px">PLAYER ON — bench</div>${benchLive.length===0?`<div style="font-size:12px;color:var(--mu);font-style:italic;text-align:center;padding:10px 0">No bench players available</div>`:`<div class="grid3">${benchLive.map(p=>{const sel=S.lsInId===p.id;return`<div class="sel-btn" style="background:${sel?'var(--gnl)':'var(--sf)'};border:${sel?'1.5px':'0.5px'} solid ${sel?'var(--gn)':'var(--br)'}" onclick="S.lsInId='${p.id}';render()"><div style="font-size:14px;font-weight:700;color:${sel?'var(--gn)':'var(--nv)'}">${esc(p.jersey)}</div><div style="font-size:11px;font-weight:600;color:${sel?'var(--gn)':'var(--tx)'}">${esc(p.name.split(' ')[0])}</div><div style="font-size:9px;color:var(--su)">${esc(p.pos)}</div></div>`;}).join('')}</div>`}</div><button onclick="confirmSub()" style="width:100%;padding:14px;background:${S.lsOutId&&S.lsInId?'var(--nv)':'#e5e7eb'};border-radius:9px;color:${S.lsOutId&&S.lsInId?'var(--gd)':'#9ca3af'};font-weight:700;font-size:15px;cursor:${S.lsOutId&&S.lsInId?'pointer':'default'};border:none;font-family:inherit">Confirm substitution</button></div></div>`;
  }
  if(S.showGoalModal){
    const onFieldArr=[...S.onField];const min=Math.floor(S.gameSecs/60);
    html+=`<div class="modal-overlay" onclick="closeGoalModal()"><div class="modal-sheet" onclick="event.stopPropagation()"><div class="modal-hdr"><div class="modal-title">${S.lgTeam==='us'?'⚽ Goal scored':'🔴 Goal conceded'} — ${min}'</div><button class="modal-close" onclick="closeGoalModal()">✕</button></div>${S.lgTeam==='us'?`<div style="margin-bottom:12px"><div class="field-label" style="margin-bottom:7px">SCORER</div><div class="grid4">${onFieldArr.filter(pid=>{const p=S.players.find(x=>x.id===pid);return p&&p.pos!=='GK';}).map(pid=>{const p=S.players.find(x=>x.id===pid);const sel=S.lgScorerId===pid;return`<div class="sel-btn" style="background:${sel?'#EBF4FF':'var(--sf)'};border:${sel?'1.5px':'0.5px'} solid ${sel?'#93c5fd':'var(--br)'}" onclick="S.lgScorerId='${pid}';render()"><div style="font-size:14px;font-weight:700;color:${sel?'#1e40af':'var(--nv)'}">${esc(p.jersey)}</div><div style="font-size:10px;font-weight:600;color:${sel?'#1e40af':'var(--tx)'}">${esc(p.name.split(' ')[0])}</div></div>`;}).join('')}</div></div><div style="margin-bottom:16px"><div class="field-label" style="margin-bottom:7px">ASSIST (optional)</div><div style="display:flex;flex-wrap:wrap;gap:6px">${onFieldArr.filter(pid=>pid!==S.lgScorerId).map(pid=>{const p=S.players.find(x=>x.id===pid);if(!p)return'';const sel=S.lgAssistId===pid;return`<div class="pill-btn" style="background:${sel?'#EBF4FF':'var(--sf)'};color:${sel?'#1e40af':'var(--tx)'};border:0.5px solid ${sel?'#93c5fd':'var(--br)'}" onclick="S.lgAssistId=S.lgAssistId==='${pid}'?'':'${pid}';render()">${esc(p.name.split(' ')[0])}</div>`;}).join('')}<div class="pill-btn" style="background:${!S.lgAssistId?'#EBF4FF':'var(--sf)'};color:${!S.lgAssistId?'#1e40af':'var(--mu)'};border:0.5px solid ${!S.lgAssistId?'#93c5fd':'var(--br)'}" onclick="S.lgAssistId='';render()">No assist</div></div></div>`:''}
      <button onclick="confirmGoal()" style="width:100%;padding:14px;background:${S.lgTeam==='them'||S.lgScorerId?'var(--nv)':'#e5e7eb'};border-radius:9px;color:${S.lgTeam==='them'||S.lgScorerId?'var(--gd)':'#9ca3af'};font-weight:700;font-size:15px;cursor:${S.lgTeam==='them'||S.lgScorerId?'pointer':'default'};border:none;font-family:inherit">Log ${S.lgTeam==='us'?'goal':'conceded'}</button></div></div>`;
  }
  return html;
}

// ─── ACTIONS ──────────────────────────────────────────────────────────────────
function toggleTeamEdit(){S.editingTeam=!S.editingTeam;render();}
function saveTeamName(){const el=document.getElementById('team-name-input');if(el&&el.value.trim())S.teamName=el.value.trim();S.editingTeam=false;save();render();}
function saveTeamNameSettings(){const el=document.getElementById('team-name-settings');if(el&&el.value.trim())S.teamName=el.value.trim();save();render();}
function setTab(t){S.openProfileId=null;S.tab=t;render();}
function setFormat(f){const ff=Object.keys(FORMATS[f].formations)[0];S.format=f;S.formation=ff;S.lineup={};render();}
function setFormation(f){S.formation=f;S.lineup={};render();}
function setGameGoal(i,v){const g=[...S.gameGoals];g[i]=v;S.gameGoals=g;}
function openSettings(){S.showSettings=true;render();}
function closeSettings(){S.showSettings=false;S.restoreStatus='';render();}
function copyCode(){if(navigator.clipboard)navigator.clipboard.writeText(S.coachId).then(()=>alert('Sync code copied!')).catch(()=>alert('Your sync code: '+S.coachId));else alert('Your sync code: '+S.coachId);}
function openAddPlayer(){S.showAddPlayer=true;S.editPlayerId=null;S.formName='';S.formJersey='';S.formPos='MID';S.formAge='';S.formNotes='';render();}
function editPlayer(id){const p=S.players.find(x=>x.id===id);if(!p)return;S.showAddPlayer=true;S.editPlayerId=id;S.formName=p.name;S.formJersey=p.jersey;S.formPos=p.pos;S.formAge=p.age||'';S.formNotes=p.notes||'';render();}
function closeAddPlayer(){S.showAddPlayer=false;S.editPlayerId=null;render();}
function savePlayer(){if(!S.formName.trim())return;if(S.editPlayerId)S.players=S.players.map(p=>p.id===S.editPlayerId?{...p,name:S.formName.trim(),jersey:String(S.formJersey),pos:S.formPos,age:S.formAge,notes:S.formNotes}:p);else S.players=[...S.players,{id:uid(),name:S.formName.trim(),jersey:String(S.formJersey),pos:S.formPos,age:S.formAge,notes:S.formNotes,games:[]}];S.showAddPlayer=false;S.editPlayerId=null;save();render();}
function removePlayer(id){if(!confirm('Remove this player?'))return;S.players=S.players.filter(p=>p.id!==id);save();render();}
function openPicker(slotId){S.pickerSlot=slotId;render();}
function closePicker(){S.pickerSlot=null;render();}
function pickPlayer(pid){S.lineup={...S.lineup,[S.pickerSlot]:pid};S.pickerSlot=null;render();}
function clearSlot(){const nl={...S.lineup};delete nl[S.pickerSlot];S.lineup=nl;S.pickerSlot=null;render();}
function openSubPlanAdd(){S.showSubPlanAdd=true;S.spOutId='';S.spInId='';S.spMin='';S.spReason='';render();}
function closeSubPlanAdd(){S.showSubPlanAdd=false;render();}
function saveSubPlan(){if(!S.spOutId||!S.spInId)return;S.subPlan=[...S.subPlan,{id:uid(),outId:S.spOutId,inId:S.spInId,min:parseInt(S.spMin)||60,reason:S.spReason}];S.showSubPlanAdd=false;render();}
function removeSubPlan(id){S.subPlan=S.subPlan.filter(s=>s.id!==id);render();}
function startGame(){
  const assigned=Object.values(S.lineup).filter(Boolean);
  if(!assigned.length)return;
  S.onField=new Set(assigned);
  S.liveLog=[];S.gameSecs=0;S.confirmEnd=false;S.timerOn=true;S.phase='live';
  // Start every starter's clock at 0
  S.playerOnSince={};S.playerAccTime={};
  assigned.forEach(id=>{S.playerOnSince[id]=0;});
  render();startTimer();
}
function toggleTimer(){if(S.timerOn){stopTimer();S.timerOn=false;}else{S.timerOn=true;startTimer();}render();}
function showEndConfirm(){S.confirmEnd=true;render();}
function hideEndConfirm(){S.confirmEnd=false;render();}
function endGame(){
  stopTimer();S.timerOn=false;
  const starters=Object.values(S.lineup).filter(Boolean);
  const pt=computePlayingTime(starters,S.liveLog,S.gameSecs);
  const us=S.liveLog.filter(e=>e.type==='goal'&&e.team==='us').length;
  const them=S.liveLog.filter(e=>e.type==='goal'&&e.team==='them').length;
  const rec={id:uid(),date:S.matchDate||new Date().toLocaleDateString('en-US',{month:'short',day:'numeric'}),opponent:S.opponent||'Unknown',format:S.format,formation:S.formation,score:{us,them},result:us>them?'Won':us<them?'Lost':'Draw',dur:S.gameSecs,gameGoals:[...S.gameGoals],log:[...S.liveLog],pt,starters};
  S.games=[...S.games,rec];S.activeGameId=rec.id;S.idpNotes={};S.ptSaved=false;S.expandedPtPlayer=null;S.phase='report';S.confirmEnd=false;
  S.isDemo=false;
  save();render();
}
function openSubModal(){S.showSubModal=true;S.lsOutId='';S.lsInId='';render();}
function closeSubModal(){S.showSubModal=false;render();}
function confirmSub(){
  if(!S.lsOutId||!S.lsInId)return;
  const min=Math.floor(S.gameSecs/60);
  S.liveLog=[...S.liveLog,{id:uid(),type:'sub',min,outId:S.lsOutId,inId:S.lsInId}];
  const nof=new Set(S.onField);nof.delete(S.lsOutId);nof.add(S.lsInId);S.onField=nof;
  // Freeze the outgoing player's clock — add their current stint to their banked total
  S.playerAccTime[S.lsOutId]=(S.playerAccTime[S.lsOutId]||0)+(S.gameSecs-(S.playerOnSince[S.lsOutId]||0));
  delete S.playerOnSince[S.lsOutId];
  // Start the incoming player's clock from this moment (resumes if they were on before)
  S.playerOnSince[S.lsInId]=S.gameSecs;
  S.showSubModal=false;render();
}
function openGoal(team){S.showGoalModal=true;S.lgTeam=team;S.lgScorerId='';S.lgAssistId='';render();}
function closeGoalModal(){S.showGoalModal=false;render();}
function confirmGoal(){if(S.lgTeam==='us'&&!S.lgScorerId)return;const min=Math.floor(S.gameSecs/60);S.liveLog=[...S.liveLog,{id:uid(),type:'goal',min,team:S.lgTeam,scorerId:S.lgScorerId,assistId:S.lgAssistId}];S.showGoalModal=false;render();}
function togglePtPlayer(pid){S.expandedPtPlayer=S.expandedPtPlayer===pid?null:pid;render();}
function setIdpNote(pid,v){S.idpNotes[pid]=v;}
function saveToProfiles(){
  const g=S.games.find(x=>x.id===S.activeGameId);if(!g)return;
  const us=g.log.filter(e=>e.type==='goal'&&e.team==='us');const pt=g.pt||{};
  S.players=S.players.map(p=>{const mins=Math.round((pt[p.id]||0)/60);if(!mins)return p;const rec={id:g.id,date:g.date,opponent:g.opponent,result:g.result,mins,goals:us.filter(e=>e.scorerId===p.id).length,assists:us.filter(e=>e.assistId===p.id).length,note:S.idpNotes[p.id]||''};return{...p,games:[...(p.games||[]),rec]};});
  S.ptSaved=true;save();render();
}
function newGame(){S.phase='plan';S.opponent='';S.matchDate='';S.lineup={};S.subPlan=[];S.gameGoals=['','',''];S.liveLog=[];S.gameSecs=0;S.timerOn=false;S.onField=new Set();S.confirmEnd=false;S.activeGameId=null;render();}
function toggleProfile(id){S.openProfileId=S.openProfileId===id?null:id;render();}

// expose functions called from inline HTML handlers
window.toggleTeamEdit=toggleTeamEdit;
window.saveTeamName=saveTeamName;
window.saveTeamNameSettings=saveTeamNameSettings;
window.setTab=setTab;
window.setFormat=setFormat;
window.setFormation=setFormation;
window.setGameGoal=setGameGoal;
window.openSettings=openSettings;
window.closeSettings=closeSettings;
window.copyCode=copyCode;
window.openAddPlayer=openAddPlayer;
window.editPlayer=editPlayer;
window.closeAddPlayer=closeAddPlayer;
window.savePlayer=savePlayer;
window.removePlayer=removePlayer;
window.openPicker=openPicker;
window.closePicker=closePicker;
window.pickPlayer=pickPlayer;
window.clearSlot=clearSlot;
window.openSubPlanAdd=openSubPlanAdd;
window.closeSubPlanAdd=closeSubPlanAdd;
window.saveSubPlan=saveSubPlan;
window.removeSubPlan=removeSubPlan;
window.startGame=startGame;
window.toggleTimer=toggleTimer;
window.showEndConfirm=showEndConfirm;
window.hideEndConfirm=hideEndConfirm;
window.endGame=endGame;
window.openSubModal=openSubModal;
window.closeSubModal=closeSubModal;
window.confirmSub=confirmSub;
window.openGoal=openGoal;
window.closeGoalModal=closeGoalModal;
window.confirmGoal=confirmGoal;
window.togglePtPlayer=togglePtPlayer;
window.setIdpNote=setIdpNote;
window.saveToProfiles=saveToProfiles;
window.newGame=newGame;
window.toggleProfile=toggleProfile;
window.clearDemoAndStart=clearDemoAndStart;
window.exportData=exportData;
window.handleImportFile=handleImportFile;
window.restoreFromCode=restoreFromCode;
window.render=render; // needed so inline onclick="...;render()" can trigger a re-draw
window.S=S;

// ─── INIT ──────────────────────────────────────────────────────────────────────
load();
const hasRealData=localStorage.getItem('gdm_players');
if(!hasRealData){
  loadDemo();
  render();
} else {
  if(cloudEnabled()&&S.coachId){
    S.syncStatus='syncing';
    loadFromCloud(S.coachId).then(data=>{
      if(data){
        if(data.players)S.players=data.players;
        if(data.games)S.games=data.games;
        if(data.teamName)S.teamName=data.teamName;
        S.syncStatus='synced';
      }else{
        S.syncStatus='synced';
        if(S.players.length>0||S.games.length>0)scheduleSync();
      }
      render();
    }).catch(()=>{S.syncStatus='error';render();});
  } else {
    render();
  }
}
