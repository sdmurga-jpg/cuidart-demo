self.addEventListener('install',function(){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('notificationclick',function(e){
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(function(l){
    for(var i=0;i<l.length;i++){ if('focus' in l[i]) return l[i].focus(); }
    if(self.clients.openWindow) return self.clients.openWindow('./');
  }));
});
self.addEventListener('push',function(e){
  var d={}; try{ d=e.data?e.data.json():{}; }catch(x){}
  e.waitUntil(self.registration.showNotification(d.title||'CuidarT',{body:d.body||''}));
});
