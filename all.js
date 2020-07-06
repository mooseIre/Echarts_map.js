
let urlList=[
  '/china.js',
  '/province/anhui.js',
  '/province/aomen.js',
  '/province/beijing.js',
  '/province/chongqing.js',
  '/province/fujian.js',
  '/province/gansu.js',
  '/province/guangdong.js',
  '/province/guangxi.js',
  '/province/guizhou.js',
  '/province/hainan.js',
  '/province/hebei.js',
  '/province/heilongjiang.js',
  '/province/henan.js',
  '/province/hubei.js',
  '/province/hunan.js',
  '/province/jiangsu.js',
  '/province/jiangxi.js',
  '/province/jilin.js',
  '/province/liaoning.js',
  '/province/neimenggu.js',
  '/province/ningxia.js',
  '/province/qinghai.js',
  '/province/shandong.js',
  '/province/shanghai.js',
  '/province/shanxi.js',
  '/province/shanxi1.js',
  '/province/sichuan.js',
  '/province/taiwan.js',
  '/province/tianjin.js',
  '/province/xianggang.js',
  '/province/xinjiang.js',
  '/province/xizang.js',
  '/province/yunnan.js',
  '/province/zhejiang.js'
]
 function AddJavaScript(url){
  let scriptJSON=document.createElement('script');
  scriptJSON.type="text/javascript";
  var _url='https://javonhuang.github.io/onlineJS/map'+url;
  scriptJSON.src=_url;
  document.body.appendChild(scriptJSON);
 }

 urlList.forEach((item)=>{
  AddJavaScript(item);
 })