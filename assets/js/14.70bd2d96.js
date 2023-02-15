(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{413:function(t,s,i){"use strict";i.r(s);var a=i(2),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"title"}),s("p",[t._v("redis 集群会使用该算法在集群内传播一些数据")])]),s("h2",{attrs:{id:"起源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#起源"}},[t._v("#")]),t._v(" 起源")]),t._v(" "),s("p",[t._v("Gossip 最早由施乐公司（Xerox，现在可能很多人不了解施乐了，或只把施乐当一家复印产品公司看待，这家公司是计算机许多关键技术的鼻祖，图形界面的发明者、以太网的发明者、激光打印机的发明者、MVC 架构的提出者、RPC 的提出者、BMP 格式的提出者……） Palo Alto 研究中心在论文《Epidemic Algorithms for Replicated Database Maintenance》中提出的一种用于分布式数据库在多节点间复制同步数据的算法。从论文题目中可以看出，最初它是被称作“流行病算法”（Epidemic Algorithm）的，只是不太雅观，今天 Gossip 这个名字已经用得更为普遍了，除此以外，它还有“流言算法”、“八卦算法”、“瘟疫算法”等别名，这些名字都是很形象化的描述，反应了 Gossip 的特点：要同步的信息如同流言一般传播、病毒一般扩散。")]),t._v(" "),s("h2",{attrs:{id:"具体过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具体过程"}},[t._v("#")]),t._v(" 具体过程")]),t._v(" "),s("p",[t._v("下面，我们来了解 Gossip 的具体工作过程。相比 Paxos、Raft 等算法，Gossip 的过程十分简单，它可以看作是以下两个步骤的简单循环：")]),t._v(" "),s("ul",[s("li",[t._v("如果有某一项信息需要在整个网络中所有节点中传播，那从信息源开始，选择一个固定的传播周期（譬如 1 秒），随机选择它相连接的 k 个节点（称为 Fan-Out）来传播消息。")]),t._v(" "),s("li",[t._v("每一个节点收到消息后，如果这个消息是它之前没有收到过的，将在下一个周期内，选择除了发送消息给它的那个节点外的其他相邻 k 个节点发送相同的消息，直到最终网络中所有节点都收到了消息，尽管这个过程需要一定时间，但是理论上最终网络的所有节点都会拥有相同的消息。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/gif/375413/1676110414263-0047667a-e9fd-4208-b78d-4f9f4d3cb248.gif#averageHue=%23f7f7f7&clientId=u7c36f763-6223-4&from=ui&id=u523506b9&name=gossip.0eb19e80.gif&originHeight=401&originWidth=600&originalType=binary&ratio=2&rotation=0&showTitle=false&size=252915&status=done&style=none&taskId=ua5f45c24-ae7f-4d17-938b-8ae5f332055&title=",alt:"gossip.0eb19e80.gif"}})]),t._v(" "),s("h2",{attrs:{id:"优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("p",[t._v("上图是 Gossip 传播过程的示意图，根据示意图和 Gossip 的过程描述，我们很容易发现 Gossip 对网络节点的连通性和稳定性几乎没有任何要求，它一开始就将网络某些节点只能与一部分节点部分连通（Partially Connected Network）而不是以全连通网络（Fully Connected Network）作为前提；能够容忍网络上节点的随意地增加或者减少，随意地宕机或者重启，新增加或者重启的节点的状态最终会与其他节点同步达成一致。Gossip 把网络上所有节点都视为平等而普通的一员，没有任何中心化节点或者主节点的概念，这些特点使得 Gossip 具有极强的鲁棒性，而且非常适合在公众互联网中应用。")]),t._v(" "),s("h2",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("p",[t._v("同时我们也很容易找到 Gossip 的缺点，消息最终是通过多个轮次的散播而到达全网的，因此它必然会存在全网各节点状态不一致的情况，而且由于是随机选取发送消息的节点，所以尽管可以在整体上测算出统计学意义上的传播速率，但对于个体消息来说，无法准确地预计到需要多长时间才能达成全网一致。另外一个缺点是消息的冗余，同样是由于随机选取发送消息的节点，也就不可避免的存在消息重复发送给同一节点的情况，增加了网络的传输的压力，也给消息节点带来额外的处理负载。")]),t._v(" "),s("h2",{attrs:{id:"反熵和传谣"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反熵和传谣"}},[t._v("#")]),t._v(" 反熵和传谣")]),t._v(" "),s("p",[t._v("Gossip 设计了两种可能的消息传播模式：反熵（Anti-Entropy）和传谣（Rumor-Mongering），这两个名字都挺文艺的。熵（Entropy）是生活中少见但科学中很常用的概念，它代表着事物的混乱程度。反熵的意思就是反混乱，以提升网络各个节点之间的相似度为目标，所以在反熵模式下，会同步节点的全部数据，以消除各节点之间的差异，目标是整个网络各节点完全的一致。但是，在节点本身就会发生变动的前提下，这个目标将使得整个网络中消息的数量非常庞大，给网络带来巨大的传输开销。而传谣模式是以传播消息为目标，仅仅发送新到达节点的数据，即只对外发送变更信息，这样消息数据量将显著缩减，网络开销也相对较小。")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://icyfenix.cn/distribution/consensus/gossip.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://icyfenix.cn/distribution/consensus/gossip.html"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);