var proxy_host=[
	"203.104.209.7","203.104.209.71","203.104.209.87","125.6.184.16","125.6.187.205","125.6.187.229","125.6.187.253","125.6.188.25","203.104.248.135","125.6.189.7","125.6.189.39","125.6.189.71","125.6.189.103","125.6.189.135","125.6.189.167","125.6.189.215","125.6.189.247","203.104.209.23","203.104.209.39","google.com","google.co.jp","google.com.tw","google.com.sg","google.com.hk","wikiwiki.jp","minori.ph","alicesoft.com","cosmiccute.com","akatsukiworks.com","akabeesoft2.com","akabeesoft3.com","hibiki-site.com","wheel-soft.com","tenco.cc","erogamescape.ddo.jp","youtube.com","g.e-hentai.org","s.ytimg.com","googlevideo.com","i.ytimg.com","g.doubleclick.net","simg.jp","twitter.com","facebook.com","blogblog.com","blogspot.com","fc2.com","fc2cn.com","getchu.com","twitpic.com","googleapis.com","gstatic.com","chenghuavideo.asia","googleusercontent.com","t.co","bit.ly","ggpht.com","twimg.com","blogimg.jp","dlsite.com","dlsite.jp","chrome.com","gar-req.labostudiogames.com","gar-res.labostudiogames.com","dmm.com","www.dmm.co.jp","my.dmm.co.jp","osapi.dmm.co.jp","sp.dmm.co.jp","point.dmm.co.jp","dlcp2.dmm.co.jp",
            "book.dmm.co.jp",
            "dlsoft.dmm.co.jp","gree.net","gree-pf.net","exhentai.org","app.kanpani.jp","img.kanpani.jp","img2.kanpani.jp","img3.kanpani.jp","img4.kanpani.jp","img5.kanpani.jp","www.kanpani.jp","www2.kanpani.jp","www3.kanpani.jp","www4.kanpani.jp","www5.kanpani.jp","login.kanpani.jp","www2-2.kanpani.jp","twishort.com","instagram.com","cdninstagram.com","facebook.net","s3-ap-northeast-1.amazonaws.com","mh-m.jp","203.104.209.55","goo.gl","touken-ranbu.jp","web.flower-knight-girls.co.jp","flower-help.s3-website-ap-northeast-1.amazonaws.com","kancolle-db.net","res.nimg.jp","googledrive.com","googlecode.com","googleusercontent.com","googletagmanager.com","google-analytics.com","snkncdn.swordlogic.com","shinken.swordlogic.com","203.104.209.102","millennium-war.net","ladsp.com","adclr.jp","spdmg-backend.i-mobile.co.jp","spcnv.i-mobile.co.jp","comcluster.cxense.com","flower-knight-girl.cdn.dmmgames.com","dugrqaqinbtcq.cloudfront.net","gmail.com","akamaihd.net","wikipedia.org","wikimedia.org","fbcdn.net","share.dmhy.org","aigis.gcwiki.info","nekopanda.blog.jp",
	"axis-i.smq.jp","axis-w.smq.jp","axis-a.smq.jp","senpro.dmmgames.com","img-r18-senpro.cdn.dmmgames.com","assets.shiropro-re.net","api.shiropro-re.net","nicovideo.jp","forum.gamer.com.tw","bahamut.com.tw","kamihimeproject.net","mbga.jp","gbf-wiki.com","granbluefantasy.jp","www.itchibanketsu.jp","asset.itchibanketsu.jp","img.itchibanketsu.jp","ujj.co.jp","d3v6wpctnoruyf.cloudfront.net","r.muvluv-sf.com","rcv.ixd.dmm.co.jp","pc-play.games.dmm.co.jp","pics.dmm.co.jp","p.dmm.co.jp","games.dmm.co.jp","personal.games.dmm.co.jp","avatar.games.dmm.co.jp","bungo.dmmgames.com","210.140.108.205","girlssymphony.s3-website-ap-northeast-1.amazonaws.com","d24otcxcmx8e7f.cloudfront.net","girlssymphony-elb-1750919323.ap-northeast-1.elb.amazonaws.com","yashiro.dmmgames.com","d2l18yyka3zu4o.cloudfront.net","db695krnj9c0z.cloudfront.net","tumblr.com","cache.girls-odyssey.com","app.girls-odyssey.com","203.104.248.5","accounts.dmm.co.jp","image01.seesaawiki.jp","image02.seesaawiki.jp","connect.mobage.jp"
];
function FindProxyForURL(url, host) {
    for(var i=0;i<proxy_host.length;i++){
		var ph=proxy_host[i];
		if(ph===host||new RegExp("\\."+ph + "$").test(host)){
			return "PROXY 127.0.0.1:19810";
		}
	}
    return "DIRECT";
}