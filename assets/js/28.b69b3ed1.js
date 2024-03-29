(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{430:function(t,a,e){"use strict";e.r(a);var i=e(2),r=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"为什么需要分库分表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要分库分表"}},[t._v("#")]),t._v(" 为什么需要分库分表")]),t._v(" "),a("img",{attrs:{width:"600",height:"313",align:"bottom",src:"https://cdn.nlark.com/yuque/0/2021/jpeg/375413/1624182974389-e1096630-5e5d-48c9-b1ad-c59802c7206c.jpeg"}}),t._v(" "),a("h3",{attrs:{id:"单用户表超过-500-万解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单用户表超过-500-万解决方案"}},[t._v("#")]),t._v(" 单用户表超过 500 万解决方案")]),t._v(" "),a("p",[a("em",[t._v("按照用户来拆分订单表，但是单个用户的订单量可能就超过500W，可以将订单数据划分成两大类型：分别是热数据和冷数据")])]),t._v(" "),a("ul",[a("li",[a("em",[t._v("热数据：3 个月内的订单数据，查询实时性较高；使用 mysql 进行存储")])]),t._v(" "),a("li",[a("em",[t._v("冷数据 A：3 个月 ~ 12 个月前的订单数据，查询频率不高；对于这类数据可以存储在ES中，了利用搜索引擎特性基本上可以做到较快的查询")])]),t._v(" "),a("li",[a("em",[t._v("冷数据 B：1 年前的订单数据，几乎不会查询，只有偶尔的查询需求;对于这类不经常查询的数据，可以存放到Hive中")])])]),t._v(" "),a("h3",{attrs:{id:"分片方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分片方案"}},[t._v("#")]),t._v(" 分片方案")]),t._v(" "),a("ol",[a("li",[a("em",[t._v("Hash取模方案（主流方案）：在我们设计系统之前，可以先预估一下大概这几年的订单量，如：4000 万。每张表我们可以容纳 500 万，也我们可以设计 8 张表进行存储")]),t._v(" "),a("ol",[a("li",[a("em",[t._v("优点：订单数据可以均匀的放到那 4 张表中，这样此订单进行操作时，就不会有热点问题")])]),t._v(" "),a("li",[a("em",[t._v("缺点：将来的数据迁移和扩容，会很难。数据不连续")])])])]),t._v(" "),a("li",[a("em",[t._v("Range范围方案")]),t._v(" "),a("ol",[a("li",[a("em",[t._v("优点：有利于扩容，不需要数据迁移")])]),t._v(" "),a("li",[a("em",[t._v("缺点：有热点问题（有些节点可能会被频繁查询压力较大，热数据节点就成为了整个集群的瓶颈。而有些节点可能存的是历史数据，很少需要被查询到）")])])])]),t._v(" "),a("li",[a("em",[t._v("分组思想：先按范围进行分组。比如 0-4000 万分到 group1，然后 group1 中再进行 Hash 分，这样当扩容的时候，直接新增一个 group2，存储 4000 万到 8000 万的数据。然后每个组里的表或者库再进行 Hash 分（也会有热点问题，只不过之前热点问题是在一张表上，现在变成了一个group，一般不用这种）")])]),t._v(" "),a("li",[a("em",[t._v("一致性hash")])])]),t._v(" "),a("h2",{attrs:{id:"具体方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体方案"}},[t._v("#")]),t._v(" 具体方案")]),t._v(" "),a("h3",{attrs:{id:"水平分库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#水平分库"}},[t._v("#")]),t._v(" 水平分库")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/375413/1624093800883-635fc216-2371-46f5-bfc2-217f2af78ddd.png#clientId=u3b417462-bd11-4&from=paste&height=259&id=u40591615&name=image.png&originHeight=259&originWidth=640&originalType=binary&ratio=1&size=102305&status=done&style=none&taskId=u9871c16a-ca96-48e1-9ccb-7e7432214ad&width=640",alt:"image.png"}})]),t._v(" "),a("p",[a("em",[t._v("概念：以字段 "),a("strong",[t._v("（partition key）")]),t._v(" 为依据，按照一定策略（hash、range等），将一个库中的数据拆分到多个库中")])]),t._v(" "),a("p",[a("em",[t._v("结果：")])]),t._v(" "),a("ul",[a("li",[a("em",[t._v("每个库的结构都一样")])]),t._v(" "),a("li",[a("em",[t._v("每个库的数据都不一样，没有交集")])]),t._v(" "),a("li",[a("em",[t._v("所有库的并集是全量数据")])])]),t._v(" "),a("h3",{attrs:{id:"水平分表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#水平分表"}},[t._v("#")]),t._v(" 水平分表")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/375413/1624093897024-8db38395-ed95-42c7-8d4e-ff36c9cfa542.png#clientId=u4045d601-3ce1-4&from=paste&height=286&id=u98cbae79&name=image.png&originHeight=286&originWidth=327&originalType=binary&ratio=1&size=52787&status=done&style=none&taskId=udf7ee12e-598b-45df-9be0-4a038c9362a&width=327",alt:"image.png"}})]),t._v(" "),a("p",[a("em",[t._v("同水平分库")])]),t._v(" "),a("h3",{attrs:{id:"垂直分库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#垂直分库"}},[t._v("#")]),t._v(" 垂直分库")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/375413/1624093960681-3235cf5d-0efb-4846-865c-fb542b4fa83a.png#clientId=u575dd28a-c697-4&from=paste&height=228&id=uf3ef6900&name=image.png&originHeight=228&originWidth=463&originalType=binary&ratio=1&size=94235&status=done&style=none&taskId=u85bc83b0-b78e-4325-ae00-67cd9a00072&width=463",alt:"image.png"}})]),t._v(" "),a("p",[a("em",[t._v("概念：以表为依据，按照业务归属不同，将不同的表拆分到不同的库中")]),t._v(" "),a("em",[t._v("结果：")])]),t._v(" "),a("ul",[a("li",[a("em",[t._v("每个库的结构都不一样")])]),t._v(" "),a("li",[a("em",[t._v("每个库的数据也不一样，没有交集")])]),t._v(" "),a("li",[a("em",[t._v("所有库的并集是全量数据")])])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("分析：到这一步，基本上就可以服务化了。例如，随着业务的发展一些公用的配置表、字典表等越来越多，这时可以将这些表拆到单独的库中，甚至可以服务化（例如交易库和交易日志库可以算作垂直分库）")])])]),t._v(" "),a("h3",{attrs:{id:"垂直分表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#垂直分表"}},[t._v("#")]),t._v(" 垂直分表")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/375413/1624094036455-78a5272c-14d1-4187-936d-f834045ba7f6.png#clientId=u575dd28a-c697-4&from=paste&height=206&id=uec4095f5&name=image.png&originHeight=206&originWidth=556&originalType=binary&ratio=1&size=94128&status=done&style=none&taskId=u6d61a839-473d-49d9-8c0c-a001d2408b0&width=556",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"分库分表工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分库分表工具"}},[t._v("#")]),t._v(" 分库分表工具")]),t._v(" "),a("ul",[a("li",[a("p",[a("em",[t._v("Sharding-jdbc")]),t._v(" "),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/jpeg/375413/1624179443004-c1ec06da-ad90-4e1b-bdd1-69e25214588e.jpeg",width:"300",height:"213",align:"bottom"}})])]),t._v(" "),a("li",[a("p",[a("em",[t._v("mycat")]),t._v(" "),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/jpeg/375413/1624179358446-b1816a96-2eca-4a25-99b1-75ae557851b8.jpeg",width:"300",height:"213",align:"bottom"}})])])]),t._v(" "),a("p",[a("em",[t._v("对比：")])]),t._v(" "),a("ol",[a("li",[a("em",[t._v("mycat是一个中间件的第三方应用，sharding-jdbc是一个jar包")])]),t._v(" "),a("li",[a("em",[t._v("使用mycat时不需要改代码，而使用sharding-jdbc时需要修改代码")])])]),t._v(" "),a("h2",{attrs:{id:"分库分表问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分库分表问题"}},[t._v("#")]),t._v(" 分库分表问题")]),t._v(" "),a("h3",{attrs:{id:"水平分表-非partition-key的查询问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#水平分表-非partition-key的查询问题"}},[t._v("#")]),t._v(" 水平分表：非partition key的查询问题")]),t._v(" "),a("p",[a("em",[t._v("（查询订单号为413742291618304的订单，不指定公司）")])]),t._v(" "),a("p",[a("em",[t._v("解决方案1：映射法（这真不是个好方法，虽然映射表只有2个字段）")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/375413/1624095037847-ca1c0039-dcb0-4c2a-80a6-02dce6acb74d.png#clientId=u8647c668-af43-4&from=paste&height=288&id=u586c9764&name=image.png&originHeight=288&originWidth=510&originalType=binary&ratio=1&size=91095&status=done&style=none&taskId=ub8808f80-db1e-4b18-bba8-20e6447ca38&width=510",alt:"image.png"}})]),t._v(" "),a("p",[a("em",[t._v("解决方案2：基因法（不错）")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/375413/1624173356987-d0814979-300c-4591-8398-1148573e3460.png#clientId=u3ae0ded1-87b6-4&from=ui&id=uf4f88e3d&name=D48.png&originHeight=250&originWidth=581&originalType=binary&ratio=1&size=68149&status=done&style=none&taskId=u43b6f698-54a3-4b75-9464-60dbab13457",alt:"D48.png"}})]),t._v(" "),a("p",[t._v("如果 partition key 是uid，tid字段不是partition key,可以把分库基因组装到tid的末尾；当使用tid去查询时，可以通过基因先确定分库号")]),t._v(" "),a("h3",{attrs:{id:"水平分库分表-非partition-key跨库跨表分页查询问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#水平分库分表-非partition-key跨库跨表分页查询问题"}},[t._v("#")]),t._v(" 水平分库分表：非partition key跨库跨表分页查询问题")]),t._v(" "),a("ol",[a("li",[a("em",[t._v("用 NoSQL法 解决（ES等）")])]),t._v(" "),a("li",[a("em",[t._v("order by ... limit 100：从多个库中查查出来，然后在内存里再排一次序，再分一次页")])])]),t._v(" "),a("h3",{attrs:{id:"扩容问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩容问题"}},[t._v("#")]),t._v(" 扩容问题")]),t._v(" "),a("p",[a("em",[t._v("为什么通常是扩容2倍？")])]),t._v(" "),a("p",[a("em",[t._v("A：如果是分库分表结构；")]),t._v(" "),a("em",[t._v("分库号 = companyId%库数，这样会有一半分companyId保存在原来的库")]),t._v(" "),a("em",[t._v("分表号 = companyId%表数，这样会有一半分companyId保存在原来的表")]),t._v(" "),a("em",[t._v("可以少迁移部分数据")])]),t._v(" "),a("p",[a("em",[t._v("扩容方案：")])]),t._v(" "),a("ol",[a("li",[a("em",[t._v("停机迁移")])]),t._v(" "),a("li",[a("em",[t._v("双写迁移方案（通用做法）")]),t._v(" "),a("ul",[a("li",[t._v("配置双写")])])])]),t._v(" "),a("img",{attrs:{width:"500",height:"253",align:"bottom",src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1676878957968-2c4f4eff-c01b-4478-b832-a9a06d2cd04d.png#averageHue=%23f2f4ee&clientId=u39429d78-84aa-4&from=paste&height=272&id=u40a9a1d1&name=image.png&originHeight=544&originWidth=1220&originalType=binary&ratio=2&rotation=0&showTitle=false&size=143813&status=done&style=none&taskId=u4a70cf2e-98cd-4980-90aa-3041228619c&title=&width=610"}}),t._v(" "),a("ul",[a("li",[t._v("新库同步老库数据")])]),t._v(" "),a("img",{attrs:{width:"600",height:"453",align:"bottom",src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1676878969777-0aadf6f3-b567-48b0-a7fa-87cc7d5e8df6.png#averageHue=%23f0eed9&clientId=u39429d78-84aa-4&from=paste&height=435&id=u664eeb98&name=image.png&originHeight=870&originWidth=1204&originalType=binary&ratio=2&rotation=0&showTitle=false&size=242403&status=done&style=none&taskId=ucd1db241-8d1f-4ad4-875f-c086c80c37c&title=&width=602"}}),t._v(" "),a("ul",[a("li",[t._v("后台临时工具迁移完数据后，要再次检查单库单表中的数据是否和分库分表中的数据一模一样，如果一样，则迁移结束；否则，判断是否覆盖分库分表中的数据；依次循环往复，直到一模一样")]),t._v(" "),a("li",[t._v("修改配置，去掉单库单表的数据源，读写都在分库分表上")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("em",[t._v("升级从库法：从库同步主库的所有数据，然后从库升级为主库，然后把从库中不属于自己的数据删除")])])]),t._v(" "),a("h3",{attrs:{id:"分布式事务问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务问题"}},[t._v("#")]),t._v(" 分布式事务问题")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/distributed/distributed-transaction.html"}},[t._v("点击查看")])],1),t._v(" "),a("h3",{attrs:{id:"全局唯一码id问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局唯一码id问题"}},[t._v("#")]),t._v(" 全局唯一码ID问题")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/distributed/distributed-id.html"}},[t._v("点击查看")])],1)])}),[],!1,null,null,null);a.default=r.exports}}]);