var auctionId;
var interval = 500;

var AutoLance = {

  counter: 0,

  init: function() {
    console.log('init');
    this.setAuctionId();
    $(document).on('dialogopen', '#modal_user_idle', $.proxy(this, 'handleIdle'));
    this.loop();
  },
  
  setAuctionId: function() {
    auctionId = (localStorage.getItem('auctionId') == null) ? S_GET('productid') : localStorage.getItem('auctionId')
  },


  bid: function() {
    window.location.href="javascript:bidnow("+auctionId+"); void 0";
    //bidnow(auctionId);
    this.counter++;
    console.warn('bid #'+this.counter+ ' made');
    clearInterval(this.interval);
    setTimeout(this.loop, 3000);
  },

  getTime: function() {
    var Xtime = $('#Bid'+auctionId).text();
    var Atime = Xtime.split(':');
    if (Atime[0] == 0 && Atime[1] == 0) {
      return Atime[2];
    };
    return 100000;
  },

  isBidable: function() {
    return this.getTime() < 2;
  },

  handleIdle: function() {
      console.log('Idle');
      $('[aria-labelledby=ui-dialog-title-modal_user_idle]').find('button').trigger('click');
  },

  loop: function() {
    AutoLance.interval = setInterval(function(){
      if (AutoLance.isBidable.call(AutoLance)) {
          AutoLance.bid();
          $(document).trigger('mousemove');
      }

    }, interval);
  }

}

function S_GET(id){
  var a = new RegExp(id+"=([^&#=]*)");
  return decodeURIComponent(a.exec(window.location.search)[1]);
}