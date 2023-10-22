import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as s,c as p,d as e,e as n,b as i,f as o}from"./app-5e151c65.js";const c="/WynncraftCNguide/assets/img/guild1.jpg",d="/WynncraftCNguide/assets/img/guildisland.jpg",h="/WynncraftCNguide/assets/img/guild2.jpg",u={},_=o('<p>公会在游戏中算是一个比较重要的系统，无论如何，找到一个公会、有一群可以在一起活动的成员，总归是件好事！</p><div class="hint-container tip"><p class="hint-container-title">提示</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>公会的信息可以在这里查看！</p></div><h2 id="创建公会" tabindex="-1"><a class="header-anchor" href="#创建公会" aria-hidden="true">#</a> 创建公会</h2><p>你可以在75级后创建自己的公会</p><p>你需要在<strong>Cinfras</strong>的公会大厅内支付20le以及6灵魂点来创建公会</p><p>创建时，你需要输入公会名称以及公会简称(这二者之间可以没有任何关系)</p><p>公会名称是公会的正式名称，在bossbar以及领地展示上都会显示公会名称</p><p>而公会简称是会展示在聊天窗口中玩家的名字前，同时一般用于玩家间的交流</p><p>公会简称的字符长度为3~4个，且仅限英文字母</p><h2 id="加入公会" tabindex="-1"><a class="header-anchor" href="#加入公会" aria-hidden="true">#</a> 加入公会</h2><p>与创建公会不同，你可以在任意等级加入任意公会(只要满足了公会的入会需求)</p><p>但是你不能主动加入公会</p><p>加入公会需要公会中一星及以上的玩家邀请你，方可加入</p><p>加入公会后有诸多好处</p><h3 id="每周任务" tabindex="-1"><a class="header-anchor" href="#每周任务" aria-hidden="true">#</a> 每周任务</h3><p>每周任务(guild obj)当且仅当你在任意公会中才能完成</p><p>与daily obj类似，guild obj在完成后会给予一个loot chest，且品质极高，可以开出eb、T5~T6粉末等优质奖励</p><p>guild obj会在北京时间每周一中午12点刷新，每次刷新时都会随机一个完成条件</p><p>guild obj相较于daily obj，会有更高的完成条件，同时存在Raid Completed的计数条件</p><blockquote><p>这个明明更简单...raid只用打1~3次即可完成</p></blockquote><p>与签到宝箱类似，你的guild obj连做次数同样会提高奖励的品质</p><h3 id="公会tome" tabindex="-1"><a class="header-anchor" href="#公会tome" aria-hidden="true">#</a> 公会Tome</h3><p>公会Tome会通过公会战、每周任务等途径产出，当产出后会存放在公会资源仓库中</p><p>4星及以上的公会管理可选择将公会tome分发给有需要的玩家</p><p>一般来说，各个公会内部一般会有领取限制条件，一般为周任务完成次数、公会战次数以及捐献经验等</p><p>公会Tome拥有独立的Tome槽，且为账号内共享(不可交易，但是可以迁到其他角色中)，一般会提供4~5点的属性点数或者一定的属性伤害</p><h3 id="公会岛屿" tabindex="-1"><a class="header-anchor" href="#公会岛屿" aria-hidden="true">#</a> 公会岛屿</h3><p>每个公会都会拥有属于自己的公会岛屿</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>公会的管理人员如果有好好打理公会岛屿的话，会是一个很不错的聚会的地方！</p><p>公会岛屿一样可以通过各地的热气球来进入</p><h2 id="公会等级" tabindex="-1"><a class="header-anchor" href="#公会等级" aria-hidden="true">#</a> 公会等级</h2><p>随着公会等级的提升，公会可以提高成员上限、获得新的银行槽位等等</p><p>公会经验的来源包括玩家捐献、公会战、每周任务产出等</p><div class="hint-container tip"><p class="hint-container-title">玩家要怎么捐献公会经验?</p><p>输入<code>/guild xp [number]</code>，即可将<strong>战斗经验</strong>的一部分(输入的百分比数值)转化为公会经验</p></div><h2 id="成员权限" tabindex="-1"><a class="header-anchor" href="#成员权限" aria-hidden="true">#</a> 成员权限</h2><p>公会中，一共拥有6种权限等级</p>',37),g=e("li",null,[e("p",null,[n("Recruit"),e("br"),n(" 普通成员，没有任何特殊权限")])],-1),b=e("br",null,null,-1),f=e("br",null,null,-1),m=e("br",null,null,-1),x=e("br",null,null,-1),y=e("br",null,null,-1),v=e("br",null,null,-1),j=e("br",null,null,-1),k=e("br",null,null,-1),C=e("br",null,null,-1),T=e("br",null,null,-1),w=e("br",null,null,-1),N=e("br",null,null,-1),E=o('<h2 id="公会银行" tabindex="-1"><a class="header-anchor" href="#公会银行" aria-hidden="true">#</a> 公会银行</h2><p>在<code>Emerald Merchant</code>的一定范围内，你可以打开公会银行</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>公会银行有两个等级的页面：Everyone及High Ranked</p><p>Everyone等级的银行任何人都可以使用</p><p>而High Ranked则需要三星及以上的权限才可以使用</p><p>任何取/出操作都会有纪录，请注意</p><p>需要注意的是，公会银行界面是点一下就会立即拿走/放进该格全部物品</p><p>因此如果你希望只拿出一个物品，需要先全部取出，在背包内分离一个后，再将剩余物品重新放回银行内</p><h2 id="公会战" tabindex="-1"><a class="header-anchor" href="#公会战" aria-hidden="true">#</a> 公会战</h2><p>关于公会战的内容，这里不再加以讲解，这是整个公会系统的核心所在(纯大便。。)</p><p>如果有兴趣，可以移步来自<strong>Tankofpacer</strong>大神的视频讲解</p>',12),H={href:"https://www.bilibili.com/video/BV1KD4y1Y7hH/",target:"_blank",rel:"noopener noreferrer"};function R(V,B){const t=a("HopeIcon"),l=a("ExternalLinkIcon");return s(),p("div",null,[_,e("ul",null,[g,e("li",null,[e("p",null,[n("Recruiter("),i(t,{icon:"star"}),n(")"),b,n(" 可以邀请其他玩家加入公会")])]),e("li",null,[e("p",null,[n("Captain("),i(t,{icon:"star"}),i(t,{icon:"star"}),n(")"),f,n(" 可以将成员的等级在Recruiter及以下调整"),m,n(" 可以对其他公会的领地发起攻击")])]),e("li",null,[e("p",null,[n("Strategist("),i(t,{icon:"star"}),i(t,{icon:"star"}),i(t,{icon:"star"}),n(")"),x,n(" 可以将成员的等级在Captain及以下调整，同时可以请离Captain及以下的成员"),y,n(" 可以发起攻击/发起防御"),v,n(" 可以改变领地上的产出奖励"),j,n(" 可以使用高等级的公会银行")])]),e("li",null,[e("p",null,[n("Chief("),i(t,{icon:"star"}),i(t,{icon:"star"}),i(t,{icon:"star"}),i(t,{icon:"star"}),n(")"),k,n(" 可以将成员的等级在Strategist及以下调整，同时可以请离Strategist及以下的成员"),C,n(" 可以编辑公会旗帜"),T,n(" 可以转送领地")])]),e("li",null,[e("p",null,[n("Owner("),i(t,{icon:"star"}),i(t,{icon:"star"}),i(t,{icon:"star"}),i(t,{icon:"star"}),i(t,{icon:"star"}),n(")"),w,n(" 公会的唯一创始人"),N,n(" 拥有所有权限")])])]),E,e("p",null,[e("a",H,[n("https://www.bilibili.com/video/BV1KD4y1Y7hH/"),i(l)])])])}const z=r(u,[["render",R],["__file","guild.html.vue"]]);export{z as default};
