// /plugins/baidu.js

export default () => {
    const hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?488729b5876cef8310fd59da6300b362";
    const s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  }