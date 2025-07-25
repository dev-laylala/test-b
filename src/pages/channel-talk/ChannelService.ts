class ChannelService {
  constructor() {
    this.loadScript();
  }

  loadScript() {
    const w: any = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function () {
      })('ChannelIO script included twice.');
    }
    const ch = function () {
      ch.c(arguments);
    };
    ch.q = [] as any;
    ch.c = function (args: any) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;

    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      const x = document.getElementsByTagName('script')[0];
      x.parentNode!.insertBefore(s, x);
    }

    if (document.readyState === 'complete') {
      l();
    } else if (w.attachEvent) {
      w.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  }


  boot(settings: any) {
    const w: any = window;
    w.ChannelIO('boot', settings);
  }

  setPage(url:string) {
    const w: any = window;
    w.ChannelIO('setPage', url);
  }

  shutdown() {
    const w: any = window;
    w.ChannelIO('shutdown');
  }
}

export default new ChannelService();
