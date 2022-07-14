var css = '.talk { background-color: #dcdcdc !important; }',
head = document.getElementsByTagName('head')[0],
style = document.createElement('style');
style.type = 'text/css';
if(style.styleSheet){
style.styleSheet.cssText = css;
}else{
style.appendChild(document.createTextNode(css));
}
head.appendChild(style);
