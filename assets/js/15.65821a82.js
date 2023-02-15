(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{411:function(a,t,i){"use strict";i.r(t);var s=i(2),e=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"basic-paxos的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-paxos的问题"}},[a._v("#")]),a._v(" Basic Paxos的问题")]),a._v(" "),t("p",[a._v("上一节介绍了 Basic Paxos 的活锁问题，两个提案节点互不相让地争相提出自己的提案，抢占同一个值的修改权限，导致整个系统在持续性地“反复横跳”，外部看起来就像被锁住了一样。")]),a._v(" "),t("p",[a._v("此外，笔者还讲述过一个观点，分布式共识的复杂性，主要来源于网络的不可靠与请求的可并发两大因素，活锁问题与许多 Basic Paxos 异常场景中所遭遇的麻烦，都可以看作是源于任何一个提案节点都能够完全平等地、与其他节点并发地提出提案而带来的复杂问题。为此，Lamport 专门设计（“专门设计”的意思是在 Paxos 的论文中 Lamport 随意提了几句可以这么做）了一种 Paxos 的改进版本 “Multi Paxos” 算法，希望能够找到一种两全其美的办法，既不破坏 Paxos 中“众节点平等”的原则，又能在提案节点中实现主次之分，限制每个节点都有不受控的提案权利，这两个目标听起来似乎是矛盾的，但现实世界中的选举就很符合这种在平等节点中挑选意见领袖的情景。")]),a._v(" "),t("h2",{attrs:{id:"multi-paxos-的改进"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multi-paxos-的改进"}},[a._v("#")]),a._v(" Multi Paxos 的改进")]),a._v(" "),t("p",[a._v("Multi Paxos 对 Basic Paxos 的核心改进是增加了“选主”的过程，提案节点会通过定时轮询（心跳），确定当前网络中的所有节点里是否存在有一个主提案节点，一旦没有发现主节点存在，节点就会在心跳超时后使用 Basic Paxos 中定义的准备、批准的两轮网络交互过程，向所有其他节点广播自己希望竞选主节点的请求，希望整个分布式系统对“由我作为主节点”这件事情协商达成一致共识，如果得到了决策节点中多数派的批准，便宣告竞选成功。当选主完成之后，除非主节点失联之后发起重新竞选，否则从此往后，就只有主节点本身才能够提出提案。")]),a._v(" "),t("p",[a._v("此时，无论哪个提案节点接收到客户端的操作请求，都会将请求转发给主节点来完成提案，而主节点提案的时候，也就无需再次经过准备过程，因为可以视作是经过选举时的那一次准备之后，后续的提案都是对相同提案 ID 的一连串的批准过程。也可以通俗理解为选主过后，就不会再有其他节点与它竞争，相当于是处于无并发的环境当中进行的有序操作，所以此时系统中要对某个值达成一致，只需要进行一次批准的交互即可，如图 6-6 所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1676108419044-a1904866-d814-419b-a69f-fcce1e356a96.png#averageHue=%23f5f5f5&clientId=ubceb9faa-303a-4&from=paste&height=180&id=ub13b4435&name=image.png&originHeight=360&originWidth=786&originalType=binary&ratio=2&rotation=0&showTitle=false&size=31727&status=done&style=none&taskId=ud37e4ef5-208c-41c4-944f-8f838e1b7c7&title=&width=393",alt:"image.png"}})]),a._v(" "),t("p",[a._v("可能有人注意到这时候的二元组(id, value)已经变成了三元组(id, i, value)，这是因为需要给主节点增加一个“任期编号”，这个编号必须是严格单调递增的，以应付主节点陷入网络分区后重新恢复，但另外一部分节点仍然有多数派，且已经完成了重新选主的情况，此时必须以任期编号大的主节点为准。当节点有了选主机制的支持，在整体来看，就可以进一步简化节点角色，不去区分提案、决策和记录节点了，统统以“节点”来代替，节点只有主（Leader）和从（Follower）的区别，此时协商共识的时序图如图 6-7 所示。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1676108499102-b032adc0-74d1-4b82-907b-61f30730275b.png#averageHue=%23f7f7f7&clientId=ubceb9faa-303a-4&from=paste&height=248&id=uacb64cef&name=image.png&originHeight=495&originWidth=812&originalType=binary&ratio=2&rotation=0&showTitle=false&size=37178&status=done&style=none&taskId=ua767f01d-a84f-4366-afb2-a5d9e6ff2fb&title=&width=406",alt:"image.png"}})]),a._v(" "),t("p",[a._v("在这个理解的基础上，我们换一个角度来重新思考“分布式系统中如何对某个值达成一致”这个问题，可以把该问题划分做三个子问题来考虑，可以证明当以下三个问题同时被解决时，即等价于达成共识：")]),a._v(" "),t("ul",[t("li",[a._v("如何选主（Leader Election）")]),a._v(" "),t("li",[a._v("如何把数据复制到各个节点上（Entity Replication）")]),a._v(" "),t("li",[a._v("如何保证过程是安全的（Safety）")])]),a._v(" "),t("h3",{attrs:{id:"选主"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选主"}},[a._v("#")]),a._v(" 选主")]),a._v(" "),t("p",[a._v("选主问题尽管还涉及许多工程上的细节，譬如心跳、随机超时、并行竞选，等等，但要只论原理的话，如果你已经理解了 Paxos 算法的操作步骤，相信对选主并不会有什么疑惑，因为这本质上仅仅是分布式系统对“谁来当主节点”这件事情的达成的共识而已，我们在前一节已经花了数千字来讲述分布式系统该如何对一件事情达成共识，这里就不重复赘述了，下面直接来解决数据（Paxos 中的提案、Raft 中的日志）在网络各节点间的复制问题。")]),a._v(" "),t("p",[t("strong",[a._v("选主：使用 Basic Paxos 正好！！！原来如此")])]),a._v(" "),t("h3",{attrs:{id:"复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制"}},[a._v("#")]),a._v(" 复制")]),a._v(" "),t("p",[a._v("在正常情况下，当客户端向主节点发起一个操作请求，譬如提出“将某个值设置为 X”，此时主节点将 X 写入自己的变更日志，但先不提交，接着把变更 X 的信息在下一次心跳包中广播给所有的从节点，并要求从节点回复确认收到的消息，从节点收到信息后，将操作写入自己的变更日志，然后给主节点发送确认签收的消息，主节点收到过半数的签收消息后，提交自己的变更、应答客户端并且给从节点广播可以提交的消息，从节点收到提交消息后提交自己的变更，数据在节点间的复制宣告完成。")]),a._v(" "),t("p",[a._v("在异常情况下，网络出现了分区，部分节点失联，但只要仍能正常工作的节点的数量能够满足多数派（过半数）的要求，分布式系统就仍然可以正常工作，这时候数据复制过程如下：")]),a._v(" "),t("ul",[t("li",[a._v("假设有 S1、S2、S3、S4、S5五个节点，S1是主节点，由于网络故障，导致 S1、S2和 S3、S4、S5之间彼此无法通信，形成网络分区。")]),a._v(" "),t("li",[a._v("一段时间后，S3、S4、S5三个节点中的某一个（譬如是 S3）最先达到心跳超时的阈值，获知当前分区中已经不存在主节点了，它向所有节点发出自己要竞选的广播，并收到了 S4、S5节点的批准响应，加上自己一共三票，即得到了多数派的批准，竞选成功，此时系统中同时存在 S1和 S3两个主节点，但由于网络分区，它们不会知道对方的存在。")]),a._v(" "),t("li",[a._v("这种情况下，客户端发起操作请求：\n"),t("ul",[t("li",[a._v("如果客户端连接到了 S1、S2之一，都将由 S1处理，但由于操作只能获得最多两个节点的响应，不构成多数派的批准，所以任何变更都无法成功提交。")]),a._v(" "),t("li",[a._v("如果客户端连接到了 S3、S4、S5之一，都将由 S3处理，此时操作可以获得最多三个节点的响应，构成多数派的批准，是有效的，变更可以被提交，即系统可以继续提供服务。")]),a._v(" "),t("li",[a._v("事实上，以上两种“如果”情景很少机会能够并存。网络分区是由于软、硬件或者网络故障而导致的，内部网络出现了分区，但两个分区仍然能分别与外部网络的客户端正常通信的情况甚为少见。更多的场景是算法能容忍网络里下线了一部分节点，按照这个例子来说，如果下线了两个节点，系统正常工作，下线了三个节点，那剩余的两个节点也不可能继续提供服务了。")])])])]),a._v(" "),t("h3",{attrs:{id:"安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[a._v("#")]),a._v(" 安全")]),a._v(" "),t("ol",[t("li",[a._v("保证选主的结果一定是有且只有唯一的一个主节点，不可能同时出现两个主节点")]),a._v(" "),t("li",[a._v("保证选主过程是一定可以在某个时刻能够结束的（由前面对活锁的介绍可以得知，选主如果使用 Basic Paxos ，可能会无法终止，"),t("strong",[a._v("所以 Raft 算法中有解决这个问题吗？现在还不知道")]),a._v("）")])]),a._v(" "),t("h2",{attrs:{id:"写在后面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在后面"}},[a._v("#")]),a._v(" 写在后面")]),a._v(" "),t("p",[a._v("以上这种把共识问题分解为“Leader Election”、“Entity Replication”和“Safety”三个问题来思考、解决的解题思路，即“Raft 算法”，ZooKeeper 的 ZAB 算法与 Raft 的思路也非常类似，这些算法都被认为是 Multi Paxos 的等价派生实现")]),a._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://icyfenix.cn/distribution/consensus/raft.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://icyfenix.cn/distribution/consensus/raft.html"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);