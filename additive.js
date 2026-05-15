// ウェブオーディオ API コンテキストを生成する
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const oscs = Array.from({ length: 32 })
const gains = Array.from({ length: 32 })
const in_gains = [];
for (let i = 1; i <= 32; i++) {
  in_gains.push(
    document.getElementById(`in_gain${i}`)
  );
}
const mastergain = new GainNode(audioCtx, { gain: 0 });
const safetygain = new GainNode(audioCtx, { gain: 0.5 });
mastergain.connect(safetygain);
safetygain.connect(audioCtx.destination);


const in_freq = document.getElementById("in_freq");
for (let i =0; i<32; i+=1){
    oscs[i] = new OscillatorNode(audioCtx, {
      type: "sine",
      frequency: in_freq.value*(i+1)
    });

    gains[i] = new GainNode(audioCtx, {
       gain: Number(in_gains[i].value)/256   
    });

    oscs[i].connect(gains[i]);
    gains[i].connect(mastergain);
    oscs[i].start();
};

in_freq.addEventListener('input', function(){
  for (let i =0; i<32; i+=1){
    oscs[i].frequency.value = in_freq.value*(i+1);
  };
});

// ONOFF
let onoff=true;
const bt_power= document.getElementById("bt_power");
const in_mastergain = document.getElementById("in_mastergain");
bt_power.addEventListener("click", async() => {
  if (onoff){
    if (audioCtx.state === "suspended") {
      await audioCtx.resume();
    }
    mastergain.gain.value = in_mastergain.value/256;
    onoff=false;
    bt_power.style.color = "blue";
    wavegraph()
  }else{
    mastergain.gain.value = 0;
    onoff=true;
    bt_power.style.color = "gray";
  }
});


// gain eventlisteners
for (let i =0; i<32; i+=1){
  in_gains[i].addEventListener('input', function(){
    gains[i].gain.value = in_gains[i].value/256
    wavegraph()
  });
};


in_mastergain.addEventListener('input', function(){
    mastergain.gain.value = in_mastergain.value/256
});
  
// preset sounds
const bt_ps_sn = document.getElementById("bt_ps_sn");
bt_ps_sn.addEventListener('click', function(){
    in_gains[0].value = 256;
    gains[0].gain.value = 1;
  for (let i =1; i<32; i+=1){
    in_gains[i].value = 0;
    gains[i].gain.value = 0;
  };
    in_mastergain.value = 200;
  if (!onoff){
    mastergain.gain.value = 200/256;
  }
  wavegraph()
});

const bt_ps_sq = document.getElementById("bt_ps_sq");
bt_ps_sq.addEventListener('click', function(){
  for (let i =0; i<16; i+=1){
    in_gains[2*i].value = 256/(i+1);
    gains[2*i].gain.value = 1/(i+1);
    in_gains[2*i+1].value = 0;
    gains[2*i+1].gain.value = 0;
  };
    in_mastergain.value = 20;
  if (!onoff){
    mastergain.gain.value = 20/256;
  }
  wavegraph()
});

const bt_ps_tr = document.getElementById("bt_ps_tr");
bt_ps_tr.addEventListener('click', function(){
  for (let i =0; i<16; i+=1){
    in_gains[2*i].value = 256/(i+1)/(i+1);
    gains[2*i].gain.value = 1/(i+1)/(i+1);
    in_gains[2*i+1].value = 0;
    gains[2*i+1].gain.value = 0;
  };
    in_mastergain.value = 40;
  if (!onoff){
    mastergain.gain.value = 40/256;
  }
  wavegraph()
});


// graphing
const chartElement = document.getElementById('canvas');
var w = chartElement.width;
const h = chartElement.height;
const midW = w/2;
const midH = h/2;
const chartContext = chartElement.getContext('2d');
chartContext.strokeStyle = 'gray';
chartContext.lineWidth = 1;

function wavegraph(){
  chartContext.fillStyle = "#fff";
  chartContext.fillRect(0,0,w,h);
  chartContext.beginPath();

  let limitY = midH;
  let ys = [];
  for(let x = 0; x < w; x += 1){
    let y = 0;
    for (let i = 0; i < 32; i += 1){
      y += Math.sin((i+1) * x * Math.PI * 2/w) * in_gains[i].value * midH / 256;
    };
    if (y > limitY ){
      limitY = y;
    };
    ys.push(y);
  };
  for(let x = 0; x < w; x += 1){
    chartContext.lineTo(x, Number(midH - ys[x] * midH / limitY * 0.8));
  } 
  chartContext.stroke(); 
  safetygain.gain.value = 0.8 * midH / limitY 
};