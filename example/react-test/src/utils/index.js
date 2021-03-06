export function getUrlParam(name) {
  var reg = new RegExp('(^|)' + name + '=([^&]*)(&|$)');
  var r = window.location.href.match(reg);
  if (r !== null) {
    return decodeURI(r[2]);
  }
  return '';
}